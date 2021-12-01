import events from "./Events"


import Lista from "./Pages/Lista"
const pages = {
    "equipoMedico":  Lista ,

}


import equipoMedicoReducer from "./Reducer/equipoMedicoReducer"

const reducer = {
    equipoMedicoReducer
}

export default {
    pages,
    reducer,
    ...events

}