import { Stack } from "expo-router";

// Page Navigation Layout
export default function RootLayout(){
    return (
    <Stack
    screenOptions={{
      headerShown: false,
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
        name="checkoutPage"
        options={{
          headerShown: true,
          headerTitle: 'Payment', 
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
        name="paymentPage"
        options={{
          headerShown: false, 
        }}
      />

      <Stack.Screen
        name="mapPage"
        options={{
          headerShown: true,
          headerTitle: 'Maps', 
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

      {/* <Stack.Screen
        name="checkoutPage"
        options={{
          headerShown: false, 
        }}
      /> */}
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
            backgroundColor: '#d3ddda', 
          },
          headerTitleStyle: {
            color: '#333', 
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
