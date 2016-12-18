/*function getTempPromise(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(78);
      reject('Location not found');
    },1000);
  });
};

getTempPromise('Bangalore').then(function(temp){
  console.log('Promise Success - ',temp);
},function(){
  console.log('Proise Failed - ', error);
});*/


function addPromise (a,b){
  return new Promise(function(resolve, reject){
    if((typeof a === 'number') && (typeof b === 'number') )
      resolve(a+b);
      else
    reject('Both are not numbers');
  });
}


addPromise(2,'naazim').then(function(temp){
  console.log('Promise Success. The sum is ', temp);
},function(error){
  console.log('Promise failed. ', error);
});
