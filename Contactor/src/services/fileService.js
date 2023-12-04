import "react-native-get-random-values";
import * as FileSystem from "expo-file-system";
const contactDirectory = `${FileSystem.documentDirectory}`;
import { v4 as uuidv4 } from "uuid";

export const storeContact = async (user) => {
	console.log("Inside store");
	console.log(user);
	try {
		const phoneNumberPattern = /^\d+$/;
		if (!phoneNumberPattern.test(user.phoneNumber)) {
			throw new Error(
				"Phone number is invalid. It should contain only digits."
			);
		}
		const uuid = uuidv4();
		const filename = `${user.name}-${uuid}.json`;
		const filePath = `${FileSystem.documentDirectory}${filename}`;
		console.log("User.name");
		console.log(user.name);
		const contact = JSON.stringify({
			name: user.name,
			phoneNumber: user.phoneNumber,
			photo: user.image,
		});

		await FileSystem.writeAsStringAsync(filePath, contact);

		console.log(`User data stored in ${filePath}`);
	} catch (error) {
		console.error("Error storing user data:", error);
	}
};

export const readContacts = async () => {
	try {
		const fileNames = await FileSystem.readDirectoryAsync(contactDirectory);
		const validFiles = fileNames.filter(
			(path) => !path.includes(".DS_Store")
		);
		const contactsPromises = validFiles.map(async (fileName) => {
			const filePath = `${contactDirectory}/${fileName}`;
			const fileContents = await FileSystem.readAsStringAsync(filePath);
			return JSON.parse(fileContents);
		});
		const contacts = await Promise.all(contactsPromises);
		console.log("Contacts read from file system:", contacts);
		return contacts;
	} catch (error) {
		console.error("Error reading contacts:", error);
		return []; // Return an empty array in case of error
	}
};

export const addImage = async (imageLocation) => {};
