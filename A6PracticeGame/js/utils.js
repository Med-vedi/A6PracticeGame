function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {


  // let d = Math.floor(Math.random() * 6) + 1;
  // let n = Math.floor(Math.random() * 6) + 1;
  // return `#slot-${d}${n}`;

// another variant
 	let itemId = Math.floor(Math.random() * 36) + 1; 
 	return `#slot-${itemId}`;

}
