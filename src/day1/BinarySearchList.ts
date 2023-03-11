// Time complexity: O(log(n))

function bs(
    haystack: number[],
    needle: number,
    lo: number,
    hi: number,
): boolean {
    if (lo >= hi) {
        return false;
    }

    const middle = Math.floor(lo + (hi - lo) / 2);

    const val = haystack[middle];

    if (val === needle) {
        return true;
    }

    if (val < needle) {
        return bs(haystack, needle, middle + 1, hi);
    }

    if (val > needle) {
        return bs(haystack, needle, lo, middle);
    }

    return false;
}

export default function bs_list(haystack: number[], needle: number): boolean {
    return bs(haystack, needle, 0, haystack.length);
}
