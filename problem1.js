function problem1(inventery){
    for(let x in inventery){
        if(inventery[x]["id"]===33){
            return inventery[x];
        }
    }
}

module.exports = problem1;