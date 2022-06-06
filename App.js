import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import SubCategoriesScreen from './screens/SubCategoriesScreen';

const url_category = "https://www.sima-land.ru/api/v3/category/?level=1&expand=sub_categories"

const Stack = createNativeStackNavigator()

const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url_category)
      const data = await response.json()
      setData(data)
    }
    fetchData()
  })

  const fetch_request = async (url, setData) => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'} fallback={<Text>Loading...</Text>}>
        <Stack.Screen
          name="Home"
          options={{ title: 'Добро пожаловать' }}>
          {props => <HomeScreen {...props} data={data} namescreen={'1'} />}
        </Stack.Screen >
        <Stack.Screen
          name="Products"
          options={({ route }) => ({ title: route.params.title.name })}>
          {props => <ProductsScreen {...props} data={data} fetch_request={fetch_request} />}
        </Stack.Screen>
        <Stack.Screen
          name="level2"
          options={({ route }) => ({ title: route.params.title.name })}>
          {props => <SubCategoriesScreen {...props} fetch_request={fetch_request} namescreen={'2'} />}
        </Stack.Screen >
        <Stack.Screen
          name='level3'
          options={({ route }) => ({ title: route.params.title.name })}>
          {props => <SubCategoriesScreen {...props} fetch_request={fetch_request} namescreen={'3'} />}
        </Stack.Screen >
        <Stack.Screen
          name='level4'
          options={({ route }) => ({ title: route.params.title.name })}>
          {props => <SubCategoriesScreen {...props} fetch_request={fetch_request} namescreen={'4'} />}
        </Stack.Screen >
        <Stack.Screen
          name='level5'
          options={({ route }) => ({ title: route.params.title.name })}>
          {props => <SubCategoriesScreen {...props} fetch_request={fetch_request} namescreen={'5'} />}
        </Stack.Screen >
        <Stack.Screen
          name='level6'
          options={({ route }) => ({ title: route.params.title.name })}>
          {props => <SubCategoriesScreen {...props} fetch_request={fetch_request} namescreen={'6'} />}
        </Stack.Screen >
        <Stack.Screen
          name='level7'
          options={({ route }) => ({ title: route.params.title.name })}>
          {props => <SubCategoriesScreen {...props} fetch_request={fetch_request} namescreen={'7'} />}
        </Stack.Screen >
        <Stack.Screen
          name='level8'
          options={({ route }) => ({ title: route.params.title.name })}>
          {props => <SubCategoriesScreen {...props} fetch_request={fetch_request} namescreen={'8'} />}
        </Stack.Screen >
        <Stack.Screen
          name='level9'
          options={({ route }) => ({ title: route.params.title.name })}>
          {props => <SubCategoriesScreen {...props} fetch_request={fetch_request} namescreen={'9'} />}
        </Stack.Screen >
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;