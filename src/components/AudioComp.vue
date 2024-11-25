<template>
  <div class="audio-player">
    <div class="background">
      <img :src="currentSong.cover" id="bg-img" />
    </div>

    <div class="container">
      <div class="player-img">
        <img :src="currentSong.cover" class="active" id="cover" />
      </div>

      <h2 id="music-title">{{ currentSong.displayName }}</h2>
      <h3 id="music-artist">{{ currentSong.artist }}</h3>

      <div class="player-progress" @click="setProgressBar" ref="playerProgress">
        <div
          class="progress"
          :style="{ width: progressPercent + '%' }"
          ref="progress"
        ></div>
        <div class="music-duration">
          <span>{{ formatTime(currentTime) }}</span>
          <span>{{ formatTime(duration) }}</span>
        </div>
      </div>

      <div class="player-controls">
        <font-awesome-icon
          :icon="['fas', 'backward']"
          title="Previous"
          @click="changeMusic(-1)"
        />
        <font-awesome-icon
          :icon="['fas', isPlaying ? 'pause' : 'play']"
          class="play-button"
          title="Play"
          @click="togglePlay"
        />
        <font-awesome-icon
          :icon="['fas', 'forward']"
          title="Next"
          @click="changeMusic(1)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Add all solid icons to the library
library.add(fas);

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      music: new Audio(),
      songs: [
        {
          path: require("../assets/audio/1.mp3"),
          displayName: "The Charmer's Call",
          cover: require("../assets/audio/1.jpg"),
          artist: "Hanu Dixit",
        },
        {
          path: require("../assets/audio/2.mp3"),
          displayName: "You Will Never See Me Coming",
          cover: require("../assets/audio/2.jpg"),
          artist: "NEFFEX",
        },
        {
          path: require("../assets/audio/3.mp3"),
          displayName: "Intellect",
          cover: require("../assets/audio/3.jpg"),
          artist: "Yung Logos",
        },
      ],
      musicIndex: 0,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    };
  },
  computed: {
    currentSong() {
      return this.songs[this.musicIndex];
    },
    progressPercent() {
      return (this.currentTime / this.duration) * 100;
    },
  },
  mounted() {
    this.loadMusic(this.musicIndex);

    this.music.addEventListener("timeupdate", this.updateProgressBar);
    this.music.addEventListener("ended", () => this.changeMusic(1));
  },
  beforeUnmount() {
    this.music.removeEventListener("timeupdate", this.updateProgressBar);
    this.music.removeEventListener("ended", () => this.changeMusic(1));
  },
  methods: {
    togglePlay() {
      this.isPlaying ? this.pauseMusic() : this.playMusic();
    },
    playMusic() {
      this.isPlaying = true;
      this.music.play();
    },
    pauseMusic() {
      this.isPlaying = false;
      this.music.pause();
    },
    loadMusic(index) {
      const song = this.songs[index];
      this.music.src = song.path;
      this.musicIndex = index;
      this.music.load();
      this.updateProgressBar();
      this.playMusic();
    },
    changeMusic(direction) {
      this.musicIndex =
        (this.musicIndex + direction + this.songs.length) % this.songs.length;
      this.loadMusic(this.musicIndex);
    },
    updateProgressBar() {
      this.currentTime = this.music.currentTime;
      this.duration = this.music.duration;
    },
    setProgressBar(e) {
      const width = this.$refs.playerProgress.clientWidth;
      const clickX = e.offsetX;
      this.music.currentTime = (clickX / width) * this.music.duration;
    },
    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      return `${minutes}:${seconds}`;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

html {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.audio-player {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

.background {
  position: fixed;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: -1;
}

.background img {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 50%;
  min-height: 50%;
  filter: blur(15px);
  -webkit-filter: blur(50px);
  transform: scale(1.1);
}

.container {
  background-color: #e7e7e7;
  height: 500px;
  width: 400px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: translateY(50px);
}

.container:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
}

.player-img {
  width: 300px;
  height: 300px;
  position: relative;
}

.player-img img {
  object-fit: cover;
  border-radius: 20px;
  height: 0;
  width: 0;
  opacity: 0;
  box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.5);
  transform: translateY(-50px);
}

.player-img:hover img {
  box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.8);
}

.player-img img.active {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  opacity: 1;
}

h2 {
  font-size: 25px;
  text-align: center;
  font-weight: 500;
  margin: 10px 0 0;
}

h3 {
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  margin: 10px 0 0;
}

.player-progress {
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px 20px 35px;
  height: 6px;
  width: 90%;
  box-shadow: #212121;
}

.progress {
  background-color: #212121;
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}

.music-duration {
  position: relative;
  top: -25px;
  display: flex;
  justify-content: space-between;
}

.player-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.play-button {
  font-size: 44px;
  margin: 0 20px;
}

.fa-solid {
  font-size: 30px;
  color: #666;
  margin-right: 30px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
}

.fa-solid:hover {
  filter: brightness(40%);
}
</style>
