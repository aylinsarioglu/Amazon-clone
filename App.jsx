import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
   <SafeAreaView style={{ flex: 1 , backgroundColor: '#9EE4D4'}}>
    <StatusBar barStyle="dark-content" />
     <NavigationContainer >
      <RootNavigation />
    </NavigationContainer>
   </SafeAreaView>
  );
};

export default App;