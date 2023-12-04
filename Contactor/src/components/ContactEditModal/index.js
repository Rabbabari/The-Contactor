import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, TextInput, Alert } from "react-native";
import Modal from "../Modal";
import styles from "../../styles/modal";

const ContactEditModal = ({ isOpen, closeModal, user, updateContact }) => {
	const [name, setContactName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [photo, setContactPhoto] = useState("");

	const selectFromCameraRoll = async () => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (permissionResult.granted === false) {
			alert("Permission to access camera roll is required!");
			return;
		}
		const pickerResult = await ImagePicker.launchImageLibraryAsync();
		if (pickerResult.canceled === true) {
			return;
		}
		setContactPhoto(pickerResult.assets[0].uri);
	};

	useEffect(() => {
		if (user) {
			setContactName(user.name);
			setPhoneNumber(user.phoneNumber);
			setContactPhoto(user.image);
		}
	}, [user]);

	const handleSubmit = () => {
		if (!name.trim()) {
			Alert.alert("Error", "Please enter a name");
		} else {
			updateUser(user, name, phoneNumber, photo);
			closeModal();
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Choose name</Text>
			<View>
				<TextInput
					style={styles.textInput}
					placeholder="Name"
					value={name}
					onChangeText={setContactName}
				/>
				<Text style={styles.text}>Write description</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Phone number"
					value={phoneNumber}
					onChangeText={setPhoneNumber}
				/>
				<TouchableOpacity onPress={() => selectFromCameraRoll()}>
					<Entypo
						style={styles.icon}
						name="image"
						size={24}
						color="black"
						value={photo}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.text}>Submit</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

ContactEditModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// A user to be updated
	user: PropTypes.object,
	// Function to update a user
	updateUser: PropTypes.func.isRequired,
};

export default ContactEditModal;
