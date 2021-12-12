module.exports = function coverage(a,b,x,y){
    let value = 0;
    if(a>2*x){
        value = 1;
    } else {
        value = -1;
    }
    if(b>y*y){
        value+=1;
    } else if(value*x<=-a){
        value-=1;
    }
    return value;
}