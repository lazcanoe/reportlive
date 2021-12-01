import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable, SText, STheme, SView } from 'servisofts-component';
import Tecnico from '..';
import Empresa from '..';
import SHttp from '../../../SHttp';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getLista() {
        var data = Tecnico.getAll();
        if (!data) return <SLoad />;
        return <STable
            header={[
                { key: "index", label: "#", width: 30 },
                { key: "tecnico_id", label: "Tecnico", width: 150,  },
                { key: "nombre", label: "Nombre", width: 300, order: "desc" },
                { key: "apellido", label: "Apellido", width: 300 },
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
                { key: "perfil_id", label: "Perfil", width: 100 },
                { key: "detalle", label: "Detalle", width: 300 },
                { key: "usuario_id", label: "Usuario", width: 100 },
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
            <SPage title={"Tecnicos"} disableScroll>
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