import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import EventList from './components/EventList'
import ActionButton from 'react-native-action-button'
class HomeScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: '100', fontSize: 20, }}>
          Click + Button to Add Event
      </Text>
        <ActionButton
          title="Add Event"
          onPress={this.pressFunc}
          buttonColor="rgba(231,76,60,1)"
        />
      </View>
    );
  }
  pressFunc = () => {
    let d = new Date();
    const time =
    {
      "date": new Date(d).toUTCString(),
      "id": d.getTime(),

    }

    this.props.navigation.navigate('Events', time)
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Home Page'
    })

  },
  Events: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Events List'
    })

  }
});