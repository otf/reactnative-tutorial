import React, {useState} from 'react';
import {Button, Text, TextInput, View, Image} from 'react-native';

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you'}
        />
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
    <>
      <Text>Welcome!</Text>
      <Cat name="Maru"/>
      <Cat name="Jellylorum"/>
      <Cat name="Spot"/>
    </>
  );
};

export default Cafe;
