import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button} from 'react-native';

export default class App extends Component {

    constructor (){
    super();
    this.state = {
        word: '', 
        Consonants:0, 
        Vowels:0, 
        Characters:0,
    }
}

wordanalyzer= () =>{

    let Vowels = 0;
    let Consonants = 0;
    let Characters = 0;
    var i;

   

    for (i = 0; i < this.state.word.length; i++){

        if(this.state.word[i].match(/[aeiou]/gi, '')){
            Vowels++;
            this.setState({Vowels});
            
        }else if(!(this.state.word[i].match(/[aeiou]/gi, ''))){
            Consonants++;
            this.setState({Consonants});
        }        
    }
    this.setState({Characters: this.state.Vowels + this.state.Consonants});
    }
    

    
render() {    
    return (  
      <View style={styles.all}>
        <View style={styles.all}>    
            <Text style={styles.title}>A Word Analyzer</Text>
        <View style={styles.area}>
            <Text style={styles.counts}>Word</Text>
            <TextInput onChangeText={(word) => this.setState({word})} style={{height: 40}} placeholder="Type here to translate!"/>
            <Button onPress={this.wordanalyzer}  title="Analyze" color="#841584"/></View>
            </View>
        <View>
            <Text style={styles.counts}>Word:{this.state.word}</Text>
            <Text style={styles.counts}>No of Consonants:{this.state.Consonants}</Text>
            <Text style={styles.counts}>No of Vowels:{this.state.Vowels}</Text>
            <Text style={styles.counts}>No of Characters {this.state.Characters}</Text>
        </View>
       <View><Text style={styles.name}>this app developed by mohamed hussein</Text></View>
        </View>
        
    )
    }
}

const styles = StyleSheet.create({   
    all: {     
        flex: 1,     
        backgroundColor: '#F5FCFF',   
      },   
      area:{
        

      },
      title: {     
          fontSize: 30,
          color: 'red',     
          textAlign: 'center',
          alignItems: 'center',     
          margin: 50,
           },   
      counts: {

          textAlign: 'left',    
          color: '#333333',     
          marginBottom: 5, 
          fontSize: 30,  
        },
      name:{
        fontSize: 15,
        color:'lightgrey',
        textAlign: 'center',
        justifyContent: 'flex-end',


      }
  });