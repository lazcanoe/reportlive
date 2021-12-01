import React, { Component } from 'react';

import { SDate, SForm, SHr, SInput, SPage, SText, STheme, SView } from 'servisofts-component';

export default class Formulario extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getForm() {
        return <SForm
            col={"xs-11 sm-9 md-8 lg-7 xl-6"}
            row
            inputProps={{
                customStyle:"calistenia",
                col: "xs-12"
            }}
            inputs={{
                "equipo_medico_id": { type: "number", label: "Equipo medico", isRequired: true },
               // "fecha_gestionada": { type: "date", label: "Fecha gestionada", isRequired: true },
                "fecha_programada": { type: "date", label: "Fecha programada", isRequired: true },
                "detalle": { type: "textArea", label: "Detalle", isRequired: true },
               // "estado": { label: "Estado", type: "number", isRequired: true, },
                "asistencia": { label: "Asistencia", type: "number", isRequired: true, },
                "prioridad": { label: "Prioridad", type: "select", options:[
                    {key:0,content:"Vacio"},
                    {key:1,content:"Alta"},
                    {key:2,content:"Media"},
                    {key:3,content:"Baja"},
                ], isRequired: true, },
            }}
            onSubmitName="Registro"
            onSubmit={(data)=>{
                data.estado = 2;
                data.fecha_gestionada = new SDate().toString()
                console.log(data)
            }}
        />
    }
    render() {
        return (
            <SPage title={"Formulario"}>
                <SView col={"xs-12"} center>
                    {this.getForm()}
                </SView>
            </SPage>
        );
    }
}
