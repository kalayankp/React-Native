import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then(response => response.json())
        .then(data => setProducts(data));
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategoryClick(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}

    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
      />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home Page</Text>
        <Text>Welcome to our store!</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        horizontal
      />
      {selectedCategory && (
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    header: {
      marginBottom: 20,
      alignItems: 'center',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    categoryItem: {
      padding: 10,
      margin: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      width: 100, // Update width to 150
      height: 80, // Update height to 80
      justifyContent: 'center', // Center text vertically
      alignItems: 'center',
     
    },
    productItem: {
      flex: 1,
      margin: 5,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
      alignItems: 'center',
    },
    productImage: {
      width: 100,
      height: 100,
      marginBottom: 5,
    },
  });
  

export default Home;
