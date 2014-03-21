#pragma strict

var image:Texture;
function Start () {
	
}
function Update () {
   
}

var customSkin:GUISkin; 

function OnGUI() {
	GUI.skin = customSkin;
	
	var buttonW:int = 100;
	var buttonH:int = 50;
	
	
	
	var halfScreenW:float =Screen.width/2;
	var halfButtonW:float = buttonW/2;
	
	image = Resources.Load("menu2");
	
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), image );
	
	if(GUI.Button(Rect(halfScreenW-halfButtonW, 550, buttonW, buttonH),"Start Game")) {
		print("You clicked me!");
		Application.LoadLevel("new");
	}
}
