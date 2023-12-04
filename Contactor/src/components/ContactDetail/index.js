import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const ContactDetail = ({ editContact }) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: "https://photutorial.com/wp-content/uploads/2022/03/Selfies-statistics-thumbnail.png",
					}}
					style={styles.image}
				/>
			</View>
			<Text style={styles.name}>Jane Doe</Text>
			<Text style={styles.number}>+123 456 7890</Text>

			<TouchableOpacity
				style={styles.button}
				onPress={() => editContact()}
			>
				<Text style={styles.buttonText}>Edit Contact</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ContactDetail;
