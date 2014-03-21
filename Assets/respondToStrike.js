#pragma strict

public var fire : boolean;
public var target : GameObject;
public var setCam : GameObject;
public var sC : ShooterGameCamera;

function Start () {
	setCam = GameObject.Find("Main Camera");
	sC = setCam.gameObject.GetComponent("ShooterGameCamera");
}

function checkConnection()
{
	Debug.Log(fire.ToString());
}

function setTarget(t : GameObject)
{
	target = t;
	//Debug.Log("AAA"+target.name);
}

function setFire(s : boolean)
{
	fire = s;
	//Debug.Log("BBB"+fire.ToString());
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="sickBot")
	{
	
		//Debug.Log(other.gameObject.name+" "+fire.ToString());
		//right answer, right target
		if(fire==true&&target==other.gameObject)
		{
			//respond to correctness after collision
			var _animation = other.gameObject.transform.FindChild("Dude");
			_animation.active = false;
			_animation = other.gameObject.transform.FindChild("Reviving");
			_animation.active = true;
			var gmO = other.gameObject.GetComponent(curedPerson);
			//yield WaitForSeconds(2);
			gmO.SetBoardUp(true);
			//Debug.Log("Strike successful");
			setFire(false);
			setTarget(null);
			//set audio false
			var aud = GameObject.Find("HarryThePlayer").GetComponent(shootSpell);
			aud.setPlayAudio(false);
			var player = GameObject.Find("HarryThePlayer").GetComponent(barIndicator);
			player.setShow(true);
		}
		else
		{
			//respond to falseness
			//Debug.Log("Failure");
			//allowFire = false;
		}
	}
}
function OnGUI()
{
	
}
