import { Stack } from "expo-router";

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

      <Stack.Screen
        name="resetPage"
        options={{
          headerShown: false, 
        }}
      />

      <Stack.Screen
        name="registerPage"
        options={{
          headerShown: false, 
        }}
      />

      <Stack.Screen
        name="splashScreen"
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="profilePage"
        options={{
          headerShown: true,
          headerTitle: 'Profile', 
          headerStyle: {
            backgroundColor: '#3498db', 
          },
          headerTitleStyle: {
            color: '#fff', 
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: 1
          },
          headerTintColor: '#000', 
        }}
      />
      <Stack.Screen
        name="reservationPage"
        options={{
          headerShown: true,
          headerTitle: 'Reservations', 
          headerStyle: {
            backgroundColor: '#3498db', 
          },
          headerTitleStyle: {
            color: '#fff', 
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: 1
          },
          headerTintColor: '#000', 
        }}
      />

      

    </Stack>
    )
}
