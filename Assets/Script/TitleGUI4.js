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
	
	image = Resources.Load("scene 4");
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), image );
	
	if(GUI.Button(Rect(halfScreenW-halfButtonW, 500, buttonW, buttonH),"Pick Herbs")) {
		print("You clicked me!");
		Application.LoadLevel("inventory");
	}
}
/*
function onGUI() {
	if(GUI.Button(Rect(0, 0, 100, 50), "Play Game")) {
		print ("Clicked");
	}
	
}
*/