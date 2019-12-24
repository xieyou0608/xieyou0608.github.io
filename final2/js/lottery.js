$(document).ready(function(){

    //讀完說明
    $('#understood').on('click', () => {
        $('#guide').hide(1000)
        //產生一個again按鈕可以再次打開說明
        $again = $('<button>').text('再看一次說明').addClass('btn').addClass('btn-primary')
        //插入
        $('#again').append($again)
    })
    //再看一次說明
    $('#again').on('click', () => {
        $('#guide').show()
        $again.remove()
    })

    $('#lotgo').on('click',() => {
        prize = $('#prize').val()
        prizeNum = $('#number').val()
        names = $('#names').val()

        prizeArr = prize.split(" ")
        numArr = prizeNum.split(" ")
        nameArr = names.split(" ")

        $result = $('<div>')

        for(i = 0; i < numArr.length; i++){
            for(j = 1; j <= numArr[i]; j++){
                lockyNumber = rand(0,nameArr.length-1)
                
                $aLucky = $('<p>').text(prizeArr[i] + " " + nameArr[lockyNumber])
                $result.append($aLucky)

                nameArr.splice(lockyNumber,1)
                console.log(nameArr.length)
            }
        }

        $('#result').append($result)
    })

})