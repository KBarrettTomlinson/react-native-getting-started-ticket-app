import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Menu from './Menu';

const Home = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.owlLogo} source={require('./images/owlLogo.png')} />
      <Text style={styles.title}> Welcome to Owl Tickets</Text>
      <Text style={styles.subtitle}>{props.userName}</Text>
      <Image
        style={styles.heroImage}
        source={require('./images/heroConcert.jpeg')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
    </View>
  );
};

const introText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta mauris at nunc faucibus, fringilla feugiat nisl sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non condimentum felis, at accumsan felis. Duis eros risus, bibendum a lorem fringilla, ullamcorper fringilla justo. Nulla odio arcu, lobortis id venenatis at, sagittis vel sapien. Sed eget leo lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vulputate mauris in arcu varius, non placerat purus blandit. Nunc nisl urna, accumsan at nisl eget, varius lacinia ipsum. Duis urna nunc, gravida nec dignissim et, suscipit sit amet sapien.`;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 20,
    paddingTop: 20,
  },
  owlLogo: {
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
  },
  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
  },
  heroImage: {height: 170, width: '100%'},
  textContainer: {
    padding: 20,
  },
  content: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '300',
  },
  menu: {
    position: 'absolute',
    bottom: 10,
  },
});

export default Home;
