var http = require('http');

function CoubApi (url) {
  this.url = url;
  this.storage = [];
  this.httpReq = httpReq;
  this.searchData = searchData;
  this.storeData = storeData;
}

function httpReq (url) {
  http.get(url, function (res) {
    var data = '';
    
    res.on('data', function (chunk) {
      data += chunk;
    });

    res.on('end', function () {
      this.storeData(JSON.parse(data)); 
    });

  }).on('error', function (err) {
    console.log("Error: ", e);
  });
}

function searchData (searchtext, order, page) {
  var url = this.url+
            "search?q="+searchtext+
            "&order_by="+order+
            "&page="+page;
  this.httpReq(url);
}

function storeData (data) {
  var i;
  for(i = 0; i < 10; i++) {
    this.storage.push(data.coubs[i]);
  }
}

var coub = new CoubApi("http://coub.com/api/v2/");
coub.searchData("cat", "newest_popular", 1);
console.log(coub.storage);

