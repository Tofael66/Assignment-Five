

document.getElementById('donated-addbdt-btn').addEventListener('click',function(event){
    event.preventDefault() ;
const addBdt = getInputValueElementById('input-bdt-get');

console.log(addBdt);


if( addBdt < 0){
   alert('negative BDT not allow') 
 return ;
}

if(isNaN(addBdt)){
    alert('wrong Input')
    return ;
 }


else{
    alert('your BDT Added SuscessFull')

    const addtext = getTextFiledValueById('akhane-bdt-addHobe') ;
    console.log(addBdt, addtext)
    const total = addBdt + addtext ;
    document.getElementById('akhane-bdt-addHobe').innerText=total ;
    
    
    const upaddBdt = getTextFiledValueById('upadd-btd');
    console.log(upaddBdt) ;
    
    const newBdtUp = upaddBdt - addBdt ;
    document.getElementById('upadd-btd').innerText = newBdtUp ;



    // history section
    const div =document.createElement ('div') ;
    div.innerHTML = `
    <H3 class = 'bg-slate-50 border border-gray-500 py-5 px-5 mt-3 mb-3 rounded-md text-xl font-semibold'> ${addBdt} Taka is Donate
Aid for Injured in the Quota Movement </H3>
  
    `
    
  document.getElementById('history-bdt').appendChild(div);

  
document.getElementById('history-bdt').appendChild(div);

const p =document.createElement('p');
 const mydate =new Date();
 p.innerText = mydate ;
 document.getElementById('history-bdt').appendChild(p);

}


})


// second part

document.getElementById('donate-thirt-btn').addEventListener('click', function(event){
    event.preventDefault();


    
   const thirdAddBdt = getInputValueElementById('third-input-bdt');
   console.log(thirdAddBdt);



   if( thirdAddBdt < 0){
    alert('negative BDT not allow') 
  return ;

 }

 else if (isNaN(thirdAddBdt)){

    alert('wrong Input')

    return ;
 }


else{

    alert('your BDT Added SuscessFull');



    const thirdTextbdt = getTextFiledValueById('upbdt-third');
    console.log('ami thir ', thirdTextbdt)

    const thirdUpDateBdt = thirdAddBdt + thirdTextbdt ;
    document.getElementById('upbdt-third').innerText = thirdUpDateBdt ;


    const thirdTopBdt = getTextFiledValueById("upadd-btd") ;
const TopNewMoney = thirdTopBdt - thirdAddBdt ;
document.getElementById('upadd-btd').innerText = TopNewMoney ;




   // history section
   const div =document.createElement ('div') ;
   div.innerHTML = `
   <H3 class = 'bg-slate-50 border border-gray-500 py-5 px-5 mt-3 mb-3 rounded-md text-xl font-semibold'> ${thirdAddBdt} Taka is Donate,
Donate for Flood Relief in Feni,Bangladesh </H3>
 
   `
 
   
 document.getElementById('history-bdt').appendChild(div);

 
document.getElementById('history-bdt').appendChild(div);

const p =document.createElement('p');
 const mydate =new Date();
 p.innerText = mydate ;
 document.getElementById('history-bdt').appendChild(p);
 

}


})



