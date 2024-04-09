import { useEffect, useState } from "react";
import {FOOD_API} from '../constants/const';
import axios from "axios";
import FoodCard from "./FoodCard";
import getDB from "../Firebase/Firebase";
import { child, get, ref } from "firebase/database";

const FoodList = () => {
    const [foodList, setFoodList] = useState([{}]);
  
    const dbRef = ref(getDB)
    get(child(dbRef, `foodcard`)).then((snapshot) => {
      if(snapshot.exists()){
        setFoodList(snapshot.val())
      }
      else {console.log("Nothing")}
    })
    .catch((error) => {console.log(error)})
    
  
  
    return (
      <div className="container">
        {foodList?.map((item) => (
          <FoodCard id = {item.id} foodTitle={item.foodTitle} foodDescription={item.foodDescription} foodPrice={item.foodPrice} foodThumb={item.foodThumb} />
        ))}
      </div>
    );
  };
  
  export default FoodList;


  