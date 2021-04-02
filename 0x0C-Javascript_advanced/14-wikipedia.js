function createElement(data) {
  const p = document.createElement("p");
  p.innerText = data;
  const body = document.querySelector("body");
  body.appendChild(p);
}

function queryWikipedia(callback) {
  var reqst = new XMLHttpRequest();
  reqst.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(reqst.response.query.pages["21721040"].extract);
    }
  };
  const URL =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  reqst.open("GET", URL, true);
  reqst.responseType = "json";
  reqst.send(null);
}

queryWikipedia(createElement);
