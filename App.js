import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {

	const [courseGoals, setCourseGoals] = useState([]);

	const [modalIsVisible, setModalIsVisible] = useState(false);

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	}

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	}

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currGoals) => [
			...currGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);

		endAddGoalHandler();
	};

	function deleteGoalHandler(id) {
		console.log(`Deleting the goal with id: ${id}`);

		setCourseGoals(currentCourseGoals => {
			return currentCourseGoals.filter(goal => goal.id !== id);
		})
	}

	return (
		<View style={styles.appContainer}>
			<Button
				title="Add New Goal"
				color="#5e0acc"
				onPress={startAddGoalHandler}
			/>
			<GoalInput
				onAddGoal={addGoalHandler}
				visible={modalIsVisible}
				onCancel={endAddGoalHandler}
			/>
			<View style={styles.goalsContainer}>
				<FlatList
					alwaysBounceVertical={false}
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								onDeleteItem={deleteGoalHandler}
								id={itemData.item.id}
							/>
						);
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
				/>
				{/* <ScrollView alwaysBounceVertical={false}>
					{courseGoals.map((goal) => (
						<View style={styles.goalItemView} key={goal}>
							<Text style={styles.goalItemText}>{goal}</Text>
						</View>
					))}
				</ScrollView> */}
			</View>
			{/* <View style={styles.goalsContainer}>
				{courseGoals.map((goal) => (
					<View style={styles.goalItemView} key={goal}>
						<Text style={styles.goalItemText}>{goal}</Text>
					</View>
				))}
			</View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
		backgroundColor: "#1e085a"
	},
	goalsContainer: {
		flex: 7,
	},
});
