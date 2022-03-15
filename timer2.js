// for(const time of process.argv.slice(2)) {
//   setTimeout(() => {time > 0 ? process.stdout.write('\x07') : null}, Number(time) * 1000)
// }

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  // setTimeout(() => {time > 0 ? process.stdout.write('\x07') : null}, Number(time) * 1000)
  if (key === 'b') {
    process.exit();
  }
});

console.log('after callback');