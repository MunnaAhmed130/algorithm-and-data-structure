// Tower of Hanoi if place > 1 then
// n - 1 plates has to be moved to aux/usingRod/B
// nth disc to C
// then again move n - 1 plates from aux/B to des/C using A
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n == 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }

    towerOfHanoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");
