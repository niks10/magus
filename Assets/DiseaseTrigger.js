#pragma strict

var open : boolean;

function Start()
{
	open = false;
}

function OnTriggerEnter(other : Collider)
{
	//Debug.Log("Cool");
	if(other.gameObject.tag=="Player")
	{
		//other.animation.Play("idle");
		Debug.Log("Disease guy touched");
		open = true;
	}
	else 
	{
		//open = false;
	}
}

function OnGUI()
{
	var message : String = "Hey this guy is infected by Disease"+'\n'+ "Don't you want to help him?";
	if(open)
	{
		if(GUI.Button(Rect(Screen.width-210, Screen.height-110, 200, 100),message))
		{
			open = false;
		}
		//Debug.Log("Awesome");
	}
}