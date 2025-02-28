function fetchMovies() {
    const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=9b7c3ede447b14c5e0e9d33a137ddac9&language=vi-VN';
    fetch(API_URL)
      .then(response => response.json())
      .then(data => { // thay vì console.log() thì mình sẽ viết function để hiển thị lên html 
        displayMovies(data.results);
      });
  }
  
  function displayMovies(moviesList) {
    const movieContainer = document.getElementById("movies"); // lấy div có id là movies
    movieContainer.innerHTML = ''; // gán rỗng vào thẻ div đó 
    moviesList.forEach(movie => { // duyệt danh sách phim
      const movieElement = document.createElement("div"); // tạo thêm một thẻ div
      movieElement.classList.add("movie"); // tạo class cho div mới tạo, class tên là movie 
      // class tên là movie sẽ thêm các thẻ sau
      movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
        <div>
          <h3>${movie.title}</h3>
          <p>${movie.overview.substring(0, 100)}...</p>
          <button onclick="viewMovie(${movie.id})">Xem chi tiết</button>
        </div>
      `;
      movieContainer.appendChild(movieElement);
    });
  }


  function viewMovie(overview) {
    alert(`XEM GIỚI THIỆU NÈ: ${overview}`);
  }

  document.addEventListener("DOMContentLoaded", fetchMovies);
 