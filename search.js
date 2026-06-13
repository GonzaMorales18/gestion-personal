const fs = require('fs');
const content = fs.readFileSync('c:/Users/gonza/OneDrive/Documentos/Personal/index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, index) => {
    if (line.includes('1/05/2026') || line.includes('SUELDOS') || line.includes('ÚLTIMO SUELDO NETO')) {
        console.log(`Line ${index + 1}: ${line.trim()}`);
    }
});
