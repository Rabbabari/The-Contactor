import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, TextInput, Alert } from "react-native";
import Modal from "../Modal";
import styles from "../../styles/modal";

const EditContactModal = ({ isOpen, closeModal, user, updateContact }) => {
	const [name, setContactName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [photo, setContactPhoto] = useState("");
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

	useEffect(() => {
		if (user) {
			setContactName(user.name);
			setPhoneNumber(user.phoneNumber);
			setContactPhoto(user.image);
		}
	}, [user]);

	const handleSubmit = () => {
		if (!name.trim() || !phoneNumber.trim()) {
			Alert.alert("Error", "Please enter a name and phone number");
		} else {
			updateContact(name, phoneNumber, photo);
			closeModal();
			navigate("Contacts");
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Contact Name</Text>
			<View>
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
