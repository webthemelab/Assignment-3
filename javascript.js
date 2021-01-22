
//...........kilometerToMeter(problem-1)................//
function kilometerToMeter(kilometer){
    const meter = kilometer / 1000;
    return meter;
}
kilometerToMeter();





 

//..................hotelCost(problem-3)....................//

function hotelCost(days){
    var totalRent = 0;
    if(days<=10){
        totalRent = days * 100;
    }else if(days<=20){
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        totalRent = firstTenDays + secondTenDays;
    }else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var nestDays = remaining * 50;
        totalRent = firstTenDays + secondTenDays + nestDays;
    }
    return totalRent;
}
hotelCost();


//.......................megaFriend(problem-4)..........................//

var friends = ["ali","abir","kamalislam","saifulislamrsed","amin"];
var longName = friends[0];
function megaFriend(){
    for(var i = 0; i < friends.length; i++){
        var element = friends[i];
        if(element.length > longName.length){
            longName = element;
        }
    }return longName;
}
megaFriend();