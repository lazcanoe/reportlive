import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable, SText, STheme, SView } from 'servisofts-component';
import Oficina from '..';
import Empresa from '../../Empresa';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getLista() {
        var data = Oficina.getAll();
        if (!data) return <SLoad />;
        var empresas = Empresa.getAll();
        if (!empresas) return <SLoad />;
        return <STable
            header={[
                { key: "index", label: "#", width: 30 },
                { key: "empresa_id", label: "Empresa", width: 500, render:(val)=>{
                    var empresaid = empresas[val];
                    if(!empresaid) return "--"
                    return  empresaid.nombre
                }},
                { key: "nombre", label: "Nombre", width: 300},
                { key: "direccion", label: "Direccion", width: 300},
                { key: "telefono", label: "Telefono", width: 300},
                { key: "encargado", label: "Encargado", width: 300},
                { key: "central", label: "Central", width: 300},
                { key: "estado", label: "Estado", width: 300},
            ]}
            onEdit={(obj) => {
                // ComponentPadre.editar(obj);
            }}
            data={data}
        >

        </STable>
    }
    render() {


        return (
            <SPage title={"Oficina"} disableScroll>
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