import { SPageListProps } from 'servisofts-component'

import InicioPage from "./InicioPage";
import CargaPage from './CargaPage/index';

import Empresa from './Empresa';
import Persona from './Persona';
import Fabricante from './Fabricante';
import ServicioCliente from './ServicioCliente';
import TipoServicio from './TipoServicio';
const Pages: SPageListProps = {
    "inicio": { component: InicioPage },
    "carga": { component: CargaPage },
    ...Empresa.pages,
    ...Persona.pages,
    ...Fabricante.pages,
    ...ServicioCliente.pages,
    ...TipoServicio.pages
}
export const ReducerPages = {
    ...Empresa.reducer,
    ...Persona.reducer,
    ...Fabricante.reducer,
    ...ServicioCliente.reducer,
    ...TipoServicio.reducer
}
export default Pages;