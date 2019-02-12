import React from "react";
import { Flatlist, TouchableOpacity, Button, View } from "react-native";
import PropTypes from "prop-types";

function CheckListItems(props) {
    return(
        <TouchableOpacity>
            <Flatlist 
                data={props.listData}
                renderItem={_renderItem}
            />
        </TouchableOpacity>

    )
}

const _renderItem = ({ item }) => {
    return(
        

    )
        
}