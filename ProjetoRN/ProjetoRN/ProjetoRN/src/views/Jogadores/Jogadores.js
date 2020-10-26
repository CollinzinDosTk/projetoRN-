import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import estiloJogadores from './estiloJogadores';
import Lista from '../../views/Lista/Lista';
import {MaterialIcons} from '@expo/vector-icons';


function Jogadores( {navigation} ) {

    const [jogadores , setJogadores] = useState ([

        {
            id: '1',
            Nome: 'Gabriel "Fallen"',
            descricao: 'Gabriel “FalleN” Toledo de Alcântara Sguario (Itararé, São Paulo, 30 de maio de 1991) é jogador de Counter-Strike: Global Offensive da MIBR. Ex-atleta da SK Gaming, Fallen foi um dos responsáveis por levar o Brasil de volta ao cenário mundial de CS, ao levar a equipe ao ESL One: Katowice e conquistar o status de Legend no primeiro mundial do time. O awper é considerado um dos maiores in game leaders da história do jogo, foi eleito o segundo melhor player do mundo em 2016 e o quarto em 2017.',
            time_atual: 'inativo da MIBR',
            grandes_feitos: 'Bi campeão de major, foi considerado o melhor awp do csgo, alem de ser um dos players mais influentes do cenario',
            foto: require ('../../../assets/imagens/fallen.jpg'),
        },

            {
            id: '2',
            Nome: 'Marcelo "coldzera"',
            descricao: 'Marcelo Augusto David, mais conhecido como coldzera, é um jogador profissional brasileiro de Counter-Strike: Global Offensive que joga pela equipe da FaZe Clan.',
            time_atual: 'Faze Clan',
            grandes_feitos: 'Bi campeão de major, 2 vezes melhor jogador do mundo (e-sports)',
            foto: require ('../../../assets/imagens/coldzera.jpg'),
        },

            {
            id: '3',
            Nome: 'Pedro "ASPX"',
            descricao: 'Foi um jogador de cs 1.6, porem por contas de suas polemicas jogadas, o jogador foi pego usando trapaças e teve seu nome manchado no cenario pela frase "xitou ou não xitou". hoje em dia é apenas um streamer. ',
            time_atual: 'Nenhum',
            grandes_feitos: 'apenas vergonha em sua carreira',
            foto: require ('../../../assets/imagens/aspx.jpg'),
        },
       
            { 
            id: '4',
            Nome: 'Epitacio "Taco" de Melo',
            descricao: 'Epitácio “TACO” de Melo Pessoa Filho (nascido em Recife, Pernambuco, no dia 24 de janeiro de 1995) é um jogador de Counter-Strike: Global Offensive.  TACO já jogou pela Luminosity Gaming e SK Gaming, onde conquistou dois títulos de Major, ao lado de Gabriel “Fallen” Toledo e Marcelo “coldzera” David. ',
            time_atual: 'inativo da Mibr',
            grandes_feitos: 'Bi-Campeão de major ao lado de fallen e coldzera, fora outros diversos títulos',
            foto: require ('../../../assets/imagens/taco.jpg'),
            
        },

    ])

    const voltar = () => {
        navigation.goBack();
    }

    return (
        
        <View style={estiloJogadores.container}>


            <FlatList 
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={jogadores}
            renderItem = {({item}) => <Lista data={item}/>}

            />

        </View>
    )

}
export default Jogadores;