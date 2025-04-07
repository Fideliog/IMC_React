// Importa os componentes principais do React Native
import { StyleSheet, View } from 'react-native'; 

// Importa os componentes criados para título e formulário
import Title from './src/components/Title'; 
import FormIMC from './src/components/FormIMC';

// Componente principal do app
export default function App() { 
  return ( 
    <View style={styles.container}> 
      <Title />
      <FormIMC />
    </View> 
  ); 
}

// Estilo do container principal
const styles = StyleSheet.create({ 
  container: { 
    flex: 1,                 
    justifyContent: 'center', 
    padding: 16,             
    backgroundColor: '#fff',
  }, 
});