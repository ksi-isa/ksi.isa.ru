<template>
  <div>
    <h1>Главная</h1>
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </div>
</template>

<script setup>
  const { data } = await useAsyncData("index", () =>
    queryContent("/").findOne(),
  )
</script>
