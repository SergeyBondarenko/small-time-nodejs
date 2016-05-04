var http = require('http');

function CoubApi(url) {
  this.url = url;
  this.storage = [];
  this.searchData = searchData;
  this.storeData = storeData;
}

function searchData(searchtext, order, page) {
  var url = this.url+
            "search?q="+searchtext+
            "&order_by="+order+
            "&page="+page;

  http.get(url, function (res) {
    var body = '';
    
    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      storeData(JSON.parse(body));
    });

  }).on('error', function (err) {
    console.log("Error: ", e);
  });
}

function storeData(data) {
  var i;
  for(i = 0; i < 10; i++) {
    this.storage.push(data.coubs[i]);
  }
}

var coub = new CoubApi("http://coub.com/api/v2/");
coub.searchData("cat", "newest_popular", 1);
