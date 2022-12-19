import {GET_COUNTRY, GET_REGION, SEARCH_COUNTRY, GET_DETAILS, BACK_DETAILS} from "../types";

export const getCountryActions = (data) => {
    return{
        type: GET_COUNTRY,
        payload: data
    }
}
export const getRegionAction = (region) => {
    return{
        type: GET_REGION,
        payload: region
    }
}
export const searchCountry = (text) => {
    return{
        type: SEARCH_COUNTRY,
        payload: text
    }
}
export const getDetails = (id) => {
    return{
        type:GET_DETAILS,
        payload: id
    }
}
