import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable2, SText, STheme, SView, SDate } from 'servisofts-component';
import EquipoMedicoEmpresa from '..';
import Empresa from '../../Empresa';
import EquipoMedico from '../../EquipoMedico';
import Oficina from '../../Oficina';
import Producto from '../../Producto';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getLista() {
        var data = EquipoMedicoEmpresa.getAll();
        var empresas = Empresa.getAll();
        var equipos = EquipoMedico.getAll();
        var productos = Producto.getAll();
        var oficinas = Oficina.getAll();
        if (!empresas) return <SLoad />;
        if (!equipos) return <SLoad />;
        if (!data) return <SLoad />;
        if (!productos) return <SLoad />;
        if (!oficinas) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 30 },
                { key: "empresa_id", label: "Empresa", width: 500, render:(val)=>{
                    var empresaid = empresas[val];
                    if(!empresaid) return "--"
                    return  empresaid.nombre
                }},
                { key: "equipo_medico_id", label: "Numero de Serie", width: 300, render:(val)=>{
                    var equipo = equipos[val];
                    if(!equipo) return "--"
                    return  equipo.codigo
                }},
                { key: "equipo_medico_id-nombre", label: "Equipo Medico", width: 300, render:(val)=>{
                    var equipo = equipos[val];
                    if(!equipo) return "--"
                    var producto = productos[equipo.producto_id];
                    if(!producto) return "--"
                    return  producto.nombre
                }},
                { key: "equipo_medico_id-descrip", label: "Equipo Medico", width: 300, render:(val)=>{
                    var equipo = equipos[val];
                    if(!equipo) return "--"
                    var producto = productos[equipo.producto_id];
                    if(!producto) return "--"
                    return  producto.descripcion
                }},
                { key: "fecha_entrega", label: "Fecha Entrega", width: 200,render:(val)=>{
                    return new SDate(val).toString("yyyy-MONTH-dd hh:mm")
                }},
                { key: "fecha_fin_garantia", label: "Fecha Fin Garantia", width: 200,render:(val)=>{
                    return new SDate(val).toString("yyyy-MONTH-dd hh:mm")
                }},
                { key: "detalle", label: "Detalle", width: 300,},
                { key: "oficina_id", label: "Oficina", width: 150,render:(val)=>{
                    var oficina = oficinas[val];
                    if(!oficina) return "--"
                    return  oficina.nombre
                }},
                { key: "contrato_id", label: "Contrato", width: 300,},
                { key: "estado", label: "Estado", width: 50,},
            ]}
            onEdit={(obj) => {
                // ComponentPadre.editar(obj);
            }}
            data={data}
        />
    }
    render() {


        return (
            <SPage title={"Equipo Medico Empresa"} disableScroll>
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