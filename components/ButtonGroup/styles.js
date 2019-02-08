import {StyleSheet} from "react-native";
import Theme from "../../constants/Theme";

const styles = StyleSheet.create({
    componentContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Theme.colors.btnPrimary
    },

    buttonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Theme.colors.bgPrimary,
      },

      buttonOne: {
        flex: 1,
        backgroundColor: Theme.colors.btnPrimary
      
      }
    
});

export default styles;