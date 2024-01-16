import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={{width: 200, height: 200}}
      />
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
