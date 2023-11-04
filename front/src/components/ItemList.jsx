import React from "react";
import Item from "./GoalItem"


const ItemList = ({datas}) => {
    

    return(
        <div>

            <div>
            { datas.map((data, index) => 
            <Item number={index+1} data={data} key={data.id}/>) }
            </div>

        </div>
    
    )

}

export default ItemList;