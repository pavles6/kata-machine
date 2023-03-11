// time complexity: O(2 * sqrt(N)) => O(sqrt(N))

export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));

    let i = jump;

    for (; i < breaks.length; i += jump) {
        if (breaks[i]) {
            break;
        }
    }

    for (let j = i - jump; j < i + jump; j++) {
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}
