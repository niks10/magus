#pragma strict

var opened : boolean;
var message = new Array(4);
var choice : int;
var customSkin1:GUISkin;

function Start()
{
	opened = false;
	message = ["Malaria", "Indigestion", "Burns", "Chicken Pox"];
}

function startDialogue(o : boolean)
{
	opened = o;
}
var diseaseNAME : String;
// function to clean the string with ":"
function stringStrip(sickPersonName:String) {
		var temp = sickPersonName.Split(":"[0]);
		diseaseNAME = temp[0];
}

function OnGUI()
{
	//GUI.backgroundColor = Color.clear;
	GUI.skin = customSkin1;
	stringStrip(this.gameObject.name);
	
	if(diseaseNAME=="Malaria")
	{
		choice = 0;
	}
	else if(diseaseNAME=="Indigestion")
	{
		choice = 1;
	}
	else if(diseaseNAME=="Burns")
	{
		choice = 2;
	}
	else if(diseaseNAME=="Chicken Pox")
	{
		choice = 3;
	}
	var outMessage : String = "This human has the following disease,"+'\n'+message[choice].ToString()+'\n'+"Human : O mighty wizard...SAVE ME!";
	if(opened)
	{
		GUI.Label(Rect(Screen.width-310, 10, 300, 100),outMessage);
		
			if(Event.current.button == 1)
				opened=false;
				//Debug.Log("Awesome");
	}
}