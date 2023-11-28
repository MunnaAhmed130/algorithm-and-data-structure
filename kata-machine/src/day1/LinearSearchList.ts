export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
        // console.log(i,haystack[i] );
    }
    return false;
}

console.log(linear_search([15, 8, 4, 5], 4));
