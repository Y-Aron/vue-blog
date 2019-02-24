<template>
  <div class="app-carousel">
    <div class="carousel">
      <div class="fader">
        <template v-for="(vol, index) in images">
          <li class="slide" v-show="current === index" ><a href="/" target="_blank"><img :src="vol"></a></li>
        </template>
        <div class="carousel-controls">
          <div class="page prev" @click="preImage" @mouseenter="clearTimer" @mouseleave="startTimer"></div>
          <div class="page next" @click="nextImage" @mouseenter="clearTimer" @mouseleave="startTimer"></div>
        </div>
        <ul class="pager_list">
          <template v-for="(vol, index) in images">
            <li class="page" :class="{'active': current === index }" @click="current=index"
              @mouseenter="clearTimer" @mouseleave="startTimer">{{index}}</li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "carousel",
    mounted() {
		  this.startTimer()
    },
    methods: {
		  clearTimer() {
        clearInterval(this.timer)
      },
		  preImage() {
        if (this.current -- <= 0) {
          this.current = this.images.length - 1
        }
      },
      nextImage() {
        if (this.current ++ >= this.images.length - 1) {
          this.current = 0;
        }
      },
      startTimer() {
		    this.timer = setInterval(() => {
          this.nextImage()
        }, 3000)
      }
    },
    data() {
		  return {
		    current: 0,
        timer: '',
        images: [
          'images/1.jpg',
          'images/2.jpg',
          'images/3.jpg',
          'images/4.jpg',
        ]
      }
    }
	}
</script>
