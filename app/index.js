import { Link } from "expo-router";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import GameLogo from "../assets/game.png";
function Home() {
  return (
    <ImageBackground
      source={{ uri: "https://img.freepik.com/premium-photo/dualshock-controller_863013-38216.jpg" }} // Replace with your image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Ｗｅｌｃｏｍｅ Ｔｏ Ｔｈｅ Ｇａｍｅ</Text>
        <Image
        source={GameLogo}
        style={styles.image}
        />
        <Link href="/game" style={styles.btn}>
          𝖘𝖙𝖆𝖗𝖙 𝖙𝖍𝖊 𝖌𝖆𝖒𝖊 🎮
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Ensures the image covers the entire screen
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 255, 0.5)", // Slight overlay for contrast
  },
  text: {
    fontSize: 20,
    color: "#fff", // White text for better visibility
    marginBottom: 20,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  btn: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#ff4d4d",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#ffcccc",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 300, // Set the width of the image
    height: 300, // Set the height of the image
    marginBottom: 20, // Add some space between the image and the button
    resizeMode: "contain", // Ensure the image scales properly
  },
});

export default Home;




