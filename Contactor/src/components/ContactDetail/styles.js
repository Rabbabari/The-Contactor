import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		padding: 20,
	},
	imageContainer: {
		marginBottom: 20,
	},
	image: {
		width: 400,
		height: 400,
		borderRadius: 200,
	},
	name: {
		fontSize: 24,
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
