import { StyleSheet, Text, View } from "react-native";
import SkillBadge from "./SkillBadge";

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  location: string;
};

export default function ProfileCard({
  name,
  role,
  bio,
  skills,
  location,
}: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.role}>{role}</Text>

      <Text style={styles.location}>{location}</Text>

      <Text style={styles.bio}>{bio}</Text>

      <Text style={styles.skillsTitle}>Skills</Text>

     <View style={styles.skillsContainer}>
        {skills.map((skill) => (
            <SkillBadge key={skill} skill ={skill} />
        ) )}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1F2937",
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  role: {
    color: "#60A5FA",
    fontSize: 15,
    marginTop: 6,
  },
  location: {
    color: "#60A5FA",
    fontSize: 15,
    marginTop: 6,
  },
  bio: {
    color: "#D1D5DB",
    lineHeight: 22,
    marginTop: 14,
  },
  skillsTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});