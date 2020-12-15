const Items =['Orange','Melon','Bar','Cherry','Bell','Plum'];
let winnings;





function winns(){
    document.write(window.content.localstorage[winnings]);
}

function thebet()
{
Bet= Number(prompt("Enter how much you are betting!"));
return Bet;
}
function wheel()
{

slot1=spin(1);
slot2=spin(2);
slot3=spin(3);



if ((slot1 === slot2)&&(slot2 === slot3))
    result = Bet * 3;
 else if ((slot1 === slot2)(slot1 === slot3)(slot2 === slot3))
     result = Bet * 2;
else result = Bet * 0;
document.write("<br>" + slot1);
document.write(slot2);
document.write(slot3);
document.write("<br>"+result);


return result;
};


function spin()
{ 
    Spinner = Number(Math.floor(Math.random()*5));
   if (Spinner === 0)
       Spin = Items[0];
   if (Spinner === 1)
       Spin = Items[1];
   if (Spinner === 2)
       Spin = Items[2];
   if (Spinner === 3)
       Spin = Items[3];
   if (Spinner === 4)
       Spin = Items[4];
   if (Spinner === 5)
       Spin = Items[5];
   return Spin;
}



function syn(){
    bet = document.getElementById('Bread').value;

    document.getElementById('winnings').innerhmtl;
    document.write(bet);
}