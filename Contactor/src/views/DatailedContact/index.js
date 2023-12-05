import React, { useState } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import ContactDetail from "../../components/ContactDetail";
import ContactEditModal from "../../components/ContactEditModal";

const DetailedContacts = () => {
	const [isContactEditModalOpen, setIsContactEditModalOpen] = useState(false);
	const [editingContact, setEditingContact] = useState(null);

	// Example current contact data
	const route = useRoute();
	const { name, phoneNumber, photo } = route.params;
	const editContact = () => {
		setIsContactEditModalOpen(true);
	};

	return (
		<View style={{ flex: 1 }}>
			<ContactDetail
				name={name}
				phoneNumber={phoneNumber}
				photo={photo}
				editCurrentContact={() => editContact()}
			/>
			<ContactEditModal
				isOpen={isContactEditModalOpen}
				closeModal={() => setIsContactEditModalOpen(false)}
				contact={editingContact}
			/>
		</View>
	);
};

export default DetailedContacts;
