// create a hello world app
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontSize:25 }}>Hello World</Text>
  </View>
  );
};
export default App;
