<template>
  <div id="right-side" class="right-side__with-headerbar items-center">
    <div class="faq-container">
      <h1 class="text-2xl font-bold">Pertanyaan yang sering diajukan</h1>
      <p class="mt-4">Maaf. Halaman ini sementara dibangun.</p>
      <NuxtLink class="flex mt-4" to="/">
        <arrow-left-icon></arrow-left-icon>
        <span class="ml-2">Kembali</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowLeftIcon,
  },
}
</script>