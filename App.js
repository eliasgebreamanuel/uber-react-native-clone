import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from '@react-navigation/stack'; 
import MapScreen from "./screens/MapScreen";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StackView.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name ="MapScreen" component={MapScreen} options={{headerShown: false}} />
          </StackView.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
