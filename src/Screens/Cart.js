import React from 'react';
import { View, Text, Button } from 'react-native';

function Cart({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart Screen</Text>
      <Button
        title="Go to My Profile"
        onPress={() => navigation.navigate('MyProfile')}
      />
    </View>
  );
}

export default Cart;
