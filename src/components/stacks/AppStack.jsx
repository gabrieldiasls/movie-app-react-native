import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test from "../testComponent/Test";
import SearchResults from "../../pages/SearchResults";
import NavigationTabs from "../navigation/NavigationTabs";

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="NavigationTabs" component={NavigationTabs} options={{
          title: "Movies App",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }} />
      {/* <Stack.Screen name="Index" component={Test} />
      <Stack.Screen name="Index2" component={SearchResults} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
