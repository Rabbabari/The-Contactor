import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import ContactList from "../../components/ContactList";
import Toolbar from "../../components/Toolbar";
import * as fileService from "../../services/fileService";
import CreateContactModal from "../../components/CreateContactModal";
import EditContactModal from "../../components/ContactEditModal";

const Contacts = ({}) => {
	const [contacts, setContacts] = useState([]);
	const [newContacts, setNewContact] = useState([]);
	const navigation = useNavigation();
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	// A boolean flag to indicate if the modal to edit a board is open or not
	const [isEditMContactModalOpen, setIsEditContactModalOpen] =
		useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const [filterdContacts, setFilteredContacts] = useState(contacts);

	// const takePhoto = async () => {
	// 	const photo = await imageService.takePhoto();
	// 	if (photo.length > 0) {
	// 		await fileService.addImage(photo);
	// 	}
	// };

	useEffect(() => {
		const initializeContacts = async () => {
			const storedContacts = await fileService.readContacts();
			setContacts(storedContacts);
		};

		initializeContacts();
	}, []);

	const addNewContact = (name, phoneNumber, image) => {
		console.log("Inside addNewContact");
		console.log();
		name, phoneNumber, image;
		const newContact = {
			name: name,
			phoneNumber: phoneNumber,
			image: image,
		};
		setNewContact([...newContacts, newContact]);
		fileService.storeContact(newContact);
	};
	console.log("contacts");
	console.log(contacts);
	console.log("New contacts");
	console.log(newContacts);

	const search = async (query) => {
		setSearchQuery(query);
		const filteredData = contacts.filter((item) =>
			item.name.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredContacts(filteredData);
	};

	return (
		<View style={styles.container}>
			<Toolbar
				searchQuery={searchQuery}
				handelSearch={search}
				createContact={() => setIsCreateModalOpen(true)}
			/>
			<ContactList data={contacts}></ContactList>
			<CreateContactModal
				isOpen={isCreateModalOpen}
				closeModal={() => setIsCreateModalOpen(false)}
				onAddNewContact={addNewContact}
			/>
		</View>
	);
};

export default Contacts;
