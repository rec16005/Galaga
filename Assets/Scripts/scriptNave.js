
public var bullet : GameObject;
function Start () {
	
}

function Update () {

    var r2d = GetComponent("Rigidbody2D");

    if (Input.GetKey("right"))
        r2d.velocity.x = 10;
    else if (Input.GetKey("left"))
        r2d.velocity.x = -10;
    else
        r2d.velocity.x = 0;
	
    if (Input.GetKeyDown("space")) {
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
}
