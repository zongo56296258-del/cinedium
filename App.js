
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const categories = ["Films", "Séries", "Anime", "Nollywood"];

  const subscribe = () => {
    Alert.alert(
      "Abonnement Cinédium",
      "Choisis ton abonnement :\n\n500 FCFA / semaine\n1 500 FCFA / mois",
      [{ text: "Fermer" }]
    );
  };

  const watchFilm = (title) => {
    Alert.alert(
      "Abonnement requis",
      `Abonne-toi pour regarder ${title}.`,
      [
        { text: "Annuler", style: "cancel" },
        { text: "S'abonner", onPress: subscribe },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🎬 Cinédium</Text>
        <Text style={styles.subtitle}>
          Ton univers de films et séries
        </Text>
      </View>

      <TouchableOpacity
        style={styles.subscription}
        onPress={subscribe}
      >
        <Text style={styles.subscriptionTitle}>
          ⭐ Abonne-toi à Cinédium
        </Text>
        <Text style={styles.subscriptionText}>
          500 FCFA / semaine
        </Text>
        <Text style={styles.subscriptionText}>
          1 500 FCFA / mois
        </Text>
        <Text style={styles.buttonText}>
          Voir les abonnements
        </Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Catégories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <View style={styles.category} key={category}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.heading}>Films disponibles</Text>

      {["Film à découvrir 🎬", "Action et aventure 🔥", "Nollywood 🎞️"].map(
        (title) => (
          <TouchableOpacity
            style={styles.film}
            key={title}
            onPress={() => watchFilm(title)}
          >
            <Text style={styles.filmTitle}>{title}</Text>
            <Text style={styles.filmText}>
              Appuie pour regarder
            </Text>
            <Text style={styles.watchButton}>
              🔒 S'abonner pour regarder
            </Text>
          </TouchableOpacity>
        )
      )}

      <Text style={styles.footer}>
        © 2026 Cinédium
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    padding: 20,
  },
  header: {
    marginTop: 30,
    marginBottom: 25,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    color: "#B8C0D9",
    fontSize: 16,
    marginTop: 8,
  },
  subscription: {
    backgroundColor: "#D4A72C",
    padding: 20,
    borderRadius: 16,
    marginBottom: 25,
  },
  subscriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  subscriptionText: {
    fontSize: 16,
    color: "#111827",
    marginTop: 6,
  },
  buttonText: {
    backgroundColor: "#111827",
    color: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 10,
  },
  category: {
    backgroundColor: "#242D45",
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
  },
  categoryText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  film: {
    backgroundColor: "#1A2235",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  filmTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  filmText: {
    color: "#B8C0D9",
    marginTop: 8,
  },
  watchButton: {
    color: "#FFD166",
    marginTop: 15,
    fontWeight: "bold",
  },
  footer: {
    color: "#7D89A8",
    textAlign: "center",
    marginVertical: 30,
  },
});
    
