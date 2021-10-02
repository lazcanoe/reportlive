import events from "./Events"

//REDUCER
import servicioClienteReducer from "./Reducer/servicioClienteReducer"

//PAGES
import Lista from "./Pages/Lista"
const pages = {
    "servicioCliente": { component: Lista },

}

const reducer = {
    servicioClienteReducer
}

export default {
    pages,
    reducer,
    ...events

}