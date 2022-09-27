import voec_data from "./voec_data_transformed.json" assert {type: "json"}

var x = "aaas.org";

let answer = document.getElementById("answer");
let answer2 = document.getElementById("answer2");
let info = document.getElementById("info");

let [tab] = await chrome.tabs.query({active:true, currentWindow: true});

let currUrl = tab.url;

// console.error(voec_data.urls[7]);

const match = voec_data.urls.find(element => {

    if (currUrl.includes(element)) {
      return true;
    }
});

// console.error(match);
// console.error(currUrl);

if(match === undefined){
    answer.innerHTML = "NO";
    answer.style.color = "#eb4034";
    answer2.innerHTML = "This website is not listed under VOEC."
}
else{
    answer.innerHTML = "YES";
    answer.style.color = "#33d113";
    answer2.innerHTML = "This website is indeed listed under VOEC."
    info.innerHTML = `Company: ${voec_data.url_data[match]["Company"]}<br>
    Country: ${voec_data.url_data[match]["Country"]}<br>
    Domain: ${match}`
}