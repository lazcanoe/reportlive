import SHttp from "../../SHttp"

export default {
    getAll: (force) => {
        var reducer = SHttp.getState().fabricanteReducer
        var data = reducer.data;
        if (!data || force) {
            if (reducer.estado == "cargando") return;
            SHttp.post({
                component: "fabricante",
                type: "getAll",
                estado: "cargando"
            })
            return;
        }
        return data;

    }
}