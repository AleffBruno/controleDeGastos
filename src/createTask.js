
import React, {Component} from 'react';
import { View, Button, Text, TextInput, AsyncStorage } from 'react-native';

export default class CreateTask extends Component {
    static navigationOptions = {
        title: 'CreateTask'
    }

    _storeData = async () => {
        try {
          await AsyncStorage.setItem('teste', 'Hellow World !');
        } catch (error) {
          // Error saving data
        }
    }
      

    render() {
        //descrição
        //valor
        //vencimento
        // nao repetir / repetir
        //fixo / parcelado
        //quantas x
        //salvar
        return (
            //<Text>Name : {this.props.navigation.state.params.name}</Text>
            <View>
                <Button
                    onPress={this._storeData}
                    title="ST0RE DATA"
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => {console.log(text)}}
                />
            </View>
        )
    }
}
