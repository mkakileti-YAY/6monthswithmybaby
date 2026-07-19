"use strict";

/* =========================================================
   PERSONALIZE YOUR MEMORIES HERE
   =========================================================

   PHOTO EXAMPLE:
   photo: "./assets/images/month-0.jpg"

   SONG EXAMPLE:
   song: "./assets/audio/month-0.mp3"

   Leave photo or song as "" when you do not want one.
   Use backticks ` ` around longer messages so you can use
   multiple paragraphs.
========================================================= */

const MEMORIES = [
    {
        month: "MONTH 0",
        position: 700,
        icon: "⛸️",
        title: "where it all began...",
        text: `A month full of us having major crushes on each other. I remember talking to you made me sooo nervous. I was falling fast. I should've known you were too when you sent me this song ;).

This was a month of 2 am phone calls, long calls during my walks in Texas and eventually you meeting my friends (and killing it btw). I knew you were the one for me this month because of how patiently you waited for me to come back from a million trips. And you asked me to be your girlfriend the end of this month JANUARY 31st. It will always hold a special place in my heart.`,
        photo: "./assets/images/month-0.jpg",
        song: "./assets/audio/Los Cafres - Tus ojos.mp3",
        songName: "Tus Ojos - Los Cafres"
    },
    {
        month: "MONTH 1",
        position: 1650,
        icon: "❤️",
        title: "when you knew you loved me MWAHA and v-day",
        text: `A month full of romance <3. I'll never forget going over the bridge in Maryland listening to this song with you and both of us looking so beautiful. We shared so much of each other this month. You got me a book full of South Indian fairytales and I wrote you my very first letter + many gifts. We had the most beautiful valentine's and you took me to my very first wedding.

Even though I was scared, you made everything so comfortable for me. I'll never forget showing up to the wedding (almost late) and sitting in the first two rows, the only POC, laughing at each other. There was so much laughter this month. Late-night drives where I fell asleep on your shoulder and lots of true love. (Even before we had said anything to each other). You loved me though. Just need to point that out.`,
        photo: "./assets/images/month-1.jpg",
        song: "./assets/audio/Sam Fender, Olivia Dean - Rein Me In (Lyric Video).mp3",
        songName: "Rein Me In - Olivia Dean, Sam Fender"
    },
    {
        month: "MONTH 2",
        position: 2650,
        icon: "🍀",
        title: "bday month AKA TACO SHU",
        text: `Not only did I lowkey soft launch you to this song, but this is a perfect song to describe you sick in Chinatown Taco Bell. In the moment, maybe not the best memory, but looking back it's become one of my favorite ones. Is that weird? We celebrated your birthday this month and I cried to you on the phone in the Chicago airport because I wanted to make it back in time. Also! We went bouldering for the first time this month and I discovered the power of a sauna.

I know your birthday isn't always the most fun, but I hope that I could re-write it for you this year. I love surprising you and making you feel loved because you genuinely deserve everything good this world has to offer. I remember also seeing the Cherry Blossom this month. We took that picture that's still my profile picture for you :) A lot of things this month you did with me even though you might not have normally. And you always try your best for me and I am so lucky and so grateful. It's so very rare.`,
        photo: "./assets/images/month-2.jpg",
        song: "./assets/audio/Chinatown.mp3",
        songName: "Chinatown - The Jets"
    },
    {
        month: "MONTH 3",
        position: 3700,
        icon: "🍄",
        title: "slow mornings together <3",
        text: `Our slowest month together :) Waking up late, making breakfast together, drinking some coffee, sitting on the patio, and playing telefunké. This is when I started to imagine what the rest of our lives could look like together. So peaceful and so beautiful. Most of this month I was in Texas, but when I came back we ate lots of Korean food, did a lot of sleeping, and some other things...
        
        You were there for me at my absolute lowest this year. And you never judged me for it either. And I the same for you. We went to church for the first time together this month and you were so brave. We shared some of the harder parts of our lives with each other and we continue to do so. Of course I love the happy, fun, and silly moments, but I cherish the hard times with you so much more than you know. You're the biggest blessing I could have ever asked for.`,
        photo: "./assets/images/month-3.jpg",
        song: "./assets/audio/Horizon - Pigeons Playing Ping Pong.mp3",
        songName: "Horizon - Pigeons Playing Ping Pong"
    },
    {
        month: "MONTH 4",
        position: 4800,
        icon: "🏆",
        title: "BEST GF AWARD GOES TO YOU",
        text: `4 cities in 4 weeks. We weren't together too much this month except for my half and a weekend within the month. I remember you were so nervous to show up for my half-marathon and meet all my friends. AND YOU KILLED IT. You impressed literally everyone and you showed up for me so much more than I thought was possible. You made the most beautiful t-shirts, nicest signs, brought me everything I needed, and most importantly let me crash out. This month was a tough one for both of us.
        
        You went home this month too and I remember it being a tough time. You supported me through everything and then also supported your family through an extremely difficult time. I fell in love with you that much more this month. Your empathy, compassion, and love towards other people really shined through this month. BTW this song is one you showed me and I listened to a lot during my half!`,
        photo: "./assets/images/month-4.jpg",
        song: "./assets/audio/Maffio, Justin Quiles, Nacho & Shelow Shaq - Cristina.mp3",
        songName: "Cristina - Maffio, Justin Quiles, Nacho & Shelow Shaq"
    },
    {
        month: "MONTH 5",
        position: 5900,
        icon: "🌅",
        title: "our beach month :)",
        text: `Dare I say my favorite month together yet.... (6 months isn't over yet so). We went to Florida, Rehoboth Beach, and I'm sure we would've hit another beach town if we had time. Meeting your siblings was so much lovelier than I could have ever imagined. I cannot emphasize how happy it made me to see how loved you are and see who you grew up with. Your family treated me with so much love and respect and I also kinda fell in love with them too. I learned so much more about you just by meeting them and we had a TIME.
        
        We also did the beach for our 5 months which might be my favorite month-iversary so far. We played in the beach for hours, we drank so much this month, and you decided to start your half-marathon. My strong baby. There were some hard times, like there is every month, but I had so so so much fun with you this month. We finally took our first vacation together! And you didn't get mad at me when we barely made it through TSA. My beautiful, loving gf <3`,
        photo: "./assets/images/month-5.jpg",
        song: "./assets/audio/Bad Bunny - Ojitos Lindos (La Letra  Lyrics).mp3",
        songName: "Ojitos Lindos - Bad Bunny"
    },
    {
        month: "MONTH 6",
        position: 7150,
        icon: "⭐",
        title: "Happy Six Months!",
        text: `Six months ago, we were just a situationship. (Inside joke, if u get it u get it).

Since then, you've made my ordinary days feel exciting and my difficult days easier. Every memory in this little world represents just a small part of how special these months have been to me.

Thank you for choosing me, loving me, making me laugh, and being my favorite person.

World 1 may be complete ;), but our adventures are only beginning.

I love you, mi viejita. ❤️

Cringe City // Population: 1 // (it's me)`,
        photo: "./assets/images/month-6.jpg",
        song: "./assets/audio/Justin Timberlake - Mirrors.mp3",
        songName: "Mirrors - Justin Timberlake",
        final: true
    }
];

/* =========================================================
   GAME SETTINGS
========================================================= */

const SETTINGS = {
    marioScreenX: 120,
    groundBottom: 120,
    runSpeed: 7,
    jumpPower: 18,
    gravity: 0.9,
    endPadding: 1150,
    coinCountBetweenMemories: 4
};

/* =========================================================
   PAGE ELEMENTS
========================================================= */

const titleScreen = document.getElementById("title-screen");
const startButton = document.getElementById("start-button");
const world = document.getElementById("world");
const mario = document.getElementById("mario");

const memoryModal = document.getElementById("memory-modal");
const modalMonth = document.getElementById("modal-month");
const memoryTitle = document.getElementById("memory-title");
const memoryText = document.getElementById("memory-text");
const memoryPhoto = document.getElementById("memory-photo");
const photoPlaceholder = document.getElementById("photo-placeholder");

const songLabel = document.getElementById("song-label");
const songName = document.getElementById("song-name");
const songToggleButton = document.getElementById("song-toggle-button");
const memoryAudio = document.getElementById("memory-audio");

const continueButton = document.getElementById("continue-button");
const memoryCount = document.getElementById("memory-count");
const memoryTotal = document.getElementById("memory-total");

const keys = {
    ArrowRight: false,
    ArrowLeft: false
};

/* =========================================================
   GAME STATE
========================================================= */

let levelWidth = 0;
let gameStarted = false;
let gamePaused = true;
let endingStarted = false;

let worldX = 0;
let marioBottom = SETTINGS.groundBottom;
let marioVelocityY = 0;
let marioIsJumping = false;

let activeMemoryIndex = null;
let previousFrameTime = 0;
let coinScore = 0;

const viewedMemories = new Set();
const collectedCoins = new Set();

/* =========================================================
   STARTUP
========================================================= */

injectMarioMagicStyles();
createCoinCounter();
createFinalScreen();
buildLevel();
drawGame();

startButton.addEventListener("click", startGame);
continueButton.addEventListener("click", continueGame);
songToggleButton.addEventListener("click", toggleMemorySong);
memoryAudio.addEventListener("ended", () => {
    songToggleButton.textContent = "▶ PLAY SONG";
});

/* =========================================================
   BUILD THE LEVEL
========================================================= */

function calculateLevelWidth() {
    const finalMemoryPosition = Math.max(
        ...MEMORIES.map((memory) => memory.position)
    );

    levelWidth =
        finalMemoryPosition +
        window.innerWidth +
        SETTINGS.endPadding;

    world.style.width = `${levelWidth}px`;
}

function buildLevel() {
    calculateLevelWidth();
    memoryTotal.textContent = String(MEMORIES.length);

    addScenery();
    addMemoryBlocks();
    addCoins();
    addEndingArea();
}

function addScenery() {
    const hills = [
        [470, 280, 175],
        [1450, 360, 230],
        [2700, 300, 190],
        [4250, 380, 240],
        [5600, 320, 200],
        [7000, 380, 230],
        [8050, 330, 205]
    ];

    const bushes = [
        710,
        1720,
        3350,
        4650,
        5900,
        7100,
        8150
    ];

    hills.forEach(([left, width, height]) => {
        addHill(left, width, height);
    });

    bushes.forEach((left) => {
        addBush(left);
    });

    addPipe(1350, 95);
    addPipe(2450, 125);
    addPipe(3700, 85);
    addPipe(4850, 120);
    addPipe(6050, 105);

    addBrickRow(1550, 3);
    addBrickRow(3450, 4);
    addBrickRow(5550, 3);
}

function addHill(left, width, height) {
    const hill = document.createElement("div");
    hill.className = "hill";
    hill.style.left = `${left}px`;
    hill.style.width = `${width}px`;
    hill.style.height = `${height}px`;
    world.appendChild(hill);
}

function addBush(left) {
    const bush = document.createElement("div");
    bush.className = "bush";
    bush.style.left = `${left}px`;
    world.appendChild(bush);
}

function addPipe(left, height) {
    const pipe = document.createElement("div");
    pipe.className = "magic-pipe";
    pipe.style.left = `${left}px`;
    pipe.style.height = `${height}px`;

    pipe.innerHTML = `
        <div class="pipe-top"></div>
        <div class="pipe-body"></div>
    `;

    world.appendChild(pipe);
}

function addBrickRow(left, amount) {
    const row = document.createElement("div");
    row.className = "brick-row";
    row.style.left = `${left}px`;

    for (let index = 0; index < amount; index += 1) {
        const brick = document.createElement("div");
        brick.className = "magic-brick";
        row.appendChild(brick);
    }

    world.appendChild(row);
}

function addMemoryBlocks() {
    MEMORIES.forEach((memory, index) => {
        const checkpoint = document.createElement("div");

        checkpoint.className = memory.final
            ? "memory-checkpoint final-checkpoint"
            : "memory-checkpoint";

        checkpoint.id = `checkpoint-${index}`;
        checkpoint.style.left = `${memory.position}px`;

        checkpoint.innerHTML = `
            <div
                class="memory-box"
                id="memory-box-${index}"
                data-memory-index="${index}"
            >
                <span class="block-rivet rivet-top-left"></span>
                <span class="block-rivet rivet-top-right"></span>
                <span class="block-rivet rivet-bottom-left"></span>
                <span class="block-rivet rivet-bottom-right"></span>

                <span class="memory-emoji" aria-hidden="true">
                    ${memory.icon}
                </span>

                ${
                    memory.final
                        ? `<span class="final-block-shine"></span>`
                        : ""
                }
            </div>

            <div class="checkpoint-label">
                ${memory.month}
            </div>
        `;

        world.appendChild(checkpoint);
    });
}

function addCoins() {
    const coinPositions = [];

    for (let memoryIndex = 0; memoryIndex < MEMORIES.length; memoryIndex += 1) {
        const previousPosition =
            memoryIndex === 0
                ? 250
                : MEMORIES[memoryIndex - 1].position + 180;

        const nextPosition = MEMORIES[memoryIndex].position - 180;
        const availableSpace = nextPosition - previousPosition;

        for (
            let coinIndex = 1;
            coinIndex <= SETTINGS.coinCountBetweenMemories;
            coinIndex += 1
        ) {
            const fraction =
                coinIndex /
                (SETTINGS.coinCountBetweenMemories + 1);

            coinPositions.push({
                left: previousPosition + availableSpace * fraction,
                height:
                    coinIndex % 2 === 0
                        ? 245
                        : 205
            });
        }
    }

    coinPositions.forEach((coinData, index) => {
        const coin = document.createElement("div");

        coin.className = "magic-coin";
        coin.id = `coin-${index}`;
        coin.dataset.coinIndex = String(index);

        coin.style.left = `${coinData.left}px`;
        coin.style.bottom = `${coinData.height}px`;

        coin.innerHTML = `<span></span>`;

        world.appendChild(coin);
    });
}

function addEndingArea() {
    const finalPosition = MEMORIES[MEMORIES.length - 1].position;

    const arrowSign = document.createElement("div");
    arrowSign.className = "ending-sign";
    arrowSign.style.left = `${finalPosition + 300}px`;
    arrowSign.innerHTML = `
        <span>YOU DID IT!</span>
        <strong>→</strong>
    `;
    world.appendChild(arrowSign);

    const flagpole = document.createElement("div");
    flagpole.className = "flagpole";
    flagpole.style.left = `${finalPosition + 520}px`;

    flagpole.innerHTML = `
        <div class="flagpole-ball"></div>
        <div class="flagpole-stick"></div>
        <div class="love-flag">♥</div>
        <div class="flagpole-base"></div>
    `;

    world.appendChild(flagpole);

    const castle = document.createElement("div");
    castle.className = "love-castle";
    castle.style.left = `${finalPosition + 760}px`;

    castle.innerHTML = `
        <div class="castle-tower tower-left">
            <div class="castle-roof"></div>
            <div class="castle-window">♥</div>
        </div>

        <div class="castle-center">
            <div class="castle-banner">6</div>
            <div class="castle-door"></div>
        </div>

        <div class="castle-tower tower-right">
            <div class="castle-roof"></div>
            <div class="castle-window">♥</div>
        </div>
    `;

    world.appendChild(castle);
}

/* =========================================================
   GAME LOOP
========================================================= */

function startGame() {
    if (gameStarted) {
        return;
    }

    titleScreen.classList.add("title-screen-leaving");

    playTone(523, 0.08, "square");
    window.setTimeout(() => playTone(659, 0.08, "square"), 90);
    window.setTimeout(() => playTone(784, 0.13, "square"), 180);

    window.setTimeout(() => {
        titleScreen.classList.add("hidden");
        gameStarted = true;
        gamePaused = false;
        previousFrameTime = performance.now();
        requestAnimationFrame(gameLoop);
    }, 350);
}

function gameLoop(currentTime) {
    if (!gameStarted) {
        return;
    }

    const elapsedTime = Math.min(
        currentTime - previousFrameTime,
        32
    );

    previousFrameTime = currentTime;

    const frameScale = elapsedTime / 16.67;

    if (!gamePaused) {
        updateHorizontalMovement(frameScale);
        updateJump(frameScale);
        checkBlockCollisions();
        checkCoinCollisions();
        drawGame();
    }

    requestAnimationFrame(gameLoop);
}

function updateHorizontalMovement(frameScale) {
    if (keys.ArrowRight) {
        worldX += SETTINGS.runSpeed * frameScale;
        mario.classList.remove("facing-left");
        mario.classList.add("running");
    }

    if (keys.ArrowLeft) {
        worldX -= SETTINGS.runSpeed * frameScale;
        mario.classList.add("facing-left");
        mario.classList.add("running");
    }

    if (!keys.ArrowRight && !keys.ArrowLeft) {
        mario.classList.remove("running");
    }

    const maximumWorldX = Math.max(
        0,
        levelWidth - window.innerWidth
    );

    worldX = Math.max(
        0,
        Math.min(worldX, maximumWorldX)
    );
}

function startJump() {
    if (
        !gameStarted ||
        gamePaused ||
        marioIsJumping ||
        endingStarted
    ) {
        return;
    }

    marioIsJumping = true;
    marioVelocityY = SETTINGS.jumpPower;
    mario.classList.add("jumping");

    playTone(440, 0.07, "square");
    window.setTimeout(() => {
        playTone(590, 0.08, "square");
    }, 50);
}

function updateJump(frameScale) {
    if (!marioIsJumping) {
        return;
    }

    marioBottom += marioVelocityY * frameScale;
    marioVelocityY -= SETTINGS.gravity * frameScale;

    if (marioBottom <= SETTINGS.groundBottom) {
        marioBottom = SETTINGS.groundBottom;
        marioVelocityY = 0;
        marioIsJumping = false;
        mario.classList.remove("jumping");
    }
}

function drawGame() {
    world.style.transform = `translateX(-${worldX}px)`;
    mario.style.bottom = `${marioBottom}px`;
}

/* =========================================================
   MEMORY BLOCK COLLISIONS
========================================================= */

function checkBlockCollisions() {
    if (!marioIsJumping || marioVelocityY <= 0) {
        return;
    }

    const marioRect = mario.getBoundingClientRect();

    MEMORIES.forEach((memory, index) => {
        const box = document.getElementById(
            `memory-box-${index}`
        );

        if (!box || box.classList.contains("opened")) {
            return;
        }

        const boxRect = box.getBoundingClientRect();

        const horizontallyAligned =
            marioRect.right > boxRect.left + 6 &&
            marioRect.left < boxRect.right - 6;

        const touchingUnderside =
            marioRect.top <= boxRect.bottom + 20 &&
            marioRect.top >= boxRect.bottom - 42;

        if (horizontallyAligned && touchingUnderside) {
            activateMemoryBox(index);
        }
    });
}

function activateMemoryBox(index) {
    const box = document.getElementById(
        `memory-box-${index}`
    );

    if (!box || box.classList.contains("opened")) {
        return;
    }

    const memory = MEMORIES[index];

    box.classList.add("hit", "opened");

    marioVelocityY = -5;
    activeMemoryIndex = index;
    gamePaused = true;

    createBlockParticles(box, memory.final);
    createBlockReward(box, memory.final);

    if (memory.final) {
        playFinalBlockSound();
        document.body.classList.add("final-block-hit");
    } else {
        playBlockSound();
    }

    window.setTimeout(() => {
        box.classList.remove("hit");
        openMemory(index);
    }, memory.final ? 650 : 300);
}

function createBlockReward(box, isFinal) {
    const boxRect = box.getBoundingClientRect();

    const reward = document.createElement("div");
    reward.className = isFinal
        ? "block-reward final-reward"
        : "block-reward";

    reward.textContent = isFinal ? "♥" : "★";

    reward.style.left = `${
        boxRect.left + boxRect.width / 2
    }px`;

    reward.style.top = `${boxRect.top}px`;

    document.body.appendChild(reward);

    window.setTimeout(() => {
        reward.remove();
    }, 1000);
}

function createBlockParticles(box, isFinal) {
    const boxRect = box.getBoundingClientRect();
    const symbols = isFinal
        ? ["♥", "★", "♥", "★", "6", "♥", "★", "♥"]
        : ["★", "●", "★", "●"];

    symbols.forEach((symbol, index) => {
        const particle = document.createElement("span");

        particle.className = isFinal
            ? "block-particle final-particle"
            : "block-particle";

        particle.textContent = symbol;

        particle.style.left = `${
            boxRect.left + boxRect.width / 2
        }px`;

        particle.style.top = `${
            boxRect.top + boxRect.height / 2
        }px`;

        const angle =
            (Math.PI * 2 * index) / symbols.length;

        particle.style.setProperty(
            "--particle-x",
            `${Math.cos(angle) * (isFinal ? 150 : 85)}px`
        );

        particle.style.setProperty(
            "--particle-y",
            `${Math.sin(angle) * (isFinal ? 130 : 70)}px`
        );

        document.body.appendChild(particle);

        window.setTimeout(() => {
            particle.remove();
        }, 1100);
    });
}

/* =========================================================
   COINS
========================================================= */

function checkCoinCollisions() {
    const marioRect = mario.getBoundingClientRect();
    const coins = document.querySelectorAll(
        ".magic-coin:not(.collected)"
    );

    coins.forEach((coin) => {
        const coinRect = coin.getBoundingClientRect();

        const touching =
            marioRect.right > coinRect.left &&
            marioRect.left < coinRect.right &&
            marioRect.bottom > coinRect.top &&
            marioRect.top < coinRect.bottom;

        if (touching) {
            collectCoin(coin);
        }
    });
}

function collectCoin(coin) {
    const coinIndex = Number(coin.dataset.coinIndex);

    if (collectedCoins.has(coinIndex)) {
        return;
    }

    collectedCoins.add(coinIndex);
    coinScore += 1;

    coin.classList.add("collected");

    const counter = document.getElementById(
        "coin-count-number"
    );

    if (counter) {
        counter.textContent = String(coinScore);
    }

    playCoinSound();

    window.setTimeout(() => {
        coin.remove();
    }, 450);
}

function createCoinCounter() {
    const counter = document.createElement("div");
    counter.id = "coin-counter";
    counter.innerHTML = `
        <span class="hud-coin">●</span>
        × <span id="coin-count-number">0</span>
    `;

    document.getElementById("game").appendChild(counter);
}

/* =========================================================
   MEMORY MODAL
========================================================= */

function openMemory(index) {
    const memory = MEMORIES[index];

    modalMonth.textContent = memory.final
        ? "WORLD 1 COMPLETE"
        : memory.month;

    memoryTitle.textContent = memory.title;
    memoryText.textContent = memory.text;

    showMemoryPhoto(memory);
    playMemorySong(memory);

    if (memory.final) {
        memoryModal.classList.add("final-memory");
        continueButton.textContent = "FINISH THE LEVEL ▶";
    } else {
        memoryModal.classList.remove("final-memory");
        continueButton.textContent = "CONTINUE ▶";
    }

    memoryModal.classList.remove("hidden");
    memoryModal.setAttribute("aria-hidden", "false");

    continueButton.focus();
}

function showMemoryPhoto(memory) {
    if (memory.photo) {
        memoryPhoto.src = memory.photo;
        memoryPhoto.alt = `${memory.month} memory`;
        memoryPhoto.classList.remove("hidden");
        photoPlaceholder.classList.add("hidden");
        return;
    }

    memoryPhoto.removeAttribute("src");
    memoryPhoto.classList.add("hidden");

    photoPlaceholder.textContent = memory.final
        ? "Add your favorite six-month photo here"
        : "Add your photo here";

    photoPlaceholder.classList.remove("hidden");
}

function playMemorySong(memory) {
    stopCurrentSong();

    if (!memory.song) {
        songLabel.classList.add("hidden");
        return;
    }

    memoryAudio.src = encodeURI(memory.song);
    memoryAudio.volume = 0.45;
    memoryAudio.load();

    songName.textContent = memory.songName || "Our song";
    songToggleButton.textContent = "▶ PLAY SONG";
    songLabel.classList.remove("hidden");
}

function toggleMemorySong() {
    if (!memoryAudio.src) {
        return;
    }

    if (memoryAudio.paused) {
        memoryAudio.play()
            .then(() => {
                songToggleButton.textContent = "❚❚ PAUSE SONG";
            })
            .catch((error) => {
                console.error("Could not play the song. Check the audio file path and filename.", error);
                songToggleButton.textContent = "SONG FILE NOT FOUND";
            });
    } else {
        memoryAudio.pause();
        songToggleButton.textContent = "▶ PLAY SONG";
    }
}

function stopCurrentSong() {
    memoryAudio.pause();
    memoryAudio.currentTime = 0;
    memoryAudio.removeAttribute("src");
    memoryAudio.load();
    if (songToggleButton) {
        songToggleButton.textContent = "▶ PLAY SONG";
    }
}

function continueGame() {
    if (activeMemoryIndex === null) {
        return;
    }

    const completedMemory = MEMORIES[activeMemoryIndex];

    memoryModal.classList.add("hidden");
    memoryModal.classList.remove("final-memory");
    memoryModal.setAttribute("aria-hidden", "true");

    stopCurrentSong();

    viewedMemories.add(activeMemoryIndex);
    memoryCount.textContent = String(viewedMemories.size);

    activeMemoryIndex = null;

    if (completedMemory.final) {
        startEndingSequence();
        return;
    }

    previousFrameTime = performance.now();
    gamePaused = false;
}

/* =========================================================
   FINAL ENDING
========================================================= */

function startEndingSequence() {
    endingStarted = true;
    gamePaused = true;

    keys.ArrowLeft = false;
    keys.ArrowRight = false;

    document.body.classList.remove("final-block-hit");
    document.body.classList.add("ending-mode");

    const finalPosition =
        MEMORIES[MEMORIES.length - 1].position;

    const targetWorldX = Math.min(
        levelWidth - window.innerWidth,
        finalPosition + 500 - SETTINGS.marioScreenX
    );

    animateWorldTo(targetWorldX, 1500, () => {
        mario.classList.remove("facing-left");
        mario.classList.add("ending-walk");

        window.setTimeout(() => {
            mario.classList.remove("ending-walk");
            animateFlag();
            launchFireworks();
            playCourseClearSound();

            window.setTimeout(() => {
                showFinalScreen();
            }, 2200);
        }, 1200);
    });
}

function animateWorldTo(target, duration, callback) {
    const startingX = worldX;
    const distance = target - startingX;
    const startTime = performance.now();

    function animate(currentTime) {
        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        worldX =
            startingX +
            distance * easedProgress;

        drawGame();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else if (typeof callback === "function") {
            callback();
        }
    }

    requestAnimationFrame(animate);
}

function animateFlag() {
    const flag = document.querySelector(".love-flag");

    if (flag) {
        flag.classList.add("flag-raised");
    }
}

function launchFireworks() {
    const fireworkSymbols = [
        "♥",
        "★",
        "●",
        "♥",
        "★",
        "●"
    ];

    const positions = [
        [20, 25],
        [40, 14],
        [62, 24],
        [78, 12],
        [31, 42],
        [70, 40]
    ];

    positions.forEach(([left, top], fireworkIndex) => {
        window.setTimeout(() => {
            for (let index = 0; index < 12; index += 1) {
                const spark =
                    document.createElement("span");

                spark.className = "firework-spark";
                spark.textContent =
                    fireworkSymbols[
                        (index + fireworkIndex) %
                            fireworkSymbols.length
                    ];

                spark.style.left = `${left}vw`;
                spark.style.top = `${top}vh`;

                const angle =
                    (Math.PI * 2 * index) / 12;

                const distance = 70 + Math.random() * 80;

                spark.style.setProperty(
                    "--firework-x",
                    `${Math.cos(angle) * distance}px`
                );

                spark.style.setProperty(
                    "--firework-y",
                    `${Math.sin(angle) * distance}px`
                );

                document.body.appendChild(spark);

                window.setTimeout(() => {
                    spark.remove();
                }, 1300);
            }
        }, fireworkIndex * 260);
    });
}

function createFinalScreen() {
    const finalScreen = document.createElement("section");
    finalScreen.id = "final-screen";
    finalScreen.className = "hidden";

    finalScreen.innerHTML = `
        <div class="final-stars-background" aria-hidden="true">
            <span>★</span>
            <span>♥</span>
            <span>★</span>
            <span>♥</span>
            <span>★</span>
            <span>♥</span>
        </div>

        <div class="course-clear-card">
            <p class="course-clear-label">COURSE CLEAR!</p>

            <h2>6 MONTHS COMPLETE</h2>

            <div class="final-score-row">
                <span>MEMORIES ${MEMORIES.length}/${MEMORIES.length}</span>
                <span>COINS ${coinScore}</span>
            </div>

            <div class="final-heart">♥</div>

            <p class="final-ending-message">
                WORLD 1 COMPLETE
            </p>

            <p class="next-world-message">
                NEXT WORLD: 1 YR -> FOREVER
            </p>

            <button id="replay-button" type="button">
                PLAY AGAIN ↻
            </button>
        </div>
    `;

    document.body.appendChild(finalScreen);

    const replayButton =
        document.getElementById("replay-button");

    replayButton.addEventListener("click", () => {
        window.location.reload();
    });
}

function showFinalScreen() {
    const finalScreen =
        document.getElementById("final-screen");

    const finalCoinCount =
        finalScreen.querySelector(
            ".final-score-row span:last-child"
        );

    finalCoinCount.textContent = `COINS ${coinScore}`;

    finalScreen.classList.remove("hidden");
    finalScreen.classList.add("show-final-screen");

    launchContinuousHearts();
}

function launchContinuousHearts() {
    let heartsCreated = 0;

    const interval = window.setInterval(() => {
        const heart = document.createElement("span");

        heart.className = "floating-final-heart";
        heart.textContent =
            Math.random() > 0.35 ? "♥" : "★";

        heart.style.left = `${
            5 + Math.random() * 90
        }vw`;

        heart.style.setProperty(
            "--heart-drift",
            `${-60 + Math.random() * 120}px`
        );

        document.body.appendChild(heart);

        window.setTimeout(() => {
            heart.remove();
        }, 4500);

        heartsCreated += 1;

        if (heartsCreated >= 30) {
            window.clearInterval(interval);
        }
    }, 170);
}

/* =========================================================
   SIMPLE GAME SOUNDS
   These are generated by the browser, so no sound files
   are required.
========================================================= */

function playTone(
    frequency,
    duration,
    waveType = "square",
    volume = 0.045
) {
    try {
        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContextClass) {
            return;
        }

        const audioContext =
            new AudioContextClass();

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.type = waveType;
        oscillator.frequency.value = frequency;

        gain.gain.setValueAtTime(
            volume,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime + duration
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(
            audioContext.currentTime + duration
        );
    } catch (error) {
        console.log("Sound could not play:", error);
    }
}

function playCoinSound() {
    playTone(988, 0.07, "square", 0.04);

    window.setTimeout(() => {
        playTone(1319, 0.11, "square", 0.04);
    }, 65);
}

function playBlockSound() {
    playTone(220, 0.06, "square", 0.05);

    window.setTimeout(() => {
        playTone(440, 0.09, "square", 0.045);
    }, 70);
}

function playFinalBlockSound() {
    const notes = [523, 659, 784, 1047];

    notes.forEach((note, index) => {
        window.setTimeout(() => {
            playTone(note, 0.16, "square", 0.045);
        }, index * 120);
    });
}

function playCourseClearSound() {
    const notes = [
        523,
        659,
        784,
        659,
        784,
        1047
    ];

    notes.forEach((note, index) => {
        window.setTimeout(() => {
            playTone(note, 0.22, "square", 0.04);
        }, index * 170);
    });
}

/* =========================================================
   CONTROLS
========================================================= */

document.addEventListener("keydown", (event) => {
    const controlledKeys = [
        "ArrowRight",
        "ArrowLeft",
        "ArrowUp",
        " "
    ];

    if (controlledKeys.includes(event.key)) {
        event.preventDefault();
    }

    if (event.key === "ArrowRight") {
        keys.ArrowRight = true;
    }

    if (event.key === "ArrowLeft") {
        keys.ArrowLeft = true;
    }

    if (
        event.key === "ArrowUp" ||
        event.key === " "
    ) {
        startJump();
    }

    if (
        !memoryModal.classList.contains("hidden") &&
        event.key === "Enter"
    ) {
        continueGame();
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight") {
        keys.ArrowRight = false;
    }

    if (event.key === "ArrowLeft") {
        keys.ArrowLeft = false;
    }
});

window.addEventListener("blur", () => {
    keys.ArrowRight = false;
    keys.ArrowLeft = false;
    mario.classList.remove("running");
});

window.addEventListener("resize", () => {
    calculateLevelWidth();

    const maximumWorldX = Math.max(
        0,
        levelWidth - window.innerWidth
    );

    worldX = Math.min(
        worldX,
        maximumWorldX
    );

    drawGame();
});

/* =========================================================
   EXTRA MARIO-LIKE STYLING
   This is inserted automatically by JavaScript.
========================================================= */

function injectMarioMagicStyles() {
    const style = document.createElement("style");

    style.textContent = `
        #memory-text {
            white-space: pre-line;
        }

        .title-screen-leaving {
            animation: title-screen-exit 350ms ease-in forwards;
        }

        @keyframes title-screen-exit {
            to {
                opacity: 0;
                transform: scale(1.12);
            }
        }

        #mario.running {
            filter: drop-shadow(0 6px 2px rgba(0, 0, 0, 0.16));
        }

        #coin-counter {
            position: absolute;
            top: 74px;
            left: 20px;
            z-index: 20;
            padding: 8px 12px;
            border: 4px solid #1c1c1c;
            background: rgba(255, 255, 255, 0.94);
            color: #1c1c1c;
            font-size: 17px;
            font-weight: 700;
        }

        .hud-coin {
            display: inline-block;
            color: #ffd83d;
            -webkit-text-stroke: 2px #a56a00;
            animation: hud-coin-spin 700ms linear infinite;
        }

        @keyframes hud-coin-spin {
            50% {
                transform: scaleX(0.2);
            }
        }

        .magic-coin {
            position: absolute;
            z-index: 7;
            width: 32px;
            height: 44px;
            border: 4px solid #a76600;
            border-radius: 50%;
            background: linear-gradient(
                90deg,
                #e6a900,
                #fff278,
                #ffc400,
                #fff278,
                #d79500
            );
            box-shadow:
                inset 0 0 0 3px #ffd83d,
                0 4px 0 rgba(0, 0, 0, 0.18);
            animation:
                coin-float 700ms ease-in-out infinite alternate,
                coin-turn 850ms linear infinite;
        }

        .magic-coin span {
            position: absolute;
            top: 8px;
            right: 10px;
            bottom: 8px;
            left: 10px;
            border: 3px solid #bb7500;
            border-radius: 50%;
        }

        .magic-coin.collected {
            pointer-events: none;
            animation: coin-collected 420ms ease-out forwards;
        }

        @keyframes coin-float {
            to {
                translate: 0 -8px;
            }
        }

        @keyframes coin-turn {
            50% {
                scale: 0.25 1;
            }
        }

        @keyframes coin-collected {
            50% {
                opacity: 1;
                transform: translateY(-75px) scale(1.25);
            }

            100% {
                opacity: 0;
                transform: translateY(-110px) scale(0.2);
            }
        }

        .magic-pipe {
            position: absolute;
            bottom: 120px;
            z-index: 5;
            width: 90px;
        }

        .pipe-body {
            position: absolute;
            right: 8px;
            bottom: 0;
            left: 8px;
            height: calc(100% - 24px);
            border: 5px solid #185b23;
            background:
                linear-gradient(
                    90deg,
                    #217c2c 0%,
                    #4dde59 22%,
                    #9bff91 42%,
                    #39ae43 65%,
                    #176422 100%
                );
        }

        .pipe-top {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 34px;
            border: 5px solid #185b23;
            background:
                linear-gradient(
                    90deg,
                    #217c2c,
                    #68ea68,
                    #b1ff9f,
                    #35a941,
                    #176422
                );
        }

        .brick-row {
            position: absolute;
            bottom: 350px;
            z-index: 4;
            display: flex;
            gap: 4px;
        }

        .magic-brick {
            width: 54px;
            height: 54px;
            border: 4px solid #4f2513;
            background:
                linear-gradient(
                    #dc6f32 0 46%,
                    #5c2918 46% 54%,
                    #c55b29 54%
                );
            box-shadow:
                inset 0 0 0 4px #f09047,
                0 5px 0 rgba(0, 0, 0, 0.18);
        }

        .final-checkpoint {
            width: 132px;
            height: 132px;
        }

        .final-checkpoint .memory-box {
            width: 122px;
            height: 122px;
            border: 6px solid white;
            outline: 6px solid #1c1c1c;
            background:
                radial-gradient(
                    circle at 35% 25%,
                    #fff9bd 0 8%,
                    transparent 9%
                ),
                linear-gradient(
                    #fff177,
                    #ffd51f 50%,
                    #ef9f00
                );
            box-shadow:
                inset 0 0 0 5px #fff79a,
                inset 0 -8px 0 rgba(150, 83, 0, 0.3),
                0 7px 0 #1c1c1c,
                0 0 30px rgba(255, 225, 48, 0.9);
            animation:
                final-block-float 700ms ease-in-out infinite alternate,
                final-block-glow 1100ms ease-in-out infinite alternate;
        }

        .final-checkpoint .memory-emoji {
            width: 78px;
            height: 78px;
            font-size: 62px;
        }

        .final-checkpoint .checkpoint-label {
            top: 145px;
            padding: 9px 14px;
            background: #d9342b;
            color: white;
            font-size: 16px;
        }

        .final-block-shine {
            position: absolute;
            top: -40%;
            left: -70%;
            width: 40%;
            height: 180%;
            background: rgba(255, 255, 255, 0.65);
            transform: rotate(28deg);
            animation: final-shine 1800ms linear infinite;
        }

        @keyframes final-shine {
            to {
                left: 140%;
            }
        }

        @keyframes final-block-float {
            to {
                transform: translateY(-12px);
            }
        }

        @keyframes final-block-glow {
            to {
                filter: brightness(1.12);
            }
        }

        .block-reward {
            position: fixed;
            z-index: 5000;
            color: #ffd83d;
            font-size: 48px;
            pointer-events: none;
            transform: translate(-50%, -50%);
            animation: reward-pop 900ms ease-out forwards;
            text-shadow:
                3px 3px 0 #1c1c1c;
        }

        .block-reward.final-reward {
            color: #ff4e62;
            font-size: 76px;
        }

        @keyframes reward-pop {
            0% {
                opacity: 0;
                transform: translate(-50%, 20px) scale(0.2);
            }

            40% {
                opacity: 1;
                transform: translate(-50%, -90px) scale(1.25);
            }

            100% {
                opacity: 0;
                transform: translate(-50%, -145px) scale(0.7);
            }
        }

        .block-particle {
            position: fixed;
            z-index: 5000;
            color: #ffd83d;
            font-size: 24px;
            font-weight: 700;
            pointer-events: none;
            text-shadow: 2px 2px 0 #1c1c1c;
            animation: particle-burst 900ms ease-out forwards;
        }

        .final-particle {
            color: #ff5d70;
            font-size: 32px;
        }

        @keyframes particle-burst {
            to {
                opacity: 0;
                transform:
                    translate(
                        var(--particle-x),
                        var(--particle-y)
                    )
                    rotate(360deg)
                    scale(0.4);
            }
        }

        #memory-modal.final-memory {
            background:
                radial-gradient(
                    circle at 20% 20%,
                    rgba(255, 216, 61, 0.24),
                    transparent 18%
                ),
                radial-gradient(
                    circle at 80% 30%,
                    rgba(255, 255, 255, 0.17),
                    transparent 15%
                ),
                linear-gradient(
                    #10265c,
                    #050b25
                );
        }

        .final-memory .modal-window {
            width: min(1080px, 94vw);
            border-width: 10px;
            background: #fff8d9;
            box-shadow:
                0 0 0 8px #ffd83d,
                18px 18px 0 rgba(0, 0, 0, 0.45);
            animation:
                final-modal-arrival 520ms
                cubic-bezier(0.2, 1.35, 0.5, 1);
        }

        .final-memory .modal-header {
            justify-content: center;
            background: #d9342b;
            font-size: clamp(22px, 4vw, 38px);
            text-align: center;
        }

        .final-memory .modal-heart {
            position: absolute;
            right: 30px;
        }

        .final-memory .modal-content {
            grid-template-columns:
                minmax(260px, 0.9fr)
                1.25fr;
            padding: 38px;
        }

        .final-memory .memory-writing h2 {
            color: #d9342b;
            font-size: clamp(42px, 7vw, 72px);
            text-shadow:
                4px 4px 0 #ffd83d;
        }

        .final-memory .memory-writing h2::before {
            display: block;
            margin-bottom: 12px;
            color: #1c1c1c;
            font-size: 20px;
            letter-spacing: 4px;
            text-shadow: none;
            content: "COURSE CLEAR!";
        }

        .final-memory #memory-text {
            font-size: 19px;
            line-height: 1.7;
        }

        .final-memory #continue-button {
            padding: 18px 28px;
            background: #ffd83d;
            font-size: 19px;
        }

        @keyframes final-modal-arrival {
            0% {
                opacity: 0;
                transform: scale(0.5) translateY(100px);
            }

            70% {
                opacity: 1;
                transform: scale(1.04) translateY(-8px);
            }

            100% {
                transform: scale(1);
            }
        }

        .ending-sign {
            position: absolute;
            bottom: 155px;
            z-index: 5;
            padding: 10px 14px;
            border: 5px solid #4a260e;
            background: #b87334;
            color: white;
            font-weight: 700;
            text-align: center;
            box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.2);
        }

        .ending-sign strong {
            display: block;
            color: #ffd83d;
            font-size: 32px;
        }

        .flagpole {
            position: absolute;
            bottom: 120px;
            z-index: 5;
            width: 110px;
            height: 410px;
        }

        .flagpole-stick {
            position: absolute;
            top: 18px;
            bottom: 30px;
            left: 50%;
            width: 12px;
            border: 4px solid #1c1c1c;
            background: linear-gradient(
                90deg,
                #d7d7d7,
                white,
                #888
            );
        }

        .flagpole-ball {
            position: absolute;
            top: 0;
            left: calc(50% - 12px);
            z-index: 2;
            width: 30px;
            height: 30px;
            border: 4px solid #1c1c1c;
            border-radius: 50%;
            background: #ffd83d;
        }

        .love-flag {
            position: absolute;
            top: 45px;
            left: calc(50% + 7px);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 88px;
            height: 58px;
            border: 5px solid #1c1c1c;
            background: #d9342b;
            color: white;
            font-size: 38px;
            clip-path: polygon(
                0 0,
                100% 0,
                78% 50%,
                100% 100%,
                0 100%
            );
            transition:
                top 1300ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .love-flag.flag-raised {
            top: 315px;
        }

        .flagpole-base {
            position: absolute;
            bottom: 0;
            left: calc(50% - 36px);
            width: 80px;
            height: 34px;
            border: 5px solid #1c1c1c;
            background: #7a7a7a;
        }

        .love-castle {
            position: absolute;
            bottom: 120px;
            z-index: 4;
            display: flex;
            align-items: flex-end;
            width: 330px;
            height: 285px;
        }

        .castle-tower {
            position: relative;
            width: 90px;
            height: 220px;
            border: 6px solid #1c1c1c;
            background:
                repeating-linear-gradient(
                    0deg,
                    #e6a467 0 28px,
                    #bd743e 28px 34px
                );
        }

        .castle-center {
            position: relative;
            width: 150px;
            height: 180px;
            border: 6px solid #1c1c1c;
            background:
                repeating-linear-gradient(
                    0deg,
                    #dd9157 0 28px,
                    #b96b38 28px 34px
                );
        }

        .castle-roof {
            position: absolute;
            top: -60px;
            left: -14px;
            width: 106px;
            height: 65px;
            border: 6px solid #1c1c1c;
            background: #d9342b;
            clip-path: polygon(
                50% 0,
                100% 100%,
                0 100%
            );
        }

        .castle-window {
            width: 42px;
            height: 52px;
            margin: 70px auto 0;
            border: 5px solid #1c1c1c;
            border-radius: 22px 22px 0 0;
            background: #182243;
            color: #ff6678;
            font-size: 25px;
            text-align: center;
            line-height: 43px;
        }

        .castle-banner {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 65px;
            height: 65px;
            margin: 24px auto 0;
            border: 5px solid #1c1c1c;
            border-radius: 50%;
            background: #ffd83d;
            color: #d9342b;
            font-size: 38px;
            font-weight: 700;
        }

        .castle-door {
            position: absolute;
            bottom: 0;
            left: calc(50% - 35px);
            width: 70px;
            height: 75px;
            border: 5px solid #1c1c1c;
            border-bottom: 0;
            border-radius: 35px 35px 0 0;
            background: #26140d;
        }

        .ending-walk {
            animation: mario-ending-walk 250ms steps(2) infinite;
        }

        @keyframes mario-ending-walk {
            50% {
                transform: translateY(-4px);
            }
        }

        .ending-mode #game {
            animation: evening-sky 2000ms ease forwards;
        }

        @keyframes evening-sky {
            to {
                background: #3852a3;
            }
        }

        .firework-spark {
            position: fixed;
            z-index: 6000;
            color: #ffd83d;
            font-size: 24px;
            font-weight: 700;
            pointer-events: none;
            text-shadow: 2px 2px 0 #1c1c1c;
            animation: firework-explode 1250ms ease-out forwards;
        }

        @keyframes firework-explode {
            0% {
                opacity: 0;
                transform: scale(0.2);
            }

            20% {
                opacity: 1;
            }

            100% {
                opacity: 0;
                transform:
                    translate(
                        var(--firework-x),
                        var(--firework-y)
                    )
                    rotate(360deg)
                    scale(0.45);
            }
        }

        #final-screen {
            position: fixed;
            inset: 0;
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 24px;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at center,
                    #21478f,
                    #050b24 72%
                );
        }

        #final-screen.show-final-screen {
            animation: final-screen-fade 650ms ease both;
        }

        @keyframes final-screen-fade {
            from {
                opacity: 0;
            }
        }

        .course-clear-card {
            position: relative;
            z-index: 2;
            width: min(760px, 92vw);
            padding: 42px 34px;
            border: 9px solid white;
            outline: 7px solid #1c1c1c;
            background: #d9342b;
            color: white;
            text-align: center;
            box-shadow:
                18px 18px 0 rgba(0, 0, 0, 0.4);
            animation:
                final-card-pop 700ms
                cubic-bezier(0.2, 1.4, 0.5, 1)
                both;
        }

        @keyframes final-card-pop {
            from {
                opacity: 0;
                transform: scale(0.4) translateY(100px);
            }
        }

        .course-clear-label {
            margin-bottom: 14px;
            color: #ffd83d;
            font-size: clamp(22px, 4vw, 34px);
            font-weight: 700;
            letter-spacing: 5px;
            text-shadow: 3px 3px 0 #1c1c1c;
        }

        .course-clear-card h2 {
            font-size: clamp(42px, 8vw, 76px);
            line-height: 1;
            text-shadow: 5px 5px 0 #1c1c1c;
        }

        .final-score-row {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin: 26px auto;
            padding: 13px;
            border-top: 4px solid white;
            border-bottom: 4px solid white;
            font-weight: 700;
        }

        .final-heart {
            color: #ffd83d;
            font-size: 82px;
            line-height: 1;
            text-shadow: 5px 5px 0 #1c1c1c;
            animation: final-heart-beat 850ms ease-in-out infinite;
        }

        @keyframes final-heart-beat {
            50% {
                transform: scale(1.18);
            }
        }

        .final-ending-message {
            margin-top: 15px;
            font-size: clamp(20px, 4vw, 30px);
            font-weight: 700;
            letter-spacing: 3px;
        }

        .next-world-message {
            margin: 14px 0 28px;
            font-family: Arial, sans-serif;
            font-size: 18px;
        }

        #replay-button {
            padding: 15px 25px;
            border: 5px solid #1c1c1c;
            background: #ffd83d;
            color: #1c1c1c;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 5px 5px 0 #1c1c1c;
        }

        #replay-button:hover {
            transform: translate(2px, 2px);
            box-shadow: 3px 3px 0 #1c1c1c;
        }

        .final-stars-background span {
            position: absolute;
            color: rgba(255, 216, 61, 0.35);
            font-size: 50px;
            animation: background-star-float 3s ease-in-out infinite alternate;
        }

        .final-stars-background span:nth-child(1) {
            top: 10%;
            left: 10%;
        }

        .final-stars-background span:nth-child(2) {
            top: 20%;
            right: 14%;
            animation-delay: 0.5s;
        }

        .final-stars-background span:nth-child(3) {
            bottom: 15%;
            left: 18%;
            animation-delay: 1s;
        }

        .final-stars-background span:nth-child(4) {
            right: 8%;
            bottom: 20%;
            animation-delay: 1.5s;
        }

        .final-stars-background span:nth-child(5) {
            top: 7%;
            left: 50%;
            animation-delay: 0.8s;
        }

        .final-stars-background span:nth-child(6) {
            bottom: 6%;
            left: 52%;
            animation-delay: 1.2s;
        }

        @keyframes background-star-float {
            to {
                transform:
                    translateY(-25px)
                    rotate(14deg)
                    scale(1.2);
            }
        }

        .floating-final-heart {
            position: fixed;
            bottom: -80px;
            z-index: 10001;
            color: #ffd83d;
            font-size: 28px;
            pointer-events: none;
            text-shadow: 2px 2px 0 #1c1c1c;
            animation: floating-final-heart 4300ms ease-out forwards;
        }

        @keyframes floating-final-heart {
            to {
                opacity: 0;
                transform:
                    translate(
                        var(--heart-drift),
                        -115vh
                    )
                    rotate(360deg);
            }
        }

        @media (max-width: 700px) {
            #coin-counter {
                top: 55px;
                left: 10px;
                font-size: 13px;
            }

            .final-checkpoint {
                width: 104px;
                height: 104px;
            }

            .final-checkpoint .memory-box {
                width: 98px;
                height: 98px;
            }

            .final-checkpoint .memory-emoji {
                width: 60px;
                height: 60px;
                font-size: 48px;
            }

            .final-checkpoint .checkpoint-label {
                top: 115px;
                font-size: 12px;
            }

            .final-memory .modal-content {
                grid-template-columns: 1fr;
                padding: 22px;
            }

            .final-memory .memory-writing h2 {
                font-size: 39px;
            }

            .final-memory #memory-text {
                font-size: 17px;
            }

            .course-clear-card {
                padding: 32px 20px;
            }

            .final-score-row {
                flex-direction: column;
                gap: 6px;
            }
        }
    `;

    document.head.appendChild(style);
}