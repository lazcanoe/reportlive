

const initialState = {
}

export default (state, action) => {
    if (!state) return initialState
    if (action.component == "oficina") {
        switch (action.type) {
            case "getAll": getAll(state, action); break;
        }


        state.type = action.type
        state.estado = action.estado
        state.error = action.error
        return { ...state }
    }
    return state
}

const getAll = (state, action) => {
    if (action.estado == "exito") {
        if (!state.data) state.data = {}
        action.data.map((obj) => {
            state.data[obj.oficina_id] = obj;
        })
    }
}

