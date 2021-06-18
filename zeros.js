let a = [1,2,0,0,3,0,9,8];

function zeros(arr) {

  const listZeros = a.filter(e => e !== 0);
  return listZeros.concat(Array(arr.length - listZeros.length).fill(0))
  
}

console.log(zeros(a))