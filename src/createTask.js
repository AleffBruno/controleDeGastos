
import React, {Component} from 'react';
import { View, Button, Text, TextInput } from 'react-native';

export default class CreateTask extends Component {
    static navigationOptions = {
        title: 'CreateTask'
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
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => {console.log(text)}}
                />
            </View>
        )
    }
}
