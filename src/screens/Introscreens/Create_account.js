/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
 
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  VStack,
  Stack,
  Text,
  useToast,
  FlatList,Image,
  Button,
  Pressable,
  Box,
} from 'native-base';
import axios from 'axios';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Create_account_name from './includes/Create_account_name';

import Create_account_password from './includes/Create_account_password';

import Create_account_contacts from './includes/Create_account_contacts';

import {successMsg, errorMsg} from '../../constant';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#1C70EE', height: 4}}
    style={styles.tab_view}
    // labelStyle={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }} F4F7FA

    indicatorContainerStyle={{
      fontSize: 34,
      color: 'blue',
      backgroundColor: '#F4F7FA',
      display: 'none',
    }}
    activeColor="#1C70EE"
    inactiveColor="#000000"
    tabStyle={{paddingVertical: 10, paddingHorizontal: 20, color: '#000'}}
    renderLabel={({route, focused, color}) => (
      <Text style={{color, margin: 8}}>{route.title}</Text>
    )}
  />
);

const moveNextTab = () => {
  console.log('helloo');
};

import {useConfig} from '../../context/config.context';

const Create_account = ({navigation}) => {
  const {BASE_URL} = useConfig();
  const layout = useWindowDimensions();
  const toast = useToast();
  const [isLoading, setisLoading] = React.useState(false);
  const [index, setIndex] = React.useState(0);

 

  const [routes] = React.useState([
    {key: 'name', title: 'NAME'},
    {key: 'contact', title: 'CONTACT'},
    {key: 'password', title: 'AUTH'},
  ]);

  const [formData, setFormData] = React.useState({
    name: {
      fname: '',
      lname: '',
    },
    contact: {
      email: '',
      phone_no: '',
    },
    password: {
      password: '',
      cpassword: '',
    },
  });

  const handleInputChange = (screenKey, inputKey, value) => {
    setFormData(prevData => ({
      ...prevData,
      [screenKey]: {
        ...prevData[screenKey],
        [inputKey]: value,
      },
    }));
  };

  const handleSendData = () => {
    // Aggregate data
    const aggregatedData = {...formData};

    console.log(aggregatedData);

    const objData = {
      FirstName: aggregatedData.name.fname,
      LastName: aggregatedData.name.lname,
      Email: aggregatedData.contact.email,
      // Phone_no: aggregatedData.contact.phone_no,
      Password: aggregatedData.password.password,
    };

    //console.log(objData)
    // {"Phone_no": "07063730332", "email": "showtechitconcept@gmail.com", "fname": "Shomorin ", "lname": "Muizz", "password": "aaaa"}
    //

    const config = {
      method: 'post',
      url: `${BASE_URL}/patients/`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: objData,
    };

    axios(config)
      .then(response => {
        console.log('Response:', response.data);

        successMsg(toast,'Successful');
        navigation.navigate('Login_screen');
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

 

  const renderScene = ({route}) => {
    // const [index, setIndex] = useState(0);
    switch (route.key) {
      case 'name':
        return (
          <Create_account_name
            onNext={() => setIndex(1)}
            formData={formData.name}
            onInputChange={(inputKey, value) =>
              handleInputChange('name', inputKey, value)
            }
          />
        );
      case 'contact':
        return (
          <Create_account_contacts
            onNext={() => setIndex(2)}
            formData={formData.contact}
            onInputChange={(inputKey, value) =>
              handleInputChange('contact', inputKey, value)
            }
          />
        );
      case 'password':
        return (
          <Create_account_password
            onNext={handleSendData}
            // isLoading
            //onNext={() => console.log("Hello")}
            formData={formData.password}
            onInputChange={(inputKey, value) =>
              handleInputChange('password', inputKey, value)
            }
          />
        );
      default:
        return null;
    }
  };

  //{"contact": {"email": "Ff", "phone_no": "Ccc"}, "name": {"fname": "Fff", "lname": "Xc"}, "password": {"cpassword": "Fcf", "password": "Ddf"}}

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <View style={styles.inputContainer}>
          <TabView
            navigationState={{index, routes}}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            swipeEnabled={false}
            initialLayout={{width: '100%'}}
          />

        <Stack position="absolute"  alignItems="center" left="0" right="0" bottom="-10"> 
           <Image
                source={require('../../../assets/doctorsteam2.png')} // Specify the image source
                style={{height: 200}} // Apply styles to the image
                resizeMode="contain" // Set resizeMode to control how the image should be resized
                alt="logo"
                width="600"
              />
          </Stack>

         

        </View>
        
      </ScrollView>
     
    </KeyboardAvoidingView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
    minHeight: '100%',
  },
  input: {
    height: 52,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  },

  DocareText: {
    fontSize: 40,
    // fontWeight:'bold',
    color: '#1C70EE',
    lineHeight: 48.84,
    fontFamily: 'HelveticaNeueBold',
    //width:156,
    //height:49,
    marginTop: 60,
    // marginLeft:110
  },

  tab_view: {
    display: 'none',
    width: '100%',
    height: 50,
    backgroundColor: '#1C70EE',
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  form_view: {
    width: 335,
    height: 291,
    marginTop: 45,
  },

  lang_view: {
    width: 331,
    height: 27,
    marginTop: 30,
    marginLeft: 14,
    color: '#000000',
  },

  logo: {
    height: 80,
    width: 80,
    marginBottom: 50,
    alignSelf: 'center',
  },

  lang_text: {
    width: 245,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 27,
    fontFamily: 'General Sans',
  },

  get_start_btn: {
    width: 327,
    height: 52,
    marginTop: 0,
    //color:"red",
    // backgroundColor:"1C70EE",

    borderRadius: 12,
    padding: 16,
  },
});

export default Create_account;
