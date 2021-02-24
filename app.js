
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = [ 'net', 'us', 'io'];



function sentence() {
  var randp = Math.floor(Math.random() * pronoun.length);
  var randa = Math.floor(Math.random() * adj.length);
  var randn = Math.floor(Math.random() * noun.length);
  var randext = Math.floor(Math.random() * ext.length);
  
 
  var domain = pronoun[randp] +adj[randa] + noun[randn]+ext[randext]+'.com';

  return domain;
};

function filter (domain){
    if 

}

console.log(sentence());