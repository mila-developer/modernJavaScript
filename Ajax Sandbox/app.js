document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText);
    }
  }

  xhr.send();

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not found"
}