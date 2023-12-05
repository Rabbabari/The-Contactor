import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const ContactDetail = ({
	name,
	phoneNumber,
	photo,
	fileName,
	editCurrentContact,
	deleteCurrentContact,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={photo} style={styles.image} />
			</View>
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.number}>{phoneNumber}</Text>

			<TouchableOpacity
				style={styles.button}
				onPress={editCurrentContact}
			>
				<Text style={styles.buttonText}>Edit Contact</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={deleteCurrentContact}
			>
				<Text style={styles.buttonText}>Delete Contact</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ContactDetail;
