import React, {useState} from 'react';
import Home from './screens/home';
import {View, Text} from 'react-native';
 
import Navigator from './routes/homeStack'

export default function App() {
  return (
    <Navigator/>
    // <Home />

  );
}

// export default function App(){
//   return(
//     <View>
//       <Text>Neha</Text>
//     </View>
//   )
// }