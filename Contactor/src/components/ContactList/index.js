import React from "react";
import { View, Text } from "react-native";
import Contact from "../ContactOverview";

const ContactList = ({}) => {
	return (
		<View>
			<Text>The list of all contacts</Text>
			<Contact />
		</View>
	);
};

export default ContactList;
