import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Index() {
  const [licznik, setLicznik] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Zadanie 2</Text>

      <Text style={styles.counterText}>
        Wartość: {licznik}
      </Text>

      <View style={styles.btns}>
        <Button
          title="Zwiększ"
          onPress={() => setLicznik(licznik + 1)}
        />
        <Button
          title="Zmniejsz"
          onPress={() => setLicznik(licznik - 1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    color: 'brown',
    textAlign: 'center',
    marginBottom: 10,
  },
  counterText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  }
});