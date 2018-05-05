import React from 'react';
import Mobile from '../Models/mobile';
import ItemInput from '../Components/itemInput';
import ItemList from '../Components/itemList';
import MobileOperation from '../Models/mobileOperation';
import axios from 'axios';
export class Crud extends React.Component{
    constructor(props){
      super(props);
      this.title="CRUD ONLINE SHOP";
      this.id=0;
      this.name="";
      this.url="";
      this.price=0;
      
      this.Ip1=""; this.Ip2=""; this.Ip3="";
      this.state={
          itemArray:[],total:0,markCount:0,UnmarkCount:0
      };
      this.ItemArrayClone=[];
    }
    takeID(event){
      this.id=event.target.value;
      return this.id;
    }
    takeNAME(event){
         this.name=event.target.value;
        return this.name;
    }
    takePRICE(event){
        this.price=event.target.value;
        return this.price;
    }
    takeURL(event){
        this.url=event.target.value;
        return this.url;
    }
    add(){
        //var arr=[...state.ItemArray];
        this.ItemArrayClone=[...this.state.itemArray];
        var itemobj= MobileOperation.CreateObjItem(this.id,this.name,this.price,this.url,false,0);
        this.ItemArrayClone.push(itemobj);
        //MobileOperation.ADD(itemobj);
        this.updateCount();
    }
    updateCount(){
       console.log(`Update call....`);
      var total =this.ItemArrayClone.length;
      this.ItemArrayClone.forEach((io)=>console.log(`${io.mark}`));
      let markCount=this.ItemArrayClone.filter((IO)=>IO.mark===true).length;
      let UnmarkCount=total-markCount;       
       this.setState({itemArray:this.ItemArrayClone,total:this.ItemArrayClone.length,UnmarkCount:UnmarkCount,markCount:markCount});
     
       
    }
    takeresetid(){
        console.log(`Reset called..`);
    }
    clearALL(){
        console.log("called clearall");
         
    }
    update(event){ 
    this.ItemArrayClone.forEach((io)=>console.log(io));
    var DeleteList= this.ItemArrayClone.filter((io)=>io.mark===false);
    return DeleteList;
    }
     
    save(){
      console.log(`called save....`);
      if(window.localStorage){
          console.log(`local strorage available`);
          localStorage.setItem('details',JSON.stringify(this.state.itemArray));
      }
      else{
          console.log(`local storage not available..`);
      }
    }
    delete(){
        console.log(`ID= ${this.update()}`); 
        var UnmarkedItems= this.update();
        var um1=UnmarkedItems.length;
        var total1=this.state.itemArray.length;
        var m1=total1-um1;
        this.setState({itemArray:UnmarkedItems,UnmarkCount:um1,markCount:m1,total:total1});
    }
    ip1(event){
   this.Ip1=event.target.value;
   console.log(`${this.Ip1}`);
    }
    ip2(event){
        this.Ip2=event.target.value;
        console.log(`${this.Ip2}`);
         }
         ip3(event){
            this.Ip3=event.target.value;
            console.log(`${this.Ip3}`);
        }
    search(){
         console.log(`search`);
         var Arr= [...this.state.itemArray];
         var SearchedArr=[];
         console.log(`${this.Ip1}`);
         if(this.Ip1=="ID"){
           console.log(`${this.id}`);
           SearchedArr=Arr.filter((io)=>io.id===this.id);
           SearchedArr.forEach((io)=>console.log(io));
         }
         else if(this.Ip1=="NAME"){
           console.log(`${this.name}`);
           SearchedArr=Arr.filter((io)=>io.name===this.name);
           SearchedArr.forEach((io)=>console.log(io));  
         }
         else if(this.Ip1=="PRICE"){
          console.log(`${this.price}`);
          SearchedArr=Arr.filter((io)=>io.price===this.price);
          SearchedArr.forEach((io)=>console.log(io));  
         }
         var m= SearchedArr.filter((io)=>io.mark===true).length;
         var t= SearchedArr.length;
         var um = t-m;
         this.setState({itemArray:SearchedArr,UnmarkCount:um,markCount:m,total:t});

    }
    sort(identity){
       console.log("sort");
       console.log( `${this.Ip2}`);
       var Arr= [...this.state.itemArray];
       if(this.Ip2=="ID"){ 
           Arr.sort((io1,io2)=>io1.id-io2.id);
      }
      else if(this.Ip2=="NAME"){
        Arr.sort((io1,io2)=>io1.name-io2.name);
      }
      else if(this.Ip2=="PRICE"){
        Arr.sort((io1,io2)=>io1.price-io2.price);
      }
      var m= Arr.filter((io)=>io.mark===true).length;
      var t= Arr.length;
      var um = t-m;
      this.setState({itemArray:Arr,UnmarkCount:um,markCount:m,total:t});
   
    }
    UpdateAfterLoad(){
        console.log("in Load update...");
      //  var A=[...this.state.itemArray]
      let t=this.ItemArrayClone.length;
   let markCount=this.ItemArrayClone.filter((IO)=>IO.mark===true).length;
      let UnmarkCount=t-markCount;    
      this.setState({itemArray:this.ItemArrayClone,UnmarkCount:UnmarkCount,markCount:markCount,total:t});
//console.log(`${A.length}`);    
}
DoPromise1(){
    var pr= this.DoPromise();
    var LL=[];
    pr.then(function(result) {
        console.log("result is......",result); 
    result.json().then(function(data){
        console.log("in promis data=",data);
        MobileOperation.PrepareItem(data);
        LL= MobileOperation.GetItem();
           LL.forEach((io)=>console.log("promise LL",io));
           
       });
           
    }, function(err) {
        console.log(err); // Error: "It broke"
      });
      console.log("LL in Dopromis1 = ",LL.length);
      this.ItemArrayClone=LL;
    this.FillLoadState(this.ItemArrayClone);
} 
 FillLoadState(A){
     console.log(`${A.length}`);
 }
DoPromise(){
    var pr = new Promise(function(resolve, reject) {
        fetch("http://localhost:5000/mobiles").then(success,fail);
        function success(response){
          //  printdata(response);
          resolve(response);
        //   console.log(response.json());  
          //response.json().then(s1,f);
            // function s1(s){
            //     resolve(s);
            //  }
            // function f(e){
            //      reject(Error(e));       
            // }
         }
            function fail(err){
                 reject(err); 
            }     
         
      });
return pr;
}
    load(){
        console.log("loaded...");
        this.ItemArrayClone=[...this.state.itemArray];
         var LL=[];
       if(this.Ip3==="FROM JSON"){
           this.DoPromise1();
        
       }
       
       else if(this.Ip3==="FROM MYSTORAGE"){
        if(window.localStorage){
            console.log(`local strorage available`);
        //    localStorage.setItem('details',JSON.stringify(this.state.itemArray));
        console.log(`${localStorage.details}`);
        var js= JSON.parse(localStorage.details);
        MobileOperation.PrepareItem(js);
        MobileOperation.GetItem().forEach((io)=>console.log(io));
     LL=MobileOperation.GetItem();
     console.log(`${LL.length}`);    
    }
        else{
            console.log(`local storage not available..`);
        }
       }
      this.ItemArrayClone=LL;
      console.log("Item array clone..................*******",LL,this.ItemArrayClone);
      // this.UpdateAfterLoad();
      // this.setState({itemArray:LL,UnmarkCount:um,markCount:m,total:t});
      this.updateCount();
    }
    update2(){
        console.log(`update2 called..`);
        var MarkedItem=this.ItemArrayClone.filter((io)=>io.mark===true);
        var itemobj= MobileOperation.CreateObjItem(this.id,this.name,this.price,this.url,false,0);
        
    }
    upload(){
        console.log(`called upload..`);
        this.ItemArrayClone.forEach((io)=>console.log(io));
    }
    render(){;
        return(
            <div className="container">
            <div></div>
          <h1 className="alert-info">{this.title}</h1>
          <ItemInput takeid={this.takeID.bind(this)} takename={this.takeNAME.bind(this)} 
          takeprice={this.takePRICE.bind(this)}
          takeResetID={this.takeresetid.bind(this)}
           takeurl={this.takeURL.bind(this)}
           upload={this.upload.bind(this)}
           inputstate1={this.ip1.bind(this)}
          inputstate2={this.ip2.bind(this)}
          inputstate3={this.ip3.bind(this)}
           load={this.load.bind(this)}
           add={this.add.bind(this)}
          save={this.save.bind(this)}
          delete={this.delete.bind(this)}
          search={this.search.bind(this)}
          sort={this.sort.bind(this)} 
          update={this.update2.bind(this)}    
       clearALL={this.clearALL.bind(this)}/>
          <h3>Total :{this.state.total} Mark : {this.state.markCount} UnMark : {this.state.UnmarkCount}</h3>
          <ItemList list={this.state.itemArray}
          updateITEMLIST={this.update.bind(this)}
       />
            </div>
            
        );
    }
}