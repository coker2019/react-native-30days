import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProfileCard from "../components/ProfileCard";

const developers = [
  {
    id: "1",
    name: "Maurice Coker",
    role: "Mobile Developer in Training",
    location:"Lagos, Nigeria",
    bio: "Learning to build mobile apps with React Native, Expo and TypeScript.",
    skills: ["React", "TypeScript", "Expo", "Git"],
  },
  {
    id: "2",
    name: "Alex Johnson",
    role: "Frontend Developer",
    location: "Abuja, Nigeria",
    bio: "Building responsive user interfaces and modern web applications.",
    skills: ["React", "JavaScript", "CSS", "Next.js"],
  },
  {
    id: "3",
    name: "Sarah Williams",
    role: "Backend Developer",
    location: "Ibadan, Nigeria",
    bio: "Working with APIs, databases and backend application services.",
    skills: ["Node.js", "Express", "MongoDB", "REST API"],
  },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Developer Directory</Text>

      <Text style={styles.subtitle}>
        Meet developers and explore their skills.
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {developers.map((developer) => (
           <ProfileCard
           key={developer.id}
           name={developer.name}
           role={developer.role}
           location={developer.location}
           bio={developer.bio}
           skills={developer.skills}
         />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101827",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 24,
  },
  list: {
    paddingBottom: 30,
  },
});