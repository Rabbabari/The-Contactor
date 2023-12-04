import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ContactDetail from "../../components/ContactDetail";

const DetailedContacts = ({}) => {
	const navigation = useNavigation();
	const route = useRoute();
	// const uuid = route.params?.uuid;

	const editContact = () => {
		// A function to edit a contact
		console.log("Edit a contact");
	};

	return (
		<View style={{ flex: 1 }}>
			<ContactDetail editContact={editContact} />
		</View>
	);
};

export default DetailedContacts;
