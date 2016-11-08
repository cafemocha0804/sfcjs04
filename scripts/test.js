//練習問題５ 引数に指定された 2つの値が等しいことを調べる関数
function assert_eq(a, b){
    return a == b;
}

//練習問題６ xor の正常動作を確認する関数
function test_xor(){
    return assert_eq(xor(true, true), false)&&
    assert_eq(xor(true, false), true)&&
    assert_eq(xor(false, true), true)&&
    assert_eq(xor(false, false), false);
}

//練習問題７ norの正常動作を確認する関数
function test_nor(){
    return assert_eq(nor(true, true) , false) &&
    assert_eq(nor(true, false) , false) &&
    assert_eq(nor(false, true) , false) &&
    assert_eq(nor(false, false) , true) ;
}

//練習問題７ norの正常動作を確認する関数
function test_nor(){
    return nor(true, true) == false &&
        nor(true, false) == false &&
        nor(false, true) == false &&
        nor(false, false) == true; 
}