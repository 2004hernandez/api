import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './componentes/estilo'; 
import Funciones from './componentes/funcion'; 

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aplicacion Marvel</Text>
      </View>
      <Funciones />
    </View>
  );
};

export default App;