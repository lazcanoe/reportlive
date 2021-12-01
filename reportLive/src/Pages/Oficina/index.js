import events from "./Events"


import Lista from "./Pages/Lista"
const pages = {
    "oficina":  Lista ,

}


import oficinaReducer from "./Reducer/oficinaReducer"

const reducer = {
    oficinaReducer
}

export default {
    pages,
    reducer,
    ...events

}