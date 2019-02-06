//import modules
import React from "react";
import { FlatList, TouchableOpacity, Button } from "react-native";
import PropTypes from "prop-types";

function ButtonGroup(props) {
    return (
        <TouchableOpacity>
            <FlatList
                data={props.buttonData}
                renderItem={_renderItem}
            />
        </TouchableOpacity>
    );
}

const _renderItem = ({ item }) => {
    return <buttonContainer>
        <Button
            onPress={() => this.props.clickHandler()}
            title={item.key}
        />
    </buttonContainer>

}

//define prop types
ButtonGroup.propTypes = {
    buttonData: PropTypes.array.isRequired,
    clickHandler: PropTypes.func.isRequired
}



export default ButtonGroup;