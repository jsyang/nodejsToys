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

  var innerText=HTML.replace(/((<[\s\/]*script\b[^>]*>)([^>]*)(<\/script>))/gi,''); // Delete Javascript code  
  innerText=innerText.replace(/<script[\d\D]*?>[\d\D]*?<\/script>/gi,''); // Delete Javascript code  
  innerText=innerText.replace(/(<!--.+?-->)/g,'');           // Delete comment tags
  innerText=innerText.replace(/(<meta.+?>)/ig,'');           // Delete comment tags
  innerText=innerText.replace(/(<!doctype.+?>)/ig,'');       // Delete DOCTYPE tag
  innerText=innerText.replace(/<\/?\w+((\s+\w+(\s*=\s*(?:"(.|\n)*?"|'(.|\n)*?'|[^'">\s]+))?)+\s*|\s*)\/?>/g,'');
  innerText=innerText.replace(/(&.+?;)/gs,'');               // Delete HTML entities  
  console.log(innerText);
  
  var digest=new comm.Commonality();
  digest.addBody(innerText);    
  for(var n=1; digest.recomp(++n)>20;);
  
  return digest.show("commonwords");
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
