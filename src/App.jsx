import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import "./App.css";

import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

import photo1 from "./assets/photos/photo1.jpg";
import photo2 from "./assets/photos/photo2.jpg";
import photo3 from "./assets/photos/photo3.jpg";
import photo4 from "./assets/photos/photo4.jpg";

import voice from "./assets/voice.mp3";



function Photos(){

const images=[
photo1,
photo2,
photo3,
photo4
];


return(

<section className="photos">

<h2>
Your Beautiful Journey ✨
</h2>


<div className="photoWall">

{

images.map((img,i)=>(

<motion.img

key={i}

src={img}

className="polaroid"


initial={{

opacity:0,

y:100,

scale:0.8

}}


whileInView={{

opacity:1,

y:0,

scale:1

}}


viewport={{

once:true

}}


whileHover={{

scale:1.15,

rotate:0

}}


animate={{

rotate:[

-8,

8,

-8

]

}}


transition={{

duration:4,

repeat:Infinity

}}


/>

))

}


</div>


</section>

)

}






function Letters(){

const [open,setOpen]=useState(false);



function openLetter(){

setOpen(true);


setTimeout(()=>{

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

},300);


}



return(

<div className="letters">


<h2>
Open when you need happiness 💌
</h2>



<motion.div

className="letter"

whileHover={{

scale:1.1

}}

onClick={openLetter}

>

💌

</motion.div>





{

open &&


<motion.div

className="letterText"


initial={{

scale:0

}}


animate={{

scale:1

}}


>


❤️


<p>

Always remember:

<br/><br/>

You are special.

<br/>

Your smile makes the world brighter.

<br/>

Never stop dreaming ✨

<br/><br/>

Keep smiling always ❤️

</p>


</motion.div>


}



</div>


)

}





function Voice(){


function play(){

const audio=new Audio(voice);

audio.volume=0.8;

audio.play();

}


return(

<button

className="voice"

onClick={play}

>

🎙️ Play My Message

</button>

)

}

function Fireflies(){

const lights=Array.from({length:40},(_,i)=>i);


return(

<>

{

lights.map((i)=>(

<motion.div

key={i}

className="firefly"


animate={{

y:[

0,

-100,

0

],


x:[

0,

50,

-50,

0

],


opacity:[

0,

1,

0

]


}}


transition={{

duration:

4+Math.random()*5,


repeat:Infinity,


delay:

Math.random()*5


}}


>

✨

</motion.div>


))

}


</>

)

}







function Fireworks(){


const [width,height]=useWindowSize();



return(

<Confetti

width={width}

height={height}

numberOfPieces={300}

gravity={0.08}

recycle={false}

/>

)

}







export default function App(){


const [night,setNight]=useState(false);


const [fire,setFire]=useState(false);

const music = useRef(null);


useEffect(()=>{

music.current = new Audio(voice);

music.current.loop = true;
music.current.volume = 0.5;


const startMusic = () => {

music.current.play();

};


document.addEventListener(
"click",
startMusic,
{once:true}
);


return()=>{

document.removeEventListener(
"click",
startMusic
);

};


},[]);







return(


<motion.div


className={night?"night":"wow"}


initial={{

opacity:0

}}


animate={{

opacity:1

}}


transition={{

duration:1

}}



>


<h1>

🎉 Happy Birthday 🎉

</h1>





<Photos/>





<Letters/>





<Voice/>





<Fireflies/>






<button


onClick={()=>{


setNight(true);

setFire(true);



confetti({

particleCount:500,

spread:200

});


}}



>


Enter Magical Night 🌙


</button>








{

fire && <Fireworks/>

}








{

night &&


<motion.div


className="nightMessage"



initial={{

opacity:0,

y:50

}}



animate={{

opacity:1,

y:0

}}



>








<h1>

May your dreams shine brighter than stars

</h1>









</motion.div>


}





</motion.div>



)

}

