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
import { AppLoading, Asset, Font } from 'expo';
import AppNavigator from "./navigation/AppNavigator";
import Layout from "./constants/Layout";


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
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    <AppNavigator />
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
            ]),
            Font.loadAsync({
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
