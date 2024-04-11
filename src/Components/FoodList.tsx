import { useContext, useEffect, useState } from "react";
import {FOOD_API} from '../constants/const';
import axios from "axios";
import FoodCard from "./FoodCard";
import { ItemContext, useItemContext } from "../context/ItemContext";


const FoodList = () => {
  

  const {foodList} = useItemContext()
  
    return (
      <div className="container">
        {foodList?.map((item) => (
          <FoodCard id = {item.id} foodTitle={item.foodTitle} foodDescription={item.foodDescription} foodPrice={item.foodPrice} foodThumb={item.foodThumb} />
        ))}
      </div>
    );
  };
  
  export default FoodList;


  