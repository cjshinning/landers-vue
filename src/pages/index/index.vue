<template>
  <div id="container">
    <div class="wrapper" :style="{width: screenWidth + 'px', height: screenHeight + 'px'}">
      <div class="sider"></div>
      <div class="main"></div>
    </div>
    <div class="right" :style="{height: screenHeight + 'px'}" v-show="adShow">{{adShow}}</div>
  </div>
</template>

<script>
import "@/assets/css/main.scss";
import { jsonp } from "axios-jsonp-pro";
import util from "@/assets/js/util";

export default {
  name: "Index",
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight,
      adShow: true
    };
  },
  watch: {
    screenWidth(val) {
      // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
      this.screenWidth = val;
      this.timerW = true;
      setTimeout(() => {
        // 打印screenWidth变化的值
        // console.log(this.screenHeight);
        this.timerW = false;
      }, 4000);
    },
    screenHeight(val) {
      // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenHeight
      this.screenHeight = val;
      this.timerH = true;
      setTimeout(() => {
        // 打印screenHeight变化的值
        // console.log(this.screenHeight);
        this.timerH = false;
      }, 4000);
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.screenWidth =
          document.documentElement.clientWidth < 1440
            ? 1440
            : document.documentElement.clientWidth;
        this.screenHeight = document.documentElement.clientHeight;
        if (document.documentElement.clientWidth < 1440) {
          this.adShow = false;
        } else {
          this.adShow = true;
        }
      })();
    };

    util
      .loadScript([
        "//ptres.37.com/content/s_www/gamebox_index_hot_web.js",
        "//ptres.37.com/content/s_www/gamebox_index_kv.js"
      ])
      .then(() => {
        console.log(sq_content_s_www_gamebox_index_hot_web);
        console.log(sq_content_s_www_gamebox_index_kv);
      });
    // console.log(game_data);
    // console.log(sq_content_s_www_gamebox_index_right_recommend);
    // console.log(sq_content_s_www_gamebox_index_hot_web);

    // console.log(sq_content_s_www_gamebox_index_hot_web);

    // jsonp('//ptres.37.com/content/s_www/gamebox_index_hot_web.js')
    //   .then(function (response) {
    //     // console.log(response);
    //     console.log(sq_content_s_www_gamebox_index_hot_web)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // jsonp('//ptres.37.com/content/s_www/gamebox_index_hot_web.js', {
    //     params:{
    //     }
    //   })
    //   .then(res=>{
    //       console.log(res);
    //       console.log(sq_content_s_www_gamebox_index_hot_web)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
};
</script>

<style>
</style>
