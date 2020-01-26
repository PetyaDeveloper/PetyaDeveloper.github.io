// nav links asigning class active
const nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav a');
console.log(navLink);

//$('.nav').on('click', function(e){
//   if(e.target.tagName === 'A'){
//      for(let i=0; i<navLink.length; i++){
//          navLink[i].removeAttribute('class');
//          e.target.className = "selected";
//      }
//      if(e.target.textContent !== 'Moto'){
//          const originalText = `<img src="images/petya.jpg" alt="Picture of Petya Katsarova" class="profile-image">
//                                <h1 class="tag name">Hello, I’m Petya.</h1>
//                                <p class="tag location">You can find me in Dubai, UAE or somewhere around the world, travelling.</p>`
//          document.getElementById('values').innerHTML = originalText;
//      }
//   }
//});
$('.chit-chat').on('click', function(e){
   const replaceText = `<div><ul class="moto">
                             <li>Let's make clean and beautiful code</li>
                             <li>Let's have fun while doing it</li>
                             <li>Keep growing</li>
                        </ul></div>` 
   document.getElementById('values').innerHTML = replaceText;
});

//// adding contact svg logos on the header
$('.nav').on('click', function(e){
   if(e.target.tagName === 'A'){
      if(e.target.textContent !== 'Moto'){
          const originalText = `<img src="images/petya.jpg" alt="Picture of Petya Katsarova" class="profile-image">
                                <h1 class="tag name">Hello, I’m Petya.</h1>
                                <p class="tag location">You can find me in Dubai, UAE or somewhere around the world, travelling.</p>`
          document.getElementById('values').innerHTML = originalText;
      }
   }
});
$('.contact').on('click', function(e){
   const replaceText = `<div id="contact"><ul>
                             <li>svg1</li>
                             <li>Let's have fun while doing it</li>
                             <li>Keep growing</li>
                        </ul></div>` 
   document.getElementById('values').innerHTML = replaceText;
});
