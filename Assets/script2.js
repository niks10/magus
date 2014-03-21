 //public var burn:Texture ;
//public var ind:Texture ;
//public var malaria:Texture ;
//public var pox:Texture ;

public var green:Texture ;//tick
public var red:Texture ;//cross
private var a : boolean[]=new boolean[4];//boolean for 1st name
private var b : boolean[]=new boolean[4];//boolean for 2st name
public var h:int;			  			 //index of user selected value
private var malaria :String[]=["a","b"];//array stores list of ppl with malaria
private var burn :String[]=["c"];//array stores list of ppl with b
private var ind :String[]=["d"];//array stores list of ppl with i
private var pox :String[]=["e"];//array stores list of ppl with p
public var c:String = "e";//static value given
public var i:int;//counter to traverse array
public var d:boolean;//to chk if d person has malaria/b/i/p 
public var e:boolean;//to chk if e person has malaria/b/i/p 
public var f:boolean;//to chk if f person has malaria/b/i/p 
public var g:boolean;//to chk if g person has malaria/b/i/p 
var customSkin2:GUISkin;
//if true, show spell set
public var startSpell : boolean;
public var screenText : GUIText;

//right correct for right half of name, left correct for same logic
public var rightCorrect : boolean;
public var leftCorrect : boolean;
public var correctSpell : boolean;
//c="p1";

var player;

public var j: int;//index to species name, corresponding to unser selection

var opt1 = ["Aloe","Zingiber","Clerodendrum","Azadirachta"];//stores the value clicked by user, corresponding to h 
var opt2 = ["barbadensis","officinale","viscosum","indica"];//stores the value clicked by user, corresponding to h
var disease = ["Burns", "Indigestion", "Malaria", "Chicken Pox"];

//store current disease
var sickPersonDisease:String;

// dictionary to save the disease and its herbs
public var diseaseDict = new Hashtable();

function Start()
{
	//green = Load("green");
	//red = Load("red");
	Data();
	startSpell = false;
	leftCorrect = rightCorrect = false;
	spellCorrect = false;
	player = GameObject.Find("HarryThePlayer").GetComponent(shootSpell);
}

function Data() {
	for (var i = 0; i < opt1.length; i++)
	{
		diseaseDict[disease[i]] = opt1[i]+" "+opt2[i];
		
	}
//	Debug.Log("Dict Check : "+diseaseDict["Burns"]);
}

// function to clean the string with ":"
function stringStrip(sickPersonName:String) {
		var temp = sickPersonName.Split(":"[0]);
		sickPersonDisease = temp[0];
}


function setStartSpell(s : boolean)
{
	startSpell = s;
}

function setSickPersonDisease(SickDisease : String)
{
	//sickPersonDisease = SickDisease;
	stringStrip(SickDisease);
	//Debug.Log("Got it! : "+sickPersonDisease);
}

function getSickPersonDisease():String {

	//sickPersonDisease = "Malaria";
	return sickPersonDisease;
}

function reset()
{
	d = e = f = g = false;
	for(var i:int = 0; i<4; i++)
	{
		a[i] = b[i] = false;	
	}
	//player.setPlayAudio(false);
}

function OnGUI ()
{
//green = Resources.Load("green");red = Resources.Load("red");
GUI.skin = customSkin2;
//GUI.contentColor = Color.black;
if(startSpell)
{
	GUI.Box(Rect(430, 30, 110, 50),"...");
	GUI.Box(Rect(540, 30, 110, 50),"...");
   var getDisease = getSickPersonDisease();
   //Debug.Log("startSpell : "+getDisease);
   if (getDisease == "Malaria")
   		d = true;
   else if (getDisease == "Burns")
   		e = true;
   else if (getDisease == "Indigestion")
   		f = true;
   else if (getDisease == "Chicken Pox")
   		g = true;
   else	
   {
   		//Debug.Log("NOT WAARKING");
   }

if(GUI.Button (Rect (10,10, 100, 20), "Aloe "))
{
	a[0]=true;h=0;
}
if(GUI.Button (Rect (110,10, 100, 20), "Zingiber "))
{
	a[1]=true;h=1;
}
if(GUI.Button (Rect (210,10, 100, 20), "Clerodendrum "))
{
	a[2]=true;h=2;
}
if(GUI.Button (Rect (310,10, 100, 20), "Azadirachta "))
{
	a[3]=true;h=3;
}
if(GUI.Button (Rect (650,10, 100, 20), "barbadensis"))
{
	b[0]=true;j=0;
}
if(GUI.Button (Rect (750,10, 100, 20), "officinale"))
{
	b[1]=true;j=1;
}
if(GUI.Button (Rect (850,10, 100, 20), "viscosum"))
{
	b[2]=true;j=2;
}
if(GUI.Button (Rect (950,10, 100, 20), "indica"))
{
	b[3]=true;j=3;
}


if(d==true )
{ 
if( a[2]==true)
{

	GUI.Box(Rect(430, 30, 110, 50),opt1[h]);
	GUI.DrawTexture(Rect (455, 1,50, 50),green );
	leftCorrect = true;
}

else
{
	GUI.Box(Rect(430, 30, 110, 50),opt1[h]);
	GUI.DrawTexture(Rect (455, 1,50, 50),red);
	leftCorrect = false;
}



if( b[2]==true)
{
	GUI.Box(Rect(540, 30, 110, 50),opt2[j]);
	GUI.DrawTexture(Rect (565, 1,50, 50),green );
	rightCorrect = true;
}
else 
{
	GUI.Box(Rect(540, 30, 110, 50),opt2[j]);
	GUI.DrawTexture(Rect (565, 1,50, 50),red);
	rightCorrect = false;
}

}

if(e==true )
{ 
if( a[0]==true)
{

GUI.Box(Rect(430, 30, 110, 50),opt1[h]);
GUI.DrawTexture(Rect (455, 1,50, 50),green );
leftCorrect = true;
}

else

{
GUI.Box(Rect(430, 30, 110, 50),opt1[h]);
GUI.DrawTexture(Rect (455, 1,50, 50),red);
leftCorrect = false;
}



if( b[0]==true)
{
GUI.Box(Rect(540, 30, 110, 50),opt2[j]);
GUI.DrawTexture(Rect (565, 1,50, 50),green );
rightCorrect = true;
}else 
{
GUI.Box(Rect(540, 30, 110, 50),opt2[j]);
GUI.DrawTexture(Rect (565, 1,50, 50),red);
rightCorrect = false;
}
}


if(f==true )
{ 
if( a[1]==true)
{

GUI.Box(Rect(430, 30, 110, 50),opt1[h]);
GUI.DrawTexture(Rect (455, 1,50, 50),green );
leftCorrect = true;
}else
{
GUI.Box(Rect(430, 30, 110, 50),opt1[h]);
GUI.DrawTexture(Rect (455, 1,50, 50),red);
leftCorrect = false;
}


if( b[1]==true)
{
GUI.Box(Rect(540, 30, 110, 50),opt2[j]);
GUI.DrawTexture(Rect (565, 1,50, 50),green );
rightCorrect = true;
}else 
{
GUI.Box(Rect(540, 30, 110, 50),opt2[j]);
GUI.DrawTexture(Rect (565, 1,50, 50),red);
rightCorrect = false;
}
}
if(g==true )
{ 
if( a[3]==true)
{
GUI.Box(Rect(430, 30, 110, 50),opt1[h]);
GUI.DrawTexture(Rect (455, 1,50, 50),green );
leftCorrect = true;
}
else

{
GUI.Box(Rect(430, 30, 110, 50),opt1[h]);
GUI.DrawTexture(Rect (455, 1,50, 50),red);
leftCorrect = false;
}



if( b[3]==true)
{
GUI.Box(Rect(540, 30, 110, 50),opt2[j]);
GUI.DrawTexture(Rect (565, 1,50, 50),green );
rightCorrect = true;
}
else 
{
GUI.Box(Rect(540, 30, 110, 50),opt2[j]);
GUI.DrawTexture(Rect (565, 1,50, 50),red);
rightCorrect = false;
}
}
//all checking done
//return correctness of spell
if(leftCorrect && rightCorrect)
{
	correctSpell = true;
}
else
{
	correctSpell = false;
}
//Debug.Log(leftCorrect.ToString()+rightCorrect.ToString()+correctSpell.ToString());
//return function for sending spell correctness
spellCorrectness();
}
}

function spellCorrectness()
{
	//
	var gmO = GameObject.Find("RabbitCube").GetComponent(rabbitSeek);
	var gmO2 = GameObject.Find("FireBall").GetComponent(respondToStrike);
	
	if(correctSpell)
	{
		//respond for correctness and allow fire
		gmO2.setFire(correctSpell);
		//gmO2.checkConnection();
		gmO.incrementGuy();
		player.setPlayAudio(true);
		correctSpell = false;
		spellStart = false;
		ChoiceAndWait("CORRECT CHOICE");
		//Debug.Log("Correct Choice");
		reset();
	}
	else
	{
		//respond for falseness
		player.setPlayAudio(false);
		//Debug.Log("Wrong Choice"+player.getPlayAudio());
	}
}

function setTargetObject(t : GameObject)
{
	target = t;
}

function ChoiceAndWait(m : String)
{
	screenText.text = "Correct :)";
	yield WaitForSeconds(5);
	screenText.text = "";
}