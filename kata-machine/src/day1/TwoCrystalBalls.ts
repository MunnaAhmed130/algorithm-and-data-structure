export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        // console.log(i);
        if (breaks[i]) {
            console.log(i);
            break;
        }
    }
    i -= jumpAmount;
    console.log(i);
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        console.log(i);
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

const arr = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
];
console.log(two_crystal_balls(arr));
console.log(Math.floor(Math.sqrt(14)));
