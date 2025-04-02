import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';

export default function App() {
  const Stack = createNativeStackNavigator()
  return <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
}

//  <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='*' element={<h1>Page Not Found</h1>} />
//       </Routes>
//     </BrowserRouter>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
