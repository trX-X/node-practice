const food = Deno.args[0];

if (food === "love") {
  console.log("..Deno is born");
} else {
  console.log("..Not yet");
}

setTimeout(() => {
    console.log('Check');
}, 1000)

console.log(Deno.metrics());
