import {BACK_DETAILS, GET_COUNTRY, GET_DETAILS, GET_REGION, SEARCH_COUNTRY} from "../types";

const defaultState = {
    data: [],
    details: []
}
export const CountryReducer = (state = defaultState,action) => {
    switch (action.type){
        case GET_COUNTRY: {
            const {payload} = action
            return {
                ...state,
                data : payload.slice(100)
            }

        }
        case GET_REGION: {
            const {payload} = action
            console.log(payload)
            return {
                ...state,
                data: payload
            }
        }
        case SEARCH_COUNTRY:{
            const {payload} = action
            return {
                ...state,
                data: payload
            }
        }
        case GET_DETAILS: {
            const {payload} = action
            const {data} = state
            const newArr = data.filter(elem => elem.area === payload)
            console.log(newArr)
            return {
                ...state,
                details: newArr
            }
        }
        default:
            return state

    }
}