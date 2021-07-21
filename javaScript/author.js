const profiles = [
  {
    "imageName": "reynald.jpeg",
    "header": "What's up, It is Reynald",
     "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, velporttitor rhoncus dolor purus non "
     
    
  },
  {
    "imageName":"cynthia.jpeg",
    "header": "Hi, It is Cynthia",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, velporttitor rhoncus dolor purus non "
 
  },
  {
   "imageName": "celine.jpeg",
   "header": "What's up, It is Celine ",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, velporttitor rhoncus dolor purus non "


   
 },
 {
   "imageName":"Rudo.jpg",
   "header": "Hi, It is  Rudo ",
   "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, velporttitor rhoncus dolor purus non "
 }
]

  const createElement = (leftElement) =>{
   let div = document.createElement("div");
   div.className = "profile";
   div.id = leftElement;
   let img = document.createElement("img");
   img.src= "../images/author/" + profiles[leftElement].imageName
   let div2 = document.createElement("div");
    div2.innerHTML = `<h3> ${profiles[leftElement].header}</h3> <p>${profiles[leftElement].bio}</p> <div class="socialIcons"> <a href="#" class="fab fa-facebook"></a>
    <a href="#" class="fab fa-github"></a>
    <a href="#" class="twitter">@</a></div>`
    div.appendChild(img);
    div.appendChild(div2);
      return div; 
  }


 let leftElement = 0; 
 let rightElement = 1; 
const leftSide = () => {
      if(leftElement > 0){
        let removeDiv = document.getElementById(rightElement);
        let currentDiv = document.getElementById(leftElement);
        let addDiv =  createElement(--leftElement);
         document.getElementById("profiles").insertBefore(addDiv, currentDiv);
         document.getElementById("profiles").removeChild(removeDiv);
         rightElement--;
}
}
const rightSide = () => {
  if(rightElement <profiles.length-1){
   let removeDiv = document.getElementById(leftElement);
    let addDiv =  createElement(++rightElement);
    document.getElementById("profiles").appendChild(addDiv);
    document.getElementById("profiles").removeChild(removeDiv);
   leftElement++;
 }
}

 const addProfiles = () =>{
     let i= 0; 
     while(i < 2){
       let div = createElement(i);
           document.getElementById("profiles").appendChild(div);
           i++; 
     }
}

addProfiles()
