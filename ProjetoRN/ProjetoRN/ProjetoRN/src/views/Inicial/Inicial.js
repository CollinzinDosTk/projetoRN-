import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import estiloInicial from './estiloInicial';
import { Ionicons } from '@expo/vector-icons';

function Inicial ({navigation}) {

    const abrirJogadores = () =>{
    navigation.navigate('Jogadores')        
    }

    const abrirPerfil = () =>{
    navigation.navigate('Perfil')        
    }


    return (

        <ImageBackground source={require('../../../assets/imagens/csgofundo.jpg')} style={estiloInicial.fundo}>

        <View style={estiloInicial.container}>

            
            <View style = {estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Counter Strike</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirJogadores}>
                    <Text style={estiloInicial.botaoTexto}>Jogadores</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirPerfil}>
                    <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                </TouchableOpacity>

            </View>

        </View>

        </ImageBackground>
    )
}
export default Inicial;