var weapons = [];
var ammo = [];
while (true) {
    if (!op(0x0256, 0)){ // if player is playing is not playing aka busted/wasted
        while(!op(0x0256, 0)){ // wait till you are playing again, otherwise giving weapons will crash the game
            wait(0)
        } 
        for (i = 1; i <= 33; i++){ // for every weapon in the game
            op(0x01B1, 0, weapons[i], ammo[i]) // give player weapons and ammo for said weapons in from the weapons and ammo array
        }
    }
    weapons = [] // array for remembering weapons
    ammo = [] // array for remembering ammo
    for (i = 1; i <= 33; i++){ // for every weapon in the game
        if (op(0x0490, 0, i)){
            // check if player has weapon id "i"
            weapons.push(i) // put that weapon id at the end of the weapons array
            ammo.push(op(0x0419,0,i)) // put that weapons ammo at the end of the ammo array
        }
    }
    wait(1000) // wait 1 second as weapon/death checking does not need to happen very often
}