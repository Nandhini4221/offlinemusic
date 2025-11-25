let playlist = [
   {
    title: "Nenjukkul Peidhidum",
    artist: "Harris Jayaraj",
    src: "nenjukkul-peidhidum-by-dinesh-babu-407735.mp3",
    img: "./image1.jpg",
    bg: "./pic1.jpg"       
  },
    {
    title: "Piraithedum iraviley",
    artist: "GV Prakash",
    src: "Pirai_Thedum_-_Saindhavi_GVPrakash_Kumar.mp3",
    img: "./image4.jpg",
    bg: "./pic4.jpg"       
  },

     {
    title: "Unakaga Porantheney",
    artist: "Anu Anand",
    src: "Unakaga Poranthene Enathalaga Song.mp3",
    img: "./image7.jpg",
    bg: "./pic7.jpg"       
  },
      {
      title: "Mudhal Nee Mudivum Nee",
    artist: "Sid Sriram",
    src: "Mudhal Nee Mudivum Nee Song Download.mp3",
    img: "./image8.jpg",
    bg: "./pic8.jpg"       
  },
       {
    title: "Kadhalea Kadhalea",
    artist: "Govind Vasantha",
    src: "96 Movie Theme.mp3",
    img: "./image6.jpg",
    bg: "./pic6.jpg"       
  },
 

 {
    title: "Minnaley",
    artist: "GV Prakash",
    src: "Hey_Minnale_-_Amaran.mp3",
    img: "./image5.jpg",
    bg: "./pic5.jpg"       
  },
   {
    title: "Kanmoodi Thirakumpodhu",
    artist: "AR Rahman",
    src: "kanmoodi-thirakkumpothu-bgm-by-dinu-infinity-219007.mp3",
    img: "./image2.jpg",
    bg: "./pic2.jpg"        
  },
  {
    title: "Love Bgm",
    artist: "GV Prakash",
    src: "love_bgm_no_copyright_music-113843.mp3",
    img: "./image3.jpg",
    bg: "./pic3.webp"       
  }, 
];

let index = 0;
let audio = document.getElementById("audio");
let img = document.querySelector(".song-img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let progress = document.getElementById("progress");
let playBtn = document.getElementById("playbtn");

function loadSong(i) {
  let song = playlist[i];
  audio.src = song.src;
  img.src = song.img;
  title.innerText = song.title;
  artist.innerText = song.artist;

  
  document.body.style.backgroundImage = `url('${song.bg}')`;

  audio.play();
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;

  audio.onloadedmetadata = function () {
    progress.max = audio.duration;
  };
}

audio.ontimeupdate = function () {
  progress.value = audio.currentTime;
};

progress.onchange = function () {
  audio.currentTime = progress.value;
};

function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    audio.pause();
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
}

function nextSong() {
  index++;
  if (index >= playlist.length) index = 0;
  loadSong(index);
}

function prevSong() {
  index--;
  if (index < 0) index = playlist.length - 1;
  loadSong(index);
}

audio.onended = function () {
  nextSong();
};

loadSong(index);

