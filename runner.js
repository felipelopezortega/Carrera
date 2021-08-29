export default class Runner{

    constructor(){

        this._spaces = new Array
     }


     throw(){

        let c = this._spaces;
        let i=1;
        let f = 0;
        
        for(;f<=i; i++){

            c.push(Math.floor(Math.random()*6+1));

            if(c[i-1] === 1){

                c[i-1] = 1;

            }else if(c[i-1] === 2){

                c[i-1] = 1;

            }else if(c[i-1] === 3){

                c[i-1] = 3;

            }else {

                c[i-1] = 2;

            }

            if(c.length>1){

                c[i-1] = (Number(c[i-1]) + Number(c[i-2]));
            }

            if(c[i-1]>=100){

                f=500;



            }

            
        }

        return c.length;
        

    }




    
}