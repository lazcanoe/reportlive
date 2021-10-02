import events from "./Events"


import Lista from "./Pages/Lista"
const pages = {
    "persona":  Lista ,

}


import personaReducer from "./Reducer/personaReducer"

const reducer = {
    personaReducer
}

export default {
    pages,
    reducer,
    ...events

}