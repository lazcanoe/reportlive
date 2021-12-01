import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable, SText, STheme, SView } from 'servisofts-component';
import TipoServicio from '..';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getLista() {
        var data = TipoServicio.getAll();
        if (!data) return <SLoad />;
        return <STable
            header={[
                { key: "index", label: "#", width: 30 },
                { key: "tipo_servicio_id", label: "id", width: 300, },
                { key: "nombre", label: "Nombre", width: 300, order: "desc" },
                { key: "tipo", label: "Tipo", width: 300 },
                { key: "descripcion", label: "Descripcion", width: 300 },
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
            dataProps={{
                defaultHeight: 50
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
            <SPage title={"TipoServicio"} disableScroll>
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