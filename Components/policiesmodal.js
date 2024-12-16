import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const TermsAndConditions = ({setModalpolicies,modalpolicies}) => {
 
  return (
    <View style={styles.container}>
      {/* Button to Open Terms & Conditions */}
      {/* <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalpolicies(true)}
      >
        <Text style={styles.openButtonText}>Help & Support</Text>
      </TouchableOpacity> */}

      {/* Terms and Conditions Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalpolicies}
        onRequestClose={() => setModalpolicies(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Terms and Conditions</Text>

            <ScrollView style={styles.contentContainer}>
              <Text style={styles.contentText}>
                Welcome to our application. By using this app, you agree to the
                following terms and conditions:
              </Text>
              <Text style={styles.contentHeading}>1. Use of Service</Text>
              <Text style={styles.contentText}>
                You must not misuse this app in any way. This includes
                attempting to gain unauthorized access or disrupting the app’s
                functionality.
              </Text>
              <Text style={styles.contentHeading}>2. Privacy</Text>
              <Text style={styles.contentText}>
                Your privacy is important to us. We ensure that your data is
                stored securely and used only for the intended purposes.
              </Text>
              <Text style={styles.contentHeading}>3. Liability</Text>
              <Text style={styles.contentText}>
                We are not liable for any damages or losses resulting from your
                use of this app.
              </Text>
              <Text style={styles.contentHeading}>Help & Support</Text>
              <Text style={styles.contentText}>
                For help and support, please contact us at:
              </Text>
              <Text style={styles.contactInfo}>Email: support@example.com</Text>
              <Text style={styles.contactInfo}>Phone: +123 456 7890</Text>
              <Text style={styles.contactInfo}>Website: www.example.com</Text>
            </ScrollView>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.acceptButton]}
                onPress={() => setModalpolicies(false)}
              >
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.declineButton]}
                onPress={() => setModalpolicies(false)}
              >
                <Text style={styles.buttonText}>Decline</Text>
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
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    marginBottom: 20,
  },
  contentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
    marginBottom: 15,
  },
  contentHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  contactInfo: {
    fontSize: 14,
    color: '#007BFF',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#28a745',
  },
  declineButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TermsAndConditions;
