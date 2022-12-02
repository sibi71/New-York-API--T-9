const home = document.querySelector("#home")
const nav_home = document.querySelector("#nav_home");
const world = document.querySelector("#world")
const nav_world = document.querySelector("#nav_world");
const politics = document.querySelector("#politics");
const nav_politics= document.querySelector("#nav_politics");
const magazine = document.querySelector("#magazine");
const nav_magazine = document.querySelector("#nav_magazine");
const technology = document.querySelector("#technology");
const nav_technology = document.querySelector("#nav_technology");
const science= document.querySelector("#science");
const nav_science = document.querySelector("#nav_science");
const health= document.querySelector("#health");
const nav_health = document.querySelector("#nav_health");
const sports= document.querySelector("#sports");
const nav_sports = document.querySelector("#nav_sports");
const arts= document.querySelector("#arts");
const nav_arts = document.querySelector("#nav_arts");
const fashion= document.querySelector("#fashion");
const nav_fashion = document.querySelector("#nav_fashion");
const food= document.querySelector("#food");
const nav_food = document.querySelector("#nav_food");

const travel= document.querySelector("#travel");
const nav_travel = document.querySelector("#nav_travel");


nav_home.addEventListener("click",()=>{
  home.style.display="block";
  politics.style.display="none";
  world.style.display="none";
  magazine.style.display="none";
  technology.style.display="none";
  science.style.display="none";
  health.style.display="none";
  sports.style.display="none"
  arts.style.display="none";
  fashion.style.display="none"
  food.style.display="none"
  travel.style.display="none"
  nav_travel.classList.remove("active")
  nav_world.classList.remove("active")
  nav_home.classList.add("active")
  nav_politics.classList.remove("active")
  nav_magazine.classList.remove("active")
  nav_technology.classList.remove("active")
  nav_science.classList.remove("active")
  nav_health.classList.remove("active")
  nav_sports.classList.remove("active")
  nav_arts.classList.remove("active")
  nav_fashion.classList.remove("active");
  nav_food.classList.remove("active")


  
})

nav_world.addEventListener("click",()=>{
  home.style.display="none";
  politics.style.display="none";
  magazine.style.display="none";
  technology.style.display="none";
  science.style.display="none";
  world.style.display="block"
  health.style.display="none";
  sports.style.display="none";
  arts.style.display="none";
  fashion.style.display="none"
  food.style.display="none"
  travel.style.display="none"
  nav_travel.classList.remove("active")
  nav_world.classList.add("active")
  nav_home.classList.remove("active")
  nav_politics.classList.remove("active")
  nav_magazine.classList.remove("active")
  nav_technology.classList.remove("active")
  nav_science.classList.remove("active")
  nav_health.classList.remove("active")
  nav_sports.classList.remove("active")
  nav_arts.classList.remove("active")
  nav_fashion.classList.remove("active");
  nav_food.classList.remove("active")
})

nav_politics.addEventListener("click",()=>{
  politics.style.display="block";
  home.style.display="none";
  world.style.display="none";
  magazine.style.display="none";
  technology.style.display="none";
  science.style.display="none";
  health.style.display="none";
  sports.style.display="none"
  arts.style.display="none";
  fashion.style.display="none"
  food.style.display="none"
  travel.style.display="none"
  nav_travel.classList.remove("active")
  nav_politics.classList.add("active")
  nav_world.classList.remove("active")
  nav_home.classList.remove("active")
  nav_magazine.classList.remove("active")
  nav_technology.classList.remove("active")
  nav_science.classList.remove("active")
  nav_health.classList.remove("active")
  nav_sports.classList.remove("active")
  nav_fashion.classList.remove("active");
  nav_food.classList.remove("active")
})
nav_magazine.addEventListener("click",()=>{
 magazine.style.display="block";
  home.style.display="none";
  world.style.display="none";
  politics.style.display="none";
  technology.style.display="none";
  science.style.display="none";
  health.style.display="none";
  sports.style.display="none"
  arts.style.display="none";
  arts.style.display="none";
  fashion.style.display="none"
  food.style.display="none"
  travel.style.display="none"
  nav_travel.classList.remove("active")
  nav_magazine.classList.add("active")
  nav_world.classList.remove("active")
  nav_home.classList.remove("active")
  nav_politics.classList.remove("active")
  nav_technology.classList.remove("active")
  nav_science.classList.remove("active")
  nav_health.classList.remove("active")
  nav_sports.classList.remove("active")
  nav_arts.classList.remove("active")
  nav_fashion.classList.remove("active");
  nav_food.classList.remove("active")

})
nav_technology.addEventListener("click",()=>{
    technology.style.display="block";
    home.style.display="none";    
    world.style.display="none";
    politics.style.display="none";
    magazine.style.display="none";
    science.style.display="none";
    health.style.display="none";
    sports.style.display="none"
    arts.style.display="none";
    fashion.style.display="none"
    food.style.display="none"
    travel.style.display="none"
    nav_travel.classList.remove("active")
   nav_technology.classList.add("active")
   nav_world.classList.remove("active")
   nav_home.classList.remove("active")
   nav_politics.classList.remove("active")
   nav_magazine.classList.remove("active")
   nav_science.classList.remove("active")
   nav_health.classList.remove("active")
   nav_sports.classList.remove("active")
   nav_arts.classList.remove("active")
   nav_fashion.classList.remove("active");
   nav_food.classList.remove("active")
 })
 nav_science.addEventListener("click",()=>{
  science.style.display="block";
  home.style.display="none";    
  world.style.display="none";
  politics.style.display="none";
  magazine.style.display="none";
  technology.style.display="none";
  health.style.display="none";
  sports.style.display="none"
  arts.style.display="none";
  fashion.style.display="none"
  food.style.display="none"
  travel.style.display="none"
  nav_travel.classList.remove("active")
 nav_science.classList.add("active")
 nav_world.classList.remove("active")
 nav_home.classList.remove("active")
 nav_politics.classList.remove("active")
 nav_magazine.classList.remove("active")
 nav_technology.classList.remove("active")
 nav_health.classList.remove("active")
 nav_sports.classList.remove("active")
 nav_fashion.classList.remove("active")
 nav_arts.classList.remove("active")
 nav_food.classList.remove("active")
 

})
nav_health.addEventListener("click",()=>{
  health.style.display="block";
  home.style.display="none";    
  world.style.display="none";
  politics.style.display="none";
  magazine.style.display="none";
  technology.style.display="none"
  science.style.display="none";
  sports.style.display="none"
  arts.style.display="none";
  fashion.style.display="none"
  food.style.display="none"
  travel.style.display="none"
  nav_travel.classList.remove("active")
 nav_health.classList.add("active")
 nav_world.classList.remove("active")
 nav_home.classList.remove("active")
 nav_politics.classList.remove("active")
 nav_magazine.classList.remove("active")
 nav_technology.classList.remove("active")
 nav_science.classList.remove("active")
 nav_sports.classList.remove("active")
 nav_arts.classList.remove("active")
 nav_fashion.classList.remove("active");
 nav_food.classList.remove("active")
})
nav_sports.addEventListener("click",()=>{
  sports.style.display="block";
  home.style.display="none";    
  world.style.display="none";
  politics.style.display="none";
  magazine.style.display="none";
  technology.style.display="none"
  science.style.display="none";
  health.style.display="none"
  arts.style.display="none";
  fashion.style.display="none";
  food.style.display="none"
  travel.style.display="none"
  nav_travel.classList.remove("active")
 nav_sports.classList.add("active")
 nav_world.classList.remove("active")
 nav_home.classList.remove("active")
 nav_politics.classList.remove("active")
 nav_magazine.classList.remove("active")
 nav_technology.classList.remove("active")
 nav_science.classList.remove("active")
 nav_health.classList.remove("active")
 nav_arts.classList.remove("active")
 nav_fashion.classList.remove("active");
 nav_food.classList.remove("active")

})
nav_arts.addEventListener("click",()=>{
  arts.style.display="block";
  sports.style.display="none";
    home.style.display="none";    
    world.style.display="none";
    politics.style.display="none";
    magazine.style.display="none";
    technology.style.display="none"
    science.style.display="none";
    health.style.display="none"
    fashion.style.display="none"
    food.style.display="none"

    nav_arts.classList.add("active")
    travel.style.display="none"
    nav_travel.classList.remove("active")
   nav_health.classList.remove("active")
   nav_world.classList.remove("active")
   nav_home.classList.remove("active")
   nav_politics.classList.remove("active")
   nav_magazine.classList.remove("active")
   nav_technology.classList.remove("active")
   nav_science.classList.remove("active")
   nav_health.classList.remove("active")
   nav_fashion.classList.remove("active");
   nav_food.classList.remove("active")
   nav_sports.classList.remove("active")


  })
  nav_fashion.addEventListener("click",()=>{
    fashion.style.display="block";
    arts.style.display="none";
    sports.style.display="none";
      home.style.display="none";    
      world.style.display="none";
      politics.style.display="none";
      magazine.style.display="none";
      technology.style.display="none"
      science.style.display="none";
      health.style.display="none"
      food.style.display="none"
      travel.style.display="none"
      nav_travel.classList.remove("active")
      nav_fashion.classList.add("active")
      nav_arts.classList.remove("active")
     nav_health.classList.remove("active")
     nav_world.classList.remove("active")
     nav_home.classList.remove("active")
     nav_politics.classList.remove("active")
     nav_magazine.classList.remove("active")
     nav_technology.classList.remove("active")
     nav_science.classList.remove("active")
     nav_health.classList.remove("active")
     nav_food.classList.remove("active")

  
    })
  
    nav_food.addEventListener("click",()=>{
      food.style.display="block"
      fashion.style.display="none";
      arts.style.display="none";
      sports.style.display="none";
        home.style.display="none";    
        world.style.display="none";
        politics.style.display="none";
        magazine.style.display="none";
        technology.style.display="none"
        science.style.display="none";
        health.style.display="none"
        travel.style.display="none"
        nav_travel.classList.remove("active")
        nav_food.classList.add("active")
        nav_fashion.classList.remove("active")
        nav_arts.classList.remove("active")
       nav_health.classList.remove("active")
       nav_world.classList.remove("active")
       nav_home.classList.remove("active")
       nav_politics.classList.remove("active")
       nav_magazine.classList.remove("active")
       nav_technology.classList.remove("active")
       nav_science.classList.remove("active")
       nav_health.classList.remove("active")
  
    
      })
      nav_travel.addEventListener("click",()=>{
        food.style.display="none"
        fashion.style.display="none";
        arts.style.display="none";
        sports.style.display="none";
          home.style.display="none";    
          world.style.display="none";
          politics.style.display="none";
          magazine.style.display="none";
          technology.style.display="none"
          science.style.display="none";
          health.style.display="none"
          travel.style.display="block"
          nav_travel.classList.add("active")
          nav_food.classList.remove("active")
          nav_fashion.classList.remove("active")
          nav_arts.classList.remove("active")
         nav_health.classList.remove("active")
         nav_world.classList.remove("active")
         nav_home.classList.remove("active")
         nav_politics.classList.remove("active")
         nav_magazine.classList.remove("active")
         nav_technology.classList.remove("active")
         nav_science.classList.remove("active")
         nav_health.classList.remove("active")
         nav_sports.classList.remove("active")
    
      
        })







fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      console.log(val);
    val.forEach(element => {
        sethomevalue(element);
    });
   }).catch(err =>{
    console.log(err);
   });

  //  console.log(allval);
   



   function sethomevalue(value){
    const homw_div = document.createElement("div");
    homw_div.setAttribute("class","container");
    homw_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          
          <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
          <p class="card-text">${value.byline}</p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
      home.appendChild(homw_div);
   }


// end home





fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data); 
      let val = data.results;
      // console.log(val);
    val.forEach(element => {
      
      // console.log(element);
        setworldvalue(element);
      
    });
   }).catch(err =>{
    console.log(err);
   });

   


   function setworldvalue(value){
    const world_div = document.createElement("div");
    world_div.setAttribute("class","container");
  
    world_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          
          <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
          <p class="card-text">${value.byline}</p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
      world.appendChild(world_div);
   }


// end world

fetch('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      // console.log(val);
    val.forEach(element => {
      
      // console.log(element);
        setpoliticsvalue(element);
      
    });
   }).catch(err =>{
    console.log(err);
   });

   


   function setpoliticsvalue(value){
    const politics_div = document.createElement("div");
    politics_div.setAttribute("class","container");
  
    politics_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          
          <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
          <p class="card-text">${value.byline}</p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
      politics.appendChild(politics_div);
   }
  //  end politics

  // fetch('https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  // .then((response) => response.json())
  // .then((data) => {
  //   // console.log(data);
  //     let val = data.results;
  //     // console.log(val);
  //   val.forEach(element => {
      
  //     // console.log(element);
  //     setmagazinevalue(element);
      
  //   });
  //  }).catch(err =>{
  //   console.log(err);
  //  });

   
  //  function setmagazinevalue(value){
  //   const magazine_div = document.createElement("div");
  //   magazine_div.setAttribute("class","container");
  
  //   magazine_div.innerHTML=`  
  //   <div class=" container p-2" style=" max-width: 900px;">
  //   <div class="row g-0">
  //     <div class="col-md-8">
  //       <div class="card-body">
  //         <h5 class="card-title">${value.title}</h5>
  //         <h6 class="card-title">${value.item_type}</h6>
  //         <p class="card-text">${value.abstract}</p>
          
  //         <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
  //         <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
  //         <p class="card-text"><small class="text-muted">${value.section}</small></p>
  //         <p class="card-text">${value.byline}</p>
  //       </div>
  //     </div>
  //   </div>
  //  </div>`
  //   magazine.appendChild(magazine_div);   
  // }
  // end magazine 

  fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      // console.log(val);
    val.forEach(element => {
      
      // console.log(element);
        settechnologyvalue(element);
      
    });
   }).catch(err =>{
    console.log(err);
   });

   


   function settechnologyvalue(value){
    const technology_div = document.createElement("div");
    technology_div.setAttribute("class","container");
  
    technology_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          
          <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
          <p class="card-text">${value.byline}</p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
   technology.appendChild(technology_div);
   }

  //  end technology

  fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      
      val.forEach(element => {
      
        // console.log(element);
        setsciencevalue(element);
      
      });
   }).catch(err =>{
    console.log(err);
   });

   


   function setsciencevalue(value){
    const science_div = document.createElement("div");
    science_div.setAttribute("class","container");
  
    science_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
   science.appendChild(science_div);
   }
  //  end science


  fetch('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      // console.log(val);
    val.forEach(element => {
      
      // console.log(element);
        sethealthvalue(element);
      
    });
   }).catch(err =>{
    console.log(err);
   });

   


   function sethealthvalue(value){
    const health_div = document.createElement("div");
    health_div.setAttribute("class","container");
  
    health_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
        </div>
      </div>
    </div>
   </div>`
   health.appendChild(health_div);
   }
  //  end health 





  fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      // console.log(val);
    val.forEach(element => {
      
      // console.log(element);
        setsportsvalue(element);
      
    });
   }).catch(err =>{
    console.log(err);
   });

   


   function setsportsvalue(value){
    const sports_div = document.createElement("div");
    sports_div.setAttribute("class","container");
  
    sports_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          
          <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
          <p class="card-text">${value.byline}</p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
   sports.appendChild(sports_div);
   }
  //  end sports


  

  fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      // console.log(val);
    val.forEach(element => {
      
      // console.log(element);
        setartsvalue(element);
      
    });
   }).catch(err =>{
    console.log(err);
   });

   


   function setartsvalue(value){
    const arts_div = document.createElement("div");
    arts_div.setAttribute("class","container");
  
    arts_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          
          <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
          <p class="card-text">${value.byline}</p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
   arts.appendChild(arts_div);
   }


  //  end arts

  
  fetch('https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      // console.log(val);
    val.forEach(element => {
      
      // console.log(element);
        setfashionvalue(element);
      
    });
   }).catch(err =>{
    console.log(err);
   });

   


   function setfashionvalue(value){
    const fashion_div = document.createElement("div");
    fashion_div.setAttribute("class","container");
  
    fashion_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          
          <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
          <p class="card-text">${value.byline}</p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
   fashion.appendChild(fashion_div);
   }

  //  end fashion

    
  fetch('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      // console.log(val);
    val.forEach(element => {
      
      // console.log(element);
        setfoodvalue(element);
      
    });
   }).catch(err =>{
    console.log(err);
   });

   


   function setfoodvalue(value){
    const food_div = document.createElement("div");
    food_div.setAttribute("class","container");
  
    food_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          
          <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
          <p class="card-text">${value.byline}</p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
   food.appendChild(food_div);
   }

  //  end travel

      
  fetch('https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=Ycj0fSrA78dzU1YcIf4du2CwLO7iKtAy')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      let val = data.results;
      console.log(val);
    val.forEach(element => {
      
      // console.log(element);
        settravelvalue(element);
      
    });
   }).catch(err =>{
    console.log(err);
   });

   


   function settravelvalue(value){
    const travel_div = document.createElement("div");
    travel_div.setAttribute("class","container");
  
    travel_div.innerHTML=`  
    <div class=" container p-2" style=" max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <h6 class="card-title">${value.item_type}</h6>
          <p class="card-text">${value.abstract}</p>
          
          <p class="card-text"> <a  class="card-text" href="${value.short_url}">continuous reading</a></p>
         
          <p class="card-text"><small class="text-muted">${value.created_date}</small></p>
          <p class="card-text"><small class="text-muted">${value.section}</small></p>
          <p class="card-text">${value.byline}</p>
        </div>
      </div>
     <div class="col-md-4">
          <img src="${value.multimedia[0].url}" class="img-fluid rounded-start" alt="..." style="width:300px; height:200px;">
       </div>
    </div>
   </div>`
   travel.appendChild(travel_div);
   }