import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function GameScreen() {
  const foodItems = [
    {
      id: 1,
      title: "Burger🍔",
      description: "A delicious, juicy burger.",
      price: "$5.99",
      image:
        "https://th.bing.com/th/id/R.5b903cf15be6c226df356d84a83ca7c3?rik=m7JxwYDxk0csyg&riu=http%3a%2f%2fwww.readersdigest.ca%2fwp-content%2fuploads%2f2015%2f11%2fgourmet-burger.jpg&ehk=rkRu6XYjGWaKdF%2f%2fRax0o00Xt84b6WWZbYUQ1WT0ETw%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "Pizza🍕",
      description: "Classic pizza with cheese.",
      price: "$8.99",
      image: "https://example.com/pizza.jpg",
    },
    {
      id: 3,
      title: "Fries🍟",
      description: "Crispy golden fries.",
      price: "$2.99",
      image: "https://example.com/fries.jpg",
    },
  ];

  const food = [
    {
      id: 1,
      title: "Burger🍔",
      description: "A delicious, juicy burger.",
      price: "$5.99",
      image:
        "https://th.bing.com/th/id/R.5b903cf15be6c226df356d84a83ca7c3?rik=m7JxwYDxk0csyg&riu=http%3a%2f%2fwww.readersdigest.ca%2fwp-content%2fuploads%2f2015%2f11%2fgourmet-burger.jpg&ehk=rkRu6XYjGWaKdF%2f%2fRax0o00Xt84b6WWZbYUQ1WT0ETw%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "Pizza🍕",
      description: "Classic pizza with cheese.",
      price: "$8.99",
      image: "https://example.com/pizza.jpg",
    },
    {
      id: 3,
      title: "Fries🍟",
      description: "Crispy golden fries.",
      price: "$2.99",
      image: "https://example.com/fries.jpg",
    },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Delicious Food Ready to Be Delivered to You
        </Text>

        <View style={styles.links}>
          <Link href={"/index"} style={styles.div}>
            Burger🍔
          </Link>
          <Link href={"/index"} style={styles.div}>
            Pizza🍕
          </Link>
          <Link href={"/index"} style={styles.div}>
            Fries🍟
          </Link>
        </View>

        <Text style={styles.header}>MOST POPULAR</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {foodItems.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.header}>MOST FAV</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {food.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f0f0f0",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  links: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  div: {
    width: 100,
    height: 40,
    margin: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  horizontalScroll: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: 200,
    marginRight: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "green",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
    textAlign: "center",
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});