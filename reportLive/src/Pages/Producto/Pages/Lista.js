import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable, SText, STheme, SView } from 'servisofts-component';
import Producto from '..';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getLista() {
        var data = Producto.getAll();
        if (!data) return <SLoad />;
        return <STable
            header={[
                { key: "index", label: "#", width: 30 },
                { key: "codigo", label: "Codigo", width: 300,},
                { key: "nombre", label: "Nombre", width: 300,},
                { key: "descripcion", label: "Descripcion", width: 300,},
                { key: "estado", label: "Estado", width: 150,},
                { key: "categoria_id", label: "Categoria", width: 150,},
                { key: "fabricante_id", label: "Fabricante", width: 150,},
                { key: "Garantia", label: "Garantia", width: 150,},
                { key: "fecha_fin_fab", label: "Fecha Fin Fabricacion", width: 150,},
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
            <SPage title={"Producto"} disableScroll>
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