import SHttp from "../../SHttp"

export default {
    getAll: (force) => {
        var reducer = SHttp.getState().productoReducer
        var data = reducer.data;
        if (!data || force) {
            if (reducer.estado == "cargando") return;
            SHttp.post({
                component: "producto",
                type: "getAll",
                estado: "cargando"
            })
            return;
        }
        return data;

    }
}