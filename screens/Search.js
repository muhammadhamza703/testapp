import  React,{useState} from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import Header from './Header';
import axios from 'axios';

const Search = () => {

  const [city, setCity]=useState('')
  const [cities, setCities]=useState([])

  const fetchCities= (text) => {
    setCity(text)
    // fetch("https://autocomplete.wunderground.com/aq?query="+text)
    // .then(item => item.json())
    // .then(cityData=>{
    //     setCities(cityData)
    // })
    // .catch((error)=>{
    //     console.log("error",error)
    // })
    axios.get('https://autocomplete.wunderground.com/aq?query='+text)
    .then((response)=> {
        console.log(response);
    })
    .catch((error)=> {
        console.log(error.response);
    });

  }

  return (
    <View style={{flex: 1}}>
        <Header name ="Search Screen"/>
        <TextInput 
        label="City Name"
        theme={{colors:{
            primary:"#00aaff"
        }}}
        value={city}
        onChangeText={(text)=> fetchCities(text)}
        />
         <Button 
        //  icon="content-save" 
         mode="contained" 
         onPress={() => console.log('Pressed')}
         theme={{colors:{
            primary:"#00aaff"
        }}}
        style={{margin:20}}
        >
            <Text style={{color:"white"}}>Submit</Text>
        </Button>
    </View>
  );
};

export default Search;