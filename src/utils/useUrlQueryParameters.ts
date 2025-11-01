import { useNavigate, useLocation } from 'react-router-dom';

const useQuery = () => new URLSearchParams(useLocation().search);

export const useUrlQueryParameters = () => {
    const currentLocation = useLocation();
    const query = useQuery();
    const navigate = useNavigate();

    function getQueryParameter<T>(queryParameter: string): T | null {
        const theQueryVal = query.get(queryParameter);

        if (theQueryVal !== null){
            try {
                return JSON.parse(theQueryVal) as T;
            } catch {
                return null;
            }
        }
        return null;
    }

    function setQueryParameter<T>(queryParameter: string, value: T){
        query.set(queryParameter, JSON.stringify(value));
        currentLocation.search = query.toString();
        navigate(currentLocation);
    }

    return {
        getQueryParameter,
        hasQueryParameter: (queryParameter: string) => query.has(queryParameter),
        setQueryParameter,
    }
}