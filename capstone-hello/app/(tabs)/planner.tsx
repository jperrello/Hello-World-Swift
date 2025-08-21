import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function PlannerScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E6F4EA', dark: '#12351E' }}
      headerImage={null}
    >
      <ThemedView style={styles.section}>
        <ThemedText type="title">Planner</ThemedText>
        <ThemedText type="default">
          A simple space for your weekly plan. Hook this up to Calendar/Tasks later.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Today</ThemedText>
        <ThemedText>- Gym (Basketball + Lifts)</ThemedText>
        <ThemedText>- Capstone: 45–90 min</ThemedText>
        <ThemedText>- Spanish: 30–45 min</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Upcoming</ThemedText>
        <ThemedText>- Film a short video</ThemedText>
        <ThemedText>- “Coach” reflection session</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  section: { gap: 8, marginBottom: 12 },
  card: { gap: 6, paddingVertical: 6 },
});
