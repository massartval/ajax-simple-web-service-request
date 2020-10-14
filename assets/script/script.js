function getQuote() {
  // create the XHR Object
  let xhr = new XMLHttpRequest();
  // call the open function, GET-type of request, url, true-asynchronous
  xhr.open("GET", "https://thatsthespir.it/api", true);
  // call the onload
  xhr.onload = function () {
    //check if the status is 200(means everything is okay)
    //Common Types of HTTP Statuses
    // 200: OK
    // 404: ERROR
    // 403: FORBIDDEN
    if (this.status === 200) {
      // return server response as an object with JSON.parse
      console.log(JSON.parse(this.responseText));
      // modifies the target ids with a new content
      document.getElementById("quote").innerHTML = JSON.parse(this.responseText).quote;
      document.getElementById("author").innerHTML = JSON.parse(this.responseText).author;
      document.querySelector("img").src = JSON.parse(this.responseText).photo;
    } else if (this.status === 403) {
      // alert forbidden
      alert(`403 Forbidden access`);
    } else if (this.status === 404) {
      // alert page not found
      alert(`404 Page not found`);
    } else {
      alert(`Unknown error`);
    }
  };
  //call send
  xhr.send();
}
getQuote();
document.getElementById("button").addEventListener("click", getQuote);
