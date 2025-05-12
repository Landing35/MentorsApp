import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MentorCard = ({ mentor }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: mentor.profilePicture }} style={styles.avatar} />
      <Text style={styles.name}>{mentor.name}</Text>
      <Text style={styles.title}>{mentor.title}</Text>
    </View>
  );
};

export default MentorCard;

const styles = StyleSheet.create({
  card: {
    width: '44%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
