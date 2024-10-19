---
title: Gallery
layout: page
---

<script setup>
import { ref } from 'vue';
import bearImg from './assets/paintings/bear.jpg'
import rabbitImg from './assets/paintings/rabbit.jpg'
import roomImg from './assets/paintings/room.jpg'
import bedImg from './assets/paintings/bed.jpg'
import donutImg from './assets/paintings/donut.png'
import flowersImg from './assets/paintings/flowers.jpg'
import gardenImg from './assets/paintings/garden.jpg'
import bearPartyImg from './assets/paintings/bear_party.jpg'
import buildingImg from './assets/paintings/building.jpeg'
import festivalImg from './assets/paintings/festival.jpeg'
import floridaImg from './assets/paintings/florida.jpeg'

const paintings = [
  { id: 6, text: "A man should hear a little music, read a little poetry, and see a fine picture every day of his life, in order that worldly cares may not obliterate the sense of the beautiful which God has implanted in the human soul. - Goethe", details: '20x25cm, Oil on canvas', src: flowersImg },
  { id: 1, text: 'The world is full of magic things, patiently waiting for our senses to grow sharper. - W.B. Yeats', details: '20x20cm, Oil on panel', src: bearImg },
  { id: 2, text: "He found himself wondering at times, especially in the spring, about the wild and strange things that lay beyond the countryside. Visions of mountains and towns that he had never seen came into his dreams. He began to say to himself: 'Perhaps I shall cross the countryside myself one day.' To which the other half of his mind replied: 'One day, shall be today'.", details: "20x25cm, Oil on canvas", src: rabbitImg },
  { id: 3, text: "Everyone carries a room about inside, him. This fact can even be proved by means of the sense of hearing. If some one walks fast and one pricks up one's ears and listens, say in the night, when everything round about is quiet, one hears, for instance, the rattling of a mirror not quite firmly fastened to the wall. -Kafka", details: '40x50cm, Oil on gesso panel', src: roomImg },
  { id: 4, text: "It, of course, doesn't hurt to live in a dream. No where to go but here; to luxuriate in the warmth of the moonlight and listen to the bedtime stories whispered by Owl. No hurry for reason or worry.", details: '20x25cm, Oil on panel', src: bedImg },
  { id: 5, text: '', details: '20x20cm, Oil on panel', src: donutImg },
  { id: 7, text: 'Breathe deeply; this moment will never return.', details: '5x7cm, Oil on gesso board', src: gardenImg },
  { id: 8, text: 'Tôt a la soirée', details: 'Digital', src: bearPartyImg },
  { id: 9, text: 'Muscles aching to work, minds aching to create - this is man. ― John Steinbeck, The Grapes of Wrath', details: '20x25cm, Oil on canvas', src: buildingImg },
  { id: 10, text: "The Festival attracted every animal in the forest. A single ticket granted prizes, smiles, and thrills. The air smelled of butter and candied apples. All of the animals rode the ferris wheel so they could fly high over the meadow like owl and raven. The Festival's warm glow illuminated the forest late into the night. Exhausted from a day of play and bellies full of treats, the animals were lulled into a restful sleep", details: '14x18cm, Oil on panel', src: festivalImg }, { id: 11, text: '', details: 'Digital', src: floridaImg },
];

const currentPainting = ref(paintings[0]);

function selectPainting(painting) {
  currentPainting.value = painting;
}
</script>

<div class="gallery-container">
  <div class="gallery-main">
    <div class="gallery-text">
      <p>{{ currentPainting.text }}</p>
      <p style="color:gray;"><i>{{currentPainting?.details}}</i></p>
    </div>
    <div class="gallery-image">
      <img :src="currentPainting.src" :alt="currentPainting.title" />
    </div>
  </div>
  <div class="gallery-thumbnails">
    <div 
      v-for="painting in paintings" 
      :key="painting.id" 
      class="thumbnail"
      :class="{ active: painting.id === currentPainting.id }"
      @click="selectPainting(painting)"
    >
      <img :src="painting.src" :alt="painting.title" />
    </div>
  </div>
</div>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
  min-height: calc(100vh - 64px); /* Subtract top and bottom padding */
}
.gallery-main {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 24px;
  flex-grow: 1;
}
.gallery-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.gallery-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gallery-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.gallery-thumbnails {
  display: flex;
  justify-content: center;
  gap: 12px;
  overflow-x: auto;
  padding-top: 24px;
}
.thumbnail {
  height: 80px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
}
.thumbnail.active {
  border-color: var(--vp-c-brand);
}
.thumbnail img {
  height: 100%;
  width: auto;
  object-fit: cover;
}
@media (max-width: 768px) {
  .gallery-main {
    flex-direction: column-reverse;
  }
  
  .gallery-image {
    margin-bottom: 24px;
  }
}
</style>
