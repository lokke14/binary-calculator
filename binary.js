var val1 = '0';
var val2 = '0';

$('#numberinput1').on('keyup', function(){
    val1 = parseInt($(this).val());
    (val1) ? updateBinaryFields(val1,val2) : $('#binary1').text("");
});

$('#numberinput2').on('keyup', function(){
    val2 = parseInt($(this).val());
    (val2) ? updateBinaryFields(val1,val2) : $('#binary2').text("");
});

function decToBin(val){
    return val.toString(2);
}

function binToDec(val) {
    return parseInt(val, 2);
}

function updateBinaryFields(val1,val2) {
        bin1 = addZeros(decToBin(val1), decToBin(val2)) + decToBin(val1);
        bin2 = addZeros(decToBin(val2), decToBin(val1)) + decToBin(val2);
        $('#binary1').text(bin1);
        $('#binary2').text(bin2);

}

function sizeOk(num){
    //check if int is not bigger than 32bits : 2147483647
    //returns true if smaller
    var answer;
    (num <= 2147483647) ? answer =  true : answer = false;
    return answer;
}

function addZeros(a, b){
    //takes two strings as input and adds n number of 0's to the first
    //string if it is n number shorter than second string
    pre = "";
    if(a && b){
        if(a.length < b.length){
            for(i=0;i < b.length - a.length; i++){
            pre += "0";
            }
        }
    }
    return pre;
}

$('button').on('click', function(){
    total = 0;
    if(sizeOk(val1) && sizeOk(val2)){
        if($(this).attr("name") == "XOR"){
        total = decToBin(xor(val1, val2));
        }
        if($(this).attr("name") == "OR"){
        total = decToBin(orT(val1, val2));
        }
        if($(this).attr("name") == "AND"){
        total = decToBin(andT(val1, val2));
        }
        $('#total').text(addZeros(total, $('#binary1').text()) + total);
        $('#totalC').text(binToDec(total));
    }
    else {
        if(!sizeOk(val1)){
            console.log('val1 is too big');
        }
        if(!sizeOk(val2)){
            console.log('val2 is too big');
        }
    }
});

function xor(a,b){
    return a ^ b;
}

function orT(a,b){
    return a | b;
}

function andT(a,b){
    return a & b;
}

// log 2 ^ i
// for(i=0;i< 32;i++){
//     console.log("2 ^", i, (2 ** i));
// }
