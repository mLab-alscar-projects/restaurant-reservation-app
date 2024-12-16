import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

const FeedbackForm = ({modalform,setModalform}) => {
 
  const [feedback, setFeedback] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log({ feedback, description });
    // Add your submit logic here (e.g., send to an API)
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Open Feedback Form Button */}
     

      {/* Feedback Form Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalform}
        onRequestClose={() => setModalform(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Feedback Form</Text>
            <Text style={styles.modalSubtitle}>
              We value your feedback. Please share your thoughts or let us know
              how we can help!
            </Text>

            {/* Feedback Type Input */}
            <TextInput
              style={styles.input}
              placeholder="Feedback Type (e.g., Bug, Suggestion)"
              value={feedback}
              onChangeText={setFeedback}
            />

            {/* Feedback Description Input */}
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe your issue or feedback"
              value={description}
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={4}
            />

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalform(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  openButton: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
  },
  openButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#28a745',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackForm;
