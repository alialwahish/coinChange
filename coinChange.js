

function coinChange(num){
dollar=0
quart=0
dime=0
nickle=0
penn=0
retStr="{"

    while(num>0){
    if(num>100){
        dollar=num/100;
        dollar=Math.floor(dollar)
        num%=100
        retStr+="dollars: "+dollar+", "
        if(num==0){retStr+="}"}
    }
    else if(num>=25){
        quart=num/25;
        quart=Math.floor(quart);
        num%=25;       
        retStr+="quarters: "+quart+", "
        if(num==0){retStr+="}"}
    }
    
    else if(num>=10){
        dime=num/10;
        dime=Math.floor(dime);
        num%=10;       
        retStr+="dimes: "+dime+", "
        if(num==0){retStr+="}"}
    }
    else if(num>=5){
        nickle=num/5;
        nickle=Math.floor(nickle);
        num%=5;       
        retStr+="nickle: "+nickle+", "
        if(num==0){retStr+="}"}

    }
    
    else{
        penn=num
        retStr+="pennies: "+penn+"}"
        num=0
    }



    }
    return retStr;

}

console.log(coinChange(240));

