<template>
  <!-- <div class="instruction">Clique na página</div> -->
  <div class="book">
    <div class="page cover-front" @click="(e) => bookAnimation.movePage(e.currentTarget, 1)">
        <h1>O conto de Amaury</h1>
        <div class="hat"><i class="fab fa-pied-piper-hat"></i></div>
        <h2>Gabriel Víctor</h2>
    </div>
    <div class="page cover-front" @click="(e) => bookAnimation.movePage(e.currentTarget, 2)"></div>
    <div class="page text-page" v-for="(page, idx) in pages" :key="idx" @click="(e) => bookAnimation.movePage(e.currentTarget, idx+3)">
      <p>{{ page.text }}</p>
      <img v-if="page.img && !Array.isArray(page.img)" :src="page.img" width="200">
      <img v-if="Array.isArray(page.img)" v-for="(image, imgIdx) in page.img" :key="imgIdx" :src="image" width="200">
    </div>
    <div class="page text-page" @click="(e) => bookAnimation.movePage(e.currentTarget, pages.length + 2)">
        <!-- <p>Esta história se trata da lenda de Amaury.</p> -->
        <!-- <img :src="pages[0].img" width="200"> -->
    </div>
    <!-- <div class="page text-page" @click="(e) => bookAnimation.movePage(e.currentTarget, 4)">
        <p>Um bravo nerdola</p>
        <img :src="pages[1].img" width="200">
    </div>
    <div class="page text-page" @click="(e) => bookAnimation.movePage(e.currentTarget, 5)">
        <p>Temido por povos de norte a sul, leste a oeste.</p>
        <img :src="pages[2].img" width="200">
    </div>
    <div class="page text-page" @click="(e) => bookAnimation.movePage(e.currentTarget, 6)">
        <p>eighteenth-century settings to tempt Americans (but one must economise, not buy things rashly for Elizabeth), and she, too, loving it as she did with an absurd and faithful passion, being part of it, since her people were courtiers once in the
            should be coming along with his back against the Government buildings, most appropriately, carrying a despatch box stamped with the Royal Arms, who but Hugh Whitbread; her old friend Hugh--the admirable Hugh!</p>
    </div> -->
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
  </div>
</template>
<script lang="ts">
import { BookAnimation } from '../helper/BookAnimation';
import Foto1 from '../assets/amaury/foto1.jpg';
import Foto2 from '../assets/amaury/foto2.png';
import Foto3 from '../assets/amaury/foto3.webp';
import Foto4 from '../assets/amaury/foto4.jpg';
import Foto5 from '../assets/amaury/foto5.jpg';
import Foto6 from '../assets/amaury/foto6.jpeg';
// import Foto7 from '../assets/amaury/foto7.jpg';
import Foto8 from '../assets/amaury/foto8.jpg';
import Foto9 from '../assets/amaury/foto9.jpg';
// import Foto10 from '../assets/amaury/foto10.jpg';
import Foto11 from '../assets/amaury/foto11.jpg';
import Foto12 from '../assets/amaury/foto12.jpg';
import Foto13 from '../assets/amaury/foto13.jpg';
import Foto14 from '../assets/amaury/foto14.jpg';
import Foto15 from '../assets/amaury/foto15.jpg';
import Foto16 from '../assets/amaury/foto16.png';
import Foto17 from '../assets/amaury/foto17.jpg';
import Foto18 from '../assets/amaury/foto18.webp';
import Foto19 from '../assets/amaury/foto19.png';
import Foto20 from '../assets/amaury/foto20.jpg';

export default {
  setup() {
    const bookAnimation = new BookAnimation();
    const pages = [
      {
        img: Foto1,
        text: 'Uma história baseada em fatos reais sobre a história de Amaury.'
      },
      {
        img: Foto11,
        text: 'Era uma vez, em um reino chamado CEFET, havia um jovem herói chamado Amaury.'
      },
      {
        img: Foto2,
        text: 'Temido por povos de norte a sul, leste a oeste.'
      },
      {
        // img: Foto5,
        text: 'Durante sua jornada épica nesta escola, ele e seus companheiros formaram um grupo de heróis destemidos: Isabela do reino Delay, Gabriel - O Calmo, Marcelo - O Estranho e o próprio Amaury - O Exótico. Juntos, eles enfrentaram os desafios do mundo da informática, desvendando mistérios e resolvendo enigmas que poucos ousavam encarar.'
      },
      {
        img: Foto5,
        text: ''
      },
      {
        img: Foto6,
        text: ''
      },
      {
        img: Foto15,
        text: 'Com cada desafio superado, o grupo se tornava mais forte e unido. Amaury, com sua inteligência e dedicação, era uma peça fundamental nessa equipe. Gabriel, Isabela e Marcelo, cada um com suas habilidades únicas, completavam o grupo, fazendo deles uma força imparável. Eles riram, aprenderam e cresceram juntos, forjando laços que nem o tempo poderia desfazer.'
      },
      {
        img: [Foto8, Foto9],
        text: ''
      },
      {
        img: Foto17,
        text: ''
      },
      {
        img: Foto16,
        text: ''
      },
      {
        // img: Foto11,
        text: 'Após concluir sua jornada no CEFET, Amaury decidiu explorar um novo território: o reino de Farmácia, na grande Universidade. Lá, ele se dedicou a entender os segredos das poções e remédios, buscando maneiras de curar e ajudar os habitantes de seu reino. Esta sendo um caminho de muito estudo e dedicação, onde ele demonstra sua verdadeira vocação para o cuidado e a cura.'
      },
      {
        img: Foto12,
        text: ''
      },
      {
        img: Foto13,
        text: ''
      },
      {
        img: Foto18,
        text: ''
      },
      {
        // img: Foto13,
        text: 'Amaury também passou a trabalhar na FUNED, onde aplicou seu conhecimento para desenvolver novas fórmulas e medicamentos. Sua missão era proteger o reino de doenças e ajudar aqueles que precisavam, um verdadeiro ato de heroísmo moderno.'
      },
      {
        // img: Foto14,
        text: 'Após concluir sua jornada no CEFET, Amaury decidiu explorar um novo território: o reino de Farmácia, na grande Universidade. Lá, ele se dedicou a entender os segredos das poções e remédios, buscando maneiras de curar e ajudar os habitantes de seu reino. Esta sendo um caminho de muito estudo e dedicação, onde ele demonstra sua verdadeira vocação para o cuidado e a cura.'
      },
      {
        img: Foto14,
        text: ''
      },
      {
        // img: Foto14,
        text: 'E assim, Amaury, o herói da T.I e da Cura, continua sua jornada ao lado de seus amigos de longa data e de Amanda, sua amada. Hoje, em seu aniversário, Gabriel, Isabela, Marcelo e todos os que tiveram a sorte de compartilhar momentos com ele celebram sua vida e suas conquistas. Feliz aniversário, Amaury! Que sua jornada seja sempre iluminada e cheia de novas aventuras e realizações.'
      },
      {
        img: [Foto4, Foto19],
        // text: 'E assim, Amaury, o herói da T.I e da Cura, continua sua jornada ao lado de seus amigos de longa data e de Amanda, sua amada. Hoje, em seu aniversário, Gabriel, Isabela, Marcelo e todos os que tiveram a sorte de compartilhar momentos com ele celebram sua vida e suas conquistas. Feliz aniversário, Amaury! Que sua jornada seja sempre iluminada e cheia de novas aventuras e realizações.'
      },
      {
        img: Foto3,
        // text: 'E assim, Amaury, o herói da T.I e da Cura, continua sua jornada ao lado de seus amigos de longa data e de Amanda, sua amada. Hoje, em seu aniversário, Gabriel, Isabela, Marcelo e todos os que tiveram a sorte de compartilhar momentos com ele celebram sua vida e suas conquistas. Feliz aniversário, Amaury! Que sua jornada seja sempre iluminada e cheia de novas aventuras e realizações.'
      },
      {
        img: Foto20,
        // text: ``
      },
    ]
    return {
      bookAnimation,
      pages,
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');


$text-font: 'EB Garamond', serif;
$h1-font: 'Lora', serif;
$h2-font: 'EB Garamond', serif;

// $book-h-ratio: 8.5;
$book-h-ratio: 5.5;
// $book-w-ratio: 5.5;
$book-w-ratio: 3.5;
$book-size: 77px;

* {
  margin: 0;
  box-sizing: border-box;
}

%absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text-page {
  color: #242424;
}

body {
  width: 100%;
  height: 100vh;
  min-width: 900px;
  min-height: 700px;
  /*background: #fbecb4;*/
  position: relative;
}

.book {
  @extend %absolute-center;
  width: $book-size * $book-w-ratio * 2;
  height: $book-size * $book-h-ratio;
  transform: translate(-50%, -50%) rotatex(10deg) rotatey(-10deg);
  transform-style: preserve-3d;
}

.page {
  width: $book-size * $book-w-ratio;
  height: $book-size * $book-h-ratio;
  // background: #eee;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 1s;
}

@for $i from 1 through 100 {
  .page:nth-child(#{$i}) {
    @if $i % 2 == 1 {
      padding: 5% 4% 4% 5%;
      transform-origin: 0% 50%;
      transform: translatez(-1px * $i);
    } @else {
      padding: 5% 5% 4% 4%;
      transform-origin: 100% 50%;
      transform: translatez(-1px * $i) scalex(-1) translatex(100%);
    }
    
    @if $i > 2 {
      @if $i % 20 < 10 {
        background: #f5f5f5;
      } @else {
        background: #ccc;
      }
    } @else {
      background: #9bc8d6;
    }
  }
  
  .left-side:nth-child(#{$i}) {
    @if $i % 2 == 1 {
      transform: translatez(1px * $i) rotatey(-180deg);
    } @else {
      transform: translatez(1px * $i) scalex(-1) translatex(100%) rotatey(180deg);
    }
  }
}

.cover-front:nth-child(1) {
  text-align: center;
  background: 
    linear-gradient( #afd2dd, #a1d5e5) 50% 50% / 80% 86% no-repeat, 
    linear-gradient( #ffffff, #ffffff) 50% 50% / 90% 93% no-repeat, 
    linear-gradient( #9bc8d6, #9bc8d6) no-repeat;
  
  h1 {
    font-family: $h1-font;
    font-size: 45px;
    color: #134a78; 
    margin-top: 30px;
    // text-transform: uppercase;
  }
  
  h2 {
    font-family: $h2-font;
    font-size: 24px;
    color: #134a78;  
    position: relative;
    top: 100px;
  }
  
  .hat {
    font-size: 100px;
    color: #134a78;
    position: relative;
    top: 3%;
  }
}



p {
  margin-bottom: 4%;
  font-family: $text-font;
  font-size: 16px;
}

.page:nth-child(3) {
  p {
    &:first-of-type {
      &:first-letter {
        font-size: 32px;
      }
    }
  }
}

.instruction {
  @extend %absolute-center;
  left: calc(50% - 150px);
  font-size: 26px;
  font-family: $text-font;
  color: #0009;
  background: #fff7;
  border-radius: 15px;
  padding: 10px 15px;
}

</style>