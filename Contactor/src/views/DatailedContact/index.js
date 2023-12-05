import React, { useState } from "react";
import { View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import ContactDetail from "../../components/ContactDetail";
import ContactEditModal from "../../components/ContactEditModal";
import * as fileService from "../../services/fileService";

const DetailedContacts = () => {
	const [isContactEditModalOpen, setIsContactEditModalOpen] = useState(false);
	const [editingContact, setEditingContact] = useState(null);
	const [contacts, setContacts] = useState([]);

	// Example current contact data
	const route = useRoute();
	const { user } = route.params;
	const editContact = () => {
		setIsContactEditModalOpen(true);
	};

	const deleteCurrentContact = () => {
		const initializeContacts = async () => {
			console.log("user filename ", user);
			try {
				await fileService.deleteContact(user.fileName);
			} catch (error) {
				console.error("Error initializing contacts:", error);
			}
		};
		initializeContacts();
		setContacts((prevContacts) => {
			return prevContacts.filter((contact) => contact.id !== user.id);
		});
	};

	return (
		<View style={{ flex: 1 }}>
			<ContactDetail
				name={user.name}
				phoneNumber={user.phoneNumber}
				photo={user.photo}
				fileName={user.fileName}
				editCurrentContact={() => editContact()}
				deleteCurrentContact={() => deleteCurrentContact()}
			/>
			<ContactEditModal
				// Does not take a user
				isOpen={isContactEditModalOpen}
				closeModal={() => setIsContactEditModalOpen(false)}
				contact={editingContact}
				user={user}
			/>
		</View>
	);
};

export default DetailedContacts;
