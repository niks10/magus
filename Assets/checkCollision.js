#pragma strict

var open : boolean;

function Start()
{
	open = false;
}

function OnTriggerEnter(other : Collider)
{
	//Debug.Log("Cool");
	if(other.gameObject.tag=="sickPlayer")
	{
		other.animation.Play("idle");
		open = true;
	}
	else 
	{
		//open = false;
	}
}

function OnGUI()
{
	if(open)
	{
		//GUI.Button(Rect(Screen.width-110, Screen.height-110, 100, 100), "YO");	
	}
}