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
	// const [contacts, setContacts] = useState([
	// 	{
	// 		name: "Valmar",
	// 		number: 335,
	// 		photo: "https://photutorial.com/wp-content/uploads/2022/03/Selfies-statistics-thumbnail.png",
	// 	},
	// 	{
	// 		name: "Rebekka",
	// 		number: 9383,
	// 		photo: "https://photutorial.com/wp-content/uploads/2022/03/Selfies-statistics-thumbnail.png",
	// 	},
	// 	{
	// 		name: "Lovisa",
	// 		number: 2234,
	// 		photo: "https://photutorial.com/wp-content/uploads/2022/03/Selfies-statistics-thumbnail.png",
	// 	},
	// 	{
	// 		name: "Anna",
	// 		number: 5434,
	// 		photo: "https://photutorial.com/wp-content/uploads/2022/03/Selfies-statistics-thumbnail.png",
	// 	},
	// 	{
	// 		name: "Esther",
	// 		number: 2374,
	// 		photo: "https://photutorial.com/wp-content/uploads/2022/03/Selfies-statistics-thumbnail.png",
	// 	},
	// ]);

	const [filterdContacts, setFilteredContacts] = useState(contacts);

	useEffect(() => {
		// Fetch and set contacts from storage
		const initializeContacts = async () => {
			const storedContacts = await fileService.readContacts();
			setContacts(storedContacts);
		};
		setFilteredContacts(contacts);
		initializeContacts();

		// Sort and set filtered contacts when the component mounts or when contacts change
		setFilteredContacts((prevFilteredContacts) =>
			[...prevFilteredContacts].sort((a, b) =>
				a.name.localeCompare(b.name)
			)
		);
	}, [contacts]); // The dependency array includes "contacts" to trigger the effect when contacts change

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

	const search = async (query) => {
		setSearchQuery(query);
		const filteredData = contacts.filter((item) =>
			item.name.toLowerCase().includes(query.toLowerCase())
		);

		setFilteredContacts(
			filteredData.sort((a, b) => a.name.localeCompare(b.name))
		);
	};
	console.log("New contacts");
	console.log(newContacts);

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
				onAddNewContact={newContacts}
			/>
		</View>
	);
};

export default Contacts;
