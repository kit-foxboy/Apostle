import React from "react";
import { Text, View } from "react-native";
// import PropTypes from "prop-types";
import styles from "./styles";

// eslint-disable-next-line no-unused-vars
function CheckButtons(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.textContainer, styles.box1]}>
                <View style={styles.textRow}><Text style={styles.text}>Tires</Text></View>
                <View style={styles.textRow}><Text style={styles.text}>Fluids</Text></View>
                <View style={styles.textRow}><Text style={styles.text}>Brakes</Text></View>
                <View style={styles.textRow}><Text style={styles.text}>Horn</Text></View>
            </View>

            <View style={[styles.textContainer, styles.box2]}>
            </View>

        </View>
    )
}

// CheckButtons.PropTypes = {

// }

export default CheckButtons;