/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
 
import { Platform, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity } from 'react-native';
import Routes from './Routes.js';

class reactRoutes extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)

 
class Accordion_Panel extends Component {
 
  constructor() {
 
    super();
 
    this.state = {
 
      updated_Height: 0
 
    }
  }
 
  componentWillReceiveProps(update_Props) {
    if (update_Props.item.expanded) {
      this.setState(() => {
        return {
          updated_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          updated_Height: 0
        }
      });
    }
  }
 
  shouldComponentUpdate(update_Props, nextState) {
 
    if (update_Props.item.expanded !== this.props.item.expanded) {
 
      return true;
 
    }
 
    return false;
 
  }
 
  render() {
 
    return (
 
      <View style={styles.Panel_Holder}>
 
        <TouchableOpacity activeOpacity={0.7} onPress={this.props.onClickFunction} style={styles.Btn}>
 
          <Text style={styles.Panel_Button_Text}>{this.props.item.title} </Text>
 
        </TouchableOpacity>
 
        <View style={{ height: this.state.updated_Height, overflow: 'hidden' }}>
 
          <Text style={styles.Panel_text}>
 
            {this.props.item.body}
 
          </Text>
 
        </View>
 
      </View>
 
    );
  }
}
 
export default class App extends Component {
 
  constructor() {
    super();
 
    if (Platform.OS === 'android') {
 
      UIManager.setLayoutAnimationEnabledExperimental(true)
 
    }
 
    const array = [
 
      { expanded: false, title: "Saturday", body: "Hello Guys this is the Animated Accordion Panel." },
      { expanded: false, title: "Sunday", body: "Hello Guys this is the Animated Accordion Panel." },
      { expanded: false, title: "Monday", body: "Hello Guys this is the Animated Accordion Panel." },
      { expanded: false, title: "Tuesday", body: "Hello Guys this is the Animated Accordion Panel." },
      { expanded: false, title: "Wednesday", body: "Hello Guys this is the Animated Accordion Panel." },
      { expanded: false, title: "Thursday", body: "Hello Guys this is the Animated Accordion Panel." },
      { expanded: false, title: "Friday", body: "Hello Guys this is the Animated Accordion Panel." },
      { expanded: false, title: "Favourites", body: "Hello Guys this is the Animated Accordion Panel." },
             
    ];
 
    this.state = { AccordionData: [...array] }
  }
 
  update_Layout = (index) => {
 
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
 
    const array = this.state.AccordionData.map((item) => {
 
      const newItem = Object.assign({}, item);
 
      newItem.expanded = false;
 
      return newItem;
    });
 
    array[index].expanded = true;
 
    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }
 
  render() {
    return (
      <View style={styles.MainContainer}>
 
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
 
  Panel_text: {
    fontSize: 18,
    color: '#E0F7FA',
    padding: 10
  },
 
  Panel_Button_Text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21
  },
 
  Panel_Holder: {
    borderWidth: 1,
    borderColor: '#FF6F00',
    marginVertical: 5
  },
 
  Btn: {
    padding: 10,
    backgroundColor: '#0097A7'
  }
 
});