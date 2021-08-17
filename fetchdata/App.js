// import React, {Component} from 'react';
// import {Text, View, FlatList} from 'react-native';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource: [],
//     };
//   }


//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState({
//           dataSource: responseJson,
//         });
//         console.log("neha",responseJson)

//       });
//     }

//   _renderItem = ({item, index}) => {
//     return (
//       <View>
//         <Text>{`${item.id}${item.title}`}</Text>
//       </View>
//     );
//   };

//   render() {
//     let {dataSource} = this.state;
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <FlatList
//           data={dataSource}
//           renderItem={this._renderItem}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }

//-----------------------

//using async await
// import React, {Component} from 'react';
// import {Text, View, FlatList} from 'react-native';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

// async componentDidMount() {
//     let resp=await fetch('https://jsonplaceholder.typicode.com/posts')
//     let respJson= await resp.json()
//     this.setState({
//       data:respJson
//     })
//     console.warn('data',respJson)
//   }

//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text style={{fontSize:100}}>API Call</Text>
//         <FlatList
//         data={this.state.data}
//         renderItem={({item})=><Text>{item.id}{item.title}{item.body}</Text>}
//         />
//       </View>
//     );
//   }
// }

//--------------------------
//image set
// import React, {useEffect, useState} from 'react';
// import {View, Text,FlatList} from 'react-native';
// function App() {
//   const [data, setData] = useState();
//   function getdata() {
//     return fetch('https://randomuser.me/api/?results=20').then(response =>
//       response.json(),
//     );
//   }
//   useEffect(() => {
//     getdata().then(profile => {
//       setData(profile.results);
//       console.log(profile, 'nnnnnnnn');
//     });
//   }, []);
//   console.log(data, 'neeeeeeeeeeeeee');

//   return (
//     <View>
//     <FlatList
//     data={data}
//     renderItem={({item,index}) => (
//       <View key={index} >
//       {
//         item?.picture?.large ?
//        <Image style={styles.image} source={{uri:item.picture.large}} /> :
//        <Text>No Profile Picture</Text>
//       }
//       </View>
//     )}
//     />
//     </View>
//   );
// }
// export default App;
//-------------
