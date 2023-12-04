import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Contact = ({}) => {
	const { navigate } = useNavigation();

	return (
		<View style={styles.contact}>
			<Text>
				This should be the contact info on the main Contact page
			</Text>
			<Text>Name</Text>
			<Text>Number</Text>
			<Text>Photo</Text>
			<TouchableOpacity onPress={() => navigate("DetailedContacts")}>
				<Text>Move to detailed contacts</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	contact: {
		backgroundColor: "pink",
	},
});

export default Contact;
