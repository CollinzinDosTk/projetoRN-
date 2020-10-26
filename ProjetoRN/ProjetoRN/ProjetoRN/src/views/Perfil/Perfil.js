import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil( {navigation} ) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        
        <View style={estiloPerfil.fotoContainer}>
            <Image style={estiloPerfil.foto} source = {require('../../../assets/imagens/perfilcollin.jpg')} />
            <Text style={estiloPerfil.nome}>Pedro Henrique cavalcante Collin</Text>

            <Text style={estiloPerfil.infos}>Sala: 3°MI-A</Text>
            <Text style={estiloPerfil.infos}>Matéria: TM</Text>
            <Text style={estiloPerfil.infos}>Professor: Ralfe</Text>
            <Text style={estiloPerfil.infos}>Escola: Etec de Hortolândia</Text>
            <Text style={estiloPerfil.i}></Text>

            <Image style={estiloPerfil.foto} source = {require('../../../assets/imagens/perfilnathan.jpg')} />
            <Text style={estiloPerfil.nome}>Nathan Fonseca da Silva</Text>

            <Text style={estiloPerfil.infos}>Sala: 3°MI-A</Text>
            <Text style={estiloPerfil.infos}>Matéria: TM</Text>
            <Text style={estiloPerfil.infos}>Professor: Ralfe</Text>
            <Text style={estiloPerfil.infos}>Escola: Etec de Hortolândia</Text>
        </View>
    )
}
export default Perfil;