import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  TimeSpan: { input: any; output: any; }
};

export enum ActionType {
  AccordionInteraction = 'ACCORDION_INTERACTION',
  AddToCart = 'ADD_TO_CART',
  BrowserNavigation = 'BROWSER_NAVIGATION',
  ButtonClick = 'BUTTON_CLICK',
  Cart = 'CART',
  CheckoutStep = 'CHECKOUT_STEP',
  CompletePurchase = 'COMPLETE_PURCHASE',
  Error = 'ERROR',
  FormInteraction = 'FORM_INTERACTION',
  FormSubmit = 'FORM_SUBMIT',
  ImageInteraction = 'IMAGE_INTERACTION',
  ImageView = 'IMAGE_VIEW',
  ImageZoom = 'IMAGE_ZOOM',
  InitiateCheckout = 'INITIATE_CHECKOUT',
  InputBlur = 'INPUT_BLUR',
  InputChange = 'INPUT_CHANGE',
  InputComplete = 'INPUT_COMPLETE',
  InputFocus = 'INPUT_FOCUS',
  InputInteraction = 'INPUT_INTERACTION',
  LinkClick = 'LINK_CLICK',
  Login = 'LOGIN',
  MenuInteraction = 'MENU_INTERACTION',
  ModalInteraction = 'MODAL_INTERACTION',
  PageLoad = 'PAGE_LOAD',
  PageNavigation = 'PAGE_NAVIGATION',
  Performance = 'PERFORMANCE',
  ProductSearch = 'PRODUCT_SEARCH',
  ProductView = 'PRODUCT_VIEW',
  RemoveFromCart = 'REMOVE_FROM_CART',
  Scroll = 'SCROLL',
  ScrollEvent = 'SCROLL_EVENT',
  Search = 'SEARCH',
  TabVisibilityChange = 'TAB_VISIBILITY_CHANGE',
  TextSelection = 'TEXT_SELECTION',
  Unknown = 'UNKNOWN',
  UpdateCart = 'UPDATE_CART',
  VideoInteraction = 'VIDEO_INTERACTION',
  VideoView = 'VIDEO_VIEW',
  ViewCart = 'VIEW_CART',
  WindowBeforeUnload = 'WINDOW_BEFORE_UNLOAD',
  WindowResize = 'WINDOW_RESIZE',
  WindowScroll = 'WINDOW_SCROLL',
  WindowUnload = 'WINDOW_UNLOAD'
}

export type ActivityDetails = {
  __typename?: 'ActivityDetails';
  action?: Maybe<Scalars['String']['output']>;
  actionText?: Maybe<Scalars['String']['output']>;
  checkoutDetails: ShopifyCheckoutDetails;
  currentTime?: Maybe<Scalars['Float']['output']>;
  devicePixelRatio?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  errorDetails: ErrorDetails;
  extraElements: Array<KeyValuePairOfStringAndObject>;
  formContext: FormContext;
  formData: Scalars['String']['output'];
  formFieldContext: FormFieldContext;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  mediaDetails: MediaDetails;
  navigationContext: NavigationContext;
  navigationType: Scalars['String']['output'];
  pageContext: PageContext;
  productDetails: ShopifyProduct;
  searchContext: SearchContext;
  searchFilters: Array<KeyValuePairOfStringAndObject>;
  searchQuery: Scalars['String']['output'];
  searchResults?: Maybe<Scalars['Int']['output']>;
  selectedText: Scalars['String']['output'];
  src: Scalars['String']['output'];
  timeStamp: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  visibilityState: Scalars['String']['output'];
};

export type ActivityHistoryDay = {
  __typename?: 'ActivityHistoryDay';
  activities: Array<ActivityHistoryDetail>;
  date: Scalars['String']['output'];
};

export type ActivityHistoryDetail = {
  __typename?: 'ActivityHistoryDetail';
  actionType: ActionType;
  activityDetails: ActivityHistoryDetailInfo;
  timestamp: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ActivityHistoryDetailInfo = {
  __typename?: 'ActivityHistoryDetailInfo';
  action: Scalars['String']['output'];
  actionText: Scalars['String']['output'];
};

export type AddTriggerHistoryInput = {
  campaignId: Scalars['String']['input'];
};

export type AggregatedFlow = {
  __typename?: 'AggregatedFlow';
  averageTimeSpent: Scalars['Float']['output'];
  sourceUrl: Scalars['String']['output'];
  targetUrl: Scalars['String']['output'];
  totalTransitions: Scalars['Int']['output'];
  uniqueUsers: Scalars['Int']['output'];
};

export type AllTimeProductActivityStats = {
  __typename?: 'AllTimeProductActivityStats';
  averageActivitiesPerUser: Scalars['Float']['output'];
  averageCartValue: Scalars['Float']['output'];
  averageCheckoutValue: Scalars['Float']['output'];
  averageClicksPerUser: Scalars['Float']['output'];
  averageFormSubmitsPerUser: Scalars['Float']['output'];
  averagePageChangesPerUser: Scalars['Float']['output'];
  averageUserInteraction: Scalars['Float']['output'];
  cartAbandonmentRate: Scalars['Float']['output'];
  checkoutCompletionRate: Scalars['Float']['output'];
  checkoutPageAbandonersCount: Scalars['Int']['output'];
  checkoutPageCompletedCount: Scalars['Int']['output'];
  checkoutPageVisitorsCount: Scalars['Int']['output'];
  churnRate: Scalars['Float']['output'];
  inactiveUsers: Scalars['Int']['output'];
  noActionVisitors: Scalars['Int']['output'];
  productCartCounts: Array<KeyValuePairOfStringAndInt32>;
  productCheckoutCounts: Array<KeyValuePairOfStringAndInt32>;
  productId: Scalars['String']['output'];
  productViewCounts: Array<KeyValuePairOfStringAndInt32>;
  segmentStats: Array<SegmentStat>;
  shopifyMetrics: ShopifyStats;
  slaStats: Array<SlaStat>;
  totalActiveUsers: Scalars['Int']['output'];
  totalActivities: Scalars['Int']['output'];
  totalCartItems: Scalars['Int']['output'];
  totalCartValue: Scalars['Float']['output'];
  totalCartsCount: Scalars['Int']['output'];
  totalCheckoutItems: Scalars['Int']['output'];
  totalCheckoutValue: Scalars['Float']['output'];
  totalCheckoutsCount: Scalars['Int']['output'];
  totalUniqueProducts: Scalars['Int']['output'];
  totalVisitsCount: Scalars['Int']['output'];
  uniqueAnonymousIds: Array<Scalars['String']['output']>;
  uniqueCartProducts: Array<Scalars['String']['output']>;
  uniqueCartSessions: Scalars['Int']['output'];
  uniqueCheckoutProducts: Array<Scalars['String']['output']>;
  uniqueCheckoutSessions: Scalars['Int']['output'];
  uniqueEmails: Array<Scalars['String']['output']>;
  uniqueProductViews: Scalars['Int']['output'];
  uniqueProductsInCart: Scalars['Int']['output'];
  uniqueUserIds: Array<Scalars['String']['output']>;
  uniqueViewedProducts: Array<Scalars['String']['output']>;
  userEmails: UserEmailStats;
  userProductInteractions: Array<UserProductInteraction>;
};

export type ApplicationRole = {
  __typename?: 'ApplicationRole';
  applicationRoleId: Scalars['Int']['output'];
  roleName?: Maybe<Scalars['String']['output']>;
};

export type ApplicationUserView = {
  __typename?: 'ApplicationUserView';
  applicationRoleNames: Array<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  userGuiding: UserGuiding;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type BetaSignupInput = {
  emailAddress: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  productDescription?: InputMaybe<Scalars['String']['input']>;
  productName: Scalars['String']['input'];
  productUrl: Scalars['String']['input'];
};

export type Campaign = {
  __typename?: 'Campaign';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  segmentId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  triggerHistory: Array<CampaignTriggerHistory>;
  triggerSettings: TriggerSettings;
  triggerSettingsJson: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CampaignTriggerHistory = {
  __typename?: 'CampaignTriggerHistory';
  campaign: Campaign;
  campaignId: Scalars['String']['output'];
  error: Scalars['String']['output'];
  executedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  segmentUsers: SegmentUsers;
  snapshotDate: Scalars['DateTime']['output'];
  success: Scalars['Boolean']['output'];
  userCount: Scalars['Int']['output'];
  users: Array<CampaignTriggerUser>;
  webhookCall: CampaignTriggerWebhookCall;
};

export type CampaignTriggerUser = {
  __typename?: 'CampaignTriggerUser';
  changeType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  triggerHistory: CampaignTriggerHistory;
  triggerHistoryId: Scalars['String']['output'];
  userEmail: Scalars['String']['output'];
};

export type CampaignTriggerWebhookCall = {
  __typename?: 'CampaignTriggerWebhookCall';
  error: Scalars['String']['output'];
  id: Scalars['String']['output'];
  responseTime?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
  timestamp: Scalars['DateTime']['output'];
  triggerHistory: CampaignTriggerHistory;
  triggerHistoryId: Scalars['String']['output'];
};

export type CampaignView = {
  __typename?: 'CampaignView';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  segmentId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  triggerHistory: Array<CampaignTriggerHistory>;
  triggerSettings: TriggerSettings;
  updatedAt: Scalars['DateTime']['output'];
};

export type CartDiscountApplication = {
  __typename?: 'CartDiscountApplication';
  description: Scalars['String']['output'];
  extraElements: Array<KeyValuePairOfStringAndObject>;
  key: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type CartInfo = {
  __typename?: 'CartInfo';
  attributes: Array<KeyValuePairOfStringAndObject>;
  currency: Scalars['String']['output'];
  itemCount: Scalars['Int']['output'];
  items: Array<CartItem>;
  itemsSubtotalPrice: Scalars['Int']['output'];
  note?: Maybe<Scalars['String']['output']>;
  originalTotalPrice: Scalars['Int']['output'];
  token?: Maybe<Scalars['String']['output']>;
  totalDiscount: Scalars['Int']['output'];
  totalPrice: Scalars['Int']['output'];
};

export type CartItem = {
  __typename?: 'CartItem';
  id?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  variantId?: Maybe<Scalars['String']['output']>;
  variantTitle?: Maybe<Scalars['String']['output']>;
};

export type CartSession = {
  __typename?: 'CartSession';
  itemCount: Scalars['Int']['output'];
  products: Array<Scalars['String']['output']>;
  sessionId: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  totalValue: Scalars['Float']['output'];
  userEmail: Scalars['String']['output'];
};

export type CartedProduct = {
  __typename?: 'CartedProduct';
  dateAdded: Scalars['String']['output'];
  price: Scalars['Decimal']['output'];
  productId: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type ChatGptslaConditionInput = {
  __typename?: 'ChatGPTSLAConditionInput';
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
  valueElement: Scalars['JSON']['output'];
};

export type ChatGptslaRuleInput = {
  __typename?: 'ChatGPTSLARuleInput';
  conditions: Array<ChatGptslaConditionInput>;
  id: Scalars['String']['output'];
  operator: Scalars['String']['output'];
};

export type ChatGptSlaConfigurationView = {
  __typename?: 'ChatGptSlaConfigurationView';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy: Scalars['String']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  rules: Array<ChatGptslaRuleInput>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CheckedOutProduct = {
  __typename?: 'CheckedOutProduct';
  dateCheckedOut: Scalars['String']['output'];
  price: Scalars['Decimal']['output'];
  productId: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type CheckoutInfo = {
  __typename?: 'CheckoutInfo';
  currency: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  subtotalPrice: Scalars['Int']['output'];
  token?: Maybe<Scalars['String']['output']>;
  totalPrice: Scalars['Int']['output'];
};

export type CheckoutSession = {
  __typename?: 'CheckoutSession';
  completed: Scalars['Boolean']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  customerFirstName?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  customerLastName?: Maybe<Scalars['String']['output']>;
  itemCount: Scalars['Int']['output'];
  orderStatusUrl?: Maybe<Scalars['String']['output']>;
  products: Array<Scalars['String']['output']>;
  sessionId: Scalars['String']['output'];
  shopDomain?: Maybe<Scalars['String']['output']>;
  shopName?: Maybe<Scalars['String']['output']>;
  subtotalPrice: Scalars['Float']['output'];
  timestamp: Scalars['DateTime']['output'];
  totalValue: Scalars['Float']['output'];
  userEmail: Scalars['String']['output'];
};

export type ClientUserActivityLogData = {
  __typename?: 'ClientUserActivityLogData';
  actionType: ActionType;
  activityDetails: ActivityDetails;
  contextData: ContextData;
  deviceInfo: DeviceInfo;
  id: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  userContextData: UserContextData;
  userId: Scalars['String']['output'];
};

export type CohortAnalysisData = {
  __typename?: 'CohortAnalysisData';
  cohorts: Array<CohortData>;
};

export type CohortData = {
  __typename?: 'CohortData';
  cohortDate: Scalars['DateTime']['output'];
  retentionData: Array<RetentionData>;
  userCount: Scalars['Int']['output'];
  userEmails: Array<Scalars['String']['output']>;
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
};

export type ContactRequest = {
  __typename?: 'ContactRequest';
  contacter: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  nameSurname: Scalars['String']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type ContextData = {
  __typename?: 'ContextData';
  cart: MongoDbCartInfo;
  checkout: MongoDbCheckoutInfo;
  customer: MongoDbCustomerInfo;
  extraElements: Array<KeyValuePairOfStringAndObject>;
  shop: MongoDbShopInfo;
};

export type CreateCampaignInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  segmentId: Scalars['String']['input'];
  triggerSettings: TriggerSettingsInput;
};

export type CreateContactRequestInput = {
  companyId: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  nameSurname: Scalars['String']['input'];
};

export type CreateProductInput = {
  createdById?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  emailAddress: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  productDescription?: InputMaybe<Scalars['String']['input']>;
  productName: Scalars['String']['input'];
  productUrl: Scalars['String']['input'];
};

export type CustomerInfo = {
  __typename?: 'CustomerInfo';
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  ordersCount: Scalars['Int']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type DailyActivity = {
  __typename?: 'DailyActivity';
  actionType?: Maybe<ActionType>;
  activityDetails?: Maybe<ActivityDetails>;
  referrer?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type DailyActivityStats = {
  __typename?: 'DailyActivityStats';
  activeUsers?: Maybe<Scalars['Int']['output']>;
  averageActivitiesPerUser?: Maybe<Scalars['Float']['output']>;
  averageCartValue: Scalars['Float']['output'];
  averageCheckoutValue: Scalars['Float']['output'];
  averageClicksPerUser?: Maybe<Scalars['Float']['output']>;
  averageFormSubmitsPerUser?: Maybe<Scalars['Float']['output']>;
  averagePageChangesPerUser?: Maybe<Scalars['Float']['output']>;
  averageUserInteraction?: Maybe<Scalars['Float']['output']>;
  cartAbandonmentRate: Scalars['Float']['output'];
  checkoutCompletionRate: Scalars['Float']['output'];
  checkoutPageAbandonersCount: Scalars['Int']['output'];
  checkoutPageCompletedCount: Scalars['Int']['output'];
  checkoutPageVisitorsCount: Scalars['Int']['output'];
  churnRate?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  inactiveUsers?: Maybe<Scalars['Int']['output']>;
  noActionVisitors: Scalars['Int']['output'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']['output']>;
  productInteractions: ProductUserInteractionStats;
  productInteractionsJson?: Maybe<Scalars['String']['output']>;
  segmentStats: Array<SegmentStat>;
  segmentStatsJson?: Maybe<Scalars['String']['output']>;
  shopifyMetrics: ShopifyStats;
  shopifyStatsJson?: Maybe<Scalars['String']['output']>;
  slaStats: Array<SlaStat>;
  slaStatsJson?: Maybe<Scalars['String']['output']>;
  totalCartItems: Scalars['Int']['output'];
  totalCartValue: Scalars['Float']['output'];
  totalCheckoutItems: Scalars['Int']['output'];
  totalCheckoutValue: Scalars['Float']['output'];
  totalDailyActivities?: Maybe<Scalars['Float']['output']>;
  totalUsersLast30Days?: Maybe<Scalars['Int']['output']>;
  uniqueCartSessions: Scalars['Int']['output'];
  uniqueCheckoutProducts: Scalars['Int']['output'];
  uniqueCheckoutSessions: Scalars['Int']['output'];
  uniqueProductViews: Scalars['Int']['output'];
  uniqueProductsInCart: Scalars['Int']['output'];
  userEmails: UserEmailStats;
  userEmailsJson?: Maybe<Scalars['String']['output']>;
};

export type DailyActivitySummary = {
  __typename?: 'DailyActivitySummary';
  activities: Array<DailyActivity>;
  contextData?: Maybe<ShopifyContextData>;
  date: Scalars['DateTime']['output'];
  metrics: DailyMetrics;
  totalActions: Scalars['Int']['output'];
};

export type DailyMetrics = {
  __typename?: 'DailyMetrics';
  averageTimeBetweenActions: Scalars['TimeSpan']['output'];
  buttonClicks?: Maybe<Scalars['Int']['output']>;
  firstAction?: Maybe<Scalars['DateTime']['output']>;
  formSubmits?: Maybe<Scalars['Int']['output']>;
  lastAction?: Maybe<Scalars['DateTime']['output']>;
  pageViews?: Maybe<Scalars['Int']['output']>;
  productViews: Scalars['Int']['output'];
  totalActions?: Maybe<Scalars['Int']['output']>;
  visitedPages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DailyShopifyStats = {
  __typename?: 'DailyShopifyStats';
  averageCartValue: Scalars['Float']['output'];
  cartAbandonmentRate: Scalars['Float']['output'];
  cartSessions: Scalars['Int']['output'];
  checkoutCompletionRate: Scalars['Float']['output'];
  checkoutPageAbandoners: Scalars['Int']['output'];
  checkoutPageCompleted: Scalars['Int']['output'];
  checkoutPageVisitors: Scalars['Int']['output'];
  checkoutSessions: Scalars['Int']['output'];
  date: Scalars['DateTime']['output'];
  uniqueCheckoutProducts: Scalars['Int']['output'];
  uniqueProductViews: Scalars['Int']['output'];
  uniqueProductsInCart: Scalars['Int']['output'];
};

export type DeviceInfo = {
  __typename?: 'DeviceInfo';
  country: Scalars['String']['output'];
  isMobile: Scalars['Boolean']['output'];
  language: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
};

export type EmailReportView = {
  __typename?: 'EmailReportView';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  productId: Scalars['String']['output'];
  recipients: Array<Scalars['String']['output']>;
  sentReports: Array<SentEmailReportView>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum EmbedStatus {
  EmbedSuccess = 'EMBED_SUCCESS',
  New = 'NEW',
  WaitingForEmbed = 'WAITING_FOR_EMBED'
}

export type ErrorDetails = {
  __typename?: 'ErrorDetails';
  colno: Scalars['Int']['output'];
  filename: Scalars['String']['output'];
  lineno: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  stack: Scalars['String']['output'];
};

export type FormContext = {
  __typename?: 'FormContext';
  formAction: Scalars['String']['output'];
  formEnctype: Scalars['String']['output'];
  formId: Scalars['String']['output'];
  formMethod: Scalars['String']['output'];
  formName: Scalars['String']['output'];
};

export type FormFieldContext = {
  __typename?: 'FormFieldContext';
  fieldName: Scalars['String']['output'];
  fieldType: Scalars['String']['output'];
  fieldValue: Scalars['String']['output'];
  formAction: Scalars['String']['output'];
  formId: Scalars['String']['output'];
  formName: Scalars['String']['output'];
};

export type ILookupOfStringAndUserApplicationRole = {
  contains: Scalars['Boolean']['output'];
  count: Scalars['Int']['output'];
};


export type ILookupOfStringAndUserApplicationRoleContainsArgs = {
  key: Scalars['String']['input'];
};

export type KeyValuePairOfStringAndDouble = {
  __typename?: 'KeyValuePairOfStringAndDouble';
  key: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type KeyValuePairOfStringAndInt32 = {
  __typename?: 'KeyValuePairOfStringAndInt32';
  key: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type KeyValuePairOfStringAndObject = {
  __typename?: 'KeyValuePairOfStringAndObject';
  key: Scalars['String']['output'];
};

export type KeyValuePairOfStringAndPageStats = {
  __typename?: 'KeyValuePairOfStringAndPageStats';
  key: Scalars['String']['output'];
  value: PageStats;
};

export type KeyValuePairOfStringAndProductUserInteractions = {
  __typename?: 'KeyValuePairOfStringAndProductUserInteractions';
  key: Scalars['String']['output'];
  value: ProductUserInteractions;
};

export type LeadScoringRuleView = {
  __typename?: 'LeadScoringRuleView';
  attributeName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  eventName?: Maybe<Scalars['String']['output']>;
  featureId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  navigationPath?: Maybe<Scalars['String']['output']>;
  operator: Scalars['String']['output'];
  points: Scalars['Int']['output'];
  productId: Scalars['String']['output'];
  targetElement?: Maybe<Scalars['String']['output']>;
  targetPage?: Maybe<Scalars['String']['output']>;
  timeUnit?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type MediaDetails = {
  __typename?: 'MediaDetails';
  alt: Scalars['String']['output'];
  clickableType: Scalars['String']['output'];
  currentTime?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  isInsideClickable?: Maybe<Scalars['Boolean']['output']>;
  isProductImage?: Maybe<Scalars['Boolean']['output']>;
  isProductVideo?: Maybe<Scalars['Boolean']['output']>;
  naturalHeight?: Maybe<Scalars['Int']['output']>;
  naturalWidth?: Maybe<Scalars['Int']['output']>;
  src: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type MongoDbCartInfo = {
  __typename?: 'MongoDbCartInfo';
  attributes: Array<KeyValuePairOfStringAndObject>;
  cartLevelDiscountApplications: Array<CartDiscountApplication>;
  checkoutChargeAmount: Scalars['Int']['output'];
  currency: Scalars['String']['output'];
  extraElements: Array<KeyValuePairOfStringAndObject>;
  itemCount: Scalars['Int']['output'];
  items: Array<MongoDbShopifyCartItem>;
  itemsSubtotalPrice: Scalars['Int']['output'];
  note: Scalars['String']['output'];
  originalTotalPrice: Scalars['Int']['output'];
  requiresShipping: Scalars['Boolean']['output'];
  totalDiscount: Scalars['Int']['output'];
  totalPrice: Scalars['Int']['output'];
  totalWeight: Scalars['Float']['output'];
};

export type MongoDbCheckoutInfo = {
  __typename?: 'MongoDbCheckoutInfo';
  currency: Scalars['String']['output'];
  email: Scalars['String']['output'];
  extraElements: Array<KeyValuePairOfStringAndObject>;
  subtotalPrice: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  totalPrice: Scalars['Int']['output'];
};

export type MongoDbCustomerInfo = {
  __typename?: 'MongoDbCustomerInfo';
  email: Scalars['String']['output'];
  extraElements: Array<KeyValuePairOfStringAndObject>;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  ordersCount: Scalars['Int']['output'];
  phone: Scalars['String']['output'];
};

export type MongoDbShopInfo = {
  __typename?: 'MongoDbShopInfo';
  currency: Scalars['String']['output'];
  domain: Scalars['String']['output'];
  extraElements: Array<KeyValuePairOfStringAndObject>;
  name: Scalars['String']['output'];
};

export type MongoDbShopifyCartItem = {
  __typename?: 'MongoDbShopifyCartItem';
  extraElements: Array<KeyValuePairOfStringAndObject>;
  id: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  sku: Scalars['String']['output'];
  title: Scalars['String']['output'];
  variantId: Scalars['String']['output'];
  variantTitle: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPayment: PaymentHistory;
  addTriggerHistory: Scalars['Boolean']['output'];
  analyticsInsights: Scalars['String']['output'];
  createBetaSignup?: Maybe<UserSignupResponse>;
  createCampaign: CampaignView;
  createContactRequest?: Maybe<ContactRequest>;
  createProductWithDetails: Product;
  createShopifyUser?: Maybe<UserSignupResponse>;
  createUser?: Maybe<UserSignupResponse>;
  createUserActivity: Scalars['Boolean']['output'];
  deleteCampaign: Scalars['Boolean']['output'];
  deleteEmailReport: Scalars['Boolean']['output'];
  deleteLeadScoringRule: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Boolean']['output'];
  deleteSLAConfiguration: Scalars['Boolean']['output'];
  deleteSegment: Scalars['Boolean']['output'];
  generateOptimizedLeadScoringRules: Array<LeadScoringRuleView>;
  generateOptimizedSLAConfigurations: Array<ChatGptSlaConfigurationView>;
  generateOptimizedSegments: Array<SegmentView>;
  incrementProductUsage: Product;
  registerSentEmailReport: SentEmailReportView;
  saveEmailReport: EmailReportView;
  saveGeneratedLeadScoringRules: Array<LeadScoringRuleView>;
  saveGeneratedSLAConfigurations: Array<SlaConfiguration>;
  saveGeneratedSegments: Array<SegmentView>;
  saveLeadScoringRule: LeadScoringRuleView;
  saveSLAConfiguration: SlaConfiguration;
  saveSegment: SegmentView;
  segmentAnalyticsInsights: Scalars['String']['output'];
  updateCampaign: CampaignView;
  updateCampaignStatus: CampaignView;
  updateEmailReport: EmailReportView;
  updateProduct: Product;
  updateProductCredit: Product;
  updateUserGuidingStatus: User;
  verifyProductEmbedding: Product;
};


export type MutationAddPaymentArgs = {
  amount: Scalars['Decimal']['input'];
  paymentMethod: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};


export type MutationAddTriggerHistoryArgs = {
  input: AddTriggerHistoryInput;
};


export type MutationAnalyticsInsightsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  message: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MutationCreateBetaSignupArgs = {
  input: BetaSignupInput;
};


export type MutationCreateCampaignArgs = {
  input: CreateCampaignInput;
};


export type MutationCreateContactRequestArgs = {
  input: CreateContactRequestInput;
};


export type MutationCreateProductWithDetailsArgs = {
  input: CreateProductInput;
};


export type MutationCreateShopifyUserArgs = {
  input: ShopifyUserInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserActivityArgs = {
  activityType?: InputMaybe<Scalars['Int']['input']>;
  input: Scalars['String']['input'];
  reference?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteCampaignArgs = {
  campaignId: Scalars['String']['input'];
};


export type MutationDeleteEmailReportArgs = {
  reportId: Scalars['String']['input'];
};


export type MutationDeleteLeadScoringRuleArgs = {
  ruleId: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  productId: Scalars['String']['input'];
};


export type MutationDeleteSlaConfigurationArgs = {
  slaId: Scalars['String']['input'];
};


export type MutationDeleteSegmentArgs = {
  segmentId: Scalars['String']['input'];
};


export type MutationGenerateOptimizedLeadScoringRulesArgs = {
  productId: Scalars['String']['input'];
};


export type MutationGenerateOptimizedSlaConfigurationsArgs = {
  productId: Scalars['String']['input'];
};


export type MutationGenerateOptimizedSegmentsArgs = {
  productId: Scalars['String']['input'];
};


export type MutationIncrementProductUsageArgs = {
  amount: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
  usageType: Scalars['String']['input'];
};


export type MutationRegisterSentEmailReportArgs = {
  input: RegisterSentEmailReportInput;
};


export type MutationSaveEmailReportArgs = {
  input: SaveEmailReportInput;
};


export type MutationSaveGeneratedLeadScoringRulesArgs = {
  rules: Array<SaveLeadScoringRuleInput>;
};


export type MutationSaveGeneratedSlaConfigurationsArgs = {
  configurations: Array<SaveSlaConfigurationInput>;
};


export type MutationSaveGeneratedSegmentsArgs = {
  segments: Array<SaveSegmentInput>;
};


export type MutationSaveLeadScoringRuleArgs = {
  input: SaveLeadScoringRuleInput;
};


export type MutationSaveSlaConfigurationArgs = {
  input: SaveSlaConfigurationInput;
};


export type MutationSaveSegmentArgs = {
  input: SaveSegmentInput;
};


export type MutationSegmentAnalyticsInsightsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  message: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MutationUpdateCampaignArgs = {
  input: UpdateCampaignInput;
};


export type MutationUpdateCampaignStatusArgs = {
  campaignId: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


export type MutationUpdateEmailReportArgs = {
  input: UpdateEmailReportInput;
};


export type MutationUpdateProductArgs = {
  input: CreateProductInput;
  productId: Scalars['String']['input'];
};


export type MutationUpdateProductCreditArgs = {
  amount: Scalars['Decimal']['input'];
  productId: Scalars['String']['input'];
};


export type MutationUpdateUserGuidingStatusArgs = {
  guidingStep: Scalars['String']['input'];
};


export type MutationVerifyProductEmbeddingArgs = {
  productId: Scalars['String']['input'];
};

export type NavigationContext = {
  __typename?: 'NavigationContext';
  currentUrl: Scalars['String']['output'];
  navigationMethod: Scalars['String']['output'];
  previousUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PageContext = {
  __typename?: 'PageContext';
  referrer: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type PageFlow = {
  __typename?: 'PageFlow';
  firstTransition: Scalars['DateTime']['output'];
  lastTransition: Scalars['DateTime']['output'];
  sourceUrl: Scalars['String']['output'];
  targetUrl: Scalars['String']['output'];
  transitionCount: Scalars['Int']['output'];
};

export type PageFlowStats = {
  __typename?: 'PageFlowStats';
  aggregatedFlows: Array<AggregatedFlow>;
  pageStatistics: Array<KeyValuePairOfStringAndPageStats>;
  productId: Scalars['String']['output'];
  userFlows: Array<UserFlowStats>;
};

export type PageStats = {
  __typename?: 'PageStats';
  averageTimeSpent: Scalars['Float']['output'];
  entryCount: Scalars['Int']['output'];
  exitCount: Scalars['Int']['output'];
  mostActiveDate: Scalars['DateTime']['output'];
  totalViews: Scalars['Int']['output'];
  uniqueUsers: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type PageVisit = {
  __typename?: 'PageVisit';
  averageTimeSpent: Scalars['Float']['output'];
  firstVisit: Scalars['DateTime']['output'];
  lastVisit: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  visitCount: Scalars['Int']['output'];
};

export type PaymentHistory = {
  __typename?: 'PaymentHistory';
  amount: Scalars['Decimal']['output'];
  createdOn: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  paymentDate: Scalars['DateTime']['output'];
  paymentMethod: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};

export type Product = {
  __typename?: 'Product';
  createdBy: Scalars['String']['output'];
  createdOn: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  embedStatus: EmbedStatus;
  lastEmbedCheck?: Maybe<Scalars['DateTime']['output']>;
  lastPaymentDate?: Maybe<Scalars['DateTime']['output']>;
  lastUsageReset: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  nextBillingDate?: Maybe<Scalars['DateTime']['output']>;
  paymentHistory: Array<PaymentHistory>;
  productId: Scalars['String']['output'];
  remainingCredit: Scalars['Decimal']['output'];
  totalRawDataCount: Scalars['Long']['output'];
  totalTokensCount: Scalars['Long']['output'];
  updatedOn: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  user: User;
};

export type ProductDetailsView = {
  __typename?: 'ProductDetailsView';
  createdOn: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  updatedOn: Scalars['DateTime']['output'];
};

export type ProductUserInteractionStats = {
  __typename?: 'ProductUserInteractionStats';
  products: Array<KeyValuePairOfStringAndProductUserInteractions>;
};

export type ProductUserInteractions = {
  __typename?: 'ProductUserInteractions';
  addedToCartByUsers: Array<Scalars['String']['output']>;
  checkedOutByUsers: Array<Scalars['String']['output']>;
  lastInteraction: Scalars['DateTime']['output'];
  viewedByUsers: Array<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allTimeProductActivityStats: AllTimeProductActivityStats;
  applicationRolesByUserIds: Array<UserRolesType>;
  campaignById: CampaignView;
  campaignsByProduct: Array<CampaignView>;
  cohortAnalysis: CohortAnalysisData;
  dailyStats: Array<DailyActivityStats>;
  dailyUserLogs: Array<UserDailyActivity>;
  emailReportById: EmailReportView;
  emailReportsByProduct: Array<EmailReportView>;
  latestSLASnapshot?: Maybe<SlaDailySnapshot>;
  latestSegmentSnapshot?: Maybe<SegmentDailySnapshot>;
  latestSegmentsWithUsers: Array<SegmentWithUsers>;
  leadScoringRuleById?: Maybe<LeadScoringRuleView>;
  leadScoringRulesByProduct: Array<LeadScoringRuleView>;
  myProducts: Array<Product>;
  pageFlowStats: Array<PageFlowStats>;
  productById?: Maybe<Product>;
  productDetailsById?: Maybe<ProductDetailsView>;
  productPaymentHistory: Array<PaymentHistory>;
  productUsageStats: Product;
  rawUserLogs?: Maybe<RawUserLogsCollectionSegment>;
  segmentById?: Maybe<SegmentView>;
  segmentChangesAnalysis: SegmentChangeAnalysis;
  segmentSnapshots: Array<SegmentDailySnapshot>;
  segmentsByProduct: Array<SegmentView>;
  sentEmailReportById: SentEmailReportView;
  sentEmailReportsByProduct: Array<SentEmailReportView>;
  slaConfigurations: Array<SlaConfiguration>;
  slaSnapshots: Array<SlaDailySnapshot>;
  userActivitiesByProduct: Array<UserActivitySummary>;
  userActivityDetails: UserActivityDetail;
  userById?: Maybe<User>;
  userSegmentHistory: Array<SegmentUserHistory>;
  weeklyStats: Array<WeeklyActivityStats>;
  whoAmI?: Maybe<ApplicationUserView>;
};


export type QueryAllTimeProductActivityStatsArgs = {
  productId: Scalars['String']['input'];
};


export type QueryApplicationRolesByUserIdsArgs = {
  userIds: Array<Scalars['String']['input']>;
};


export type QueryCampaignByIdArgs = {
  campaignId: Scalars['String']['input'];
};


export type QueryCampaignsByProductArgs = {
  productId: Scalars['String']['input'];
};


export type QueryCohortAnalysisArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryDailyStatsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryDailyUserLogsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryEmailReportByIdArgs = {
  reportId: Scalars['String']['input'];
};


export type QueryEmailReportsByProductArgs = {
  productId: Scalars['String']['input'];
};


export type QueryLatestSlaSnapshotArgs = {
  productId: Scalars['String']['input'];
};


export type QueryLatestSegmentSnapshotArgs = {
  productId: Scalars['String']['input'];
};


export type QueryLatestSegmentsWithUsersArgs = {
  productId: Scalars['String']['input'];
};


export type QueryLeadScoringRuleByIdArgs = {
  ruleId: Scalars['String']['input'];
};


export type QueryLeadScoringRulesByProductArgs = {
  productId: Scalars['String']['input'];
};


export type QueryPageFlowStatsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryProductByIdArgs = {
  productId: Scalars['String']['input'];
};


export type QueryProductDetailsByIdArgs = {
  productId: Scalars['String']['input'];
};


export type QueryProductPaymentHistoryArgs = {
  productId: Scalars['String']['input'];
};


export type QueryProductUsageStatsArgs = {
  productId: Scalars['String']['input'];
};


export type QueryRawUserLogsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySegmentByIdArgs = {
  segmentId: Scalars['String']['input'];
};


export type QuerySegmentChangesAnalysisArgs = {
  endDate: Scalars['DateTime']['input'];
  productId: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
};


export type QuerySegmentSnapshotsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QuerySegmentsByProductArgs = {
  productId: Scalars['String']['input'];
};


export type QuerySentEmailReportByIdArgs = {
  sentReportId: Scalars['String']['input'];
};


export type QuerySentEmailReportsByProductArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QuerySlaConfigurationsArgs = {
  productId: Scalars['String']['input'];
};


export type QuerySlaSnapshotsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryUserActivitiesByProductArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryUserActivityDetailsArgs = {
  productId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryUserByIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUserSegmentHistoryArgs = {
  endDate: Scalars['DateTime']['input'];
  productId: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
  userEmails: Array<Scalars['String']['input']>;
};


export type QueryWeeklyStatsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

/** A segment of a collection. */
export type RawUserLogsCollectionSegment = {
  __typename?: 'RawUserLogsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<ClientUserActivityLogData>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type RegisterSentEmailReportInput = {
  emailReportId: Scalars['String']['input'];
  errorMessage: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  recipients: Array<Scalars['String']['input']>;
  sentDate?: InputMaybe<Scalars['DateTime']['input']>;
  status: Scalars['String']['input'];
};

export type RetentionData = {
  __typename?: 'RetentionData';
  activeUserEmails: Array<UserEmailDetail>;
  activeUsers: Scalars['Int']['output'];
  period: Scalars['Int']['output'];
  retentionRate: Scalars['Float']['output'];
};

export type SlaCondition = {
  __typename?: 'SLACondition';
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type SlaConditionInput = {
  type: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type SlaConfiguration = {
  __typename?: 'SLAConfiguration';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  rules: Array<SlaRule>;
  serializedRulesJson: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SlaDailySnapshot = {
  __typename?: 'SLADailySnapshot';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  slAsJson: Scalars['String']['output'];
  snapshotDate: Scalars['DateTime']['output'];
};

export type SlaRule = {
  __typename?: 'SLARule';
  conditions: Array<SlaCondition>;
  id: Scalars['String']['output'];
  operator: Scalars['String']['output'];
};

export type SlaRuleInput = {
  conditions: Array<SlaConditionInput>;
  id: Scalars['String']['input'];
  operator: Scalars['String']['input'];
};

export type SlaStat = {
  __typename?: 'SLAStat';
  slaId: Scalars['String']['output'];
  slaName: Scalars['String']['output'];
  userCount: Scalars['Int']['output'];
};

export type SaveEmailReportInput = {
  emails: Array<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  productId: Scalars['String']['input'];
};

export type SaveLeadScoringRuleInput = {
  attributeName?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  eventName?: InputMaybe<Scalars['String']['input']>;
  featureId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  navigationPath?: InputMaybe<Scalars['String']['input']>;
  operator: Scalars['String']['input'];
  points: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
  targetElement?: InputMaybe<Scalars['String']['input']>;
  targetPage?: InputMaybe<Scalars['String']['input']>;
  timeUnit?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt: Scalars['DateTime']['input'];
  value: Scalars['String']['input'];
};

export type SaveSlaConfigurationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  name: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  rules: Array<SlaRuleInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SaveSegmentInput = {
  createdAt: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  label: Scalars['String']['input'];
  name: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  slAs: Array<SaveSegmentSlaInput>;
  updatedAt: Scalars['DateTime']['input'];
};

export type SaveSegmentSlaInput = {
  operator: Scalars['String']['input'];
  slaId: Scalars['String']['input'];
};

export type SearchContext = {
  __typename?: 'SearchContext';
  searchForm: Scalars['String']['output'];
  searchTerm: Scalars['String']['output'];
  searchType: Scalars['String']['output'];
};

export type Segment = {
  __typename?: 'Segment';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  segmentSLAs: Array<SegmentSla>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
};

export type SegmentChange = {
  __typename?: 'SegmentChange';
  currentUserCount: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  movedFromOtherSegments: Array<UserSegmentMove>;
  movedToOtherSegments: Array<UserSegmentMove>;
  newUsers: Array<Scalars['String']['output']>;
  previousUserCount: Scalars['Int']['output'];
  removedUsers: Array<Scalars['String']['output']>;
  segmentId: Scalars['String']['output'];
  segmentName: Scalars['String']['output'];
};

export type SegmentChangeAnalysis = {
  __typename?: 'SegmentChangeAnalysis';
  changes: Array<SegmentChange>;
  date: Scalars['DateTime']['output'];
  newUsers: Array<Scalars['String']['output']>;
  previousDate: Scalars['DateTime']['output'];
  removedUsers: Array<Scalars['String']['output']>;
  totalCurrentUsers: Scalars['Int']['output'];
  totalPreviousUsers: Scalars['Int']['output'];
};

export type SegmentDailySnapshot = {
  __typename?: 'SegmentDailySnapshot';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  segmentsJson: Scalars['String']['output'];
  snapshotDate: Scalars['DateTime']['output'];
};

export type SegmentSla = {
  __typename?: 'SegmentSLA';
  id: Scalars['String']['output'];
  operator: Scalars['String']['output'];
  segment: Segment;
  segmentId: Scalars['String']['output'];
  slaConfiguration: SlaConfiguration;
  slaConfigurationId: Scalars['String']['output'];
};

export type SegmentSlaView = {
  __typename?: 'SegmentSLAView';
  id: Scalars['String']['output'];
  operator: Scalars['String']['output'];
  slaId: Scalars['String']['output'];
  slaLabel: Scalars['String']['output'];
  slaName: Scalars['String']['output'];
};

export type SegmentStat = {
  __typename?: 'SegmentStat';
  segmentId: Scalars['String']['output'];
  segmentName: Scalars['String']['output'];
  userCount: Scalars['Int']['output'];
};

export type SegmentUserDetail = {
  __typename?: 'SegmentUserDetail';
  email: Scalars['String']['output'];
  firstSeen?: Maybe<Scalars['DateTime']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  totalActions: Scalars['Int']['output'];
};

export type SegmentUserHistory = {
  __typename?: 'SegmentUserHistory';
  changes: Array<UserSegmentTimelineEntry>;
  userEmail: Scalars['String']['output'];
};

export type SegmentUsers = {
  __typename?: 'SegmentUsers';
  total: Scalars['Int']['output'];
  users: Array<Scalars['String']['output']>;
};

export type SegmentView = {
  __typename?: 'SegmentView';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slAs: Array<SegmentSlaView>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SegmentWithUsers = {
  __typename?: 'SegmentWithUsers';
  description: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  segmentId: Scalars['String']['output'];
  segmentName: Scalars['String']['output'];
  snapshotDate: Scalars['DateTime']['output'];
  users: Array<SegmentUserDetail>;
};

export type SentEmailReportView = {
  __typename?: 'SentEmailReportView';
  emailReportId: Scalars['String']['output'];
  errorMessage: Scalars['String']['output'];
  id: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  recipients: Array<Scalars['String']['output']>;
  sentDate: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
};

export type ShopInfo = {
  __typename?: 'ShopInfo';
  currency: Scalars['String']['output'];
  domain: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ShopifyCheckoutDetails = {
  __typename?: 'ShopifyCheckoutDetails';
  checkoutToken: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  discountCode: Scalars['String']['output'];
  paymentMethod: Scalars['String']['output'];
  shippingMethod: Scalars['String']['output'];
  step: Scalars['String']['output'];
  subtotal: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type ShopifyContextData = {
  __typename?: 'ShopifyContextData';
  cart?: Maybe<CartInfo>;
  checkout?: Maybe<CheckoutInfo>;
  customer: CustomerInfo;
  shop: ShopInfo;
};

export type ShopifyDataInput = {
  accessToken: Scalars['String']['input'];
  shopDomain: Scalars['String']['input'];
  shopName: Scalars['String']['input'];
};

export type ShopifyProduct = {
  __typename?: 'ShopifyProduct';
  category: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  sku: Scalars['String']['output'];
  title: Scalars['String']['output'];
  variantId: Scalars['String']['output'];
  variantTitle: Scalars['String']['output'];
  vendor: Scalars['String']['output'];
};

export type ShopifyStats = {
  __typename?: 'ShopifyStats';
  cartProducts: Array<Scalars['String']['output']>;
  cartSessions: Array<CartSession>;
  checkoutProducts: Array<Scalars['String']['output']>;
  checkoutSessions: Array<CheckoutSession>;
  productCartCounts: Array<KeyValuePairOfStringAndInt32>;
  productCheckoutCounts: Array<KeyValuePairOfStringAndInt32>;
  productViewCounts: Array<KeyValuePairOfStringAndInt32>;
  viewedProducts: Array<Scalars['String']['output']>;
};

export type ShopifyUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  shopifyData: ShopifyDataInput;
};

export type ShoppingData = {
  __typename?: 'ShoppingData';
  cartedProducts: Array<CartedProduct>;
  checkedOutProducts: Array<CheckedOutProduct>;
  totalCartAmount: Scalars['Decimal']['output'];
  totalCartProducts: Scalars['Int']['output'];
  totalCheckedOutProducts: Scalars['Int']['output'];
  totalVisitedProducts: Scalars['Int']['output'];
  visitedProducts: Array<VisitedProduct>;
};

export type TriggerSettings = {
  __typename?: 'TriggerSettings';
  enabled: Scalars['Boolean']['output'];
  integrationType: Scalars['String']['output'];
  time: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
  webhookUrl: Scalars['String']['output'];
};

export type TriggerSettingsInput = {
  enabled: Scalars['Boolean']['input'];
  integrationType: Scalars['String']['input'];
  time: Scalars['String']['input'];
  timezone: Scalars['String']['input'];
  webhookUrl: Scalars['String']['input'];
};

export type UpdateCampaignInput = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  segmentId: Scalars['String']['input'];
  status: Scalars['String']['input'];
  triggerSettings: TriggerSettingsInput;
};

export type UpdateEmailReportInput = {
  emails: Array<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  __typename?: 'User';
  aboutMe?: Maybe<Scalars['String']['output']>;
  accountType?: Maybe<Scalars['String']['output']>;
  applicationRoles: Array<UserApplicationRole>;
  city?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdOn: Scalars['DateTime']['output'];
  disabled: Scalars['Boolean']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  iban?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  paymentType?: Maybe<Scalars['String']['output']>;
  secondName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userGuiding: UserGuiding;
  username: Scalars['String']['output'];
};

export type UserActivityDetail = {
  __typename?: 'UserActivityDetail';
  activityHistory: Array<ActivityHistoryDay>;
  activityScore: Scalars['Float']['output'];
  churnRisk: Scalars['String']['output'];
  country: Scalars['String']['output'];
  deviceType: Scalars['String']['output'];
  lastActive: Scalars['String']['output'];
  matchedSLAs: Array<SlaConfiguration>;
  referrer: Scalars['String']['output'];
  segments: Array<Segment>;
  shoppingData: ShoppingData;
  totalActions: Scalars['Int']['output'];
  userEmail: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserActivitySummary = {
  __typename?: 'UserActivitySummary';
  activityScore: Scalars['Float']['output'];
  buttonClicks: Scalars['Float']['output'];
  churnRisk: Scalars['String']['output'];
  country: Scalars['String']['output'];
  dailyActivities: Array<DailyActivitySummary>;
  deviceType: Scalars['String']['output'];
  formSubmits: Scalars['Float']['output'];
  lastActive: Scalars['DateTime']['output'];
  matchedSLAs: Array<SlaConfiguration>;
  pageViews: Scalars['Float']['output'];
  referrer: Scalars['String']['output'];
  segments: Array<Segment>;
  totalActions: Scalars['Int']['output'];
  userEmail: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserApplicationRole = {
  __typename?: 'UserApplicationRole';
  applicationRole?: Maybe<ApplicationRole>;
  applicationRoleId?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
  userRoleId: Scalars['Int']['output'];
};

export type UserContextData = {
  __typename?: 'UserContextData';
  anonymousId: Scalars['String']['output'];
  clientOfUserId: Scalars['String']['output'];
  extraElements: Array<KeyValuePairOfStringAndObject>;
  userEmail: Scalars['String']['output'];
};

export type UserDailyActivity = {
  __typename?: 'UserDailyActivity';
  activities?: Maybe<Array<Maybe<DailyActivity>>>;
  contextData?: Maybe<ShopifyContextData>;
  country: Scalars['String']['output'];
  date?: Maybe<Scalars['DateTime']['output']>;
  deviceType: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  lastActive?: Maybe<Scalars['DateTime']['output']>;
  metrics?: Maybe<DailyMetrics>;
  productId?: Maybe<Scalars['String']['output']>;
  referrerSource: Scalars['String']['output'];
  userContextData: UserContextData;
  userEmail?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserEmailDetail = {
  __typename?: 'UserEmailDetail';
  country: Scalars['String']['output'];
  deviceType: Scalars['String']['output'];
  email: Scalars['String']['output'];
  source: Scalars['String']['output'];
};

export type UserEmailStats = {
  __typename?: 'UserEmailStats';
  activeUserEmails: Array<UserEmailDetail>;
  addedToCartEmails: Array<UserEmailDetail>;
  checkedOutEmails: Array<UserEmailDetail>;
  checkoutPageAbandonerEmails: Array<UserEmailDetail>;
  checkoutPageCompletedEmails: Array<UserEmailDetail>;
  checkoutPageVisitorEmails: Array<UserEmailDetail>;
  noActiveUserEmails: Array<UserEmailDetail>;
  viewedProductEmails: Array<UserEmailDetail>;
};

export type UserFlowStats = {
  __typename?: 'UserFlowStats';
  firstSeen: Scalars['DateTime']['output'];
  flows: Array<PageFlow>;
  lastSeen: Scalars['DateTime']['output'];
  pageVisits: Array<PageVisit>;
  totalPageViews: Scalars['Int']['output'];
  uniquePageViews: Scalars['Int']['output'];
  userEmail: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserGuiding = {
  __typename?: 'UserGuiding';
  hasActivatedWidget: Scalars['Boolean']['output'];
  hasCreatedCampaign: Scalars['Boolean']['output'];
  hasCreatedFilter: Scalars['Boolean']['output'];
  hasCreatedLeadScoring: Scalars['Boolean']['output'];
  hasCreatedSegment: Scalars['Boolean']['output'];
  hasFinishedAppInstall: Scalars['Boolean']['output'];
  hasUsedAIAssistant: Scalars['Boolean']['output'];
};

export type UserProductInteraction = {
  __typename?: 'UserProductInteraction';
  addedToCartProducts: Array<Scalars['String']['output']>;
  anonymousId: Scalars['String']['output'];
  checkedOutProducts: Array<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  lastInteraction: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  viewedProducts: Array<Scalars['String']['output']>;
};

export type UserRolesType = {
  __typename?: 'UserRolesType';
  roles: Array<UserApplicationRole>;
  userId: Scalars['String']['output'];
};

export type UserSegmentMove = {
  __typename?: 'UserSegmentMove';
  fromSegmentId: Scalars['String']['output'];
  fromSegmentName: Scalars['String']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isMoved: Scalars['Boolean']['output'];
  isMovedFromOtherSegment: Scalars['Boolean']['output'];
  isMovedToOtherSegment: Scalars['Boolean']['output'];
  isNew: Scalars['Boolean']['output'];
  toSegmentId: Scalars['String']['output'];
  toSegmentName: Scalars['String']['output'];
  userEmail: Scalars['String']['output'];
};

export type UserSegmentTimelineEntry = {
  __typename?: 'UserSegmentTimelineEntry';
  date: Scalars['DateTime']['output'];
  fromSegmentId: Scalars['String']['output'];
  fromSegmentName: Scalars['String']['output'];
  toSegmentId: Scalars['String']['output'];
  toSegmentName: Scalars['String']['output'];
};

export type UserSignupResponse = {
  __typename?: 'UserSignupResponse';
  product: Product;
  user: User;
  widgetCode: Scalars['String']['output'];
};

export type VisitedProduct = {
  __typename?: 'VisitedProduct';
  lastVisited: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  visitCount: Scalars['Int']['output'];
};

export type WeeklyActivityStats = {
  __typename?: 'WeeklyActivityStats';
  averageActiveUsersPerDay: Scalars['Float']['output'];
  averageActivitiesPerUser: Scalars['Float']['output'];
  averageCartAbandonmentRate: Scalars['Float']['output'];
  averageCartItemsPerDay: Scalars['Float']['output'];
  averageCartSessionsPerDay: Scalars['Float']['output'];
  averageCartValue: Scalars['Float']['output'];
  averageCheckoutCompletionRate: Scalars['Float']['output'];
  averageCheckoutPageAbandonersPerDay: Scalars['Float']['output'];
  averageCheckoutPageCompletedPerDay: Scalars['Float']['output'];
  averageCheckoutPageVisitorsPerDay: Scalars['Float']['output'];
  averageCheckoutSessionsPerDay: Scalars['Float']['output'];
  averageChurnRate: Scalars['Float']['output'];
  averageClicksPerUser: Scalars['Float']['output'];
  averageDailyActivities: Scalars['Float']['output'];
  averageFormSubmitsPerUser: Scalars['Float']['output'];
  averageInactiveUsers: Scalars['Float']['output'];
  averagePageChangesPerUser: Scalars['Float']['output'];
  averageUniqueCheckoutProductsPerDay: Scalars['Float']['output'];
  averageUniqueProductViewsPerDay: Scalars['Float']['output'];
  averageUniqueProductsInCartPerDay: Scalars['Float']['output'];
  averageUserInteraction: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  product?: Maybe<Product>;
  productId: Scalars['String']['output'];
  shopifyMetrics: WeeklyShopifyStats;
  totalCartItems: Scalars['Int']['output'];
  totalCartSessions: Scalars['Int']['output'];
  totalCartValue: Scalars['Float']['output'];
  totalCheckoutPageAbandoners: Scalars['Int']['output'];
  totalCheckoutPageCompleted: Scalars['Int']['output'];
  totalCheckoutPageVisitors: Scalars['Int']['output'];
  totalCheckoutSessions: Scalars['Int']['output'];
  totalUniqueCheckoutProducts: Scalars['Int']['output'];
  totalUniqueProductViews: Scalars['Int']['output'];
  totalUniqueProductsInCart: Scalars['Int']['output'];
  totalUniqueUsers: Scalars['Float']['output'];
  totalWeeklyActivities: Scalars['Float']['output'];
  weekEndDate: Scalars['DateTime']['output'];
  weekStartDate: Scalars['DateTime']['output'];
  weeklyShopifyStatsJson?: Maybe<Scalars['String']['output']>;
};

export type WeeklyShopifyStats = {
  __typename?: 'WeeklyShopifyStats';
  allCartProducts: Array<Scalars['String']['output']>;
  allCheckoutProducts: Array<Scalars['String']['output']>;
  allViewedProducts: Array<Scalars['String']['output']>;
  dailyStats: Array<DailyShopifyStats>;
  mostAbandonedProducts: Array<KeyValuePairOfStringAndDouble>;
  productCartCounts: Array<KeyValuePairOfStringAndInt32>;
  productCheckoutCounts: Array<KeyValuePairOfStringAndInt32>;
  productViewCounts: Array<KeyValuePairOfStringAndInt32>;
  topPerformingProducts: Array<KeyValuePairOfStringAndDouble>;
};

export type ProductFieldsFragment = { __typename?: 'Product', productId: string, name: string, url: string, description?: string | null, createdBy: string, createdOn: any, updatedOn: any };

export type DailyStatsFieldsFragment = { __typename?: 'DailyActivityStats', id?: string | null, date?: any | null, productId?: string | null, activeUsers?: number | null, totalUsersLast30Days?: number | null, inactiveUsers?: number | null, noActionVisitors: number, churnRate?: number | null, averageUserInteraction?: number | null, averageActivitiesPerUser?: number | null, averageClicksPerUser?: number | null, averagePageChangesPerUser?: number | null, averageFormSubmitsPerUser?: number | null, totalDailyActivities?: number | null, uniqueProductViews: number, uniqueProductsInCart: number, uniqueCheckoutProducts: number, averageCartValue: number, averageCheckoutValue: number, totalCartValue: number, totalCartItems: number, uniqueCartSessions: number, uniqueCheckoutSessions: number, cartAbandonmentRate: number, userEmails: { __typename?: 'UserEmailStats', activeUserEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, viewedProductEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, addedToCartEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkedOutEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageVisitorEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageAbandonerEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageCompletedEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }> }, productInteractions: { __typename?: 'ProductUserInteractionStats', products: Array<{ __typename?: 'KeyValuePairOfStringAndProductUserInteractions', key: string, value: { __typename?: 'ProductUserInteractions', viewedByUsers: Array<string>, addedToCartByUsers: Array<string>, checkedOutByUsers: Array<string>, lastInteraction: any } }> }, segmentStats: Array<{ __typename?: 'SegmentStat', segmentId: string, segmentName: string, userCount: number }>, slaStats: Array<{ __typename?: 'SLAStat', slaId: string, slaName: string, userCount: number }> };

export type WeeklyStatsFieldsFragment = { __typename?: 'WeeklyActivityStats', id: number, weekStartDate: any, weekEndDate: any, productId: string, totalUniqueUsers: number, averageActiveUsersPerDay: number, averageInactiveUsers: number, averageChurnRate: number, averageUserInteraction: number, averageActivitiesPerUser: number, averageClicksPerUser: number, averagePageChangesPerUser: number, averageFormSubmitsPerUser: number, totalWeeklyActivities: number, averageDailyActivities: number, totalUniqueProductViews: number, totalUniqueProductsInCart: number, totalUniqueCheckoutProducts: number, averageCartValue: number, totalCartValue: number, totalCartItems: number, totalCheckoutSessions: number, totalCartSessions: number, averageCartAbandonmentRate: number };

export type UserActivityFieldsFragment = { __typename?: 'UserDailyActivity', id?: string | null, userId?: string | null, productId?: string | null, date?: any | null, userEmail?: string | null, lastActive?: any | null, activities?: Array<{ __typename?: 'DailyActivity', timestamp: any, actionType?: ActionType | null, url?: string | null, referrer?: string | null, activityDetails?: { __typename?: 'ActivityDetails', timestamp?: string | null, action?: string | null, actionText?: string | null } | null } | null> | null, metrics?: { __typename?: 'DailyMetrics', totalActions?: number | null, buttonClicks?: number | null, pageViews?: number | null, formSubmits?: number | null, visitedPages?: Array<string | null> | null, firstAction?: any | null, lastAction?: any | null } | null };

export type AllTimeProductActivityStatsFieldsFragment = { __typename?: 'AllTimeProductActivityStats', productId: string, totalActiveUsers: number, noActionVisitors: number, totalVisitsCount: number, totalCartsCount: number, totalCheckoutsCount: number, averageCartValue: number, totalCartValue: number, totalCartItems: number, totalUniqueProducts: number, cartAbandonmentRate: number, inactiveUsers: number, churnRate: number, averageUserInteraction: number, averageActivitiesPerUser: number, averageClicksPerUser: number, averagePageChangesPerUser: number, averageFormSubmitsPerUser: number, totalActivities: number, uniqueProductViews: number, uniqueProductsInCart: number, uniqueCartSessions: number, uniqueCheckoutSessions: number, averageCheckoutValue: number, totalCheckoutValue: number, totalCheckoutItems: number, checkoutPageVisitorsCount: number, checkoutPageAbandonersCount: number, checkoutPageCompletedCount: number, checkoutCompletionRate: number, uniqueUserIds: Array<string>, uniqueAnonymousIds: Array<string>, uniqueEmails: Array<string>, uniqueViewedProducts: Array<string>, uniqueCartProducts: Array<string>, uniqueCheckoutProducts: Array<string>, productViewCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, productCartCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, productCheckoutCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, userProductInteractions: Array<{ __typename?: 'UserProductInteraction', userId: string, anonymousId: string, email: string, viewedProducts: Array<string>, addedToCartProducts: Array<string>, checkedOutProducts: Array<string>, lastInteraction: any }>, userEmails: { __typename?: 'UserEmailStats', activeUserEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, viewedProductEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, addedToCartEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkedOutEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageVisitorEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageAbandonerEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageCompletedEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }> }, slaStats: Array<{ __typename?: 'SLAStat', slaId: string, slaName: string, userCount: number }>, segmentStats: Array<{ __typename?: 'SegmentStat', segmentId: string, segmentName: string, userCount: number }>, shopifyMetrics: { __typename?: 'ShopifyStats', viewedProducts: Array<string>, cartProducts: Array<string>, checkoutProducts: Array<string>, productViewCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, productCartCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, productCheckoutCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, cartSessions: Array<{ __typename?: 'CartSession', sessionId: string, userEmail: string, totalValue: number, itemCount: number, products: Array<string>, timestamp: any }>, checkoutSessions: Array<{ __typename?: 'CheckoutSession', sessionId: string, userEmail: string, totalValue: number, itemCount: number, products: Array<string>, timestamp: any, completed: boolean }> } };

export type PageFlowStatsFragmentFragment = { __typename?: 'PageFlowStats', productId: string, userFlows: Array<{ __typename?: 'UserFlowStats', userId: string, userEmail: string, firstSeen: any, lastSeen: any, totalPageViews: number, uniquePageViews: number, pageVisits: Array<{ __typename?: 'PageVisit', url: string, visitCount: number, firstVisit: any, lastVisit: any, averageTimeSpent: number }>, flows: Array<{ __typename?: 'PageFlow', sourceUrl: string, targetUrl: string, transitionCount: number, firstTransition: any, lastTransition: any }> }>, aggregatedFlows: Array<{ __typename?: 'AggregatedFlow', sourceUrl: string, targetUrl: string, totalTransitions: number, uniqueUsers: number, averageTimeSpent: number }>, pageStatistics: Array<{ __typename?: 'KeyValuePairOfStringAndPageStats', key: string, value: { __typename?: 'PageStats', totalViews: number, uniqueUsers: number, averageTimeSpent: number, mostActiveDate: any, entryCount: number, exitCount: number } }> };

export type AddPaymentMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
  amount: Scalars['Decimal']['input'];
  paymentMethod: Scalars['String']['input'];
}>;


export type AddPaymentMutation = { __typename?: 'Mutation', addPayment: { __typename?: 'PaymentHistory', id: string, amount: any, paymentDate: any, paymentMethod: string, status: string, product: { __typename?: 'Product', productId: string, remainingCredit: any, lastPaymentDate?: any | null, nextBillingDate?: any | null, lastUsageReset: any } } };

export type GetAnalyticsInsightsMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  message: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetAnalyticsInsightsMutation = { __typename?: 'Mutation', analyticsInsights: string };

export type CreateBetaSignupMutationVariables = Exact<{
  input: BetaSignupInput;
}>;


export type CreateBetaSignupMutation = { __typename?: 'Mutation', createBetaSignup?: { __typename?: 'UserSignupResponse', widgetCode: string, user: { __typename?: 'User', id: string, email?: string | null, createdOn: any }, product: { __typename?: 'Product', productId: string, name: string, url: string, description?: string | null } } | null };

export type CreateCampaignMutationVariables = Exact<{
  input: CreateCampaignInput;
}>;


export type CreateCampaignMutation = { __typename?: 'Mutation', createCampaign: { __typename?: 'CampaignView', id: string, name: string, description: string, productId: string, segmentId: string, status: string, createdBy: string, createdAt: any, updatedAt: any, triggerSettings: { __typename?: 'TriggerSettings', enabled: boolean, time: string, timezone: string, webhookUrl: string, integrationType: string }, triggerHistory: Array<{ __typename?: 'CampaignTriggerHistory', id: string, executedAt: any, snapshotDate: any, success: boolean, error: string, userCount: number, segmentUsers: { __typename?: 'SegmentUsers', users: Array<string>, total: number }, webhookCall: { __typename?: 'CampaignTriggerWebhookCall', id: string, timestamp: any, status: string, statusCode?: number | null, responseTime?: number | null, error: string } }> } };

export type UpdateCampaignMutationVariables = Exact<{
  input: UpdateCampaignInput;
}>;


export type UpdateCampaignMutation = { __typename?: 'Mutation', updateCampaign: { __typename?: 'CampaignView', id: string, name: string, description: string, productId: string, segmentId: string, status: string, createdBy: string, createdAt: any, updatedAt: any, triggerSettings: { __typename?: 'TriggerSettings', enabled: boolean, time: string, timezone: string, webhookUrl: string, integrationType: string }, triggerHistory: Array<{ __typename?: 'CampaignTriggerHistory', id: string, executedAt: any, snapshotDate: any, success: boolean, error: string, userCount: number, segmentUsers: { __typename?: 'SegmentUsers', users: Array<string>, total: number }, webhookCall: { __typename?: 'CampaignTriggerWebhookCall', id: string, timestamp: any, status: string, statusCode?: number | null, responseTime?: number | null, error: string } }> } };

export type DeleteCampaignMutationVariables = Exact<{
  campaignId: Scalars['String']['input'];
}>;


export type DeleteCampaignMutation = { __typename?: 'Mutation', deleteCampaign: boolean };

export type UpdateCampaignStatusMutationVariables = Exact<{
  campaignId: Scalars['String']['input'];
  status: Scalars['String']['input'];
}>;


export type UpdateCampaignStatusMutation = { __typename?: 'Mutation', updateCampaignStatus: { __typename?: 'CampaignView', id: string, name: string, description: string, productId: string, segmentId: string, status: string, createdBy: string, createdAt: any, updatedAt: any, triggerSettings: { __typename?: 'TriggerSettings', enabled: boolean, time: string, timezone: string, webhookUrl: string, integrationType: string }, triggerHistory: Array<{ __typename?: 'CampaignTriggerHistory', id: string, executedAt: any, snapshotDate: any, success: boolean, error: string, userCount: number, segmentUsers: { __typename?: 'SegmentUsers', users: Array<string>, total: number }, webhookCall: { __typename?: 'CampaignTriggerWebhookCall', id: string, timestamp: any, status: string, statusCode?: number | null, responseTime?: number | null, error: string } }> } };

export type AddTriggerHistoryMutationVariables = Exact<{
  input: AddTriggerHistoryInput;
}>;


export type AddTriggerHistoryMutation = { __typename?: 'Mutation', addTriggerHistory: boolean };

export type CreateUserActivityMutationVariables = Exact<{
  input: Scalars['String']['input'];
  activityType?: InputMaybe<Scalars['Int']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserActivityMutation = { __typename?: 'Mutation', createUserActivity: boolean };

export type CreateContactRequestMutationVariables = Exact<{
  input: CreateContactRequestInput;
}>;


export type CreateContactRequestMutation = { __typename?: 'Mutation', createContactRequest?: { __typename?: 'ContactRequest', contacter: number, nameSurname: string, email?: string | null } | null };

export type CreateOrUpdateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateOrUpdateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'UserSignupResponse', user: { __typename?: 'User', id: string, email?: string | null, createdOn: any } } | null };

export type CreateShopifyUserMutationVariables = Exact<{
  input: ShopifyUserInput;
}>;


export type CreateShopifyUserMutation = { __typename?: 'Mutation', createShopifyUser?: { __typename?: 'UserSignupResponse', widgetCode: string, user: { __typename?: 'User', id: string, email?: string | null }, product: { __typename?: 'Product', productId: string, name: string, url: string } } | null };

export type SaveSegmentMutationVariables = Exact<{
  input: SaveSegmentInput;
}>;


export type SaveSegmentMutation = { __typename?: 'Mutation', saveSegment: { __typename?: 'SegmentView', id: string, name: string, label: string, description: string, isActive: boolean, createdAt: any, updatedAt: any, slAs: Array<{ __typename?: 'SegmentSLAView', id: string, slaId: string }> } };

export type DeleteCustomerSegmentMutationVariables = Exact<{
  segmentId: Scalars['String']['input'];
}>;


export type DeleteCustomerSegmentMutation = { __typename?: 'Mutation', deleteSegment: boolean };

export type GenerateOptimizedLeadScoringRulesMutationVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GenerateOptimizedLeadScoringRulesMutation = { __typename?: 'Mutation', generateOptimizedLeadScoringRules: Array<{ __typename?: 'LeadScoringRuleView', id: string, productId: string, name: string, description: string, type: string, operator: string, value: string, points: number, isActive: boolean, createdAt: any, updatedAt: any }> };

export type SaveGeneratedLeadScoringRulesMutationVariables = Exact<{
  rules: Array<SaveLeadScoringRuleInput> | SaveLeadScoringRuleInput;
}>;


export type SaveGeneratedLeadScoringRulesMutation = { __typename?: 'Mutation', saveGeneratedLeadScoringRules: Array<{ __typename?: 'LeadScoringRuleView', id: string, productId: string, name: string, description: string, type: string, operator: string, value: string, points: number, isActive: boolean, createdAt: any, updatedAt: any }> };

export type GenerateOptimizedSlaConfigurationsMutationVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GenerateOptimizedSlaConfigurationsMutation = { __typename?: 'Mutation', generateOptimizedSLAConfigurations: Array<{ __typename?: 'ChatGptSlaConfigurationView', name: string, label: string, createdAt?: any | null, updatedAt?: any | null, rules: Array<{ __typename?: 'ChatGPTSLARuleInput', operator: string, conditions: Array<{ __typename?: 'ChatGPTSLAConditionInput', type: string, value: string }> }> }> };

export type GenerateOptimizedSegmentsMutationVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GenerateOptimizedSegmentsMutation = { __typename?: 'Mutation', generateOptimizedSegments: Array<{ __typename?: 'SegmentView', id: string, name: string, label: string, description: string, isActive: boolean, createdAt: any, updatedAt: any, slAs: Array<{ __typename?: 'SegmentSLAView', id: string, slaId: string, slaName: string, slaLabel: string, operator: string }> }> };

export type SaveGeneratedSegmentsMutationVariables = Exact<{
  segments: Array<SaveSegmentInput> | SaveSegmentInput;
}>;


export type SaveGeneratedSegmentsMutation = { __typename?: 'Mutation', saveGeneratedSegments: Array<{ __typename?: 'SegmentView', id: string, name: string, label: string, description: string, isActive: boolean, createdAt: any, updatedAt: any, slAs: Array<{ __typename?: 'SegmentSLAView', id: string, slaId: string, slaName: string, slaLabel: string, operator: string }> }> };

export type IncrementProductUsageMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  usageType: Scalars['String']['input'];
  amount: Scalars['Int']['input'];
}>;


export type IncrementProductUsageMutation = { __typename?: 'Mutation', incrementProductUsage: { __typename?: 'Product', productId: string, totalRawDataCount: any, totalTokensCount: any, remainingCredit: any } };

export type SaveLeadScoringRuleMutationVariables = Exact<{
  input: SaveLeadScoringRuleInput;
}>;


export type SaveLeadScoringRuleMutation = { __typename?: 'Mutation', saveLeadScoringRule: { __typename?: 'LeadScoringRuleView', id: string, productId: string, name: string, description: string, type: string, operator: string, value: string, points: number, isActive: boolean, createdAt: any, updatedAt: any } };

export type DeleteLeadScoringRuleMutationVariables = Exact<{
  ruleId: Scalars['String']['input'];
}>;


export type DeleteLeadScoringRuleMutation = { __typename?: 'Mutation', deleteLeadScoringRule: boolean };

export type SaveEmailReportMutationVariables = Exact<{
  input: SaveEmailReportInput;
}>;


export type SaveEmailReportMutation = { __typename?: 'Mutation', saveEmailReport: { __typename?: 'EmailReportView', id: string, productId: string, isActive: boolean, createdAt: any, updatedAt: any, recipients: Array<string> } };

export type UpdateEmailReportMutationVariables = Exact<{
  input: UpdateEmailReportInput;
}>;


export type UpdateEmailReportMutation = { __typename?: 'Mutation', updateEmailReport: { __typename?: 'EmailReportView', id: string, productId: string, isActive: boolean, createdAt: any, updatedAt: any, recipients: Array<string> } };

export type DeleteEmailReportMutationVariables = Exact<{
  reportId: Scalars['String']['input'];
}>;


export type DeleteEmailReportMutation = { __typename?: 'Mutation', deleteEmailReport: boolean };

export type RegisterSentEmailReportMutationVariables = Exact<{
  input: RegisterSentEmailReportInput;
}>;


export type RegisterSentEmailReportMutation = { __typename?: 'Mutation', registerSentEmailReport: { __typename?: 'SentEmailReportView', id: string, emailReportId: string, productId: string, sentDate: any, status: string, errorMessage: string, recipients: Array<string> } };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProductWithDetails: { __typename?: 'Product', productId: string, name: string, url: string, description?: string | null, createdBy: string, createdOn: any, updatedOn: any } };

export type UpdateProductMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  input: CreateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Product', productId: string, name: string, url: string, description?: string | null, createdBy: string, createdOn: any, updatedOn: any } };

export type DeleteProductMutationVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: boolean };

export type SaveGeneratedSlaConfigurationsMutationVariables = Exact<{
  configurations: Array<SaveSlaConfigurationInput> | SaveSlaConfigurationInput;
}>;


export type SaveGeneratedSlaConfigurationsMutation = { __typename?: 'Mutation', saveGeneratedSLAConfigurations: Array<{ __typename?: 'SLAConfiguration', id: string, productId: string, name: string, label: string, createdAt: any, updatedAt: any, rules: Array<{ __typename?: 'SLARule', id: string, operator: string, conditions: Array<{ __typename?: 'SLACondition', type: string, value: string }> }> }> };

export type GetSegmentAnalyticsInsightsMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  message: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetSegmentAnalyticsInsightsMutation = { __typename?: 'Mutation', segmentAnalyticsInsights: string };

export type SaveSlaConfigurationMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  label: Scalars['String']['input'];
  rules: Array<SlaRuleInput> | SlaRuleInput;
}>;


export type SaveSlaConfigurationMutation = { __typename?: 'Mutation', saveSLAConfiguration: { __typename?: 'SLAConfiguration', id: string, name: string, label: string, rules: Array<{ __typename?: 'SLARule', id: string, operator: string, conditions: Array<{ __typename?: 'SLACondition', type: string, value: string }> }> } };

export type DeleteSlaConfigurationMutationVariables = Exact<{
  slaId: Scalars['String']['input'];
}>;


export type DeleteSlaConfigurationMutation = { __typename?: 'Mutation', deleteSLAConfiguration: boolean };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'UserSignupResponse', widgetCode: string, user: { __typename?: 'User', id: string, email?: string | null, createdOn: any }, product: { __typename?: 'Product', productId: string, name: string, url: string, description?: string | null } } | null };

export type UpdateUserGuidingStatusMutationVariables = Exact<{
  guidingStep: Scalars['String']['input'];
}>;


export type UpdateUserGuidingStatusMutation = { __typename?: 'Mutation', updateUserGuidingStatus: { __typename?: 'User', id: string, userGuiding: { __typename?: 'UserGuiding', hasFinishedAppInstall: boolean, hasActivatedWidget: boolean, hasUsedAIAssistant: boolean, hasCreatedFilter: boolean, hasCreatedLeadScoring: boolean, hasCreatedSegment: boolean, hasCreatedCampaign: boolean } } };

export type VerifyProductEmbeddingMutationVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type VerifyProductEmbeddingMutation = { __typename?: 'Mutation', verifyProductEmbedding: { __typename?: 'Product', productId: string, name: string, embedStatus: EmbedStatus, lastEmbedCheck?: any | null } };

export type GetCampaignsByProductQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetCampaignsByProductQuery = { __typename?: 'Query', campaignsByProduct: Array<{ __typename?: 'CampaignView', id: string, name: string, description: string, productId: string, segmentId: string, status: string, createdBy: string, createdAt: any, updatedAt: any, triggerSettings: { __typename?: 'TriggerSettings', enabled: boolean, time: string, timezone: string, webhookUrl: string, integrationType: string }, triggerHistory: Array<{ __typename?: 'CampaignTriggerHistory', id: string, executedAt: any, snapshotDate: any, success: boolean, error: string, userCount: number, segmentUsers: { __typename?: 'SegmentUsers', users: Array<string>, total: number }, webhookCall: { __typename?: 'CampaignTriggerWebhookCall', id: string, timestamp: any, status: string, statusCode?: number | null, responseTime?: number | null, error: string } }> }> };

export type GetCampaignByIdQueryVariables = Exact<{
  campaignId: Scalars['String']['input'];
}>;


export type GetCampaignByIdQuery = { __typename?: 'Query', campaignById: { __typename?: 'CampaignView', id: string, name: string, description: string, productId: string, segmentId: string, status: string, createdBy: string, createdAt: any, updatedAt: any, triggerSettings: { __typename?: 'TriggerSettings', enabled: boolean, time: string, timezone: string, webhookUrl: string, integrationType: string }, triggerHistory: Array<{ __typename?: 'CampaignTriggerHistory', id: string, executedAt: any, snapshotDate: any, success: boolean, error: string, userCount: number, segmentUsers: { __typename?: 'SegmentUsers', users: Array<string>, total: number }, webhookCall: { __typename?: 'CampaignTriggerWebhookCall', id: string, timestamp: any, status: string, statusCode?: number | null, responseTime?: number | null, error: string } }> } };

export type GetSegmentsByProductQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetSegmentsByProductQuery = { __typename?: 'Query', segmentsByProduct: Array<{ __typename?: 'SegmentView', id: string, name: string, label: string, description: string, isActive: boolean, createdAt: any, updatedAt: any, slAs: Array<{ __typename?: 'SegmentSLAView', id: string, slaId: string, slaName: string, slaLabel: string, operator: string }> }> };

export type GetSegmentByIdQueryVariables = Exact<{
  segmentId: Scalars['String']['input'];
}>;


export type GetSegmentByIdQuery = { __typename?: 'Query', segmentById?: { __typename?: 'SegmentView', id: string, name: string, label: string, description: string, isActive: boolean, createdAt: any, updatedAt: any, slAs: Array<{ __typename?: 'SegmentSLAView', id: string, slaId: string, slaName: string, slaLabel: string, operator: string }> } | null };

export type GetCohortAnalysisQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetCohortAnalysisQuery = { __typename?: 'Query', cohortAnalysis: { __typename?: 'CohortAnalysisData', cohorts: Array<{ __typename?: 'CohortData', cohortDate: any, userCount: number, userEmails: Array<string>, retentionData: Array<{ __typename?: 'RetentionData', period: number, activeUsers: number, retentionRate: number, activeUserEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }> }> }> } };

export type GetProductUsageStatsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetProductUsageStatsQuery = { __typename?: 'Query', productUsageStats: { __typename?: 'Product', productId: string, name: string, remainingCredit: any, lastPaymentDate?: any | null, nextBillingDate?: any | null, totalRawDataCount: any, totalTokensCount: any, lastUsageReset: any, paymentHistory: Array<{ __typename?: 'PaymentHistory', id: string, amount: any, paymentDate: any, paymentMethod: string, status: string, description: string }> } };

export type GetLeadScoringRulesByProductQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetLeadScoringRulesByProductQuery = { __typename?: 'Query', leadScoringRulesByProduct: Array<{ __typename?: 'LeadScoringRuleView', id: string, productId: string, name: string, description: string, type: string, operator: string, value: string, points: number, isActive: boolean, createdAt: any, updatedAt: any }> };

export type GetLeadScoringRuleByIdQueryVariables = Exact<{
  ruleId: Scalars['String']['input'];
}>;


export type GetLeadScoringRuleByIdQuery = { __typename?: 'Query', leadScoringRuleById?: { __typename?: 'LeadScoringRuleView', id: string, productId: string, name: string, description: string, type: string, operator: string, value: string, points: number, isActive: boolean, createdAt: any, updatedAt: any } | null };

export type GetEmailReportsByProductQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetEmailReportsByProductQuery = { __typename?: 'Query', emailReportsByProduct: Array<{ __typename?: 'EmailReportView', id: string, productId: string, isActive: boolean, createdAt: any, updatedAt: any, recipients: Array<string> }> };

export type GetEmailReportByIdQueryVariables = Exact<{
  reportId: Scalars['String']['input'];
}>;


export type GetEmailReportByIdQuery = { __typename?: 'Query', emailReportById: { __typename?: 'EmailReportView', id: string, productId: string, isActive: boolean, createdAt: any, updatedAt: any, recipients: Array<string> } };

export type GetSentEmailReportsByProductQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetSentEmailReportsByProductQuery = { __typename?: 'Query', sentEmailReportsByProduct: Array<{ __typename?: 'SentEmailReportView', id: string, emailReportId: string, productId: string, sentDate: any, status: string, errorMessage: string, recipients: Array<string> }> };

export type GetSentEmailReportByIdQueryVariables = Exact<{
  sentReportId: Scalars['String']['input'];
}>;


export type GetSentEmailReportByIdQuery = { __typename?: 'Query', sentEmailReportById: { __typename?: 'SentEmailReportView', id: string, emailReportId: string, productId: string, sentDate: any, status: string, errorMessage: string, recipients: Array<string> } };

export type GetPageFlowStatsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetPageFlowStatsQuery = { __typename?: 'Query', pageFlowStats: Array<{ __typename?: 'PageFlowStats', productId: string, userFlows: Array<{ __typename?: 'UserFlowStats', userId: string, userEmail: string, firstSeen: any, lastSeen: any, totalPageViews: number, uniquePageViews: number, pageVisits: Array<{ __typename?: 'PageVisit', url: string, visitCount: number, firstVisit: any, lastVisit: any, averageTimeSpent: number }>, flows: Array<{ __typename?: 'PageFlow', sourceUrl: string, targetUrl: string, transitionCount: number, firstTransition: any, lastTransition: any }> }>, aggregatedFlows: Array<{ __typename?: 'AggregatedFlow', sourceUrl: string, targetUrl: string, totalTransitions: number, uniqueUsers: number, averageTimeSpent: number }>, pageStatistics: Array<{ __typename?: 'KeyValuePairOfStringAndPageStats', key: string, value: { __typename?: 'PageStats', totalViews: number, uniqueUsers: number, averageTimeSpent: number, mostActiveDate: any, entryCount: number, exitCount: number } }> }> };

export type GetProductByIdQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', productById?: { __typename?: 'Product', productId: string, name: string, url: string, description?: string | null, createdBy: string, createdOn: any, updatedOn: any } | null };

export type GetMyProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyProductsQuery = { __typename?: 'Query', myProducts: Array<{ __typename?: 'Product', productId: string, name: string, url: string, description?: string | null, createdBy: string, createdOn: any, updatedOn: any, totalRawDataCount: any, totalTokensCount: any, remainingCredit: any, embedStatus: EmbedStatus, lastEmbedCheck?: any | null }> };

export type GetSegmentSnapshotsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetSegmentSnapshotsQuery = { __typename?: 'Query', segmentSnapshots: Array<{ __typename?: 'SegmentDailySnapshot', id: string, productId: string, snapshotDate: any, segmentsJson: string, createdAt: any }> };

export type GetSlaSnapshotsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetSlaSnapshotsQuery = { __typename?: 'Query', slaSnapshots: Array<{ __typename?: 'SLADailySnapshot', id: string, productId: string, snapshotDate: any, slAsJson: string, createdAt: any }> };

export type GetLatestSegmentSnapshotQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetLatestSegmentSnapshotQuery = { __typename?: 'Query', latestSegmentSnapshot?: { __typename?: 'SegmentDailySnapshot', id: string, productId: string, snapshotDate: any, segmentsJson: string, createdAt: any } | null };

export type GetLatestSlaSnapshotQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetLatestSlaSnapshotQuery = { __typename?: 'Query', latestSLASnapshot?: { __typename?: 'SLADailySnapshot', id: string, productId: string, snapshotDate: any, slAsJson: string, createdAt: any } | null };

export type GetSegmentChangesAnalysisQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
}>;


export type GetSegmentChangesAnalysisQuery = { __typename?: 'Query', segmentChangesAnalysis: { __typename?: 'SegmentChangeAnalysis', date: any, previousDate: any, totalCurrentUsers: number, totalPreviousUsers: number, newUsers: Array<string>, removedUsers: Array<string>, changes: Array<{ __typename?: 'SegmentChange', segmentId: string, segmentName: string, currentUserCount: number, previousUserCount: number, newUsers: Array<string>, removedUsers: Array<string>, isDeleted: boolean, movedToOtherSegments: Array<{ __typename?: 'UserSegmentMove', userEmail: string, fromSegmentId: string, fromSegmentName: string, toSegmentId: string, toSegmentName: string }>, movedFromOtherSegments: Array<{ __typename?: 'UserSegmentMove', userEmail: string, fromSegmentId: string, fromSegmentName: string, toSegmentId: string, toSegmentName: string }> }> } };

export type GetUserSegmentHistoryQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  userEmails: Array<Scalars['String']['input']> | Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
}>;


export type GetUserSegmentHistoryQuery = { __typename?: 'Query', userSegmentHistory: Array<{ __typename?: 'SegmentUserHistory', userEmail: string, changes: Array<{ __typename?: 'UserSegmentTimelineEntry', date: any, fromSegmentId: string, fromSegmentName: string, toSegmentId: string, toSegmentName: string }> }> };

export type GetLatestSegmentsWithUsersQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetLatestSegmentsWithUsersQuery = { __typename?: 'Query', latestSegmentsWithUsers: Array<{ __typename?: 'SegmentWithUsers', segmentId: string, segmentName: string, label: string, description: string, isActive: boolean, snapshotDate: any, users: Array<{ __typename?: 'SegmentUserDetail', email: string }> }> };

export type GetSlaConfigurationsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetSlaConfigurationsQuery = { __typename?: 'Query', slaConfigurations: Array<{ __typename?: 'SLAConfiguration', id: string, productId: string, name: string, label: string, createdAt: any, updatedAt: any, rules: Array<{ __typename?: 'SLARule', id: string, operator: string, conditions: Array<{ __typename?: 'SLACondition', type: string, value: string }> }> }> };

export type GetRawUserLogsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetRawUserLogsQuery = { __typename?: 'Query', rawUserLogs?: { __typename?: 'RawUserLogsCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'ClientUserActivityLogData', id: string, userId: string, productId: string, timestamp: any, actionType: ActionType, activityDetails: { __typename?: 'ActivityDetails', timestamp?: string | null, action?: string | null, actionText?: string | null } }> | null, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type GetDailyUserLogsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetDailyUserLogsQuery = { __typename?: 'Query', dailyUserLogs: Array<{ __typename?: 'UserDailyActivity', id?: string | null, userId?: string | null, productId?: string | null, date?: any | null, userEmail?: string | null, lastActive?: any | null, activities?: Array<{ __typename?: 'DailyActivity', timestamp: any, actionType?: ActionType | null, url?: string | null, referrer?: string | null, activityDetails?: { __typename?: 'ActivityDetails', timestamp?: string | null, action?: string | null, actionText?: string | null } | null } | null> | null, metrics?: { __typename?: 'DailyMetrics', totalActions?: number | null, buttonClicks?: number | null, pageViews?: number | null, formSubmits?: number | null, visitedPages?: Array<string | null> | null, firstAction?: any | null, lastAction?: any | null } | null }> };

export type GetDailyStatsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetDailyStatsQuery = { __typename?: 'Query', dailyStats: Array<{ __typename?: 'DailyActivityStats', id?: string | null, date?: any | null, productId?: string | null, activeUsers?: number | null, totalUsersLast30Days?: number | null, inactiveUsers?: number | null, noActionVisitors: number, churnRate?: number | null, averageUserInteraction?: number | null, averageActivitiesPerUser?: number | null, averageClicksPerUser?: number | null, averagePageChangesPerUser?: number | null, averageFormSubmitsPerUser?: number | null, totalDailyActivities?: number | null, uniqueProductViews: number, uniqueProductsInCart: number, uniqueCheckoutProducts: number, averageCartValue: number, averageCheckoutValue: number, totalCartValue: number, totalCartItems: number, uniqueCartSessions: number, uniqueCheckoutSessions: number, cartAbandonmentRate: number, userEmails: { __typename?: 'UserEmailStats', activeUserEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, viewedProductEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, addedToCartEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkedOutEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageVisitorEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageAbandonerEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageCompletedEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }> }, productInteractions: { __typename?: 'ProductUserInteractionStats', products: Array<{ __typename?: 'KeyValuePairOfStringAndProductUserInteractions', key: string, value: { __typename?: 'ProductUserInteractions', viewedByUsers: Array<string>, addedToCartByUsers: Array<string>, checkedOutByUsers: Array<string>, lastInteraction: any } }> }, segmentStats: Array<{ __typename?: 'SegmentStat', segmentId: string, segmentName: string, userCount: number }>, slaStats: Array<{ __typename?: 'SLAStat', slaId: string, slaName: string, userCount: number }> }> };

export type GetWeeklyStatsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetWeeklyStatsQuery = { __typename?: 'Query', weeklyStats: Array<{ __typename?: 'WeeklyActivityStats', id: number, weekStartDate: any, weekEndDate: any, productId: string, totalUniqueUsers: number, averageActiveUsersPerDay: number, averageInactiveUsers: number, averageChurnRate: number, averageUserInteraction: number, averageActivitiesPerUser: number, averageClicksPerUser: number, averagePageChangesPerUser: number, averageFormSubmitsPerUser: number, totalWeeklyActivities: number, averageDailyActivities: number, totalUniqueProductViews: number, totalUniqueProductsInCart: number, totalUniqueCheckoutProducts: number, averageCartValue: number, totalCartValue: number, totalCartItems: number, totalCheckoutSessions: number, totalCartSessions: number, averageCartAbandonmentRate: number }> };

export type GetAllTimeProductActivityStatsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetAllTimeProductActivityStatsQuery = { __typename?: 'Query', allTimeProductActivityStats: { __typename?: 'AllTimeProductActivityStats', productId: string, totalActiveUsers: number, noActionVisitors: number, totalVisitsCount: number, totalCartsCount: number, totalCheckoutsCount: number, averageCartValue: number, totalCartValue: number, totalCartItems: number, totalUniqueProducts: number, cartAbandonmentRate: number, inactiveUsers: number, churnRate: number, averageUserInteraction: number, averageActivitiesPerUser: number, averageClicksPerUser: number, averagePageChangesPerUser: number, averageFormSubmitsPerUser: number, totalActivities: number, uniqueProductViews: number, uniqueProductsInCart: number, uniqueCartSessions: number, uniqueCheckoutSessions: number, averageCheckoutValue: number, totalCheckoutValue: number, totalCheckoutItems: number, checkoutPageVisitorsCount: number, checkoutPageAbandonersCount: number, checkoutPageCompletedCount: number, checkoutCompletionRate: number, uniqueUserIds: Array<string>, uniqueAnonymousIds: Array<string>, uniqueEmails: Array<string>, uniqueViewedProducts: Array<string>, uniqueCartProducts: Array<string>, uniqueCheckoutProducts: Array<string>, productViewCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, productCartCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, productCheckoutCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, userProductInteractions: Array<{ __typename?: 'UserProductInteraction', userId: string, anonymousId: string, email: string, viewedProducts: Array<string>, addedToCartProducts: Array<string>, checkedOutProducts: Array<string>, lastInteraction: any }>, userEmails: { __typename?: 'UserEmailStats', activeUserEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, viewedProductEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, addedToCartEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkedOutEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageVisitorEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageAbandonerEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }>, checkoutPageCompletedEmails: Array<{ __typename?: 'UserEmailDetail', email: string, country: string, deviceType: string, source: string }> }, slaStats: Array<{ __typename?: 'SLAStat', slaId: string, slaName: string, userCount: number }>, segmentStats: Array<{ __typename?: 'SegmentStat', segmentId: string, segmentName: string, userCount: number }>, shopifyMetrics: { __typename?: 'ShopifyStats', viewedProducts: Array<string>, cartProducts: Array<string>, checkoutProducts: Array<string>, productViewCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, productCartCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, productCheckoutCounts: Array<{ __typename?: 'KeyValuePairOfStringAndInt32', key: string, value: number }>, cartSessions: Array<{ __typename?: 'CartSession', sessionId: string, userEmail: string, totalValue: number, itemCount: number, products: Array<string>, timestamp: any }>, checkoutSessions: Array<{ __typename?: 'CheckoutSession', sessionId: string, userEmail: string, totalValue: number, itemCount: number, products: Array<string>, timestamp: any, completed: boolean }> } } };

export type GetUserActivitiesSecondQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetUserActivitiesSecondQuery = { __typename?: 'Query', dailyUserLogs: Array<{ __typename?: 'UserDailyActivity', id?: string | null, userId?: string | null, userEmail?: string | null, lastActive?: any | null, activities?: Array<{ __typename?: 'DailyActivity', timestamp: any, actionType?: ActionType | null, url?: string | null, referrer?: string | null, activityDetails?: { __typename?: 'ActivityDetails', timestamp?: string | null, action?: string | null, actionText?: string | null } | null } | null> | null, metrics?: { __typename?: 'DailyMetrics', totalActions?: number | null, buttonClicks?: number | null, pageViews?: number | null, formSubmits?: number | null, visitedPages?: Array<string | null> | null, firstAction?: any | null, lastAction?: any | null } | null }> };

export type UserActivitySummaryFieldsFragment = { __typename?: 'UserActivitySummary', userId: string, userEmail: string, activityScore: number, lastActive: any, totalActions: number, churnRisk: string, country: string, referrer: string, deviceType: string, matchedSLAs: Array<{ __typename?: 'SLAConfiguration', id: string, name: string, label: string, rules: Array<{ __typename?: 'SLARule', id: string, operator: string, conditions: Array<{ __typename?: 'SLACondition', type: string, value: string }> }> }>, segments: Array<{ __typename?: 'Segment', id: string, name: string, label: string, description: string, segmentSLAs: Array<{ __typename?: 'SegmentSLA', id: string, slaConfiguration: { __typename?: 'SLAConfiguration', id: string, name: string, label: string } }> }>, dailyActivities: Array<{ __typename?: 'DailyActivitySummary', date: any, totalActions: number, activities: Array<{ __typename?: 'DailyActivity', timestamp: any, actionType?: ActionType | null, url?: string | null, referrer?: string | null, activityDetails?: { __typename?: 'ActivityDetails', timestamp?: string | null, action?: string | null, actionText?: string | null } | null }>, metrics: { __typename?: 'DailyMetrics', totalActions?: number | null, buttonClicks?: number | null, pageViews?: number | null, formSubmits?: number | null, visitedPages?: Array<string | null> | null, firstAction?: any | null, lastAction?: any | null } }> };

export type GetUserActivitiesByProductQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetUserActivitiesByProductQuery = { __typename?: 'Query', UserAnalytics: Array<{ __typename?: 'UserActivitySummary', userId: string, userEmail: string, activityScore: number, lastActive: any, totalActions: number, churnRisk: string, country: string, referrer: string, deviceType: string, matchedSLAs: Array<{ __typename?: 'SLAConfiguration', id: string, name: string, label: string, rules: Array<{ __typename?: 'SLARule', id: string, operator: string, conditions: Array<{ __typename?: 'SLACondition', type: string, value: string }> }> }>, segments: Array<{ __typename?: 'Segment', id: string, name: string, label: string, description: string, segmentSLAs: Array<{ __typename?: 'SegmentSLA', id: string, slaConfiguration: { __typename?: 'SLAConfiguration', id: string, name: string, label: string } }> }>, dailyActivities: Array<{ __typename?: 'DailyActivitySummary', date: any, totalActions: number, activities: Array<{ __typename?: 'DailyActivity', timestamp: any, actionType?: ActionType | null, url?: string | null, referrer?: string | null, activityDetails?: { __typename?: 'ActivityDetails', timestamp?: string | null, action?: string | null, actionText?: string | null } | null }>, metrics: { __typename?: 'DailyMetrics', totalActions?: number | null, buttonClicks?: number | null, pageViews?: number | null, formSubmits?: number | null, visitedPages?: Array<string | null> | null, firstAction?: any | null, lastAction?: any | null } }> }> };

export type UserDetailFieldsFragment = { __typename?: 'UserActivityDetail', userId: string, userEmail: string, activityScore: number, lastActive: string, totalActions: number, churnRisk: string, country: string, referrer: string, deviceType: string, segments: Array<{ __typename?: 'Segment', id: string, name: string, label: string, description: string }>, matchedSLAs: Array<{ __typename?: 'SLAConfiguration', id: string, name: string, label: string }>, shoppingData: { __typename?: 'ShoppingData', totalCartAmount: any, totalCartProducts: number, totalVisitedProducts: number, totalCheckedOutProducts: number, cartedProducts: Array<{ __typename?: 'CartedProduct', productId: string, productName: string, price: any, quantity: number, dateAdded: string }>, visitedProducts: Array<{ __typename?: 'VisitedProduct', productId: string, productName: string, visitCount: number, lastVisited: string }>, checkedOutProducts: Array<{ __typename?: 'CheckedOutProduct', productId: string, productName: string, price: any, quantity: number, dateCheckedOut: string }> }, activityHistory: Array<{ __typename?: 'ActivityHistoryDay', date: string, activities: Array<{ __typename?: 'ActivityHistoryDetail', url: string, timestamp: string, actionType: ActionType, activityDetails: { __typename?: 'ActivityHistoryDetailInfo', action: string, actionText: string } }> }> };

export type GetUserActivityDetailsQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GetUserActivityDetailsQuery = { __typename?: 'Query', userActivityDetails: { __typename?: 'UserActivityDetail', userId: string, userEmail: string, activityScore: number, lastActive: string, totalActions: number, churnRisk: string, country: string, referrer: string, deviceType: string, segments: Array<{ __typename?: 'Segment', id: string, name: string, label: string, description: string }>, matchedSLAs: Array<{ __typename?: 'SLAConfiguration', id: string, name: string, label: string }>, shoppingData: { __typename?: 'ShoppingData', totalCartAmount: any, totalCartProducts: number, totalVisitedProducts: number, totalCheckedOutProducts: number, cartedProducts: Array<{ __typename?: 'CartedProduct', productId: string, productName: string, price: any, quantity: number, dateAdded: string }>, visitedProducts: Array<{ __typename?: 'VisitedProduct', productId: string, productName: string, visitCount: number, lastVisited: string }>, checkedOutProducts: Array<{ __typename?: 'CheckedOutProduct', productId: string, productName: string, price: any, quantity: number, dateCheckedOut: string }> }, activityHistory: Array<{ __typename?: 'ActivityHistoryDay', date: string, activities: Array<{ __typename?: 'ActivityHistoryDetail', url: string, timestamp: string, actionType: ActionType, activityDetails: { __typename?: 'ActivityHistoryDetailInfo', action: string, actionText: string } }> }> } };

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'Query', whoAmI?: { __typename?: 'ApplicationUserView', id: string, email: string, applicationRoleNames: Array<string>, firstName?: string | null, lastName?: string | null, userGuiding: { __typename?: 'UserGuiding', hasFinishedAppInstall: boolean, hasActivatedWidget: boolean, hasUsedAIAssistant: boolean, hasCreatedFilter: boolean, hasCreatedLeadScoring: boolean, hasCreatedSegment: boolean, hasCreatedCampaign: boolean } } | null };

export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on Product {
  productId
  name
  url
  description
  createdBy
  createdOn
  updatedOn
}
    `;
export const DailyStatsFieldsFragmentDoc = gql`
    fragment DailyStatsFields on DailyActivityStats {
  id
  date
  productId
  activeUsers
  totalUsersLast30Days
  inactiveUsers
  noActionVisitors
  churnRate
  averageUserInteraction
  averageActivitiesPerUser
  averageClicksPerUser
  averagePageChangesPerUser
  averageFormSubmitsPerUser
  totalDailyActivities
  uniqueProductViews
  uniqueProductsInCart
  uniqueCheckoutProducts
  averageCartValue
  averageCheckoutValue
  totalCartValue
  totalCartItems
  uniqueCartSessions
  uniqueCheckoutSessions
  cartAbandonmentRate
  userEmails {
    activeUserEmails {
      email
      country
      deviceType
      source
    }
    viewedProductEmails {
      email
      country
      deviceType
      source
    }
    addedToCartEmails {
      email
      country
      deviceType
      source
    }
    checkedOutEmails {
      email
      country
      deviceType
      source
    }
    checkoutPageVisitorEmails {
      email
      country
      deviceType
      source
    }
    checkoutPageAbandonerEmails {
      email
      country
      deviceType
      source
    }
    checkoutPageCompletedEmails {
      email
      country
      deviceType
      source
    }
  }
  productInteractions {
    products {
      key
      value {
        viewedByUsers
        addedToCartByUsers
        checkedOutByUsers
        lastInteraction
      }
    }
  }
  segmentStats {
    segmentId
    segmentName
    userCount
  }
  slaStats {
    slaId
    slaName
    userCount
  }
}
    `;
export const WeeklyStatsFieldsFragmentDoc = gql`
    fragment WeeklyStatsFields on WeeklyActivityStats {
  id
  weekStartDate
  weekEndDate
  productId
  totalUniqueUsers
  averageActiveUsersPerDay
  averageInactiveUsers
  averageChurnRate
  averageUserInteraction
  averageActivitiesPerUser
  averageClicksPerUser
  averagePageChangesPerUser
  averageFormSubmitsPerUser
  totalWeeklyActivities
  averageDailyActivities
  totalUniqueProductViews
  totalUniqueProductsInCart
  totalUniqueCheckoutProducts
  averageCartValue
  totalCartValue
  totalCartItems
  totalCheckoutSessions
  totalCartSessions
  averageCartAbandonmentRate
}
    `;
export const UserActivityFieldsFragmentDoc = gql`
    fragment UserActivityFields on UserDailyActivity {
  id
  userId
  productId
  date
  userEmail
  lastActive
  activities {
    timestamp
    actionType
    url
    referrer
    activityDetails {
      timestamp
      action
      actionText
    }
  }
  metrics {
    totalActions
    buttonClicks
    pageViews
    formSubmits
    visitedPages
    firstAction
    lastAction
  }
}
    `;
export const AllTimeProductActivityStatsFieldsFragmentDoc = gql`
    fragment AllTimeProductActivityStatsFields on AllTimeProductActivityStats {
  productId
  totalActiveUsers
  noActionVisitors
  totalVisitsCount
  totalCartsCount
  totalCheckoutsCount
  averageCartValue
  totalCartValue
  totalCartItems
  totalUniqueProducts
  cartAbandonmentRate
  inactiveUsers
  churnRate
  averageUserInteraction
  averageActivitiesPerUser
  averageClicksPerUser
  averagePageChangesPerUser
  averageFormSubmitsPerUser
  totalActivities
  uniqueProductViews
  uniqueProductsInCart
  uniqueCartSessions
  uniqueCheckoutSessions
  averageCheckoutValue
  totalCheckoutValue
  totalCheckoutItems
  checkoutPageVisitorsCount
  checkoutPageAbandonersCount
  checkoutPageCompletedCount
  checkoutCompletionRate
  uniqueUserIds
  uniqueAnonymousIds
  uniqueEmails
  uniqueViewedProducts
  uniqueCartProducts
  uniqueCheckoutProducts
  productViewCounts {
    key
    value
  }
  productCartCounts {
    key
    value
  }
  productCheckoutCounts {
    key
    value
  }
  userProductInteractions {
    userId
    anonymousId
    email
    viewedProducts
    addedToCartProducts
    checkedOutProducts
    lastInteraction
  }
  userEmails {
    activeUserEmails {
      email
      country
      deviceType
      source
    }
    viewedProductEmails {
      email
      country
      deviceType
      source
    }
    addedToCartEmails {
      email
      country
      deviceType
      source
    }
    checkedOutEmails {
      email
      country
      deviceType
      source
    }
    checkoutPageVisitorEmails {
      email
      country
      deviceType
      source
    }
    checkoutPageAbandonerEmails {
      email
      country
      deviceType
      source
    }
    checkoutPageCompletedEmails {
      email
      country
      deviceType
      source
    }
  }
  slaStats {
    slaId
    slaName
    userCount
  }
  segmentStats {
    segmentId
    segmentName
    userCount
  }
  shopifyMetrics {
    viewedProducts
    cartProducts
    checkoutProducts
    productViewCounts {
      key
      value
    }
    productCartCounts {
      key
      value
    }
    productCheckoutCounts {
      key
      value
    }
    cartSessions {
      sessionId
      userEmail
      totalValue
      itemCount
      products
      timestamp
    }
    checkoutSessions {
      sessionId
      userEmail
      totalValue
      itemCount
      products
      timestamp
      completed
    }
  }
}
    `;
export const PageFlowStatsFragmentFragmentDoc = gql`
    fragment PageFlowStatsFragment on PageFlowStats {
  productId
  userFlows {
    userId
    userEmail
    firstSeen
    lastSeen
    totalPageViews
    uniquePageViews
    pageVisits {
      url
      visitCount
      firstVisit
      lastVisit
      averageTimeSpent
    }
    flows {
      sourceUrl
      targetUrl
      transitionCount
      firstTransition
      lastTransition
    }
  }
  aggregatedFlows {
    sourceUrl
    targetUrl
    totalTransitions
    uniqueUsers
    averageTimeSpent
  }
  pageStatistics {
    key
    value {
      totalViews
      uniqueUsers
      averageTimeSpent
      mostActiveDate
      entryCount
      exitCount
    }
  }
}
    `;
export const UserActivitySummaryFieldsFragmentDoc = gql`
    fragment UserActivitySummaryFields on UserActivitySummary {
  userId
  userEmail
  activityScore
  lastActive
  totalActions
  churnRisk
  country
  referrer
  deviceType
  matchedSLAs {
    id
    name
    label
    rules {
      id
      operator
      conditions {
        type
        value
      }
    }
  }
  segments {
    id
    name
    label
    description
    segmentSLAs {
      id
      slaConfiguration {
        id
        name
        label
      }
    }
  }
  dailyActivities {
    date
    totalActions
    activities {
      timestamp
      actionType
      url
      referrer
      activityDetails {
        timestamp
        action
        actionText
      }
    }
    metrics {
      totalActions
      buttonClicks
      pageViews
      formSubmits
      visitedPages
      firstAction
      lastAction
    }
  }
}
    `;
export const UserDetailFieldsFragmentDoc = gql`
    fragment UserDetailFields on UserActivityDetail {
  userId
  userEmail
  activityScore
  lastActive
  totalActions
  churnRisk
  segments {
    id
    name
    label
    description
  }
  matchedSLAs {
    id
    name
    label
  }
  shoppingData {
    totalCartAmount
    totalCartProducts
    totalVisitedProducts
    totalCheckedOutProducts
    cartedProducts {
      productId
      productName
      price
      quantity
      dateAdded
    }
    visitedProducts {
      productId
      productName
      visitCount
      lastVisited
    }
    checkedOutProducts {
      productId
      productName
      price
      quantity
      dateCheckedOut
    }
  }
  activityHistory {
    date
    activities {
      url
      timestamp
      actionType
      activityDetails {
        action
        actionText
      }
    }
  }
  country
  referrer
  deviceType
}
    `;
export const AddPaymentDocument = gql`
    mutation AddPayment($productId: String!, $transactionId: String!, $amount: Decimal!, $paymentMethod: String!) {
  addPayment(
    productId: $productId
    transactionId: $transactionId
    amount: $amount
    paymentMethod: $paymentMethod
  ) {
    id
    amount
    paymentDate
    paymentMethod
    status
    product {
      productId
      remainingCredit
      lastPaymentDate
      nextBillingDate
      lastUsageReset
    }
  }
}
    `;

export function useAddPaymentMutation() {
  return Urql.useMutation<AddPaymentMutation, AddPaymentMutationVariables>(AddPaymentDocument);
};
export const GetAnalyticsInsightsDocument = gql`
    mutation GetAnalyticsInsights($productId: String!, $message: String!, $startDate: DateTime, $endDate: DateTime) {
  analyticsInsights(
    productId: $productId
    message: $message
    startDate: $startDate
    endDate: $endDate
  )
}
    `;

export function useGetAnalyticsInsightsMutation() {
  return Urql.useMutation<GetAnalyticsInsightsMutation, GetAnalyticsInsightsMutationVariables>(GetAnalyticsInsightsDocument);
};
export const CreateBetaSignupDocument = gql`
    mutation CreateBetaSignup($input: BetaSignupInput!) {
  createBetaSignup(input: $input) {
    user {
      id
      email
      createdOn
    }
    product {
      productId
      name
      url
      description
    }
    widgetCode
  }
}
    `;

export function useCreateBetaSignupMutation() {
  return Urql.useMutation<CreateBetaSignupMutation, CreateBetaSignupMutationVariables>(CreateBetaSignupDocument);
};
export const CreateCampaignDocument = gql`
    mutation CreateCampaign($input: CreateCampaignInput!) {
  createCampaign(input: $input) {
    id
    name
    description
    productId
    segmentId
    status
    triggerSettings {
      enabled
      time
      timezone
      webhookUrl
      integrationType
    }
    triggerHistory {
      id
      executedAt
      snapshotDate
      success
      error
      userCount
      segmentUsers {
        users
        total
      }
      webhookCall {
        id
        timestamp
        status
        statusCode
        responseTime
        error
      }
    }
    createdBy
    createdAt
    updatedAt
  }
}
    `;

export function useCreateCampaignMutation() {
  return Urql.useMutation<CreateCampaignMutation, CreateCampaignMutationVariables>(CreateCampaignDocument);
};
export const UpdateCampaignDocument = gql`
    mutation UpdateCampaign($input: UpdateCampaignInput!) {
  updateCampaign(input: $input) {
    id
    name
    description
    productId
    segmentId
    status
    triggerSettings {
      enabled
      time
      timezone
      webhookUrl
      integrationType
    }
    triggerHistory {
      id
      executedAt
      snapshotDate
      success
      error
      userCount
      segmentUsers {
        users
        total
      }
      webhookCall {
        id
        timestamp
        status
        statusCode
        responseTime
        error
      }
    }
    createdBy
    createdAt
    updatedAt
  }
}
    `;

export function useUpdateCampaignMutation() {
  return Urql.useMutation<UpdateCampaignMutation, UpdateCampaignMutationVariables>(UpdateCampaignDocument);
};
export const DeleteCampaignDocument = gql`
    mutation DeleteCampaign($campaignId: String!) {
  deleteCampaign(campaignId: $campaignId)
}
    `;

export function useDeleteCampaignMutation() {
  return Urql.useMutation<DeleteCampaignMutation, DeleteCampaignMutationVariables>(DeleteCampaignDocument);
};
export const UpdateCampaignStatusDocument = gql`
    mutation UpdateCampaignStatus($campaignId: String!, $status: String!) {
  updateCampaignStatus(campaignId: $campaignId, status: $status) {
    id
    name
    description
    productId
    segmentId
    status
    triggerSettings {
      enabled
      time
      timezone
      webhookUrl
      integrationType
    }
    triggerHistory {
      id
      executedAt
      snapshotDate
      success
      error
      userCount
      segmentUsers {
        users
        total
      }
      webhookCall {
        id
        timestamp
        status
        statusCode
        responseTime
        error
      }
    }
    createdBy
    createdAt
    updatedAt
  }
}
    `;

export function useUpdateCampaignStatusMutation() {
  return Urql.useMutation<UpdateCampaignStatusMutation, UpdateCampaignStatusMutationVariables>(UpdateCampaignStatusDocument);
};
export const AddTriggerHistoryDocument = gql`
    mutation AddTriggerHistory($input: AddTriggerHistoryInput!) {
  addTriggerHistory(input: $input)
}
    `;

export function useAddTriggerHistoryMutation() {
  return Urql.useMutation<AddTriggerHistoryMutation, AddTriggerHistoryMutationVariables>(AddTriggerHistoryDocument);
};
export const CreateUserActivityDocument = gql`
    mutation CreateUserActivity($input: String!, $activityType: Int, $reference: String) {
  createUserActivity(
    input: $input
    activityType: $activityType
    reference: $reference
  )
}
    `;

export function useCreateUserActivityMutation() {
  return Urql.useMutation<CreateUserActivityMutation, CreateUserActivityMutationVariables>(CreateUserActivityDocument);
};
export const CreateContactRequestDocument = gql`
    mutation CreateContactRequest($input: CreateContactRequestInput!) {
  createContactRequest(input: $input) {
    contacter
    nameSurname
    email
  }
}
    `;

export function useCreateContactRequestMutation() {
  return Urql.useMutation<CreateContactRequestMutation, CreateContactRequestMutationVariables>(CreateContactRequestDocument);
};
export const CreateOrUpdateUserDocument = gql`
    mutation CreateOrUpdateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    user {
      id
      email
      createdOn
    }
  }
}
    `;

export function useCreateOrUpdateUserMutation() {
  return Urql.useMutation<CreateOrUpdateUserMutation, CreateOrUpdateUserMutationVariables>(CreateOrUpdateUserDocument);
};
export const CreateShopifyUserDocument = gql`
    mutation CreateShopifyUser($input: ShopifyUserInput!) {
  createShopifyUser(input: $input) {
    user {
      id
      email
    }
    product {
      productId
      name
      url
    }
    widgetCode
  }
}
    `;

export function useCreateShopifyUserMutation() {
  return Urql.useMutation<CreateShopifyUserMutation, CreateShopifyUserMutationVariables>(CreateShopifyUserDocument);
};
export const SaveSegmentDocument = gql`
    mutation SaveSegment($input: SaveSegmentInput!) {
  saveSegment(input: $input) {
    id
    name
    label
    description
    isActive
    createdAt
    updatedAt
    slAs {
      id
      slaId
    }
  }
}
    `;

export function useSaveSegmentMutation() {
  return Urql.useMutation<SaveSegmentMutation, SaveSegmentMutationVariables>(SaveSegmentDocument);
};
export const DeleteCustomerSegmentDocument = gql`
    mutation DeleteCustomerSegment($segmentId: String!) {
  deleteSegment(segmentId: $segmentId)
}
    `;

export function useDeleteCustomerSegmentMutation() {
  return Urql.useMutation<DeleteCustomerSegmentMutation, DeleteCustomerSegmentMutationVariables>(DeleteCustomerSegmentDocument);
};
export const GenerateOptimizedLeadScoringRulesDocument = gql`
    mutation GenerateOptimizedLeadScoringRules($productId: String!) {
  generateOptimizedLeadScoringRules(productId: $productId) {
    id
    productId
    name
    description
    type
    operator
    value
    points
    isActive
    createdAt
    updatedAt
  }
}
    `;

export function useGenerateOptimizedLeadScoringRulesMutation() {
  return Urql.useMutation<GenerateOptimizedLeadScoringRulesMutation, GenerateOptimizedLeadScoringRulesMutationVariables>(GenerateOptimizedLeadScoringRulesDocument);
};
export const SaveGeneratedLeadScoringRulesDocument = gql`
    mutation SaveGeneratedLeadScoringRules($rules: [SaveLeadScoringRuleInput!]!) {
  saveGeneratedLeadScoringRules(rules: $rules) {
    id
    productId
    name
    description
    type
    operator
    value
    points
    isActive
    createdAt
    updatedAt
  }
}
    `;

export function useSaveGeneratedLeadScoringRulesMutation() {
  return Urql.useMutation<SaveGeneratedLeadScoringRulesMutation, SaveGeneratedLeadScoringRulesMutationVariables>(SaveGeneratedLeadScoringRulesDocument);
};
export const GenerateOptimizedSlaConfigurationsDocument = gql`
    mutation GenerateOptimizedSLAConfigurations($productId: String!) {
  generateOptimizedSLAConfigurations(productId: $productId) {
    name
    label
    rules {
      conditions {
        type
        value
      }
      operator
    }
    createdAt
    updatedAt
  }
}
    `;

export function useGenerateOptimizedSlaConfigurationsMutation() {
  return Urql.useMutation<GenerateOptimizedSlaConfigurationsMutation, GenerateOptimizedSlaConfigurationsMutationVariables>(GenerateOptimizedSlaConfigurationsDocument);
};
export const GenerateOptimizedSegmentsDocument = gql`
    mutation GenerateOptimizedSegments($productId: String!) {
  generateOptimizedSegments(productId: $productId) {
    id
    name
    label
    description
    isActive
    createdAt
    updatedAt
    slAs {
      id
      slaId
      slaName
      slaLabel
      operator
    }
  }
}
    `;

export function useGenerateOptimizedSegmentsMutation() {
  return Urql.useMutation<GenerateOptimizedSegmentsMutation, GenerateOptimizedSegmentsMutationVariables>(GenerateOptimizedSegmentsDocument);
};
export const SaveGeneratedSegmentsDocument = gql`
    mutation SaveGeneratedSegments($segments: [SaveSegmentInput!]!) {
  saveGeneratedSegments(segments: $segments) {
    id
    name
    label
    description
    isActive
    createdAt
    updatedAt
    slAs {
      id
      slaId
      slaName
      slaLabel
      operator
    }
  }
}
    `;

export function useSaveGeneratedSegmentsMutation() {
  return Urql.useMutation<SaveGeneratedSegmentsMutation, SaveGeneratedSegmentsMutationVariables>(SaveGeneratedSegmentsDocument);
};
export const IncrementProductUsageDocument = gql`
    mutation IncrementProductUsage($productId: String!, $usageType: String!, $amount: Int!) {
  incrementProductUsage(
    productId: $productId
    usageType: $usageType
    amount: $amount
  ) {
    productId
    totalRawDataCount
    totalTokensCount
    remainingCredit
  }
}
    `;

export function useIncrementProductUsageMutation() {
  return Urql.useMutation<IncrementProductUsageMutation, IncrementProductUsageMutationVariables>(IncrementProductUsageDocument);
};
export const SaveLeadScoringRuleDocument = gql`
    mutation SaveLeadScoringRule($input: SaveLeadScoringRuleInput!) {
  saveLeadScoringRule(input: $input) {
    id
    productId
    name
    description
    type
    operator
    value
    points
    isActive
    createdAt
    updatedAt
  }
}
    `;

export function useSaveLeadScoringRuleMutation() {
  return Urql.useMutation<SaveLeadScoringRuleMutation, SaveLeadScoringRuleMutationVariables>(SaveLeadScoringRuleDocument);
};
export const DeleteLeadScoringRuleDocument = gql`
    mutation DeleteLeadScoringRule($ruleId: String!) {
  deleteLeadScoringRule(ruleId: $ruleId)
}
    `;

export function useDeleteLeadScoringRuleMutation() {
  return Urql.useMutation<DeleteLeadScoringRuleMutation, DeleteLeadScoringRuleMutationVariables>(DeleteLeadScoringRuleDocument);
};
export const SaveEmailReportDocument = gql`
    mutation SaveEmailReport($input: SaveEmailReportInput!) {
  saveEmailReport(input: $input) {
    id
    productId
    isActive
    createdAt
    updatedAt
    recipients
  }
}
    `;

export function useSaveEmailReportMutation() {
  return Urql.useMutation<SaveEmailReportMutation, SaveEmailReportMutationVariables>(SaveEmailReportDocument);
};
export const UpdateEmailReportDocument = gql`
    mutation UpdateEmailReport($input: UpdateEmailReportInput!) {
  updateEmailReport(input: $input) {
    id
    productId
    isActive
    createdAt
    updatedAt
    recipients
  }
}
    `;

export function useUpdateEmailReportMutation() {
  return Urql.useMutation<UpdateEmailReportMutation, UpdateEmailReportMutationVariables>(UpdateEmailReportDocument);
};
export const DeleteEmailReportDocument = gql`
    mutation DeleteEmailReport($reportId: String!) {
  deleteEmailReport(reportId: $reportId)
}
    `;

export function useDeleteEmailReportMutation() {
  return Urql.useMutation<DeleteEmailReportMutation, DeleteEmailReportMutationVariables>(DeleteEmailReportDocument);
};
export const RegisterSentEmailReportDocument = gql`
    mutation RegisterSentEmailReport($input: RegisterSentEmailReportInput!) {
  registerSentEmailReport(input: $input) {
    id
    emailReportId
    productId
    sentDate
    status
    errorMessage
    recipients
  }
}
    `;

export function useRegisterSentEmailReportMutation() {
  return Urql.useMutation<RegisterSentEmailReportMutation, RegisterSentEmailReportMutationVariables>(RegisterSentEmailReportDocument);
};
export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProductWithDetails(input: $input) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

export function useCreateProductMutation() {
  return Urql.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument);
};
export const UpdateProductDocument = gql`
    mutation UpdateProduct($productId: String!, $input: CreateProductInput!) {
  updateProduct(productId: $productId, input: $input) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

export function useUpdateProductMutation() {
  return Urql.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument);
};
export const DeleteProductDocument = gql`
    mutation DeleteProduct($productId: String!) {
  deleteProduct(productId: $productId)
}
    `;

export function useDeleteProductMutation() {
  return Urql.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument);
};
export const SaveGeneratedSlaConfigurationsDocument = gql`
    mutation SaveGeneratedSLAConfigurations($configurations: [SaveSLAConfigurationInput!]!) {
  saveGeneratedSLAConfigurations(configurations: $configurations) {
    id
    productId
    name
    label
    rules {
      id
      operator
      conditions {
        type
        value
      }
    }
    createdAt
    updatedAt
  }
}
    `;

export function useSaveGeneratedSlaConfigurationsMutation() {
  return Urql.useMutation<SaveGeneratedSlaConfigurationsMutation, SaveGeneratedSlaConfigurationsMutationVariables>(SaveGeneratedSlaConfigurationsDocument);
};
export const GetSegmentAnalyticsInsightsDocument = gql`
    mutation GetSegmentAnalyticsInsights($productId: String!, $message: String!, $startDate: DateTime, $endDate: DateTime) {
  segmentAnalyticsInsights(
    productId: $productId
    message: $message
    startDate: $startDate
    endDate: $endDate
  )
}
    `;

export function useGetSegmentAnalyticsInsightsMutation() {
  return Urql.useMutation<GetSegmentAnalyticsInsightsMutation, GetSegmentAnalyticsInsightsMutationVariables>(GetSegmentAnalyticsInsightsDocument);
};
export const SaveSlaConfigurationDocument = gql`
    mutation SaveSLAConfiguration($productId: String!, $name: String!, $label: String!, $rules: [SLARuleInput!]!) {
  saveSLAConfiguration(
    input: {productId: $productId, name: $name, label: $label, rules: $rules}
  ) {
    id
    name
    label
    rules {
      id
      operator
      conditions {
        type
        value
      }
    }
  }
}
    `;

export function useSaveSlaConfigurationMutation() {
  return Urql.useMutation<SaveSlaConfigurationMutation, SaveSlaConfigurationMutationVariables>(SaveSlaConfigurationDocument);
};
export const DeleteSlaConfigurationDocument = gql`
    mutation DeleteSLAConfiguration($slaId: String!) {
  deleteSLAConfiguration(slaId: $slaId)
}
    `;

export function useDeleteSlaConfigurationMutation() {
  return Urql.useMutation<DeleteSlaConfigurationMutation, DeleteSlaConfigurationMutationVariables>(DeleteSlaConfigurationDocument);
};
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    user {
      id
      email
      createdOn
    }
    product {
      productId
      name
      url
      description
    }
    widgetCode
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const UpdateUserGuidingStatusDocument = gql`
    mutation UpdateUserGuidingStatus($guidingStep: String!) {
  updateUserGuidingStatus(guidingStep: $guidingStep) {
    id
    userGuiding {
      hasFinishedAppInstall
      hasActivatedWidget
      hasUsedAIAssistant
      hasCreatedFilter
      hasCreatedLeadScoring
      hasCreatedSegment
      hasCreatedCampaign
    }
  }
}
    `;

export function useUpdateUserGuidingStatusMutation() {
  return Urql.useMutation<UpdateUserGuidingStatusMutation, UpdateUserGuidingStatusMutationVariables>(UpdateUserGuidingStatusDocument);
};
export const VerifyProductEmbeddingDocument = gql`
    mutation VerifyProductEmbedding($productId: String!) {
  verifyProductEmbedding(productId: $productId) {
    productId
    name
    embedStatus
    lastEmbedCheck
  }
}
    `;

export function useVerifyProductEmbeddingMutation() {
  return Urql.useMutation<VerifyProductEmbeddingMutation, VerifyProductEmbeddingMutationVariables>(VerifyProductEmbeddingDocument);
};
export const GetCampaignsByProductDocument = gql`
    query GetCampaignsByProduct($productId: String!) {
  campaignsByProduct(productId: $productId) {
    id
    name
    description
    productId
    segmentId
    status
    triggerSettings {
      enabled
      time
      timezone
      webhookUrl
      integrationType
    }
    triggerHistory {
      id
      executedAt
      snapshotDate
      success
      error
      userCount
      segmentUsers {
        users
        total
      }
      webhookCall {
        id
        timestamp
        status
        statusCode
        responseTime
        error
      }
    }
    createdBy
    createdAt
    updatedAt
  }
}
    `;

export function useGetCampaignsByProductQuery(options: Omit<Urql.UseQueryArgs<GetCampaignsByProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCampaignsByProductQuery, GetCampaignsByProductQueryVariables>({ query: GetCampaignsByProductDocument, ...options });
};
export const GetCampaignByIdDocument = gql`
    query GetCampaignById($campaignId: String!) {
  campaignById(campaignId: $campaignId) {
    id
    name
    description
    productId
    segmentId
    status
    triggerSettings {
      enabled
      time
      timezone
      webhookUrl
      integrationType
    }
    triggerHistory {
      id
      executedAt
      snapshotDate
      success
      error
      userCount
      segmentUsers {
        users
        total
      }
      webhookCall {
        id
        timestamp
        status
        statusCode
        responseTime
        error
      }
    }
    createdBy
    createdAt
    updatedAt
  }
}
    `;

export function useGetCampaignByIdQuery(options: Omit<Urql.UseQueryArgs<GetCampaignByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCampaignByIdQuery, GetCampaignByIdQueryVariables>({ query: GetCampaignByIdDocument, ...options });
};
export const GetSegmentsByProductDocument = gql`
    query GetSegmentsByProduct($productId: String!) {
  segmentsByProduct(productId: $productId) {
    id
    name
    label
    description
    isActive
    createdAt
    updatedAt
    slAs {
      id
      slaId
      slaName
      slaLabel
      operator
    }
  }
}
    `;

export function useGetSegmentsByProductQuery(options: Omit<Urql.UseQueryArgs<GetSegmentsByProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSegmentsByProductQuery, GetSegmentsByProductQueryVariables>({ query: GetSegmentsByProductDocument, ...options });
};
export const GetSegmentByIdDocument = gql`
    query GetSegmentById($segmentId: String!) {
  segmentById(segmentId: $segmentId) {
    id
    name
    label
    description
    isActive
    createdAt
    updatedAt
    slAs {
      id
      slaId
      slaName
      slaLabel
      operator
    }
  }
}
    `;

export function useGetSegmentByIdQuery(options: Omit<Urql.UseQueryArgs<GetSegmentByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSegmentByIdQuery, GetSegmentByIdQueryVariables>({ query: GetSegmentByIdDocument, ...options });
};
export const GetCohortAnalysisDocument = gql`
    query GetCohortAnalysis($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  cohortAnalysis(productId: $productId, startDate: $startDate, endDate: $endDate) {
    cohorts {
      cohortDate
      userCount
      userEmails
      retentionData {
        period
        activeUsers
        activeUserEmails {
          email
          country
          deviceType
          source
        }
        retentionRate
      }
    }
  }
}
    `;

export function useGetCohortAnalysisQuery(options: Omit<Urql.UseQueryArgs<GetCohortAnalysisQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCohortAnalysisQuery, GetCohortAnalysisQueryVariables>({ query: GetCohortAnalysisDocument, ...options });
};
export const GetProductUsageStatsDocument = gql`
    query GetProductUsageStats($productId: String!) {
  productUsageStats(productId: $productId) {
    productId
    name
    remainingCredit
    lastPaymentDate
    nextBillingDate
    totalRawDataCount
    totalTokensCount
    lastUsageReset
    paymentHistory {
      id
      amount
      paymentDate
      paymentMethod
      status
      description
    }
  }
}
    `;

export function useGetProductUsageStatsQuery(options: Omit<Urql.UseQueryArgs<GetProductUsageStatsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductUsageStatsQuery, GetProductUsageStatsQueryVariables>({ query: GetProductUsageStatsDocument, ...options });
};
export const GetLeadScoringRulesByProductDocument = gql`
    query GetLeadScoringRulesByProduct($productId: String!) {
  leadScoringRulesByProduct(productId: $productId) {
    id
    productId
    name
    description
    type
    operator
    value
    points
    isActive
    createdAt
    updatedAt
  }
}
    `;

export function useGetLeadScoringRulesByProductQuery(options: Omit<Urql.UseQueryArgs<GetLeadScoringRulesByProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLeadScoringRulesByProductQuery, GetLeadScoringRulesByProductQueryVariables>({ query: GetLeadScoringRulesByProductDocument, ...options });
};
export const GetLeadScoringRuleByIdDocument = gql`
    query GetLeadScoringRuleById($ruleId: String!) {
  leadScoringRuleById(ruleId: $ruleId) {
    id
    productId
    name
    description
    type
    operator
    value
    points
    isActive
    createdAt
    updatedAt
  }
}
    `;

export function useGetLeadScoringRuleByIdQuery(options: Omit<Urql.UseQueryArgs<GetLeadScoringRuleByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLeadScoringRuleByIdQuery, GetLeadScoringRuleByIdQueryVariables>({ query: GetLeadScoringRuleByIdDocument, ...options });
};
export const GetEmailReportsByProductDocument = gql`
    query GetEmailReportsByProduct($productId: String!) {
  emailReportsByProduct(productId: $productId) {
    id
    productId
    isActive
    createdAt
    updatedAt
    recipients
  }
}
    `;

export function useGetEmailReportsByProductQuery(options: Omit<Urql.UseQueryArgs<GetEmailReportsByProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetEmailReportsByProductQuery, GetEmailReportsByProductQueryVariables>({ query: GetEmailReportsByProductDocument, ...options });
};
export const GetEmailReportByIdDocument = gql`
    query GetEmailReportById($reportId: String!) {
  emailReportById(reportId: $reportId) {
    id
    productId
    isActive
    createdAt
    updatedAt
    recipients
  }
}
    `;

export function useGetEmailReportByIdQuery(options: Omit<Urql.UseQueryArgs<GetEmailReportByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetEmailReportByIdQuery, GetEmailReportByIdQueryVariables>({ query: GetEmailReportByIdDocument, ...options });
};
export const GetSentEmailReportsByProductDocument = gql`
    query GetSentEmailReportsByProduct($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  sentEmailReportsByProduct(
    productId: $productId
    startDate: $startDate
    endDate: $endDate
  ) {
    id
    emailReportId
    productId
    sentDate
    status
    errorMessage
    recipients
  }
}
    `;

export function useGetSentEmailReportsByProductQuery(options: Omit<Urql.UseQueryArgs<GetSentEmailReportsByProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSentEmailReportsByProductQuery, GetSentEmailReportsByProductQueryVariables>({ query: GetSentEmailReportsByProductDocument, ...options });
};
export const GetSentEmailReportByIdDocument = gql`
    query GetSentEmailReportById($sentReportId: String!) {
  sentEmailReportById(sentReportId: $sentReportId) {
    id
    emailReportId
    productId
    sentDate
    status
    errorMessage
    recipients
  }
}
    `;

export function useGetSentEmailReportByIdQuery(options: Omit<Urql.UseQueryArgs<GetSentEmailReportByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSentEmailReportByIdQuery, GetSentEmailReportByIdQueryVariables>({ query: GetSentEmailReportByIdDocument, ...options });
};
export const GetPageFlowStatsDocument = gql`
    query GetPageFlowStats($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  pageFlowStats(productId: $productId, startDate: $startDate, endDate: $endDate) {
    ...PageFlowStatsFragment
  }
}
    ${PageFlowStatsFragmentFragmentDoc}`;

export function useGetPageFlowStatsQuery(options: Omit<Urql.UseQueryArgs<GetPageFlowStatsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPageFlowStatsQuery, GetPageFlowStatsQueryVariables>({ query: GetPageFlowStatsDocument, ...options });
};
export const GetProductByIdDocument = gql`
    query GetProductById($productId: String!) {
  productById(productId: $productId) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

export function useGetProductByIdQuery(options: Omit<Urql.UseQueryArgs<GetProductByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>({ query: GetProductByIdDocument, ...options });
};
export const GetMyProductsDocument = gql`
    query GetMyProducts {
  myProducts {
    productId
    name
    url
    description
    createdBy
    createdOn
    updatedOn
    totalRawDataCount
    totalTokensCount
    remainingCredit
    embedStatus
    lastEmbedCheck
  }
}
    `;

export function useGetMyProductsQuery(options?: Omit<Urql.UseQueryArgs<GetMyProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMyProductsQuery, GetMyProductsQueryVariables>({ query: GetMyProductsDocument, ...options });
};
export const GetSegmentSnapshotsDocument = gql`
    query GetSegmentSnapshots($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  segmentSnapshots(
    productId: $productId
    startDate: $startDate
    endDate: $endDate
  ) {
    id
    productId
    snapshotDate
    segmentsJson
    createdAt
  }
}
    `;

export function useGetSegmentSnapshotsQuery(options: Omit<Urql.UseQueryArgs<GetSegmentSnapshotsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSegmentSnapshotsQuery, GetSegmentSnapshotsQueryVariables>({ query: GetSegmentSnapshotsDocument, ...options });
};
export const GetSlaSnapshotsDocument = gql`
    query GetSLASnapshots($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  slaSnapshots(productId: $productId, startDate: $startDate, endDate: $endDate) {
    id
    productId
    snapshotDate
    slAsJson
    createdAt
  }
}
    `;

export function useGetSlaSnapshotsQuery(options: Omit<Urql.UseQueryArgs<GetSlaSnapshotsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSlaSnapshotsQuery, GetSlaSnapshotsQueryVariables>({ query: GetSlaSnapshotsDocument, ...options });
};
export const GetLatestSegmentSnapshotDocument = gql`
    query GetLatestSegmentSnapshot($productId: String!) {
  latestSegmentSnapshot(productId: $productId) {
    id
    productId
    snapshotDate
    segmentsJson
    createdAt
  }
}
    `;

export function useGetLatestSegmentSnapshotQuery(options: Omit<Urql.UseQueryArgs<GetLatestSegmentSnapshotQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLatestSegmentSnapshotQuery, GetLatestSegmentSnapshotQueryVariables>({ query: GetLatestSegmentSnapshotDocument, ...options });
};
export const GetLatestSlaSnapshotDocument = gql`
    query GetLatestSLASnapshot($productId: String!) {
  latestSLASnapshot(productId: $productId) {
    id
    productId
    snapshotDate
    slAsJson
    createdAt
  }
}
    `;

export function useGetLatestSlaSnapshotQuery(options: Omit<Urql.UseQueryArgs<GetLatestSlaSnapshotQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLatestSlaSnapshotQuery, GetLatestSlaSnapshotQueryVariables>({ query: GetLatestSlaSnapshotDocument, ...options });
};
export const GetSegmentChangesAnalysisDocument = gql`
    query GetSegmentChangesAnalysis($productId: String!, $startDate: DateTime!, $endDate: DateTime!) {
  segmentChangesAnalysis(
    productId: $productId
    startDate: $startDate
    endDate: $endDate
  ) {
    date
    previousDate
    totalCurrentUsers
    totalPreviousUsers
    newUsers
    removedUsers
    changes {
      segmentId
      segmentName
      currentUserCount
      previousUserCount
      newUsers
      removedUsers
      movedToOtherSegments {
        userEmail
        fromSegmentId
        fromSegmentName
        toSegmentId
        toSegmentName
      }
      movedFromOtherSegments {
        userEmail
        fromSegmentId
        fromSegmentName
        toSegmentId
        toSegmentName
      }
      isDeleted
    }
  }
}
    `;

export function useGetSegmentChangesAnalysisQuery(options: Omit<Urql.UseQueryArgs<GetSegmentChangesAnalysisQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSegmentChangesAnalysisQuery, GetSegmentChangesAnalysisQueryVariables>({ query: GetSegmentChangesAnalysisDocument, ...options });
};
export const GetUserSegmentHistoryDocument = gql`
    query GetUserSegmentHistory($productId: String!, $userEmails: [String!]!, $startDate: DateTime!, $endDate: DateTime!) {
  userSegmentHistory(
    productId: $productId
    userEmails: $userEmails
    startDate: $startDate
    endDate: $endDate
  ) {
    userEmail
    changes {
      date
      fromSegmentId
      fromSegmentName
      toSegmentId
      toSegmentName
    }
  }
}
    `;

export function useGetUserSegmentHistoryQuery(options: Omit<Urql.UseQueryArgs<GetUserSegmentHistoryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserSegmentHistoryQuery, GetUserSegmentHistoryQueryVariables>({ query: GetUserSegmentHistoryDocument, ...options });
};
export const GetLatestSegmentsWithUsersDocument = gql`
    query GetLatestSegmentsWithUsers($productId: String!) {
  latestSegmentsWithUsers(productId: $productId) {
    segmentId
    segmentName
    label
    description
    isActive
    snapshotDate
    users {
      email
    }
  }
}
    `;

export function useGetLatestSegmentsWithUsersQuery(options: Omit<Urql.UseQueryArgs<GetLatestSegmentsWithUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLatestSegmentsWithUsersQuery, GetLatestSegmentsWithUsersQueryVariables>({ query: GetLatestSegmentsWithUsersDocument, ...options });
};
export const GetSlaConfigurationsDocument = gql`
    query GetSLAConfigurations($productId: String!) {
  slaConfigurations(productId: $productId) {
    id
    productId
    name
    label
    rules {
      id
      conditions {
        type
        value
      }
      operator
    }
    createdAt
    updatedAt
  }
}
    `;

export function useGetSlaConfigurationsQuery(options: Omit<Urql.UseQueryArgs<GetSlaConfigurationsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSlaConfigurationsQuery, GetSlaConfigurationsQueryVariables>({ query: GetSlaConfigurationsDocument, ...options });
};
export const GetRawUserLogsDocument = gql`
    query GetRawUserLogs($productId: String!, $startDate: DateTime, $endDate: DateTime, $skip: Int, $take: Int) {
  rawUserLogs(
    productId: $productId
    startDate: $startDate
    endDate: $endDate
    skip: $skip
    take: $take
  ) {
    items {
      id
      userId
      productId
      timestamp
      actionType
      activityDetails {
        timestamp
        action
        actionText
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
    `;

export function useGetRawUserLogsQuery(options: Omit<Urql.UseQueryArgs<GetRawUserLogsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRawUserLogsQuery, GetRawUserLogsQueryVariables>({ query: GetRawUserLogsDocument, ...options });
};
export const GetDailyUserLogsDocument = gql`
    query GetDailyUserLogs($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  dailyUserLogs(productId: $productId, startDate: $startDate, endDate: $endDate) {
    ...UserActivityFields
  }
}
    ${UserActivityFieldsFragmentDoc}`;

export function useGetDailyUserLogsQuery(options: Omit<Urql.UseQueryArgs<GetDailyUserLogsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetDailyUserLogsQuery, GetDailyUserLogsQueryVariables>({ query: GetDailyUserLogsDocument, ...options });
};
export const GetDailyStatsDocument = gql`
    query GetDailyStats($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  dailyStats(productId: $productId, startDate: $startDate, endDate: $endDate) {
    ...DailyStatsFields
  }
}
    ${DailyStatsFieldsFragmentDoc}`;

export function useGetDailyStatsQuery(options: Omit<Urql.UseQueryArgs<GetDailyStatsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetDailyStatsQuery, GetDailyStatsQueryVariables>({ query: GetDailyStatsDocument, ...options });
};
export const GetWeeklyStatsDocument = gql`
    query GetWeeklyStats($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  weeklyStats(productId: $productId, startDate: $startDate, endDate: $endDate) {
    ...WeeklyStatsFields
  }
}
    ${WeeklyStatsFieldsFragmentDoc}`;

export function useGetWeeklyStatsQuery(options: Omit<Urql.UseQueryArgs<GetWeeklyStatsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetWeeklyStatsQuery, GetWeeklyStatsQueryVariables>({ query: GetWeeklyStatsDocument, ...options });
};
export const GetAllTimeProductActivityStatsDocument = gql`
    query GetAllTimeProductActivityStats($productId: String!) {
  allTimeProductActivityStats(productId: $productId) {
    ...AllTimeProductActivityStatsFields
  }
}
    ${AllTimeProductActivityStatsFieldsFragmentDoc}`;

export function useGetAllTimeProductActivityStatsQuery(options: Omit<Urql.UseQueryArgs<GetAllTimeProductActivityStatsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllTimeProductActivityStatsQuery, GetAllTimeProductActivityStatsQueryVariables>({ query: GetAllTimeProductActivityStatsDocument, ...options });
};
export const GetUserActivitiesSecondDocument = gql`
    query GetUserActivitiesSecond($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  dailyUserLogs(productId: $productId, startDate: $startDate, endDate: $endDate) {
    id
    userId
    userEmail
    lastActive
    activities {
      timestamp
      actionType
      url
      referrer
      activityDetails {
        timestamp
        action
        actionText
      }
    }
    metrics {
      totalActions
      buttonClicks
      pageViews
      formSubmits
      visitedPages
      firstAction
      lastAction
    }
  }
}
    `;

export function useGetUserActivitiesSecondQuery(options: Omit<Urql.UseQueryArgs<GetUserActivitiesSecondQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserActivitiesSecondQuery, GetUserActivitiesSecondQueryVariables>({ query: GetUserActivitiesSecondDocument, ...options });
};
export const GetUserActivitiesByProductDocument = gql`
    query GetUserActivitiesByProduct($productId: String!, $startDate: DateTime, $endDate: DateTime) {
  UserAnalytics: userActivitiesByProduct(
    productId: $productId
    startDate: $startDate
    endDate: $endDate
  ) {
    ...UserActivitySummaryFields
  }
}
    ${UserActivitySummaryFieldsFragmentDoc}`;

export function useGetUserActivitiesByProductQuery(options: Omit<Urql.UseQueryArgs<GetUserActivitiesByProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserActivitiesByProductQuery, GetUserActivitiesByProductQueryVariables>({ query: GetUserActivitiesByProductDocument, ...options });
};
export const GetUserActivityDetailsDocument = gql`
    query GetUserActivityDetails($productId: String!, $userId: String!) {
  userActivityDetails(productId: $productId, userId: $userId) {
    ...UserDetailFields
  }
}
    ${UserDetailFieldsFragmentDoc}`;

export function useGetUserActivityDetailsQuery(options: Omit<Urql.UseQueryArgs<GetUserActivityDetailsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserActivityDetailsQuery, GetUserActivityDetailsQueryVariables>({ query: GetUserActivityDetailsDocument, ...options });
};
export const WhoAmIDocument = gql`
    query WhoAmI {
  whoAmI {
    id
    email
    applicationRoleNames
    firstName
    lastName
    userGuiding {
      hasFinishedAppInstall
      hasActivatedWidget
      hasUsedAIAssistant
      hasCreatedFilter
      hasCreatedLeadScoring
      hasCreatedSegment
      hasCreatedCampaign
    }
  }
}
    `;

export function useWhoAmIQuery(options?: Omit<Urql.UseQueryArgs<WhoAmIQueryVariables>, 'query'>) {
  return Urql.useQuery<WhoAmIQuery, WhoAmIQueryVariables>({ query: WhoAmIDocument, ...options });
};