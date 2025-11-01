import { CombinedError, createClient, errorExchange, fetchExchange, Operation } from '@urql/core';
import { authExchange } from '@urql/exchange-auth';
import { cacheExchange, Cache } from '@urql/exchange-graphcache';
import { requestPolicyExchange } from '@urql/exchange-request-policy';
import { TFunction } from 'i18next';
import { LastErrorState } from './graphql';

const urqlCacheTimeToLive = 5 * 60 * 1000; // in milliseconds

// function urqlUpdate<Result, Query>(cache: Cache, qi: QueryInput, result: any, fn: (r: Result, q: Query) => Query) {
//   return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
// }

const ApiUrl = 'https://automatelio-api-small-paper-2188.fly.dev/graphql/';

function invalidateCacheForQueryField(cache: Cache, queryFieldName: string){
  const associatedQueries = cache.inspectFields("Query").filter((q)=> q.fieldName === queryFieldName);
  associatedQueries.forEach(({fieldName, arguments: variables}) => {
    cache.invalidate("Query", fieldName, variables ?? undefined)
  });
}


export function createUrqlClient(
  getToken: () => Promise<string | null>,
  translate: TFunction,
  formatDateTime: (value: string | null | undefined) => string,
  lastError: React.MutableRefObject<LastErrorState>,
  onMaintenanceErrorCallbackFn: () => void,
) {
  return createClient({
    url: ApiUrl,
    exchanges: [
      errorExchange({
        onError: (error: CombinedError, operation: Operation) => {
          let errorTitle = translate('errors.titles.communicationIssue');
          let errorMsg = error.message;

          if (error.response?.status === 503) {
            // Service Unavailable -> Maintenance Mode
            onMaintenanceErrorCallbackFn();
            return;
          }

          // extract exact error if graphql and translate
          if (error.response?.status === 403) {
            errorMsg = translate('errors.user.unknown');
            errorTitle = translate('errors.titles.loginFailed');
          }

          if (error.graphQLErrors.length > 0) {
            errorMsg = error.graphQLErrors.map((e) => translate(`errors.${e.message}`)).join(', ');
          }

          if (error.graphQLErrors.some((e) => e.extensions?.code === 'HC0045')) {
            errorMsg = translate('errors.apiTimeout');
          }

          if (error.message === '[Network] Failed to fetch') {
            errorMsg = translate('errors.api');
          }

          if (error.graphQLErrors.some((e) => e.message === 'validation.concurrency')) {
            errorTitle = translate('errors.titles.concurrencyIssue');
          }

          if (error.graphQLErrors.some((e) => e.message === 'actionBlocked')) {
            errorTitle = translate('errors.titles.actionBlocked');
          }

          if (error.graphQLErrors.some((e) => e.message === 'auditReportReviewSignoffBlocked')) {
            errorTitle = translate('errors.titles.auditReportReviewSignoffBlocked');
            errorMsg = translate('errors.auditReportReviewSignoffBlocked');
          }

          if (error.graphQLErrors.some((e) => e.extensions?.code === 'AUTH_NOT_AUTHENTICATED')) {
            // if the error is a auth error the token might be expired
            // reload the entire application
            // window.location.reload();
          }
        },
      }),
      requestPolicyExchange({ ttl: urqlCacheTimeToLive }),
      cacheExchange({
        keys: {
        },
        updates: {
          Mutation: {
            adminAvailableCalendarEventsProfessional: (_, __, cache) => {
              invalidateCacheForQueryField(cache, "availableCalendarEventsForAdmin")
            },
            approveCalendarRequest:  (_, __, cache) => {
              invalidateCacheForQueryField(cache, "calendarRequestsByProfessional")
              invalidateCacheForQueryField(cache, "calendarEventsByProfessional")
            },
            cancelCalendarEvent:  (_, __, cache) => {
              invalidateCacheForQueryField(cache, "calendarEventsByRequester")
              invalidateCacheForQueryField(cache, "calendarEventsByProfessional")
            },
            createOrUpdateUser: (_, __, cache) => {
              invalidateCacheForQueryField(cache, "createOrUpdateUser")
              invalidateCacheForQueryField(cache, "whoAmI")
            },
            deleteCalendarRequest:  (_, __, cache) => {
              invalidateCacheForQueryField(cache, "calendarRequestsByRequester")
              invalidateCacheForQueryField(cache, "calendarEventsByRequester")
            },
            sendNotificationToUser: (_, __, cache) => {
              invalidateCacheForQueryField(cache, "calendarRequestsByRequester")
              invalidateCacheForQueryField(cache, "calendarEventsByRequester")
            },
          },
        },
        
      }),
      authExchange(async (utils) => {
        let token = await getToken();
        let tokenFetchTime = new Date().getTime();

        return {
          addAuthToOperation(operation) {
            if (!token) {
              return operation;
            }

            return utils.appendHeaders(operation, {
              Authorization: `Bearer ${token}`,
            });
          },

          didAuthError() {
            return false;
          },

          async refreshAuth() {
            token = await getToken();
            tokenFetchTime = new Date().getTime();
          },

          willAuthError() {
            if (!token) {
                return true
            }
            const currentTime = new Date().getTime();

            if (tokenFetchTime + 1000 * 20 < currentTime) {
                return true;
            }

            return false;
            },
          };
        }), 
        fetchExchange,
    ],
  });
}
       