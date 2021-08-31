const bottle = {
    color: 'yellow',
    hold: 'water', 
    price: 400, 
    iscleaned: true
}
for(const prop in bottle) {
    // console.log(prop)
    // console.log(bottle[prop])
}

const keys = Object.keys(bottle)
for (const key of keys) {
    console.log(key, bottle[key])
}