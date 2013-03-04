

function IBANChk(b) 
{ 
    if (b.length < 5) { console.log("The length is less than 5 characters"); return false; } 
    s = b.substring(4) + b.substring(0, 4); 
    for (i = 0, r = 0; i < s.length; i++ ) 
    { 
        c = s.charCodeAt(i); 
        if (48 <= c && c <= 57) 
        { 
            if (i == s.length-4 || i == s.length-3) { console.log("Positions 1 and 2 cannot contain digits"); return false; } 
            k = c - 48; 
        } 
        else if (65 <= c && c <= 90) 
        { 
            if (i == s.length-2 || i == s.length-1) { console.log("Positions 3 and 4 cannot contain letters"); return false; } 
            k = c - 55; 
        } 
        else { console.log("Only digits and uppercase letters are allowed"); return false; } 
        if (k > 9) 
            r = (100 * r + k) % 97; 
        else 
            r = (10 * r + k) % 97; 
    } 
    if (r != 1) { console.log("The check digits are invalid"); return false; } 
    console.log("The IBAN results to be valid"); 
    return true; 
} 

