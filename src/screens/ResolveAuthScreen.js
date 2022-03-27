import React, {useContext, useEffect} from "react";
import {KeyboardAvoidingView, StyleSheet, Text, View, ActivityIndicator,Image,Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const win = Dimensions.get('window');

const ResolveAuthScreen = () => {
    

    return (
    <SafeAreaView style={styles.container}>
      <Image
      style={styles.tinyLogo}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/lucia-chain.appspot.com/o/logotransparent.png?alt=media&token=0bc0a202-4bcb-41a4-b6d5-1dc3b394f0e0',
        }}
      />
    </SafeAreaView>
    )
}

export default ResolveAuthScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 200,
        height: 100,
        resizeMode: "contain",
      },
  });