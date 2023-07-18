let leftBtn = document.getElementsByClassName('bi-chevron-left')[0];
let rightBtn = document.getElementsByClassName('bi-chevron-right')[0];
let cardsContainer = document.getElementsByClassName('cards')[0];
let searchContainer = document.getElementsByClassName('search')[0];

leftBtn.addEventListener('click', () => {
  cardsContainer.scrollLeft -= 140;
});

rightBtn.addEventListener('click', () => {
  cardsContainer.scrollLeft += 140;
});

let jsonUrl = "movie.json";

fetch(jsonUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      let { name, imdb, date, sposter, bposter, genre, url } = movie;

      // Create movie card for main section
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
          <img src="${bposter}" alt="">
          <div class="cont">
            <h4>${name}</h4>
            <div class="sub">
              <p>${genre}, ${date}</p>
              <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
            </div>  
          </div>
        </div>
      `;
      cardsContainer.appendChild(card);
    });

    // Update the content of the first movie in the main section
    document.getElementById('title').innerText = data[0].name;
    document.getElementById('gen').innerText = data[0].genre;
    document.getElementById('date').innerText = data[0].date;
    document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i>${data[0].imdb}`;

    // Create search cards
    data.forEach((movie) => {
      let { name, imdb, date, sposter, genre, url } = movie;

      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML = `
        <img src="${sposter}" alt="">
        <div class="cont">
          <h3>${name}</h3>
          <p>${genre}, ${date}, <span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</p>
        </div>
      `;
      searchContainer.appendChild(card);
    });
    // search filter
    searchInput.addEventListener('keyup', () => {
      let filter = searchInput.value.toUpperCase();
      let cards = searchContainer.getElementsByTagName('a');
    
      for (let index = 0; index < cards.length; index++) {
        let card = cards[index];
        let b = card.getElementsByClassName('cont')[0];
        let TextValue = b.textContent || b.innerText;
    
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
          card.style.display = 'flex'; // Show the search card
          searchContainer.style.visibility = 'visible'; // Show the search container
          searchContainer.style.opacity = 1;
        } else {
          card.style.display = 'none'; // Hide the search card
        }
    
        if (searchInput.value == 0) {
          searchContainer.style.visibility = 'hidden'; // Hide the search container
          searchContainer.style.opacity = 0;
        }
      }
    })
    let video=document.getElementsByTagName('video')[0];
    let play=document.getElementById('play');
    play.addEventListener('click',()=>{
      if(video.paused){
        video.play();
        play.innerHTML=`Play <i class="bi bi-pause-fill"></i>`
      }
      else{
        video.pause();
        play.innerHTML=`Watch <i class="bi bi-play-fill"></i>`
        
      }
    })
   let series=document.getElementById('series');
   
   series.addEventListener('click',()=>{
    cardsContainer.innerHTML='';
    let series_array = data.filter(ele=>{
      return ele.type === "series";
    }) ;
    series_array.forEach((movie) => {
      let { name, imdb, date, sposter, bposter, genre, url } = movie;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
          <img src="${bposter}" alt="">
          <div class="cont">
            <h4>${name}</h4>
            <div class="sub">
              <p>${genre}, ${date}</p>
              <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
            </div>  
          </div>
        </div>
      `;
      cardsContainer.appendChild(card);
    });
   })
   let movies=document.getElementById('movies');
   movies.addEventListener('click',()=>{
    cardsContainer.innerHTML='';
    let movies_array = data.filter(ele=>{
      return ele.type === "movie";
    }) ;
    movies_array.forEach((movie) => {
      let { name, imdb, date, sposter, bposter, genre, url } = movie;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
          <img src="${bposter}" alt="">
          <div class="cont">
            <h4>${name}</h4>
            <div class="sub">
              <p>${genre}, ${date}</p>
              <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
            </div>  
          </div>
        </div>
      `;
      cardsContainer.appendChild(card);
    });
   })
  });
