import React, { useState, useEffect } from 'react';
import { View, StyleSheet,  } from 'react-native';
import Card from './Card';

const IMAGES = [
  'https://th.bing.com/th/id/R.9d5ed29695a1b24161c5a2a1356ee5d5?rik=aXGMiueb0cuJPQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fCake-PNG-Free-Image.png&ehk=tBmFyt7qYwPJAnSTA9EtxSleZizOln6VEkSC921RUyk%3d&risl=&pid=ImgRaw&r=0',
  'https://cdn-images-1.medium.com/v2/resize:fit:1200/1*ddsez1hp43PIMJFbcpGYzQ.png',
  'https://th.bing.com/th/id/R.a556e8932b4a19e79f8a56ddd63186dc?rik=cemg1%2f2PbsN7KA&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1524324.png&ehk=wcRfP0no4bNm71HEjwIFRKbFy3XwhICf%2b%2fXyionnMPs%3d&risl=1&pid=ImgRaw&r=0',
  'https://m.media-amazon.com/images/I/71TTETKPCnL.png',
  'https://th.bing.com/th/id/OIP.ZUNwuSXgPZGQIceYpaAbDwHaHa?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.ca21e72cbc5540375e0de6d357a3095f?rik=HRgEmJGjYqgjDg&pid=ImgRaw&r=0',
];

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const generateCards = (level) => {
  const numPairs = Math.min(3 + level, 6); // Number of pairs increases with level
  const selectedImages = IMAGES.slice(0, numPairs);
  const doubledImages = [...selectedImages, ...selectedImages];
  return shuffleArray(doubledImages).map((image, index) => ({
    id: index,
    image,
    isFlipped: false,
    isMatched: false,
  }));
};

export default function GameBoard({ level, setMessage, onLevelUp }) {
  const [cards, setCards] = useState(generateCards(level));
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;

      if (firstCard.image === secondCard.image) {
        setMessage('Match Found!');
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.image === firstCard.image ? { ...card, isMatched: true } : card
          )
        );
        setSelectedCards([]);
        // Check if all pairs are matched
        if (cards.every((card) => card.isMatched || card.image === firstCard.image)) {
          setTimeout(onLevelUp, 1000);
          alert("you won")
          
        }
      } else {
        setMessage('No Match!');
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards]);

  const handleCardPress = (card) => {
    if (selectedCards.length < 2 && !card.isFlipped && !card.isMatched) {
      setCards((prevCards) =>
        prevCards.map((c) =>
          c.id === card.id ? { ...c, isFlipped: true } : c
        )
      );
      setSelectedCards((prevSelected) => [...prevSelected, card]);
    }
  };

  return (
    <View style={styles.cardContainer}>
      {cards.map((card) => (
        <Card key={card.id} card={card} onPress={() => handleCardPress(card)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
