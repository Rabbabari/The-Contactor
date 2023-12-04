import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import Contact from "../../components/ContactOverview";

const DetailedContacts = ({ navigation: { navigate } }) => {
	const navigation = useNavigation();
	const route = useRoute();
	// const uuid = route.params?.uuid;

	return (
		<View>
			<Text>detailed contacts</Text>
		</View>
	);
};

export default DetailedContacts;
