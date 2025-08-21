// store/useSettings.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SettingsState = {
  notifications: boolean;
  darkTips: boolean;
  toggleNotifications: () => void;
  toggleDarkTips: () => void;
  /** Reset current session state to initial defaults (does not touch disk) */
  resetInMemory: () => void;
};

const initial = {
  notifications: true,
  darkTips: false,
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      ...initial,
      toggleNotifications: () =>
        set((s) => ({ notifications: !s.notifications })),
      toggleDarkTips: () => set((s) => ({ darkTips: !s.darkTips })),
      resetInMemory: () => set({ ...initial }),
    }),
    {
      name: 'settings-storage',              // key in AsyncStorage
      version: 1,                            // bump if you change shape
      storage: createJSONStorage(() => AsyncStorage),
      // (optional) only persist a subset:
      // partialize: (s) => ({ notifications: s.notifications, darkTips: s.darkTips }),
    }
  )
);
