import {Platform, StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    link: {
        color: '#000000'
    },
    authContainer: {
        flex: 1,
        justifyContent: 'center',
        // marginBottom: '50%',
        marginHorizontal: '5%',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headerText: {
        color: '#008080',
        fontSize: 80
    },
    errorText: {
        color: '#E6873C',
        fontSize: 20
    },
    standardContainer: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

export default styles
