import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import globoTickets from './TicketsDB';

const Tickets = ({navigation}) => {
  const ticketItem = ({item}) => {
    return (
      <View style={styles.ticket}>
        <View>
          <Image style={styles.img} source={item.image} />
        </View>
        <View>
          <Text style={styles.event}>{item.event}</Text>
          <Text style={styles.shortDescription}>{item.shortDescription}</Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.description}
          </Text>
          <Text style={styles.price}>Price: {item.price}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Purchase', {eventId: item.eventId});
            }}>
            <Text style={styles.button}>Get tickets</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={globoTickets}
        renderItem={ticketItem}
        keyExtractor={item => item.eventId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingTop: 15, paddingBottom: 15},
  ticket: {flexDirection: 'column'},
  img: {height: 180, width: '100%'},
  event: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  shortDescription: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    paddingTop: 5,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    padding: 15,
    textAlign: 'center',
  },
  price: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    padding: 15,
    textAlign: 'center',
  },
  button: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 5,
    textAlign: 'center',
  },
});

export default Tickets;
