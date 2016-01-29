// MENU STATE
module scenes {

    export class Menu extends objects.Scene {
        // Private instance vars
        private _helloLabel:createjs.Text;
        
        constructor() {
            super();
        }
        
        // Start method
        public start(): void {
            
            console.log("Game started!");

            this._helloLabel = new createjs.Text("Hello mofos!", "60px Consolas", "#000000");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = config.Screen.CENTER_X;
            this._helloLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._helloLabel);
            stage.addChild(this);
        }

        // Menu scene updates here.
        public update(): void {
            this._helloLabel.rotation += 5;
        }

    }

}