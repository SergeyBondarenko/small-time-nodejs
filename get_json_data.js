var http = require('http');

var coubApi = {
  url: "http://coub.com/api/v2/",
  searchword: "all",
  order: "newest_popular",
  page: 1
};

var coubApiUrl = coubApi.url + "search?q=" + coubApi.searchword + "&order_by" + coubApi.order + "&page=" + coubApi.page; 
console.log(coubApiUrl);

http.get(coubApiUrl, function (res) {
  var body = '';

  res.on('data', function (chunk) {
    body += chunk;
  });

  res.on('end', function () {
    var coubRes = JSON.parse(body);
    console.log(coubRes);
  });

}).on('error', function (e) {
  console.log("Error: ", e);
});

