#pragma strict

var prefabBullet:GameObject;
var shootForce:float;
	
public var setCam : GameObject;
public var sC : ShooterGameCamera;
	
function Start()
{
	setCam = GameObject.Find("Main Camera");
	sC = setCam.gameObject.GetComponent("ShooterGameCamera");
}
		
function Update()
{
	/*RaycastHit hit = new RaycastHit ();
	Ray ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	Physics.Raycast(ray,out hit);
	Debug.DrawLine(transform.position, hit.point, Color.blue);
	*/
	if (Input.GetMouseButtonDown(0))
	{
		var bool : int = sC.getPauseCam();
		if(bool == 0)
		{
			var hit:RaycastHit = new RaycastHit ();
			var ray:Ray = Camera.main.ScreenPointToRay (Vector3(Screen.width/2, Screen.height/2, 0));
			Physics.Raycast(ray,hit);
			
			var InstanceBullet = Instantiate(prefabBullet, transform.position,Quaternion.identity);
			var direction:Vector3 = hit.point-transform.position;
			direction = direction.normalized;
			//Debug.Log("YO "+direction);
			//direction.y = 0;
			InstanceBullet.rigidbody.velocity = (direction*shootForce);			
		}
	}
}