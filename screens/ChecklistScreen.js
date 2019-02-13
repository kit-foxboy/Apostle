import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { Header, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { ChecklistForm, Checklist } from "../components/";
import Styles from "../components/styles";
import Axios from "axios";

class ChecklistScreen extends Component {

    state = {
        car: {
            id: 0,
            make: "",
            model: "",
            registrationDate: "",
            registrationNbr: "",
            vinNbr: "",
            year: ""
        },
        inspectionList: [
            {
                title: "Brakes",
                pass: null
            },
            {
                title: "Cargo",
                pass: null
            },
            {
                title: "Horn",
                pass: null
            },
            {
                title: "Tires",
                pass: null
            },
        ]
    }
    
    static navigationOptions = ({ navigation }) => {
        
        const leftComponent = (navigation.getParam("backButton", true) === true) ?
            <Button title="Cancel" onPress={() => navigation.getParam("cancel", () => { navigation.navigate("Home"); })()} /> : null;
        
        return {
          header: (
            <Header
                leftComponent={leftComponent}
                centerComponent={<Text>{navigation.getParam("title")}</Text>}/>
          ),
        };
    };
    
    render () {
        return(
            <View style={Styles.componentContainer}>
                {this.state.car.id === 0 && <ChecklistForm inputHandler={this._carInputHandler} submitHandler={this._carSubmitHandlerAsync} /> }
                {this.state.car.id !== 0 && <Checklist list={this.state.inspectionList} clickHandler={this._inspectionClickHandler} />}
            </View>
        );
    }

    _carInputHandler = (key, value) => {
        const carState = this.state.car;
        carState[key] = value;
        this.setState({carState});
    }

    _carSubmitHandlerAsync = async() => {
        
        //handle invalid input
        for (let key in this.state.car) {
            if (key !== "id" && this.state.car[key] === "") {
                return Alert.alert("Incomplete", "You must enter a value for all fields.");
            }
        }

        const car = this.state.car;
        delete car.id;
        Axios.post("https://apostle-dsp.herokuapp.com/api/vehicles", car).then(results => {

            if(results.data.id) {
                this.setState({
                    car: {
                        id: results.data.id,
                        make: this.state.car.make,
                        model: this.state.car.model,
                        registrationDate: this.state.car.registrationDate,
                        registrationNbr: this.state.car.registrationNbr,
                        vinNbr: this.state.car.vinNbr,
                        year: this.state.car.year
                    }
                });

                this.props.navigation.setParams({backButton: false});
            }
            
        }).catch(err => {
            Alert.alert("Registration Failed", "An error ocurred: " + err.toString());
        });
    }

    _inspectionSubmitHandlerAsync = async () => {

        //TODO: submit inspection w/ timestamp
        this.props.navigation.navigate("Home");
    }

    // _inspectionClickHandler = idx => {
    //     const inspectionState = this.state.inspectionList;
    //     inspectionState[idx].selectedIdx = (inspectionState[idx].selectedIdx === null) ? 0 : 1;
    //     this.setState({
    //         inspectionList: inspectionState,
    //         car: this.state.car
    //     });
    // }
}

ChecklistScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default ChecklistScreen;