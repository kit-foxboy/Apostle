//import modules
import React from "react";
import { FlatList, TouchableOpacity, View, Button } from "react-native";
import PropTypes from "prop-types";

function ButtonGroup(props) {
    
    // eslint-disable-next-line react/prop-types
    const _renderItem = ({item}) => {
        return (
            <View>
                <Button
                    onPress={() => props.clickHandler()}
                    title={item.key}
                />
            </View>
        );
    }

    return (
        <TouchableOpacity>
            <FlatList
                data={props.buttonData}
                renderItem={_renderItem}
            />
        </TouchableOpacity>
    );
    
}

//define prop types
ButtonGroup.propTypes = {
    buttonData: PropTypes.array.isRequired,
    clickHandler: PropTypes.func.isRequired
}



export default ButtonGroup;