import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* (tab) here is needed to let expo go to the tab folder */}
      {/* Expo gonna found (tabs)/_layout -> kind of index.js or module*/}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
