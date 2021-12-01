import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
const URL = "https://reportlife.icysmedical.com/api"
//const URL = "http://localhost:8080"
var INSTANCE = null;
class SHttp extends Component {
    static PROP;
    static post(data) {
        SHttp.dispatch(data);
     //   var myHeaders = new Headers();
    //    myHeaders.append("Content-Type", "multipart/form-data");
    // myHeaders.append("no-cors", "true");
     //    myHeaders.append("Access-Control-Allow-Origin", "*");

         var formdata = new FormData();
        formdata.append("data",JSON.stringify(data));
        var requestOptions = {
            method: 'POST',
       //     headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };
        fetch(URL, requestOptions)
            .then(response => response.text())
            .then(result => {
                SHttp.dispatch(JSON.parse(result));
            })
            .catch(error => console.log('error', error));
    }
    static getState(){
        return INSTANCE.state;
    }
    static dispatch(data){
        return INSTANCE.dispatch(data);
    }
    constructor(props) {
        super(props);
        INSTANCE = props;
        this.state = {
        }
    }
    render() {
        INSTANCE = this.props;
        return (
            this.props.children
        )
    }
}

const initStates = (state) => {
    return { state }
};
export default connect(initStates)(SHttp);