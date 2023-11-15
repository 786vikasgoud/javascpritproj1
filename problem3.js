function problem3(inventery){
    let len=inventery.length
    let arr=[];
    for(let i=0;i<len-1;i++){
        for(let j=0;j<len-1-i;j++){
            if(inventery[j]["car_model"].trim().toLowerCase() > inventery[j+1]["car_model"].trim().toLowerCase()){
                let temp=inventery[j+1];
                inventery[j+1]=inventery[j];
                inventery[j]=temp;
            }
        }
        arr.unshift(inventery[(inventery.length)-1-i]);
    }
    return arr;
}
module.exports=problem3;