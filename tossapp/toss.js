// function button(){
//     let x=Math.random();
//     let headcount=0
//     let tailcount=0
//     if(x<=0.5){
//         document.getElementById("image1").src="tails.png";
//         console.log("tails")
//         document.getElementById("result").textContent="Tails";
//         // tailcount++
//         // document.getElementById("tailpara").textContent=tailcount;
//     }
//     // if(x<=0.5){
//     //     tailcount++
//     //     document.getElementById("tailpara").textContent=tailcount;
//     // }
//     // if(x>0.5){
//     //     headcount++
//     //     document.getElementById("tailpara").textContent=headcount;
//     // }
//     else{
//         document.getElementById("image1").src="heads.png";
//         console.log("heads");
//         document.getElementById("result").textContent="Heads";
//     //     headcount++
//     //     document.getElementById("tailpara").textContent=headcountcount;
//     // }
//     }
    
// }
let heads=0;
let tails=0;
function button(){
    const random=Math.random();
    const result=random<0.5 ?'Heads':'Tails';
    document.getElementById("result").textContent=result;
    if(result==="Heads"){
        heads++;
        document.getElementById("headscount").textContent=heads;
        document.getElementById("image1").src="heads.png"
        console.log("heads")
    }
    else{
        tails++;
        document.getElementById("tailscount").textContent=tails;
        document.getElementById("image1").src="tails.png";
        console.log("tails")
    }
}