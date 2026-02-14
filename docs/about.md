Несколько слов о сайте

## Раздел 1
<div id="content-1">Загружаем...</div>

## Раздел 2
<div id="content-3">Загружаем...</div>

<script type="module">
  import { ContentLoader } from '/test-site/js/content-loader.js';

  const loader = new ContentLoader('/test-site/data/content.json');
  const placeholders = {
    'content-1': 1,
    'content-3': 3,
    // Добавьте другие ID и их контейнеры
  };

  loader.loadData().then(() => {
    Object.entries(placeholders).forEach(([containerId, id]) => {
      const container = document.getElementById(containerId);
      if (container) {
        const content = loader.getContentById(id);
        container.innerHTML = content || '<em>Не найдено</em>';
      }
    });
  });
</script>
