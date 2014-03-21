// ATTACHED TO hARRYtHEpLAYER
#pragma strict

public var plantName : String;
public var plants : String[] = ["neem", "ginger", "glory tree", "aloe vera"];
public var startSpell : boolean;
public var answer : String;
public var checkAnswer : boolean = false;
var dataTable = new Hashtable();
public var choice : String;
public var success : boolean;
public var successString : String;

function Start () {
	dataTable = {
	"neem":"Azadarichta indica",
	"ginger":"Zingiber officinale",
	"glory tree":"Clerodendrum viscosum",
	"aloe vera":"Aloe barbedensis"
	};
	successString = "";
}

function reset()
{
	choice = answer = "";
	success = false;
	successString = "";
}

function setChoice(s : String)
{
	choice = s;
}

function  setAnswer(s : String)
{
	answer = s;
}

function  getAnswer()
{
	return answer;
}

// function to clean the string with ":"
function stringStrip(pN:String) {
		var temp = pN.Split(":"[0]);
		plantName = temp[0];
}


function setStartSpell(s : boolean)
{
	startSpell = s;
}

function setPlantScientific(pN : String)
{
	//sickPersonDisease = SickDisease;
	stringStrip(pN);
	plantName = plantName.ToString();
	//plantName has the plant aimed at
}

function updateStash(change:int)
{
	//change amt of spell
	//dataTable += change
}

function check():boolean
{
	if(dataTable[choice] == answer)
		return true;
	return false;
}

function getPlantScientific():String {

	//sickPersonDisease = "Malaria";
	return plantName;
}

function setKey(s : String, a : boolean)
{
	answer = s;
	checkAnswer = a;
	Debug.Log(checkAnswer);
}

function startSpelling()
{
	if(startSpell)
	{
		//call setscientific from external function
		for(plant in plants)
		{
			if(plant==plantName)
			{
				//got the plant now start test
				GameObject.Find("GUI Text").active = true;
				/*var answerI = GameObject.Find("GUI Text").GetComponent(changeText);
				answerI.setInitate(true);		
				*/
				if(checkAnswer)
				{
					Debug.Log("Inside checkAnswer");
					//check answer and update stash or give feedback
					/*	
					if answer is correct
						decrement stash
						set new gui text as "plant +1" in green
					*/
					if(answer == plantName)
					{
						success = true;
						successString = "SUCCESS!!";
						var gmO = GameObject.Find("RabbitCube").GetComponent(rabbitSeek);
						gmO.incrementPlant();
					}
					else
					{
						success = false;
						successString = "FAILURE";
					}
					reset();
					Debug.Log("WORKING"+successString);
					//on complete check destroy plant
					//Destroy(this.gameObject);
				}
			}
		}
	}
}

function Update()
{
	startSpelling();
}

function OnGUI()
{
	if(checkAnswer)
	{
		GUI.TextArea(Rect(100, 100, 100, 100), successString);
	}
}