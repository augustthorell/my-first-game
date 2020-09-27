function Snake() {
    this.x = 100;
    this.y = 100;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.draw = function() {
        ctx.fillStyle = '#fff';
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x > canvas.width || this.x < 0) {
            this.xSpeed = 0;
            this.ySpeed = 0;
        } 
        if (this.y > canvas.height || this.y < 0) {
            this.xSpeed = 0;
            this.ySpeed = 0;     
        } 
    }

    

    this.changeDirection = function(direction) {

        switch(direction) {
            case 'Up':
                if (this.ySpeed === scale * 1) break;
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                if (this.ySpeed === -scale * 1) break;
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                if (this.xSpeed === scale * 1) break;
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                if (this.xSpeed === -scale * 1) break;
                else {
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                    break;
                }
                
        }
    }
}
