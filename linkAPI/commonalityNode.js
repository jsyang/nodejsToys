/*******************************************************************************
    Commonality object (pseudo-unique abstract tag set)
    JSYANG.CA @ gmail.com
    23/10/2010 ~ nodeJS version 31/05/2011
*******************************************************************************/
  
var w={'the':{},'of':0,'to':0,'and':0,'a':0,'in':0,'is':0,'it':0,'you':0,'that':0,'he':0,'was':0,'for':0,'on':0,'are':0,'with':0,'as':0,'i':0,'his':0,'they':0,'be':0,'at':0,'one':0,'have':0,'this':0,'from':0,'or':0,'had':0,'by':0,'hot':0,'but':0,'some':0,'what':0,'there':0,'we':0,'can':0,'out':0,'other':0,'were':0,'all':0,'your':0,'when':0,'up':0,'use':0,'word':0,'how':0,'said':0,'an':0,'each':0,'she':0,'which':0,'do':0,'their':0,'time':0,'if':0,'will':0,'way':0,'about':0,'many':0,'then':0,'them':0,'would':0,'write':0,'like':0,'so':0,'these':0,'her':0,'long':0,'make':0,'thing':0,'see':0,'him':0,'two':0,'has':0,'look':0,'more':0,'day':0,'could':0,'go':0,'come':0,'did':0,'my':0,'sound':0,'no':0,'most':0,'number':0,'who':0,'over':0,'know':0,'water':0,'than':0,'call':0,'first':0,'people':0,'may':0,'down':0,'side':0,'been':0,'now':0,'find':0,'any':0,'new':0,'work':0,'part':0,'take':0,'get':0,'place':0,'made':0,'live':0,'where':0,'after':0,'back':0,'little':0,'only':0,'round':0,'man':0,'year':0,'came':0,'show':0,'every':0,'good':0,'me':0,'give':0,'our':0,'under':0,'name':0,'very':0,'through':0,'just':0,'form':0,'much':0,'great':0,'think':0,'say':0,'help':0,'low':0,'line':0,'before':0,'turn':0,'cause':0,'same':0,'mean':0,'differ':0,'move':0,'right':0,'boy':0,'old':0,'too':0,'does':0,'tell':0,'sentence':0,'set':0,'three':0,'want':0,'air':0,'well':0,'also':0,'play':0,'small':0,'end':0,'put':0,'home':0,'read':0,'hand':0,'port':0,'large':0,'spell':0,'add':0,'even':0,'land':0,'here':0,'must':0,'big':0,'high':0,'such':0,'follow':0,'act':0,'why':0,'ask':0,'men':0,'change':0,'went':0,'light':0,'kind':0,'off':0,'need':0,'house':0,'picture':0,'try':0,'us':0,'again':0,'animal':0,'point':0,'mother':0,'world':0,'near':0,'build':0,'self':0,'earth':0,'father':0,'head':0,'stand':0,'own':0,'page':0,'should':0,'country':0,'found':0,'answer':0,'school':0,'grow':0,'study':0,'still':0,'learn':0,'plant':0,'cover':0,'food':0,'sun':0,'four':0,'thought':0,'let':0,'keep':0,'eye':0,'never':0,'last':0,'door':0,'between':0,'city':0,'tree':0,'cross':0,'since':0,'hard':0,'start':0,'might':0,'story':0,'saw':0,'far':0,'sea':0,'draw':0,'left':0,'late':0,'run':0,"don't":0,'while':0,'press':0,'close':0,'night':0,'real':0,'life':0,'few':0,'stop':0,'open':0,'seem':0,'together':0,'next':0,'white':0,'children':0,'begin':0,'got':0,'walk':0,'example':0,'ease':0,'paper':0,'often':0,'always':0,'music':0,'those':0,'both':0,'mark':0,'book':0,'letter':0,'until':0,'mile':0,'river':0,'car':0,'feet':0,'care':0,'second':0,'group':0,'carry':0,'took':0,'rain':0,'eat':0,'room':0,'friend':0,'began':0,'idea':0,'fish':0,'mountain':0,'north':0,'once':0,'base':0,'hear':0,'horse':0,'cut':0,'sure':0,'watch':0,'color':0,'face':0,'wood':0,'main':0,'enough':0,'plain':0,'girl':0,'usual':0,'young':0,'ready':0,'above':0,'ever':0,'red':0,'list':0,'though':0,'feel':0,'talk':0,'bird':0,'soon':0,'body':0,'dog':0,'family':0,'direct':0,'pose':0,'leave':0,'song':0,'measure':0,'state':0,'product':0,'black':0,'short':0,'numeral':0,'class':0,'wind':0,'question':0,'happen':0,'complete':0,'ship':0,'area':0,'half':0,'rock':0,'order':0,'fire':0,'south':0,'problem':0,'piece':0,'told':0,'knew':0,'pass':0,'farm':0,'top':0,'whole':0,'king':0,'size':0,'heard':0,'best':0,'hour':0,'better':0,'true .':0,'during':0,'hundred':0,'am':0,'remember':0,'step':0,'early':0,'hold':0,'west':0,'ground':0,'interest':0,'reach':0,'fast':0,'five':0,'sing':0,'listen':0,'six':0,'table':0,'travel':0,'less':0,'morning':0,'ten':0,'simple':0,'several':0,'vowel':0,'toward':0,'war':0,'lay':0,'against':0,'pattern':0,'slow':0,'center':0,'love':0,'person':0,'money':0,'serve':0,'appear':0,'road':0,'map':0,'science':0,'rule':0,'govern':0,'pull':0,'cold':0,'notice':0,'voice':0,'fall':0,'power':0,'town':0,'fine':0,'certain':0,'fly':0,'unit':0,'lead':0,'cry':0,'dark':0,'machine':0,'note':0,'wait':0,'plan':0,'figure':0,'star':0,'box':0,'noun':0,'field':0,'rest':0,'correct':0,'able':0,'pound':0,'done':0,'beauty':0,'drive':0,'stood':0,'contain':0,'front':0,'teach':0,'week':0,'final':0,'gave':0,'green':0,'oh':0,'quick':0,'develop':0,'sleep':0,'warm':0,'free':0,'minute':0,'strong':0,'special':0,'mind':0,'behind':0,'clear':0,'tail':0,'produce':0,'fact':0,'street':0,'inch':0,'lot':0,'nothing':0,'course':0,'stay':0,'wheel':0,'full':0,'force':0,'blue':0,'object':0,'decide':0,'surface':0,'deep':0,'moon':0,'island':0,'foot':0,'yet':0,'busy':0,'test':0,'record':0,'boat':0,'common':0,'gold':0,'possible':0,'plane':0,'age':0,'dry':0,'wonder':0,'laugh':0,'thousand':0,'ago':0,'ran':0,'check':0,'game':0,'shape':0,'yes':0,'hot':0,'miss':0,'brought':0,'heat':0,'snow':0,'bed':0,'bring':0,'sit':0,'perhaps':0,'fill':0,'east':0,'weight':0,'language':0,'among':0};
    
exports.Commonality=function(){
	this.words={};		// hashtable of words
	this.commons={};	// hashtable of common words for all blocks
	
	// we save the blocks of text that from the same source
	this.blocks=[];
	this.keyphrases={};

	this.commonsSize=0;
	
	// histogram / freq table of all the words
    /* to do... */
	
	// cMinFreq = commons word frequency min bound
	// needs to appear more than this # of times to be "common" in the
	// commonality

	// recompute the common theme
	this.recomp=function(cMinFreq){
		/*********************************** compute the common words */
		this.commons={};
        this.commonsSize=0;
		for(var i in this.words){
			if(this.words[i]>cMinFreq){
                this.commons[i]=0;
                this.commonsSize++;
            }
		}
	};

	
	// the THEME of the Commonality
	this.theme=function(){
		var a="";
		for(var i in this.commons){ a+=i+" "; }
		return a;
	};

	// add an entire body (logical collection of blocks -- article)
	this.addbody=function(a){
		/******************** split the body into blocks (paragraphs) */
		a=a.split("\n");
		var b=[];
		for(var i in a){
			if(a[i].length) b.push(a[i]);
		}
		
		for(var i in b){
			this.add(b[i]);
		}

	};

	// add a block
	this.add=function(a){
		/***************************************** remove punctuation */
		// .,!?;:
		a=a.replace(new RegExp("[\\.,!\\?;:\\)\\(]",["g"]),"");
		// to all lowercase 
		a=a.toLowerCase();
		// apostroph'd words, contractions and possessives
		var b=["m","s","t","d","ll","re","ve"];
		for(var i in b){
			a=a.replace(new RegExp("(\\S)+(�|\\')("+b[i]+")",["gi"]), "");
		}
		// " and ' and the special quote characters
		a=a.replace(new RegExp("[\\'��\"��]",["g"]),"");
	
		//-------- split into word array, remove empties and duplicates
		var b=a.split(" ");
	
		this.blocks.push(b);	// push the word array
	
		// convert the array into an object and add the words in the 
		// paragraph into the object as members and then reconvert the 
		// object back
		var c={}; for(var i in b){
			if(b[i].length) c[b[i]]={};
		}
	
		b=[]; for(var i in c){
			if(i.length>1 && w[i]==undefined) b.push(i);
		}

		/************************************* tally the unique words */
		for(var i in b){
			if(typeof(this.words[b[i]])!='undefined'){
				this.words[b[i]]++;
			}else{
				this.words[b[i]]=1;
			}
		}
		
	};

}
