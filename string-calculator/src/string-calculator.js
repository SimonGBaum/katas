function add(chars) {
    if (chars.length <= 0) {
        return '';
    }

    if (chars.length > 0) {
        let negNums = '';
        if (chars.includes('-')) {
            for (let i = 0; i < chars.length; i++) {
                if (chars[i] === '-') {
                    if (negNums !== '') {
                        negNums += ", ";
                    }
                    negNums += (chars[i] + chars[i + 1]);
                }
            }
            return `negatives not allowed: ${negNums}`;
        }
        let sum = 0;
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] >= '0' && chars[i] <= '9'){
                    sum += Number(chars[i]);
            }
        }
        return sum;
    }
};

console.log(add('-123'));
module.exports = { add };