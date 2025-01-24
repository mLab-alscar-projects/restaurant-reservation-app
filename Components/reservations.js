import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Animated,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const ReservationCard = ({ reservation }) => (
  <Animated.View style={styles.reservationCard}>
    <View style={styles.cardHeader}>
      <Text style={styles.restaurantName}>{reservation.restaurantName}</Text>
      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>Confirmed</Text>
      </View>
    </View>
    
    <View style={styles.divider} />
    
    <View style={styles.cardContent}>
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Guest</Text>
          <Text style={styles.value}>{reservation.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Tables</Text>
          <Text style={styles.value}>{reservation.numberOfTables}</Text>
        </View>
      </View>
      
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.valueHighlight}>R{parseFloat(reservation.amount).toFixed(2)}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>{reservation.location}</Text>
        </View>
      </View>
      
      <View style={styles.dateContainer}>
        <Text style={styles.label}>Reservation Date</Text>
        <Text style={styles.dateValue}>
          {new Date(reservation.dateOfPayment).toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    </View>
  </Animated.View>
);

const Reservations = ({ setReservationModal, reservationModal }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animatedValue] = useState(new Animated.Value(0));

  const reservationsnum = reservations.length
  console.log(reservationsnum)

  const fetchReservations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const userId = await AsyncStorage.getItem('userID');
      const token = await AsyncStorage.getItem("userToken");

      if (!userId || !token) {
        setError('Please log in to view your reservations');
        return;
      }

      const response = await fetch(
        `https://lumpy-clover-production.up.railway.app/api/user-reservations/${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch reservations');
      }

      const data = await response.json();
      setReservations(Array.isArray(data) ? data : []);
      
    } catch (error) {
      setError('Unable to load reservations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (reservationModal) {
      fetchReservations();
      Animated.spring(animatedValue, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }).start();
    } else {
      animatedValue.setValue(0);
    }
  }, [reservationModal]);

  const handleClose = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setReservationModal(false);
    });
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#6366F1" />
          <Text style={styles.loadingText}>Loading your reservations...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchReservations}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (reservations.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Reservations Yet</Text>
          <Text style={styles.emptySubText}>Your upcoming reservations will appear here</Text>
        </View>
      );
    }

    return (
      <ScrollView 
        style={styles.reservationList}
        showsVerticalScrollIndicator={false}
      >
        {reservations.map((reservation, index) => (
          <ReservationCard 
            key={reservation._id || index} 
            reservation={reservation} 
          />
        ))}
      </ScrollView>
    );
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={reservationModal}
      onRequestClose={handleClose}
    >
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[
            styles.modalContainer,
            {
              transform: [
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
              ],
              opacity: animatedValue,
            },
          ]}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Your Reservations {reservationsnum}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          {renderContent()}
        </Animated.View>
      </View>
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
    width: width * 0.9,
    maxHeight: '80%',
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#64748B',
    fontWeight: '600',
  },
  reservationList: {
    padding: 16,
  },
  reservationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },
  statusBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 12,
  },
  cardContent: {
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 4,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
  },
  valueHighlight: {
    fontSize: 16,
    color: '#6366F1',
    fontWeight: '700',
  },
  dateContainer: {
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 12,
  },
  dateValue: {
    fontSize: 16,
    color: '#334155',
    fontWeight: '600',
  },
  centerContainer: {
    padding: 40,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#64748B',
    fontWeight: '500',
  },
  errorText: {
    fontSize: 16,
    color: '#DC2626',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: '#334155',
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
  },
});

export default Reservations;