
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
  const categories = [
    { name: "Films", icon: "🎬" },
    { name: "Séries", icon: "📺" },
    { name: "Anime", icon: "🍿" },
    { name: "Nollywood", icon: "🎥" },
  ];

  const showSubscription = () => {
    Alert.alert(
      "Abonnement Cinédium",
      "500 FCFA / semaine\n1 500 FCFA / mois",
      [{ text: "Fermer" }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>CINÉDIUM</Text>
        <Text style={styles.tagline}>
          Ton univers de divertissement
        </Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Bienvenue sur Cinédium 🎬
        </Text>
        <Text style={styles.bannerText}>
          Découvre des films, des séries et des anime.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={showSubscription}
        >
          <Text style={styles.buttonText}>
            S'abonner maintenant
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Explorer les catégories</Text>

      {categories.map((category) => (
        <TouchableOpacity
          key={category.name}
          style={styles.category}
          onPress={showSubscription}
        >
          <Text style={styles.icon}>{category.icon}</Text>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryTitle}>
              {category.name}
            </Text>
            <Text style={styles.categoryText}>
              Découvrir les contenus
            </Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.plans}>
        <Text style={styles.heading}>Nos abonnements</Text>

        <View style={styles.plan}>
          <Text style={styles.planTitle}>Abonnement hebdomadaire</Text>
          <Text style={styles.price}>500 FCFA / semaine</Text>
        </View>

        <View style={styles.plan}>
          <Text style={styles.planTitle}>Abonnement mensuel</Text>
          <Text style={styles.price}>1 500 FCFA / mois</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={showSubscription}
        >
          <Text style={styles.buttonText}>
            Choisir mon abonnement
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        © 2026 Cinédium
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1020",
  },

  header: {
    paddingTop: 55,
    paddingHorizontal: 22,
    paddingBottom: 20,
  },

  logo: {
    color: "#F5C451",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  tagline: {
    color: "#BFC3D5",
    fontSize: 14,
    marginTop: 6,
  },

  banner: {
    margin: 16,
    padding: 24,
    borderRadius: 20,
    backgroundColor: "#242B48",
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  bannerText: {
    color: "#D1D5E5",
    fontSize: 15,
    marginTop: 12,
    lineHeight: 22,
  },

  button: {
    backgroundColor: "#F5C451",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#111426",
    fontSize: 15,
    fontWeight: "bold",
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 14,
  },

  category: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C223A",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 14,
  },

  icon: {
    fontSize: 30,
    marginRight: 14,
  },

  categoryInfo: {
    flex: 1,
  },

  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  categoryText: {
    color: "#AEB4CC",
    fontSize: 13,
    marginTop: 4,
  },

  arrow: {
    color: "#F5C451",
    fontSize: 28,
  },

  plans: {
    backgroundColor: "#181E34",
    margin: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },

  plan: {
    backgroundColor: "#242B48",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
  },

  planTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  price: {
    color: "#F5C451",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },

  footer: {
    color: "#8D94AE",
    textAlign: "center",
    margin: 25,
  },
});

