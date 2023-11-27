const apiUrl = 'https://api.quotable.io/random';

fetch(apiUrl)
.then(response=>response.json())
.then(data=>{
    let content=document.getElementById('content');
    content.innerHTML=data.content;
    let author=document.getElementById('author');
    author.innerHTML=data.author;
});


function refreshPage(){
    location.reload();
}

function shareQuote(){
    const quote=document.getElementById("content").innerHTML;
    if(navigator.share){
        navigator.share({
            title: "Quote of the Day",
            text: quote,
          })
    }else{
        alert("Sharing is not supported in this browser");
    }
}
