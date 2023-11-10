let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

function createAppend(results){
  let{link,title,description}=results;

  let div=document.createElement("div");
  div.classList.add("result-item");
  searchResultsEl.appendChild(div);

  let a=document.createElement("a");
  a.href=link;
  a.textContent=title;
  a.classList.add("result-title");
  div.appendChild(a);

  let br=document.createElement("br");
  div.appendChild(br);

  let alink =document.createElement("a");
  alink.classList.add("result-url");
  alink.href=link;
  alink.textContent=link;
  alink.target="_blank";
  div.appendChild(alink);

  let des=document.createElement("p");
  des.textContent=description;
  des.classList.add("link-description");
  div.appendChild(des);

}
function showResults(searchResults){
  spinnerEl.classList.toggle("d-none");

  for(results of searchResults){
    createAppend(results);

  }
}


function wikiSearch(event){
if(event.key === "Enter"){
spinnerEl.classList.toggle("d-none");
searchResultsEl.textContent="";
let searchInput=searchInputEl.value;
let url="https://apis.ccbp.in/wiki-search?search="+searchInput;
let options={
  method:"GET"
}
fetch(url,options)
.then(function(response){
  return response.json();
})
.then(function(json){
  let {search_results} = json;
  showResults(search_results);

});
}
}

searchInputEl.addEventListener("keydown",wikiSearch);