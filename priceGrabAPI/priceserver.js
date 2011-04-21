var http = require('http');

// Get an RSS response from the host.
function GetRSS(port,host,path,page)
{
    http.get({host:host,port:80,path:path+page},function(res)
    {        
        port.dataDump="";
        res.on('data',function(chunk){ port.dataDump+=chunk; });
        res.on('end',function(){ port.write(port.dataDump); port.end(); });
    });
}

// Get prices from a Kijiji results page.
function PageGetPrices(xml)
{    
    // fuck hardcore parsing libraries --- FOR NOW
    // we'll do it live!
    xml=xml.slice();
    
}

// Get prices page from Kijiji.
function PricesKijiji(item,region,sendBackPort)
{
    var host=region+".kijiji.ca";
    // 0 = all ads
    // 1 = wanted
    // 2 = offering
    
    var path="/f-SearchAdRss?AdType="+2+"&CatId=0&Keyword="+item+"&Page=";
    GetRSS(sendBackPort,host,path,1);
}

function getKijijiPrices(kword,baseurl)
{
    var i=1;
    var prices=[];
    var progressWindow=IE(0,-20,180,140,true);
    var progress=progressWindow.Document;    
    progress.body.style.overflow="hidden";
    progress.body.style.font="12px verdana";    
    progress.body.style.verticalAlign="middle";
    progress.body.innerHTML=kword+"<hr><b>Scraping page <span id='page'>0</span></b><br>Sample size: <span id='size'>0</span>";
    var pageProgress=progress.getElementById("page");
    var size=progress.getElementById("size");
    
    while(1){
        pageProgress.innerHTML=""+i;
        
        // Can decrease sleeptime if we've turned off image loading in IE, goes MUCH faster.
        (function(url){ie.Navigate(url);while(ie.Busy){}WScript.Sleep(1000);ie.Stop();}) (baseurl+i);

        var d=ie.Document;

        // Max page number that's not the current page.
        var gPage=IEGetElementsByClassName("notCurrentPage");
        gPage=gPage.length? parseInt(gPage[gPage.length-1].innerText) : 0;
        
        // Current page number.
        var cPage=IEGetElementsByClassName("currentPage");
        cPage=cPage.length? parseInt(cPage[0].innerText) : 1;

        // Max 20 results per page.
        for(var j=0; j<20; j++){            
            var t=d.getElementById("resultRow"+j);
            if(!t) break;
            var title=t.children[2].children[0].innerText;
            var price=t.children[3].innerText;
            price=parseFloat(price.substr(1));
            if(!isNaN(price)) prices.push(price);
            pageProgress.innerHTML+=".";
        }
        
        size.innerText=prices.length;
        
        // No more pages to look at, otherwise flip to next page
        if(cPage>gPage) break; else i++;        
    }
    
    progressWindow.Quit();
    
    return prices;
}


http.Server(function(req,res)
{
    res.writeHead(200,
    {
        'Content-Type':'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    PricesKijiji("netbook","hamilton",res);
    //res.end();
    
}).listen(8888);
