function createFileTitle(text) {
    let lowerText = text.toLowerCase();
    rs = lowerText.replace(/\s/gi, '-');
    return rs + '.md';
}

let baseTile = 'CSV representation of array';
console.log(baseTile);

// press Control+Alt+N to show in the Output Window (Must install Code Runner first)
console.log( createFileTitle(baseTile));
