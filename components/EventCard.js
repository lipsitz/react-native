import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';




const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  date: {
    fontWeight: '200',
    fontSize: 15,
    color: '#bdbdbd',
    width: '30%',
    textAlign: 'right',
  },
  text: {
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',


  },
});


export default function EventCard(data) {
  const event = data.event;
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.text}>{event.date}</Text>

      </View>


    </View>
  );
}



