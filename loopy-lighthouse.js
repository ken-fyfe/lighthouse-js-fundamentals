// Exercise to test our looping knowledge
for (let i = 100; i < 201; i++) {
  if (i % 3 === 0) {
    console.log("Loopy");
  }
  if (i % 5 === 5) {
    console.log("Lighthouse");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("LoopyLighthouse")
  }
  if (i % 3 !== 0 && i % 5 !== 0) {
    console.log(i)
  }
}