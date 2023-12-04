import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ContactDetail = ({ editContact }) => {
	return (
		<View>
			<Text>The detailed view for a single contact</Text>
			<Text>Name</Text>
			<Text>Number</Text>
			<Text>Image</Text>
			<TouchableOpacity onPress={() => editContact()}>
				<Text>Button to edit a contact</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ContactDetail;
