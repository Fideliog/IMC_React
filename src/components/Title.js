import { Text, StyleSheet } from 'react-native';

//titulo do aplicativo
const Title = () => { 
    return ( 
        <Text style={styles.title}>Calculadora de IMC</Text> 
    ); 
};

//Estilo do titulo
const styles = StyleSheet.create({ 
    title: {
      fontSize: 32, 
      fontweight: 'bold', 
      textAlign:  'center',
      marginBottom: 24,
    },
});

//exporta o componente
export default Title;