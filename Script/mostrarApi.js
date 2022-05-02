function ejecutarApi(){
    document.querySelector(".search").addEventListener("submit", (event) => {
      event.preventDefault();
      let query = document.getElementById("search_query").value;
      let requestUrl = `https://api.jikan.moe/v3/search/anime?q=${query}`;
      fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          let results = document.getElementById("results");
          results.innerHTML = "";
          data.results.forEach((item) => {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;
            let newImage = document.createElement("img");
            newImage.src = item.image_url;
            newDiv.appendChild(newImage);
            results.appendChild(newDiv);
          });
        });
    });
  };

$(document).ready(function(){
  $("#hide").click(function(){
    $("div").filter("#results").hide();
  });
  $("#show").click(function(){
    $("div").filter("#results").show();
  });
});