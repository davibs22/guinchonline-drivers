import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import RecoveryPassword from './screens/auth/RecoveryPassword';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} options={{ headerBackVisible: false }}/>
        <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} options={{ headerBackVisible: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerBackVisible: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;