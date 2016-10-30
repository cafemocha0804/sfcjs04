function div(wararerukazu,warukazu){
 let result;
 result= wararerukazu / warukazu
 return result;
}

function toMile(km){
let result;
result= div(km,1.6);
return result;
}

function toKM(mile){
let result;
result= mile * 1.6;
return result;
}

function nand(a, b){
  let c = a && b;
  return !c; 
}

function nor(a, b){
  let c = a || b;
  return !c; 
}

