import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import ContactList from "../../components/ContactList";

const Contacts = ({ navigation: { navigate } }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<ContactList></ContactList>
		</View>
	);
};

export default Contacts;
