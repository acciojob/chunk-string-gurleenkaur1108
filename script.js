function stringChop(str, size) {
  if (str == null) return [];
  str = String(str);
  size = ~~size;
  return size > 0 ? str.match(new RegExp(".{1," + size + "}", "g")) : [str];
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
