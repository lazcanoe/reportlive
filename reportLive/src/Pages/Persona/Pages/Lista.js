import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable, SText, STheme, SView } from 'servisofts-component';
import Persona from '..';
import SHttp from '../../../SHttp';
import Empresa from '../../Empresa';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getLista() {
        var data = Persona.getAll();
        var empresas = Empresa.getAll();
        if (!empresas) return <SLoad />;
        if (!data) return <SLoad />;
        return <STable
            header={[
                { key: "index", label: "#", width: 30 },
                { key: "nombre", label: "Nombre", width: 300,},
                { key: "apellido", label: "Apellido", width: 300,},
                { key: "correo", label: "Correo", width: 300,},
                { key: "telefono", label: "Telefono", width: 150,},
                { key: "celular", label: "celular", width: 150,},
                { key: "empresa_id", label: "Empresa", width: 500, render:(val)=>{
                    var empresa = empresas[val];
                    if(!empresa) return "--"
                    return  empresa.nombre
                }},
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
            <SPage title={"Persona"} disableScroll>
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