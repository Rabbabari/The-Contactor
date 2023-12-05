import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const ContactDetail = ({ name, phoneNumber, photo, editCurrentContact }) => {
	console.log(name, phoneNumber, photo);
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: photo }} style={styles.image} />
			</View>
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.number}>{phoneNumber}</Text>

			<TouchableOpacity
				style={styles.button}
				onPress={editCurrentContact}
			>
				<Text style={styles.buttonText}>Edit Contact</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ContactDetail;
