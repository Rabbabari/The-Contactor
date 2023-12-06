import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
// import { useNavigation, useFocusEffect } from "@react-navigation/native";
import call from "react-native-phone-call";
import styles from "./styles";
import ContactList from "../../components/ContactList";
import Toolbar from "../../components/Toolbar";
import * as fileService from "../../services/fileService";
import CreateContactModal from "../../components/CreateContactModal";
// import EditContactModal from "../../components/ContactEditModal";
import * as Contacts from "expo-contacts";

const ContactsComponent = ({}) => {
	const [contacts, setContacts] = useState([]);
	// const [newContacts, setNewContact] = useState([]);
	// const navigation = useNavigation();
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	// A boolean flag to indicate if the modal to edit a board is open or not
	// const [isEditMContactModalOpen, setIsEditContactModalOpen] =
	// useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const [filterdContacts, setFilteredContacts] = useState(contacts);

	useEffect(() => {
		const initializeContacts = async () => {
			const storedContacts = await fileService.readContacts();
			setContacts(storedContacts);
			setFilteredContacts(storedContacts);
		};

		initializeContacts();
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
			photo: image,
		};
		console.log("New Contact: ", newContact);
		setContacts([...contacts, newContact]);
		fileService.storeContact(newContact);
	};

	const search = async (query) => {
		setSearchQuery(query);
		const filteredData = contacts.filter((item) =>
			item.name.toLowerCase().includes(query.toLowerCase())
		);

		setFilteredContacts(
			filteredData.sort((a, b) => a.name.localeCompare(b.name))
		);
	};
	const callNumber = async (number) => {
		console.log("Calling: ", number);
		const args = {
			number: number,
			prompt: false,
		};
		call(args).catch((error) =>
			console.log("Error while calling: ", error)
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
						if (!contact.name || !contact.phoneNumbers) {
							return;
						}
						const name = contact.name;
						let phoneNumber = contact.phoneNumbers[0]?.number || "";
						phoneNumber = phoneNumber.replace(/\D/g, "");
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
		}
	};

	const clearContacts = async () => {
		await fileService.cleanDirectory();
	};

	return (
		<View style={styles.container}>
			<Toolbar
				searchQuery={searchQuery}
				handelSearch={search}
				createContact={() => setIsCreateModalOpen(true)}
				importDeviceContacts={importDeviceContacts}
				clearContacts={clearContacts}
			/>
			<ContactList
				data={filterdContacts}
				callNumber={callNumber}
			></ContactList>
			<CreateContactModal
				isOpen={isCreateModalOpen}
				closeModal={() => setIsCreateModalOpen(false)}
				onAddNewContact={addNewContact}
			/>
		</View>
	);
};

export default ContactsComponent;
