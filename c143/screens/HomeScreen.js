import React ,{Component} from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import {RFValue} from "react-native-responsive-fontsize";
import axios from "axios";

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            movieDetails:{}
        };
    }

componentDidMount(){
    this.getMovie();
    
}

timeConvert(num){
    var hours = Math.floor(num/60);
    var minutes= num%60;
    return `${hours} hrs ${minutes} mins`;

}
getMovie = ()=>{
const url = "http://localhost:5000/get-movie";
axios
.get(url)
.then(response=>{
    
})

}     


}