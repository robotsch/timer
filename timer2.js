const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

// Code reviewed by Andy Lindsay
stdin.on("data", (key) => {
  // Check if key pressed can be casted to a number
  if (Number(key) % 1 === 0) {
    // Beep after that number seconds
    return setTimeout(() => process.stdout.write("\x07"), Number(key) * 1000);
  }
  // Beep if b is pressed
  if (key === "b") {
    return process.stdout.write("\x07");
  }
  // Exit with console.log if ctrl+c is pressed
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});
