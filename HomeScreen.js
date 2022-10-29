import React, {useState, useRef, useEffect} from 'react';
import Card from './styles/card';
import {Button, View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useSearchStore} from './stores';

export default function HomeScreen({navigation, search, setSearch}) {
  const clear = useSearchStore((state) => state.clear);

  const [searched, setSearched] = useState(false);
  const onMountRef = useRef(false);

  useEffect(() => {
    if (onMountRef.current === false) {
      onMountRef.current = true;
      return;
    }
    setSearched(false);
    clear();
    navigation.navigate('Search');
  }, [searched]);
  return (
    <View style={{flexDirection: 'column', padding: 10}}>
      <Card>
        <Searchbar
          onBlur={() => setSearched(true)}
          placeholder='Search for products'
          value={search}
          onChangeText={(search) => {
            useSearchStore.setState({search: search});
          }}
          onIconPress={() => {
            setSearched(true);
          }}
        />
      </Card>
      <Card>
        <Button title={'Camera'} onPress={() => navigation.navigate('Camera')}></Button>
      </Card>
    </View>
  );
}
