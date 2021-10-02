import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SComponentContainer, SIcon, SNavigation, SView } from 'servisofts-component';
import Pages from './Pages';
import Assets from './Assets';

//---------REDUX----------
import Reducer from './Reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import SHttp from './SHttp';
// import SSocket from './SSocket';
//------------------------

const store = createStore(
    Reducer,
    {},
    applyMiddleware(reduxThunk),
);

const App = (props) => {
    return (
        <Provider store={store}>
            <SHttp >
                <SComponentContainer
                    debug
                    // socket={SSocket}
                    assets={Assets}
                    theme={{
                        initialTheme: "primary",
                        themes: {
                            default: {
                                barStyle: "dark-content",
                                barColor: "#30343B",
                                primary: "#30343B",
                                secondary: "#000000",
                                background: "#dddddd"
                            },
                            dark: {
                                barStyle: "light-content",
                                barColor: "#000000",
                                primary: "#000000",
                                secondary: "#ffffff",
                                background: "#222222"
                            }
                        }
                    }}>
                    <SNavigation props={{
                        prefixes: ["https://fullparts.servisofts.com", "fullparts.servisofts://"],
                        pages: Pages
                    }} />
                    {/* <SSocket /> */}
                </SComponentContainer>
            </SHttp>
        </Provider>
    )
}
export default App;