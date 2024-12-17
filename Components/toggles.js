import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  Pressable 
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Ionicons } from '@expo/vector-icons';

const ReservationPicker = ({ 
  selectedDateTime, 
  setSelectedDateTime, 
  selectedPeople, 
  setSelectedPeople, 
  accentColor = '#007bff' 
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isPeopleModalVisible, setPeopleModalVisible] = useState(false);

  // Date Picker Methods
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    setSelectedDateTime(date);
    hideDatePicker();
  };

  // People Selector Methods
  const increasePeople = () => {
    setSelectedPeople(Math.min(selectedPeople + 1, 10));
  };

  const decreasePeople = () => {
    setSelectedPeople(Math.max(selectedPeople - 1, 1));
  };

  // Format date and time
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short', 
      month: 'short', 
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <View style={styles.container}>
      {/* Date Picker */}
      <TouchableOpacity 
        style={[styles.pickerButton, { borderColor: accentColor }]} 
        onPress={showDatePicker}
      >
        <Ionicons name="calendar" size={24} color={accentColor} />
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>{formatDate(selectedDateTime)}</Text>
          <Text style={styles.timeText}>{formatTime(selectedDateTime)}</Text>
        </View>
      </TouchableOpacity>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
        date={selectedDateTime}
        minimumDate={new Date()}
      />

      {/* People Selector */}
      <TouchableOpacity 
        style={[styles.pickerButton, { borderColor: accentColor }]} 
        onPress={() => setPeopleModalVisible(true)}
      >
        <Ionicons name="people" size={24} color={accentColor} />
        <Text style={styles.peopleText}>{selectedPeople} People</Text>
      </TouchableOpacity>

      {/* People Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPeopleModalVisible}
        onRequestClose={() => setPeopleModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Number of People</Text>
            <View style={styles.counterContainer}>
              <Pressable 
                style={styles.counterButton} 
                onPress={decreasePeople}
                disabled={selectedPeople <= 1}
              >
                <Text style={styles.counterButtonText}>-</Text>
              </Pressable>
              <Text style={styles.counterText}>{selectedPeople}</Text>
              <Pressable 
                style={styles.counterButton} 
                onPress={increasePeople}
                disabled={selectedPeople >= 10}
              >
                <Text style={styles.counterButtonText}>+</Text>
              </Pressable>
            </View>
            <Pressable 
              style={[styles.modalButton, { backgroundColor: accentColor }]} 
              onPress={() => setPeopleModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    width: '48%',
  },
  dateTextContainer: {
    marginLeft: 12,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 14,
    color: 'gray',
  },
  peopleText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterButton: {
    backgroundColor: '#f0f0f0',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  counterButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  modalButton: {
    width: '100%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReservationPicker;