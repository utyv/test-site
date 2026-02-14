Несколько слов о сайте

<div id="content">
  <!-- Данные загрузятся сюда -->
</div>

<script type="module">
  import { ContentLoader } from 'test-site/js/content-loader.js';

  const loader = new ContentLoader('test-site/data/content.json');

  loader.loadData().then(() => {
    // Фильтруем данные по параметру (например, по категории 'news')
    const filteredData = loader.filterByProperty('category', 'news');

    // Выводим данные в элемент с ID 'content'
    const container = document.getElementById('content');
    if (container && filteredData.length > 0) {
      container.innerHTML = filteredData.map(item =>
        `<div class="item">
          <h3>${item.title}</h3>
          <p>${item.content}</p>
        </div>`
      ).join('');
    }
  });
</script>