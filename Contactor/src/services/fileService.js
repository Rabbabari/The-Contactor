import * as FileSystem from "expo-file-system";
const contactDirectory = "${FileSystem.documentDirectory}contacts";
import { v4 as uuidv4 } from "uuid";

export const storeContact = async (name, phoneNumber, image) => {
	try {
		const uuid = uuidv4();
		const filename = `${user.name}-${uuid}.json`;
		const filePath = `${FileSystem.documentDirectory}${filename}`;

		const contact = JSON.stringify({
			name: name,
			phoneNumber: phoneNumber,
			photo: image,
		});

		await FileSystem.writeAsStringAsync(filePath, contact);

		console.log(`User data stored in ${filePath}`);
	} catch (error) {
		console.error("Error storing user data:", error);
	}
};
