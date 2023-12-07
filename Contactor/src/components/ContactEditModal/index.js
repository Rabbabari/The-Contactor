import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, TextInput, Alert } from "react-native";
import Modal from "../Modal";
import styles from "../../styles/modal";

const EditContactModal = ({ isOpen, closeModal, user, updateContact }) => {
	// State variables for the user name, phone number, and contact photo
	const [name, setContactName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [photo, setContactPhoto] = useState("");
	const { navigate } = useNavigation();

	// Sets the name, number, and photo as the old values
	useEffect(() => {
		if (user) {
			setContactName(user.name);
			setPhoneNumber(user.phoneNumber);
			setContactPhoto(user.photo);
		}
	}, [user]);

	// Select a new image from the camera roll
	const selectFromCameraRoll = async () => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		// Get permission from user
		if (permissionResult.granted === false) {
			alert("Permission to access camera roll is required!");
			return;
		}
		// Using imagePicker, get the photo from the user
		const pickerResult = await ImagePicker.launchImageLibraryAsync();
		if (pickerResult.canceled === true) {
			return;
		}
		setContactPhoto(pickerResult.assets[0].uri);
	};
	// Add a new photo by using the camera function
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
			aspect: [16, 9],
		});
		if (result.canceled) {
			return "";
		}
		setContactPhoto(result.assets[0].uri);
	};

	// Function to handle the submission of an updated user
	const handleSubmit = () => {
		if (!name.trim() || !phoneNumber.trim()) {
			// The name and number have to be filled in
			Alert.alert("Error", "Please enter a name and phone number");
		} else {
			updateContact(name, phoneNumber, photo);
			closeModal();
			navigate("Contacts");
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<View style={styles.body}>
				<Text style={styles.text}>Contact Name</Text>
				<TextInput
					style={styles.textInput}
					placeholder={name}
					value={name}
					onChangeText={setContactName}
				/>
				<Text style={styles.text}>Phone number</Text>
				<TextInput
					style={styles.textInput}
					placeholder={phoneNumber}
					value={phoneNumber}
					onChangeText={setPhoneNumber}
				/>
				<Text style={styles.text}>Choose Photo</Text>
				<View style={styles.iconContainer}>
					<TouchableOpacity onPress={() => selectFromCameraRoll()}>
						<Entypo
							style={styles.icon}
							name="image"
							size={24}
							color="black"
							value={photo}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => takePhoto()}>
						<Entypo
							style={styles.icon}
							name="camera"
							size={24}
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

EditContactModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// A user to be updated
	user: PropTypes.object,
	// Function to update a user
	updateContact: PropTypes.func,
};

export default EditContactModal;
