


function getInputValueElementById (id){
    const inPutGet = document.getElementById(id).value ;
    const partfolt = parseFloat(inPutGet);

   return partfolt ;
}




function getTextFiledValueById(id){
    const textValue  = document.getElementById(id).innerText ;
    const textNumber = parseFloat(textValue);
    return textNumber ;
      
}







//show donate and histoey
function showHistoryOrDonated (id){
    document.getElementById('show-first-donateForm').classList.add('hidden')
    document.getElementById('history-bdt').classList.add('hidden')


    document.getElementById(id).classList.remove('hidden')
}


//boge clicke 

// document.getElementById('blog-html').addEventListener('click', function(){
//     console.log('ami blog click');
//     window.location.href = "../Js"
// })

function goToHtmlFile (){
    window.location.href = '../index.html' ;
}