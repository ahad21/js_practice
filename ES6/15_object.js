var billGates={
    shirt:true,
    shirtColor:"offwhite",
    smile:true,
    sweater:true,
    sweaterColor:"Grey",
}

console.log(billGates['shirtColor']);

var billGatesPro={
    shirt:{
        color:"offwhite",
        quality:"Good",
        price:"200 USD",
    },
    sweater:{
        color:"Grey",
        quality:"Good",
        price:"200 USD",
        warm:"best",
    },
    face:{
        smiling:"yes",
        chosma:"yes",
        teeth:"yes, big"
    }
}


console.log(billGatesPro['sweater']['price']);
