function bubble_sort(arr) {
    for (let i = 0; i <= arr.length; ++i) {
        for (let j = 0; j <= arr.length - 1 - i; ++j) {
            console.log(arr);
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// O(n^2) on a sorted or unsorted array in all case

function optimized_bubble_sort(arr) {
    let length = arr.length;
    let isSwapped;
    for (let i = 0; i <= length; ++i) {
        // let isSwapped = false;
        console.log("op", arr);
        isSwapped = false;
        for (let j = 0; j <= length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
}

// const arr = [8, 20, -2, 4, -6];
const arr = [-6, -2, 4, 8, 20];
// bubble_sort(arr);
optimized_bubble_sort(arr);
// O(1) on a sorted array which is the best case
//O(n^2) on a unsorted array which is the worst case
