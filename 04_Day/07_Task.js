let n = 5;
for (let i = 1; i <= n; i++) { // start i from 1 to get the correct number of lines
    let line = "";
    for (let j = 0; j < i; j++) {
        line += " * ";
    }
    console.log(line);
}
