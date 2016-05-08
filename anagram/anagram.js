
console.log(
    is_anagram('anagram', 'magarna'),
    is_anagram('anagram', 'magzrna')
);


function is_anagram(str1, str2) {
    str1 = str1.split('');
    str2 = str2.split('');
    
    if(str1.length !== str2.length) {
        return false;
    }
    
    str1.sort();
    str2.sort();
    
    for (var i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) {
            return false;
        }
    }
    
    return true;
}