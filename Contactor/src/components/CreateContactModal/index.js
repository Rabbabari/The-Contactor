import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Text, TextInput, Alert, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Entypo } from "@expo/vector-icons";
import Modal from "../Modal"; // Importing custom modal component
import styles from "../../styles/modal"; // Importing custom styles
import { storeContact } from "../../services/fileService";
import { useNavigation } from "@react-navigation/native";

const CreateContactModal = ({ isOpen, closeModal, onAddNewContact }) => {
	// State variables for the user name, phone number, and contact photo
	const [name, setContactName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [photo, setContactPhoto] = useState(
		"https://www.ssrl-uark.com/wp-content/uploads/2014/06/no-profile-image.png"
	);
	const [error, setError] = useState(false);
	const { navigate } = useNavigation();

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

	const takePhoto = async () => {
		const permissionResult =
			await ImagePicker.requestCameraPermissionsAsync();

		if (permissionResult.granted === false) {
			alert("Permission to access camera is required!");
			return;
		}

		const result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			quality: 0.8,
			uri: true,
			aspect: [16, 9],
		});
		if (result.canceled) {
			return;
		}
		setContactPhoto(result.uri);
	};

	const isNumeric = (value) => {
		return /^\d+$/.test(value); // Regular expression for numeric values
	};

	// Function to handle the submission of a new user
	const handleSubmit = async () => {
		if (!name.trim() || !phoneNumber.trim()) {
			setError(true);
			Alert.alert("Error", "Please enter a name and phone number.");
		} else {
			await onAddNewContact(name, phoneNumber, photo);
			setError(false);
			setContactName("");
			setPhoneNumber("");
			closeModal();
		}
	};
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<View style={styles.body}>
				<TextInput
					style={styles.textInput}
					placeholder="Name"
					value={name}
					onChangeText={setContactName}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Phone number"
					value={phoneNumber}
					onChangeText={setPhoneNumber}
					keyboardType="numeric"
				/>
				<View style={styles.iconContainer}>
					<TouchableOpacity onPress={() => selectFromCameraRoll()}>
						<Entypo
							style={styles.icon}
							name="image"
							size={26}
							color="black"
							value={photo}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => takePhoto()}>
						<Entypo
							style={styles.icon}
							name="camera"
							size={26}
							color="black"
							value={photo}
						/>
					</TouchableOpacity>
				</View>
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
