import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const ItemInput =(props)=>{
  return(
      <div> 
    
          <div class="form-group"> 
          <label for="id">--:ITEM ID:--</label>
          <input type="text" class="form-control" onReset={props.takeResetID} onChange={props.takeid} id="id" placeholder="ID"/>
          </div>
          <div class="form-group">
          <label for="password">--:ITEM NAME:--</label>
          <input type="text"  onChange={props.takename} class="form-control" id="password" placeholder="NAME"/>
         </div> 
         <div class="form-group">
          <label for="price">--:ITEM PRICE:--</label>
          <input type="text" class="form-control" onChange={props.takeprice} id="price" placeholder="PRICE"/>
          </div>
          <div class="form-group">
          <label for="url">--:ITEM URL:--</label>
          <input type="text" class="form-control" onChange={props.takeurl} id="url" placeholder="URL"/>
         </div>
         <button type="button" onClick={props.add} class="btn btn-primary">ADD</button>&nbsp; &nbsp;
         <button type="button" onClick={props.save} class="btn btn-success">SAVE</button>&nbsp; &nbsp;
         <button type="button" onClick={props.delete} class="btn btn-info">DELETE</button>&nbsp; &nbsp;
         <button id="sort" onClick={props.sort} class="btn btn-success">SORT</button>
 
 <select id="inputState" onChange={props.inputstate2} >
  <option></option>
  <option >ID</option>
  <option>NAME</option>
  <option>PRICE</option>
  
</select>

&nbsp; &nbsp;
 <button  onClick={props.search}  id="search" class="btn btn-primary">SEARCH</button>
 
 <select id="inputState2" onChange={props.inputstate1} >
 <option></option>
  <option >ID</option>
  <option>NAME</option>
  <option>PRICE</option>
  
</select>

&nbsp; &nbsp;
 <button id="load" onClick={props.load} class="btn btn-secondary">LOAD</button>

 <select id="inputState3"  onChange={props.inputstate3}>
 <option></option>
  <option  >FROM JSON</option>
  <option>FROM MYSTORAGE</option>
</select>
          <button type="button"  onClick={props.update} class="btn  btn-info">UPDATE</button>&nbsp; &nbsp;
          <button onClick={props.upload} type="reset" class="btn btn-secondary">UPLOAD</button>&nbsp; &nbsp;
                 <button onClick={props.clearALL} type="reset" class="btn btn-primary">CLEAR ALL</button>&nbsp; &nbsp;
                 
      </div>
  );
}
export default ItemInput;