import React from "react";
import { Text, View } from "react-native";
// import PropTypes from "prop-types";
import styles from "./styles";
import RadioButtons from "../components/RadioButtons";

// eslint-disable-next-line no-unused-vars
function CheckButtons(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.textContainer, styles.box1]}>

                <View style={styles.textRow}>
                    <Text style={styles.text}>Tires</Text><RadioButtons />
                </View>

                <View style={styles.textRow}>
                <Text style={styles.text}>Fluids</Text><RadioButtons />
                </View>

                <View style={styles.textRow}>
                <Text style={styles.text}>Brakes</Text><RadioButtons />
                </View>

                <View style={styles.textRow}>
                <Text style={styles.text}>Horn</Text><RadioButtons />
                </View>

            </View>

            <View style={[styles.textContainer, styles.box2]}>
            </View>

        </View>
    )
}

// CheckButtons.PropTypes = {

// }

export default CheckButtons;