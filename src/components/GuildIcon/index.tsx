import React from 'react';
import { Image } from  'react-native'

import { styles } from './styles';

export function GuildIcon() {
    const uri = 'http://www.micronational.football/img/discord.png';
    return(
        <Image 
            source={{ uri }}
            style= {styles.image}
            resizeMode="cover"
        />
      
    );
}