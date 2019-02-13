import React from "react";
import { View, FlatList } from "react-native";
import { ListItem, Button } from "react-native-elements";
import shortid from "shortid";
import Styles from "./styles";

function Checklist(props) {

    // console.log(props.list);

    function _renderItem({index, item}) {
        return <ListItem
            key={shortid.generate()}
            title={item.title}
            buttonGroup={{buttons: ["Pass", "Fail"]}} />
    }

    return (
        <View style={Styles.componentContainer}>
            <FlatList
                data={props.list}
                renderItem={_renderItem} />
            {/* <Button title="Submit" onPress={{}} /> */}
        </View>
    );

}


export default Checklist;