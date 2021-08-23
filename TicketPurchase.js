import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import globoTickets from './TicketsDB';

const TicketPurchase = ({route, navigation}) => {
  const [ticketQuantity, setTicketQuantity] = useState('1');
  const {eventId} = route.params;
  const selectedEvent = globoTickets.find(ticket => ticket.eventId === eventId);

  const purchase = () => {
    const price = selectedEvent.price * ticketQuantity;
    Alert.alert(`Your cost is ${price}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.event}>{selectedEvent.event}</Text>
      <Image style={styles.image} source={selectedEvent.image} />
      <Text style={styles.shortdescription}>
        {selectedEvent.shortDescription}
      </Text>
      <Text style={styles.description}>{selectedEvent.description}</Text>
      <View style={styles.purchaserow}>
        <Text style={styles.quantitytext}>Quantity:</Text>
        <TextInput
          style={styles.quantitiyinput}
          onChangeText={quantity => setTicketQuantity(quantity)}
          value={ticketQuantity}
          selectTextOnFocus={true}
          keyboardType="numeric"
        />
        </View>
        <Text style={styles.price}>
          Total price: ${selectedEvent.price * ticketQuantity}
        </Text>
        <TouchableOpacity onPress={purchase} style={styles.button}>
          <Text style={styles.buttontext}>Buy now</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'column', alignItems: 'center', paddingTop: 10},
  event: {fontFamily: 'Ubuntu-Regular', paddingTop: 10},
  image: {width: '100%', height: 180},
  shortdescription: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
    textAlignVertical: 'center',
  },
  description: {
    textAlign: 'left',
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    padding: 10,
  },
  purchaserow: {flexDirection: 'row'},
  quantitytext: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
    textAlignVertical: 'center',
  },
  quantitiyinput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    height: 38,
    width: 40,
    marginLeft: 25,
  },
  price: {fontFamily: 'Ubuntu-Regular', paddingTop: 5, paddingBottom: 10},
  button: {borderTopWidth: 1, borderBottomWidth: 1, width: '60%'},
  buttontext: {fontFamily: 'Ubuntu-Regular', textAlign: 'center', padding: 5},
});

export default TicketPurchase;
