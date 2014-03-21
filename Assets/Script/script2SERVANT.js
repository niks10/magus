 //public var burn:Texture ;
//public var ind:Texture ;
//public var malaria:Texture ;
//public var pox:Texture ;

public var green:Texture ;//tick
public var red:Texture ;//cross
private var a : boolean[]= new boolean[4];//boolean for 1st name
private var b : boolean[]= new boolean[4];//boolean for 2st name
public var h:int;			  			 //index of user selected value
private var malaria :String[]=["a","b"];//array stores list of ppl with malaria
private var burn :String[]=["c"];//array stores list of ppl with b
private var ind :String[]=["d"];//array stores list of ppl with i
private var pox :String[]=["e"];//array stores list of ppl with p
public var c:String="e";//static value given
public var i:int;//counter to traverse array
public var d:boolean;//to chk if d person has malaria/b/i/p 
public var e:boolean;//to chk if e person has malaria/b/i/p 
public var f:boolean;//to chk if f person has malaria/b/i/p 
public var g:boolean;//to chk if g person has malaria/b/i/p 

//if true, show spell set
public var startSpell : boolean;

//right correct for right half of name, left correct for same logic
public var rightCorrect : boolean;
public var leftCorrect : boolean;
public var correctSpell : boolean;
//c="p1";

public var j: int;//index to species name, corresponding to unser selection

var opt1 = ["Aloe","Zingiber","Clerodendrum","Azadirachta"];//stores the value clicked by user, corresponding to h 
var opt2 = ["barbadensis","officinale","viscosum","indica"];//stores the value clicked by user, corresponding to h
var disease = ["Burn", "Indigestion", "Malaria", "Chicken Pox"];

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
}

function Data() {
	for (var i = 0; i < opt1.length; i++)
	{
		diseaseDict[disease[i]] = opt1[i]+" "+opt2[i];
		
	}
//	Debug.Log("Dict Check : "+diseaseDict["Burns"]);
}

function setStartSpell(s : boolean)
{
	startSpell = s;
}

// set the disease accordingly
function setSickPersonDisease(SickDisease : String)
{
	stringStrip(SickDisease);
}

// get sick person
function getSickPersonDisease():String {

	return sickPersonDisease;
}

// function to clean the string with ":"
function stringStrip(sickPersonName:String) {
		var temp = sickPersonName.Split(":"[0]);
		sickPersonDisease = temp[0];

}


function reset()
{
	d = e = f = g = false;
	for(var i:int = 0; i<4; i++)
	{
		a[i] = b[i] = false;	
	}
}

function OnGUI ()
{
//green = Resources.Load("green");red = Resources.Load("red");
guiButton();
if(startSpell)
{
   var getDisease = getSickPersonDisease();
   
   
   //Debug.Log("startSpell : "+getDisease);
   if (getDisease == "Malaria")
   		d = true;
   if (getDisease == "Burn")
   		e = true;
   if (getDisease == "Indigestion")
   		f = true;
   if (getDisease == "Chicken Pox")
   		g = true;
   		

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

		GUI.Label(Rect(400,20, 100, 100),opt1[h]);
		GUI.DrawTexture(Rect (350,50,100,100),green );
		leftCorrect = true;
	}

	else
	{
		GUI.Label(Rect(400,20, 100, 100),opt1[h]);
		GUI.DrawTexture(Rect (350,50,100,100),red);
		leftCorrect = false;
	}



if( b[2]==true)
{
	GUI.Label(Rect(500,20, 100, 100),opt2[j]);
	GUI.DrawTexture(Rect (500,50,100,100),green );
	rightCorrect = true;
}
else 
{
	GUI.Label(Rect(500,20, 100, 100),opt2[j]);
	GUI.DrawTexture(Rect (500,50,100,100),red);
	rightCorrect = false;
}

}

if(e==true )
{ 
if( a[0]==true)
{

GUI.Label(Rect(400,20, 100, 100),opt1[h]);
GUI.DrawTexture(Rect (350,50,100,100),green );
leftCorrect = true;
}

else

{
GUI.Label(Rect(400,20, 100, 100),opt1[h]);
GUI.DrawTexture(Rect (350,50,100,100),red);
leftCorrect = false;
}



if( b[0]==true)
{
GUI.Label(Rect(500,20, 100, 100),opt2[j]);
GUI.DrawTexture(Rect (500,50,100,100),green );
rightCorrect = true;
}else 
{
GUI.Label(Rect(500,20, 100, 100),opt2[j]);
GUI.DrawTexture(Rect (500,50,100,100),red);
rightCorrect = false;
}
}


if(f==true )
{ 
if( a[1]==true)
{

GUI.Label(Rect(400,20, 100, 100),opt1[h]);
GUI.DrawTexture(Rect (350,50,100,100),green );
leftCorrect = true;
}else
{
GUI.Label(Rect(400,20, 100, 100),opt1[h]);
GUI.DrawTexture(Rect (350,50,100,100),red);
leftCorrect = false;
}


if( b[1]==true)
{
GUI.Label(Rect(500,20, 100, 100),opt2[j]);
GUI.DrawTexture(Rect (500,50,100,100),green );
rightCorrect = true;
}else 
{
GUI.Label(Rect(500,20, 100, 100),opt2[j]);
GUI.DrawTexture(Rect (500,50,100,100),red);
rightCorrect = false;
}
}
if(g==true )
{ 
if( a[3]==true)
{
GUI.Label(Rect(400,20, 100, 100),opt1[h]);
GUI.DrawTexture(Rect (350,50,100,100),green );
leftCorrect = true;
}
else

{
GUI.Label(Rect(400,20, 100, 100),opt1[h]);
GUI.DrawTexture(Rect (350,50,100,100),red);
leftCorrect = false;
}



if( b[3]==true)
{
GUI.Label(Rect(500,20, 100, 100),opt2[j]);
GUI.DrawTexture(Rect (500,50,100,100),green );
rightCorrect = true;
}
else 
{
GUI.Label(Rect(500,20, 100, 100),opt2[j]);
GUI.DrawTexture(Rect (500,50,100,100),red);
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
Debug.Log(leftCorrect.ToString()+rightCorrect.ToString()+correctSpell.ToString());
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
		gmO2.checkConnection();
		gmO.incrementGuy();
		correctSpell = false;
		spellStart = false;
		//Debug.Log("Correct Choice");
		reset();
	}
	else
	{
		//respond for falseness
		//Debug.Log("Wrong Choice");
	}
}


function guiButton() {
  // get the person disease
  // draw the eight buttons
  // get the herbs for corresponding disease from dictionary
  // if herb enterted by user is equal to herb in dictionary mark it correct
  var sickPersonDisease = getSickPersonDisease();
  var correctHerb = diseaseDict[sickPersonDisease.ToString()];
  var herbButton = new Array();
  
  // Loop to create the button 
  var size = (opt1.Length + opt2.Length);
  for (var i = 0; i < size; i++){
   		
     	if ( i < 4 ) {
     		// layout the button on the GUI
        	herbButton[i] = GUI.Button(Rect(100+100*i,0,100,30),opt1[i]);
        }
        else {
        	// laout the button on the GUI
        	herbButton[i] = GUI.Button(Rect(10+100*(i+4),0,100,30),opt2[i-4]);
        }
       
   }
   
   //var scientificName = correctHerb.Split(" "[0]);
   //Debug.Log(herbButton[0].text);
   
   for (var j = 0; j < herbButton.length; j++) {
   			if (herbButton[j]) {
   				if (j < 4) {
   					//GUI.contentColor = Color.black;
   					GUI.Button(Rect(10,20, 100, 30), opt1[j]);
   					//Debug.Log("hello");
   				} else {
   					GUI.Button(Rect(10,20, 100, 30), opt2[j-4]);
   				}
   			}
   }
    
  
}