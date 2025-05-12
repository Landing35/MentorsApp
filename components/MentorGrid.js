import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MentorCard from './MentorCard';
import mentorsData from '../data/mentors';

const MentorGrid = () => {
  return (
    <ScrollView contentContainerStyle={styles.grid}>
      {mentorsData.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </ScrollView>
  );
};

export default MentorGrid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
  },
});
