import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItems = (props) => {
	return (
	<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
		<View style={styles.listItems}>
			<Text>{props.title}</Text>
		</View>
	</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItems: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: 'gray',
		borderColor: 'black',
		borderWidth: 1
	}
});

export default GoalItems;