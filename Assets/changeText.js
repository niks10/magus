// Shows how to read typing input from the keyboard
	// (eg. the user entering his name).
	// You need to attach this script to a GUIText object.

public var initiate : boolean = false;
public var sendBack ;

function setText(s : String)
{
	guiText.text = s;
}

function setInitate(s : boolean)
{
	initiate = s;
}

function returnResult():String
{
	return guiText.text;
}

function reset()
{
	guiText.text = "Enter common name, when the cat stops";
}

function Update () {
	if(initiate)
	{
		//Debug.Log("WORKINGNOW");
		for (var c : char in Input.inputString) {
			if(guiText.text == "Enter common name, when the cat stops")
			{
				guiText.text = "";
			}
			// Backspace - Remove the last character
			if (c == "\b"[0]) {
				if (guiText.text.Length != 0)
					guiText.text = guiText.text.Substring(0, guiText.text.Length - 1);
			}
			// End of entry
			else if (c == "\n"[0] || c == "\r"[0]) {// "\n" for Mac, "\r" for windows.
				print ("User entered : " + guiText.text);
				guiText.enabled = false;
				sendBack = GameObject.Find("HarryThePlayer").GetComponent(forager);
				sendBack.setKey(guiText.text, true);
				reset();
			}
			// Normal text input - just append to the end
			else {
				guiText.text += c;
			}
		}
	}
}