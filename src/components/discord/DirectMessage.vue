<template>
  <v-container fluid class="pa-0 ma-0 w-100">
    <v-container v-if="showProfileList" fluid class="pa-0 discord-dm d-flex">
      <v-container class="server-list pa-0 ma-0 d-flex justify-content-center align-items-center">
        <div class="selected-left-line"></div>
        <v-btn icon color="#5865F2">
          <!-- <DiscordIcon /> -->
          <img width="36" :src="DiscordIcon" />
        </v-btn>
      </v-container>
      <v-container fluid class="pa-0 dm-list">
        <div class="d-flex w-100 justify-space-between align-center">
          <span class="title">Mensagens</span>
          <v-btn icon="mdi-close" color="error" density="compact"
            class="me-3"
            @click="$emit('close')"
          ></v-btn>
        </div>
        <v-container fluid class="pa-2 d-flex flex-column">
          <v-btn flat v-for="message in messages" :key="message.nickname" :class="`profile ${message.isSelected ? 'selected' : ''}`" @click="() => onClickProfile(message)">
            <div class="profile-icon">
              <img width="36" :src="message.image">
            </div>
            <span class="nickname">{{ message.nickname }}</span>
          </v-btn>
        </v-container>
      </v-container>
    </v-container>
    <v-container fluid v-else class="pa-0">
      <ProfileMessage :message="messages.find((e: any) => e.isSelected)"
        @back="() => showProfileList = true"
      />
    </v-container>
  </v-container>
</template>
<script lang="ts">
import DiscordIcon from '../../assets/discord.png';
import ProfileMessage from './ProfileMessage.vue';
import LucianIcon from '../../assets/discord-icons/lucian.jpeg';
import AmandaIcon from '../../assets/discord-icons/amanda.jpeg';
import PiiqueIcon from '../../assets/discord-icons/piique.png';
import CreuzaIcon from '../../assets/discord-icons/creuza.png';
import JoaoIcon from '../../assets/discord-icons/joao.png';
import JlcIcon from '../../assets/discord-icons/jlc.gif';
// import DanielIcon from '../../assets/discord-icons/daniel.png';
import BiDanIcon from '../../assets/discord-icons/bidan.png';
import LuizIcon from '../../assets/discord-icons/luiz.png';
import IsabelaIcon from '../../assets/discord-icons/isabela.png';
import MarceloIcon from '../../assets/discord-icons/marcelo.png';
import LuizMsg from '../../assets/luiz_msg.jpg';
import IsabelaMsg from '../../assets/isabela_msg.mp3';
import BiDanMsg from '../../assets/bidan.mp3';
import { Ref, ref } from 'vue';

export default {
  emits: ['close'],
  components: {
    ProfileMessage,
  },
  methods: {
    onClickProfile(message: any) {
      const curSelectedMsg = this.messages.find((e: any) => e.isSelected);
      if(curSelectedMsg) curSelectedMsg.isSelected = false;
      message.isSelected = true;
      this.showProfileList = false;
    }
  },
  setup() {
    const showProfileList = ref(true);
    const messages: Ref<any[]> = ref([
      {
        nickname: 'LucianSOA',
        text: 'Meus parabéns meu Bruxo tudo de bom que o galo melhore do brasileirao kkkkk e nois mineirin tamo junto',
        image: LucianIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
      {
        nickname: 'piique',
        text: 'Parabéns pro meu mano "Amaurynho", também conhecido como a melhor astra do vava. Felicidades amigo :)',
        image: PiiqueIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
      {
        nickname: 'creuza',
        text: `saalve Amauryy tudo bom princeso? Passando pra te desejar feliz aniversário , muitos anos de vida .. paz e saúde, msm q me oprima , desejo tudo de bom pra tu hj e sempre ❤💪🏼 (nao guardo rancor, sou um ser evoluído) 

Ps.: depois manda um bolinho ai pra gente , e nao esquece das amigas quando ficar rico…..

Att,
Creuzu`,
        image: CreuzaIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
      {
        nickname: 'jlc',
        text: `Parabéns Amaury,
Que venham muitos mais anos de amizade pra gente poder se zoar e jogar juntos falando sempre besteira do que acontece por aí pra alegrar cada dia.
Lembre que se vc tem hora pra dar chegue no horário.
Ass: Jotajhonson
        `,
        image: JlcIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
      {
        nickname: 'bidan',
        text: `
        <audio controls>
          <source src="${BiDanMsg}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        `,
        image: BiDanIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
      {
        nickname: 'terror.joaovitor',
        text: `Mano.

O que dizer do Amaury que eu mal conheci mas já considero um amigo de longa data?
Já fazem 9 anos que conheço ele, e tão rápido quanto o tempo passou eu consigo me lembrar de quando conheci ele. Nunca fui um bom amigo e não consegui deixar tantas boas marcas como ele deixou em mim. 
Me admiro com a forma humilde e gente fina que ele sempre age com todos, e principalmente, me inspira muito a forma como todos que gostam dele são sempre tratados igualmente. Do mais chegado ao mais sumido, ele sempre recebe as pessoas com a mesma energia. 
Mesmo antes dele começar a fazer faculdade de metanfetamina, eu sempre achei ele um cara muito inteligente e muito esforçado. E desde sempre eu admiro a garra que ele tinha. Me lembro de, no máximo, uma vez em que vi ele realmente triste e abatido. 
Amaury, se você está lendo isso, significa que eu morri seu aniversário provavelmente já passou. Mas saiba que eu te desejo toda felicidade do mundo mano. Me alegra muito poder ter conhecido você. Dentro daquilo que eu acredito, desejo que Deus abençoe muito sua vida mano, você é um presente na vida dos seus amigos. Espero que a cada reencontro a gente possa rir e relembrar mais das mesmas histórias de sempre, e que você possa levar pra mais pessoas isso tudo que você trouxe pra mim e pra quem convive contigo. Um abraço mano, tenha um ótimo dia, feliz 30 anos!
Ass: João Carvalho`,
        image: JoaoIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
      {
        nickname: 'luiz787',
        text: `<img class="msg" src="${LuizMsg}">`,
        image: LuizIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
      {
        nickname: 'icrsantos',
        text: `
        <audio controls>
          <source src="${IsabelaMsg}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>

        `,
        image: IsabelaIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
      {
        nickname: 'marcelo',
        text: `Excelentíssimo caue, primeiramente meu filho é seu! Segundamente e de importância tao grande quanto a primeira frase (que é realmente importante) tô passando por aqui pra te deixar um feliz aniversário ehhehhe. Já faz um tempo que a gente não se vê, acho que a última vez foi no filme do Batman (que eu cochilei por sinal), mas em breve eu vorto pra bh, tudo no seu ciclo. Acho que nessa caminhada meio doidona do ensino médio até aqui a gente já viveu bastante coisa com nosso quarteto sinistro, momentos que precisamos uns dos outros e momentos que rimos uns dos outros e acho que é assim que a gente consegue aprender as pessoas que a gente quer levar pro resto da vida, que de fato é o grupo bem seletivo. Espero que você consiga realizar suas novas metas e que continue sendo você com o seu jeito caue. Um abraço pra todos da sua família, eu tô meio longe agora, mas sempre que vocês precisarem já sabem como me achar ehhehe um abraço mestres supremos !!!`,
        image: MarceloIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
      {
        nickname: 'amandafileto',
        text: `Meu amor, feliz aniversário! Que esse seja o segundo de muitos que passaremos juntos. From your lovely babat! 💝`,
        image: AmandaIcon,
        isSelected: false,
        timestamp: '27/07/2024 19:47',
      },
    ]);
    return {
      messages,
      showProfileList,
      DiscordIcon,
    };
  }
}
/**
 * #2B2D31 -- cinza-escuro (background)
 * #404249 -- cinza-claro (botao em foco)
 * #F3EAE2 -- white (texto de botao selecionado)
 * #949BA4 -- cinza (botao não selecionado)
 * #5865F2 -- discord blue
 */
</script>
<style lang="scss">
.title {
  color: #FFFFFF;
  font-weight: bold;
  padding: 1rem;
}
.profile-icon > img:not(.msg) {
  border-radius: 50%;
}
.nickname {
  color: #6e6f74;
  font-weight: bold;
  letter-spacing: normal;
}
.profile {
  border-radius: 0;
  background-color: inherit;
  justify-content: flex-start;
  padding: 0.25rem;
  height: auto !important;
  .v-btn__content {
    gap: 0.5rem;
  }
}
.profile.selected {
  background-color: #2B2D31;
  span {
    color: rgb(211, 211, 211);
  }
}
.dm-list {
  background-color: #1C1D22;
}
.server-list {
  max-width: 72px;
}
.discord-modal {
  .discord-dm {
    height: 100vh;
    background-color: #141318;
  }
  .v-overlay__content > .v-card {
    padding: 0 !important;
  }
  .v-btn--icon {
    border-radius: 35%;
  }
  .selected-left-line {
    width: 0.2rem;
    height: 32px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    background-color: white;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
}
.v-btn {
  text-transform: none;
}
</style>

