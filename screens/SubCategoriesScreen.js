import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import CategoryCard from './../components/CategoryCard';
import Layout from './../components/Layout';

const SubCategoriesScreen = (props) => {
  const [isLoadingCategory, setIsLoadingCategory] = useState(true)
  const [isLoadingCats, setIsLoadingCats] = useState(true)
  const [subCategory, setSubCategory] = useState()
  const [subCats, setSubCats] = useState()

  const { fetch_request, route, id, namescreen } = props
  let id_subcategory = route.params.id.id
  if (isLoadingCategory) {
    fetch_request(`https://www.sima-land.ru/api/v3/category/${id_subcategory}/?expand=sub_categories`, setSubCategory)
    setIsLoadingCategory(false)
  }

  if (subCategory && isLoadingCats) {
    const { sub_categories } = subCategory
    let ids_categories = sub_categories[0].id
    sub_categories.map((cat, i) => i > 0 ? ids_categories += ("," + cat.id) : ids_categories)
    fetch_request(`https://www.sima-land.ru/api/v3/category/?id=${ids_categories}&expand=sub_categories,is_leaf`, setSubCats)
    setIsLoadingCats(false)
  }
  let data = subCats
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


export default SubCategoriesScreen;