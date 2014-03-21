#pragma strict

public var textures : Texture;
var boardUP : boolean;
var offset : Vector3;
var t:int = 0;
private var speed:float = 0.5;

function Start () {
	boardUP = false;
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.name == "FireBall")
	{
		Debug.Log("YAYAYA");
	}
}

function OnGUI()
{
	var saveY : float;
	if(boardUP)
	{
		offset = Camera.main.WorldToScreenPoint(transform.position);
		GUI.DrawTexture(Rect(offset.x, Screen.height - offset.y-150-t*speed, textures.width/3, textures.height/3), textures);
		saveY = Screen.height - offset.y-150-t*speed;
		if(saveY<=(Screen.height - offset.y - 500))
			Destroy(this.gameObject);
		t++;		
	}
}

function SetBoardUp(s : boolean)
{
	boardUP = s;
}

function Update () {
	if(boardUP)
	{
		offset.y += 5;
	}
}