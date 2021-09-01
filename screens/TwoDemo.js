import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import  Icon from 'react-native-vector-icons/AntDesign'
import { Input } from 'react-native-elements/dist/input/Input'


const nameadd="<Icon name='user' size={20} color='blue' />"

const TwoDemo = () => {
    return (
    
      
        <ScrollView>
            {/* <LinearGradient start={{
                x:0,y:0
            }} end={{x:0,y:0}} colors={[]} > */}
        <View style={styles.container}>
            <Text style={{
                marginTop:"5%",
                color:"#1a53ff",
                fontSize:20,
                textAlign:'center',
                fontWeight:"bold"
            }}>REGISTER</Text>
            <View style={styles.formContainer}>
            <TextInput left={<TextInput.Icon name={()=><Icon name='user' size={20} color='#3366ff' style={{
                marginTop:10
            }} />} />} label="Shop Owner Name" style={styles.inputs} mode="outlined" />
            {/* <Icon name="user" size={20} color='blue' /> */}
            {/* <TextInput label="Shop Name" style={styles.inputs} /> */}
            {/* <TextInput label="Shop Address" style={styles.inputs} /> */}
            {/* <TextInput label="Pincode" style={styles.inputs} /> */}
            <TextInput left={<TextInput.Icon name={()=><Icon name='calendar' size={20} color='#3366ff' style={{
                marginTop:10
            }} />} />} label="Date Of Birth" mode="outlined" style={styles.inputs} />
            <TextInput left={<TextInput.Icon name={()=><Icon name='mobile1' size={20} color='#3366ff' style={{
                marginTop:10
            }} />} />} label="Mobile Number" mode="outlined" style={styles.inputs} />
            <TextInput left={<TextInput.Icon name={()=><Icon name='mail' size={20} color='#3366ff'
            style={{
                marginTop:10
            }} />} />} label="Email Id" mode="outlined" style={styles.inputs} 
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

           {/* <View style={styles.button} ><Button title="Register" color="#1a53ff"  /></View> */}
           <TouchableOpacity style={styles.button}>
           <Text style={{color:"white"}}>REGISTER</Text>
           </TouchableOpacity>

            </View>
        </View>
        
        {/* </LinearGradient> */}
        
                </ScrollView>
                
                 
    )
}

export default TwoDemo

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
    

    },
    formContainer:{
        marginVertical:20

    },
    inputs:{
        width:"90%",
        marginHorizontal:"5%",
        height:40,
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
