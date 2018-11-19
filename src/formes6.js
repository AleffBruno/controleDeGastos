// index.ios.js

'use strict';

import React, {Component} from 'react';
import { form, struct, String, maybe, Number, Boolean, Date } from "tcomb-form-native";
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

var Form = form.Form;

// here we are: define your domain model
var Bill = struct({
  descrição: String,              // a required string
  valor: String,              // a required string
  birthDate: Date,
  surname: maybe(String),  // an optional string
  age: Number,               // a required number
  rememberMe: Boolean        // a boolean
});

//var options = {}; // optional rendering options (see documentation)
var options = {
    fields: {
      birthDate: {
        mode: 'date', // display the Date field as a DatePickerAndroid,

      }
    }
  };

class Formes6 extends Component {

  onPress = () => {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Bill}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }

};

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default Formes6;