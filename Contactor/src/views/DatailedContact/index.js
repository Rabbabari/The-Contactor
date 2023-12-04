import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Main = ({ navigation: { navigate } }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text>detailed contacts</Text>
		</View>
	);
};

export default Main;
