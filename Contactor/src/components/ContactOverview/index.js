import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles";

const Contact = ({ id, name, number, photo }) => {
	const { navigate } = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.contactButton}
				onPress={() =>
					navigate("DetailedContacts", {
						uuid: id,
						name: name,
						number: number,
						photo: photo,
					})
				}
			>
				{/* need to send uuid to DetailedContacts to display details about a specific contact */}
				<Image
					alt="A contact image"
					source={{ uri: photo }}
					style={styles.image}
				/>
				<Text style={styles.name}>{name}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Contact;
