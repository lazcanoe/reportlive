import events from "./Events"


import Lista from "./Pages/Lista"
const pages = {
    "producto_bs":  Lista ,

}


import producto_bsReducer from "./Reducer/producto_bsReducer"

const reducer = {
    producto_bsReducer
}

export default {
    pages,
    reducer,
    ...events

}