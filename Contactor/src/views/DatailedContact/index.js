import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ContactDetail from "../../components/ContactDetail";
import ContactEditModal from "../../components/ContactEditModal";

const DetailedContacts = ({}) => {
	const [isContactEditModalOpen, setIsContactEditModalOpen] = useState(false);
	const [editingContact, setEditingContact] = useState(null);
	const [currentContact, setCurrentContact] = useState([]);

	// const uuid = route.params?.uuid;

	const editContact = () => {
		// A function to edit a contact

		setIsContactEditModalOpen(true);
	};

	return (
		<View style={{ flex: 1 }}>
			<ContactDetail
				editCurrentContact={() => editContact(currentContact)}
			/>
			<ContactEditModal
				isOpen={isContactEditModalOpen}
				closeModal={() => setIsContactEditModalOpen(false)}
				contact={editingContact}
				// onUpdateList={onUpdateList}
			/>
		</View>
	);
};

export default DetailedContacts;
