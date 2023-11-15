function problem4(inventery){
    let arryear = [];
    for(let j=0;j<inventery.length;j++){
        arryear.push(inventery[j]["car_year"]);
    }
    return arryear;
}
module.exports = problem4;