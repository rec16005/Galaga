public var speed : int = -5;


function Start () {
  
    var r2d = GetComponent("Rigidbody2D");

  
    r2d.velocity.y = speed;

    
    r2d.angularVelocity = Random.Range(-200, 200);
}


function OnBecameInvisible() {

    Destroy(gameObject);
} 

function OnTriggerEnter2D(obj) {
    
    var name = obj.gameObject.name;

    if (name == "bullet(Clone)") {
       
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }

    
    if (name == "spaceship") {
      
        Destroy(gameObject);
    }
} 