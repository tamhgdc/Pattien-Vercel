//load nhac 
// const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//   optionsContainer.classList.toggle("active");
// });

// optionsList.forEach((o) => {
//   o.addEventListener("click", () => {
//     selected.innerHTML = o.querySelector("label").innerHTML;
//     optionsContainer.classList.remove("active");

//     var valueSelect = o.querySelector("label").htmlFor;
//     var musicSelected = document.getElementById(valueSelect);
//     console.log(musicSelected.value);
//     var audio = document.getElementById("myAudio");
//     audio.src = musicSelected.value;
//     audio.load();
//   });
// });

// count down timer and action

var totalTime = 60 * 30;
var secondsRemaining = totalTime;
var locatX = -1;
var locatY = -1;
var hasFocus = true;


//tao moi 1 tien trinh
var refreshCounterTime = setInterval(function () {
  timerFunc(hasFocus);
}, 100);

//hien thi thoi gian con lai
function timerFunc(bool) {
  var timer = document.getElementById("timer");
  var hours = Math.floor(secondsRemaining / 60 / 60);
  var minutes = Math.floor((secondsRemaining - hours * 60 * 60) / 60);
  var seconds = secondsRemaining - hours * 60 * 60 - minutes * 60;
  var fixedMin = minutes.toFixed();
  if (fixedMin == 60) {
    fixedMin = "0";
    hours = hours + 1;
  }
  if (fixedMin < 10 && fixedMin >= 0) fixedMin = "0" + fixedMin;

  var fixedSec = seconds.toFixed();
  if (fixedSec == 60) {
    fixedSec = "0";
    minutes = minutes + 1;
  }
  if (fixedSec < 10 && fixedSec >= 0) fixedSec = "0" + fixedSec;

  if (hours == 0) {
    var time = fixedMin + ":" + fixedSec;
  } else {
    var time = hours + ":" + fixedMin + ":" + fixedSec;
  }

  timer.innerHTML = time;
  if (bool) {
    secondsRemaining -= 0.1;
  } else {
    secondsRemaining = totalTime;
  }

  if (secondsRemaining <= 0) {
    secondsRemaining = totalTime;
    showDialog();
    clearInterval(refreshCounterTime);

  }

  //   if (Math.round(secondsRemaining) == (totalTime/2)) {
  //     var gift = (document.getElementById("gift-content1").innerHTML =
  //       '<a href="https://www.google.com/search?q=g%C3%A1i+xinh&rlz=1C1KNTJ_enVN979VN979&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi3xfn78aT2AhU2QfUHHTCmCacQ_AUoAXoECAEQAw&biw=1745&bih=890&dpr=1.1">Bộ sưu tập ảnh gái xinh</a>');
  //   }

  //   if (Math.round(secondsRemaining) == (totalTime/4)) {
  //     var gift = (document.getElementById("gift-content2").innerHTML =
  //       '<a href="https://www.google.com/search?q=g%C3%A1i+xinh+ph%E1%BA%A7n+2&tbm=isch&ved=2ahUKEwjM3Nz88aT2AhUITfUHHTqEA40Q2-cCegQIABAA&oq=g%C3%A1i+xinh+ph%E1%BA%A7n+2&gs_lcp=CgNpbWcQAzoICAAQgAQQsQM6BAgAEAM6CwgAEIAEELEDEIMBOgUIABCABDoECAAQQzoKCAAQsQMQgwEQQzoHCAAQsQMQQzoGCAAQBRAeOgYIABAIEB5Q8AhYshFg0xJoA3AAeACAAXiIAcIIkgEDOC4zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=bA4eYsz2Hoia1e8PuoiO6Ag&bih=890&biw=1745&rlz=1C1KNTJ_enVN979VN979">Bộ sưu tập ảnh gái xinh part 2</a>');
  //   }

  //   if (Math.round(secondsRemaining) == 0) {
  //     var gift = (document.getElementById("gift-content3").innerHTML =
  //       '<a href="https://www.google.com/search?q=tr%E1%BA%A7n+%C4%91%E1%BB%A9c+bo+kh%E1%BB%8Fa+th%C3%A2n&tbm=isch&ved=2ahUKEwi8tLuS8qT2AhVSEXAKHeMsBK4Q2-cCegQIABAA&oq=tr%E1%BA%A7n+%C4%91%E1%BB%A9c+bo+kh%E1%BB%8Fa+th%C3%A2n&gs_lcp=CgNpbWcQAzoECAAQAzoFCAAQgAQ6CAgAELEDEIMBOggIABCABBCxAzoECAAQEzoICAAQBRAeEBM6BAgAEEM6CggAELEDEIMBEEM6BwgAELEDEEM6CwgAEIAEELEDEIMBOgQIABAeOgYIABAFEB46BggAEAgQHjoECAAQGFCqFFjOMWDkMmgPcAB4BIAB6wGIAa8dkgEHMTkuMTYuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=mg4eYrz_BdKiwAPj2ZDwCg&bih=890&biw=1745&rlz=1C1KNTJ_enVN979VN979">Bộ sưu tập ảnh gái không xinh nhưng nude =]]</a>');
  //   }
}

//check out khoi man hinh
function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}

addEvent(window, "load", function (e) {
  addEvent(document, "mouseout", function (e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
      if (hasFocus == true) {
        hasFocus = false;
        locatX = -1;
        locatY = -1;
        runtime(hasFocus);

        var gift = (document.getElementById("gift-content1").innerHTML = "");
        var gift = (document.getElementById("gift-content2").innerHTML = "");
        var gift = (document.getElementById("gift-content3").innerHTML = "");

      }
    }
    $(document).ready(function () {
      $(document).mousemove(function (event) {
        if (event.pageX != -1 || event.pageY != -1) {
          if (hasFocus == false) {
            hasFocus = true;
            locatX = event.pageX;
            locatY = event.pageY;
            // console.log("hasFocus " + hasFocus + locatX + ", " + locatY);
            runtime(hasFocus);
          }
        }
      });
    });
  });
});

//ham chay tien trinh
function runtime(hasFocus) {
  clearInterval(refreshCounterTime);
  refreshCounterTime = setInterval(function () {
    timerFunc(hasFocus);
  }, 100);
  var gift = (document.getElementById("gift-content1").innerHTML = "");
  var gift = (document.getElementById("gift-content2").innerHTML = "");
  var gift = (document.getElementById("gift-content3").innerHTML = "");
}

// thong bao chuc mung
function showDialog() {
  Swal.fire({
    icon: 'Success',
    title: 'Chúc mừng bạn đã hoàn thành thử thách'
  });
}

// timepicker
$(function () {
  $('#datetimepicker3').datetimepicker({
    format: 'HH:mm:ss',
    defaultDate: moment('2015-01-01'),
    useCurrent: 'day',
  }).on('dp.change', function (event) {
    var timepicker = $("#datetimepicker").val();
    var secondConvert = timepicker.split(':');
    var seconds = ((secondConvert[0]) * 60 * 60 + (secondConvert[1]) * 60 + (+secondConvert[2]));
    if (seconds == 0) {
      totalTime = 15;
      secondsRemaining = 15;
    } else {
      totalTime = seconds;
      secondsRemaining = seconds;
    }


    runtime(hasFocus);
  });;

});

  const loadSongsByCategory = async function (e) {
    let songs = []
    songs = await $.getJSON('data_songs.json');
    songs = songs.songs;

    songs_category = songs.filter(song => song.category_name.toLowerCase() === e.getAttribute('data-category').toLowerCase());

    let htmls = songs_category.map((song, index) => {
      return `
      <div class="song ${index === this.currentIndex ? "active" : ""
      }" data-index="${index}">
          <div class="thumb"
              style="background-image: url('${song.image}')">
          </div>
          <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
          </div>
          <div class="option">
              <i class="fas fa-ellipsis-h"></i>
          </div>
      </div>
  `
    })
    $('.playlist').html(htmls.join(''));
  }



$(document).ready(function () {
  var songs_category = []

  const loadCategories = async () => {
    // load data music categories
    let music_categories = await $.getJSON('data_categories.json');

    music_categories = music_categories.categories
    size_column = 1
    current_size_column = 0
    let data_column = []
    music_categories.forEach(category => {
      if (current_size_column !== size_column - 1) {
        data_column.push(category)
        current_size_column += 1
      } else {
        data_column.push(category)
        // reset size per column
        current_size_column = 0
        children = data_column.map(type => {
          return `<a class="" title="${type.title}" href="#playlist" data-category="${type.title}" onclick="loadSongsByCategory(this);">
            <div class="zm-topic-item">
              <div class="zm-card">
                <div class="zm-card-image">
                  <figure class="image bg-image is-48x48"><img
                      src="${type.url_bg_image}" alt="">
                  </figure>
                  <div class="topic-info">
                    <h3 class="title">${type.title}</h3>
                    <div class="thumb-images">` +
            type.thumb_images.map(thumb_image => {
              return `<div class="thumb-item">
                        <figure class="image is-48x48"><img
                            src="${thumb_image}"
                            alt=""></figure>
                      </div>`
            }).join('') +
            `</div>
                  </div>
                </div>
              </div>
            </div>
          </a>`
        }).join('')

        data_column = []

        $("#categories").append('<div class="column mar-b-30 is-fullhd-3 is-widescreen-3 is-desktop-4 is-touch-4 is-tablet-4"><div>' +
          children + '</div></div>')
      }
    })

  }

  loadCategories();

  function updateTime($element, seconds) {
    let sec = seconds % 60;
    seconds -= sec;
    let hours = seconds / 3600 | 0;
    seconds %= 3600
    let min = seconds / 60 | 0;
    const html = (hours > 0) ? `${hours}:${min}:${sec}` : `${min}:${sec}`;
    $element.html(html);
  }

  // const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const PlAYER_STORAGE_KEY = "F8_PLAYER";

  const player = $(".player");
  const cd = $(".cd");
  const heading = $("header h2");
  const cdThumb = $(".cd-thumb");
  const audio = $("#audio");
  const playBtn = $(".btn-toggle-play");
  const progress = $("#progress");
  const prevBtn = $(".btn-prev");
  const nextBtn = $(".btn-next");
  const randomBtn = $(".btn-random");
  const repeatBtn = $(".btn-repeat");
  const playlist = $(".playlist");
  const time_update = $(".time_updatetime");
  const time_duration = $(".time_duration");

  const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: {},
    songs: [],
    setConfig: function (key, value) {
      this.config[key] = value;
      // (2/2) Uncomment the line below to use localStorage
      // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function () {
      const htmls = songs_category.map((song, index) => {
        return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
      }).join('');
      playlist.html(htmls);
    },
    defineProperties: function () {
      Object.defineProperty(this, "currentSong", {
        get: function () {
          return songs_category[this.currentIndex];
        }
      });
    },
    handleEvents: function () {
      const _this = this;
      const cdWidth = cd.offsetWidth;

      // Xử lý CD quay / dừng
      // Handle CD spins / stops
      cdThumb.removeClass('rotate360')

      // Xử lý phóng to / thu nhỏ CD
      // Handles CD enlargement / reduction
      document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const newCdWidth = cdWidth - scrollTop;

        width = newCdWidth > 0 ? newCdWidth + "px" : 0;
        cd.css('width', width);
        cd.css('opacity', newCdWidth / cdWidth);
      };

      // Xử lý khi click play
      // Handle when click play
      playBtn.on('click', function () {
        if (_this.isPlaying) {
          audio.trigger('pause');
        } else {
          audio.trigger('play');
        }
      });

      // Khi song được play
      // When the song is played
      audio.on('play', function () {
        _this.isPlaying = true;
        player.addClass("playing");
        cdThumb.addClass('rotate360');
        // cdThumbAnimate.css("animation-play-state", "running");
      });

      // When the song is pause
      audio.on('pause', function () {
        _this.isPlaying = false;
        player.removeClass("playing");
        cdThumb.removeClass('rotate360');
        // cdThumbAnimate.css("animation-play-state", "pause");
      });

      // Khi tiến độ bài hát thay đổi
      // When the song progress changes
      audio.bind('timeupdate', function () {
        if (this.duration) {
          updateTime(time_update, this.currentTime.toFixed())
          const progressPercent = Math.floor(
            (this.currentTime / this.duration) * 100
          );
          progress.val(progressPercent);
        }
      });

      // Xử lý khi tua song
      // Handling when seek
      progress.on('change', function (e) {
        let _audio = document.getElementById("audio");
        const seekTime = (_audio.duration / 100) * e.target.value;
        _audio.currentTime = seekTime;
      });

      // When next song
      nextBtn.on('click', function () {
        if (_this.isRandom) {
          _this.playRandomSong();
        } else {
          _this.nextSong();
        }
        audio.trigger('play');
        _this.render();
        _this.scrollToActiveSong();
      });

      // Khi prev song
      // When prev song
      prevBtn.on('click', function () {
        if (_this.isRandom) {
          _this.playRandomSong();
        } else {
          _this.prevSong();
        }
        audio.trigger('play');
        _this.render();
        _this.scrollToActiveSong();
      });

      // Xử lý bật / tắt random song
      // Handling on / off random song
      randomBtn.on('click', function (e) {
        _this.isRandom = !_this.isRandom;
        _this.setConfig("isRandom", _this.isRandom);
        randomBtn.toggleClass("active", _this.isRandom);
      });

      // Xử lý lặp lại một song
      // Single-parallel repeat processing
      repeatBtn.on('click', function (e) {
        _this.isRepeat = !_this.isRepeat;
        _this.setConfig("isRepeat", _this.isRepeat);
        repeatBtn.toggleClass("active", _this.isRepeat);
      });

      // Xử lý next song khi audio ended
      // Handle next song when audio ended
      audio.on('ended', function () {
        if (_this.isRepeat) {
          audio.trigger('play');
        } else {
          nextBtn.click();
        }
      });

      // Lắng nghe hành vi click vào playlist
      // Listen to playlist clicks
      playlist.on('click', function (e) {
        const songNode = e.target.closest(".song:not(.active)");

        if (songNode || e.target.closest(".option")) {
          // Xử lý khi click vào song
          // Handle when clicking on the song
          if (songNode) {
            _this.currentIndex = Number(songNode.dataset.index);
            _this.loadCurrentSong();
            _this.render();
            audio.trigger('play');
          }

          // Xử lý khi click vào song option
          // Handle when clicking on the song option
          if (e.target.closest(".option")) {}
        }
      });
    },
    scrollToActiveSong: function () {
      setTimeout(() => {
        $(".song.active").scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }, 300);
    },
    loadCurrentSong: function () {
      heading.textContent = this.currentSong.name;
      cdThumb.css('background-image', `url('${this.currentSong.image}')`);
      audio.attr('src', this.currentSong.path);
    },
    loadConfig: function () {
      this.isRandom = this.config.isRandom;
      this.isRepeat = this.config.isRepeat;
    },
    nextSong: function () {
      this.currentIndex++;
      if (this.currentIndex >= this.songs.length) {
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
    },
    prevSong: function () {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.songs.length - 1;
      }
      this.loadCurrentSong();
    },
    playRandomSong: function () {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.songs.length);
      } while (newIndex === this.currentIndex);

      this.currentIndex = newIndex;
      this.loadCurrentSong();
    },
    start: async function () {
      // Gán cấu hình từ config vào ứng dụng
      // Assign configuration from config to application
      this.loadConfig();

      // load data music categories
      await $.getJSON('data_songs.json', (data) => {
        this.songs = data.songs
      })

      songs_category = this.songs;

      // Định nghĩa các thuộc tính cho object
      // Defines properties for the object
      this.defineProperties();

      // Lắng nghe / xử lý các sự kiện (DOM events)
      // Listening / handling events (DOM events)
      this.handleEvents();

      // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
      // Load the first song information into the UI when running the app
      this.loadCurrentSong();

      audio.on('loadedmetadata', function (e) {
        updateTime(time_duration, this.duration.toFixed());
      })

      // Render playlist
      this.render();

      // Hiển thị trạng thái ban đầu của button repeat & random
      // Display the initial state of the repeat & random button
      randomBtn.toggleClass("active", this.isRandom);
      repeatBtn.toggleClass("active", this.isRepeat);
      audio.attr('muted', false);
      document.getElementById('audio').play();

    }

  }

  app.start()
})