class ContentLoader {
  constructor(jsonUrl) {
    this.jsonUrl = jsonUrl;
    this.data = null;
  }

  async loadData() {
    try {
      const response = await fetch(this.jsonUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
      return this.data;
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      return null;
    }
  }

  filterByProperty(property, value) {
    if (!this.data) {
      console.warn('Данные ещё не загружены. Сначала вызовите loadData().');
      return [];
    }
    return this.data.filter(item => item[property] === value);
  }
}

// Экспортируем класс для использования в других модулях
export { ContentLoader };
