//import modules
import React from "react";
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import PropTypes from "prop-types";
import Styles from "./styles";

function ButtonGroup(props) {
    
    // eslint-disable-next-line react/prop-types
    const _renderItem = ({item}) => {
        return (
            <TouchableOpacity style={Styles.actionButton} key={item.key} onPress={() => props.clickHandler()}>
                <View style={Styles.textContainer}>
                    <Text style={Styles.buttonText}>{item.actionName}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <FlatList data={props.buttonData} renderItem={_renderItem} numColumns={3} style={Styles.listContainer} />
    );
    
}

//define prop types
ButtonGroup.propTypes = {
    buttonData: PropTypes.array.isRequired,
    clickHandler: PropTypes.func.isRequired
}



export default ButtonGroup;