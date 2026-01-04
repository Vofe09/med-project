async function loadTests() {
    const res = await fetch("tests.json");
    const data = await res.json();

    const categorySelect = document.getElementById("categoryFilter");
    const levelSelect = document.getElementById("levelFilter");
    const list = document.getElementById("test-list");

    const categories = new Set();

    data.tests.forEach(test => {
        categories.add(test.category);
    });

    categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.innerText = cat;
        categorySelect.appendChild(option);
    });

    function renderTests() {
        list.innerHTML = "";

        const selectedCategory = categorySelect.value;
        const selectedLevel = levelSelect.value;

        data.tests.forEach(test => {
            if (
                (selectedCategory !== "all" && test.category !== selectedCategory) ||
                (selectedLevel !== "all" && test.level !== selectedLevel)
            ) return;

            const card = document.createElement("div");
            card.className = "test-card";

            card.innerHTML = `
                <h2>${test.title}</h2>
                <p>${test.category} · ${test.level}</p>
                <p>Вопросов: ${test.questions.length}</p>
                <a href="test.html?id=${test.id}" class="btn">Начать</a>
            `;

            list.appendChild(card);
        });
    }

    categorySelect.onchange = renderTests;
    levelSelect.onchange = renderTests;

    renderTests();
}

loadTests();
