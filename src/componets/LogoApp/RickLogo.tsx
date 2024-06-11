import React from 'react';
import { View , Text, Image} from 'react-native';

import { styles } from '../LogoApp/LogoStyle';
import RLogo from '../../../assets/logo.png';

export function LogoApp() {
  return (
    <View>
        <Text style={styles.title}>
            Pass Generator
        </Text>
        <Image 
        source={RLogo} 
        style={{
            resizeMode:'contain',
            height:250,
        }} >

        </Image>
    </View>
  );
}