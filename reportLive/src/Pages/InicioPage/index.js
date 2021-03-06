import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SIcon, SNavigation, SPage, SPopup, SStorage, SText, SView } from 'servisofts-component'
import BotonesPaginas from '../../Components/BotonesPaginas';
class InicioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        // if (!Usuario.getUsuarioLogueado(this.props)) {
        //     SNavigation.replace("carga")
        // }
        return (
            <SPage
                title="Inicio"
            >
                <SView
                    col={"xs-12"} center
                    props={{
                        col: "xs-12",
                        variant: "center"
                    }}>
                    <BotonesPaginas
                        history={this.props.history}
                        data={[
                            { url: "persona", label: "Persona", icon: <SIcon name={"Usuarios_all"} /> },
                            { url: "empresa", label: "Empresas", icon: <SIcon name={"empresa"} /> },
                            { url: "fabricante", label: "Fabricante", icon: <SIcon name={"Carrito"} /> },
                            { url: "servicioCliente", label: "Servicio Cliente", icon: <SIcon name={"Cheque"} /> },
                            { url: "tipoServicio", label: "Tipo Servicio", icon: <SIcon name={"Marker"} /> },
                            { url: "equipoMedico", label: "Equipos Medicos", icon: <SIcon name={"Ingreso"} /> },
                            { url: "producto", label: "Productos", icon: <SIcon name={"Profanity"} /> },
                            { url: "equipoMedicoEmpresa", label: "Equipo Medico-Empresa", icon: <SIcon name={"Paquete"} /> },
                            { url: "oficina", label: "Oficina", icon: <SIcon name={"Traspaso"} /> },
                            { url: "tecnico", label: "Tecnico", icon: <SIcon name={"Usuarios_entrenador"} /> },
                            { url: "producto_bs", label: "Producto BS", icon: <SIcon name={"Parameter"} /> },
                            { url: "formulario", label: "Formulario", icon: <SIcon name={"Entrenamiento"} /> },
                            {
                                label: "Salir", icon: <SIcon name={"Salir"} />, onPress: () => {
                                    SPopup.confirm({
                                        title: "Cerrar sesi??n", message: "Seguro que desea desconectar su usuario?", onPress: () => {
                                            UsuarioSession.logout(this.props)
                                        }
                                    })
                                }
                            },
                         
                        ]}
                    />
                </SView>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(InicioPage);