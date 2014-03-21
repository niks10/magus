#pragma strict

function Start () {

}
function Update () {

}

var customSkin:GUISkin; 
var image:Texture;

function OnGUI() {
	GUI.skin = customSkin;
	
	var buttonW:int = 100;
	var buttonH:int = 50;
	
	var halfScreenW:float =Screen.width/2;
	var halfButtonW:float = buttonW/2;
	
	image = Resources.Load("gameover");
	
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), image );
	
	/*if(GUI.Button(Rect(halfScreenW-halfButtonW, 500, buttonW, buttonH),"Next")) {
		print("You clicked me!");
		Application.LoadLevel("scene4");
	}*/
}
/*
function onGUI() {
	if(GUI.Button(Rect(0, 0, 100, 50), "Play Game")) {
		print ("Clicked");
	}
	
}
*/