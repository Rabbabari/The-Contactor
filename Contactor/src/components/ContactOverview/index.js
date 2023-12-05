import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import noProfileImage from "../../resources/noProfileImage.png";
import styles from "./styles";

const Contact = ({ name, phoneNumber, photo }) => {
	// Checking if the photo is empty or not, if empty then use the noProfileImage
	let image = "";
	if (photo === "") {
		image = noProfileImage;
		console.log("Profile image ", noProfileImage);
	} else {
		image = { uri: photo };
	}
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() =>
					navigate("DetailedContacts", {
						name: name,
						phoneNumber: phoneNumber,
						photo: image,
					})
				}
				style={styles.imageContainer}
			>
				<Image source={image} style={styles.image} />
				<Text style={styles.name}>{name}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Contact;
