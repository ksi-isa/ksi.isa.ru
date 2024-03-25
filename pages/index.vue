<template>
  <div>
    <h1>Главная</h1>
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </div>
</template>

<script setup>
  useSeoMeta({
    title: "Главная | КСИ",
  })

  const { data } = await useAsyncData("index", () =>
    queryContent("/").findOne(),
  )
</script>
