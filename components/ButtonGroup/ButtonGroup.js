//import modules
import React from "react";
import {FlatList, TouchableWithoutFeedback, Button} from "react-native";
import PropTypes from "prop-types";

function ButtonGroup(props) {
    return (
        <TouchableWithoutFeedback>
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Button onPress={() => props.clickHandler(item.key)} title={item.key}>{item.key}</Button>}
            />
        </TouchableWithoutFeedback>
    );
}

//define prop types
ButtonGroup.propTypes = {
    clickHandler: PropTypes.func.isRequired
}

export default ButtonGroup;