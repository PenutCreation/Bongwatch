const movies = [
 { 
        name: "A Minecraft Movie", 
        page: "asset/movies/PAGEMOVIE_a-minecraft-movie-387383873.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SqqxtPAydhmhZ3neF0FSaok-z3jjPGJCCkT7y2ljZr6-5GEmxSbVQFtf&amp;s=10",
        genre: "other" 
    },
    { 
        name: "The Amazing Spider-man 2", 
        page: "asset/movies/PAGEMOVIE_the-amazing-spider-man-2-48473.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsqzdj_a6ur2jeB3i3_Za0pz0UVBrfxKtPg&amp;s",
        genre: "Comedy" 
    },
    { 
        name: "The Beekeeper", 
        page: "asset/movies/PAGEMOVIE_the-beekeeper-1630856389.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-beekeeper-1630856389.jpg",
        genre: "Action" 
    },
    { 
        name: "Spider-man:Across The Spider-verse", 
        page: "asset/movies/PAGEMOVIE_spider-man-across-the-spider-verse.html",
        image:"https://img.cdno.my.id/thumb/w_200/h_300/the-truman-show-2432.jpg",
        genre: "Adventure" 
    },
    { 
        name: "Aquaman", 
        page: "asset/movies/PAGEMOVIE_Aquaman-383748.html", 
        image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Aquaman_%28film%29_poster.jpg",
        genre: "Action" 
    },
  { 
        name: "Wallace & Gromit: Vengeance Most Fowl", 
        page: "asset/movies/PAGEMOVIE_wallaceh.html", 
        image: "https://img.cdno.my.id/thumb/w_156/h_234/wallace--gromit-vengeance-most-fowl-1630858672.webp",
        genre: "other" 
    },
    { 
        name: "Attack on Titan: THE LAST ATTACK", 
        page: "asset/movies/PAGEMOVIE_attack-on-titan-the-last-attack.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/attack-on-titan-the-last-attack-1630858643.webp",
        genre: "Action" 
    },
    { 
        name: "Free Guy", 
        page: "asset/movies/PAGEMOVIE_free-guy-1627222751.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/free-guy-1627222751.jpg",
        genre: "Comedy" 
    },
    { 
        name: "Ready Player One", 
        page: "asset/movies/PAGEMOVIE_ready-player-one-24292.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/ready-player-one-24292.jpg",
        genre: "Action" 
    },
    { 
        name: "The Truman Show", 
        page: "asset/movies/PAGEMOVIE_the-truman-show.html",
        image:"https://img.cdno.my.id/thumb/w_200/h_300/the-truman-show-2432.jpg",
        genre: "Adventure" 
    },
    { 
        name: "Almighty Bruce", 
        page: "asset/movies/PAGEMOVIE_bruce-almighty-3960.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/bruce-almighty-3960.jpg",
        genre: "Action" 
    },
    { 
        name: "Transformers One", 
        page: "asset/movies/PAGEMOVIE_transformers-one-1630857630.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-one-1630857630.jpg",
        genre: "Action" 
    },
    { 
        name: "Transformers:The Last Knight", 
        page: "asset/movies/PAGEMOVIE_transformers-the-last-knight-21142.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-the-last-knight-21142.jpg",
        genre: "Action" 
    },
    { 
        name: "Transformers:Rise of The Beasts", 
        page: "asset/movies/PAGEMOVIE_transformers-rise-of-the-beasts-1630855300.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-rise-of-the-beasts-1630855300.jpg",
        genre: "others" 
    },
    { 
        name: "Transformers:Revenge Of The Fallen", 
        page: "asset/movies/PAGEMOVIE_transformers-revenge-of-the-fallen-1707.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-revenge-of-the-fallen-1707.jpg",
        genre: "others" 
    },
    { 
        name: "Transformers:Dark Side Of the Moon", 
        page: "asset/movies/PAGEMOVIE_transformers-dark-of-the-moon.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-dark-of-the-moon-1706.jpg",
        genre: "action" 
    },
    { 
        name: "Deadpool", 
        page: "asset/movies/PAGEMOVIE_deadpool-2883.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/deadpool-9802.jpg",
        genre: "action" 
    },
      { 
        name: "Bring Them Down", 
        page: "asset/movies/PAGEMOVIE_bring-them-down.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/bring-them-down-1630858433.webp",
        genre: "other" 
    },
    { 
        name: "A Quiet Place:Day One", 
        page: "asset/movies/PAGEMOVIE_Ga-quiet-place-day-one.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/a-quiet-place-day-one-1630857226.jpg",
        genre: "Action" 
    },
    { 
        name: "A Quiet Place II", 
        page: "asset/movies/PAGEMOVIE_a-quiet-place-part-ii.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/a-quiet-place-part-ii-1621869026.jpg",
        genre: "Comedy" 
    },
    { 
        name: "World War Z", 
        page: "asset/movies/PAGEMOVIE_worldwar-z.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJoksMZJA7xz6fRmAD7KIdp5NoUX18eg5Ku3xcSFkVLbhVfjyRK81ZF8&amp;s=10",
        genre: "Action" 
    },
    { 
        name: "Fortitude: Forging the Trillion Dollar Space Economy", 
        page: "asset/movies/PAGEMOVIE_fortitude-forging-the-trillion-dollar-space-economy.html",
        image:"https://img.cdno.my.id/thumb/w_312/h_468/fortitude-forging-the-trillion-dollar-space-economy-1630858727.jpg",
        genre: "Adventure" 
    },
    { 
        name: "A Knights War", 
        page: "asset/movies/PAGEMOVIE_a-knights-war.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/a-knight-s-war-1630858719.webp",
        genre: "Action" 
    },
    { 
        name: "Gladiator II", 
        page: "asset/movies/PAGEMOVIE_gladiatorII.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/gladiator-ii-1630857926.jpg",
        genre: "Action" 
    },
    { 
        name: "Rampage(2018)", 
        page: "asset/movies/PAGEMOVIE_rampage.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/rampage-24533.jpg",
        genre: "Action" 
    },
    { 
        name: "Inception", 
        page: "asset/movies/PAGEMOVIE_Inception.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxi_rRdrGA5qw7S6d5S2bTH7RAIT14BrfLydn7bnU15790t6enBvYs5Y&amp;s=10",
        genre: "Sci-Fi" 
    },
    { 
        name: "Godzilla", 
        page: "asset/movies/PAGEMOVIE_Godzilla.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-GJ1keH-r6WO1o_2zqOBfPhnDlkZ0KvdRGZABcoKJBv-APuCAIeGn0xE&amp;s=10",
        genre: "Action" 
    },
    { 
        name: "The Red One", 
        page: "asset/movies/PAGEMOVIE_redone.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/red-one-1630857912.jpg",
        genre: "Comedy" 
    },
    { 
        name: "Venom: The Last Dance", 
        page: "asset/movies/PAGEMOVIE_thelastdance.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/venom-the-last-dance-1630857833.jpg",
        genre: "Action" 
    },
    { 
        name: "Aquaman:The Lost Kingdom", 
        page: "asset/movies/PAGEMOVIE_aquamanlostking.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt81k9_cJuHayL7zXSMdsMeWvPU1qS6rEaUjO1P7j7ke57C-DJQrsN2kE&amp;s=10",
        genre: "Adventure" 
    },
    { 
        name: "The Brutalist", 
        page: "asset/movies/PAGEMOVIE_brutalist.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/the-brutalist-1630858152.jpg",
        genre: "Action" 
    },
    { 
        name: "Gladiator II", 
        page: "asset/movies/PAGEMOVIE_gladiatorII.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/gladiator-ii-1630857926.jpg",
        genre: "Action" 
    },
    { 
        name: "Conclave", 
        page: "asset/movies/PAGEMOVIE_conclave.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/conclave-1630858009.jpg",
        genre: "Action" 
    },
    { 
        name: "Heretic", 
        page: "asset/movies/PAGEMOVIE_heretic.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/heretic-1630857913.jpg",
        genre: "others" 
    },
    { 
        name: "Kraven The Hunter", 
        page: "asset/movies/PAGEMOVIE_kraven-the-hunter.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/kraven-the-hunter-1630858127.jpg",
        genre: "others" 
    },
    { 
        name: "Spider-man", 
        page: "asset/movies/PAGEMOVIE_Spider-man.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-3337.jpg",
        genre: "action" 
    },
    { 
        name: "Renner", 
        page: "asset/movies/PAGEMOVIE_Renner.html", 
        image: "https://img.cdno.my.id/thumb/w_156/h_234/renner-1630858715.webp",
        genre: "action" 
    },
    { 
        name: "Spiderman:Home Coming", 
        page: "asset/movies/PAGEMOVIE_spiderman-homecoming.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-homecoming-21248.jpg",
        genre: "action" 
    },
    { 
        name: "Spiderman 3", 
        page: "asset/movies/PAGEMOVIE_spiderman-3.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-3-3339.jpg",
        genre: "action" 
    },
    { 
        name: "Spiderman 2 ", 
        page: "asset/movies/PAGEMOVIE_spiderman-2.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-2-3338.jpg",
        genre: "action" 
    },
    { 
        name: "Spider-man:Into The Spider-verse ", 
        page: "asset/movies/PAGEMOVIE_spider-man-into-the-spider-verse.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-into-the-spider-verse-27208.jpg",
        genre: "action" 
    },
   { 
        name: "Dog man", 
        page: "asset/movies/PAGEMOVIE_Dogman.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/dog-man-1630858469.webp",
        genre: "Adventure" 
    },
   { 
        name: "The Order", 
        page: "asset/movies/PAGEMOVIE_The-order.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/the-order-1630858158.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla(1998)", 
        page: "asset/movies/PAGEMOVIE_godzilla-1998.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-1998-6990.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla Minus One", 
        page: "asset/movies/PAGEMOVIE_godzilla-minus-one.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-minus-one-1630856261.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla Vs Kong", 
        page: "asset/movies/PAGEMOVIE_godzilla-vs-kong.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-vs-kong-12101145.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla:The King Of the Monsters", 
        page: "asset/movies/PAGEMOVIE_godzilla-the-king-of-the-monster.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-king-of-the-monsters-28717.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla x Kong:The New Empire", 
        page: "asset/movies/PAGEMOVIE_the-new-empire.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-x-kong-the-new-empire-1630856838.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Sins Of The Night", 
        page: "asset/movies/PAGEMOVIE_sin-of-the-night.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/sins-of-the-night-1630858718.webp",
        genre: "Adventure" 
    },
   { 
        name: "Ultra Red", 
        page: "asset/movies/PAGEMOVIE_ultra-red.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/ultra-red-1630858710.webp",
        genre: "Adventure" 
    },
   { 
        name: "The Life List", 
        page: "asset/movies/PAGEMOVIE_thelifelist.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/the-life-list-1630858717.webp",
        genre: "Adventure" 
    },
   { 
        name: "The Electric State", 
        page: "asset/movies/PAGEMOVIE_electricstste.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLoV2gU72HnqDkHGFOqNx2a4w6dryyBU6ftPAZNdEu7NwB2EiN9EigTpW&amp;s=10",
        genre: "Adventure" 
    }
];

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Function to display movies
function displayMovies(movieList, elementId) {
    let container = document.getElementById(elementId);
    container.innerHTML = "";

    movieList.forEach(movie => {;
        let movieItem = document.createElement("div");
        movieItem.classList.add("movie");

        movieItem.innerHTML = `
            <img src='${movie.image}'>
            <h3>${movie.name}</h3>
            <button class="rent-btn"
            onclick="location.href='${movie.page}'">Watch</button>

        `;

        container.appendChild(movieItem);
    });
}

// Function to load movies
function loadMovies() {
    let shuffled = shuffleArray([...movies]);
    let recommendedMovies = shuffled.slice(0, 4);
    let otherMovies = shuffled.slice(4, 34); // Start after recommended ones

    displayMovies(recommendedMovies, "recommended-list");
    displayMovies(otherMovies, "other-movies-list");
}


// Toggle favorite status
function toggleFavorite(movieName, moviePage, movieImage) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let index = favorites.findIndex(movie => movie.name === movieName);

    if (index !== -1) {
        favorites.splice(index, 1); // Remove from favorites
    } else {
        favorites.push({ name: movieName, page: moviePage, image: movieImage }); // Add to favorites
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadMovies(); // Refresh the movie list to update UI
}

// Check if a movie is favorited

// Search function
function searchMovies() {
    let search = document.getElementById("search").value.toLowerCase();
    let movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        let title = movie.querySelector("h3").innerText.toLowerCase();
        movie.style.display = title.includes(search) ? "block" : "none";
    });
}


function generateGenreOptions() {
    let genreFilter = document.getElementById("genreFilter");
    let genres = [...new Set(movies.map(movie => movie.genre))]; // Get unique genres

    genreFilter.innerHTML = `<option value="">All</option>`; // Default option
    genres.forEach(genre => {
        let option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

function filterMovies() {
    let selectedGenre = document.getElementById("genreFilter").value.toLowerCase();
    let movieItems = document.querySelectorAll("#movie");

    movieItems.forEach(movie => {
        let movieName = movie.querySelector("h3").innerText;
        let movieData = movies.find(m => m.name === movieName);

        if (movieData) {
            movie.style.display = (selectedGenre === "" || movieData.genre.toLowerCase() === selectedGenre) ? "block" : "none";
        }
    });
}


window.onload = function() {
    generateGenreOptions();
    loadMovies();
};




// Load movies when the page opens
window.onload = loadMovies;
