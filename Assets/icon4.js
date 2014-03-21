public var burn:Texture ;
public var ind:Texture ;
public var malaria:Texture ;
public var pox:Texture ;
//public bool toggle1=boolean;
//public var CacheIndex
public var show : boolean;
public var show1 : boolean;
public var show2 : boolean;
public var show3 : boolean;
//var toolbarInt=0;
//var toolbarStrings : String[] = ["Aloe Barbadensis", "Zingiber officinale", "Clerodendrum viscosum","Azadirachta indica"];
function Start()
{
	show = false;
	show1 = false;
	show2 = false;
	show3 = false;
	burn = Resources.Load("burn");
	ind=Resources.Load("ind");
	malaria=Resources.Load("malaria");
	pox=Resources.Load("pox");
	}
function OnGUI ()
{burn = Resources.Load("burn") as Texture;
ind = Resources.Load("ind") as Texture;
malaria = Resources.Load("malaria") as Texture;
pox = Resources.Load("pox") as Texture;
// toolbarInt = GUI.Toolbar (Rect (10, 30, 620, 20), toolbarInt, 
                                                    //toolbarStrings);

	//if (GUI.Button (Rect (10,10, 120, 20), "Aloe Barbadensis"))
	//show=true;
	 //if (GUI.Button (Rect (130,10, 150, 20), "Zingiber officinale"))
	//show1=true;
	//if (GUI.Button (Rect (280,10, 150, 20), "Clerodendrum viscosum"))
	//show2=true;
		//if (GUI.Button (Rect (430,10, 120, 20), "Azadirachta indica"))
	//show3=true;
	
		
		
//{GUI.DrawTexture(Rect (100,100,200,200),burn );
//}


	show=GUI.Toggle(Rect (10,10, 130, 50),show, "Aloe Barbadensis");
	if(show==true)
	{
		GUI.DrawTexture(Rect (100,100,250,200),burn );
	}
	show1=GUI.Toggle(Rect (140,10, 120, 50),show1, "Zingiber Officinale");
	if(show1==true)
	{
		GUI.DrawTexture(Rect (100,100,250,200),ind );
	}

	show2=GUI.Toggle(Rect (275,10, 160, 50),show2, "Clerodendrum Viscosum");
	if(show2==true)
	{
		GUI.DrawTexture(Rect (100,100,250,200),malaria );
	}

	show3=GUI.Toggle(Rect (445,10, 150, 50),show3, "Azadirachta Indica");
	if(show3==true)
	{
		GUI.DrawTexture(Rect (100,100,250,200),pox );
	}
}
