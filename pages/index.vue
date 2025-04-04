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
          Федеральный Исследовательский Центр «Информатика и управление»
          Российской Академии Наук</NuxtLink
        >.
      </p>
      <p>
        Презентация Кафедры системных исследований:
        <NuxtLink
          target="_blank"
          class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
          to="/Презентация КСИ 2025.pdf"
        >
          <Icon name="heroicons:arrow-down-on-square" /></NuxtLink
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

      <div class="flex flex-col lg:flex-row pt-5 lg:pt-10">
        <div class="flex-1 p-4">
          <h2 class="text-3xl">Объявления</h2>
          <ul class="pl-5 list-disc">
            <li>
              Открыт прием на бакалаврские и магистерские программы Кафедры
              системных исследований на 2025 год.
            </li>
          </ul>
        </div>
        <div class="flex-1 p-4 w-auto lg:w-1/2">
          <h2 class="text-3xl">Видео-экскурсия</h2>
          <video controls>
            <source
              src="/Презентация кафедры системных исследований 2025.mp4"
              type="video/mp4"
            />
            Ваш браузер не поддерживает используемые видео-проигрыватель, вы
            можете просмотреть видео по ссылке
            <a href="/Презентация кафедры системных исследований 2025.mp4"
              >видео</a
            >.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  useSeoMeta({
    title: "Главная | КСИ",
  })
</script>
