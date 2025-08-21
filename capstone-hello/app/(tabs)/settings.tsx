// app/(tabs)/settings.tsx
import { StyleSheet, Switch, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

// NEW: pull values & actions from Zustand store
import { useSettings } from '@/store/useSettings';

function DangerZone() {
  const resetInMemory = useSettings((s) => s.resetInMemory);

  const onReset = () =>
    Alert.alert('Reset settings?', 'This clears local storage for Settings.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Reset',
        style: 'destructive',
        onPress: async () => {
          // 1) wipe the persisted storage for *this* store
          await useSettings.persist.clearStorage();
          // 2) reset the in-memory snapshot so UI updates immediately
          resetInMemory();
          Alert.alert('Cleared', 'Settings were reset on this device.');
        },
      },
    ]);

  return <Button title="Reset local data" onPress={onReset} />;
}


export default function SettingsScreen() {
  const notifications = useSettings((s) => s.notifications);
  const darkTips = useSettings((s) => s.darkTips);
  const toggleNotifications = useSettings((s) => s.toggleNotifications);
  const toggleDarkTips = useSettings((s) => s.toggleDarkTips);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F6F6F6', dark: '#202020' }}
      headerImage={null}
    >
      <ThemedView style={styles.section}>
        <ThemedText type="title">Settings</ThemedText>
        <ThemedText type="default">Your preferences are saved on this device.</ThemedText>
      </ThemedView>

      <Row label="Notifications" value={notifications} onChange={toggleNotifications} />
      <Row label="Show productivity tips" value={darkTips} onChange={toggleDarkTips} />

      {/* Danger zone */}
      <ThemedView style={{ marginTop: 24 }}>
        <DangerZone />
      </ThemedView>
    </ParallaxScrollView>
  );
}

function Row({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: () => void;
}) {
  return (
    <ThemedView style={styles.row}>
      <ThemedText>{label}</ThemedText>
      <Switch value={value} onValueChange={onChange} />
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  section: { gap: 8, marginBottom: 12 },
  row: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
