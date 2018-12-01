import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { View, Button,StyleSheet, Text, TextInput, Switch } from 'react-native';
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
    super(props)
    this.state = {currentDate:new Date().toISOString().slice(0,10)}
    this.state = {textDescription: ''}
    this.state = {money: ''}
    this.state = {amountParcel: ''}
    this.state = {showFixOrParcel:false}
    this.state = {showAmountParcel:false}   
    //this.state = {fixParcelState:0} 
    console.log(
        {
            function:"construct",
            data:this.state.currentDate,
            moment:this.state.showFixOrParcel
        }
    )

  }

//   componentDidMount() {
//     this.state = {currentDate:""+new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDate()}
//     this.state = {showAmountParcel:false} 
//   }

  handleChange = amount => {
    this.setState({ money:amount })
    console.log("chamou"+amount)
  }

  myChange = values => {
    const {formattedValue, value} = values;
    this.setState({money:formattedValue})
    console.log(this.state.money)
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
                                    onChangeText={(amount)=>{this.handleChange(amount)}} 
                                    keyboardType="numeric">{value}</TextInput>}
            />
 
            <Text>Vencimento</Text>
            <DatePicker
                style={{width: 200}}
                date={this.state.currentDate}
                mode="date"
                placeholder="select date"
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
                        //placeholder="Descrição"
                        onChangeText={(text) => this.setState({amountParcel:text})}
                    />
                </View>
            }
            

            <Button
            onPress={() => { console.log(
                {
                    descricao:this.state.textDescription,
                    valor:this.state.money,
                    vencimento:this.state.currentDate,
                    repetir:this.state.showFixOrParcel,
                    fixoOuParcelado:this.state.showAmountParcel,
                    qtdParcela:this.state.amountParcel
                }
            )}}
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