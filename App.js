import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>Hola, Coder!</Text>
      <Text style={{color: '#fff'}}>Buen fin de semana!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC7063',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
