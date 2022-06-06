import React from 'react';
import { View } from 'react-native';
import Layout from './../components/Layout';
import ProductCard from './../components/ProductCard';


const ProductsScreen = (props) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [products, setProducts] = React.useState()

  const { fetch_request, route } = props

  const id_cat = route.params.id.id

  if (isLoading) {
    fetch_request(`https://www.sima-land.ru/api/v3/item/?category_id=${id_cat}`, setProducts)
    setIsLoading(false)
  }

  let data = products


  const renderData = data && data.items ? data.items.map(item => (
    <ProductCard data={item} key={item.id} />
  )) : undefined
  return (
    <View>
      <Layout>
        {renderData}
      </Layout>
    </View>
  );
}

export default ProductsScreen;