function isPalindrome(s) {

    if (s.length < 2) {
        return true;
    }
    // Converts string to uppercase in order to be case insensitive.
    s = s.toUpperCase();
    // removes non-alphanumeric characters with nothing.
    s = s.replace(/[^a-z0-9]/gi,'');
    
    var ind = 0;

    while (ind < s.length/2) {
        if (s[ind] !== s[s.length - ind - 1]) {
            return false;
        }
        ind++;
    }

    return true;
}

var result = isPalindrome("Ana");
console.log(result);
result = isPalindrome("A man, a plan, a canal: Panama");
console.log(result);
result = isPalindrome("race a car");
console.log(result);
