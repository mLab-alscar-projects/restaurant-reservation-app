import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const {width} = Dimensions.get("window")
// Styles for every component
const styles = StyleSheet.create({

// Parent for Register Component
Parent: 
{
flex: 1,
justifyContent: 'space-between',
alignItems: 'center',
flexDirection: 'row',
backgroundColor: '#f9f9f9',
padding: 0,
margin: 0,
},
// ENDS

// FIRST
firstChild: 
{

},

// ENDS


// SECOND
secondChild: 
{

},

// ENDS


// LAST
lastChild: 
{

},

// Splash Screen Styling
  ParentSplash: 
  {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      // backgroundColor: '#f9f9f9',
      padding: 0,
      margin: 0,
  },
  // ENDS

  // FIRST
  firstChildSplash: 
  {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      gap: 30
  },

  // ENDS
  
  
  // IMAGE
  image: 
  {
      height: '50%',
      width: '50%',
      resizeMode: 'contain',
  },

  // ENDS


  // TEXT
  TextSplash: 
  {
      fontSize: 24,
      letterSpacing: 3,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      width: '100%',
      textAlign: 'center',
      color: '#231934'
  },




  // PARENT LOGIN START
  Parentlogin: 
  {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#f9f9f9',
  padding: 0,
  margin: 0,
  gap: 10
  },
 
  firstChildlogin: 
  {
      width: '100%',
      height: "40%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CBDC',
      position: 'relative',
  },

  siblinglogin: 
  {
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40
  },

  skewedBottomlogin: 
  {
      position: 'absolute',
      bottom: -25,
      width: "100%",
      height: 50,
      backgroundColor: '#F9F9F9',
      transform: [{ rotate: '-2deg' }], 
    //   borderBottomLeftRadius: 10, 
    //   borderBottomRightRadius: 10,
      zIndex: 10
    },

  secondChildlogin: 
  {
      width: '100%',
      height: "60%",
      paddingHorizontal: 40,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15
  },

  inputWrapperlogin: 
  {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      paddingVertical: 10,
  },
  
  labellogin: 
  {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
  },

  labelTextlogin: 
  {
      fontSize: 16,
      letterSpacing: 1,
      color: 'rgba(0, 0, 0,.5)'
  },
  
  inputlogin: 
  
{
      fontSize: 16,
      borderBottomWidth: 3,
      color: 'rgba(0, 0, 0,.5)',
      borderColor: 'rgba(0, 0, 0,.5)',
      width: "100%",
      height: 35,

  },
  
buttonWrapperlogin: 
 
 {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
  },

buttonlogin: 

{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#7BC5C1'
  },

buttonTextlogin: 
  
{
      width: '100%',
      fontSize: 18,
      letterSpacing: 1,
      color: 'rgba(0, 0, 0,.5)',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase'
  },

lastChildlogin: 
  
  {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 7
  },

forgottenPasswordTextlogin: 
 
{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 7,
      fontSize: 15,
      color: 'rgba(0, 0, 0,.5)',
      letterSpacing: 1,
  },


// PARENT REGISTER
Parentregister: 
  {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#f9f9f9',
  padding: 0,
  margin: 0,
  gap: 10
  },
 

firstChildregister: 
  {
      width: '100%',
      height: "40%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CBDC',
      position: 'relative',
  },


siblingregister: 
  {
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40
  },


skewedBottomregister: 
  {
    position: 'absolute',
      bottom: -25,
      width: "100%",
      height: 50,
      backgroundColor: '#F9F9F9',
      transform: [{ rotate: '-2deg' }], 
    //   borderBottomLeftRadius: 10, 
    //   borderBottomRightRadius: 10,
      zIndex: 10
    },


secondChildregister: 
  {
      width: '100%',
      height: "60%",
      paddingHorizontal: 40,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15
  },


inputWrapperregister: 
  {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      paddingVertical: 10,
  },

  
labelregister: 
  {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
  },


labelTextregister: 
  {
      fontSize: 16,
      letterSpacing: 1,
      color: 'rgba(0, 0, 0,.5)'
  },
  

inputregister: 
{
      fontSize: 16,
      borderBottomWidth: 3,
      color: 'rgba(0, 0, 0,.5)',
      borderColor: 'rgba(0, 0, 0,.5)',
      width: "100%",
      height: 35,

  },

  
buttonWrapperregister: 
 {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
  },


buttonregister: 
{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#7BC5C1'
  },


buttonTextregister: 
{
      width: '100%',
      fontSize: 18,
      letterSpacing: 1,
      color: 'rgba(0, 0, 0,.5)',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase'
  },



// Reset Page
Parentreset: 
  {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#f9f9f9',
  padding: 0,
  margin: 0,
  gap: 10
  },
 

firstChildreset: 
  {
      width: '100%',
      height: "40%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CBDC',
      position: 'relative',
  },


siblingreset: 
  {
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40
  },


skewedBottomreset: 
  {
    position: 'absolute',
      bottom: -25,
      width: "100%",
      height: 50,
      backgroundColor: '#F9F9F9',
      transform: [{ rotate: '-2deg' }], 
    //   borderBottomLeftRadius: 10, 
    //   borderBottomRightRadius: 10,
      zIndex: 10
    },


secondChildreset: 
  {
      width: '100%',
      height: "60%",
      paddingHorizontal: 40,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15
  },


inputWrapperreset: 
  {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      paddingVertical: 10,
  },

  inputreset: 
  {
        fontSize: 16,
        borderBottomWidth: 3,
        color: 'rgba(0, 0, 0,.5)',
        borderColor: 'rgba(0, 0, 0,.5)',
        width: "100%",
        height: 35,
  
    },  


labelTextreset: 
  {
      fontSize: 16,
      letterSpacing: 1,
      color: 'rgba(0, 0, 0,.5)'
  },
  
buttonWrapperreset: 
 {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
  },


buttonreset: 
{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#7BC5C1'
  },


buttonTextreset: 
{
      width: '100%',
      fontSize: 18,
      letterSpacing: 1,
      color: 'rgba(0, 0, 0,.5)',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase'
  },



//   Home Page Styling
HomeParent:{
    flex:1,
    // backgroundColor:"pink",
    flex: 1,
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    gap:5
    
},

usercontainer:{
    marginTop:10,
    width:"100%",
    // backgroundColor:"red",
    height:75,
    justifyContent:"flex-end",
    flexDirection: 'row',
    alignItems: 'center',
    padding:20
},

searchbar:{
    gap:10,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
},

searchbarinput: {
    width: '50%', // Adjust width to fit nicely on the screen
    height: 50, // Set height for consistency
    paddingHorizontal: 10, // Inner spacing for text
    borderColor: '#ccc', // Subtle border color
    borderWidth: 1, // Border thickness
    borderRadius: 8, // Rounded corners
    backgroundColor: '#fff', // White background
    fontSize: 16, // Font size for text input
    color: '#333', // Text color
  },

mapbutton:{
    height:50,
    alignItems:"center",
    justifyContent:"center"
},

homeTextheading:{
    marginTop:20,
    padding:20
},
cardscontainer:{
    justifyContent:"center",
    flexDirection: 'column',
    alignItems: 'center',
    padding:20,
    gap:30
},
cards:{
    height:150,
    backgroundColor:"purple",
    width:"100%",
    borderRadius:20
}



})

export default styles