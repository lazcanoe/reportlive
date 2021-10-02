import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SText, STheme, SView } from 'servisofts-component';

export default class DropFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView col={"xs-12"} height>
                <SView height col={"xs-12"} backgroundColor={STheme.color.primary + "66"} style={{
                    borderRadius: 4,
                }} center>
                    <SText>Suelta aqui las imagenes!</SText>
                </SView>
            </SView>
        );
    }
}
