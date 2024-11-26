import { Link } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import GameLogo from "../assets/R.png";
function Home() {
  return (
    
      <View style={styles.container}>
        <Image
        source={GameLogo}
        style={styles.image}
        />
        <Text style={styles.text}> The Fastest Food Delivery In Town!  </Text>
        <Text style={styles.para}> pick up Your Desire food Items from the menue .There are 200+ items  </Text>
        <Link href="/(tabs)" style={styles.btn}>
          Order Now🍕
        </Link>
      </View>
   
  
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
   backgroundColor:'black'
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
    width: 300,
    height: 300, 
    marginBottom: 20, 
    resizeMode: "contain", 
  },
  para:{
    fontSize: 10,
    color: "gray", 
    marginBottom: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontWeight: "bold",
  }
});

export default Home;


