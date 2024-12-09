import React from 'react';
import { Text, View,Pressable, TextInput, ScrollView} from 'react-native';
import styles from '../StylesSheet/styles';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';

const HomePage = () => {
 
  return (
    <View style={styles.HomeParent}>
      <SafeAreaView/>
      <StatusBar style="dark"/>
      
      <View style={styles.HomeParent}>
         
          <View style={styles.usercontainer}>
            <Pressable>
                <Text>
                  <FontAwesome5 name='user-circle' size={40} color={'rgba(0, 0, 0,.5)'}/>
                  </Text>
            </Pressable>
          </View>

          <View style={styles.searchbar}>
            <TextInput
             style={styles.searchbarinput}
             placeholder="Search by restaurent name..." 
            />
            <Pressable style={styles.mapbutton}>
              <Text><Foundation name='map' size={40} color={'rgba(0, 0, 0,.5)'}/></Text>
            </Pressable>
          </View>
          <View style={styles.homeTextheading}>
            <Text style={{fontSize:26, fontWeight:"bold"}}>Restaurents near by</Text>
          </View>
          
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.cardscontainer}>
              <Pressable
              style={styles.cards}
              >
              

              </Pressable>
              <Pressable
              style={styles.cards}
              ></Pressable>
              <Pressable
              style={styles.cards}
              ></Pressable>
            </View>
          </ScrollView>
         


      </View>
    </View>
  );
};



export default HomePage;