import events from "./Events"

//REDUCER
import tipoServicioReducer from "./Reducer/tipoServicioReducer"

//PAGES
import Lista from "./Pages/Lista"
const pages = {
    "tipoServicio": { component: Lista },

}

const reducer = {
    tipoServicioReducer
}

export default {
    pages,
    reducer,
    ...events

}