function findWaldo(arr, found) {

  arr.forEach(function(val,agg) {
    if (val === "Waldo") {
      found(agg);   // execute callback
    }
  });
}

function actionWhenFound(agg) {
  console.log(`Found Waldo at index: ${agg}.`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);