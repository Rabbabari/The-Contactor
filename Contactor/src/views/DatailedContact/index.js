import React, { useState } from "react";
import { View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import ContactDetail from "../../components/ContactDetail";
import ContactEditModal from "../../components/ContactEditModal";
import { editContact, deleteContact } from "../../services/fileService";

const DetailedContacts = () => {
	const [isContactEditModalOpen, setIsContactEditModalOpen] = useState(false);
	const [editingContact, setEditingContact] = useState(null);
	const [contacts, setContacts] = useState([]);
	const { navigate } = useNavigation();

	// Example current contact data
	const route = useRoute();
	const { user } = route.params;

	const toggleEditContact = () => {
		setIsContactEditModalOpen(true);
	};

	const deleteCurrentContact = () => {
		const initializeContacts = async () => {
			try {
				await deleteContact(user.fileName);
				navigate("Contacts");
			} catch (error) {
				console.error("Error initializing contacts:", error);
			}
		};
		initializeContacts();
		setContacts((prevContacts) => {
			return prevContacts.filter(
				(contact) => contact.fileName !== user.fileName
			);
		});
	};

	const updateContact = async (newName, newNumber, newPhoto) => {
		console.log("New attibutes: ", newName, newName, newPhoto);
		user.name = newName;
		user.phoneNumber = newNumber;
		user.photo = newPhoto;
		// console.log(user.fileName);
		await editContact(user.fileName, newName, newNumber, newPhoto);
	};

	return (
		<View style={{ flex: 1 }}>
			<ContactDetail
				name={user.name}
				phoneNumber={user.phoneNumber}
				photo={user.photo}
				fileName={user.fileName}
				editCurrentContact={() => toggleEditContact()}
				deleteCurrentContact={() => deleteCurrentContact()}
			/>
			<ContactEditModal
				isOpen={isContactEditModalOpen}
				closeModal={() => setIsContactEditModalOpen(false)}
				contact={editingContact}
				user={user}
				updateContact={updateContact}
			/>
		</View>
	);
};

export default DetailedContacts;
