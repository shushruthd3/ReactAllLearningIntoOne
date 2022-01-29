import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from "./src/HomeScreen";
import LoginPage from "./src/LoginPage";
import { Header } from 'react-native/Libraries/NewAppScreen';


var stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="loginPage" component={LoginPage} options={{ headerShown: false }} />
        <stack.Screen name="homePage" component={HomePage} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
