function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(string = "go to the office"){
    return `This Monday, I will ${string}.`;
    
}
mondayWork();

function wrapAdjective(lilian = "*") {
    return function(adjective = "special"){
        return `You are ${lilian}${adjective}${lilian}!`;
    }

}
const encouragingPromptFunction = wrapAdjective("||");

console.log(encouragingPromptFunction("a dedicated programmer"));
    

    


