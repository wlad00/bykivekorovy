/**
 * Created by user on 21/01/17.
 */
exports.Number = function () {
    var id = 0;
    var numbers = [];
    var arrAnswer = [];

    var getId = function() {
        return id;
    };
    // var getNumberForPosition = function(position){
    //     return arr[position];
    // };

    var generateNewNumber = function(cnt){
        id= 1000000000+Math.round((Math.random()*100000000));
        numbers = [];
        for(i=0;i<cnt;i++){
            res=0;
            while (true) {
                res= Math.round((Math.random()*9));
                if (numbers.indexOf(res)<0) {break}
            }
            numbers[i]= res;
        }
        return id;
    };

    var toStr = function(){
        res="";
        for(i=0;i<numbers.length;res+=numbers[i++])
            return res;
    };
    var getAnswer = function(ar){
        // console.log(ar);
        res={answer:"",plus:0,minus:0};
        for (i=0; i<ar.length; i++) {
            res.answer+=ar[i];
            if (numbers[i]==ar[i]) {res.plus+=1;}
            for (j=0; j<ar.length; j++) {
                if (numbers[j]==ar[i]) {res.minus+=1;}
            }
        }
        arrAnswer[arrAnswer.length]=res;
        return res;
    };


    return {
//        getNumberForPosition: getNumberForPosition,
        generateNewNumber: generateNewNumber,
        getId: getId,
        getAnswer: getAnswer,
        toStr: toStr
    };
};
