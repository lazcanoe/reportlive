import React, { Component } from 'react';

import { SForm, SHr, SInput, SPage, SText, STheme, SView } from 'servisofts-component';

export default class Formulario extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
            customStyle: "calistenia"
        };
    }

    getControls() {
        return <SView col={"xs-12"} backgroundColor={STheme.color.primary + "22"} center height={100} row>
            <SView col={"xs-11 md-6 xl-4"}>
                <SText>Click para ver los diferentes: CustomStyle</SText>
                <SInput
                    customStyle={this.state.customStyle}
                    type="select"
                    defaultValue={this.state.customStyle}
                    options={["calistenia", "bateon", "default", "primary", "secondary"]}
                    onChangeText={(text) => {
                        this.setState({ customStyle: text });
                    }} />
            </SView>

        </SView>
    }
    getForm() {
        return <SForm
            col={"xs-11.5"}
            row
            style={{
                justifyContent: "space-around",
            }}
            inputProps={{
                customStyle: this.state.customStyle,
                col: "xs-11 md-3.5"
            }}
            inputs={{
                "default": { type: "default", label: "default", isRequired: true },
                "date": { type: "date", label: "date", isRequired: true, },
                "email": { label: "email", type: "email", isRequired: true, },
                "fecha": { label: "fecha", type: "fecha", isRequired: true, },
                "image": { label: "image", type: "image", isRequired: true, },
                "money": { label: "money", type: "money", isRequired: true, },
                "number": { label: "number", type: "number", isRequired: true, },
                "password": { label: "password", type: "password", isRequired: true, },
                "phone": { label: "phone", type: "phone", isRequired: true, },
                "select": {
                    label: "select", type: "select", isRequired: true,
                    options: [
                        {
                            key: "key1",
                            content: (<SText color={"#f0f"}>Contenido</SText>)
                        },
                        {
                            key: "key2",
                            content: (<SText color={"#0ff"}>Contenido</SText>)
                        },
                    ]
                },
                "telefono": { label: "telefono", type: "telefono", isRequired: true, },
                "telefono2": { label: "telefono2", type: "telefono", isRequired: true, },
                "direccion": { label: "direccion", type: "direccion", isRequired: true, },
                "file": { label: "file", type: "file", isRequired: true, },
                "customStyle": {
                    label: "customStyle", col: "xs-3", isRequired: true,
                    multiline: true,
                    value:`{ 
    label: "customStyle", col: "xs-4", isRequired: true,
    multiline: true,
    value:''
    style: {
        height: 100,
        backgroundColor: STheme.color.primary,
    }
}`,
                    style: {
                        height: 200,
                        backgroundColor: STheme.color.primary+"bb",
                    }
                },
            }}
            onSubmitName="onSubmit"
            onSubmit={(values) => {
                alert(JSON.stringify(values));
            }}
        />
    }
    render() {
        return (
            <SPage title={"Formulario"}>
                <SView col={"xs-12"} center>
                    {this.getControls()}
                    <SHr />
                    {this.getForm()}
                </SView>
            </SPage>
        );
    }
}
