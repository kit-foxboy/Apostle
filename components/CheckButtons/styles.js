import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    textContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
  
    box1: {
      flex: 4,
      backgroundColor: '#FFFEE7',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
  
    box2: {
      flex: 1,
      backgroundColor: '#FEEEE4',
    },
    
  
    textRow: {
      marginStart: 15,
      backgroundColor: 'gray',
      paddingStart: 30,
      paddingEnd: 30,
      paddingTop: 15,
      paddingBottom: 15
    },
  
    text: {
      color: 'white',
    }
  
  });

  export default styles;