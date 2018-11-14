import React from 'react';
import { View, Button, Text } from 'react-native';

const Page1 = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home ;D</Text>
    <Button 
      title="Ir para About"
      onPress={() => navigation.navigate('About') }
      //onPress={() => {}}
    />
  </View>
);

Page1.navigationOptions = {
  title: 'Home',
}

export default Page1;

// import React, {Component} from 'react';
// import { Button } from 'react-native';

// class HomeScreen extends Component {
//     static navigationOptions = {
//       title: 'Welcome 2',
//     };
//     render() {
//       const { navigate } = this.props.navigation;
//       return (
//         <Button
//           title="Go to Jane's profile"
//           onPress={() => {console.log("aaa")}}
//         />
//       );
//     }
//   }

//   export default HomeScreen;