import * as FileSystem from "expo-file-system";
const contactDirectory = "${FileSystem.documentDirectory}contacts";
import { v4 as uuidv4 } from "uuid";

export const storeContact = async (user) => {
	try {
		const uuid = uuidv4();
		const filename = `${user.name}-${uuid}.json`;
		const filePath = `${FileSystem.documentDirectory}${filename}`;

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

const readContacts = async () => {
	try {
		const contacts = await FileSystem.readDirectoryAsync(contactDirectory);
		console.log("Contacts read from file system:", contacts);
		return contacts;
	} catch (error) {
		console.error("Error reading contacts:", error);
	}
};
export default readContacts;
export const addImage = async (imageLocation) => {};
