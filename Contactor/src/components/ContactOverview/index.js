import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Contact = ({ name, phoneNumber, photo, fileName, callNumber }) => {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() =>
					navigate("DetailedContacts", {
						user: {
							name: name,
							phoneNumber: phoneNumber,
							photo: photo,
							fileName: fileName,
						},
					})
				}
				style={styles.imageContainer}
			>
				<Image source={{ uri: photo }} style={styles.image} />
				<Text style={styles.name}>{name}</Text>
				<Ionicons
					style={styles.call}
					name="call-outline"
					size={30}
					color="black"
					onPress={() => callNumber(phoneNumber)}
				/>
			</TouchableOpacity>
		</View>
	);
};

Contact.propTypes = {
	name: PropTypes.string.isRequired,
	phoneNumber: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
	fileName: PropTypes.string.isRequired,
	callNumber: PropTypes.func.isRequired,
};

export default Contact;
