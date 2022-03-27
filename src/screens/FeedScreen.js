import React, {useContext, useEffect} from "react";
import {KeyboardAvoidingView,TouchableOpacity, FlatList, TextInput, StyleSheet, Text, View, ActivityIndicator,Image,Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Icon } from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;

const FeedScreen = () => {
    const [searchText, onChangeSearchText] = React.useState(null);

    /*Post Types:
    textOnly
    videoPost
    imagePost
    sharedPost
    */

    /*
    Note: userId must be used to find the firstName and lastName of the user

    Note: posts must be fetched on retrieveFeedData.js. The constant values are for test purposes
    only.
    */

    const posts = [
        {
            postId: '00000000001',
            userId: '00000000021',
            firstName: 'Ivan',
            lastName: 'Lava',
            postType: 'imagePost',
            postCaption:'This is a test post',
            postImage:'https://firebasestorage.googleapis.com/v0/b/lucia-chain.appspot.com/o/Vico-Sotto-in-podium.jpg?alt=media&token=ed065643-b201-4fa2-9898-51cb29c0a918',
            postVideo:'',
            reactionCount:'25',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/lucia-chain.appspot.com/o/dp.jpg?alt=media&token=835dfb53-b990-4ef2-b532-3ccb21112eae',
            time: '2'
        },
        {
            postId: '00000000001',
            userId: '00000000021',
            firstName: 'Ivan',
            lastName: 'Lava',
            postType: 'imagePost',
            postCaption:'Been enjoying the scenery here in Cafe In The Sky',
            postImage:'https://firebasestorage.googleapis.com/v0/b/lucia-chain.appspot.com/o/cafe.jpg?alt=media&token=5f115456-3516-4cbc-9822-f92fd669274c',
            postVideo:'',
            reactionCount:'25',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/lucia-chain.appspot.com/o/dp.jpg?alt=media&token=835dfb53-b990-4ef2-b532-3ccb21112eae',
            time: '5'
        },
    ]
    
    const userList = [
        {
            userId: '00000000021',
            firstName: 'Ivan',
            lastName: 'Lava',
            avatar: '',
        }
    ]

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.searchBar}>
                <View style = {styles.logoView}>
                    <Image
                        style={styles.tinyLogo}
                            source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lucia-chain.appspot.com/o/icontransparent.png?alt=media&token=2bbf4f46-ee4c-4e57-96bf-686f5a4667a8',
                            }}
                        />
                </View>
                    
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={onChangeSearchText}
                        value={searchText}
                        placeholder="search anything you want here"
                    />
                </View>
            </View>

            <View style={styles.postStatusBar}>
                <TouchableOpacity style = {styles.statusViewContainer}>
                    <Text style = {styles.statusText}>click to let your community know what's on your mind...</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.feedArea}>
                <View style = {styles.labelHeader}>
                    <Text>Feeds in Sta. Lucia</Text>
                </View>
                
                <FlatList
                    numColumns="1"
                    keyExtractor={(item) => item.id}
                    data = {posts}
                    renderItem={({item}) => (
                    <View style = {styles.feedBorder}>    
                        <View style = {styles.feedList}>
                            <View style = {styles.feedHeader}>

                                <TouchableOpacity 
                                onPress={() => { 
                                    }}>
                                        <Image
                                            style={styles.avatarSmall}
                                            source={{uri:item.avatar}}
                                        />
                                </TouchableOpacity>
    
                                <View style = {styles.userNameView}>
                                    <TouchableOpacity 
                                        onPress={() => { 
                                        }}>
                                        <Text style = {styles.userNameText}>{item.firstName} {item.lastName}</Text>
                                    </TouchableOpacity>
                                        
                                    <Text style = {styles.userNameText}>{item.time} minutes ago</Text>
                                </View>
                            </View> 

                            <View style = {styles.feedCaption}>
                                <Text style = {styles.captionText}>{item.postCaption}</Text>
                            </View>

                            <View style = {styles.feedImage}>
                                <TouchableOpacity 
                                    onPress={() => { 
                                    }}>
                                    <Image
                                        style={styles.postImage}
                                        source={{uri:item.postImage}}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style = {styles.feedFooter}>
                                <TouchableOpacity>
                                    <Text style = {styles.feedFooterText}>React</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style = {styles.feedFooterText}>Comment</Text>
                                </TouchableOpacity> 

                                <TouchableOpacity>
                                    <Text style = {styles.feedFooterText}>Share</Text>
                                </TouchableOpacity>             
                            </View>
                        </View>
                    </View> 
                    )}
                />

            </View>

            <View style={styles.navigationArea}>
                <View>
                    <Text>NAVIGATION</Text>
                </View>
                
            </View>
            
        </SafeAreaView>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
      },
    searchBar: {
        flex: 1,
        padding: 5,
        flexDirection:'row'
    },
    postStatusBar: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#3D8C95',
    },
    feedArea: {
        flex: 11,
        backgroundColor: '#f2f8f8',
    },
    navigationArea: {
        flex: 1,
        backgroundColor: '#3D8C95',
    },
    inputContainer: {
        backgroundColor: '#f4f6f8',
        borderRadius: 30,
        //marginVertical: 10,
        flex: 7,
        marginBottom: 5
    },
    statusViewContainer: {
        backgroundColor: '#f4f6f8',
        //backgroundColor:'#ffe765',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 50,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        //marginBottom: 5
    },
    logoView: {
        marginTop: 5,
        marginLeft: 10,
        flex: 1
    },
    searchInput: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 15
    },
    statusText: {
        alignSelf: 'center',
        //color: '#b4b6b8',
        color: '#3D8C95',
        fontSize: 15
    },
    feedBorder:{
        backgroundColor: '#fffdfc',
        margin: 12,
        padding: 12,
        borderRadius: 10,
        shadowRadius: 10,
        shadowOpacity: 10,
        shadowColor: "black",
    },
    avatarSmall:{
        width: 50,
        height: 50,
        borderRadius: 150 / 2,
        overflow: "hidden",
    },
    feedList:{
        flex: 1,
        shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
        shadowOpacity: 0.12,
        shadowRadius: 60,
        elevation: 20,
    },
    feedHeader:{
        flexDirection: 'row',
        //borderColor: 'black',
        //borderWidth: 1
    },
    feedFooter:{
        flexDirection: 'row',
        alignContent:'space-around',
        justifyContent:'space-around',
        paddingTop: 12
    },
    feedFooterText:{
        color: '#3D8C95',
        fontSize: 15,
    },
    feedCaption:{
        borderColor: 'black',
        //borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 4
    },
    feedImage:{
        borderColor: 'black',
        //borderWidth: 1,
        //paddingTop: 1,
        //paddingLeft: 5
    },
    userNameView: {
        paddingLeft: 10,
        flexDirection: 'column'
        
    },
    userNameText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3D8C95'
    },
    captionText: {
        color: '#3D8C95',
        fontSize: 15
    },
    postImage:{
        flex: 1,
        width: deviceWidth * 0.9,
        height: deviceWidth * 0.6,
        overflow: "hidden",
        resizeMode: 'contain',
        borderRadius: 4
    },
    labelHeader:{
        paddingVertical: 10,
        paddingHorizontal: 12
    }
  });