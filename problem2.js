function problem2(inventery){
    for(let i=0;i<inventery.length;i++){
        if(inventery[i].id===inventery.length){
            return inventery[i];
        }
    }
}
module.exports=problem2;