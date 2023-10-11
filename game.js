const character = document.querySelector(".character");
const gameContainer = document.querySelector(".game-container");
const ground = document.querySelector(".ground");
const ceiling = document.querySelector(".ceiling");
const obstacles = document.querySelectorAll(".obstacle");

let characterX = 150;
let characterY = gameContainer.offsetHeight * 0.25;
let characterVelocityX = 0;
let characterVelocityY = 0;
const gravity = 0.5;
const jumpStrength = 10;
const jumpCooldown = 180;

const mincharacterY = gameContainer.offsetHeight * 0.25;
const maxcharacterY = gameContainer.offsetHeight - character.offsetHeight;

const keys = {};
let canJump = true;

let isJumping = false;

function setcharacterImage(grounded, facingLeft) {
    if (grounded) {
        character.style.backgroundImage = `url('image/character.png')`;
    } else {
        character.style.backgroundImage = `url('image/characterj.png')`;
    }

    if (facingLeft) {
        character.style.transform = "scaleX(-1)";
    } else {
        character.style.transform = "scaleX(1)";
    }
}

setcharacterImage(true, false);

window.addEventListener("keydown", function (e) {
    keys[e.key] = true;

    if (e.key === "w" && canJump && !isJumping) {
        jump();
    }
    if (e.key === "s" && canJump && !isJumping) {
        jump();
    }
    if (e.key == 'ArrowUp' && canJump && !isJumping) {
        jump();
    }
    if (e.key == 'ArrowDown' && canJump && !isJumping) {
        jump();
    }
});

window.addEventListener("keyup", function (e) {
    keys[e.key] = false;
});

function jump() {
    characterVelocityY = jumpStrength;
    canJump = false;
    isJumping = true;
    setcharacterImage(false, characterVelocityX < 0);

    setTimeout(() => {
        canJump = true;
        isJumping = false;
        setcharacterImage(true, characterVelocityX < 0);
    }, jumpCooldown);
}

function moveLeft() {
    characterVelocityX = -5;
    setcharacterImage(characterY === mincharacterY, true);
}

function moveRight() {
    characterVelocityX = 5;
    setcharacterImage(characterY === mincharacterY, false);
}

function stop() {
    characterVelocityX = 0;
}

function checkGroundCollision() {
    if (characterY <= mincharacterY) {
        characterY = mincharacterY;
        characterVelocityY = 0;
        canJump = true;
        setcharacterImage(true, characterVelocityX < 0);
    }
}

function checkCeilingCollision() {
    if (characterY >= maxcharacterY) {
        characterY = maxcharacterY;
        characterVelocityY = -characterVelocityY / 10;
    }
}

let obstacle1X = gameContainer.offsetWidth;
let obstacle1Speed = getRandomSpeed();

let obstacle2X = gameContainer.offsetWidth;
let obstacle2Speed = getRandomSpeed();

let obstacle3X = gameContainer.offsetWidth;
let obstacle3Speed = getRandomSpeed();

let obstacle4X = gameContainer.offsetWidth;
let obstacle4Speed = getRandomSpeed();

let obstacle5X = gameContainer.offsetWidth;
let obstacle5Speed = getRandomSpeed();

function showObstacle(obstacle, x, y, speed, image) {
    if (obstacle) {
        obstacle.style.display = "block";
        obstacle.style.left = x + "px";
        obstacle.style.top = y + "px";
        obstacle.style.backgroundImage = `url('${image}')`;
        obstacle.style.backgroundSize = "cover";
        obstacle.style.backgroundRepeat = "no-repeat";
        obstacle.style.backgroundPosition = "center";
    }
}

function getRandomSpeed() {
    return Math.floor(Math.random() * 15) + 5;
}

function moveObstacles() {
    if (obstacles[0]) {
        obstacle1X -= obstacle1Speed;
        obstacles[0].style.left = obstacle1X + "px";

        if (obstacle1X + obstacles[0].offsetWidth < 0) {
            obstacle1X = gameContainer.offsetWidth;
            obstacle1Speed = getRandomSpeed();
        }
    }

    if (obstacles[1]) {
        obstacle2X -= obstacle2Speed;
        obstacles[1].style.left = obstacle2X + "px";

        if (obstacle2X + obstacles[1].offsetWidth < 0) {
            obstacle2X = gameContainer.offsetWidth;
            obstacle2Speed = getRandomSpeed();
        }
    }

    if (obstacles[2]) {
        obstacle3X -= obstacle3Speed;
        obstacles[2].style.left = obstacle3X + "px";

        if (obstacle3X + obstacles[2].offsetWidth < 0) {
            obstacle3X = gameContainer.offsetWidth;
            obstacle3Speed = getRandomSpeed();
        }
    }

    if (obstacles[3]) {
        obstacle4X -= obstacle4Speed;
        obstacles[3].style.left = obstacle4X + "px";

        if (obstacle4X + obstacles[3].offsetWidth < 0) {
            obstacle4X = gameContainer.offsetWidth;
            obstacle4Speed = getRandomSpeed();
        }
    }

    if (obstacles[4]) {
        obstacle5X -= obstacle5Speed;
        obstacles[4].style.left = obstacle5X + "px";

        if (obstacle5X + obstacles[4].offsetWidth < 0) {
            obstacle5X = gameContainer.offsetWidth;
            obstacle5Speed = getRandomSpeed();
        }
    }


}


setInterval(() => {
    showObstacle(obstacles[0], gameContainer.offsetWidth, gameContainer.offsetHeight * 0.75 - 35, getRandomSpeed(), 'image/undercannon.png');
    showObstacle(obstacles[1], gameContainer.offsetWidth, gameContainer.offsetHeight * 0.75 - 35, getRandomSpeed(), 'image/undercannon.png');
    showObstacle(obstacles[2], gameContainer.offsetWidth, 10, getRandomSpeed(), 'image/topcannon.png');
    showObstacle(obstacles[3], gameContainer.offsetWidth, 10, getRandomSpeed(), 'image/topcannon.png');
    showObstacle(obstacles[4], gameContainer.offsetWidth, gameContainer.offsetHeight * 0.75 - 35, getRandomSpeed(), 'image/undercannon.png');
}, 2000);

const obstacle6 = document.createElement("div");
const obstacle7 = document.createElement("div");
const obstacle8 = document.createElement("div");
const obstacle9 = document.createElement("div");
const obstacle10 = document.createElement("div");

obstacle6.classList.add("obstacle");
obstacle7.classList.add("obstacle");
obstacle8.classList.add("obstacle");
obstacle9.classList.add("obstacle");
obstacle10.classList.add("obstacle");

gameContainer.appendChild(obstacle6);
gameContainer.appendChild(obstacle7);
gameContainer.appendChild(obstacle8);
gameContainer.appendChild(obstacle9);
gameContainer.appendChild(obstacle10);

let obstacle6X = gameContainer.offsetWidth;
let obstacle6Speed = getRandomSpeed();

let obstacle7X = gameContainer.offsetWidth;
let obstacle7Speed = getRandomSpeed();

let obstacle8X = gameContainer.offsetWidth;
let obstacle8Speed = getRandomSpeed();

let obstacle9X = gameContainer.offsetWidth;
let obstacle9Speed = getRandomSpeed();

let obstacle10X = gameContainer.offsetWidth;
let obstacle10Speed = getRandomSpeed();

function spawnObstacle(obstacle, image) {
    let obstacleX = gameContainer.offsetWidth;
    const minHeight = 110;
    const maxHeight = gameContainer.offsetHeight * 0.75 - 100;
    const spawnY = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;
    const speed = getRandomSpeed();

    showObstacle(obstacle, obstacleX, spawnY, speed, image);

    const moveInterval = setInterval(() => {
        obstacleX -= speed;
        obstacle.style.left = obstacleX + "px";

        if (obstacleX + obstacle.offsetWidth < 0) {
            clearInterval(moveInterval);
            spawnObstacle(obstacle, image);
        }
    }, 16);
}

spawnObstacle(obstacle6, 'image/bullet.png');
spawnObstacle(obstacle7, 'image/bullet.png');
spawnObstacle(obstacle8, 'image/bullet.png');
spawnObstacle(obstacle9, 'image/bullet.png');
spawnObstacle(obstacle10, 'image/bullet.png');


function resetcharacterAndObstacle(character, obstacle) {
    characterX = 150;
    characterY = gameContainer.offsetHeight * 0.25;
    characterVelocityX = 0;
    characterVelocityY = 0;

    const initialPosition = gameContainer.offsetWidth + 100;
    obstacle.style.left = initialPosition + 'px';
}

function checkObstacleCollision() {
    let collisionDetected = false;

    for (let i = 1; i <= 15; i++) {
        const obstacle = document.querySelector(`.obstacle:nth-child(${i})`);

        if (!obstacle) {
            continue;
        }

        const obstacleRect = obstacle.getBoundingClientRect();
        const characterRect = character.getBoundingClientRect();

        if (
            characterRect.right > obstacleRect.left &&
            characterRect.left < obstacleRect.right &&
            characterRect.bottom > obstacleRect.top &&
            characterRect.top < obstacleRect.bottom
        ) {
            resetcharacterAndObstacle(character, obstacle);
            collisionDetected = true;
        }
    }

    if (collisionDetected) {
        moveAllObstaclesToRightEdge();
    }
}

function moveAllObstaclesToRightEdge() {
    obstacle1X = gameContainer.offsetWidth;
    obstacle1Speed = getRandomSpeed();

    obstacle2X = gameContainer.offsetWidth;
    obstacle2Speed = getRandomSpeed();

    obstacle3X = gameContainer.offsetWidth;
    obstacle3Speed = getRandomSpeed();

    obstacle4X = gameContainer.offsetWidth;
    obstacle4Speed = getRandomSpeed();

    obstacle5X = gameContainer.offsetWidth;
    obstacle5Speed = getRandomSpeed();

    obstacles.forEach((obstacle, index) => {
        if (obstacle) {
            const newPosition = gameContainer.offsetWidth + (index * 100);
            obstacle.style.left = newPosition + 'px';
        }
    });
}



function gameLoop() {
    characterX += characterVelocityX;
    characterY += characterVelocityY;
    characterVelocityY -= gravity;

    checkGroundCollision();
    checkCeilingCollision();

    if (characterX < 0) {
        characterX = 0;
    } else if (characterX + character.offsetWidth > gameContainer.offsetWidth) {
        characterX = gameContainer.offsetWidth - character.offsetWidth;
    }

    character.style.left = characterX + "px";
    character.style.bottom = characterY + "px";

    if (keys["a"] ||keys['ArrowLeft']) {
        moveLeft();
    } else if (keys["d"]||keys['ArrowRight']) {
        moveRight();
    } else {
        stop();
    }

    moveObstacles();

    checkObstacleCollision();

    requestAnimationFrame(gameLoop);
}
gameLoop();
