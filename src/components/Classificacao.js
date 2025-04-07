import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Classificacao = ({ classe, imc }) => {
//Converte em numero
const imcNum = parseFloat(imc);

//Define a classificação para ser aplicado o style correspondente
if (imcNum <= 18.5){
    return (
        <View style={styles.EstiloClasse}>
          {classe && <Text style={styles.classe1}> Sua classificação é: {classe}</Text>}
        </View>
    );
} else if (imcNum <= 24.9) {
    return (
        <View style={styles.EstiloClasse}>
          {classe && <Text style={styles.classe2}> Sua classificação é: {classe}</Text>}
        </View>
      );
} else if (imcNum <= 29.9) {
    return (
        <View style={styles.EstiloClasse}>
          {classe && <Text style={styles.classe3}> Sua classificação é: {classe}</Text>}
        </View>
      );
} else if (imcNum <= 34.9) {
    return (
        <View style={styles.EstiloClasse}>
          {classe && <Text style={styles.classe4}> Sua classificação é: {classe}</Text>}
        </View>
      );
} else if (imcNum <= 39.9) {
    return (
        <View style={styles.EstiloClasse}>
          {classe && <Text style={styles.classe5}> Sua classificação é: {classe}</Text>}
        </View>
      );
} else {
    return (
        <View style={styles.EstiloClasse}>
          {classe && <Text style={styles.classe6}> Sua classificação é: {classe}</Text>}
        </View>
      );
}

};

//Estilização de cada classe de peso, mudando a cor e tamanho da letra
const styles = StyleSheet.create({
  classe1: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#9b63e7',
  },
  classe2: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#257d30',
  },
  classe3: {
    marginTop: 10,
    fontSize: 22,
    textAlign: 'center',
    color: '#c79213',
  },
  classe4: {
    marginTop: 10,
    fontSize: 24,
    textAlign: 'center',
    color: '#bfba00',
  },
  classe5: {
    marginTop: 10,
    fontSize: 26,
    textAlign: 'center',
    color: '#e89c45',
  },
  classe6: {
    marginTop: 10,
    fontSize: 32,
    textAlign: 'center',
    color: '#991414',
  },
  EstiloClasse: { 
      backgroundColor: '#cad9f2',
      padding: 16, 
      borderRadius: 10,
  }
});

export default Classificacao;