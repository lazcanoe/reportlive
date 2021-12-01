import events from "./Events"


import Lista from "./Pages/Lista"
const pages = {
    "equipoMedicoEmpresa":  Lista ,

}


import equipoMedicoEmpresaReducer from "./Reducer/equipoMedicoEmpresaReducer"

const reducer = {
    equipoMedicoEmpresaReducer
}

export default {
    pages,
    reducer,
    ...events

}