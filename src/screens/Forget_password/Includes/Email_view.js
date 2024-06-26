import * as React from 'react';
import {View, useWindowDimensions, StyleSheet, Text} from 'react-native';
import {FormControl, Input, Box, Button, Pressable} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons ';

const Email_view = ({onGetTop, onSignUp}) => {
  const [show, setShow] = React.useState(false);
  return (
    <FormControl w="100%" maxW="500" alignItems="left" mt="5">
      <Box mb="2" mt="3">
        <Input
          type="text"
          size="md"
          variant="outline"
          placeholder="Enter Email Address"
          minWidth="300"
          w="100%"
          style={styles.input}
          //    onChangeText={(val)=>setPhone(val)}
          onChangeText={() => {
            console.log('');
          }}
        />
      </Box>

      <Pressable mt="8">
        <Text style={{textAlign: 'center', color: '#000'}}>
          You will receive an email of your verification code
        </Text>
      </Pressable>

      <Box alignItems="center">
        <Button
          bg="#1C70EE"
          mt="90"
          borderRadius="md"
          w="300"
          onPress={onGetTop}>
          Get Code
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

export default Email_view;
