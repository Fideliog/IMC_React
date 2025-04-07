// Importação dos componentes necessários do React Native
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; 

// Importação de componentes personalizados
import Result from './Result';
import Classificacao from './Classificacao';
import PesoIdeal from './PesoIdeal';

// Importação do useState para gerenciamento de estado
import { useState } from "react";

const FormIMC = () => { 
  // Estados para armazenar os valores de entrada do usuário
  const [peso, setPeso] = useState(''); 
  const [altura, setAltura] = useState(''); 

  // Estado para armazenar o IMC calculado
  const [imc, setImc] = useState(null);

  // Estado para armazenar a classificação do IMC
  const [classe, setClass] = useState(null);

  // Estado para exibir mensagens de erro
  const [erro, setErro] = useState('');

  // Estados para armazenar o peso ideal mínimo e máximo
  const [PesoMin, setPesoMin] = useState(''); 
  const [PesoMax, setPesoMax] = useState(''); 

  // Função chamada ao clicar no botão "Calcular IMC"
  const calcularIMC = () => {
    // Limpa mensagens de erro anteriores
    setErro('');

    // Converte os valores de entrada para números
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
  
    // Validação dos dados de entrada
    if (!peso || isNaN(pesoNum) || pesoNum <= 0) {
      setErro('Insira um peso válido.');
      return;
    }
  
    if (!altura || isNaN(alturaNum) || alturaNum <= 0) {
      setErro('Insira uma altura válida.');
      return;
    }

    // Variável auxiliar para armazenar a classificação
    let classificacao = "";

    if (peso && altura) { 
      // Converte altura para metros
      const alturaMetros = parseFloat(altura) / 100; 

      // Calcula o IMC
      const imcCalc = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalc);

      // Converte IMC para número e define a classificação correspondente
      const imcNum = parseFloat(imcCalc);
      if (imcNum <= 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imcNum <= 24.9) {
        classificacao = "Peso normal";
      } else if (imcNum <= 29.9) {
        classificacao = "Sobrepeso";
      } else if (imcNum <= 34.9) {
        classificacao = "Obesidade grau 1";
      } else if (imcNum <= 39.9) {
        classificacao = "Obesidade grau 2";
      } else {
        classificacao = "Obesidade grau 3 (obesidade mórbida)";
      }

      setClass(classificacao);
    }

    // Converte altura para número e calcula o peso ideal mínimo e máximo
    const alturanum = parseFloat(altura);
    const alturaMetros = alturanum / 100;
    setPesoMin((18.5 * (alturaMetros * alturaMetros)).toFixed(2)); 
    setPesoMax((24.9 * (alturaMetros * alturaMetros)).toFixed(2));
  };

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

      {/* Exibe mensagem de erro, se existir */}
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <Button title="Calcular IMC" onPress={calcularIMC} /> 

      {/* Exibe o IMC, classificação e peso ideal se houver resultado */}
      {imc && <Result imc={imc} />}
      {classe && <Classificacao classe={classe} imc={imc} />}
      {PesoMin && PesoMax && <PesoIdeal PesoMin={PesoMin} PesoMax={PesoMax}/>}
    </View>
  ); 
};

// Estilização dos elementos da tela
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
  erro: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default FormIMC;