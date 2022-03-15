for(const time of process.argv.slice(2)) {
  // Ternary implicit return, handles < 0 and non-number, this is kinda clean
  setTimeout(() => {time > 0 ? process.stdout.write('\x07') : null}, Number(time) * 1000)
}