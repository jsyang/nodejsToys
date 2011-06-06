/**
  Commonality object (pseudo-unique abstract tag set)
  jsyang.ca@gmail.com
  June 6, 2011
**/
  
var stopword={'the':1,'of':1,'to':1,'and':1,'a':1,'in':1,'is':1,'it':1,'you':1,'that':1,'he':1,'was':1,'for':1,'on':1,'are':1,'with':1,'as':1,'i':1,'his':1,'they':1,'be':1,'at':1,'one':1,'have':1,'this':1,'from':1,'or':1,'had':1,'by':1,'hot':1,'but':1,'some':1,'what':1,'there':1,'we':1,'can':1,'out':1,'other':1,'were':1,'all':1,'your':1,'when':1,'up':1,'use':1,'word':1,'how':1,'said':1,'an':1,'each':1,'she':1,'which':1,'do':1,'their':1,'time':1,'if':1,'will':1,'way':1,'about':1,'many':1,'then':1,'them':1,'would':1,'write':1,'like':1,'so':1,'these':1,'her':1,'long':1,'make':1,'thing':1,'see':1,'him':1,'two':1,'has':1,'look':1,'more':1,'day':1,'could':1,'go':1,'come':1,'did':1,'my':1,'sound':1,'no':1,'most':1,'number':1,'who':1,'over':1,'know':1,'water':1,'than':1,'call':1,'first':1,'people':1,'may':1,'down':1,'side':1,'been':1,'now':1,'find':1,'any':1,'new':1,'work':1,'part':1,'take':1,'get':1,'place':1,'made':1,'live':1,'where':1,'after':1,'back':1,'little':1,'only':1,'round':1,'man':1,'year':1,'came':1,'show':1,'every':1,'good':1,'me':1,'give':1,'our':1,'under':1,'name':1,'very':1,'through':1,'just':1,'form':1,'much':1,'great':1,'think':1,'say':1,'help':1,'low':1,'line':1,'before':1,'turn':1,'cause':1,'same':1,'mean':1,'differ':1,'move':1,'right':1,'boy':1,'old':1,'too':1,'does':1,'tell':1,'sentence':1,'set':1,'three':1,'want':1,'air':1,'well':1,'also':1,'play':1,'small':1,'end':1,'put':1,'home':1,'read':1,'hand':1,'port':1,'large':1,'spell':1,'add':1,'even':1,'land':1,'here':1,'must':1,'big':1,'high':1,'such':1,'follow':1,'act':1,'why':1,'ask':1,'men':1,'change':1,'went':1,'light':1,'kind':1,'off':1,'need':1,'house':1,'picture':1,'try':1,'us':1,'again':1,'animal':1,'point':1,'mother':1,'world':1,'near':1,'build':1,'self':1,'earth':1,'father':1,'head':1,'stand':1,'own':1,'page':1,'should':1,'country':1,'found':1,'answer':1,'school':1,'grow':1,'study':1,'still':1,'learn':1,'plant':1,'cover':1,'food':1,'sun':1,'four':1,'thought':1,'let':1,'keep':1,'eye':1,'never':1,'last':1,'door':1,'between':1,'city':1,'tree':1,'cross':1,'since':1,'hard':1,'start':1,'might':1,'story':1,'saw':1,'far':1,'sea':1,'draw':1,'left':1,'late':1,'run':1,"don't":1,'while':1,'press':1,'close':1,'night':1,'real':1,'life':1,'few':1,'stop':1,'open':1,'seem':1,'together':1,'next':1,'white':1,'children':1,'begin':1,'got':1,'walk':1,'example':1,'ease':1,'paper':1,'often':1,'always':1,'music':1,'those':1,'both':1,'mark':1,'book':1,'letter':1,'until':1,'mile':1,'river':1,'car':1,'feet':1,'care':1,'second':1,'group':1,'carry':1,'took':1,'rain':1,'eat':1,'room':1,'friend':1,'began':1,'idea':1,'fish':1,'mountain':1,'north':1,'once':1,'base':1,'hear':1,'horse':1,'cut':1,'sure':1,'watch':1,'color':1,'face':1,'wood':1,'main':1,'enough':1,'plain':1,'girl':1,'usual':1,'young':1,'ready':1,'above':1,'ever':1,'red':1,'list':1,'though':1,'feel':1,'talk':1,'bird':1,'soon':1,'body':1,'dog':1,'family':1,'direct':1,'pose':1,'leave':1,'song':1,'measure':1,'state':1,'product':1,'black':1,'short':1,'numeral':1,'class':1,'wind':1,'question':1,'happen':1,'complete':1,'ship':1,'area':1,'half':1,'rock':1,'order':1,'fire':1,'south':1,'problem':1,'piece':1,'told':1,'knew':1,'pass':1,'farm':1,'top':1,'whole':1,'king':1,'size':1,'heard':1,'best':1,'hour':1,'better':1,'true .':1,'during':1,'hundred':1,'am':1,'remember':1,'step':1,'early':1,'hold':1,'west':1,'ground':1,'interest':1,'reach':1,'fast':1,'five':1,'sing':1,'listen':1,'six':1,'table':1,'travel':1,'less':1,'morning':1,'ten':1,'simple':1,'several':1,'vowel':1,'toward':1,'war':1,'lay':1,'against':1,'pattern':1,'slow':1,'center':1,'love':1,'person':1,'money':1,'serve':1,'appear':1,'road':1,'map':1,'science':1,'rule':1,'govern':1,'pull':1,'cold':1,'notice':1,'voice':1,'fall':1,'power':1,'town':1,'fine':1,'certain':1,'fly':1,'unit':1,'lead':1,'cry':1,'dark':1,'machine':1,'note':1,'wait':1,'plan':1,'figure':1,'star':1,'box':1,'noun':1,'field':1,'rest':1,'correct':1,'able':1,'pound':1,'done':1,'beauty':1,'drive':1,'stood':1,'contain':1,'front':1,'teach':1,'week':1,'final':1,'gave':1,'green':1,'oh':1,'quick':1,'develop':1,'sleep':1,'warm':1,'free':1,'minute':1,'strong':1,'special':1,'mind':1,'behind':1,'clear':1,'tail':1,'produce':1,'fact':1,'street':1,'inch':1,'lot':1,'nothing':1,'course':1,'stay':1,'wheel':1,'full':1,'force':1,'blue':1,'object':1,'decide':1,'surface':1,'deep':1,'moon':1,'island':1,'foot':1,'yet':1,'busy':1,'test':1,'record':1,'boat':1,'common':1,'gold':1,'possible':1,'plane':1,'age':1,'dry':1,'wonder':1,'laugh':1,'thousand':1,'ago':1,'ran':1,'check':1,'game':1,'shape':1,'yes':1,'hot':1,'miss':1,'brought':1,'heat':1,'snow':1,'bed':1,'bring':1,'sit':1,'perhaps':1,'fill':1,'east':1,'weight':1,'language':1,'among':1};

exports.Commonality=function(text){  
	this.allwords={};     // All words in all bodies.
	this.commonwords={};  // All "common" words.
	this.paragraphs=[];
  
  this.show=function(o){ var a=[]; for(var i in this[o]) a.push(i); return ''+a; };
  this.show_=function(o){ var a=[]; for(var i in this[o]) a.push(i+":"+this[o][i]); return a.join('\n'); };
  
	// Todo: histogram / freq table of all the words

	// Recompute the common words, if a word has appeared >= minFreq times
  // it is considered a "common" word.
	this.recomp=function(minFreq){
    this.commonwords={};
    var numCommons=0;
    
    for(var i in this.allwords)
    if(this.allwords[i]>=minFreq){
      this.commonwords[i]=0;
      numCommons++;
    }
    return numCommons;    
	};

	// To see the "theme" of the commonality, simply use show_("commons").

	this.addBody=function(a){
    a=a.replace(/[\r\n]+/g,'\n');         // Newlines with single newline
    a=a.replace(/[ ]{2,}/g,' ');          // Whitespace with a single space
    a=a.split('\n');
    
		for(var i=a.length, b=[]; i--;){
      var paragraph=a[i].replace(/^[ \t]+|[ \t]+$/g,'');;  // Trim()
			if(paragraph.length>1)
        this.addParagraph(paragraph);
		}
	};

	this.addParagraph=function(a){
		// Clean up the input.
		a=a.toLowerCase();
    a=a.replace(/[ ]{2,}/g,' ');          // Whitespace with a single space.        
    a=a.replace(/^[ \t]+|[ \t]+$/g,'');   // Trim()
		a=a.replace(/[\\.,!\\?;:\\)\\(]/g,'');// .,!?;:
    
		var contractions=["m","s","t","d","ll","re","ve"];
		for(var i in contractions)
      a=a.replace(new RegExp("(\\S)+(’|\\')("+contractions[i]+")",["gi"]), '');		
		
    a=a.replace(/[\'’‘\"”“]/g,'');        // Quotes and special chars

    var words=a.split(' ');
    this.paragraphs.push(words);
    
		// Tally unique words that aren't in the stop-words list: w[]		
    for(var i in words){
      var word=words[i];
      if(word.length>1 && !stopword[word]){
        if(this.allwords[word]===undefined){
          this.allwords[word]=1;
        }else{
          this.allwords[word]++;
        }
      }
		}

		
	};

  if(text!==undefined) this.addBody(text);
}
