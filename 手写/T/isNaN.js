/**
 * @param num 
 * @returns 
 */
function myIsNaN(num) {
    var ret = Number(num);
    ret += '';
    if(ret == "NaN") {
        return true;
    } else {
        return false;
    }
}