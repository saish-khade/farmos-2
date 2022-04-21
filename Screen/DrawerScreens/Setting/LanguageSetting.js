import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from '../../Components/RadioButton';

const PROP = [
	{
		key: 'english',
		text: 'English',
	},
	{
		key: 'hindi',
		text: 'Hindi',
	},
	{
		key: 'marathi',
		text: 'Marathi',
	},
];


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RadioButton PROP={PROP} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
});