import React from "react";
import {Text, View, } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from '../screens/style';

import { LogoApp } from "../componets/LogoApp/RickLogo";

import {RickButton} from "../componets/RickButton/RickButton";


export default function Home (){
    return(
       < View style={styles.Appcontainer}>
    
        <View style={styles.logoContainer}>
        <LogoApp/>
        </View>

        <View style={styles.Inputer}>
        
        <RickButton/>
        </View>
        <StatusBar style="auto"/>
       </View>
    )
}



  