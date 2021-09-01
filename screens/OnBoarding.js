import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import LinearGradient from 'react-native-linear-gradient'

const OnBoarding = ({navigation}) => {
    return (
    
      
        <ScrollView>
            {/* <LinearGradient start={{
                x:0,y:0
            }} end={{x:0,y:0}} colors={[]} > */}
        <View style={styles.container}>
            <Text style={{
                marginTop:"5%",
                color:"blue",
                fontSize:20,
                textAlign:'center',
                fontWeight:"bold"
            }}>REGISTER</Text>
            <View style={styles.formContainer}>
            <TextInput placeholder="Shop Owner Name" style={styles.inputs}  />
            {/* <TextInput placeholder="Shop Name" style={styles.inputs} /> */}
            {/* <TextInput placeholder="Shop Address" style={styles.inputs} /> */}
            {/* <TextInput placeholder="Pincode" style={styles.inputs} /> */}
            <TextInput placeholder="Date Of Birth" style={styles.inputs} />
            <TextInput placeholder="Mobile Number" style={styles.inputs} />
            <TextInput placeholder="Email Id" style={styles.inputs} textContentType="emailAddress"
             />
            {/* <TextInput placeholder="Gst IN" style={styles.inputs} /> */}
            {/* <View style={styles.rows}>
                <Text style={styles.texts}>
                Shop Photo
                </Text>
                <Ionicons name="camera" size={32} color="blue" />
                
            </View>
            <View style={styles.rows}>
                <Text style={styles.texts}>
                Shop Owner Photo
                </Text>
                <Ionicons name="camera" size={32} color="blue" />
                

                
            </View>
 */}

           {/* <View style={styles.button} ><Button title="Register" color="darkblue" onPress={()=>navigation.navigate('demo')} /></View>

            </View> */}
            </View>
            <TouchableOpacity style={styles.button}>
           <Text style={{color:"white"}}>REGISTER</Text>
           </TouchableOpacity>
        </View>
        
        {/* </LinearGradient> */}
        
                </ScrollView>
                
                 
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    // main:{
    //  backgroundColor:"blue"

    // },
    container:{
        marginTop:"40%",
        marginHorizontal:10,
        shadowColor:"red",

        elevation:5,
        borderRadius:15,
        marginBottom:"10%",
        zIndex:1

    },
    formContainer:{
        marginVertical:20

    },
    inputs:{
        width:"90%",
        marginHorizontal:"5%",
        borderBottomColor:"blue",
        height:40,
        margin:12,
        borderBottomWidth:2,
        padding:10,
        color:"black"        
    },
    button:{
        alignItems:'center',
        backgroundColor:"#1a53ff",
        padding:10,
         marginTop:30,
         marginHorizontal:20,
         // color:"#1a53ff",
         borderRadius:30,
         
         
     },
   
    rows:{
        flexDirection:"row",
        marginHorizontal:20,
        justifyContent:'space-between'
    },
    texts:{
        fontSize:20,
        
    }

})
