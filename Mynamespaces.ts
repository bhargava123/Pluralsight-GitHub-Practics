namespace HRD{

   export let a:number=4

   export function print(msg:string)
   {
       console.log(msg)
   }
 


   export class MyComplexType{

        id:number
        doj:number

        constructor(a:number,b:number)
        {
            this.id=a;
            this.doj=b;
        }

       display()
       {
           console.log(this.id)
           console.log("above is id value")
           console.log(this.doj)
           console.log("above is date of joining")
       }


   }








   var objew=new HRD.MyComplexType(2,56);
   

}