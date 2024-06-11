import React, {useState} from 'react';
import {View, Pressable, Text } from 'react-native';

import { RickInput } from "../RickInput/RickInput";

import * as Clipboard from 'expo-clipboard';

import { styles } from '../RickButton/RickButtonStyle';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import generatePass from '../../services/passwordService';

export function RickButton() {
  const [pass, setPass] = useState('')

  function handleGenerateButton () {
    let generateToken = generatePass ()
    setPass(generateToken)
  }

  function handleCopy (){
    Clipboard.setStringAsync(pass)
  }
  return (
    <View style={styles.container}>

      <RickInput pass={pass}/>

      <Pressable
      style={styles.botao}
      onPress={handleGenerateButton}
      >
      <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
      style={styles.botao}
      onPress={handleCopy}
      >
      <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>

     </View>
  );
}