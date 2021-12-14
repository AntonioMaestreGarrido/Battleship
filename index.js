

//factorry ships 

const factoryShips=(size)=>{
    var body=new Array (size)
    const sunk=false
    

   
        
    var ini=(body)=>{
        for (let i = 0; i < body.length; i++) {
             body[i]=1;
            
        }
    };

    const hit=(p)=>{if (body[p]===1){body[p]=0}

    }
    const isSunk=()=>{
        let sunk=true
        body.forEach(p =>{
            
            if(p===1){sunk= false};
        })
        console.log(sunk)
        return sunk
    }

    ini(body)


    return {body,hit,isSunk}
}

function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
const a=factoryShips(7)
console.log (a)
a.hit(1)
a.isSunk()
module.exports =factoryShips