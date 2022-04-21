import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export default class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = this.props;
		const { value } = this.state;

		return (
			<View>
				{PROP.map(res => {
					return (
						<View  key={res.key} style={styles.container}>
							
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
							<Text style={styles.radioText}>{res.text}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin:10,
        marginBottom: 10,
        flexDirection: 'row',
		backgroundColor:'white',
		height:'15%',
		padding:20,
		alignItems:'center',
	},
    radioText: {
        marginLeft: 10,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});