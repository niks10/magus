#pragma strict

var show : boolean;
var height:float = 0;
var solved : float = 0;
var total : float = 10;

function setShow(s : boolean)
{
	show = s;
	solved++;
	height = solved/total;
}

function Start () {
	show = true;
}

function Update () {

}

function OnGUI()
{
	if(height>0.75)
		GUI.backgroundColor = Color.green;
	else
		GUI.backgroundColor = Color.blue;
	if(show)
	{
		GUI.Button(Rect(Screen.width - 50, 550, 10, -500*height), "Y");
	}	
}