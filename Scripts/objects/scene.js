var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Scene class. This is an quasi-abstract class, from which other things (menus, etc) stem from.
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
            this.start();
        }
        // Add game objects to my scene
        Scene.prototype.start = function () {
            stage.addChild(this);
        };
        // Update game objects
        Scene.prototype.update = function () {
        };
        return Scene;
    })(createjs.Container);
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map