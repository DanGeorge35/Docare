import * as React from 'react';
import {View, useWindowDimensions, StyleSheet, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  NativeBaseProvider,
  HStack,
  Spacer,
  FormControl,
  Input,
  Box,
  Badge,
  CheckIcon,
  Center,
  Flex,
  WarningOutlineIcon,
  VStack,
  Select,
  Stack,
  Image,
  Icon,
  useToast,
  FlatList,
  Button,
  Pressable,
} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons ';

const Phone_view = ({onForgotPass, onSignUp, onLogin}) => {
  const [show, setShow] = React.useState(false);
  return (
    <FormControl
      w="100%"
      maxW="500"
      alignItems="left"
      mt="5"
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 40,
        elevation: 1,
        borderWidth: 2,
        borderColor: '#eee',
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}>
      <Box mb="2" mt="2">
        

        <Input
          type="text"
          size="lg"
          variant="outline"
          placeholder="Enter Phone Number"
          w="100%"
          style={styles.input}
          //    onChangeText={(val)=>setPhone(val)}
          onChangeText={() => {
            console.log('');
          }}
        />

        <FormControl.Label mt="5">Password</FormControl.Label>
        <Input
          type={show ? 'text' : 'password'}
          size="lg"
          variant="outline"
          style={styles.input}
          InputRightElement={
            <Pressable
              onPress={() => setShow(!show)}
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                style={{
                  width: 40,
                }}
                as={<FontAwesome5 name={show ? 'eye' : 'eye-slash'} />}
                size={5}
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Password"
        />

        {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errPhone}
          </FormControl.ErrorMessage> */}
          
      </Box>

      <Pressable pb="4" pt="3" mb="4" mt="2" onPress={onForgotPass}>
        <Text style={{textAlign: 'right', color: '#000', fontWeight: 'bold'}}>
          Forgot Password?
        </Text>
      </Pressable>

      <Box alignItems="center">
        <Button bg="#1C70EE" borderRadius="md" w="100%" p="4" onPress={onLogin}>
          Login
        </Button>
      </Box>

      <Pressable mt="8" onPress={onSignUp}>
        <Text style={{textAlign: 'center', color: '#000'}}>
          Don’t have an Account?{' '}
          <Text style={{fontWeight: 'bold'}}> Create now</Text>
        </Text>
      </Pressable>
    </FormControl>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 52,
    padding: 16,
  },
});

export default Phone_view;
