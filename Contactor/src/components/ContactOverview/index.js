import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import defaultProfileImage from "../../resources/noProfileImage.png";
import styles from "./styles";

const Contact = ({ name, phoneNumber, photo }) => {
	const { navigate } = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() =>
					navigate("DetailedContacts", {
						name: name,
						number: phoneNumber,
						photo: photo,
					})
				}
				style={styles.imageContainer}
			>
				<Image source={{ uri: photo }} style={styles.image} />
				<Text style={styles.name}>{name}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Contact;
