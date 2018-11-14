import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
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

  state = {
    markedDatesConfig : {},
    productList: []
  }

  customizeMarkedDates = () => {
    this.setState({markedDatesConfig:{
      '2018-11-16': {selected: true, marked: true, selectedColor: 'blue'},
      '2018-11-17': {marked: true},
      '2018-11-18': {marked: true, dotColor: 'red', activeOpacity: 0},
      '2018-11-19': {disabled: true, disableTouchEvent: true}
    }})
  }


  pushElementsOnProductList = () => {

  }

  static navigationOptions = {
      title : "Controle de Contas"
  }

  render() {
    const { navigate } = this.props.navigation;
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
            onPress={() => {console.log("button ...")}}
            title="..."
          />

        </View>

        <Calendar
          onMonthChange = {(algo) => {console.log(algo)}} 
          markedDates={this.state.markedDatesConfig}
        />

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
