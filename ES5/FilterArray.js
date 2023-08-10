
var data=[25,50,75,100,125];
var user=data.filter(
    function(element){
        return element<80;
    }
)
console.log(user);