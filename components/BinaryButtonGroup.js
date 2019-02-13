import React, { Component } from "react";
import { ButtonGroup } from "react-native-elements";

class BinaryButtonGroup extends ButtonGroup {

    constructor() {
        super();

        this.state = {
            selectedIdx: this.props.selectedIdx
        }
    }  
}

export default BinaryButtonGroup;