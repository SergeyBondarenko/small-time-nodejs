var http = require('http');

function CoubApi(url, srchtxt, order, page) {
  this.url = url;
  this.srchtxt = srchtxt;
  this.order = order;
  this.page = page;
  this.getData = getData;
}

function getData() {
  var url = this.url+"search?q="+
            this.srchtxt+"&order_by="+
            this.order+"&page="+
            this.page;

  http.get(url, function (res) {
    var body = '';
    
    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      var coubHot = JSON.parse(body);
      console.log(coubHot);
    });

  }).on('error', function (err) {
    console.log("Error: ", e);
  });
}

var coub = new CoubApi("http://coub.com/api/v2/", "cat", "newest_popular", 1);
coub.getData();
