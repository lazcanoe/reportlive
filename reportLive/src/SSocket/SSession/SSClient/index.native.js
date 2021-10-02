import { SSocketConfigProps } from "../..";
import SSession from '../index';

export default class SSClient {
    constructor(props: SSocketConfigProps, SSession: SSession) {
        this.props = props;
        this.SSession = SSession;
    }
}