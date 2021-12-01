import { SPageListProps } from 'servisofts-component'

import InicioPage from "./InicioPage";
import CargaPage from './CargaPage/index';

import Empresa from './Empresa';
import Persona from './Persona';
import Fabricante from './Fabricante';
import ServicioCliente from './ServicioCliente';
import TipoServicio from './TipoServicio';
import EquipoMedico from './EquipoMedico';
import Producto from './Producto';
import EquipoMedicoEmpresa from './EquipoMedicoEmpresa';
import Oficina from './Oficina';
import Tecnico from './Tecnico';
import { TouchableNativeFeedbackComponent } from 'react-native';
import { tsDeclareFunction } from '@babel/types';
import Producto_bs from './Producto_bs';
import Formulario from './Formulario';

const Pages: SPageListProps = {
    "inicio": { component: InicioPage },
    "carga": { component: CargaPage },
    "formulario":Formulario,
    ...Empresa.pages,
    ...Persona.pages,
    ...Fabricante.pages,
    ...ServicioCliente.pages,
    ...TipoServicio.pages,
    ...EquipoMedico.pages,
    ...Producto.pages,
    ...EquipoMedicoEmpresa.pages,
    ...Oficina.pages,
    ...Tecnico.pages,
    ...Producto_bs.pages
}
export const ReducerPages = {
    ...Empresa.reducer,
    ...Persona.reducer,
    ...Fabricante.reducer,
    ...ServicioCliente.reducer,
    ...TipoServicio.reducer,
    ...EquipoMedico.reducer,
    ...Producto.reducer,
    ...EquipoMedicoEmpresa.reducer,
    ...Oficina.reducer,
    ...Tecnico.reducer,
    ...Producto_bs.reducer
}
export default Pages;