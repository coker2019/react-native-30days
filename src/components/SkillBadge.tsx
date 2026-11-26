import { StyleSheet, Text, View } from "react-native";

type SkillBadgeProps = {
    skill: string;
}


export default  function skillBadge ({ skill }: SkillBadgeProps){
 return(
    <View style={styles.badge}>
    <Text style={styles.skillText}>{skill}</Text>
  </View>
 );
}

const styles = StyleSheet.create({
    badge: {
      backgroundColor: "#374151",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
      marginRight: 8,
      marginBottom: 8,
    },
    skillText: {
      color: "#FFFFFF",
      fontSize: 13,
    },
  });