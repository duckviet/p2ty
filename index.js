const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)
        
        const player = $('.player')
        const cd = $('.cd')
        const header = $('.header')
        const heading = $('header h2')
        const headName = $('header h4')
        const cdThumb = $('.cd-thumb')
        const audio = $('#audio')
        const playbtn = $('.btn-toggle-play')
        const progress = $('#progress')
        const nextBtn = $('.btn-next')
        const prevBtn = $('.btn-prev')
        const randomBtn = $('.btn-random')
        const repectBtn = $('.btn-repeat')
        const playlist= $('.playlist')
        const time_songs = $('.time-music-end');
        const step_song = $('.time-music-start');
        const body = $('.bodyChange');
        // const audio1 = document.querySelector('audio'),
        const audio2 = $('#audio2')
        const lyrics = document.querySelector('.lyrics');
        const time = document.querySelector('.time');
        const app ={
          currentIndex: 0,
          isPlaying: false,
          isramdom :false,
          isrepect :false,
          songs: [
                {
                  name:'Chạm chạm',
                  singer:'Cao Minh x Baki',
                  path: './asset/LISTNHAC/chamcham.mp3',
                  image:'./asset/LISTANH/chamcham.png',
                  backgroundcolor: "#c85f48",
                  lyric: './Lyric/chamcham.lrc',
                },
                {
                  name:'Chỉ mình anh nhìn thấy',
                  singer:'Thái Đinh',
                  path: './asset/LISTNHAC/chiminhanhnhinthay.mp3',
                  image:'./asset/LISTANH/chiminhanhnhinthay.png',
                  backgroundcolor: "#2a343a",
                  lyric: './Lyric/chiminhemnhinthay.lrc',
                },
                {
                  name:'Đoạn kết mới',
                  singer:'Hoàng Dũng',
                  path: './asset/LISTNHAC/doanketmoi.mp3',
                  image:'./asset/LISTANH/doanketmoi.png',
                  backgroundcolor: "#8dc2d5",
                  lyric: './Lyric/doanketmoi.lrc',
                },
                {
                  name:'Làm sao để quên anh',
                  singer:'THE SHEEP',
                  path: './asset/LISTNHAC/lamsaodequenanh.mp3',
                  image:'./asset/LISTANH/lamsaodequenanh.png',
                  backgroundcolor: "#f8d694",
                  lyric: 'lyric.lrc',
                },
                // {
                //   name:'Ten j ki`',
                //   singer:'XLDRAGON',
                //   path: './asset/LISTNHAC/quazoizuiik.mp3',
                //   image:'./asset/LISTANH/quazoizuiik.png',
                //   backgroundcolor: "#F6EEC7",
                //   lyric: 'lyric.lrc',
                // },
                {
                  name:'Đôi mình',
                  singer:'chuotsamset',
                  path: './asset/LISTNHAC/doiminh.mp3',
                  image:'./asset/LISTANH/doiminh.png',
                  backgroundcolor: "#2a67ab",
                  lyric: 'lyric.lrc',

                },
                {
                  name:'Xin lỗi',
                  singer:'Thắng',
                  path: './asset/LISTNHAC/xinloi.mp3',
                  image:'./asset/LISTANH/xinloi.png',
                  backgroundcolor: "#c85f48",
                  lyric: 'lyric.lrc',
                },
                {
                  name:'Để tôi ôm em bằng giai điệu này',
                  singer:'GREY D x MIN',
                  path: './asset/LISTNHAC/detoiomembanggiaidieunay.mp3',
                  image:'./asset/LISTANH/song2.png',
                  backgroundcolor: "#6F533E",
                  lyric: 'lyric.lrc',
                },
                {
                  name:'Đưa em về nhà',
                  singer:'GREY D',
                  path: './asset/LISTNHAC/duaemvenha.mp3',
                  image:'./asset/LISTANH/song3.png',
                  backgroundcolor: "#8dc2d5",
                  lyric: './Lyric/duaemvenha.lrc',

                },
                {
                  name:'Dự báo thời tiết hôm nay mưa',
                  singer:'GREY D',
                  path: './asset/LISTNHAC/dubaothoitiethomnaymua.mp3',
                  image:'./asset/LISTANH/song1.png',
                  backgroundcolor: "#0E5082",
                  lyric: 'lyric.lrc',

                },
                {
                  name:'Tỉnh thức sau giấc ngủ đông',
                  singer:'GREY D x B RAY',
                  path: './asset/LISTNHAC/tinhthucsaugiacngudong.mp3',
                  image:'./asset/LISTANH/song4.png',
                  backgroundcolor: "#e5e3e4",
                  lyric: './Lyric/lyric.lrc',

                },
                {
                  name:'Anh không buồn như em nghĩ.',
                  singer:'KIS',
                  path: './asset/LISTNHAC/anhkhongbuonnhuemnghi.mp3',
                  image:'./asset/LISTANH/anhkhongbuonnhuemnghi.jpg',
                  backgroundcolor: "#9caea8",
                  lyric: './Lyric/anhkhongbuonnhuemnghi.lrc',
                },
                {
                  name:'Em không được phép buồn rầu',
                  singer:'KIS',
                  path: './asset/LISTNHAC/emkhongduocphepbuonrau.mp3',
                  image:'./asset/LISTANH/emkhongduocphepbuonrau.jpg',
                  backgroundcolor: "#C7C27E",
                  lyric: './Lyric/anhkhongbuonnhuemnghi.lrc',
                },
                {
                  name:'Vài câu nói có khiến người thay đổi',
                  singer:'GREY D x TLINH',
                  path: './asset/LISTNHAC/vaicaunoicokhiennguoithaydoi.mp3',
                  image:'./asset/LISTANH/song5.png',
                  backgroundcolor: "#9caea8",
                  lyric: 'lyric.lrc',
                },
                {
                  name:'Đắm tình',
                  singer:'KIS',
                  path: './asset/LISTNHAC/damtinh.mp3',
                  image:'./asset/LISTANH/damtinh.jpg',
                  backgroundcolor: "#C4F4E5",
                  lyric: './Lyric/damtinh.lrc',
                },
                
            ],

          
          render: function(){
              const htmls = this.songs.map((song, index) =>{
                return `
                  <div class="song ${index === this.currentIndex ? 'active' :''}"data-index = "${index}">
                    
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
              playlist.innerHTML = htmls.join('');
              body.style.backgroundColor = this.songs[this.currentIndex].backgroundcolor;
            },
          defineProperties:function(){
              Object.defineProperty(this, 'currentSong', {
                get: function(){
                  return this.songs[this.currentIndex];
                }
              })

          },
          
          handleEvents: function(){
              const _this = this;
              const cdWidth = cd.offsetWidth
              document.body.addEventListener('keydown', function(event) {
                const key = event.code;
                if(key === 'Space'){
                  playbtn.click();
                }
                else if(key === 'ArrowLeft'){
                  prevBtn.click();
                }
                else if(key === 'ArrowRight'){
                  nextBtn.click();
                }
              });
              // Xử lý khi click play
              playbtn.onclick = function() {
                  if(_this.isPlaying){
                      audio.pause()
                  }
                  else{
                      audio.play()
                }
              }
              
              // Khi song play
             // Khi song play
              audio.addEventListener('play', function() {
                _this.isPlaying = true;
                player.classList.add('playing');
                cdthumbanimate.play();
              });

              // Khi song pause
              audio.addEventListener('pause', function() {
                _this.isPlaying = false;
                player.classList.remove('playing');
                cdthumbanimate.pause();
              });
            async function loadFile(fileName) {
              return await fetch(fileName)
                .then(data => data.text())
                .then(data => data.trim().split('\n')) // break lines to array
                .catch(err => console.error(err));
            }
            
            async function startLyric() {
              const getLyric = _this.currentSong.lyric;
              const lyricLines = await loadFile(getLyric);
              const lyricTimestamps = [];
              const lyricTexts = [];
            
              // Parse the lyric lines into separate arrays for timestamps and text
              lyricLines.forEach(line => {
                line = line.trim();
                let minute = parseInt(line.substr(1, 2));
                let second = parseInt(line.substr(4, 5));
                if (isNaN(minute) || isNaN(second)) return;
                let text = line.substr(line.indexOf(']') + 1, line.length).trim();
                lyricTimestamps.push((minute * 60) + second);
                lyricTexts.push(text);
              });
            
              // Update the lyric text based on the current time of the audio playback
              audio.addEventListener('timeupdate', function() {
                const currentTime = Math.floor(audio.currentTime);
                let i = 0;
                while (i < lyricTimestamps.length && currentTime > lyricTimestamps[i]) {
                  i++;
                }
                lyrics.innerHTML = lyricTexts[Math.max(0, i - 1)];
              });
            }
            
            
            audio.addEventListener('playing', startLyric);
              //Khi tiến độ thay đổi %
              audio.ontimeupdate = function(){
                if(audio.duration){
                  const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
                  progress.value = progressPercent
                  
              }
              // Thay đổi tiến độ bằng time
              audio.ontimeupdate = function(){
                if(audio.duration){
                    progress.value =  Math.floor((audio.currentTime/audio.duration)*100);
                    step_song.textContent = _this.getMinutesSong(progress.value);
                    time_songs.textContent = _this.setMinutesSong();
                }
            }
              
            }
              // Xử lý khi tua
              progress.onchange = function(e){
                  const seekTime = audio.duration / 100 * e.target.value
                  audio.currentTime = seekTime
              }
              //Khi next song
              nextBtn.onclick = function(){
                  if(_this.isramdom){
                      _this.playRamdomSong()
                  }
                  else{
                      _this.nextSong()
                  }
                  
                 audio.play()
                 _this.render( )
                 _this.scrollToActiveSong()
              }
              //Khi prev song
              prevBtn.onclick = function(){
                  if(_this.isramdom){
                    _this.playRamdomSong()
                  }
                  else{
                      _this.prevSong()
              }
                 audio.play()
                 _this.render( )
                 _this.scrollToActiveSong()

              }
              // Random
              randomBtn.onclick =function(e){
                _this.isramdom = !_this.isramdom 
                randomBtn.classList.toggle('active', _this.isramdom)
              }
              //Repect
              repectBtn.onclick = function(){
                _this.isrepect = !_this.isrepect
                repectBtn.classList.toggle('active', _this.isrepect) 
                 
              }
              // Xử lý next song khi hết bài hát
              
              audio.onended = function(){
                if(_this.isrepect){
                  audio.play();
                }
                else{
                  nextBtn.click()
              }
            }
            //Click playlist 
            playlist.onclick = function(e){
              const songNode =e.target.closest('.song:not(.active)')
                if(songNode || e.target.closest('.option'))
                  {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                  }
            
            }
              
          },
          setMinutesSong : function(){
            const time = audio.duration;
            const minutes = Math.floor(time % 3600 / 60).toString().padStart(2,'0');
            const seconds = Math.floor(time % 60).toString().padStart(2,'0');
            return finalTime = minutes + ':' + seconds;
          },
          getMinutesSong : function(){
            const time = audio.currentTime;
            const minutes = Math.floor(time % 3600 / 60).toString().padStart(2,'0');
            const seconds = Math.floor(time % 60).toString().padStart(2,'0');
            return finalTime = minutes + ':' + seconds;
          },
          scrollToActiveSong: function(){
            setTimeout(() => {
                $('.song.active').scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest', 
                }) 
            },300)
          },

          loadCurrentSong: function(){
            heading.textContent = this.currentSong.name
            headName.textContent = this.currentSong.singer
            cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
            audio.src = this.currentSong.path

            function Changed() {
              let box1 = $('#H2').offsetHeight;
              let boxsp = $('.boxsp');
              boxsp.style.marginTop = box1 + 30 + "px";
              console.log(box1);
            }
            Changed()
          },
          nextSong: function(){
            this.currentIndex++
            if(this.currentIndex >= this.songs.length){
              this.currentIndex = 0
            }
            this.loadCurrentSong()
          },
          prevSong: function(){
            this.currentIndex--
            if(this.currentIndex < 0){
              this.currentIndex = this.songs.length -1
            }
            this.loadCurrentSong()
          },
          playRamdomSong: function(){
            let newIndex  
            do{
                newIndex = Math.floor(Math.random() * this.songs.length)
              }
              while(newIndex === this.currentIndex)
              this.currentIndex = newIndex
              this.loadCurrentSong()
          },
          // constants
          // add events
          

          start: function(){
              this.defineProperties()
              this.render()
              // this.heightChange()
              this.handleEvents() 
              this.loadCurrentSong()
              this.scrollToActiveSong()
              
            }
        }
        app.start();