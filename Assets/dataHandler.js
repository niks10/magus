#pragma strict

var dataTable = new Hashtable();
public var answer : String;
public var choice : String;
public var success : boolean;
public var successString : String;

function Start () {
	dataTable = {
	"Azadarichta indica" : 10,
	"Zingiber officinale" : 10,
	"Clerodendrum viscosum" : 10,
	"Aloe barbedensis" : 10
	};
	successString = "";
}

function reset()
{
	choice = answer = "";
	success = false;
	successString = "";
}

function setChoice(s : String)
{
	choice = s;
}

function  setAnswer(s : String)
{
	answer = s;
}

function  getAnswer()
{
	return answer;
}


function updateStash(change:int)
{
	//change amt of spell
	//dataTable += change
}

function checkAnswer():boolean
{
	if(dataTable[choice] == answer)
		return true;
	return false;
}