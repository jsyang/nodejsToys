var http=require('http');
var url =require('url');

// Users logged in at any moment, unique ID = object attribute name
var mice={};

// Mouse constructor.
function Mouse(x,y,idle)
{
    this.x=x;
    this.y=y;
    this.idle=idle;
}

// Kill the mice that are inactive.
function miceTimeout()
{
    console.log("-------------------------------------------------------");
    for(var i in mice)
    {        
        if(++mice[i].idle>100) delete mice[i];
        else console.log("['"+i+"'] x:"+mice[i].x+", y:"+mice[i].y+", idle:"+mice[i].idle);
    }
}

// Return a JSONP of all mice.
function getMice(jsonpFnName)
{
    var jsonpMice=[];
    for(var i in mice) jsonpMice.push('"'+i+'": {"x": '+mice[i].x+',"y": '+mice[i].y+',"idle": '+mice[i].idle+'}');
    return jsonpFnName+"({"+jsonpMice+"});";
}

// Create / Modify a Mouse.
function setMice(id,mouseProperties)
{
    if(mice[id])
    {
        mice[id].x=mouseProperties.x;
        mice[id].y=mouseProperties.y;
        mice[id].idle=0;
    }
    else
    {
        mice[id]=new Mouse(mouseProperties.x,mouseProperties.y,0);
    }
}
    
// Server req/res handling.
function handling(req, res)
{
    var resText="";

    var reqURL=url.parse(req.url,true);
    var q=reqURL.query;
    
    switch(reqURL.pathname)
    {
        case "/getmice":            
            resText=getMice(q.jsoncallback);
            break;
            
        case "/setmice":            
            if(q.id==undefined || q.x==undefined || q.y==undefined) break;
            setMice(q.id,{x:q.x,y:q.y});
            break;
    }       

    res.writeHead(200, {
        'Content-Type': 'application/javascript',
        'Access-Control-Allow-Origin': '*'
    });
    res.write(resText);
    res.end();
}

http.createServer(handling).listen(8124, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8124/');
setInterval(miceTimeout,500);

/*


http://blog.altosresearch.com/supporting-the-jsonp-callback-protocol-with-jquery-and-java/


// get a list of active mice.
$.get("http://127.0.0.1:8124/getmice?jsoncallback=?",{'id':"ds314",x:2,y:3},function(data){
    document.body.innerHTML=data;
},"jsonp")

// set current active mouse.
$.get("http://127.0.0.1:8124/setmice?jsoncallback=?",{id:'ds314',x:2,y:3},function(data){
    document.body.innerHTML=data;
},"jsonp")

*/