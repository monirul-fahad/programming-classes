
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const parChairWood = 3;
    const parTableWood = 10;
    const parBedWood = 50;
    // Wood calculation 
    const chairWoodQuantity = chairQuantity * parChairWood;
    const tableWoodQuantity = tableQuantity * parTableWood;
    const bedWoodQuantity = bedQuantity * parBedWood;
    // adding all wood quantity 
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;

}

const firstOption = woodCalculator(1, 1, 1)
console.log(firstOption)