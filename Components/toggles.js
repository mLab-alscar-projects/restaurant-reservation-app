import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PeopleTimeDate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name="users" size={24} color="#4CAF50" style={styles.icon} />
        <Icon name="clock-o" size={24} color="#2196F3" style={styles.icon} />
        <Icon name="calendar" size={24} color="#FF5722" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default PeopleTimeDate;

