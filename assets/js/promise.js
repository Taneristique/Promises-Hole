const first=document.querySelector('.first')
const second=document.querySelector('.second')
const third=document.querySelector('.third')
const forth=document.querySelector('.forth')

x=Math.random()
let one=new Promise(function(Resolve,Decline){setTimeout(function(){Resolve('Hello Visitor!!!')},2000)})
one.then(function(value){first.innerHTML=value})

let two=new Promise((accept,decline)=>{setTimeout(()=>{if(x>0.4){accept('You are lucky,dude;)')}else{decline('bad luck!')}},1000)})
two.then((value)=>{second.innerHTML=value},(error)=>{second.innerHTML=error})

let three=new Promise((Accept,Decline)=>{setTimeout(()=>{if(x<0.5){Accept('You are really lucky,dude;)')}else{Decline('bad luck!')}},1000)})
three.then((value)=>{third.innerHTML=value},(error)=>{third.innerHTML=error})

function promise(){
    var self=this 
    var success=[]
    var fail=[] 
    this.Resolve=()=>{
        i=0
        while(_success=success[i++]){
            _success()
        }
    }
    this.Reject=()=>{
        var i=0
        while(_fail=fail[i++]){
            _fail()
        }
    }
    this.success=(_success)=>{
        success.push(_success)
        return self
    }
    this.fail=(_fail)=>{
        fail.push(_fail)
        return self
    }
}

let cr=()=>{
    deferred=new promise();
    setTimeout(deferred.Resolve,2000)
    return deferred
}

cr().success(()=>{forth.innerHTML="Good you know about copy right©"})
first.addEventListener("click",()=>{if(first.innerHTML==="Hello Visitor!!!"){location.replace("assets/images/athmosfer.JPG")}})
second.addEventListener("click",()=>{if(second.innerHTML==="You are lucky,dude;)"){location.replace("https://en.wikipedia.org/wiki/Luck")} else if(second.innerHTML==="bad luck!"){location.replace("https://en.wikipedia.org/wiki/Bad_luck")}})
third.addEventListener("click",()=>{if(third.innerHTML==="You are really lucky,dude;)"){location.replace("https://en.wikipedia.org/wiki/List_of_lucky_symbols#/media/File:BIEDRONA.JPG")} else if(third.innerHTML==="bad luck!"){location.replace("unfortunate.php")}})
forth.addEventListener("click",()=>{if(forth.innerHTML==="Good you know about copy right©"){location.replace("https://en.wikipedia.org/wiki/Copyright")}})
