///  |\  /|   /\   ____ |  | - |--\ /--\ |\  |
///  | \/ |  /__\  \__  |--| | |__/ |  | | \ |
///  |    | /    \  __/ |  | | |  \ \--/ |  \|
/// 16 april 2013
/// Mashiron es un simple motor de tareas para desarrollo de videojuegos via web

var Mashiron = {
    container : {
    context : null,
    setSize : function(width, height){ 
        this.context.style.width = width;
        this.context.style.height = height;
 },
    setBG : function(bgcolor){this.context.style.backgroundColor = bgcolor; }
    },
    init : function(id){ this.container.context = document.getElementById(id)},
    box : Array()    
}

// --- section caja --- //

var Box = function(){
    this.context = null;
    this.context = document.createElement('div');
    this.context.style.position = 'absolute';
    Mashiron.container.context.appendChild(this.context);
    
    this.create = function(){ 
        
    }
    this.setSize = function(width, height){ 
        this.context.style.width = width;
        this.context.style.height = height;
    }
    this.setBG = function(bgcolor){this.context.style.backgroundColor = bgcolor; }
    this.px = 0;
    this.py = 0;
    this.setPosXY = function(x,y){
        this.px = x; this.py = y;
        this.context.style.left = this.px;
        this.context.style.top = this.py;
    }
    this.img = null;
    this.insertIMG = function(src){
        this.img = document.createElement('img');
        this.img.src = src;
        this.context.style.backgroundColor = "rgba(0,0,0,0)";
        this.context.appendChild(this.img);
    }
}

