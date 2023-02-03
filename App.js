import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import AppStack from './src/components/stacks/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style='light' />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});