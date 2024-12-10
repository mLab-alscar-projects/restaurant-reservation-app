import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

// Beginning of Functional component
const PeopleTimeDate = ({selectedDateTime,handleChange, selectedValue,setSelectedValue}) => {
  
  // States
  const [isModalVisible, setIsModalVisible] = useState(false);
 
 
 
//  Functions to change states
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };


  return (
    <View style={styles.container}>
      {/* Main Content */}
      <TouchableOpacity onPress={toggleModal} style={styles.row}>
        <Icon name="users" size={24} color="#4CAF50" style={styles.icon} />
        <Icon name="clock-o" size={24} color="#2196F3" style={styles.icon} />
        <Icon name="calendar" size={24} color="#FF5722" style={styles.icon} />
      </TouchableOpacity>

      {/* Modal Popup */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Date and Time Picker */}
            <Text style={{textAlign:"center", fontSize:20}}>Select Date and Time</Text>

            <View>
              <DateTimePicker
                display="spinner"
                value={selectedDateTime}
                mode="datetime"
                onChange={handleChange}
              />
              {/* {console.log(selectedDateTime)} */}
            </View>
            
              <Text style={{textAlign:"center", fontSize:20}}>Select Number of People</Text>
            <View>   
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                style={{ height: 50, width: 150 }}
              >
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                  (number) => (
                    <Picker.Item
                      key={number}
                      label={`${number}`}
                      value={number}
                    />
                  )
                )}
                {console.log(selectedValue)}
              </Picker>
            </View>

            {/* Close Popup Model button */}
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 400,
    height: 550,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#97CBDC",
    alignItems: "center",
    flexDirection: "column",
    
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    backgroundColor: "#FF5722",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    top: 480,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PeopleTimeDate;
