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

// Get prices from a Kijiji results page.
function PageGetPrices(xml)
{    
    var pricesOnPage=[];
    
    // fuck hardcore parsing libraries --- FOR NOW
    // we'll do it live!
    while(1)
    {
        // Make sure our dollar signs are in the <title>
        var i=xml.indexOf("<title>");
        if(i==-1) break;
        xml=xml.slice(i+7);
        
        // Find the dollar sign.
        var i=xml.indexOf("$");
        if(i==-1) break;
        xml=xml.slice(i+1);
        
        var j=xml.indexOf("</");
        var listingPrice=parseFloat(xml.substring(0,j));
        if(!isNaN(listingPrice)) pricesOnPage.push(listingPrice);
        xml=xml.slice(j+8);
    }
    
    var itemLastDate=xml.substring(xml.lastIndexOf("<dc:date>")+9,xml.lastIndexOf("</dc:date>"));
    //console.log(pricesOnPage.length);
    
    return {
        pricesOnPage:pricesOnPage,
        itemLastDate:itemLastDate
    };
}

// Get prices page from Kijiji.
function PricesKijiji(item,region,port)
{
    var host=region+".kijiji.ca";
    // 0 = all ads
    // 1 = wanted
    // 2 = offering
    
    // Min Price of 1 so we don't get "Please Contact" garbage.
    var path="/f-SearchAdRss?AdType="+2+"&CatId=0&Keyword="+item+"&minPrice=1&Page=";
    
    port.prices=[]; // Add a field in there for the collected data (thus far).
    port.page=1;    // Start from page 1, end when the date for the first item matches that of the last page...
    port.itemLastDate="";
    
    GetRSS(port,host,path);

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
    var region=info[1];
    var item=info[2];
    
    PricesKijiji(item,region,res);
    
}).listen(8888);
