#pragma strict


public var oLoader : GameObject;

function Start () {

}

function Update () {
oLoader.guiText.transform.position = Vector3.zero;
oLoader.guiText.text = "GAMESTART";
}