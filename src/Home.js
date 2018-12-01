import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button,AsyncStorage,FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.']
};

LocaleConfig.defaultLocale = 'fr';

const test = {
  '2018-11-16': {selected: true, marked: true, selectedColor: 'blue'},
  '2018-11-17': {marked: true},
  '2018-11-18': {marked: true, dotColor: 'red', activeOpacity: 0},
  '2018-11-19': {disabled: true, disableTouchEvent: true}
};

export default class Home extends Component {

  static navigationOptions = {
    title : "Controle de Contas"
  }

  constructor(props){
    super(props);
    this.state = {
        currentDateKey:new Date().getFullYear()+'-'+(new Date().getMonth()+1),
        billList:JSON.parse('[{"descricao":"jose"},{"descricao":"ze"}]'),
        //billListData:''
    }
    console.log({
        funcao:'construct Home',
        estado:this.state
    })

    this._retrieveData()
  }

  state = {
    markedDatesConfig : {},
    productList: [],
    billList:''
  }

  customizeMarkedDates = () => {
    this.setState({markedDatesConfig:{
      '2018-11-16': {selected: true, marked: true, selectedColor: 'blue'},
      '2018-11-17': {marked: true},
      '2018-11-18': {marked: true, dotColor: 'red', activeOpacity: 0},
      '2018-11-19': {disabled: true, disableTouchEvent: true}
    }})
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('11-2018');
      //const value = '{"nome":"jose"}';

      if (value !== null) {
        //debugger;
        var valueParse = JSON.parse(value);

        //const { docs } = valueParse;

        this.setState({billList:valueParse});

        // valueParse.forEach(function(entry) {
        //   console.log(entry.descricao);
        // });

        console.log(valueParse);
        console.log("_retrieveData function")
      } else {
        console.log("tem nada no asyncStorage")
      }
     } catch (error) {
       //error
     }
  }

  render() {
    const { navigate } = this.props.navigation;
    //debugger;
    buildBillList = this.state.billList.map(function (item) {
      return (
        // <View key={item.descricao}>
        //   <Text>{item.descricao}</Text>
        // </View>
        <Text key={item.descricao}>{item.descricao}</Text>
      );
    });
    
    
    return (
      <View>
  
        <View style={styles.menuBar}>

          <Text style={{flex:2}}>
            Controle de Contas
          </Text>

          <Button
            onPress={() => navigate('CreateTask')}
            title="+"
          />
          <Button
            onPress={this._retrieveData}
            title="..."
          />

        </View>

        <Calendar
          onMonthChange = {(algo) => {console.log(algo)}} 
          markedDates={this.state.markedDatesConfig}
        />

        {buildBillList}
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  menuBar: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: 'gray',
  },
});
