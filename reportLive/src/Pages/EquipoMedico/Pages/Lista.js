import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable, SText, STheme, SView } from 'servisofts-component';
import EquipoMedico from '..';
import Producto from '../../Producto';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getLista() {
        var data = EquipoMedico.getAll();
        var equipomedico = EquipoMedico.getAll();
        var productos = Producto.getAll();
        if (!equipomedico) return <SLoad />;
        if (!productos) return <SLoad />;
        if (!data) return <SLoad />;
        return <STable
            header={[
                { key: "index", label: "#", width: 30 },
                { key: "producto_id", label: "Producto", width: 500, render:(val)=>{
                    var productoid = productos[val];
                    if(!productoid) return "--"
                    return  productoid.nombre
                }},
                { key: "codigo", label: "Codigo", width: 300,},
                { key: "estado", label: "Estado", width: 300,},
                {
                    key: "propio", label: "Propio", width: 70, render: (val) => {
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
                { key: "version_sw", label: "Version Software", width: 150,defaultValue:"--"},
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
            <SPage title={"Equipo Medico"} disableScroll>
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