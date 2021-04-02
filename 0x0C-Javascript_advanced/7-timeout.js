console.log("Start of the execution queue");
setTimeout(() => {
  console.log("Final code block to be executed");
}, 0);
for (let ct = 1; i <= 100; ct++) {
  console.log(ct);
}
console.log("End of the loop printing");
