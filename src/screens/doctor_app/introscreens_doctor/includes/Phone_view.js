import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,
    VStack,Select,Stack,Image,Icon,Text,
    useToast,FlatList,
     Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons ';



const Phone_view = ({onForgotPass,onSignUp,onLogin}) => {
    const [show, setShow] = React.useState(false);
    return (
      
      <FormControl w="100%" maxW="500"  alignItems="left" mt="5">
  
      <Box  mb="2" mt="2">
          {/* <FormControl.Label >Phone Number</FormControl.Label> */}
  
            <Input type="text"  
            placeholderTextColor="#000000"
             size="md"  variant="outline" placeholder="Enter Phone Number" minWidth="300" w="100%"
             
          //    onChangeText={(val)=>setPhone(val)}
             onChangeText={()=>{console.log("")}}
             />
  
  {/* <FormControl.Label >Password</FormControl.Label> */}
  <Input w={{
        base: "100%",
        md: "25%"
      }} type={show ? "text" : "password"}
      size="md"
      placeholderTextColor="#000000"
      mt="5"
      variant="outline"
      InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<FontAwesome5 name={show ? "eye" : "eye-slash"} />} size={5} mr="5" color="muted.400" />
            </Pressable>} placeholder="Password" />
              
          {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errPhone}
          </FormControl.ErrorMessage> */}
  
        </Box>
  
          <Pressable mb="8" onPress={onForgotPass} >
              <Text textAlign="right" color="#000" fontWeight="bold"   >Forgot Password?</Text>
          </Pressable>
  
          <Box alignItems="center">
              <Button bg="#1C70EE"  borderRadius="md" w="300" onPress={onLogin}>Login</Button>
       </Box>
  
       <Pressable mt="8" onPress={onSignUp} >
              <Text textAlign="center" color="#000000"  >Don’t have an Account? <Text fontWeight="bold" color="#1C70EE"> Create now</Text></Text>
          </Pressable>
  
  
      </FormControl>
  
    )
  }
  
  
  const styles = StyleSheet.create({
  
      get_start_btn:{
          width:300,
          height:52,
           marginTop:0,
           //color:"red",
           backgroundColor:"#1C70EE",
          
          borderRadius:12,
          padding: 16,
      },
  
  });
  
export default Phone_view