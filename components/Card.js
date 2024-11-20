import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Card({ card, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={card.isFlipped || card.isMatched}>
      <Image
        source={{
          uri: card.isFlipped || card.isMatched ? card.image : 'https://th.bing.com/th/id/R.9fc73f88bfa96e9100fd1c49b843f62c?rik=qRNHz%2fB6ma13AQ&riu=http%3a%2f%2fcliparting.com%2fwp-content%2fuploads%2f2017%2f04%2fQuestion-marks-clipart-2.jpg&ehk=JJmv8RRFp1W3JP00beGmWcbcC1D609Bm6OBg99bvYaI%3d&risl=&pid=ImgRaw&r=0',
        }}
        style={styles.card}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 125,
    margin: 5,
    borderRadius: 10, // Rounded corners
    backgroundColor: '#fff', // White background for better contrast
    borderWidth: 1, // Border for definition
    borderColor: '#ccc', // Subtle border color
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur radius
    elevation: 4, // Elevation for Android shadow
  },
});
