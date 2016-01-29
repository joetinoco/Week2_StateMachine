// MENU STATE
module scenes {

    export class Menu extends objects.Scene {
        // Private instance vars
        private _helloLabel: createjs.Text;
        private _startButton: objects.Button;

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

            // Add a button
            this._startButton = new objects.Button("StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 60);

            this.addChild(this._startButton);

            this._startButton.on("click", this._startButtonClick, this);

            stage.addChild(this);
        }
       

        // Menu scene updates here.
        public update(): void {
            this._helloLabel.rotation += 5;
        }
        
        // Event handlers 
        private _startButtonClick(event: createjs.MouseEvent) {
            this._helloLabel.text = "!Game started!";
        }

    }

}