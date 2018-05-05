import Mobile from './mobile';
const MobileOperation={
    MobileLIST:[],
    MobileLISTforCart:[],
    MobileLISTforDelete:[],
    ADD:function(mobile){
        this.MobileLIST.push(mobile);
    },
    AddtoMark:function(id){
    
        //this.MobileLISTforDelete.push(m);
      var list1 = this.MobileLIST.filter((m)=>m.id==id);
      list1.forEach((m)=>m.isADD=true);
      return this.MobileLIST;
     //  console.log("list1 = "+list1);
       //return this.MobileLISTforDelete;
    },
    SEARCH:function(id){
       return this.MobileLIST.filter((m)=>m.id==id)[0];
    },
    GETDELETELIST:function(){
        return this.MobileLISTforDelete;
    },
    CreateObjItem:function(Id,Name,Price,Url){
      var IO= new Mobile(Id,Name,Price,Url,false,0);
      return IO;
    },
    PrepareItem:function(mobiles){
        for(var i=0;i<mobiles.length;i++){
            var obj = new Mobile(mobiles[i].id,mobiles[i].name,mobiles[i].price,mobiles[i].url,mobiles[i].mark,mobiles[i].like);
            this.MobileLIST.push(obj);
        }
    },
    ADDTOCART:function (m) {
       this.MobileLISTforCart.push(m);
       console.log("Added cart is "+this.MobileLISTforCart.length+"  "+m.name);
       return this.MobileLISTforCart;
    },
    GetItem:function(){
        return this.MobileLIST;
    },
    UPDATELIKE:function(mobile){
      //  console.log(mobile);
       mobile.incrementlike();
    },
    DELETE:function(LIST){
        var unMarkedMobiles;
        unMarkedMobiles=LIST.filter((m)=>m.isADD==false);
         return unMarkedMobiles;     
    }
}
export default MobileOperation;