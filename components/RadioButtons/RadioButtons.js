import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class RadioButtons extends Component {
    state = {
        data: [
            {
                label: 'Pass',
                checked: false,
            },
            
            {
                label: 'Fail',
                value: "Fail",
                checked: false
            },
            
        ],
    };

    // update state
    onPress = data => this.setState({ data });

    render() {
      
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <View style={styles.container}>
                <Text style={styles.valueText}>
                    Value = {selectedButton}
                </Text>
                <RadioGroup 
    checked = { false }           
    radioButtons={this.state.data} 
    onPress={this.onPress} 
    flexDirection='row'
/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valueText: {
        fontSize: 18, 
        marginBottom: 50,
    },
});
