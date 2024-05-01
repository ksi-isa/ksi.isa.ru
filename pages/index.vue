<template>
  <div>
    <HeroBanner text="Кафедра системных исследований" />

    <div class="mx-auto max-w-7xl px-5 xl:px-0 my-5 lg:my-10">
      <p>
        Кафедра системных исследований является
        <NuxtLink
          target="_blank"
          class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
          to="https://fbmf.mipt.ru/education/basic-departments/kafedra-sistemnykh-issledovaniy"
        >
          базовой кафедрой при ФПМИ МФТИ</NuxtLink
        >.
      </p>
      <p>
        Базовая организация:
        <NuxtLink
          target="_blank"
          class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
          to="http://www.isa.ru/"
        >
          Институт системного анализа, Федеральный Исследовательский Центр
          «Информатика и управление» Российской Академии Наук</NuxtLink
        >.
      </p>
      <p>
        Презентация Кафедры Системных Исследований:
        <NuxtLink
          target="_blank"
          class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
          to="/Презентация КСИ 2024.pdf"
        >
          <Icon name="heroicons:arrow-down-on-square" /></NuxtLink
        >.
      </p>

      <h2 class="pt-5 lg:pt-10 text-3xl">Новости</h2>
      <ul class="pl-5 list-disc">
        <li>
          Открыт прием на бакалаврские и магистерские программы кафедры
          системных исследований на 2024 год.
        </li>
      </ul>

      <p class="pt-5 lg:pt-10">
        Для поступления на кафедру необходимо прислать резюме на адрес
        <NuxtLink
          class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
          to="mailto:ivs@isa.ru"
          >ivs@isa.ru</NuxtLink
        >.
      </p>
      <p>
        Подробности о поступлении в разделе
        <NuxtLink
          class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
          to="applicants"
          >Абитуриентам</NuxtLink
        >.
      </p>
    </div>
  </div>
</template>

<script setup>
  useSeoMeta({
    title: "Главная | КСИ",
  })
</script>
