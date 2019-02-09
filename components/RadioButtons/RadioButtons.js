import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { RadioGroup } from 'react-native-btr';

export default class RadioButtons extends Component {
  state = {
    radioButtons: [
      {
        label: 'Pass',
        value: 'Pass',
        checked: false,
        color: '#000',
        disabled: false,
        flexDirection: 'row',
        size: 9,
      },
      {
        label: 'Fail',
        value: 'Fail',
        checked: false,
        color: '#000',
        disabled: false,
        flexDirection: 'row',
        size: 9,
      },
    ],
  };

  // update state
  onPress = data => this.setState({ data });

  render() {

    return (
      <View style={styles.container}>
        <RadioGroup
          color="#000"
          labelStyle={{ fontSize: 14 }}
          radioButtons={this.state.radioButtons}
          onPress={radioButtons => this.setState({ radioButtons })}
          style={styles.container}
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
    flexDirection: 'row',
  },
  
});
