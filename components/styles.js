import { StyleSheet } from "react-native";
import Theme from "../constants/Theme";

const styles = StyleSheet.create({

    listContainer: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Theme.colors.bgPrimary
    },

    logoContainer: {
        flex: 1, 
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "center"
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
    },

    componentContainer: {
        flex: 1,
        backgroundColor: Theme.colors.bgPrimary
    },
    loginScreenContainer: {
        flex: 1,
    },
    logoText: {
        marginTop: 150,
        marginBottom: 30,
        fontSize: 40,
        fontWeight: "800",
        textAlign: 'center',
        color: Theme.colors.lightText
    },
    formView: {
        flex: 1
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: Theme.colors.inputBackground,
        borderColor: Theme.colors.inputBorder,
    },
    loginButton: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 15,
        padding: 20,
        alignItems: "center",
        backgroundColor: Theme.colors.btnPrimary,
    },

});

export default styles;