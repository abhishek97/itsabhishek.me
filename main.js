/*
 * Oh hello there, Mr. Hacker! , so you want to see some code? 
 * Sure thing! , In fact i was thinking of wirting a javascript library to "Type" words
 * as you saw here. Sounds fun? join me!. Drop an email ag120397@gmail.com or message me
 * whatever you do, let me know!
 *
 * 
*/


$(function () { 

//Print this in console as well.

console.log(`/*
 * Oh hello there, Mr. Hacker! , so you want to see some code? 
 * Sure thing! , In fact i was thinking of wirting a javascript library to "Type" words
 * as you saw here. Sounds fun? join me!. Drop an email ag120397@gmail.com or message me
 * whatever you do, let me know!
 * Have Fun!
 * 
*/`);
  
var style = `
/**
 * Hello, I guess you are here to meet me.
 * My name is Abhishek Gupta.I am web developer. Oh, and also pusuing B.Tech
 * Degree in IT. 
 *  
 * Well this is quite boring isn't it?, How about some live coding?    
*/

/**
 * We start by animating. Animate what you ask?.. well everything
*/

   * {
    -webkit-transition: all 1s;
    }

/**
 * Well, that didn't do much. But you'll see. 
 * and yes, i know text is too small, let's fix that. 
*/

   pre,a {
      font-size: 15px;
    }    

/**
 * Black on white? Well, this is ins't 1990s so ..The Background !
*/

    html{
      background-color: #6c1f45;
    }

/**
 * Hold On!
 *
*/

    pre,a {
      color: whitesmoke;
    }    
  
/**
 * Gosh!. Look at all this empty space, lets fit into 
 * something more comfy.
*/

    
    pre {
      overflow : auto;
      width : 49%;
      background: rgb(48,48,48);
      border: 1px solid #ccc;
      max-height: 44.6%;
      width: 49%;
      font-size: 14px;
      font-family: monospace;
      padding: 10px 10px 20px;
      box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
      white-space: pre-wrap;
      outline: 0; 
    }

/**
 * Let's add some colors to the code, make it pretty..
 * That more like it. What more comfortable than highlighted code 
 * in a terminal.
*/

    Prism.highlightAll();

/**
 * Now we're getting somewhere
 * Time to get some perspective
*/
    body {
      -webkit-perspective: 1000px;
    }

    pre {
      position : absolute;
    }

/**
 * Are you thinking what i'm thinking?.
 * Some 3D? Yes please.
 *
*/

    #premain {
      -webkit-transform : perspective(700px) translateX(110%) rotateY(-10deg);
      max-height : 85%;
      width : 43%;
      margin-top : 8px;
    }

/**
 * Okay, so now that i have your full attention. 
 * Here's the real thing, plain old & simple
*/

    #realDeal {
      -webkit-transform : perspective(700px) rotateY(10deg);
      max-height : 85%;
      display:block;
      visibility : visible;
      opacity : 1 ;
    }

/**
 * So i think we're good for now. 
 * Hope you liked this. While you're at it please share your views about this.
 * Thanks for your patience and have a nice day!
 * Peace out.
*/
  
`;  
var highlight = false;

function skip()
  {
    $('style').html(style);
  }
  
function writeCode(index ,time)
{
  var tx = time;
  var char = style.charAt(index);
  $('#main').append(char);
  $('style').html( $('style').html() + char);
  if( char == '.' )
    tx = 400 ;
  else if(char == ',')
    tx = 100;
  else if(char == '?' || char=='}')
    tx = 320;
  else if(char == '/' && style.charAt(index-1) == '*' )
    tx = 900;
  
  if(highlight)
    Prism.highlightAll();
  else if( (char == 'A') && (style.substr(index ,  6).localeCompare("All();") == 0 )  )
    highlight = true;

  
  var elem = document.getElementById("premain");
  elem.scrollTop = elem.scrollHeight;
  
  $('html,body').scrollTop(100000000000000000);

  
  if(index < style.length)
  setTimeout( function () { writeCode(index+1 , time) }, tx);
}

writeCode(0, 60);
  
});