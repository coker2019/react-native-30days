import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>Maurice Coker</Text>

        <Text style={styles.title}>Mobile Developer in Training</Text>

        <Text style={styles.bio}>
          I am learning to build mobile applications using React Native,
          TypeScript and Expo. I enjoy creating useful applications
          and solving problems with technology.
        </Text>

        <Text style={styles.skillsTitle}>My Skills</Text>

        <Text style={styles.skills}>
          React • JavaScript • TypeScript • Next.js • Git
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Hello!", "Thanks for viewing my profile.")}
        >
          <Text style={styles.buttonText}>Contact Me</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101827",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#374151",
    width: "100%",
    padding: 32,
    borderRadius: 8,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },

  title: {
    color: "#60A5FA",
    marginTop: 8,
    fontSize: 16,
  },

  bio: {
    color: "#D1D5DB",
    marginTop: 20,
    lineHeight: 24,
  },

  skillsTitle: {
    color: "#FFFFFF",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18,
  },

  skills: {
    color: "#D1D5DB",
    marginTop: 10,
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#16A34A",
    padding: 14,
    borderRadius: 10,
    marginTop: 25,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});