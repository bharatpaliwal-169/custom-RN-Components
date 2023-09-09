import { SafeAreaView,StyleSheet,Platform, StatusBar } from 'react-native';

import Login from '../screens/Login';
const App = () =>{
  return (
    <SafeAreaView style={styles.SafeContainer}>
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeContainer:{
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;
