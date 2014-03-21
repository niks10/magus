#pragma strict

public var _animation : Animator;
var customSkin3:GUISkin;
//game objects for use, target is the array of sick persons
public var rabbit : GameObject;
public var target : GameObject[];
public var player : GameObject;
public var currentTarget : GameObject;
public var guitxt : GameObject;

//boolean for path for sick or foraging
public var chooseSick : boolean = true;
//plants start from largest guyNumber + Konstant
public var plantNumber : int = 10;
public var plantKonstant : int;

public var targetPos : Vector3;
public var desiredV : Vector3;
public var currentV : Vector3;
public var steering : Vector3;

public var maxForce : float;
public var maxV : float;
public var mass : float;
public var wanderDist : float;

public var guyNumber : int;
public var safeDist : float;
public var move : boolean;
public var tooFar : boolean;

public var catSpeech : String;

public var offset : Vector3;
public var setCam : GameObject;
public var sC : ShooterGameCamera;
public var finish;

function Start () {
finish = "";
target = new Array(10);
rabbit = GameObject.Find("RabbitCube");
player = GameObject.Find("HarryThePlayer");
target[0] = GameObject.Find("Chicken Pox:1");
target[1] = GameObject.Find("Indigestion:1");
target[2] = GameObject.Find("Malaria:1");
target[3] = GameObject.Find("Burns:1");
target[4] = GameObject.Find("Burns:2");
target[5] = GameObject.Find("Indigestion:2");
target[6] = GameObject.Find("Chicken Pox:2");
target[7] = GameObject.Find("Indigestion:3");
target[8] = GameObject.Find("Chicken Pox:3");
target[9] = GameObject.Find("Malaria:2");
/*
target[10] = GameObject.Find("neem:1");
target[11] = GameObject.Find("ginger:1");
target[12] = GameObject.Find("glory tree:1");
target[13] = GameObject.Find("aloe vera:1");
*/
safeDist = 10;
wanderDist = 100;
guyNumber = 0;
_animation = rabbit.GetComponentInChildren(Animator);
_animation.SetFloat("speed", 1);
move = true;
tooFar = false;
catSpeech = "Follow Me!";
setCam = GameObject.Find("Main Camera");
sC = setCam.gameObject.GetComponent("ShooterGameCamera");
}

//WORKING PART, Harry Follower
/*
rabbit.transform.LookAt(target.transform.position);
desiredV = (target.transform.position - rabbit.transform.position).normalized;
//rabbit.transform.position += desiredV*maxV;
transform.position = Vector3.MoveTowards(transform.position, target.transform.position, 0.1);
*/

function Update () {
var playerController = player.GetComponent(ThirdPersonController);
if(target[guyNumber]!=null&&chooseSick)
{
	//Debug.Log(target[guyNumber].name);
	rabbit.transform.LookAt(Vector3.Lerp(this.transform.position, target[guyNumber].transform.position, Time.deltaTime));
	
	guitxt.SetActive(false);
	desiredV = transform.forward*maxV;
	steering = desiredV - currentV;
	currentV += steering;
	if(move)
	{
		transform.position =  Vector3.Lerp(transform.position, transform.position+currentV, 15.0 *Time.deltaTime);
	}
	else
	{
		rabbit.transform.LookAt(Vector3.Lerp(this.transform.position, player.transform.position, 5.0 * Time.deltaTime));
	}

	//check safe dist from sick Guy
	if((transform.position - target[guyNumber].transform.position).magnitude<=safeDist)
	{
		//Debug.Log("ChangeTrack");
		catSpeech = "Challenge!";
		//Play idle animation
		_animation.SetFloat("speed", 0);
		move = false;
		//calling Player scripts
		var gmO = player.GetComponent(script2);
		//gmO.checkConnection("It warks : "+target[guyNumber].name);
		gmO.setSickPersonDisease(target[guyNumber].name);
		gmO.setTargetObject(target[guyNumber]);	
		//calling target scripts
		var gmO2 = target[guyNumber].GetComponent(MalariaTrigger);
		gmO2.startDialogue(true);
		//increment if either spell cast or refusal to cure, then slowly turn cat to next
	
			gmO.setStartSpell(true);
			//incrementGuy();
			//Debug.Log("Begin Spell Casting");	
			//pause Camera
			sC.pauseCam(true);
			
		/*if(Input.GetButtonDown("N"))
		{
			//setCam.pauseCamera = false;
			gmO.setStartSpell(false);
			move = true;
			gmO2.startDialogue(false);
			incrementGuy();
			_animation.SetFloat("speed", 1);
			catSpeech = "Follow Me!";
			sC.pauseCam(false);
		}*/
		/*else if(Input.GetButtonDown("M"))
		{
			chooseSick = false;
			gmO.setStartSpell(false);
			move = true;
			gmO2.startDialogue(false);
			incrementGuy();
			_animation.SetFloat("speed", 1);
			catSpeech = "Follow Me!";
			sC.pauseCam(false);
			guyNumber--;
		}*/
		//Debug.Log("Near sick Guy"+move.ToString()+guyNumber.ToString()+tooFar.ToString());
		//set chooseSick false if amt of required herb is 0 and do what is in getbuttondown m
		/*
			if(playerHashtable[ans] == 0)
			{
				chooseSick = false;
				gmO.setStartSpell(false);
				move = true;
				gmO2.startDialogue(false);
				incrementGuy();
				_animation.SetFloat("speed", 1);
				catSpeech = "Follow Me!";
				sC.pauseCam(false);
				guyNumber--;
			}
		*/
	}

	//If player too far from cat
	if((player.transform.position - transform.position).sqrMagnitude>=wanderDist)
	{
		//stop cat and play idle animation
		_animation.SetFloat("speed", 0);
		move = false;
		tooFar = true;
		catSpeech = "Come Back";
		//Debug.Log("Alls cool here!");
	}

	else if(tooFar)
	{
		//Debug.Log("Alls right here!");
		move = true;
		tooFar = false;
		//play walk animation
		_animation.SetFloat("speed", 1);
		catSpeech = "Follow Me!";
		//Debug.Log("Walking Cat");
	}
}
//PLANT PATH
else if(target[plantNumber]!=null&&!chooseSick)
{
	//Debug.Log(target[plantNumber].name);
	rabbit.transform.LookAt(target[plantNumber].transform.position);
	guitxt.SetActive(true);
	desiredV = transform.forward*maxV;
	steering = desiredV - currentV;
	currentV += steering;
	if(move)
	{
		transform.position += currentV;
	}
	else
	{
		rabbit.transform.LookAt(player.transform.position);
	}

	//check safe dist from plant
	if((transform.position - target[plantNumber].transform.position).magnitude<=safeDist)
	{
		//Debug.Log("ChangeTrack");
		catSpeech = "Challenge!";
		//Play idle animation
		_animation.SetFloat("speed", 0);
		move = false;
		//Do stuff with respect to plant
		//calling Player scripts
		var gmOPlant = player.GetComponent(forager);
		gmOPlant.setPlantScientific(target[plantNumber].name);
		//calling target scripts
		var gmO2Plant = target[plantNumber].GetComponent(touchTrigger);
		gmO2Plant.startDialogue(true);
		var guiTXT = guitxt.GetComponent(changeText);
		guiTXT.setInitate(true);
		//playerController.active= false;
			gmOPlant.setStartSpell(true);
			//incrementGuy();
			//Debug.Log("Begin Spell Casting");	
			//pause Camera
			sC.pauseCam(true);
			
		if(Input.GetButtonDown("1"))
		{
			//setCam.pauseCamera = false;
			gmOPlant.setStartSpell(false);
			move = true;
			gmO2Plant.startDialogue(false);
			incrementPlant();
			_animation.SetFloat("speed", 1);
			catSpeech = "Follow Me!";
			sC.pauseCam(false);
			//playerController.active= true;
		}
		//Debug.Log("Near sick Guy"+move.ToString()+guyNumber.ToString()+tooFar.ToString());
	}

	//If player too far from cat
	if((player.transform.position - transform.position).sqrMagnitude>=wanderDist)
	{
		//stop cat and play idle animation
		_animation.SetFloat("speed", 0);
		move = false;
		tooFar = true;
		catSpeech = "Come Back";
		//Debug.Log("Alls cool here!");
	}

	else if(tooFar)
	{
		//Debug.Log("Alls right here!");
		move = true;
		tooFar = false;
		//play walk animation
		_animation.SetFloat("speed", 1);
		catSpeech = "Follow Me!";
		//Debug.Log("Walking Cat");
	}
}

else
{
	finish = "Thanks for playing !";
	Application.LoadLevel("GameOver");
}
}

function incrementGuy()
{
	var gmODisease = target[guyNumber].GetComponent(MalariaTrigger);
	//check for strike on sick guy
	var gmO2 = GameObject.Find("FireBall").GetComponent(respondToStrike);
	gmODisease.startDialogue(false);
	gmO2.setTarget(target[guyNumber]);
	guyNumber++;
	move = true;
	var gmO = player.GetComponent(script2);
	gmO.setStartSpell(false);
	_animation.SetFloat("speed", 1);
	sC.pauseCam(false);
	//Debug.Log("guyNumbers :" + guyNumber+ " - "+ (guyNumber-1));
}

function incrementPlant()
{
	var gmOPlant = target[plantNumber].GetComponent(touchTrigger);
	gmOPlant.startDialogue(false);
	plantNumber++;
	move = true;
	var gmO2Plant = player.GetComponent(forager);
	gmO2Plant.setStartSpell(false);
	_animation.SetFloat("speed", 1);
	sC.pauseCam(false);
	//Debug.Log("guyNumbers :" + guyNumber+ " - "+ (guyNumber-1));
}

function OnGUI()
{
	GUI.skin = customSkin3;
	offset = Camera.main.WorldToScreenPoint(transform.position);
	GUI.TextArea(Rect(offset.x, Screen.height - offset.y-90, 100, 20), catSpeech);
	if(finish!="")
		GUI.TextArea(Rect(500, Screen.height/2, 80, 25), finish);
}