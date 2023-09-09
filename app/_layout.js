import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
// used for internal routing/linking.
const Layout = () =>{

  const [fontsLoaded] = useFonts({
    Helvetica: require("../assets/fonts/Helvetica.ttf"),
    HelveticaMedium: require("../assets/fonts/Helvetica-Oblique.ttf"),
    HelveticaBold: require("../assets/fonts/Helvetica-Bold.ttf"),
  })

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded])
  if(!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView}/>
}

export default Layout;