import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from './Home';
import MainContainer from './RotasTab';

const Stack = createStackNavigator();



export default function Rotas() {
  return (
    <>
    <MainContainer />
    <Stack.Navigator>
      <Stack.Screen
        name="MainContainer"
        component={MainContainer}
        options={{ headerShown:false, title:"MainContainer"}} 
        />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown:false, title:"Login"}}
        />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown:false, title:"Home" }} 
        />
    </Stack.Navigator>
    </>
  );
}
