import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from '../../Components/RadioButton';

const PROP = [
	{
		key: 'private',
		text: 'Private',
	},
	{
		key: 'public',
		text: 'Public',
	},
];


export default class AccountPrivacy extends Component {
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