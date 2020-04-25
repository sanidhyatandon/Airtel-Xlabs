import React, { useState, useEffect } from 'react';

import apiConfig from '../../api.config';
import FoodItem from '../../components/FoodItem';
import TextInput from '../../common/TextInput';

import { searchPlaceholder } from '../../constants';
import Loader from '../../common/Loader';

const FoodList = () => {
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const searchDishes = (searchTerm, foodList) => {
    let filteredFoodItem = [];
    foodList.map(food => {
      if (food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        filteredFoodItem.push(food);
      }
      return false;
    });
    return filteredFoodItem;
  };

  useEffect(() => {
    setIsLoading(true);
    const {
      getFoodList: { url: getFoodListURL }
    } = apiConfig;
    if (searchTerm.length === 0) {
      fetch(getFoodListURL)
        .then(response => response.json())
        .then(data => {
          setFoodList(data);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length > 3) {
      const filteredFoodItem = searchDishes(searchTerm, foodList);
      setFoodList(filteredFoodItem);
    }
  }, [searchTerm]);

  return (
    <div>
      <TextInput
        className="space-around"
        type="text"
        placeholder={searchPlaceholder}
        onChange={event => {
          event.preventDefault();
          handleChange(event);
        }}
        value={searchTerm}
      />
      <div className="food-list">
        {foodList && foodList.length ? (
          <ul>
            {foodList.map(food => {
              const { id } = food;
              return <FoodItem key={id} data={food} />;
            })}
          </ul>
        ) : (
          <div> No Data Available</div>
        )}
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default FoodList;
