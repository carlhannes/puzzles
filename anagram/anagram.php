<?php

print is_anagram('anagram', 'magarna') ? 'true' : 'false';
print "\n".(is_anagram('anagram', 'magzrna') ? 'true' : 'false');
print "\n";

function is_anagram($str1, $str2) 
{    
    $str1 = str_split($str1);
    $str2 = str_split($str2);
    
    if(count($str1) !== count($str2)) 
    {
        // if they're not equal length, they can't be anagrams
        return false;
    }
    
    sort($str1);
    sort($str2);
    
    foreach ($str1 as $index => $letter) 
    {
        if($letter !== $str2[$index])
        {
            return false;
        }
    }
    
    return true;
}