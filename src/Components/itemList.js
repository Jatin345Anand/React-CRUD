import React from 'react';
import Item from './item';
const ItemList=(props)=>{
    return(
        <div>
           <table className="table table-bordered">
               <thead>
                   <tr>
                   <th>ID</th>
                   <th>NAME</th>
                   <th>PRICE</th>
                   <th>IMAGE</th> 
                   <th>OPERATIONS</th> 
                   </tr>
               </thead>
               <tbody>
                   {props.list.map((IO)=><Item updateLIST={props.updateITEMLIST} key={IO.id} item ={IO}/>)}
                   
               </tbody>
           </table>
        </div>
    );
}  
export default ItemList;