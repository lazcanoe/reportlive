import events from "./Events"

//REDUCER
import empresaReducer from "./Reducer/empresaReducer"

//PAGES
import Lista from "./Pages/Lista"
const pages = {
    "empresa": { component: Lista },

}

const reducer = {
    empresaReducer
}

export default {
    pages,
    reducer,
    ...events

}