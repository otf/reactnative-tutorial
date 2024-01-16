import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat name="Maru"/>
      <Cat name="Jellylorum"/>
      <Cat name="Spot"/>
    </View>
  );
};

export default Cafe;
