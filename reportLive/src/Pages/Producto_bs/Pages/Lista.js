import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable, SText, STheme, SView } from 'servisofts-component';
import Producto_bs from '..';
import Oficina from '..';
import Empresa from '../../Empresa';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getLista() {
        var data = Producto_bs.getAll();
        if (!data) return <SLoad />;
        return <STable
            limit={50}
            header={[
                { key: "index", label: "#", width: 30 },
                { key: "nombre", label: "Nombre", width: 300},
                {
                    key: "estado", label: "Estado", width: 70, render: (val) => {
                        return <SView col="xs-12" center >
                            <SView style={{
                                width: 20,
                                height: 20,
                                borderRadius: 4,
                                backgroundColor: (!val ? "#600" : "#060")
                            }} />
                        </SView>
                    }
                    },
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
            <SPage title={"Producto BS"} disableScroll>
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