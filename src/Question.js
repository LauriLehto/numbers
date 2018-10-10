/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

export default class App extends Component {
  state= {
    data:[],
    date:9,
    month:10,
    done: false
  }

  resToState() {
    
    const url = `http://numbersapi.com/random/year?json`
    let i = 3

    let intFetch = setInterval(()=>{
      if(url){
        fetch(url)
        .then(response => response.json())
        .catch(err => console.warn('fetch error'+ err))
        .then(json => {
          this.setState(prev=>{
          const data = prev.data.concat(json)
          return { data: data, date: this.state.date, month: this.state.month, done:false }
        })})
        .catch(err => console.warn('json not loaded'+err))
      }
      i--
      if(!i){
        this.setState({ done: true })
        clearInterval(intFetch)
      }
    },1000)
    
  }

  componentDidMount() {
    this.resToState()
  }

  renderQuestion({item}) {
       return <Text style={styles.text}>{item.text}</Text>
   }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.data}
        keyExtractor={item => item.text}
        renderItem={item =>this.renderQuestion(item)}
        />
      <Text>Tekstiä</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
});
