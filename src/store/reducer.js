
const initialState = {
    counter: 0,
    results: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "ADD_COUNTER":
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "SUB_COUNTER":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "SUB_FIVE":
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case "SAVE-RESULTS":
            return {
                ...state,
                results: state.results.concat({ id: Math.floor(Math.random() * 1000), value: state.counter })
            }
        case "DELETE_NUM":
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.payload)
            }
        default:
            return state
    }


}