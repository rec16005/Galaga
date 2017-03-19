public var enemy : GameObject;


public var spawnTime : float = 2;

function Start() {
    
    InvokeRepeating("addEnemy", 0, spawnTime);
}


function addEnemy() {
   
    var rd = GetComponent("Renderer");

   
    var x1 = transform.position.x - rd.bounds.size.x/2;

    var x2 = transform.position.x + rd.bounds.size.x/2;


    var spawnPoint = Vector2(Random.Range(x1, x2), transform.position.y);

   
    Instantiate(enemy, spawnPoint, Quaternion.identity);
} 