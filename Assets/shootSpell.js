#pragma strict

var playAudio:boolean;
var spellAudio:Hashtable = new Hashtable();
var audioArray : AudioClip[];
public var setCam : GameObject;
public var sC : ShooterGameCamera;
private var show = false;
var index:int;
var spell : String;

var diseases:String[] = ["Burns", "Indigestion", "Malaria", "Chicken Pox"];
var spellName : String[] = ["Aloe barbedensis!", "Zingiber officinale!", "Clerodendrum viscosum!", "Azadirachta indica!"];

function Start () {
	initalizeHashtable();
	index = -1;
	setCam = GameObject.Find("Main Camera");
	sC = setCam.gameObject.GetComponent("ShooterGameCamera");
}

function initalizeHashtable()
{
	for(var i:int = 0; i<4; i++)
	{
		spellAudio[diseases[i]] = i;
	}
}

function setPlayAudio(s : boolean)
{
	playAudio = s;
}

function Update () {
	initalizeHashtable();
	if(Input.GetMouseButtonDown(0))
	{
		//Debug.Log("YOYOY");
		//get disease from script2
		var gmO = this.GetComponent(script2);
		var disName:String = gmO.getSickPersonDisease();
		var bool : int = sC.getPauseCam();
		if(bool == 0)
		{
			this.animation.Play("new_shoot");
			if(playAudio)
			{
				show = true;
				//index = ArrayUtility.IndexOf(diseases, disName);
				
				for (var i:int = 0; i < diseases.length; i++) {
						if (diseases[i] == disName)
							index = i;
				}
				var clip = audioArray[index];
				audio.PlayOneShot(clip, 50);
				
				//GUI.TextArea(Rect(Screen.width/2, Screen.height, 1000, 25), spellName[index]+"1");
			}
			else
			{
				//GUI.TextArea(Rect(Screen.width/2, Screen.height-100, 100, 100),"1");
			}
		}
		
	}
}

function OnGUI()
{
	if(playAudio&&show)
	{
		if(index!=-1)
		{
			GUI.TextArea(Rect(500, 500, 150, 25), spellName[index]);
		}
	}
	else
	{
		show = false;
		//GUI.TextArea(Rect(500, 500, 150, 25), "");
	}
}

function getPlayAudio():boolean
{
	return playAudio;
}