let playlist = [
  {
    title: "Nenjukkul Peidhidum",
    artist: "Harris Jayaraj",
    src: "nenjukkul-peidhidum-by-dinesh-babu-407735.mp3",
    img: "./img1.jpg",
    bg: "#ffe0ff"
  },
  {
    title: "Kanmoodi Thirakumpodhu",
    artist: "AR Rahman",
    src: "kanmoodi-thirakkumpothu-bgm-by-dinu-infinity-219007.mp3",
    img: "./image2.jpg",
    bg: "#c2e9fb"
  },
  {
    title: "Love Bgm",
    artist: "GV Prakash",
    src: "love_bgm_no_copyright_music-113843.mp3",
    img: "./image3.jpg",
    bg: "#ffd6a5"
  }
];

let index = 0;
let audio = document.getElementById("audio");
let img = document.querySelector(".song-img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let playerBox = document.querySelector(".music-player");
let progress = document.getElementById("progress");
let playBtn = document.getElementById("playbtn");

function loadSong(i) {
  let song = playlist[i];
  audio.src = song.src;
  img.src = song.img;
  title.innerText = song.title;
  artist.innerText = song.artist;
  playerBox.style.background = song.bg;

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