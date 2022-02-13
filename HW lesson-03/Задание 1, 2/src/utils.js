function pow(x, y) {


    let result = x;
    if (y == 0) return 1;
    if (y > 0) {
        for (i = 1; i < y; i++) result *= x
        return result;
    }
    else {
        for (i = -1; i > y; i--) result *= x
        return (1 / result);
    }

    // let result = x;
    // switch (y) {
    //     case y == 0:
    //         if (y == 0) return 1
    //         break;

    //     case y < 0:
    //         for (i = -1; i > y; i--) {
    //             result *= x
    //         }
    //         let ys = (1 / result);
    //         return ys;
    //         break;

    //     default:
    //         for (i = 1; i < y; i++) result *= x
    //         return result;
    // }

}

module.exports = {
    pow
}