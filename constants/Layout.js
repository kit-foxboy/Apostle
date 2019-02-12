import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
    window: {
        width,
        height,
    },
    container: {
        flex: 1,
    },
    androidStatusbarButton: {
        right: {
            marginRight: 5
        },
        left: {
            marginLeft: 5
        }
    },
    isSmallDevice: width < 375,
};
