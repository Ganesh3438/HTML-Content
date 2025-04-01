let str = 'Hello';
let result = '';
    
    for (let i = 0; i < str.length; i++) {
        let isDuplicate = false;
        
        // Check if the character is already in the result string
        for (let j = 0; j < result.length; j++) {
            if (str[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        
        // If the character is not a duplicate, add it to the result string
        if (!isDuplicate) {
            result += str[i];
        }
    }

    console.log(result)