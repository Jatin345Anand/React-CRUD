import React from 'react';
// const Item =(props)=>{
   
class Item extends React.Component{
    constructor(){ 
      super();
      this.state={
          markClass:""
      };
    }
 uddateClass(){
    let myclass=this.props.item.mark?"red":"";
    this.setState({markClass:myclass});
 } 
render(){
    return(
        <tr className={this.state.markClass}> 
            <td>{this.props.item.id}</td>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.price}</td>
            <td><img src={this.props.item.url} class="img-rounded" />   </td>
            <td>
             <button id="del" type="button" onClick={()=>{
                this.props.item.toggle();
                this.uddateClass();
                this.props.updateLIST();
            }} class="btn btn-danger icon">D</button>&nbsp; &nbsp;
            <button id="mark"   type="button" class="btn btn-danger icon">M</button>
            </td>
        </tr> 
    );
}
  
} 
export default Item;