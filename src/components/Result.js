import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Componente responsável por exibir o resultado do IMC
const Result = ({ imc }) => {
  return (
    <View>
      {/* Só exibe o texto se o IMC existir */}
      {imc && <Text style={styles.result}> Seu IMC é: {imc}</Text>}
    </View>
  ); 
};

// Estilo do texto do resultado
const styles = StyleSheet.create({ 
  result: { 
    marginTop: 20,          // Espaço acima do texto
    fontSize: 24,           // Tamanho da fonte grande
    textAlign: 'center',    // Centraliza o texto
    color: '#333',          // Cor escura para melhor leitura
  },
});

// Exporta o componente
export default Result;