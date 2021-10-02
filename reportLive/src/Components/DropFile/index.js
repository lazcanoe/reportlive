import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SImage, SText, STheme, SView } from 'servisofts-component';
const delay = ms => new Promise(res => setTimeout(res, ms));

export default class DropFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
        this.onUpload = this.props.onUpload;
    }
    componentDidMount() {
        this.esperar();
    }
    esperar = async () => {
        await delay(300)
        if (this.isLoad) {
            return;
        }
        this.isLoad = true;

        document.querySelectorAll(".drop-zone__inputa").forEach(inputElement => {
            const dropZoneElement = inputElement.closest(".dropZonea");
            // dropZoneElement.addEventListener("click", (e) => {
            //     e.preventDefault();
            //     inputElement.click();
            // });

            inputElement.addEventListener("change", (e) => {
                for (let i = 0; i < inputElement.files.length; i++) {
                    const file = inputElement.files[i];
                    var ext = file.name.split('.').pop();
                    if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                        var fr = new FileReader();
                        fr.onload = (e) => {
                            this.state.images.push(e.target.result);
                            this.setState({ ...this.state });
                        }
                        fr.readAsDataURL(file);
                    }
                }
            });

            dropZoneElement.addEventListener("dragover", (e) => {
                e.preventDefault();
            });

            ["dragleave", "dragend"].forEach((type) => {
                dropZoneElement.addEventListener(type, (e) => {
                });
            });

            dropZoneElement.addEventListener("drop", (e) => {
                e.preventDefault();
                var Load = 0;
                if (e.dataTransfer.files.length) {
                    console.log(e)
                    inputElement.files = e.dataTransfer.files;
                }
                for (let i = 0; i < inputElement.files.length; i++) {
                    const file = inputElement.files[i];
                    var ext = file.name.split('.').pop();
                    if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                        var fr = new FileReader();
                        fr.onload = (e) => {
                            this.state.images.push(e.target.result);
                            this.setState({ ...this.state });
                        }
                        fr.readAsDataURL(file);
                    }
                }

            });
        });
    }
    getImages = () => {
        return <SView row>
            {this.state.images.map((image, index) => {
                return <SView key={index} width={50} height={50}>
                    <SImage src={image} />
                </SView>
            })}
        </SView>
    }
    render() {
        return (
            <SView col={"xs-12"} height>
                <SView height col={"xs-12"} backgroundColor={STheme.color.primary + "66"} style={{
                    borderRadius: 4,
                }} center onPress={() => {
                    document.getElementById("dropFileainp").click();
                }}>
                    <SText>Suelta aqui las imagenes!</SText>
                    {this.getImages()};
                    <div id={"dropFilea"} style={{
                        // display:"flex",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        // backgroundColor: "#f00",
                    }} className={"dropZonea"} onClick={() => {
                        if (this.props.onPress) this.props.onPress();
                    }}>
                        <input id={"dropFileainp"} type='file' name='file' className='drop-zone__inputa' accept="image/*"
                            style={{
                                display: "none"
                            }} />
                        {this.props.children}
                    </div>
                </SView>
            </SView>
        );
    }
}
