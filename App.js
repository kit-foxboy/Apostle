/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

//import modules
import React, { Component } from "react";
import { Platform, View, StatusBar } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { AppLoading, Asset, Font } from 'expo';
import AppNavigator from "./navigation/AppNavigator";
import Layout from "./constants/Layout";
import Theme from "./constants/Theme";

const appTheme = {
    Header: {
        backgroundColor: Theme.colors.statusBar
    },
    Button: {
        titleStyle: { color: Theme.colors.statusBarText },
        buttonStyle: { backgroundColor: Theme.colors.statusBarButton }
    }
}

//export app
type Props = {};
export default class App extends Component<Props> {

    //define state
    state = {
        isLoadingComplete: false,
    };


    render() {
        // eslint-disable-next-line react/prop-types
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <View style={Layout.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"  />}
                    <ThemeProvider theme={appTheme}>
                        <AppNavigator />
                    </ThemeProvider>
                </View>
            );
        }
    }

    //class methods
    _loadResourcesAsync = async () => {
        return Promise.all([
          Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
            require("./assets/images/radio-unchecked.svg"),
            require("./assets/images/radio-checked.svg"),
          ]),
          Font.loadAsync({
            "righteous": require("./assets/fonts/Righteous-Regular.ttf"),
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          }),
        ]);
      };
    
    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}
