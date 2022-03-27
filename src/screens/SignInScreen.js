import React, {useContext, useEffect, useState} from "react";
import {StyleSheet, StatusBar, Platform, KeyboardAvoidingView, TouchableOpacity,Dimensions,Image,SafeAreaView} from "react-native";
import { Input, Icon } from 'react-native-elements';

const win = Dimensions.get('window');

const SignInScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Input
                placeholder='Username'
                leftIcon={{ name: 'account-name' }}
            />
            <Input
                placeholder='Password'
                leftIcon={{ name: 'account-name' }}
            />
        </SafeAreaView>
    )
};

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

export default SignInScreen
