import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useLocalSearchParams } from 'expo-router';

export default function GoogleMap() {
  // Hooks
  const { data } = useLocalSearchParams();
  
  // Parse the stringified data
  const parsedData = JSON.parse(data);

  // Mapping through parsed data to extract name and coordinates
  const RestaurantLocations = parsedData.map(({ name, coordinates }) => ({ name, coordinates }));

  // Debugging data from props
  console.log(RestaurantLocations); 

  // Set initial region to a central location in South Africa
  const initialCoordinates = {
    latitude: -30.5595, 
    longitude: 22.9375,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: initialCoordinates.latitude,
          longitude: initialCoordinates.longitude,
          latitudeDelta: 5.0,  // Adjust zoom level for a country-wide view
          longitudeDelta: 5.0, // Adjust zoom level for a country-wide view
        }}
      >
        {/* Render a Marker for each restaurant */}
        {RestaurantLocations.map((location, index) => (
          <Marker
            key={index}
            coordinate={location.coordinates} 
            title={location.name} 
            description={`Location: ${location.coordinates.latitude}, ${location.coordinates.longitude}`}
          />
        ))}
      </MapView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1, // Ensure the map fills the container
  },
});
