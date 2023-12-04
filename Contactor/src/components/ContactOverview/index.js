import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Contact = ({ name, number }) => {
	const { navigate } = useNavigation();

	return (
		<View style={styles.contact}>
			<Text>{name}</Text>
			<Text>{number}</Text>
			<Text>Photo</Text>
			{/* <TouchableOpacity onPress={() => navigate("DetailedContacts")}>
				<Text>Move to detailed contacts</Text>
			</TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	contact: {
		backgroundColor: "pink",
		margin: 10,
	},
});

export default Contact;
