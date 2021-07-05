const Time = (time1, time2) => {
    let firstnumber;
    let secondnumber;
    let blocked = [];
    if(time1[11] != '0') firstnumber = time1[11]+ "" + time1[12];
    else firstnumber = time1[12];

    firstnumber = parseInt(firstnumber);
    if(time2[11] != '0') secondnumber = time2[11]+ "" + time2[12];
    else secondnumber = time2[12];

    secondnumber = parseInt(secondnumber);
    for(let i = firstnumber; i<secondnumber; i++){
        blocked.push(i);
    }
    return blocked;
}

module.exports = Time;