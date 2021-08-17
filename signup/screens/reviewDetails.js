import React from 'react';
import {View, Text, Button} from 'react-native';
import { Component } from 'react';

function ReviewDetails({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Home')

  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>login sucessfully</Text>
      <Button title="back to home screen" onPress={pressHandler}/>

    </View>
  );
}
export default ReviewDetails;
