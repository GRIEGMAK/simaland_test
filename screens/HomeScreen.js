import React from 'react';
import { View, ScrollView } from 'react-native';
import CategoryCard from './../components/CategoryCard';
import Layout from './../components/Layout';

const HomeScreen = (props) => {
  const { data, namescreen } = props
  const renderData = data && data.items ? data.items.map(item => (
    <CategoryCard data={item} key={item.id} namescreen={namescreen} />
  )) : undefined
  return (
    <View>
      <ScrollView>
        <Layout>
          {renderData}
        </Layout>
      </ScrollView>
    </View>
  );
}


export default HomeScreen;