import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import call from "react-native-phone-call";
import styles from "./styles";
import ContactList from "../../components/ContactList";
import Toolbar from "../../components/Toolbar";
import * as fileService from "../../services/fileService";
import CreateContactModal from "../../components/CreateContactModal";
import * as Contacts from "expo-contacts";

const ContactsComponent = ({}) => {
	const [contacts, setContacts] = useState([]);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const [filterdContacts, setFilteredContacts] = useState(contacts);

	useFocusEffect(
		React.useCallback(() => {
			// Function to fetch contacts
			const fetchContacts = async () => {
				const updatedContacts = await fileService.readContacts();
				setContacts(updatedContacts);
				setFilteredContacts(updatedContacts);
			};

			fetchContacts();
		}, [])
	);
	// useEffect(() => {
	// 	const initializeContacts = async () => {
	// 		try {
	// 			const storedContacts = await fileService.readContacts();
	// 			setContacts(storedContacts);
	// 			setFilteredContacts(storedContacts);
	// 		} catch (error) {
	// 			console.error("Error initializing contacts:", error);
	// 		}
	// 	};

	// 	initializeContacts();
	// }, []); // Empty dependencies array means the effect runs only once on mount

	// Use a separate function to update contacts when needed
	const updateContacts = async () => {
		try {
			const storedContacts = await fileService.readContacts();
			setContacts(storedContacts);
			setFilteredContacts(storedContacts);
		} catch (error) {
			console.error("Error updating contacts:", error);
		}
	};

	// Use the updateContacts function when you need to update contacts
	// For example, you can call it in response to user actions, like adding or deleting contacts
	// updateContacts();

	useEffect(() => {
		setFilteredContacts((prevFilteredContacts) =>
			prevFilteredContacts
				.filter((contact) =>
					contact.name
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
				)
				.sort((a, b) => a.name.localeCompare(b.name))
		);
	}, [searchQuery, contacts]); // Run when searchQuery or contacts change

	// useEffect(() => {
	// 	const initializeContacts = async () => {
	// 		const storedContacts = await fileService.readContacts();
	// 		setContacts(storedContacts);
	// 		setFilteredContacts(storedContacts);
	// 	};

	// 	initializeContacts();
	// 	setFilteredContacts((prevFilteredContacts) =>
	// 		[...prevFilteredContacts]
	// 			.filter((contact) =>
	// 				contact.name
	// 					.toLowerCase()
	// 					.includes(searchQuery.toLowerCase())
	// 			)
	// 			.sort((a, b) => a.name.localeCompare(b.name))
	// 	);
	// }, [contacts]);

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
		updateContacts();
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
						let image =
							"https://www.ssrl-uark.com/wp-content/uploads/2014/06/no-profile-image.png";
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
		updateContacts();
	};

	const confirmDelete = () => {
		Alert.alert(
			"Confirm Delete", // Title of the alert
			"Are you sure you want to delete all contacts?", // Message of the alert
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel",
				},
				{
					text: "OK",
					onPress: () => clearContacts(),
				},
			],
			{ cancelable: false } // Prevents dismissing the Alert by tapping outside of it
		);
	};

	const clearContacts = async () => {
		await fileService.cleanDirectory();
		updateContacts();
	};

	return (
		<View style={styles.container}>
			<Toolbar
				searchQuery={searchQuery}
				handelSearch={search}
				createContact={() => setIsCreateModalOpen(true)}
				importDeviceContacts={importDeviceContacts}
				clearContacts={confirmDelete}
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
