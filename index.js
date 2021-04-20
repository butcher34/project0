
import './styles/_resets.scss';
import './styles/_base.scss';
import './styles/_footer.scss';
import './styles/_form.scss';
import './styles/_header.scss';
import json from '../server/mockAPI';
console.log("hi")

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}
let url;
var myURL;
function validURL(myURL) {
   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
   '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
   '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
   '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
   '(\\#[-a-z\\d_]*)?$','i');
   return pattern.test(myURL);
}

function updatefourm (datajason) {
  console.log(datajason)

  let data = datajason
    
      document.getElementById("text").innerText = data.text;               
    document.getElementById("agreement").innerText = data.agreement; 
    document.getElementById("subjectivity").innerText = data.subjectivity; 
    document.getElementById("confidence").innerText = data.confidence; 
    document.getElementById("irony").innerText = data.irony; 
    document.getElementById("score_tag").innerText = data.score_tag; 
    
}

  function performAction(e) { 
    e.preventDefault();
     url = document.getElementById("article-url").value;
    handlSubmit(url)

    }
    const handlSubmit = async () => {
  
      if(validURL(url)){
          post("http://localhost:8081/add-url",{url}).then(data => 
            updatefourm(data))
      }else{
          alert("enter vaild url ")
      }
      
      }
window.addEventListener('DOMContentLoaded', () => {
    
    let btn = document.getElementById("btn-submit").addEventListener('click', performAction)
    

})

