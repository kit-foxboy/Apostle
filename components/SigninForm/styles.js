import {StyleSheet} from "react-native";
import Theme from "../../constants/Theme";

const styles = StyleSheet.create({
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
      loginFormView: {
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