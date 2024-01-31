<script>
document.addEventListener("DOMContentLoaded", function() {
    // Задержка в 4 секунды (4000 миллисекунд)
    const intervalId = setInterval(function() {
        // Находим все элементы с классом t-store__filter__search-and-sort
        const filterSearchAndSortList = document.querySelectorAll(".t-store__filter__search-and-sort");

        // Проверяем, существует ли хотя бы один элемент
        if (filterSearchAndSortList.length > 0) {
            clearInterval(intervalId); // Остановить проверку, если хотя бы один элемент найден

            // Создаем первую кнопку
            const button1 = document.createElement("a");
            button1.className = "button1";
            button1.type = "button";
            button1.innerHTML = '<img src="https://static.tildacdn.com/stor6235-6338-4730-a439-636164383663/84228626.svg" alt="Список" width="20px" height="20px">';

            // Создаем вторую кнопку
            const button2 = document.createElement("a");
            button2.className = "button2";
            button2.type = "button";
            button2.innerHTML = '<img src="https://static.tildacdn.com/stor3966-3831-4732-a232-363462373365/72422899.svg" alt="Список" width="20px" height="20px">';

            // Добавляем кнопки в начало каждого элемента t-store__filter__search-and-sort
            filterSearchAndSortList.forEach(function(filterSearchAndSort) {
                filterSearchAndSort.insertBefore(button1.cloneNode(true), filterSearchAndSort.firstChild);
                filterSearchAndSort.insertBefore(button2.cloneNode(true), filterSearchAndSort.firstChild);
            });
        } else {
            console.log("Элементы с классом t-store__filter__search-and-sort не найдены. Продолжаем проверку...");
        }
    }, 1000); // Проверка каждую секунду
});
</script>

<script>
console.log("Элементы с классом t-store__filter__search-and-sort не найдены. Продолжаем проверку...");
</script>