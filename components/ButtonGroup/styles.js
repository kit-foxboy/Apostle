import { StyleSheet } from "react-native";
import Theme from "../../constants/Theme";

const styles = StyleSheet.create({

    listContainer: {
        flexDirection: "column", 
        alignItems: "center",
        backgroundColor: Theme.colors.bgPrimary
    },

    actionButton: {
        flexBasis: "30%",
        height: 75,
        marginTop: 10,
        marginStart: 5,
        marginEnd: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "#e1e1e1",
        backgroundColor: Theme.colors.btnPrimary
    },

    textContainer: {
        flex: 1, 
        justifyContent: "center"
    },

    buttonText: {
        color: "#ffffff", 
        width: "100%", 
        textAlign: "center", 
        textAlignVertical: "center", 
        fontWeight: "bold"
    }

});

export default styles;