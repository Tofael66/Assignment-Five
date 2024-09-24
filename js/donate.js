
document.getElementById('donate-btn').addEventListener('click' , function(event){
    event.preventDefault() ;
    console.log('amai clecked');



    const inputAddBdt= document.getElementById('input-add-bdt').value ;
    const inputAddBdtParsfolt =parseFloat(inputAddBdt);
    console.log(inputAddBdtParsfolt);

     if(inputAddBdtParsfolt < 0){
        alert('negative number not allow')
     }

     


     else if(isNaN(inputAddBdtParsfolt)){

      alert('wrong Input')

     }
     else {

         alert('your BDT Added SuscessFull')
       


        const akhaneAddhobeBdt = document.getElementById('Akhane-addhobe-bdt').innerText ;
    const akhaneAddhobeBdtParsTF = parseFloat(akhaneAddhobeBdt);
    console.log('ami innterText',akhaneAddhobeBdtParsTF);


    const newBdt = inputAddBdtParsfolt + akhaneAddhobeBdtParsTF ;

    document.getElementById('Akhane-addhobe-bdt').innerText = newBdt ;



    const upaddBtd =document.getElementById('upadd-btd').innerText;
    const upBdtParFolt = parseFloat(upaddBtd) ;
    console.log(upBdtParFolt) ;


   const upaddBtdFormbat  = upBdtParFolt - inputAddBdtParsfolt ;

    document.getElementById('upadd-btd').innerText =  upaddBtdFormbat  ;


    // history section


//     const div = document.createElement('div') ;
// div.classList.add('bg-yellow-300');
// div.innerHTML = `
// <h4 class = "text-2xl font-bold " > Cash Out</h4> 
// <p>${cashOut} withdraw. New Balance  ${newBalance} </p>

//`

  const div =document.createElement ('div') ;
  div.innerHTML = `
  <H3 class = 'bg-slate-50 border border-gray-500 py-5 px-5 mt-3 mb-3 rounded-md text-xl font-semibold'> ${inputAddBdtParsfolt} Taka is Donate for Food at Naokhaily, Bangladesh </H3>



  `

document.getElementById('history-bdt').appendChild(div);

const p =document.createElement('p');
 const mydate =new Date();
 p.innerText = mydate ;
 document.getElementById('history-bdt').appendChild(p);




     }

    
    //  function logTasktime(task){
    
    //     const currentTime =new Data().locatime() ;
    //     console.log(`Time "${task}"  is being done at ${currentTime}`)
    // }

    // logTasktime('tomar time')
    


})