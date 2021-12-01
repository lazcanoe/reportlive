import events from "./Events"

//REDUCER
import tecnicoReducer from "./Reducer/tecnicoReducer"

//PAGES
import Lista from "./Pages/Lista"
const pages = {
    "tecnico": { component: Lista },

}

const reducer = {
    tecnicoReducer
}

export default {
    pages,
    reducer,
    ...events

}