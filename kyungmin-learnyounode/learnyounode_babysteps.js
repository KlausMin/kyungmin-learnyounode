var sum = 0;

process.argv.forEach(function (i, index){
  if(index >= 2)
    sum += Number(i);
});

//sum = 0;

//for (var i = 2; i < process.argv.length; i++) {
///  sum += Number(process.argv[i]);
//}

console.log(sum);
