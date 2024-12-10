import { Stack } from "expo-router"

// Page Navigation Layout
export default function RootLayout(){
    return (
    <Stack
    screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen
        name="loginPage"
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="homePage"
        options={{
          headerShown: false, 
        }}
      />

    </Stack>
    )
}