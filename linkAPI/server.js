var http = require('http');
var url  = require('url');

// Get an RSS response from the host.
function GetRSS(port,host,path)
{
    console.log(host+path+port.page);
    http.get({host:host,port:80,path:path+port.page},function(res)
    {        
        port.dataDump="";
        res.on('data',function(chunk){ port.dataDump+=chunk; });
        res.on('end',function()
        {
            var info=PageGetPrices(port.dataDump);

            if(port.itemLastDate===info.itemLastDate)
            {
                // We got all the prices!
                var sum=0;
                var _N=1/port.prices.length;
                for(var i in port.prices) sum+=port.prices[i];
                var sampleMean=sum*_N;
                
                sum=0;
                for(var i in port.prices) sum+=(port.prices[i]-sampleMean)*(port.prices[i]-sampleMean);
                var sampleVariance=sum*_N;
                
                console.log("Calculating using prices:"+port.prices+"\n\n");
                
                port.end("\nSample mean: "+sampleMean+"\nSample Std. Dev.:"+Math.sqrt(sampleVariance)+"\n");
            }
            else
            {
                // Keep fetching!
                port.itemLastDate=info.itemLastDate;
                console.log(port.itemLastDate);
                port.prices=port.prices.concat(info.pricesOnPage);
                
                port.page++;
                GetRSS(port,host,path);
            }
        });
    });
}

// Response writing.
http.Server(function(req,res)
{
    res.writeHead(200,
    {
        'Content-Type':'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    // Region first, then item name.
    var info=url.parse(req.url).pathname.split("/");

    PricesKijiji(item,region,res);
    
}).listen(8888);
