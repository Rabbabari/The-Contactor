import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Main = ({ navigation: { navigate } }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text>Contact page</Text>
			<TouchableOpacity onPress={() => navigate("DetailedContacts")}>
				<Text>Nagivate to details</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Main;
