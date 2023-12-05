import React, { useState, useEffect } from "react";
import { View, Button, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import styles from "./styles";
import ContactList from "../../components/ContactList";
import Toolbar from "../../components/Toolbar";
import * as fileService from "../../services/fileService";
import CreateContactModal from "../../components/CreateContactModal";
import EditContactModal from "../../components/ContactEditModal";
import * as Contacts from "expo-contacts";

const ContactsComponent = ({}) => {
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

	useFocusEffect(
		React.useCallback(() => {
			// Function to fetch contacts
			const fetchContacts = async () => {
				console.log("in useFocusEffect");
				const updatedContacts = await fileService.readContacts();
				setContacts(updatedContacts);
				setFilteredContacts(updatedContacts);
			};

			fetchContacts();
		}, [])
	);

	useEffect(() => {
		// Sort and set filtered contacts when contacts or searchQuery change
		setFilteredContacts((prevFilteredContacts) =>
			[...prevFilteredContacts]
				.filter((contact) =>
					contact.name
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
				)
				.sort((a, b) => a.name.localeCompare(b.name))
		);
	}, [contacts]);

	const addNewContact = (name, phoneNumber, image) => {
		name, phoneNumber, image;
		const newContact = {
			name: name,
			phoneNumber: phoneNumber,
			image: image,
		};
		//setNewContact([...newContacts, newContact]);
		setContacts([...contacts, newContact]);
		fileService.storeContact(newContact);
	};

	// console.log("contacts");
	// console.log(contacts);
	// console.log("New contacts");
	// console.log(newContacts);

	const search = async (query) => {
		setSearchQuery(query);
		const filteredData = contacts.filter((item) =>
			item.name.toLowerCase().includes(query.toLowerCase())
		);

		setFilteredContacts(
			filteredData.sort((a, b) => a.name.localeCompare(b.name))
		);
	};

	const importDeviceContacts = async () => {
		try {
			const { status } = await Contacts.requestPermissionsAsync();
			if (status === "granted") {
				const { data } = await Contacts.getContactsAsync({
					fields: [Contacts.Fields.PhoneNumbers],
				});

				if (data.length > 0) {
					data.forEach((contact) => {
						const name = contact.name;
						let phoneNumber = contact.phoneNumbers[0]?.number || "";
						phoneNumber = phoneNumber.replace(/\D/g, ""); // Removes all non-digit characters
						let image = "";

						if (contact.imageAvailable && contact.image) {
							image = contact.image.uri;
						}

						addNewContact(name, phoneNumber, image);
					});
				}
			}
		} catch (error) {
			console.error("Error importing contacts:", error);
			// Handle the error appropriately
		}
	};

	return (
		<View style={styles.container}>
			<Toolbar
				searchQuery={searchQuery}
				handelSearch={search}
				createContact={() => setIsCreateModalOpen(true)}
			/>
			<Button title='Import Contacts' onPress={importDeviceContacts} />
			<ContactList data={filterdContacts}></ContactList>
			<CreateContactModal
				isOpen={isCreateModalOpen}
				closeModal={() => setIsCreateModalOpen(false)}
				onAddNewContact={addNewContact}
			/>
		</View>
	);
};

export default ContactsComponent;
