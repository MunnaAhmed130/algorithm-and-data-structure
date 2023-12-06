const meetingRooms = (arr) => {
    const data = [];
    for (let [s, e] of arr) {
        data.push([s, 1]);
        data.push([e, -1]);
    }

    data.sort((a, b) => a[0] - b[0]);

    // console.log(data, "\n", arr);

    let curr = 0;
    let max = 0;

    for (let [_, v] of data) {
        curr += v;
        max = Math.max(max, curr);
    }
    return max;
};

const array = [
    [5, 10],
    [15, 20],
    [0, 30],
];
console.log(meetingRooms(array));
