console.log('ami feature')





document.getElementById('show-donate-btn').addEventListener('click' , function(){
    console.log('ami ckikec hossi') ;

    showHistoryOrDonated('show-first-donateForm') ;
})


document.getElementById('show-histore-btn').addEventListener('click', function(){
    console.log('ami history');
    showHistoryOrDonated('history-bdt');
})