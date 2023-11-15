function problem5(inventery){
    let oldercars = [];
    for(let i=0;i<inventery.length;i++){
        if(inventery[i]["car_year"]<2000){
            oldercars.push(inventery[i]);
        }
    }
    return oldercars;
}
module.exports = problem5;