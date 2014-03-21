#pragma strict

var opened : boolean;
var message = new Array(4);
var choice : int;
var plantName : String;

function Start()
{
	opened = false;
	message = ["Azadirachta indica", "Zingiber officianale", "Clerodendrum viscosum", "Aloe barbedensis"];
}

function startDialogue(o : boolean)
{
	opened = o;
}

// function to clean the string with ":"
function stringStrip(sickPersonName:String) {
		var temp = sickPersonName.Split(":"[0]);
		plantName = temp[0];
}

function OnGUI()
{
	stringStrip(this.gameObject.name);
	
	if(plantName=="neem")
	{
		choice = 0;
	}
	else if(plantName=="ginger")
	{
		choice = 1;
	}
	else if(plantName=="glory tree")
	{
		choice = 2;
	}
	else if(plantName=="aloe vera")
	{
		choice = 3;
	}
	var outMessage : String = "This plant's scientific name is,"+'\n'+message[choice].ToString()+'\n'+"Type its common name to collect it"+'\n'+"Press N to continue to next plant";
	if(opened)
	{
		if(GUI.Button(Rect(Screen.width-310, Screen.height-110, 300, 100),outMessage))
		{
			if(Event.current.button == 1)
				opened=false;
		}
		//Debug.Log("Awesome");
	}
}