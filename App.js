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

export default class App extends Component {

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

    //console.log("chamou aqui");

    // a.push(<TouchableOpacity
    //   key="a" 
    //   style={styles.button}
    //   onPress={ () => {console.log("a")} }
    //   >
  
    //     <View style={{flexDirection: "row"}}>
    //       <Text style={{flex:2}}>Nome</Text>
    //       <Text>Valor</Text>
    //     </View>
    //     <Text>00-00-0000</Text>
  
    //   </TouchableOpacity>);
      

    // this.setState({productList : a });

    

    this.setState({productList : <TouchableOpacity 
      key="a"
      style={styles.button}
      onPress={ () => {console.log("a")} }
    >

      <View style={{flexDirection: "row"}}>
        <Text style={{flex:2}}>Nome</Text>
        <Text>Valor</Text>
      </View>
      <Text>00-00-0000</Text>

    </TouchableOpacity>});

    //console.log(this.state.productList)
  }

  render() {

    return (
      <View>
        <Text style={styles.welcome}>Controle de Contas</Text>

        <View style={styles.menuBar}>

          <Text style={{flex:2}}>
            Controle de Contas
          </Text>

          <Button
            onPress={this.pushElementsOnProductList}
            title="+"
            //color="#841584"
          />
          <Button
            onPress={() => {console.log("button ...")}}
            title="..."
            //color="#841584"
          />

        </View>

        <Calendar
          onMonthChange = {(algo) => {console.log(algo)}} 
          markedDates={this.state.markedDatesConfig}
        />

        {/* <TouchableOpacity 
          style={styles.button}
          onPress={ () => {console.log("a")} }
        >

          <View style={{flexDirection: "row"}}>
            <Text style={{flex:2}}>Nome</Text>
            <Text>Valor</Text>
          </View>
          <Text>00-00-0000</Text>

        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={ () => {console.log("a")} }
        >

          <View style={{flexDirection: "row"}}>
            <Text style={{flex:2}}>Nome</Text>
            <Text>Valor</Text>
          </View>
          <Text>00-00-0000</Text>

        </TouchableOpacity> */}

        {this.state.productList}
       
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  myCalendar: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 350
  },
  button: {
    //borderWidth: 1,
    //borderColor: 'gray',
  },
  menuBar: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: 'gray',
    
    //justifyContent: 'flex-end'
    //alignItems: 'stretch'
  },
  buttonContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'flex-end',
    //alignItems: 'center',
    //justifyContent: "center",
    //flexDirection: "row",
  },
  titleContainer: {

  }
});
