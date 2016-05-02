// Get JSON type object from file.
// Get url and change it protocol.
// Write changes back to file.
// Object example:
//{"kibanaSavedObjectMeta":{"searchSourceJSON":"{}"},"version":1,"datasourceParams":"{\"timeout\":\"10000\",\"max_age\":3600000,\"url\":\"http://127.0.0.1:8061/graph/query\"}","datasourceType":"tinkerpop3","description":"","title":"Kibi Gremlin Server"}

var fs = require('fs');
var url = require('url');

var file = process.argv[2];

fs.readFile(file, 'utf8', function (err, data) {
  if (err) throw err;

  var obj = JSON.parse(data);
  var dataSrc = JSON.parse(obj.datasourceParams);
  var parsed = url.parse(dataSrc.url);

  parsed.protocol = "https:";
  dataSrc.url = url.format(parsed);
  obj.datasourceParams = JSON.stringify(dataSrc);

  console.log(obj);

  fs.writeFile(file, JSON.stringify(obj), function (err) {
    if (err) throw err;
    else console.log('Write to file successfully!\n');
  });
});
