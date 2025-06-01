"use strict";
function convertTimeOthers(current, correct) {
    function toMinutes(time) {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let diff = toMinutes(correct) - toMinutes(current);
    let ops = 0;
    for (const step of [60, 15, 5, 1]) {
        ops += Math.floor(diff / step);
        diff %= step;
    }
    return ops;
}
;
console.log(convertTimeOthers('11:00', '11:01'));
console.log(convertTimeOthers('02:30', '04:35'));
console.log(convertTimeOthers('23:30', '00:45'));
