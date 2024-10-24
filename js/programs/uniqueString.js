function removeDuplicates(str) {
    let uniqueStr = '';
    for (let i = 0; i < str.length; i++) {
        // Check if the character is already in the uniqueStr
        if (uniqueStr.indexOf(str[i]) === -1) {
            // Append it if not already present
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}

// Example usage:
const originalStr = "pppppppppppd    ";
const result = removeDuplicates(originalStr);
console.log(result); // Output: "abcdef"
