var http = require('http');

function CoubApi (url) {
  this.url = url;
  this.storage = [];
  this.httpReq = httpReq;
  this.searchData = searchData;
  this.storeData = storeData;
}

function httpReq (url) {
  var promise = new Promise (function (resolve, reject) {

    http.get(url, function (res) {
      var data = '';
      
      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        if(data.length > 0) {
          resolve(JSON.parse(data));
        } else {
          reject("HTTP request rejected!");
        }
      });

    }).on('error', function (err) {
      console.log("Error: ", e);
    });

  });

  return promise;
}

function storeData (data) {
  var i;
  console.log("Storrrreee");
  for(i = 0; i < 10; i++) {
    this.storage.push(data.coubs[i]);
  }
}

function searchData (searchtext, order, page) {
  var url = this.url+
            "search?q="+searchtext+
            "&order_by="+order+
            "&page="+page;

  this.httpReq(url).then(function (data) {
    this.storeData(data);
  });
}

var coub = new CoubApi("http://coub.com/api/v2/");
coub.searchData("cat", "newest_popular", 1);
console.log(coub.storage);

