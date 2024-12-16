import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const TermsAndConditions = ({ setModalpolicies, modalpolicies }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={modalpolicies}
      onRequestClose={() => setModalpolicies(false)}
    >
      <SafeAreaView style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.modalTitle}>Terms and Conditions</Text>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalpolicies(false)}
            >
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView 
            style={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.introText}>
              Welcome to our application. Please read these terms carefully before using our service.
            </Text>

            {/* Sections */}
            {[
              {
                title: "1. Use of Service",
                content: "You must not misuse this app in any way. This includes attempting to gain unauthorized access or disrupting the app's functionality. Responsible and ethical use is expected from all users."
              },
              {
                title: "2. Privacy",
                content: "Your privacy is paramount. We ensure that your personal data is collected, stored, and used securely, adhering to strict data protection standards and only for the intended purposes of providing our service."
              },
              {
                title: "3. Liability",
                content: "While we strive to provide the best possible service, we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this application."
              }
            ].map((section, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text style={styles.sectionContent}>{section.content}</Text>
              </View>
            ))}

            {/* Contact Information */}
            <View style={styles.contactSection}>
              <Text style={styles.contactTitle}>Need Help?</Text>
              <View style={styles.contactDetails}>
                <Text style={styles.contactText}>📧 support@example.com</Text>
                <Text style={styles.contactText}>📞 +123 456 7890</Text>
                <Text style={styles.contactText}>🌐 www.example.com</Text>
              </View>
            </View>
          </ScrollView>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.declineButton]}
              onPress={() => setModalpolicies(false)}
            >
              <Text style={styles.buttonText}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.acceptButton]}
              onPress={() => setModalpolicies(false)}
            >
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '92%',
    height: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f4f4f4',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 30,
    color: '#999',
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  introText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  contactSection: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  contactDetails: {
    alignItems: 'center',
  },
  contactText: {
    fontSize: 15,
    color: '#007bff',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f4f4f4',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#28a745',
  },
  declineButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default TermsAndConditions;