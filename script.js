const apiUrl = 'https://api.quotable.io/random';

// getting random quote and author from public api "quotable"
fetch(apiUrl)
.then(response=>response.json())
.then(data=>{
    let content=document.getElementById('content');
    content.innerHTML=data.content;
    let author=document.getElementById('author');
    author.innerHTML=data.author;
});


//function for refreshing page when "new quote" button is pressed
function refreshPage(){
    location.reload();
}

//function for sharing the quote when "share quote" button is pressed
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


//displaying live time of the browser in which the website is running
setInterval(()=>{
    let d= new Date();
    let time=document.getElementById('time');
    time.innerHTML=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`;
},1);