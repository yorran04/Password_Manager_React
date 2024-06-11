import React from 'react';
import { TextInput } from 'react-native';

import { styles } from '../RickInput/RickInputStyle';

interface RickTextInputProps{
  pass:string
}

export function RickInput(props: RickTextInputProps) {
  return (
    
        <TextInput style={styles.RickInput}
        placeholder='pass'
        value={props.pass}
        >

        </TextInput>
    
  );
}