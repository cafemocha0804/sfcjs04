
//練習問題２　二つの数の割り算をする関数
function div(wararerukazu,warukazu){
 let result;
 result= wararerukazu / warukazu
 return result;
}


//練習問題３　ある数を 1.6 で割る関数
function toMile(km){
let result;
result= div(km,1.6);
return result;
}


//練習問題４　toMile の逆の計算を行う関数
function toKM(mile){
let result;
result= mile * 1.6;
return result;
}


/*練習問題１　論理和の否定
let a, b, c, d;
a = true || true; // true
b = true || false; // true
c = false || true; // true
d = false || false; // false */
function nand(a, b){
  let c = a && b;
  return !c; 
}

/*練習問題２　論理積の否定
let a, b, c, d;
a = true || true; // true
b = true || false; // false
c = false || true; // false
d = false || false; // false */
function nor(a, b){
  let c = a || b;
  return !c; 
}

/*練習問題３
let a,b,c,d
a = true || true;	// false
b = true || false; // true
c = false || true; // true
d = false || false; // false */
function xor(a,b){
  let c = a == b;
  return !c;
}