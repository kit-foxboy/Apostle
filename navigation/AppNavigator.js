//import modules
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { AuthLoadingScreen, SignInScreen, EmployeeHomeScreen, AdminHomeScreen, ChecklistScreen } from "../screens";

const AdminStack = createStackNavigator({ Home: AdminHomeScreen });
const EmployeeStack = createStackNavigator({ Home: EmployeeHomeScreen, Checklist: ChecklistScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        AdminApp: AdminStack,
        EmployeeApp: EmployeeStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));