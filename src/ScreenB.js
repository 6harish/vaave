import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function ScreenB({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Main');
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 4, backgroundColor: '#000'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={onPressHandler}>
              <LinearGradient
                colors={['#52f599', '#1b5998']}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 25,
                  margin: 5,
                  borderRadius: 10,
                  flex: 1,
                }}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>
                      Name :{' '}
                    </Text>
                    <Text>{item.name}</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>
                      User Name :{' '}
                    </Text>
                    <Text>{item.username}</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>
                      Email :{' '}
                    </Text>
                    <Text>{item.email}</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>
                      Website :{' '}
                    </Text>
                    <Text>{item.website}</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>
                      Company :{' '}
                    </Text>
                    <Text>{item.company.name}</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
