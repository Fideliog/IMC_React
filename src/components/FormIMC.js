import { View, TextInput, Button, StyleSheet } from 'react-native'; 
import Result from './Result';
import { useState } from "react";

const FormIMC = () => { 
  const [peso, setPeso] = useState(''); 
  const [altura, setAltura] = useState(''); 
  const [imc, setImc] = useState(null);
  const [classe, setClass] = useState(null);

  const calcularIMC = () => { 
    if (peso && altura) { 
      const alturaMetros = parseFloat(altura) / 100; 
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); 
      setImc(imcCalculado); 
    } 
  };

  const calcularClass = () => {
    if ( imc <= 18.5 ) {
      const classificacao = <Text> Abaixo do peso </Text>;
    } else {
      if ( imc > 18.5 && imc <= 24.9 ){
        const classificacao = <Text> Peso normal </Text>;
      } else {
        if ( imc >= 25 && imc <= 29.9 ){
          const classificacao = <Text> Sobrepeso </Text>;
        } else {
          if( imc >= 30 && imc <= 34.9 ){
            const classificacao = <Text> Obesidade grau 1 </Text>;
          } else {
            if( imc >= 35 && imc <= 39.9 ){
              const classificacao = <Text> Obesidade grau 2 </Text>;
            } else {
              if ( imc >= 40){
                const classificacao = <Text> Obesidade grau 3 (obesidade morbida) </Text>;
              }
            }
          }
        }
      }
    }
      setClass(classificacao);
  }

    return ( 
      <View style={styles.formContainer}> 
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)" 
          keyboardType="numeric" 
          value={peso} 
          onChangeText={setPeso}
        /> 
        <TextInput 
          style={styles.input}
          placeholder="Altura (cm)" 
          keyboardType="numeric" 
          value={altura} 
          onChangeText={setAltura}
        />
        <Button title="Calcular IMC" onPress={calcularIMC} /> 
        {imc && <Result imc={imc} />} 
      </View>
    ); 
};

const styles = StyleSheet.create({ 
    formContainer: { 
      backgroundColor: '#f0f0fe', 
      padding: 16, 
      borderRadius: 10, 
    },
    input: { 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      marginBottom: 12, 
      paddingHorizontal: 8, 
      borderRadius: 5, 
    }, 
});

export default FormIMC;