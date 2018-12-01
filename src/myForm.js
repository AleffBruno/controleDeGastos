import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { View, Button,StyleSheet, Text, TextInput, Switch, AsyncStorage  } from 'react-native';
import NumberFormat from 'react-number-format';
import FormatCurrency from 'react-format-currency';
import CurrencyInput from 'react-currency-input';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var repeatProps = [
    {label: 'Não Repetir', value: 0 },
    {label: 'Repetir', value: 1 }  
];

var fixParcel = [
    {label: 'Fixo', value: 0 },
    {label: 'Parcelado', value: 1 }  
];
 
export default class MyForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        currentDate:new Date().toISOString().slice(0,10),
        textDescription: '',
        money: '',
        amountParcel: '',
        showFixOrParcel:false,
        showAmountParcel:false
    }
    console.log({
        funcao:'construct MyForm',
        estado:this.state
    })
  }

  handleMoneyChange = amount => {
    this.setState({ money:amount })
  }

  submitForm = async () => {
    // if(this.state.showFixOrParcel === true) {

    // }
    try{
        var payload = [];
        const oldValues = await AsyncStorage.getItem('11-2018');
        if (oldValues !== null) {
            payload.push(JSON.parse(oldValues));
        } 
        payload.push({
            descricao:this.state.textDescription,
            valor:this.state.money,
            vencimento:this.state.currentDate
        })
    } catch(err) {

    }

    // var payload = {
    //     descricao:this.state.textDescription,
    //     valor:this.state.money,
    //     vencimento:this.state.currentDate
    // };

    // var payload = [
    //     {descricao:"luz",valor:"R$200,20",vencimento:this.state.currentDate},
    //     {descricao:"agua",valor:"R$100,00",vencimento:this.state.currentDate}
    // ];

    //var payload = '{"docs":[{"_id":"5b6b31eb31762700049b33df","title":"React Native","description":"A framework for building native apps with React.","url":"https://github.com/facebook/react-native","createdAt":"2018-08-08T18:09:47.706Z","__v":0},{"_id":"5b6b33ef31762700049b33e0","title":"ReactJS","description":"A declarative, efficient, and flexible JavaScript library for building user interfaces.","url":"https://github.com/facebook/react","createdAt":"2018-08-08T18:18:23.481Z","__v":0},{"_id":"5b6b344331762700049b33e1","title":"Nuclice","description":"An open IDE for web and native mobile development, built on top of Atom","url":"https://github.com/facebook/nuclide","createdAt":"2018-08-08T18:19:47.921Z","__v":0},{"_id":"5b6b345231762700049b33e2","title":"Relay","description":"Relay is a JavaScript framework for building data-driven React applications.","url":"https://github.com/facebook/relay","createdAt":"2018-08-08T18:20:02.073Z","__v":0},{"_id":"5b6b346931762700049b33e3","title":"create-react-app","description":"Create React apps with no build configuration.","url":"https://github.com/facebook/create-react-app","createdAt":"2018-08-08T18:20:25.374Z","__v":0},{"_id":"5b6b347931762700049b33e4","title":"flow","description":"Adds static typing to JavaScript to improve developer productivity and code quality.","url":"https://github.com/facebook/flow","createdAt":"2018-08-08T18:20:41.704Z","__v":0},{"_id":"5b6b348731762700049b33e5","title":"flipper","description":"A desktop debugging platform for mobile developers.","url":"https://github.com/facebook/flipper","createdAt":"2018-08-08T18:20:55.689Z","__v":0},{"_id":"5b6b349b31762700049b33e6","title":"Jest","description":"Delightful JavaScript Testing.","url":"https://github.com/facebook/jest","createdAt":"2018-08-08T18:21:15.191Z","__v":0},{"_id":"5b6b34a831762700049b33e7","title":"Metro","description":"The JavaScript bundler for React Native.","url":"https://github.com/facebook/metro","createdAt":"2018-08-08T18:21:28.595Z","__v":0},{"_id":"5b6b34bd31762700049b33e8","title":"watchman","description":"Watches files and records, or triggers actions, when they change.","url":"https://github.com/facebook/watchman","createdAt":"2018-08-08T18:21:49.787Z","__v":0}],"total":13,"limit":10,"page":1,"pages":2}'

    console.log({name:"submitForm Function",stringify:JSON.stringify(payload),payload:payload});
    try{
        await AsyncStorage.setItem('11-2018', JSON.stringify(payload));   
    } catch(error) {
        console.log(error)
    }

    // console.log(
    //     {
    //         descricao:this.state.textDescription,
    //         valor:this.state.money,
    //         vencimento:this.state.currentDate,
    //         repetir:this.state.showFixOrParcel,
    //         fixoOuParcelado:this.state.showAmountParcel,
    //         qtdParcela:this.state.amountParcel
    //     }
    // )
  }

  render(){
    return (
       <View style={{padding: 10}}>

            <Text>Descrição</Text>
            <TextInput
                style={styles.textInput}
                //placeholder="Descrição"
                onChangeText={(text) => this.setState({textDescription:text})}
            />

            <Text>Valor</Text>
            <NumberFormat 
                displayType={'text'} 
                value={this.state.money} 
                //thousandSeparator={false} 
                prefix={'R$'} 
                onValueChange={this.myChange}
                renderText={value => <TextInput 
                                        style={styles.textInput}
                                        onChangeText={(amount)=>{this.handleMoneyChange(amount)}} 
                                        keyboardType="numeric">{value}</TextInput>}
            />

            <Text>Vencimento</Text>
            <DatePicker
                style={{width: 200}}
                date={this.state.currentDate}
                mode="date"
                placeholder="Selecione a data"
                format="YYYY-MM-DD"
                //minDate="2016-05-01"
                //maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({currentDate: date})}}
            />

            <RadioForm
                radio_props={repeatProps}
                initial={0}
                onPress={(value) => {
                    if(value == 1){
                        //repeat
                        this.setState({showFixOrParcel:true})

                        this.setState({showAmountParcel:false})
                    }else{
                        //dont repeat
                        this.setState({showFixOrParcel:false})

                        this.setState({showAmountParcel:false})
                        
                    }
                }}
            />

            { 
                this.state.showFixOrParcel

                &&

                <RadioForm
                    radio_props={fixParcel}
                    initial={0}
                    onPress={(value) => {
                        if(value == 1){
                            this.setState({showAmountParcel:true})
                        }else{
                            this.setState({showAmountParcel:false})
                        }
                    }}
                />
            }

            {
                this.state.showAmountParcel 

                &&

                <View>
                    <Text>Quantas parcelas</Text>
                    <TextInput
                        style={styles.textInput}
                        //fazer javascript para tirar . e ,
                        keyboardType="numeric"
                        //placeholder="Descrição"
                        onChangeText={(text) => this.setState({amountParcel:text})}
                    />
                </View>
            }

            <Button
                onPress={this.submitForm}
                title="Salvar"
            />
            
        </View>
      )
    }
}

var styles = StyleSheet.create({
    textInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
});