export default class visSelect  {
    constructor(network, options) {
        this.network = network
        this.options = options
        this.nodes = options.nodes
        this.isBrush = options.isBrush
        this.container = options.container

        console.log(options)
        this.canvas = network.canvas.frame.canvas
        this.ctx = this.canvas.getContext('2d')
        this.rect = {}
        this.drag = false
        this.drawingSurfaceImageData = null

        const _this = this
        this.container.onmousemove= function (e) {
            _this._mousemoveFn(e)
        }
        this.container.onmousedown=function (e) {
            _this._mousedownFn(e)
        }
        this.container.onmouseup=function (e){
            _this._mouseupFn(e)
        }
    }
    _saveDrawingSurface() {
        this.drawingSurfaceImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
    }
    _restoreDrawingSurface() {
        this.ctx.putImageData(this.drawingSurfaceImageData, 0, 0);
    }
    _selectNodesFromHighlight() {
        // let fromX, toX, fromY, toY;
        let nodesIdInDrawing = [];
        let xRange = this._getStartToEnd(this.rect.startX, this.rect.w);
        let yRange = this._getStartToEnd(this.rect.startY, this.rect.h);

        let allNodes = this.nodes.get();
        console.log(allNodes)
        for (let i = 0; i < allNodes.length; i++) {
            let curNode = allNodes[i];
            let nodePosition = this.network.getPositions([curNode.id]);
            let nodeXY = this.network.canvasToDOM({x: nodePosition[curNode.id].x, y: nodePosition[curNode.id].y});
            if (xRange.start <= nodeXY.x && nodeXY.x <= xRange.end && yRange.start <= nodeXY.y && nodeXY.y <= yRange.end) {
                nodesIdInDrawing.push(curNode.id);
            }
        }
        this.network.selectNodes(nodesIdInDrawing);
    }
    _getStartToEnd(start, theLen) {
        return theLen > 0 ? {start: start, end: start + theLen} : {start: start + theLen, end: start};
    }
    _mousemoveFn(e) {
        if (this.drag && this.isBrush.value) {
            this._restoreDrawingSurface();
            this.rect.w = (e.pageX - this.container.offsetLeft) -  this.rect.startX;
            this.rect.h = (e.pageY - this.container.offsetTop) -  this.rect.startY ;

            this.ctx.setLineDash([5]);
            this.ctx.strokeStyle = "rgb(0, 102, 0)";
            this.ctx.strokeRect( this.rect.startX,  this.rect.startY,  this.rect.w,  this.rect.h);
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
            this.ctx.fillRect( this.rect.startX,  this.rect.startY,  this.rect.w,  this.rect.h);
        }
    }
    _mousedownFn(e) {
        console.log(e)
        console.log(this.isBrush)
        if (e.button === 0 && this.isBrush.value) {
            this._saveDrawingSurface();
            this.rect.startX = e.pageX - this.container.offsetLeft;
            this.rect.startY = e.pageY - this.container.offsetTop;
            this.drag = true;
        }
    }
    _mouseupFn(e) {
        console.log(e)
        if (e.button === 0 && this.isBrush.value) {
            this._restoreDrawingSurface();
            this.drag = false;
            this.isBrush.value = false

            // container[0].style.cursor = "default";
            this._selectNodesFromHighlight();
        }
    }
}