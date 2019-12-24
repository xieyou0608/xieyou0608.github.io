$(() => {
    const holes = $('.hole');
    const moles = $('.mole');
    const scoreBoard = $('#score');

    var startGame = () => {
        score = 0
        scoreBoard.textContent = score;
        timeUp = false;
        peepOut();
        setTimeout(() => timeUp = true, 10000);
    }

    //隨機選擇一個時間的函數
    var randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    //隨機選擇一個洞的函數
    let lastHole;
    var randomHole = (holes) => {
        //console.log(holes);
        const index = Math.floor(Math.random() * holes.length)
        const hole = holes[index]
        //阻止地鼠重複出現，如果選到和上次一樣的洞就換掉
        if (hole === lastHole) {
            return randomHole(holes)
        }
        lastHole = hole
        return hole;
    }

    //讓地鼠出現
    let timeUp = false;
    var peepOut = () => {
        const time = randomTime(800, 1000);
        const hole = randomHole(holes);
        hole.classList.add('up')
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) {
                peepOut();
            }
        }, time)
    }


    //點擊+算分
    let score = 0;

    $('#hole1').on('click', () => {
        if ($('#hole1').hasClass('up')) {
            score++;
        }
        $('#score').text(score)
    })
    $('#hole2').on('click', () => {
        if ($('#hole2').hasClass('up')) {
            score++;
        }
        $('#score').text(score)
    })
    $('#hole3').on('click', () => {
        if ($('#hole3').hasClass('up')) {
            score++;
        }
        $('#score').text(score)
    })
    $('#hole4').on('click', () => {
        if ($('#hole4').hasClass('up')) {
            score++;
        }
        $('#score').text(score)
    })
    $('#hole5').on('click', () => {
        if ($('#hole5').hasClass('up')) {
            score++;
        }
        $('#score').text(score)
    })
    $('#hole6').on('click', () => {
        if ($('#hole6').hasClass('up')) {
            score++;
        }
        $('#score').text(score)
    })

    $('#startBtn').on('click', startGame);
})