var generateParenthesis = function(n) {
    let buildingBlock = ['(',')'];
    let realShit = []
    let initialArray = ['']
     for (let i=0;i<n;i++){
        realShit = [...realShit,...buildingBlock];
    }
    for(let i=0;i<2*n;i++){
        initialArray[0] += realShit[i];  
    }
        function shuffleString(str) {
        const arr = str.split(""); 
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
        return arr.join("");  
        }
    function factorial(x){
        if (x==1||x==0){
            return 1;
        }
        return x * factorial(x-1);
    }
    let catNum = factorial(2n)/(factorial(n)*factorial(n)*(n+1)); 
    function getArray (){
        let mainArray = [];
        for(let i=0;i<catNum;i++){
            if(mainArray.length != catNum){
                let str = shuffleString(initialArray[0]);
                if(!mainArray.includes(str)){
                    mainArray.push(str);
                }else{
                    i=i-1;
                }
            }
        }
        return mainArray;
    }

let answer = getArray();
    

    return answer;
    
};