import React from "react";
import { View, Text, FlatList } from "react-native";
import { ListItem, } from "react-native-elements";
import PropTypes from "prop-types";
import shortid from "shortid";
import Styles from "./styles";

function Checklist(props) {

    function _renderItem({index, item}) {
        
        const status = props.list[index].status;
        let selectedIndex = null;
        if (status !== null) {
            selectedIndex = (status === "Pass") ? 0 : 1;
        }
        
        return <ListItem
            title={item.title}
            buttonGroup={{
                buttons: [
                    <Text key={shortid.generate()}>Pass</Text>,
                    <Text key={shortid.generate()}>Fail</Text>
                ], 
                selectedIndex: selectedIndex,
                onPress: (buttonIndex) => { props.clickHandler(index, buttonIndex); } 
            }} />
    }
    return (
        <View style={Styles.componentContainer}>
            <FlatList
                keyExtractor={() => shortid.generate() }
                data={props.list}
                renderItem={_renderItem} />
            {/* <Button title="Submit" onPress={{}} /> */}
        </View>
    );
}

Checklist.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    clickHandler: PropTypes.func.isRequired,
    index: PropTypes.number,
    item: PropTypes.object
}


export default Checklist;