import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Text, TextInput, Alert, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Entypo } from "@expo/vector-icons";
import Modal from "../Modal"; // Importing custom modal component
import styles from "../../styles/modal"; // Importing custom styles
import { storeContact } from "../../services/fileService";

const CreateContactModal = ({ isOpen, closeModal, onAddNewContact }) => {
	// State variables for the user name, phone number, and contact photo
	const [name, setContactName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [photo, setContactPhoto] = useState("");
	const [error, setError] = useState(false);

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

	// Function to handle the submission of a new user
	const handleSubmit = async () => {
		if (!name.trim() || !phoneNumber.trim()) {
			setError(true);
			Alert.alert("Error", "Please enter a name and phone number.");
		} else {
			console.log("onAddNewContact");
			//console.log(onAddNewContact[0]);
			//console.log(onAddNewContact[0]);
			await onAddNewContact(name, phoneNumber, photo);
			setContactName("");
			setPhoneNumber("");
			setContactPhoto("");
			setError(false);
			closeModal();
		}
	};
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Name</Text>
			<View>
				<TextInput
					style={styles.textInput}
					placeholder='Name'
					value={name}
					onChangeText={setContactName}
				/>
				<Text style={styles.text}>Phone number</Text>
				<TextInput
					style={styles.textInput}
					placeholder='Phone number'
					value={phoneNumber}
					onChangeText={setPhoneNumber}
				/>

				<TouchableOpacity onPress={() => selectFromCameraRoll()}>
					<Entypo
						style={styles.icon}
						name='image'
						size={26}
						color='black'
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

CreateContactModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// Function to create a new user
	onAddNewContact: PropTypes.func.isRequired,
};

export default CreateContactModal;
