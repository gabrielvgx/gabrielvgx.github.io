<template>
  <div class="instruction">Clique na página</div>
  <div class="book">
    <div class="page cover-front" @click="(e) => bookAnimation.movePage(e.currentTarget, 1)">
        <h1>O conto de Amaury</h1>
        <div class="hat"><i class="fab fa-pied-piper-hat"></i></div>
        <h2>Gabriel Víctor</h2>
    </div>
    <div class="page cover-front" @click="(e) => bookAnimation.movePage(e.currentTarget, 2)"></div>
    <div class="page text-page" @click="(e) => bookAnimation.movePage(e.currentTarget, 3)">
        <p>Mrs. Dalloway said she would buy the flowers herself.</p>
        <p>For Lucy had her work cut out for her. The doors would be taken off their hinges; Rumpelmayer's men were coming. And then, thought Clarissa Dalloway, what a morning--fresh as if issued to children on a beach.</p>
        <p>What a lark! What a plunge! For so it had always seemed to her, when, with a little squeak of the hinges, which she could hear now, she had burst open the French windows and plunged at Bourton into the open air. How fresh, how calm, stiller than
            this of course, the air was in the early morning; like the flap of a wave; the kiss of a wave; chill and sharp and yet (for a girl of eighteen as she then was) solemn, feeling as she did, standing there at the open window, that something awful
            was about to happen; looking at the flowers, at the trees with the smoke winding off them and the rooks rising, falling; standing and looking until Peter Walsh said, "Musing among the vegetables?"--was that it?--"I prefer men to cauliflowers"--was
            that it? He must have said it at breakfast one morning when she had gone out on to the terrace--Peter Walsh. He would be back from India one of these days, June or July, she forgot which, for his letters were awfully dull; it was his sayings
            one remembered; his eyes, his pocket-knife, his smile, his grumpiness and, when millions of things had utterly</p>
    </div>
    <div class="page text-page" @click="(e) => bookAnimation.movePage(e.currentTarget, 4)">
        <p>vanished--how strange it was!--a few sayings like this about cabbages.</p>
        <p>She stiffened a little on the kerb, waiting for Durtnall's van to pass. A charming woman, Scrope Purvis thought her (knowing her as one does know people who live next door to one in Westminster); a touch of the bird about her, of the jay, blue-green,
            light, vivacious, though she was over fifty, and grown very white since her illness. There she perched, never seeing him, waiting to cross, very upright.</p>
        <p>For having lived in Westminster--how many years now? over twenty,--one feels even in the midst of the traffic, or waking at night, Clarissa was positive, a particular hush, or solemnity; an indescribable pause; a suspense (but that might be her
            heart, affected, they said, by influenza) before Big Ben strikes. There! Out it boomed. First a warning, musical; then the hour, irrevocable. The leaden circles dissolved in the air. Such fools we are, she thought, crossing Victoria Street.
            For Heaven only knows why one loves it so, how one sees it so, making it up, building it round one, tumbling it, creating it every moment afresh; but the veriest frumps, the most dejected of miseries sitting on doorsteps (drink their downfall)
            do the same; can't be dealt with, she felt positive, by Acts of Parliament for that very reason: they love life. In people's eyes, in the swing, tramp, and trudge; in the bellow and</p>
    </div>
    <div class="page text-page" @click="(e) => bookAnimation.movePage(e.currentTarget, 5)">
        <p> the uproar; the carriages, motor cars, omnibuses, vans, sandwich men shuffling and swinging; brass bands; barrel organs; in the triumph and the jingle and the strange high singing of some aeroplane overhead was what she loved; life; London; this
            moment of June.</p>
        <p>For it was the middle of June. The War was over, except for some one like Mrs. Foxcroft at the Embassy last night eating her heart out because that nice boy was killed and now the old Manor House must go to a cousin; or Lady Bexborough who opened
            a bazaar, they said, with the telegram in her hand, John, her favourite, killed; but it was over; thank Heaven--over. It was June. The King and Queen were at the Palace. And everywhere, though it was still so early, there was a beating, a
            stirring of galloping ponies, tapping of cricket bats; Lords, Ascot, Ranelagh and all the rest of it; wrapped in the soft mesh of the grey-blue morning air, which, as the day wore on, would unwind them, and set down on their lawns and pitches
            the bouncing ponies, whose forefeet just struck the ground and up they sprung, the whirling young men, and laughing girls in their transparent muslins who, even now, after dancing all night, were taking their absurd woolly dogs for a run;
            and even now, at this hour, discreet old dowagers were shooting out in their motor cars on errands of mystery; and the shopkeepers were fidgeting in their windows with their paste and diamonds, their lovely old sea-green brooches in </p>
    </div>
    <div class="page text-page" @click="(e) => bookAnimation.movePage(e.currentTarget, 6)">
        <p>eighteenth-century settings to tempt Americans (but one must economise, not buy things rashly for Elizabeth), and she, too, loving it as she did with an absurd and faithful passion, being part of it, since her people were courtiers once in the
            time of the Georges, she, too, was going that very night to kindle and illuminate; to give her party. But how strange, on entering the Park, the silence; the mist; the hum; the slow-swimming happy ducks; the pouched birds waddling; and who
            should be coming along with his back against the Government buildings, most appropriately, carrying a despatch box stamped with the Royal Arms, who but Hugh Whitbread; her old friend Hugh--the admirable Hugh!</p>
        <p>"Good-morning to you, Clarissa!" said Hugh, rather extravagantly, for they had known each other as children. "Where are you off to?"</p>
        <p>"I love walking in London," said Mrs. Dalloway. "Really it's better than walking in the country."</p>
    </div>
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

export default {
  setup() {
    const bookAnimation = new BookAnimation();
    return {
      bookAnimation,
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

$book-h-ratio: 8.5;
$book-w-ratio: 5.5;
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
    top: 40%;
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