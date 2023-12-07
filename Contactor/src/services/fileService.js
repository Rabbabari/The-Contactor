import "react-native-get-random-values";
import * as FileSystem from "expo-file-system";
const contactDirectory = `${FileSystem.documentDirectory}contacts`;
import { v4 as uuidv4 } from "uuid";

const setUpDirectory = async () => {
	// Gets the directory if it exists, otherwise creates it
	const dir = await FileSystem.getInfoAsync(contactDirectory);
	if (!dir.exists) {
		await FileSystem.makeDirectoryAsync(contactDirectory);
	}
};

export const cleanDirectory = async () => {
	// Clears all files from the directory
	await FileSystem.deleteAsync(contactDirectory);
};

export const storeContact = async (user) => {
	// Stores a contact in the directory
	await setUpDirectory();

	try {
		// generate a uuid for the filename
		const uuid = uuidv4();
		const filename = `${user.name}-${uuid}.json`;
		const filePath = `${contactDirectory}/${filename}`;
		// User input is turned into a json string
		const contact = JSON.stringify({
			name: user.name,
			phoneNumber: user.phoneNumber,
			photo: user.photo,
		});
		// Store contact in file
		await FileSystem.writeAsStringAsync(filePath, contact);
	} catch (error) {
		console.error("Error storing contact data:", error);
	}
};

export const deleteContact = async (contact) => {
	// Deletes a contact file
	try {
		const filePath = `${contactDirectory}/${contact}`;
		await FileSystem.deleteAsync(filePath);
	} catch (error) {
		console.error("Error deleting contact data:", error);
	}
};

export const readContacts = async () => {
	try {
		await setUpDirectory();
		// Read the contacts from the directory
		const fileNames = await FileSystem.readDirectoryAsync(contactDirectory);
		const validFiles = fileNames.filter(
			(path) => !path.includes(".DS_Store")
		);
		const contacts = [];
		for (const fileName of validFiles) {
			const filePath = `${contactDirectory}/${fileName}`;
			try {
				// Check if the file exists before reading
				const fileInfo = await FileSystem.getInfoAsync(filePath);
				if (fileInfo.exists) {
					const fileContents = await FileSystem.readAsStringAsync(
						filePath
					);
					const contact = JSON.parse(fileContents);
					contacts.push({ ...contact, fileName });
				}
			} catch (error) {
				console.error(`Error reading file ${filePath}:`, error);
			}
		}
		return contacts;
	} catch (error) {
		console.error("Error reading contacts:", error);
		return []; // Return an empty array in case of error
	}
};

export const editContact = async (filename, name, number, photo) => {
	await setUpDirectory();

	const filePath = `${contactDirectory}/${filename}`;
	try {
		// Read existing data from the file
		const fileContents = await FileSystem.readAsStringAsync(filePath);
		const existingData = JSON.parse(fileContents);

		// Update the specific contact information
		existingData.name = name;
		existingData.phoneNumber = number;
		existingData.photo = photo;

		// Write the updated data back to the file
		await FileSystem.writeAsStringAsync(
			filePath,
			JSON.stringify(existingData)
		);
	} catch (error) {
		console.error("Error editing contact:", error);
	}
};
