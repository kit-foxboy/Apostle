//import modules
import React, { Component } from "react";
import { ButtonGroup } from "../components/ButtonGroup";

class EmployeeActionScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    //run when component loads
    componentDidMount() {
        
        //TODO: make API request for real data
    }

    //handle render requests
    render = () => {

        return <ButtonGroup clickHandler={this.clickHandler} />;
    }

    clickHandler = () => {
        
        //TODO: handle button click
    }
}

export default EmployeeActionScreen;