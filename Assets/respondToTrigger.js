#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(hit : Collider)
{
	Debug.Log(hit.gameObject.name);
}