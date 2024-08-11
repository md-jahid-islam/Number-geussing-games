document.getElementById('welcome-start-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('input-screen').style.display = 'block';
});

document.getElementById('name-start-btn').addEventListener('click', function() {
    const player1Name = document.getElementById('player1-name').value;
    const player2Name = document.getElementById('player2-name').value;
    const player3Name = document.getElementById('player3-name').value;

    if (player1Name && player2Name && player3Name) {
        document.getElementById('input-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';

        startGame(player1Name, player2Name && player3Name);
    } else {
        alert('Please enter names for both players.');
    }
});


// =========================number guessing game start==========================//

// let show = document .querySelector('.show')
// let error = document .querySelector('.error')
// // =====
// let player_one = document .querySelector('.player_one')
// let player_one_input = document .querySelector('.player_one_input')
// let player_one_button = document .querySelector('.player_one_button')
// let player_tow = document .querySelector('.player_tow')
// let player_tow_input = document .querySelector('.player_tow_input')
// let player_tow_button = document .querySelector('.player_tow_button')
// // =====================player name

// // Add functionality for Player 2 button click here (optional)
// // You can store player names in variables and proceed to the game page
// // game start

// //==============palyer prat one
// player_one_button.addEventListener('click' , ()=>{
//     if(player_one_input.value == ''){
//         error.innerHTML = 'faka raka jabe na'
//     }else{
//         if(player_one_input.value > 10){
//             error.innerHTML = '10 er beshi deya jave na'
//         }else{
//             error.innerHTML = ''
//             show.innerHTML = 'player - 2'
//             player_one.style = 'display:none;'
//             player_tow.style = 'display:block;'
//         }
//     }
// })  
// //=====================player two
// player_tow_button.addEventListener('click' , ()=>{
//     if(player_tow_input.value == ''){
//         error.innerHTML = 'faka raka jave na baba player tow'
//     }else{
//      if(player_tow_input.value > 10){
//         error.innerHTML = '10 er beshi kicu ekta neow'
//      }else{
//         error.innerHTML = ''
//         if(player_tow_input.value == player_one_input.value){
//             show.innerHTML = 'player 2 win'
//         }else{
//             show.innerHTML = 'player 1 win'
//         }
//      }
//     }
// })

let  main_menu                   = document.querySelector('#main_menu')
let  show                        = document.querySelector('.show')
let  error                       = document.querySelector('.error')
let  counter                     = document.querySelector('.counter')
let  player_one                  = document.querySelector('.player_one')
let  player_one_input            = document.querySelector('.player_one_input')
let  player_one_button           = document.querySelector('.player_one_button')
let  player_two                  = document.querySelector('.player_two')
let  player_two_input            = document.querySelector('.player_two_input')
let  player_two_button           = document.querySelector('.player_two_button')
let  player_three                = document.querySelector('.player_three')
let  player_three_input          = document.querySelector('.player_three_input')
let  player_three_button         = document.querySelector('.player_three_button')
let  number_of_time              = document.querySelector('.number_of_time')
let  player_three_player_counter = document.querySelector('.player_three_player_counter')
let  i                           = 0
let  x                           = 0


//  player one
player_one_button.addEventListener('click' , ()=>{
  if(player_one_input.value == ''){
    error.innerHTML = "please enter a value"

  }else {
    if(player_one_input.value > 10){
    error.innerHTML = "The number is too big"

    }else{
      error.innerHTML   = ''
      show.innerHTML    = "Player Two"
      player_one.style  = "display:none;"
      player_two.style  =" display:block"
    }
  }
})

// player two
player_two_button.addEventListener('click', ()=>{
  if(player_two_input.value == ''){
    error.innerHTML = "please enter a value"

  }else {
    if(player_two_input.value > 10){
      error.innerHTML        = " the number is too big"
      player_two_input.value = ''

    }else {
      if(player_two_input.value == player_one_input.value){
        main_menu.style     = "font-size:54px; text_align:center;"
        main_menu.innerHTML = "Player Two Win    🏆🏆🏆🏆"
        
      }else {
        increaseCounter()
        function increaseCounter(){
          if(i < 5){
            i++;
            counter.innerText       = "Attempts: " + i;
            player_two_input.value  = ''
            error.innerHTML         = ''

          }else {
            if(player_two_input.value = player_one_input.value) {
              show.innerHTML         = 'Player Three'
              main_menu.style        = "font-size:64px; text_align:center;"
              player_two.style       = "display:none;"
              player_three.style     = "display:block"

            }else {
              main_menu.innerHTML = " Player One Win"
            }
          }
        }
      }
    }
  }
})

// player three
player_three_button.addEventListener('click', ()=>{
  if(player_three_input.value == ''){
    error.innerHTML = "please enter a value"

  }else {
    if(player_three_input.value > 10){
      error.innerHTML           = " the number is too big"
      player_three_input.value = ''
     

    }else {
      if(player_three_input.value == player_one_input.value){
        main_menu.style     = "font-size:54px; text_align:center;"
        main_menu.innerHTML = "Player Three Win    🏆🏆🏆🏆"
       
        
      }else {
        increaseCounter()
        function increaseCounter(){
          if(x < 2){
            x++;
            player_three_input.value  = ''
            player_three_player_counter.innerHTML = "Attempts: " + x;
            error.innerHTML     = ''
            

          }else {
            main_menu.style      = "font-size:64px; text_align:center;"
            main_menu.innerHTML  = " Player One Win    🏆🏆🏆🏆"
          }
        }
      }
    }
  }
})