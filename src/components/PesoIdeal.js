// Importa os componentes necessários do React Native
import { View, Text, StyleSheet } from 'react-native'; 

// Componente que exibe o peso ideal com base na altura
const PesoIdeal = ({ PesoMin, PesoMax }) => {
  return ( 
    <View style={styles.EstiloPesoIdeal}>
      {/* Título da seção */}
      <Text style={styles.EstiloPesoIdealText}> Peso ideal para sua altura: </Text>

      {/* Exibe o peso mínimo ideal se estiver definido */}
      {PesoMin && <Text style={styles.EstiloPesoIdealText}> Peso mínimo: {PesoMin}</Text>}

      {/* Exibe o peso máximo ideal se estiver definido */}
      {PesoMax && <Text style={styles.EstiloPesoIdealText}> Peso máximo: {PesoMax}</Text>}
    </View>
  ); 
};

// Estilo do componente
const styles = StyleSheet.create({ 
  EstiloPesoIdeal: { 
    backgroundColor: '#a5a5e8',
    padding: 16, 
    borderRadius: 10, 
  },
  EstiloPesoIdealText: {
    fontSize: 18,
    color: '#f5f5fb',
  }
});

// Exporta o componente para ser usado em outros arquivos
export default PesoIdeal;