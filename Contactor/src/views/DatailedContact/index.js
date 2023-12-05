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
	const { user } = route.params;
	const editContact = () => {
		setIsContactEditModalOpen(true);
	};

	return (
		<View style={{ flex: 1 }}>
			<ContactDetail
				name={user.name}
				phoneNumber={user.phoneNumber}
				photo={user.photo}
				editCurrentContact={() => editContact()}
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
