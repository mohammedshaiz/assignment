import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,FlatList} from 'react-native';


function MyList(props) {
  const { items } = props;

  const renderItem = ({ item }) => (
    <View style={{padding: 10}}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}


export default function App() {

const items = [
    'mylist item 1',
    'mylist item 2',
    'mylist item 3',
    'mylist item 4',
    'mylist item 5',
  ];



  return (
    <View style={styles.container}>
      <Text>Welcome to react native!..
       <Button
              color="orange"
              title="click me"
              onPress={() => consol.log("Button tapped")}
              />
      
      
      
      </Text>
      <StatusBar style="auto" />
       
       <MyList items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
