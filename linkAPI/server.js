var http = require('http');
var url  = require('url');
var comm = require('./commonalityNode.js');

// Curl.
function curl(res_,host,path,callback)
{
  res_.dataDump="";
  http.get({host:host,port:80,path:path},function(res){    
    res.on('data',function(chunk){res_.dataDump+=chunk;});
    res.on('end', function(){
      if(callback) res_.end(callback(res_.dataDump));      
    });
  });
}

function stripHTMLgetTAGS(HTML){
  var txtOnly=HTML.replace(/<\/?\w+((\s+\w+(\s*=\s*(?:"(.|\n)*?"|'(.|\n)*?'|[^'">\s]+))?)+\s*|\s*)\/?>/g,'');

  var tags=new comm.Commonality();
  tags.addbody(txtOnly);
  var m=1; do {
    tags.recomp(++m);
  } while(tags.commonsSize>7);
  
  return tags.theme();
}


http.Server(function(req,res)
{
  res.writeHead(200,{
    'Content-Type':                 'text/plain',
    'Access-Control-Allow-Origin':  '*'
  });

  var queryURL=url.parse(req.url).pathname.substring(1).split("/");
  var r={
    host: queryURL.shift(),
    path: "/"+queryURL.join("/")
  };
  
  curl(res, r.host, r.path, stripHTMLgetTAGS);

}).listen(8888);
