import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
},

    logoContainer: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
},

    imageLogo: {
        flex: 1,
        width: "65%",
        resizeMode: "contain",
},

    carBrand:{
        color: "#fff",
        fontWeight: "400",
        fontSize: 18,
        fontStyle: "italic",
},

    carName:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
},

    image: {
        flex: 1,
        marginBottom: 10,
        width: "100%",
        height: "100%",
    }

});