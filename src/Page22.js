
import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';

export default class Page22 extends Component {
    static navigationOptions = {
        title: 'Page22'
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Name : {this.props.navigation.state.params.name}</Text>
            </View>
        )
    }
}

// const Page22 = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>About</Text>
//   </View>
// );

// Page2.navigationOptions = {
//   title: 'About',
// }


// export default Page2;