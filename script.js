// "https://api.kanye.rest/"

const Quotes=()=>{
    fetch("https://api.kanye.rest/")
    .then(res=>res.json())
    .then(qoute=>DisplayQuotes(qoute))
}
   

const DisplayQuotes=(qoute)=>{
        console.log(qoute.quote)
        const display=document.getElementById("quote");
        display.innerText=qoute.quote
}
