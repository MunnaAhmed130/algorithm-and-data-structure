export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    // if highIndex is arr.length then target will never be equal to highIndex
    // because highIndex is always bigger than tha array's biggest index value
    // and for this reason in do block high is exculsive & low is inclusive
    do {
        const m = Math.floor(low + (high - low) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            high = m;
        } else {
            low = m + 1;
        }
    } while (low < high);
    return false;
}
