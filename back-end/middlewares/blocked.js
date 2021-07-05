const LookInTime = ( blocked, number) => {
    for(let i = 0; i<blocked.length; i++){
            if(blocked[i]==number) return false;
    }
    return true;
}

module.exports = LookInTime;