var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU STATE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
        }
        // Start method
        Menu.prototype.start = function () {
            console.log("Game started!");
            this._helloLabel = new createjs.Text("Hello mofos!", "60px Consolas", "#000000");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = config.Screen.CENTER_X;
            this._helloLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._helloLabel);
            // Add a button
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 60);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            stage.addChild(this);
        };
        // Menu scene updates here.
        Menu.prototype.update = function () {
            this._helloLabel.rotation += 5;
        };
        // Event handlers 
        Menu.prototype._startButtonClick = function (event) {
            this._helloLabel.text = "!Game started!";
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map