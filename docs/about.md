Несколько слов о сайте

## Раздел 1

Здесь будет контент с ID 1:
<div class="content-placeholder" data-id="1">Загружаем...</div>

## Раздел 2

А здесь — контент с ID 3:
<div class="content-placeholder" data-id="3">Загружаем...</div>

## Ещё один блок

И контент с ID 2:
<div class="content-placeholder" data-id="2">Загружаем...</div>

<script type="module">
  import { ContentLoader } from '/test-site/js/content-loader.js';

  const loader = new ContentLoader('/test-site/data/content.json');

  // Ждём загрузки данных
  loader.loadData().then(() => {
    // Находим все контейнеры с классом content-placeholder
    const placeholders = document.querySelectorAll('.content-placeholder');

    // Обрабатываем каждый контейнер
    placeholders.forEach(container => {
      // Берём ID из атрибута data-id
      const id = parseInt(container.getAttribute('data-id'), 10);

      // Получаем контент по ID
      const content = loader.getContentById(id);

      // Выводим результат
      if (content) {
        container.innerHTML = content;
      } else {
        container.innerHTML = '<em>Контент с ID ' + id + ' не найден</em>';
      }
    });
  });
</script>
