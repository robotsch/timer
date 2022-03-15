const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  // Check if key pressed can be casted to a number
  if (typeof Number(key) === 'number') {
    // Beep after that number seconds
    setTimeout(() => {key > 0 ? process.stdout.write('\x07') : null}, Number(key) * 1000)
  }
  // Beep if b is pressed
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  // Exit with console.log if ctrl+c is pressed
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!')
    process.exit();
  }
});

console.log('after callback');