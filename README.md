# Final project at the university
## Technology used

HTML5, AngularJS, JavaScript, jQuery and Boostrap

## Demo 

https://plnkr.co/edit/5HoGVe?p=info

### Content

A speech game in which the user can say the name of the object in the Italian language and receive a response with the accuracy of the pronunciation. 


### Game Modeling

//Index.html
image - background
Button - start
Button - exit


//Game selection - Number of Players
Button - exit
text - Select number of players
variable - number_of_players

//Redirects to select player number 1 to number_of_players
(X NUMBER OF PLAYERS SELECTED, THERE SHOULD APPEAR X number_of_players_girls and X number_of_players_boys)
//in the future add random for the sprites of number_of_players_girls and number_of_players_boys;
Button - exit
variables :
number_of_players_girls;
number_of_players_boys;
list;

clickable images - number_of_players_girls + number_of_players_boys
while(number_players_clicked < number_of_players){
 .onclick(any image) add it to the list
}

//Game.html
Button - exit
Button - pause
add list of charactors
while(no character is belt == black(belt = 6){
ideogram appears + timer (30 seconds)
click on the character - speak on the microfone
-IF CORRECT ~ Character sprite changes to belt++
-ELSE nothing happens
}
charactorWithBlackBelt appears jumping on screen You win!
redirect to IndexPage after x seconds;
}
