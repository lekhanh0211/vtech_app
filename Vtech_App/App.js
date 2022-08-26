import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { WebView } from "react-native-webview";
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#00C83C" />
      <WebView source={{ uri: 'https://demoshop.vtechedu.vn/' }} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
