import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText(""); // Once the goal is entered, clear the text box
	};

	const cancelAddGoalAction = () => {
		props.onCancel();
	}

	return (
		<Modal
			visible={props.visible}
			animationType="fade"
		>
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require("../assets/goal.png")} />
				<TextInput
					style={styles.textInput}
					placeholder="Enter your goal"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				></TextInput>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={cancelAddGoalAction} color="#f31282"></Button>
					</View>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"></Button>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "column", // default is column as well.
		justifyContent: "center",
		alignItems: "center",
		padding: 18,
		backgroundColor: "#311b6b"
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		borderRadius: 6,
		backgroundColor: "#e4d0ff",
		width: "100%",
		padding: 16,
		color: "#120438"
	},
	buttonContainer: {
		flexDirection: "row", // so two buttons are next to each other
		marginTop: 8
	},
	button: {
		width: "30%",
		marginHorizontal: 8
	},
	image: {
		width: 100,
		height: 100,
		margin: 20
	}
});
