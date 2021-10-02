import events from "./Events"


import Lista from "./Pages/Lista"
const pages = {
    "fabricante":  Lista ,

}


import fabricanteReducer from "./Reducer/fabricanteReducer"

const reducer = {
    fabricanteReducer
}

export default {
    pages,
    reducer,
    ...events

}