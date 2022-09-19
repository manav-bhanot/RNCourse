import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {

	return (
		<View style={styles.goalItemView}>
			<Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
				<Text style={styles.goalItemText}>{props.text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItemView: {
		margin: 8,
    padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressedItem: {
		opacity: 0.5
	},
	goalItemText: {
		color: "white",
	},
});
