import events from "./Events"


import Lista from "./Pages/Lista"
const pages = {
    "producto":  Lista ,
}


import productoReducer from "./Reducer/productoReducer"

const reducer = {
    productoReducer
}

export default {
    pages,
    reducer,
    ...events

}