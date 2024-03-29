<template>
  <div class="relative isolate h-80 w-full">
    <NuxtPicture
      format="webp"
      quality="100"
      :src
      :img-attrs="{
        class:
          'absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center',
      }"
    />
    <div class="mx-auto px-6 lg:px-8 pt-32">
      <h2 class="text-2xl text-center align-middle font-bold sm:text-4xl">
        {{ text }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { src = "/hero.jpg", text } = defineProps<{
    src: string | undefined
    text: string
  }>()
</script>
