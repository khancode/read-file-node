const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    const lines = data.split('\n');
    let track = 0;
    for (let i = 2; i < lines.length; i++) {
        const line = lines[i].split(' ');
        switch (track) {
            case 0:
                console.log(line[0]);
                track++;
                break;
            case 1:
                console.log(line[Math.trunc(line.length/2) + (line.length%2 === 0 ? -1 : 0)]);
                track++;
                break;
            case 2:
                console.log(line[line.length-1]);
                track = 0;
        }
    }
});