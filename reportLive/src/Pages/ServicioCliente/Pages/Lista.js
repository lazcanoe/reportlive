import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SDate, SIcon, SLoad, SNavigation, SPage, STable, SText, STheme, SView } from 'servisofts-component';
import ServicioCliente from '..';
import Empresa from '..';
import SHttp from '../../../SHttp';
import TipoServicio from '../../TipoServicio';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getLista() {
        var data = ServicioCliente.getAll();
        var tipoServicio = TipoServicio.getAll();
        if (!data) return <SLoad />;
        if (!tipoServicio) return <SLoad />;
        return <STable
            header={[
                { key: "index", label: "#", width: 30 },
                { key: "servicio_cliente_id", label: "id", width: 70,  },
                { key: "equipo_medico_id", label: "Equipo Medico", width: 300, order: "desc" },
                { key: "fecha_gestionada", label: "Fecha Gestion", width: 200,render:(val)=>{
                    return new SDate(val).toString("yyyy-MONTH-dd hh:mm")
                }},
                { key: "fecha_programada", label: "Fecha Programada", width: 200,render:(val)=>{
                    return new SDate(val).toString("yyyy-MONTH-dd hh:mm")
                }},
                { key: "detalle", label: "detalle", width: 500, },
                { key: "estado", label: "estado", width: 50 },
                { key: "asistencia_id", label: "Numero de Asistencia", width: 300 },
                { key: "tipo_pago_serv", label: "Tipo Pago", width: 300,render:(val)=>{
                    switch(val){
                        case 1: return "Contrato"
                        case 2: return "Garantia"
                        case 3: return "Pago"
                        default: return "S/N"
                    }
                }},
                { key: "tipo_servicio_id", label: "Tipo Servicio", width: 300,render:(val)=>{
                    var obj = tipoServicio[val];
                    if(!obj) return "--"
                    return  obj.nombre
                }},
                { key: "prioridad", label: "Prioridad", width: 300,render:(val)=>{
                    switch(val){
                        case 1: return "Baja"
                        case 2: return "Media"
                        case 3: return "Alta"
                        default: return "S/N"
                    }
                }},
                { key: "ya_notificado", label: "Notificado", width: 300 },
            ]}
            dataProps={{
                defaultHeight:50
            }}
            onEdit={(obj) => {
                // ComponentPadre.editar(obj);
            }}
            data={data}
        >

        </STable>
    }
    render() {


        return (
            <SPage title={"ServicioCLiente"} disableScroll>
                <SView col={"xs-12"} height>
                    {this.getLista()}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(index);