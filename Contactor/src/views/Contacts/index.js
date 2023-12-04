import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import ContactList from "../../components/ContactList";
import * as fileService from "../../services/fileService";

const Contacts = ({ navigation: { navigate } }) => {
	const [contacts, setContacts] = useState([]);
	const navigation = useNavigation();

	const takePhoto = async () => {
		const photo = await imageService.takePhoto();
		if (photo.length > 0) {
			await fileService.addImage(photo);
		}
	};

	useEffect(() => {
		const initializeContacts = async () => {
			const storedContacts = await fileService.readContacts();
			setContacts(storedContacts);
		};

		initializeContacts();
	}, []);

	return (
		<View style={styles.container}>
			<ContactList></ContactList>
		</View>
	);
};

export default Contacts;
