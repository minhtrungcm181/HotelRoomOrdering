import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import getDB from "../Firebase/Firebase";
import { child, get, ref } from "firebase/database";

const ItemContext = createContext({} as ItemContext)

export function useItemContext(){
  return useContext(ItemContext)
}



type ItemProviderProps ={
    children:ReactNode
}
type Item = {
  id: string
  foodPrice: number
  foodTitle: string
  foodDescription: string
  foodThumb: string
}

export const ItemProvider = ({children} : ItemProviderProps) => {
    
    const [foodList, setFoodList] = useState<Item[]>([]);
  
    const dbRef = ref(getDB)
    get(child(dbRef, `foodcard`)).then((snapshot) => {
      if(snapshot.exists()){
        setFoodList(snapshot.val())
      }
      else {console.log("Nothing")}
    })
    .catch((error) => {console.log(error)})
    
    
    return <ItemContext.Provider value = {{foodList}}>
    {children}
    </ItemContext.Provider>
    
}