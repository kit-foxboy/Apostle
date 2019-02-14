import React, { Component } from "react";
import { View, Text, Alert, AsyncStorage } from "react-native";
import { Header, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { API_KEY } from "react-native-dotenv";
import { ChecklistForm, Checklist } from "../components/";
import Styles from "../components/styles";
import Axios from "axios";
import shortid from "shortid";

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
        inspectionId: 0,
        inspectionList: [
            {
                title: "Brakes",
                status: null
            },
            {
                title: "Cargo",
                status: null
            },
            {
                title: "Horn",
                status: null
            },
            {
                title: "Tires",
                status: null
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
                {this.state.car.id !== 0 && <Checklist key={shortid.generate()} list={this.state.inspectionList} clickHandler={this._inspectionClickHandler} />}
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
        const userToken = await AsyncStorage.getItem("userToken");
        car.apiKey = API_KEY;
        delete car.id;
        Axios.post("https://apostle-dsp.herokuapp.com/api/vehicles", car).then(carResults => {

            Axios.post("https://apostle-dsp.herokuapp.com/api/inspection", { userID: parseInt(userToken) }).then(inspectionResults => {
                
                if(carResults.data.id && inspectionResults.data.id) {
                    this.setState({
                        car: {
                            id: carResults.data.id,
                            make: this.state.car.make,
                            model: this.state.car.model,
                            registrationDate: this.state.car.registrationDate,
                            registrationNbr: this.state.car.registrationNbr,
                            vinNbr: this.state.car.vinNbr,
                            year: this.state.car.year
                        },
                        inspectionId: inspectionResults.data.id
                    });
    
                        this.props.navigation.setParams({backButton: false});
                }
            }).catch(err => {
                Alert.alert("Registration Failed", "An error ocurred: " + err.toString());
            });
        }).catch(err => {
            Alert.alert("Registration Failed", "An error ocurred: " + err.toString());
        });
    }

    _inspectionSubmitHandlerAsync = async () => {

        //TODO: submit inspection w/ timestamp
        this.props.navigation.navigate("Home");
    }

    _inspectionClickHandler = (index, status) => {
        const inspectionState = this.state.inspectionList;
        inspectionState[index].status = (status === 0) ? "Pass" : "Fail";
        this.setState({
            inspectionList: inspectionState,
            car: this.state.car
        });
    }
}

ChecklistScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default ChecklistScreen;