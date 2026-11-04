const levelConfig = {
  easy: {
    label: { en: "Easy", ru: "Легко", es: "Fácil", ky: "Оңой" },
    timeout: 15,
    base: 100,
    hint: { en: "15s · warm-up", ru: "15с · разминка", es: "15s · calentamiento", ky: "15с · даярдануу" }
  },
  medium: {
    label: { en: "Medium", ru: "Средне", es: "Medio", ky: "Орточо" },
    timeout: 17,
    base: 150,
    hint: { en: "17s · sharper", ru: "17с · сложнее", es: "17s · más difícil", ky: "17с · кыйын" }
  },
  hard: {
    label: { en: "Hard", ru: "Сложно", es: "Difícil", ky: "Кыйын" },
    timeout: 20,
    base: 200,
    hint: { en: "20s · elite", ru: "20с · элита", es: "20s · elite", ky: "20с · элита" }
  }
};

const questionBank = {
  easy: {
    en: [
      { cat: "HTML BASICS", type: "single", q: "What does HTML stand for?", a: ["HyperText Markup Language", "High Transfer Machine Logic", "Home Tool Markup Language", "Hyperlink Text Management"], correct: 0, why: "HTML structures the content and layout of a webpage." },
      { cat: "CSS", type: "single", q: "Which property controls text color?", a: ["font-weight", "text-color", "color", "font-size"], correct: 2, why: "The color property changes the text's visual color." },
      { cat: "JAVASCRIPT", type: "boolean", q: "const variables can be reassigned later.", a: ["True", "False"], correct: 1, why: "const creates a constant reference, so it cannot be reassigned." },
      { cat: "UX", type: "multi", q: "Which are valid CSS layout methods?", a: ["Flexbox", "Grid", "SQL", "Media query"], correct: [0, 1, 3], why: "Flexbox, Grid, and media queries are all part of modern CSS layout and responsiveness." },
      { cat: "DOM", type: "single", q: "Which method selects an element by ID in JavaScript?", a: ["querySelector()", "getElementById()", "innerHTML", "style()"], correct: 1, why: "getElementById() targets a specific element by its HTML id attribute." }
    ],
    ru: [
      { cat: "HTML BASICS", type: "single", q: "Что означает HTML?", a: ["HyperText Markup Language", "High Transfer Machine Logic", "Home Tool Markup Language", "Hyperlink Text Management"], correct: 0, why: "HTML задаёт структуру и разметку веб-страницы." },
      { cat: "CSS", type: "single", q: "Какое свойство задаёт цвет текста?", a: ["font-weight", "text-color", "color", "font-size"], correct: 2, why: "Свойство color меняет визуальный цвет текста." },
      { cat: "JAVASCRIPT", type: "boolean", q: "Переменные const можно переназначать позже.", a: ["Да", "Нет"], correct: 1, why: "const создаёт неизменяемую ссылку, поэтому её нельзя переназначить." },
      { cat: "UX", type: "multi", q: "Какие методы раскладки CSS являются валидными?", a: ["Flexbox", "Grid", "SQL", "Media query"], correct: [0, 1, 3], why: "Flexbox, Grid и media queries — часть современной CSS-верстки и адаптивности." },
      { cat: "DOM", type: "single", q: "Какой метод выбирает элемент по ID в JavaScript?", a: ["querySelector()", "getElementById()", "innerHTML", "style()"], correct: 1, why: "getElementById() выбирает конкретный элемент по атрибуту id." }
    ],
    es: [
      { cat: "HTML BASICS", type: "single", q: "¿Qué significa HTML?", a: ["HyperText Markup Language", "High Transfer Machine Logic", "Home Tool Markup Language", "Hyperlink Text Management"], correct: 0, why: "HTML estructura el contenido y el diseño de una página web." },
      { cat: "CSS", type: "single", q: "¿Qué propiedad controla el color del texto?", a: ["font-weight", "text-color", "color", "font-size"], correct: 2, why: "La propiedad color cambia el color visual del texto." },
      { cat: "JAVASCRIPT", type: "boolean", q: "Las variables const pueden reasignarse después.", a: ["Verdadero", "Falso"], correct: 1, why: "const crea una referencia constante, así que no puede reasignarse." },
      { cat: "UX", type: "multi", q: "¿Cuáles son métodos válidos de maquetación CSS?", a: ["Flexbox", "Grid", "SQL", "Media query"], correct: [0, 1, 3], why: "Flexbox, Grid y media queries son parte del diseño y la adaptabilidad modernos." },
      { cat: "DOM", type: "single", q: "¿Qué método selecciona un elemento por ID en JavaScript?", a: ["querySelector()", "getElementById()", "innerHTML", "style()"], correct: 1, why: "getElementById() apunta a un elemento específico por su atributo id." }
    ],
    ky: [
      { cat: "HTML BASICS", type: "single", q: "HTML кандай сөздүн кыскартмасы?", a: ["HyperText Markup Language", "High Transfer Machine Logic", "Home Tool Markup Language", "Hyperlink Text Management"], correct: 0, why: "HTML веб-баракчаны түзүү жана мазмунду түзүү үчүн колдонулат." },
      { cat: "CSS", type: "single", q: "Тексттин түсүн кайсы қасиет өзгөртөт?", a: ["font-weight", "text-color", "color", "font-size"], correct: 2, why: "color қасиети тексттин көрүнүш түсүн өзгөртөт." },
      { cat: "JAVASCRIPT", type: "boolean", q: "const өзгөрмөлөрүнө кийинкисинде кайра белгилөө мүмкүн.", a: ["Ооба", "Жок"], correct: 1, why: "const туруктуу шилтеме түзүп, кайра белгилөөсүз калат." },
      { cat: "UX", type: "multi", q: "Кайсы CSS жайылтуунун туура ыкмалары бар?", a: ["Flexbox", "Grid", "SQL", "Media query"], correct: [0, 1, 3], why: "Flexbox, Grid жана media queries заманбап CSS жайылтуунун негизги бөлүктөрү." },
      { cat: "DOM", type: "single", q: "JavaScriptте ID боюнча элементти кайсы метод тандайт?", a: ["querySelector()", "getElementById()", "innerHTML", "style()"], correct: 1, why: "getElementById() HTMLдагы id атрибуту боюнча белгилүү элементти табат." }
    ]
  },
  medium: {
    en: [
      { cat: "CSS", type: "single", q: "Which CSS rule makes a box centered both horizontally and vertically with Flexbox?", a: ["display:flex; justify-content:center; align-items:center;", "position:absolute; left:50%; top:50%;", "float:center;", "transform: center;"], correct: 0, why: "Flexbox with justify-content and align-items centers the item in both axes." },
      { cat: "JAVASCRIPT", type: "boolean", q: "A closure allows an inner function to access variables from its parent scope.", a: ["True", "False"], correct: 0, why: "Closures preserve access to outer lexical scope even after the outer function returns." },
      { cat: "HTML", type: "single", q: "Which attribute links a webpage to its style sheet?", a: ["src", "href", "rel", "class"], correct: 2, why: "The rel attribute is often set to stylesheet when linking a CSS file." },
      { cat: "JAVASCRIPT", type: "multi", q: "Which array methods return a new array without mutating the original?", a: ["map()", "filter()", "push()", "forEach()"], correct: [0, 1], why: "map() and filter() create new arrays while leaving the original unchanged." },
      { cat: "ACCESSIBILITY", type: "single", q: "Why are semantic HTML tags important?", a: ["They make content invisible", "They improve structure and accessibility", "They only affect colors", "They slow down rendering"], correct: 1, why: "Semantic elements give meaning to content and improve accessibility and SEO." }
    ],
    ru: [
      { cat: "CSS", type: "single", q: "Какое правило CSS центрирует блок по горизонтали и вертикали через Flexbox?", a: ["display:flex; justify-content:center; align-items:center;", "position:absolute; left:50%; top:50%;", "float:center;", "transform: center;"], correct: 0, why: "Flexbox с justify-content и align-items центрирует элемент по обеим осям." },
      { cat: "JAVASCRIPT", type: "boolean", q: "Замыкание позволяет вложенной функции получать доступ к переменным родительской области видимости.", a: ["Да", "Нет"], correct: 0, why: "Замыкания сохраняют доступ к внешней лексической области даже после возврата внешней функции." },
      { cat: "HTML", type: "single", q: "Какой атрибут связывает страницу со стилевым файлом?", a: ["src", "href", "rel", "class"], correct: 2, why: "Атрибут rel часто задаётся как stylesheet при подключении CSS." },
      { cat: "JAVASCRIPT", type: "multi", q: "Какие методы массива возвращают новый массив, не изменяя исходный?", a: ["map()", "filter()", "push()", "forEach()"], correct: [0, 1], why: "map() и filter() создают новые массивы, не меняя исходный." },
      { cat: "ACCESSIBILITY", type: "single", q: "Почему семантические HTML-теги важны?", a: ["Они делают содержимое невидимым", "Они улучшают структуру и доступность", "Они влияют только на цвета", "Они замедляют рендеринг"], correct: 1, why: "Семантические элементы придают смысл контенту и улучшают доступность и SEO." }
    ],
    es: [
      { cat: "CSS", type: "single", q: "¿Qué regla CSS centra una caja horizontal y verticalmente con Flexbox?", a: ["display:flex; justify-content:center; align-items:center;", "position:absolute; left:50%; top:50%;", "float:center;", "transform: center;"], correct: 0, why: "Flexbox con justify-content y align-items centra el elemento en ambos ejes." },
      { cat: "JAVASCRIPT", type: "boolean", q: "Un cierre permite que una función interna acceda a variables del ámbito padre.", a: ["Verdadero", "Falso"], correct: 0, why: "Los cierres conservan acceso al ámbito léxico externo incluso después de que la función externa regrese." },
      { cat: "HTML", type: "single", q: "¿Qué atributo enlaza una página web con su hoja de estilos?", a: ["src", "href", "rel", "class"], correct: 2, why: "El atributo rel suele establecerse como stylesheet al enlazar un archivo CSS." },
      { cat: "JAVASCRIPT", type: "multi", q: "¿Qué métodos de array devuelven un nuevo array sin mutar el original?", a: ["map()", "filter()", "push()", "forEach()"], correct: [0, 1], why: "map() y filter() crean nuevos arrays sin cambiar el original." },
      { cat: "ACCESSIBILITY", type: "single", q: "¿Por qué son importantes las etiquetas semánticas HTML?", a: ["Las hacen invisible", "Mejoran la estructura y la accesibilidad", "Solo afectan a los colores", "Ralentizan el renderizado"], correct: 1, why: "Los elementos semánticos dan significado al contenido y mejoran la accesibilidad y el SEO." }
    ],
    ky: [
      { cat: "CSS", type: "single", q: "Flexbox аркылуу блок кантип горизонталдык жана вертикалдык борборго келтирилет?", a: ["display:flex; justify-content:center; align-items:center;", "position:absolute; left:50%; top:50%;", "float:center;", "transform: center;"], correct: 0, why: "Flexbox менен justify-content жана align-items элементти эки огун да борборго келтирет." },
      { cat: "JAVASCRIPT", type: "boolean", q: "Жабык функция ички функцияга атанын өзгөрмөлөрүнө жетише алабы?", a: ["Ооба", "Жок"], correct: 0, why: "Жабык функция сырттагы лексикалык чөйрөгө жетүү мүмкүнчүлүгүн сактайт." },
      { cat: "HTML", type: "single", q: "Стиль файл менен веб-страницаны кайсы атрибут байланыштырат?", a: ["src", "href", "rel", "class"], correct: 2, why: "rel атрибуту CSS шилтемеси менен көбүнчө stylesheet катары белгиленет." },
      { cat: "JAVASCRIPT", type: "multi", q: "Кайсы массив методдору жаңы массивди кайтарат, ал эми баштапкы массивди өзгөртпөйт?", a: ["map()", "filter()", "push()", "forEach()"], correct: [0, 1], why: "map() жана filter() жаңы массивди кайтарат, баштапкы массивди өзгөртпөйт." },
      { cat: "ACCESSIBILITY", type: "single", q: "HTML семантикалык белгилер эмне үчүн маанилүү?", a: ["Аларды жашырып коюшат", "Структураны жана жеткиликтүүлүктү жакшыртат", "Тек түсө гана таасир этет", "Рендерингди баяулатат"], correct: 1, why: "Семантикалык белгилер мазмунга маанини берет жана жеткиликтүүлүктү жакшыртат." }
    ]
  },
  hard: {
    en: [
      { cat: "JAVASCRIPT", type: "single", q: "What does event.preventDefault() do?", a: ["Stops the browser from loading the page", "Prevents the default browser action for an event", "Pauses all timers", "Removes the DOM node"], correct: 1, why: "preventDefault() blocks an event's default behavior, such as form submission or link navigation." },
      { cat: "CSS", type: "boolean", q: "CSS custom properties (variables) can be used in multiple places and updated dynamically.", a: ["True", "False"], correct: 0, why: "Custom properties allow reusable values and can be changed at runtime." },
      { cat: "JS PERFORMANCE", type: "multi", q: "Which are common ways to optimize front-end performance?", a: ["Lazy loading images", "Minifying assets", "Using inline CSS for every element", "Caching static resources"], correct: [0, 1, 3], why: "Lazy loading, minifying, and caching improve loading speed and reduce unnecessary work." },
      { cat: "ASYNCHRONOUS JS", type: "single", q: "Which keyword is used to wait for a promise-based function in a cleaner synchronous style?", a: ["await", "continue", "yield", "return"], correct: 0, why: "await pauses execution in async functions until a Promise resolves." },
      { cat: "WEB ARCHITE", type: "single", q: "What is the main purpose of a design system?", a: ["To replace JavaScript", "To keep UI patterns consistent and reusable", "To remove CSS from a project", "To hide semantic HTML"], correct: 1, why: "Design systems improve consistency, speed, and maintainability across interfaces." }
    ],
    ru: [
      { cat: "JAVASCRIPT", type: "single", q: "Что делает event.preventDefault()?", a: ["Останавливает загрузку страницы", "Предотвращает стандартное действие браузера для события", "Приостанавливает все таймеры", "Удаляет DOM-узел"], correct: 1, why: "preventDefault() блокирует стандартное поведение события, например отправку формы или переход по ссылке." },
      { cat: "CSS", type: "boolean", q: "Пользовательские свойства CSS (переменные) можно использовать в нескольких местах и обновлять динамически.", a: ["Да", "Нет"], correct: 0, why: "Пользовательские свойства позволяют переиспользовать значения и менять их во время выполнения." },
      { cat: "JS PERFORMANCE", type: "multi", q: "Какие методы обычно улучшают производительность фронтенда?", a: ["Ленивая загрузка изображений", "Минификация ресурсов", "Использование инлайн CSS для каждого элемента", "Кэширование статических ресурсов"], correct: [0, 1, 3], why: "Ленивая загрузка, минификация и кэширование ускоряют загрузку и снижают лишнюю работу." },
      { cat: "ASYNCHRONOUS JS", type: "single", q: "Какое ключевое слово используется для ожидания promise-функции в более чистом синхронном стиле?", a: ["await", "continue", "yield", "return"], correct: 0, why: "await приостанавливает выполнение в async-функции до разрешения Promise." },
      { cat: "WEB ARCHITE", type: "single", q: "Какова основная цель дизайн-системы?", a: ["Заменить JavaScript", "Поддерживать единообразие и переиспользуемость UI-паттернов", "Убрать CSS из проекта", "Скрыть семантический HTML"], correct: 1, why: "Дизайн-системы повышают согласованность, скорость и поддерживаемость интерфейсов." }
    ],
    es: [
      { cat: "JAVASCRIPT", type: "single", q: "¿Qué hace event.preventDefault()?", a: ["Detiene la carga de la página", "Evita la acción predeterminada del navegador para un evento", "Pausa todos los temporizadores", "Elimina el nodo DOM"], correct: 1, why: "preventDefault() bloquea el comportamiento predeterminado del evento, como el envío de formularios o la navegación por enlaces." },
      { cat: "CSS", type: "boolean", q: "Las propiedades personalizadas de CSS (variables) pueden usarse en varios sitios y actualizarse dinámicamente.", a: ["Verdadero", "Falso"], correct: 0, why: "Las propiedades personalizadas permiten reutilizar valores y cambiarlos en tiempo de ejecución." },
      { cat: "JS PERFORMANCE", type: "multi", q: "¿Cuáles son formas comunes de optimizar el rendimiento front-end?", a: ["Carga diferida de imágenes", "Minificación de recursos", "Uso de CSS en línea para cada elemento", "Caché de recursos estáticos"], correct: [0, 1, 3], why: "La carga diferida, la minificación y la caché mejoran la velocidad de carga y reducen el trabajo innecesario." },
      { cat: "ASYNCHRONOUS JS", type: "single", q: "¿Qué palabra clave se usa para esperar una función basada en promesas con un estilo más limpio y síncrono?", a: ["await", "continue", "yield", "return"], correct: 0, why: "await pausa la ejecución en funciones async hasta que una Promise se resuelve." },
      { cat: "WEB ARCHITE", type: "single", q: "¿Cuál es el objetivo principal de un sistema de diseño?", a: ["Reemplazar JavaScript", "Mantener patrones de UI consistentes y reutilizables", "Eliminar CSS del proyecto", "Ocultar HTML semántico"], correct: 1, why: "Los sistemas de diseño mejoran la consistencia, la velocidad y la mantenibilidad de las interfaces." }
    ],
    ky: [
      { cat: "JAVASCRIPT", type: "single", q: "event.preventDefault() эмне кылат?", a: ["Барактын жүктөлүшүн токтотот", "Иш-чаранын демейки браузер аракетин бөгөттөйт", "Бардык таймерлерди токтотот", "DOM түйүнүн алып таштайт"], correct: 1, why: "preventDefault() иш-чаранын демейки жүрүшүн бөгөттөйт, мисалы, форманы жөнөтүү же шилтемеге өтуудөн." },
      { cat: "CSS", type: "boolean", q: "CSS жеке касиеттери (өзгөрмөлөр) бир нече жерде колдонулуп, динамикалык түрдө жаңыртылышы мүмкүн.", a: ["Ооба", "Жок"], correct: 0, why: "Жеке касиеттер кыймылдуу ыкмада кайталанган маанилерди колдонууга мүмкүндүк берет." },
      { cat: "JS PERFORMANCE", type: "multi", q: "Фронтенддин прадуктивдуулугун жогорулатуу үчүн кайсы ыкмалар кеңири колдонулат?", a: ["Сүрөттөрдүн кечиктирилген жүктөлүшү", "Ресурстарды минимизациялоо", "Ар элемент үчүн inline CSS колдонуу", "Статикалык ресурстарды кэшөө"], correct: [0, 1, 3], why: "Кечиктирилген жүктөө, минимизациялоо жана кэшөө жүктөлүүнү тездетип, керексиз иштерди азайтат." },
      { cat: "ASYNCHRONOUS JS", type: "single", q: "Promise негизиндеги функцияны тазалык менен синхрондук түрдө күтүү үчүн кайсы сөз колдонулат?", a: ["await", "continue", "yield", "return"], correct: 0, why: "await async функциясында Promise чечиле чейин аткарууну токтотот." },
      { cat: "WEB ARCHITE", type: "single", q: "Дизайн системанын негизги максаты эмне?", a: ["JavaScriptти алмаштыруу", "UI үлгүлөрүн туруктуу жана кайра колдонулуучу кылуу", "CSSти проекттен алып салуу", "Семантикалык HTMLди жашыруу"], correct: 1, why: "Дизайн системалары интерфейстердин туруктуулугун, ылдамдыгын жана жеткиликтүүлүгүн жогорулатат." }
    ]
  }
};

const translations = {
  en: {
    pill: "QUICK BRAIN BREAK",
    welcomeEyebrow: "READY TO CHALLENGE YOURSELF?",
    welcomeTitle: "Small quiz.<br><em>Big brain energy.</em>",
    welcomeText: "Pick your difficulty, race the timer, and stack a streak of smart answers.",
    start: "Let's play →",
    chips: ["⚡ 15–20s", "✧ 5 questions", "♥ Streak bonus"],
    resultEyebrow: "QUIZ COMPLETE",
    footer: "Made with curiosity & a little JavaScript ✨",
    restart: "Play again ↻",
    prompt: "QUESTION",
    points: "pts",
    streak: "Streak:",
    hintStatus: "Hints left",
    hint: "💡 Hint",
    fifty: "50/50",
    nextQuestion: "Next question →",
    seeResult: "See my result →",
    submitAnswer: "Submit answer",
    pickAtLeast: "Pick at least one answer to submit.",
    correct: "✨ Correct! +{points} pts · {reason}",
    wrong: "Not quite. {reason}",
    timeout: "⏱️ Time's up! {reason}",
    hintMessage: "💡 Hint: {reason}",
    fiftyUsed: "🧠 50/50 used — the right answer is closer now.",
    fiftyUsedBtn: "50/50 used",
    finalLabels: { correct: "Correct", score: "Score", accuracy: "Accuracy", time: "Time" },
    resultTitles: { perfect: "Perfect score! 🎉", excellent: "Excellent work! ✨", strong: "Strong run! 🚀", retry: "Keep learning! 🌱" },
    resultTexts: {
      perfect: "You nailed every challenge — this was a flawless run.",
      excellent: "You have serious web-dev instincts. Keep stacking those streaks!",
      strong: "Solid effort. A few more rounds and you’ll be unstoppable.",
      retry: "Every expert started with a first attempt. Try again and build the streak!"
    }
  },
  ru: {
    pill: "БЫСТРЫЙ МОЗГОВОЙ БРЕЙК",
    welcomeEyebrow: "ГОТОВЫ К ВЫЗОВУ?",
    welcomeTitle: "Небольшой квиз.<br><em>Большой заряд для мозга.</em>",
    welcomeText: "Выберите сложность, гоняйте таймер и накапливайте серию правильных ответов.",
    start: "Начать →",
    chips: ["⚡ 15–20с", "✧ 5 вопросов", "♥ Бонус за серию"],
    resultEyebrow: "КВИЗ ЗАВЕРШЁН",
    footer: "Сделано с любопытством и каплей JavaScript ✨",
    restart: "Играть снова ↻",
    prompt: "ВОПРОС",
    points: "очк.",
    streak: "Серия:",
    hintStatus: "Подсказки",
    hint: "💡 Подсказка",
    fifty: "50/50",
    nextQuestion: "Следующий вопрос →",
    seeResult: "Посмотреть результат →",
    submitAnswer: "Ответить",
    pickAtLeast: "Выберите хотя бы один вариант ответа.",
    correct: "✨ Верно! +{points} очк. · {reason}",
    wrong: "Почти. {reason}",
    timeout: "⏱️ Время вышло! {reason}",
    hintMessage: "💡 Подсказка: {reason}",
    fiftyUsed: "🧠 50/50 уже использовано — правильный ответ теперь ближе.",
    fiftyUsedBtn: "50/50 использовано",
    finalLabels: { correct: "Верно", score: "Счёт", accuracy: "Точность", time: "Время" },
    resultTitles: { perfect: "Идеальный результат! 🎉", excellent: "Отличная работа! ✨", strong: "Сильный результат! 🚀", retry: "Продолжай учиться! 🌱" },
    resultTexts: {
      perfect: "Вы справились со всеми задачами — это безупречный результат.",
      excellent: "У вас отличное чувство веб-разработки. Продолжайте набирать серию!",
      strong: "Хорошая работа. Ещё несколько раундов — и вы станете непобедимы.",
      retry: "Каждый эксперт начинал с первой попытки. Попробуйте ещё раз и соберите серию!"
    }
  },
  es: {
    pill: "DESCANSO RAPIDO DEL CEREBRO",
    welcomeEyebrow: "¿LISTO PARA RETARTE?",
    welcomeTitle: "Pequeño quiz.<br><em>Gran energía cerebral.</em>",
    welcomeText: "Elige tu nivel, corre contra el reloj y acumula una racha de respuestas correctas.",
    start: "Jugar →",
    chips: ["⚡ 15–20s", "✧ 5 preguntas", "♥ Bonificación por racha"],
    resultEyebrow: "QUIZ COMPLETADO",
    footer: "Hecho con curiosidad y un toque de JavaScript ✨",
    restart: "Jugar otra vez ↻",
    prompt: "PREGUNTA",
    points: "pts",
    streak: "Racha:",
    hintStatus: "Pistas",
    hint: "💡 Pista",
    fifty: "50/50",
    nextQuestion: "Siguiente →",
    seeResult: "Ver resultado →",
    submitAnswer: "Enviar respuesta",
    pickAtLeast: "Elige al menos una respuesta para enviar.",
    correct: "✨ ¡Correcto! +{points} pts · {reason}",
    wrong: "Casi. {reason}",
    timeout: "⏱️ ¡Se acabó el tiempo! {reason}",
    hintMessage: "💡 Pista: {reason}",
    fiftyUsed: "🧠 50/50 ya usado: la respuesta correcta está más cerca.",
    fiftyUsedBtn: "50/50 usado",
    finalLabels: { correct: "Correctas", score: "Puntuación", accuracy: "Precisión", time: "Tiempo" },
    resultTitles: { perfect: "¡Puntuación perfecta! 🎉", excellent: "¡Excelente trabajo! ✨", strong: "¡Gran esfuerzo! 🚀", retry: "¡Sigue aprendiendo! 🌱" },
    resultTexts: {
      perfect: "Lo resolviste todo: fue una ejecución impecable.",
      excellent: "Tienes muy buen instinto para desarrollo web. ¡Sigue sumando rachas!",
      strong: "Buen esfuerzo. Un par de rondas más y serás imparable.",
      retry: "Cada experto empezó con un primer intento. ¡Inténtalo otra vez y crea la racha!"
    }
  },
  ky: {
    pill: "КЫСКА ОЙНОЛУУ",
    welcomeEyebrow: "ӨЗӨҢҮЗДҮ СЫНАП КӨРҮҢҮЗБҮ?",
    welcomeTitle: "Кичинекей викторина.<br><em>Ой жүгүртүп, мээни жандандырат.</em>",
    welcomeText: "Кыйынчылыгын тандап, таймерге каршы жарышыңыз жана туура жооптордун сериясын түзүңүз.",
    start: "Ойноо →",
    chips: ["⚡ 15–20с", "✧ 5 суроо", "♥ Серия бонусу"],
    resultEyebrow: "ВИКТОРИНА БУТТУ",
    footer: "Кызыгуу менен JavaScriptтин аздап бөлүгү менен жасалган ✨",
    restart: "Кайра ойноо ↻",
    prompt: "СУРОО",
    points: "үн",
    streak: "Серия:",
    hintStatus: "Кеңеш",
    hint: "💡 Кеңеш",
    fifty: "50/50",
    nextQuestion: "Кийинки суроо →",
    seeResult: "Натыйжаны көрүү →",
    submitAnswer: "Жооп берүү",
    pickAtLeast: "Жооп берүү үчүн жок дегенде бир вариант тандаңыз.",
    correct: "✨ Дурыс! +{points} үн · {reason}",
    wrong: "Жакын. {reason}",
    timeout: "⏱️ Убакыт бүттү! {reason}",
    hintMessage: "💡 Кеңеш: {reason}",
    fiftyUsed: "🧠 50/50 колдонулду — туура жооп азыр алда жакын.",
    fiftyUsedBtn: "50/50 колдонулду",
    finalLabels: { correct: "Дурыс", score: "Ұпай", accuracy: "Тактык", time: "Убакыт" },
    resultTitles: { perfect: "Идеалдуу нәтиже! 🎉", excellent: "Өтө жакшы! ✨", strong: "Күчтүү нәтиже! 🚀", retry: "Өнүгүүнү улантуу! 🌱" },
    resultTexts: {
      perfect: "Бардык тапшырмаларды ийгиликтүү аткардыңыз — бул үзгүлтүксүз жүрүш.",
      excellent: "Сизде веб-иштеп чыгуунун жогорку интуициясы бар. Серияңызды улантыңыз!",
      strong: "Жаксы жумуш. Келгиле, дагы бир нече раунддан кийин сиз жеңилүүчү болмайсыз.",
      retry: "Ар бир адис биринчи аракеттен башталат. Кайра аракет кылып, серия түзүңүз!"
    }
  }
};

const $ = id => document.getElementById(id);

const state = {
  level: "easy",
  language: "en",
  questions: [],
  index: 0,
  score: 0,
  correct: 0,
  streak: 0,
  gameStart: 0,
  questionStart: 0,
  timerId: null,
  selected: [],
  currentQuestion: null,
  isAnswered: false,
  hintsLeft: 2,
  halfUsed: false
};

const shuffle = items => {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const arraysEqual = (a, b) => a.length === b.length && a.every((value, index) => value === b[index]);

const getLocalizedQuestionBank = (level = state.level, language = state.language) => {
  const bank = questionBank[level];
  return bank?.[language] || bank?.en || [];
};

const getLevelLabel = level => levelConfig[level].label[state.language] || levelConfig[level].label.en;
const getLevelHint = level => levelConfig[level].hint[state.language] || levelConfig[level].hint.en;

const pickQuestions = (level = state.level, language = state.language) => shuffle(getLocalizedQuestionBank(level, language)).slice(0, 5);

function applyTranslations() {
  const t = translations[state.language];
  document.documentElement.lang = state.language;
  $("langPill").textContent = t.pill;
  $("welcomeEyebrow").textContent = t.welcomeEyebrow;
  $("welcomeTitle").innerHTML = t.welcomeTitle;
  $("welcomeText").textContent = t.welcomeText;
  $("start").textContent = t.start;
  $("chipOne").textContent = t.chips[0];
  $("chipTwo").textContent = t.chips[1];
  $("chipThree").textContent = t.chips[2];
  $("resultEyebrow").textContent = t.resultEyebrow;
  $("footerText").textContent = t.footer;
  $("hintBtn").textContent = t.hint;
  $("fiftyBtn").textContent = t.fifty;
  $("restart").textContent = t.restart || "Play again ↻";
  $("next").textContent = state.index === state.questions.length - 1 ? t.seeResult : t.nextQuestion;
  document.querySelectorAll(".lang-btn").forEach(button => {
    button.classList.toggle("is-selected", button.dataset.lang === state.language);
  });
  syncLevelButtonLabels();
}

function syncLevelButtonLabels() {
  document.querySelectorAll(".level-btn").forEach(button => {
    const level = button.dataset.level;
    const label = button.querySelector("span");
    const hint = button.querySelector("small");
    label.textContent = getLevelLabel(level);
    hint.textContent = getLevelHint(level);
  });
}

const resetButtons = () => {
  const t = translations[state.language];
  $("fiftyBtn").disabled = false;
  $("fiftyBtn").textContent = t.fifty;
  $("hintBtn").disabled = false;
  $("hintBtn").textContent = t.hint;
  document.querySelectorAll(".option").forEach(option => {
    option.style.display = "flex";
  });
};

function startGame() {
  state.level = document.querySelector(".level-btn.is-selected")?.dataset.level || "easy";
  state.questions = pickQuestions(state.level, state.language);
  state.index = 0;
  state.score = 0;
  state.correct = 0;
  state.streak = 0;
  state.hintsLeft = 2;
  state.halfUsed = false;
  state.gameStart = Date.now();

  $("welcome").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  $("result").classList.add("hidden");
  $("result").classList.remove("show");
  resetButtons();
  showQuestion();
}

function showQuestion() {
  clearInterval(state.timerId);
  state.selected = [];
  state.isAnswered = false;
  state.halfUsed = false;
  state.currentQuestion = state.questions[state.index];
  state.questionStart = Date.now();

  const levelSettings = levelConfig[state.level];
  const timeLimit = levelSettings.timeout;
  const t = translations[state.language];

  $("levelBadge").textContent = getLevelLabel(state.level).toUpperCase();
  $("progressText").textContent = `${t.prompt} ${state.index + 1} / ${state.questions.length}`;
  $("scoreLive").textContent = `${state.score} ${t.points}`;
  $("bar").style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
  $("category").textContent = state.currentQuestion.cat;
  $("q").textContent = state.currentQuestion.q;
  $("feedback").textContent = "";
  $("feedback").className = "";
  $("next").disabled = true;
  $("next").textContent = state.index === state.questions.length - 1 ? t.seeResult : t.nextQuestion;
  $("timer").textContent = `${timeLimit}s`;
  $("streak").textContent = `${t.streak} ${state.streak}`;
  $("hintStatus").textContent = `${t.hintStatus}: ${state.hintsLeft}`;

  resetButtons();
  renderAnswers(state.currentQuestion);

  state.timerId = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.questionStart) / 1000);
    const remaining = timeLimit - elapsed;

    if (remaining <= 0) {
      handleTimeout();
      return;
    }

    $("timer").textContent = `${remaining}s`;
  }, 200);
}

function renderAnswers(question) {
  const answerMarkup = question.a
    .map((option, index) => `<button class="option" data-index="${index}" type="button"><span>${question.type === "multi" ? "✓" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index]}</span>${option}</button>`)
    .join("");

  $("answers").innerHTML = answerMarkup;

  document.querySelectorAll(".option").forEach(btn => {
    const index = Number(btn.dataset.index);
    btn.addEventListener("click", () => {
      if (question.type === "multi") {
        toggleMulti(index, btn);
      } else {
        selectSingle(index);
      }
    });
  });

  if (question.type === "multi") {
    const submit = document.createElement("button");
    submit.type = "button";
    submit.className = "submit-btn";
    submit.textContent = translations[state.language].submitAnswer;
    submit.addEventListener("click", submitMultiAnswer);
    $("answers").appendChild(submit);
  }
}

function toggleMulti(index, btn) {
  const selected = state.selected.includes(index);

  if (selected) {
    state.selected = state.selected.filter(item => item !== index);
    btn.classList.remove("selected");
  } else {
    state.selected = [...state.selected, index];
    btn.classList.add("selected");
  }
}

function selectSingle(index) {
  if (state.isAnswered) return;

  state.selected = [index];
  document.querySelectorAll(".option").forEach((option, optIndex) => {
    option.classList.toggle("selected", optIndex === index);
    option.disabled = true;
  });
  evaluateAnswer();
}

function submitMultiAnswer() {
  if (state.isAnswered) return;
  if (!state.selected.length) {
    $("feedback").textContent = translations[state.language].pickAtLeast;
    $("feedback").className = "warning";
    return;
  }

  document.querySelectorAll(".option").forEach(option => option.disabled = true);
  evaluateAnswer();
}

function evaluateAnswer() {
  if (state.isAnswered) return;
  state.isAnswered = true;
  clearInterval(state.timerId);

  const question = state.currentQuestion;
  const isCorrect = question.type === "multi"
    ? arraysEqual([...state.selected].sort(), [...question.correct].sort())
    : state.selected[0] === question.correct;

  const elapsed = Math.max(0, Math.round((Date.now() - state.questionStart) / 1000));
  const timeLeft = Math.max(0, levelConfig[state.level].timeout - elapsed);
  const t = translations[state.language];

  let message = "";
  let className = "";

  if (isCorrect) {
    state.correct += 1;
    state.streak += 1;

    const base = levelConfig[state.level].base;
    const speedyBonus = Math.round((timeLeft / levelConfig[state.level].timeout) * base * 0.35);
    const streakBonus = state.streak > 1 ? state.streak * 20 : 0;
    const gained = base + speedyBonus + streakBonus;

    state.score += gained;
    message = t.correct.replace("{points}", gained).replace("{reason}", question.why);
    className = "correct";

    $("streak").textContent = `${t.streak} ${state.streak}`;
  } else {
    state.streak = 0;
    $("streak").textContent = `${t.streak} 0`;
    message = t.wrong.replace("{reason}", question.why);
    className = "wrong";
  }

  document.querySelectorAll(".option").forEach((option, optIndex) => {
    if (question.type === "multi") {
      if (question.correct.includes(optIndex)) {
        option.classList.add("correct");
      } else if (state.selected.includes(optIndex)) {
        option.classList.add("wrong");
      }
    } else {
      if (optIndex === question.correct) {
        option.classList.add("correct");
      } else if (optIndex === state.selected[0]) {
        option.classList.add("wrong");
      }
    }
    option.disabled = true;
  });

  $("feedback").textContent = message;
  $("feedback").className = className;
  $("scoreLive").textContent = `${state.score} ${t.points}`;
  $("next").disabled = false;
  $("quiz").classList.add(`${className}-flash`);
  setTimeout(() => $("quiz").classList.remove(`${className}-flash`), 420);
}

function handleTimeout() {
  if (state.isAnswered) return;
  state.isAnswered = true;
  clearInterval(state.timerId);

  state.streak = 0;
  const t = translations[state.language];
  $("streak").textContent = `${t.streak} 0`;

  const question = state.currentQuestion;
  document.querySelectorAll(".option").forEach((option, optIndex) => {
    if (question.type === "multi") {
      if (question.correct.includes(optIndex)) option.classList.add("correct");
    } else if (optIndex === question.correct) {
      option.classList.add("correct");
    }
    option.disabled = true;
  });

  $("feedback").textContent = t.timeout.replace("{reason}", question.why);
  $("feedback").className = "wrong";
  $("next").disabled = false;
  $("quiz").classList.add("wrong-flash");
  setTimeout(() => $("quiz").classList.remove("wrong-flash"), 420);
}

function useHint() {
  if (state.isAnswered || state.hintsLeft <= 0) return;

  state.hintsLeft -= 1;
  const t = translations[state.language];
  $("hintStatus").textContent = `${t.hintStatus}: ${state.hintsLeft}`;

  const question = state.currentQuestion;
  const removable = question.type === "multi"
    ? question.a.map((_, index) => index).filter(index => !question.correct.includes(index))
    : question.a.map((_, index) => index).filter(index => index !== question.correct);

  const toRemove = shuffle(removable).slice(0, 2);
  document.querySelectorAll(".option").forEach((option, index) => {
    if (toRemove.includes(index)) option.style.display = "none";
  });

  $("feedback").textContent = t.hintMessage.replace("{reason}", question.why);
  $("feedback").className = "hint";
}

function useFifty() {
  if (state.isAnswered || state.halfUsed) return;

  state.halfUsed = true;
  const question = state.currentQuestion;
  const removable = question.type === "multi"
    ? question.a.map((_, index) => index).filter(index => !question.correct.includes(index))
    : question.a.map((_, index) => index).filter(index => index !== question.correct);

  const toHide = shuffle(removable).slice(0, question.type === "boolean" ? 1 : 2);
  document.querySelectorAll(".option").forEach((option, index) => {
    if (toHide.includes(index)) option.style.display = "none";
  });

  const t = translations[state.language];
  $("feedback").textContent = t.fiftyUsed;
  $("feedback").className = "hint";
  $("fiftyBtn").disabled = true;
  $("fiftyBtn").textContent = t.fiftyUsedBtn;
}

function nextQuestion() {
  state.index += 1;
  if (state.index < state.questions.length) {
    showQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  clearInterval(state.timerId);
  const elapsedMs = Date.now() - state.gameStart;
  const percentage = Math.round((state.correct / state.questions.length) * 100);
  const t = translations[state.language];

  $("quiz").classList.add("hidden");
  $("result").classList.remove("hidden");
  $("result").classList.add("show");

  $("finalTitle").textContent = percentage === 100
    ? t.resultTitles.perfect
    : percentage >= 70
      ? t.resultTitles.excellent
      : percentage >= 45
        ? t.resultTitles.strong
        : t.resultTitles.retry;

  $("finalText").textContent = percentage === 100
    ? t.resultTexts.perfect
    : percentage >= 70
      ? t.resultTexts.excellent
      : percentage >= 45
        ? t.resultTexts.strong
        : t.resultTexts.retry;

  $("finalScore").textContent = `${state.correct}/${state.questions.length}`;
  $("finalPoints").textContent = state.score;
  $("finalPercent").textContent = `${percentage}%`;
  $("finalTime").textContent = `${(elapsedMs / 1000).toFixed(1)}s`;
  $("finalLabelCorrect").textContent = t.finalLabels.correct;
  $("finalLabelScore").textContent = t.finalLabels.score;
  $("finalLabelAccuracy").textContent = t.finalLabels.accuracy;
  $("finalLabelTime").textContent = t.finalLabels.time;
}

function resetToWelcome() {
  $("result").classList.add("hidden");
  $("result").classList.remove("show");
  $("quiz").classList.add("hidden");
  $("welcome").classList.remove("hidden");

  document.querySelectorAll(".level-btn").forEach((button, index) => {
    button.classList.toggle("is-selected", index === 0);
  });
  state.level = "easy";
}

document.querySelectorAll(".level-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".level-btn").forEach(btn => {
      btn.classList.toggle("is-selected", btn === button);
    });
    state.level = button.dataset.level;
  });
});

document.querySelectorAll(".lang-btn").forEach(button => {
  button.addEventListener("click", () => {
    state.language = button.dataset.lang;
    applyTranslations();

    if ($("welcome").classList.contains("hidden")) {
      const currentIndex = state.index;
      state.questions = pickQuestions(state.level, state.language);
      state.index = Math.min(currentIndex, state.questions.length - 1);
      if (!$("result").classList.contains("hidden")) {
        finishGame();
      } else {
        showQuestion();
      }
    }
  });
});

$("start").addEventListener("click", startGame);
$("next").addEventListener("click", nextQuestion);
$("restart").addEventListener("click", resetToWelcome);
$("hintBtn").addEventListener("click", useHint);
$("fiftyBtn").addEventListener("click", useFifty);

applyTranslations();
syncLevelButtonLabels();