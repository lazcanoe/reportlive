import React, { Component } from 'react';
import { SImage, SText, STheme, SView, SIcon, SNavigation } from 'servisofts-component';
import ComponentPadre from '../../Pages/Ajustes/Pages/PalabraRestringida/index';
// import parserHtml from "html-react-parser"

type BotonesType = {
    history: 'this.props.history',
    data: [{ url: String, params: object, label: "Title", icon: SIcon, onPress?: Function }]
}
export default class RegExr extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getTexto = () => {
        if (!this.props.text) return;
        var listaExpre = [];
        var frase_ok;
        var frase = this.props.text
        var data = ComponentPadre.getAll(this.props.props);
        if (!data) return;
        console.log(JSON.stringify(data) + "---KKK")

        Object.keys(data).map((key) => {
            var obj = data[key];
            // console.log(obj);

            var regex_ok = new RegExp(obj.regex, "i");
            listaExpre = frase.match(regex_ok);
            if (listaExpre != null) {
                console.log(listaExpre + "+++++" + regex_ok)
                 frase_ok = frase.replace(regex_ok, '<SText  style={{backgroundColor: "' + obj.color + '" }} >' + listaExpre[0] + '</SText>')
                frase = frase_ok
                
            }

        })
        // return <SText style={{
        //     color: STheme.color.secondary,
        //     textAlign: "center",
        //     height: 24,
        //     fontSize: 12,
        // }}>{(frase)}</SText>
        return frase


    }
    render() {
        return (
            <SView style={{
                ...this.props.style,
            }} >
                {/* {parserHtml(this.getTexto())} */}
                {this.getTexto()}
            </SView>
        );
    }
}
