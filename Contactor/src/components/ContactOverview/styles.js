import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		padding: 20,
	},
	contactButton: {
		flexDirection: "row",
		alignItems: "center",
	},
	imageContainer: {
		marginBottom: 20,
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 200,
		marginRight: 20,
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 4,
	},
	number: {
		fontSize: 18,
		color: "gray",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#007bff",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		fontSize: 18,
	},
});
