/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree';

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg';
import Logo from './src/assets/logo.svg';
import { styled } from 'nativewind';

const StyledStripes = styled(Stripes);

const StyledLogo = styled(Logo);

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if(!fontsLoaded){
    return null
  };

  return (
    <ImageBackground source={blurBg}
     className='bg-gray-900 relative flex-1 items-center px-8 py-10'
     imageStyle={{position: 'absolute', left: '-100%'}}
     >
      <StyledStripes className='absolute left-2'/>

      <View className='flex-1 items-center justify-center gap-6'>
        <StyledLogo className='w-48 h-48'/>
        <View className='space-y-2'>
          <Text className='text-center font-title text-2xl leading-tight text-gray-50'>Sua cápsula do tempo</Text>
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-2'>
            <Text className='font-alt text-sm uppercase text-black'>COMEÇAR A CADASTRAR</Text>
        </TouchableOpacity>
      </View>

      <Text className='text-center font-body text-gray-50 text-sm leading-relaxed'>Feito com 💜 no NLW da Rocketseat</Text>

      <StatusBar style="light"/>
    </ImageBackground>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   text: {
//     color: '#fff',
//     fontSize: 48,
//     fontWeight: '700',
//   }
// });