import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator, StatusBar } from 'react-native';
// Używamy ikon wbudowanych w Expo
import { FontAwesome5 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { supabase } from '../db-config';

export default function App() {
  const [quote, setQuote] = useState('Ładowanie cytatu...');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Funkcja pobierająca losowy cytat
  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from('quotes').select('*');
      if (error) throw error;

      if (data && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuote(randomQuote.body);
        setAuthor(randomQuote.author);
      } else {
        setQuote('Brak cytatów w bazie.');
        setAuthor('');
      }
    } catch {
      setQuote('Nie udało się pobrać cytatu. Sprawdź swoje połączenie z siecią.');
      setAuthor('');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />

      {/* Niebieski nagłówek */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Zad 1 - Aplikacja z cytatami</Text>
      </View>

      {/* Główna zawartość */}
      <View style={styles.container}>

        {/* Kontener na cytat */}
        <View style={styles.quoteContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#2196F3" />
          ) : (
            <View>
              <Text style={styles.quoteText}>{quote}</Text>
              {author ? <Text style={styles.authorText}>— {author}</Text> : null}
            </View>
          )}
        </View>

        {/* Przycisk losowania */}
        <TouchableOpacity
          style={styles.button}
          onPress={fetchQuote}
          disabled={isLoading}
        >
          <View style={styles.iconBox}>
            <FontAwesome5 name="question" size={12} color="#FFC107" />
          </View>
          <Text style={styles.buttonText}>Nowy cytat</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

// Style dopasowane do zrzutu ekranu z zadania
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Jasnoszare tło widoczne na screenie
  },
  header: {
    backgroundColor: '#2196F3', // Kolor niebieski z zadania
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 50, // Odsunięcie od górnej krawędzi (na notcha/pasek statusu)
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  quoteContainer: {
    width: '100%',
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    minHeight: 180,
    justifyContent: 'center',
    marginBottom: 50,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#4A4A4A',
    lineHeight: 24,
  },
  authorText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'right',
    marginTop: 10,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFC107', // Żółty kolor przycisku
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    elevation: 2, // Delikatny cień na Androidzie
    shadowColor: '#000', // Cień na iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  iconBox: {
    backgroundColor: '#2196F3', // Niebieskie tło ikonki
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: '#2196F3', // Niebieski tekst
    fontWeight: 'bold',
    fontSize: 16,
  },
});