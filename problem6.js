function problem6(inventery){
    let BMWAudicars = [];
    for(let i=0;i<inventery.length;i++){
        if(inventery[i]['car_make']==="BMW"||inventery[i]['car_make']==="Audi"){
            BMWAudicars.push(inventery[i]);
        }
    }
    return BMWAudicars;
}
module.exports=problem6;