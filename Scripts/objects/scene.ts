module objects {
    
    // Scene class. This is an quasi-abstract class, from which other things (menus, etc) stem from.
    export class Scene extends createjs.Container{
        constructor (){
            super();
            this.start();
        }
        // Add game objects to my scene
        public start():void {
            stage.addChild(this);
        }
        // Update game objects
        public update():void{
            
        }    
    }
    
    
}