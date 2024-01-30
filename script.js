const quote= document.getElementById("quote");
const author= document.getElementById("author");
const api_url="https://api.quotable.io/random";

async function getquote(url){
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerHTML=data.content;
  author.innerHTML=data.author;
}
function share(){
  window.open("https://www.facebook.com/help/192946630752330/?helpref=uf_share", "Facebook Window" + quote.innerHTML + "-----by "+ author.innerHTML, "width=600, height=300");

}
getquote(api_url);