for(const time of process.argv.slice(2)) {
  setTimeout(() => {time > 0 ? process.stdout.write('\x07') : null}, Number(time) * 1000)
}