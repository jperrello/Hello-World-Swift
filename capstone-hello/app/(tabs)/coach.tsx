import { StyleSheet, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function CoachScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F3E8FF', dark: '#2B1840' }}
      headerImage={null}
    >
      <ThemedView style={styles.section}>
        <ThemedText type="title">Coach</ThemedText>
        <ThemedText type="default">
          A hub for check-ins, guidance, and quick prompts. We’ll wire logic later.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Focus Areas</ThemedText>
        <ThemedText>• Quit smoking (habit plan)</ThemedText>
        <ThemedText>• Social media limits</ThemedText>
        <ThemedText>• Capstone progress</ThemedText>
        <ThemedText>• Spanish practice streak</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Quick Actions</ThemedText>
        <Button title="Start 25-min Focus" onPress={() => {}} />
        <Button title="Reflect (2 min)" onPress={() => {}} />
        <Button title="Log Progress" onPress={() => {}} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  section: { gap: 8, marginBottom: 12 },
  card: { gap: 10, paddingVertical: 6 },
});
