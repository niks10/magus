
// the textfield to update the time to
private var textfield:GUIText;

// time variables
public var allowedTime:int = 90;
private var currentTime = allowedTime;


function Awake()
{
	// retrieve the GUIText Component and set the text
	textfield = GetComponent(GUIText);
	
	UpdateTimerText();
	
	// start the timer ticking
	Tick();
}

function Tick()
{
	// while there are seconds left
	while(currentTime > 0)
	{
		// wait for 1 second
		yield WaitForSeconds(1);
		
		// reduce the time
		currentTime--;
		
		UpdateTimerText();
	}
	
	// game over
	print("Game Over");
}

function UpdateTimerText()
{
	// update the textfield
	textfield.text = currentTime.ToString();
}