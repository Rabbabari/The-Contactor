import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const ContactDetail = ({
	name,
	phoneNumber,
	photo,
	editCurrentContact,
	deleteCurrentContact,
}) => {
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
			<TouchableOpacity
				style={styles.button}
				onPress={deleteCurrentContact}
			>
				<Text style={styles.buttonText}>Delete Contact</Text>
			</TouchableOpacity>
		</View>
	);
};

ContactDetail.propTypes = {
	name: PropTypes.string.isRequired,
	phoneNumber: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
	editCurrentContact: PropTypes.func.isRequired,
	deleteCurrentContact: PropTypes.func.isRequired,
};

export default ContactDetail;
