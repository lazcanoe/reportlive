import { SSocketConfigProps } from './index';

export const defaultConfig: SSocketConfigProps = {
    name: "glup",
    host: '192.168.0.3', 
    port: {
        native: 10003, // native ssl 'always' active
        web: 20003, // when ssl is enabled, final url will be wss://host/ws/
        http: 30003, // when ssl is enabled final url will be https://host/api/
    },
    ssl: false, // Only for https ans wss connections 
    cert: ""
}