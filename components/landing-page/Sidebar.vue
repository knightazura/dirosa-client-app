<template>
  <aside id="left-side" class="bg-green-300 md:w-1/3 md:min-h-screen">
    <h1 class="text-2xl py-3">RQWIJ</h1>
    <div class="bg-blue-700 text-white px-3 py-2">
      <ul>
        <li class="sidebar__content-item">
          <circle-icon size="16" class="center-point"></circle-icon>
          <div class="content-item__text">Halaman awal</div>
          <div class="bg-purple-300">&nbsp;</div>
        </li>
        <li class="sidebar__content-item">
          <circle-icon size="16" class="center-point"></circle-icon>
          <div class="content-item__text">Formulir biodata</div>
          <div class="bg-purple-300">&nbsp;</div>
        </li>
        <li class="sidebar__content-item">
          <circle-icon size="16" class="center-point"></circle-icon>
          <div class="content-item__text">Pemilihan kelas</div>
          <div class="bg-purple-300"></div>
        </li>
        <li class="sidebar__content-item">
          <circle-icon size="16" class="center-point"></circle-icon>
          <div class="content-item__text">Selesai</div>
        </li>
      </ul>
    </div>
    <div class="bg-green-700 text-white">Footer</div>
  </aside>
</template>

<script>
import { CircleIcon } from 'vue-feather-icons'

export default {
  components: {
    CircleIcon
  }
}
</script>

<style scoped>
#left-side {
  display: grid;
  grid-template-rows: minmax(24px, max-content) auto minmax(64px, max-content);
}

ul {
  list-style: none;
}

.sidebar__content-item {
  display: grid;
  grid-template-columns: 24px auto;
  grid-template-rows: 24px minmax(100px, max-content);
  margin-bottom: 10px;
}
.content-item__text {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.center-point {
  justify-self: center;
  align-self: center;
}
</style>