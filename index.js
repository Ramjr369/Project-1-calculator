const display=document.getElementById("display");
function appendToDisplay(input)
{
  display.placeholder=""
 display.value+=input;
 
}

function clearDisplay()
{
    display.value="";
    display.placeholder="";
}
function calculate()
{

    try{

        display.value=eval(display.value);
    }
     catch(error)
     {
        display.value=""
        display.placeholder="error 🥴"
     }
}