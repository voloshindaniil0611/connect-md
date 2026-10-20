// Товары каталога. Чтобы поменять цену, цвет или модель — правьте этот файл.
//
// ВНИМАНИЕ: цены ЧЕРНОВЫЕ. Взяты с официальных сайтов Apple и Samsung (цены в США)
// как ориентир, реальные цены магазина CONNECT нужно получить у заказчика.
//
// Исключение — павербанки XO и Blackview Tab 7 Pro: цены взяты из сторис магазина
// (400 и 600 руб. ПМР за павербанки, 3200 руб. за планшет),
// пересчитаны в доллары по курсу ~16,1 руб. за $.
//
// Как считается цена: base + надбавки выбранных вариантов (поле add).
// base: null — на сайте пишется «Цена по запросу».
// У цвета может быть своя картинка (img).

const CATEGORIES = [
  { id: 'all', label: 'Все' },
  { id: 'iphone', label: 'iPhone' },
  { id: 'samsung', label: 'Samsung' },
  { id: 'mac', label: 'MacBook' },
  { id: 'ipad', label: 'Планшеты' },
  { id: 'watch', label: 'Часы' },
  { id: 'audio', label: 'Наушники' },
  { id: 'chargers', label: 'Зарядки и кабели' },
  { id: 'power', label: 'Павербанки' },
  { id: 'car', label: 'Для авто' },
];

const IPHONE_18_PRO_COLORS = [
  { label: 'Чёрный', hex: '#2B2B2E', img: 'assets/catalog/i18pro-black.webp' },
  { label: 'Бордовый', hex: '#5B2026', img: 'assets/catalog/i18pro-burgundy.webp' },
  { label: 'Ледяной голубой', hex: '#A9C3DA', img: 'assets/catalog/i18pro-glacier.webp' },
  { label: 'Серебристый', hex: '#E4E4E2', img: 'assets/catalog/i18pro-silver.webp' },
];

const PRODUCTS = [
  {
    id: 'iphone-18-pro',
    category: 'iphone',
    name: 'iPhone 18 Pro',
    base: 1199,
    options: [
      { name: 'Цвет', type: 'color', values: IPHONE_18_PRO_COLORS },
      { name: 'Память', values: [
        { label: '256 ГБ', add: 0 }, { label: '512 ГБ', add: 200 },
        { label: '1 ТБ', add: 600 }, { label: '2 ТБ', add: 1200 },
      ] },
    ],
    specs: [['Экран', '6,3"'], ['Процессор', 'A20 Pro'], ['Фронтальная камера', '18 МП'], ['Разъём', 'USB-C']],
  },
  {
    id: 'iphone-18-pro-max',
    category: 'iphone',
    name: 'iPhone 18 Pro Max',
    base: 1299,
    options: [
      { name: 'Цвет', type: 'color', values: IPHONE_18_PRO_COLORS },
      { name: 'Память', values: [
        { label: '256 ГБ', add: 0 }, { label: '512 ГБ', add: 200 },
        { label: '1 ТБ', add: 600 }, { label: '2 ТБ', add: 1200 },
      ] },
    ],
    specs: [['Экран', '6,9"'], ['Процессор', 'A20 Pro'], ['Фронтальная камера', '18 МП'], ['Разъём', 'USB-C']],
  },
  {
    id: 'iphone-air',
    category: 'iphone',
    name: 'iPhone Air',
    base: 1099,
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Космический чёрный', hex: '#1F1F21', img: 'assets/catalog/air-spaceblack.webp' },
        { label: 'Облачный белый', hex: '#F2F1EC', img: 'assets/catalog/air-cloudwhite.webp' },
        { label: 'Светлое золото', hex: '#E8DCC4', img: 'assets/catalog/air-lightgold.webp' },
        { label: 'Небесно-голубой', hex: '#C9DCEB', img: 'assets/catalog/air-skyblue.webp' },
      ] },
      { name: 'Память', values: [
        { label: '256 ГБ', add: 0 }, { label: '512 ГБ', add: 200 }, { label: '1 ТБ', add: 600 },
      ] },
    ],
    specs: [['Экран', '6,5"'], ['Процессор', 'A19 Pro'], ['Камера', '48 МП'], ['Фронтальная камера', '18 МП']],
  },
  {
    id: 'iphone-17',
    category: 'iphone',
    name: 'iPhone 17',
    base: 929,
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Чёрный', hex: '#2A2A2C', img: 'assets/catalog/i17-black.webp' },
        { label: 'Белый', hex: '#F4F4F2', img: 'assets/catalog/i17-white.webp' },
        { label: 'Лавандовый', hex: '#D9CCE8', img: 'assets/catalog/i17-lavender.webp' },
        { label: 'Туманно-голубой', hex: '#9DB7D5', img: 'assets/catalog/i17-mistblue.webp' },
        { label: 'Шалфей', hex: '#B8C9A6', img: 'assets/catalog/i17-sage.webp' },
      ] },
      { name: 'Память', values: [{ label: '256 ГБ', add: 0 }, { label: '512 ГБ', add: 200 }] },
    ],
    specs: [['Экран', '6,3"'], ['Процессор', 'A19'], ['Фронтальная камера', '18 МП'], ['Разъём', 'USB-C']],
  },
  {
    id: 'galaxy-s25-ultra',
    category: 'samsung',
    name: 'Samsung Galaxy S25 Ultra',
    base: 1299,
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Titanium Black', hex: '#2C2C2E', img: 'assets/catalog/s25-black.webp' },
        { label: 'Titanium Gray', hex: '#B9B2A8', img: 'assets/catalog/s25-gray.webp' },
        { label: 'Titanium Silverblue', hex: '#AEB9C8', img: 'assets/catalog/s25-silverblue.webp' },
        { label: 'Titanium Whitesilver', hex: '#E6E6E4', img: 'assets/catalog/s25-whitesilver.webp' },
      ] },
      { name: 'Память', values: [
        { label: '256 ГБ', add: 0 }, { label: '512 ГБ', add: 120 }, { label: '1 ТБ', add: 360 },
      ] },
    ],
    specs: [['Экран', '6,9"'], ['Оперативная память', '12 ГБ'], ['Основная камера', '200 МП'], ['Стилус', 'S Pen в комплекте']],
  },
  {
    id: 'macbook-air-13',
    category: 'mac',
    name: 'MacBook Air 13"',
    base: 1099,
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Тёмная ночь', hex: '#2E3642', img: 'assets/catalog/mba-midnight.webp' },
        { label: 'Серебристый', hex: '#E3E4E5', img: 'assets/catalog/mba-silver.webp' },
        { label: 'Небесно-голубой', hex: '#C3D1DC', img: 'assets/catalog/mba-skyblue.webp' },
        { label: 'Сияющая звезда', hex: '#EFE6D6', img: 'assets/catalog/mba-starlight.webp' },
      ] },
      { name: 'Накопитель', values: [
        { label: '256 ГБ', add: 0 }, { label: '512 ГБ', add: 200 }, { label: '1 ТБ', add: 400 },
      ] },
    ],
    specs: [['Экран', '13,6"'], ['Процессор', 'Apple M5'], ['Процессор, ядра', '10'], ['Вес', 'около 1,2 кг']],
  },
  {
    id: 'ipad-air',
    category: 'ipad',
    name: 'iPad Air',
    base: 749,
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Синий', hex: '#9DB9D8', img: 'assets/catalog/ipad-blue.webp' },
        { label: 'Фиолетовый', hex: '#C9B8DB', img: 'assets/catalog/ipad-purple.webp' },
        { label: 'Сияющая звезда', hex: '#EDE4D3', img: 'assets/catalog/ipad-starlight.webp' },
      ] },
      { name: 'Диагональ', values: [{ label: '11"', add: 0 }, { label: '13"', add: 200 }] },
      { name: 'Память', values: [
        { label: '128 ГБ', add: 0 }, { label: '256 ГБ', add: 100 },
        { label: '512 ГБ', add: 300 }, { label: '1 ТБ', add: 500 },
      ] },
      { name: 'Связь', values: [{ label: 'Wi-Fi', add: 0 }, { label: 'Wi-Fi + Cellular', add: 150 }] },
    ],
    specs: [['Камеры', '12 МП + 12 МП'], ['Разъём', 'USB-C'], ['Поддержка', 'Apple Pencil, Magic Keyboard']],
  },
  {
    id: 'apple-watch',
    category: 'watch',
    name: 'Apple Watch',
    base: 399,
    img: 'assets/products/watch.webp',
    options: [
      { name: 'Размер корпуса', values: [{ label: '42 мм', add: 0 }, { label: '46 мм', add: 30 }] },
      { name: 'Связь', values: [{ label: 'GPS', add: 0 }, { label: 'GPS + Cellular', add: 100 }] },
    ],
    specs: [['Ремешок', 'на выбор, есть в магазине'], ['Совместимость', 'iPhone']],
  },
  {
    id: 'airpods-max',
    category: 'audio',
    name: 'AirPods Max',
    base: 549,
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Тёмная ночь', hex: '#3A3F47', img: 'assets/catalog/apmax-midnight.webp' },
        { label: 'Сияющая звезда', hex: '#E9E1D3', img: 'assets/catalog/apmax-starlight.webp' },
        { label: 'Синий', hex: '#8FA5C4', img: 'assets/catalog/apmax-blue.webp' },
        { label: 'Фиолетовый', hex: '#C8B6D8', img: 'assets/catalog/apmax-purple.webp' },
        { label: 'Оранжевый', hex: '#F2B48F', img: 'assets/catalog/apmax-orange.webp' },
      ] },
    ],
    specs: [['Тип', 'Полноразмерные, беспроводные'], ['Шумоподавление', 'Активное'], ['Разъём', 'USB-C']],
  },
  {
    id: 'apple-20w',
    category: 'chargers',
    name: 'Зарядка Apple 20 Вт USB-C',
    base: 19,
    img: 'assets/products/charger.webp',
    options: [],
    specs: [['Мощность', '20 Вт'], ['Разъём', 'USB-C'], ['Вилка', 'Европейская']],
  },
  // ---------- Планшеты ----------
  {
    id: 'ipad',
    category: 'ipad',
    name: 'iPad',
    base: 449,
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Синий', hex: '#7FA6CF', img: 'assets/catalog/ipad11-blue.webp' },
        { label: 'Розовый', hex: '#F0A6B4', img: 'assets/catalog/ipad11-pink.webp' },
        { label: 'Серебристый', hex: '#E3E4E5', img: 'assets/catalog/ipad11-silver.webp' },
        { label: 'Жёлтый', hex: '#F3D86B', img: 'assets/catalog/ipad11-yellow.webp' },
      ] },
      { name: 'Память', values: [{ label: '128 ГБ', add: 0 }, { label: '256 ГБ', add: 100 }, { label: '512 ГБ', add: 300 }] },
      { name: 'Связь', values: [{ label: 'Wi-Fi', add: 0 }, { label: 'Wi-Fi + Cellular', add: 150 }] },
    ],
    specs: [['Экран', '11"'], ['Процессор', 'A16'], ['Разъём', 'USB-C']],
  },
  {
    id: 'ipad-mini',
    category: 'ipad',
    name: 'iPad mini',
    base: 599,
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Синий', hex: '#9DB0C9', img: 'assets/catalog/ipadmini-blue.webp' },
        { label: 'Фиолетовый', hex: '#C9B8DB', img: 'assets/catalog/ipadmini-purple.webp' },
        { label: 'Сияющая звезда', hex: '#EDE4D3', img: 'assets/catalog/ipadmini-starlight.webp' },
      ] },
      { name: 'Память', values: [{ label: '128 ГБ', add: 0 }, { label: '256 ГБ', add: 100 }, { label: '512 ГБ', add: 300 }] },
      { name: 'Связь', values: [{ label: 'Wi-Fi', add: 0 }, { label: 'Wi-Fi + Cellular', add: 150 }] },
    ],
    specs: [['Экран', '8,3"'], ['Процессор', 'A17 Pro'], ['Поддержка', 'Apple Pencil Pro']],
  },
  {
    id: 'ipad-pro',
    category: 'ipad',
    name: 'iPad Pro',
    base: 1199,
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Чёрный космос', hex: '#2E2E30', img: 'assets/catalog/ipadpro-spaceblack.webp' },
        { label: 'Серебристый', hex: '#E3E4E5', img: 'assets/catalog/ipadpro-silver.webp' },
      ] },
      { name: 'Диагональ', values: [{ label: '11"', add: 0 }, { label: '13"', add: 300 }] },
      { name: 'Память', values: [
        { label: '256 ГБ', add: 0 }, { label: '512 ГБ', add: 200 }, { label: '1 ТБ', add: 600 }, { label: '2 ТБ', add: 1000 },
      ] },
      { name: 'Связь', values: [{ label: 'Wi-Fi', add: 0 }, { label: 'Wi-Fi + Cellular', add: 200 }] },
    ],
    specs: [['Процессор', 'Apple M5'], ['Экран', 'OLED']],
  },

  // ---------- Часы (Galaxy Watch и смарт-часы Hoco были в сторис магазина) ----------
  {
    id: 'galaxy-watch9',
    category: 'watch',
    name: 'Samsung Galaxy Watch9',
    base: 329,
    img: 'assets/catalog/galaxy-watch9.webp',
    options: [
      { name: 'Размер корпуса', values: [{ label: '40 мм', add: 0 }, { label: '44 мм', add: 30 }] },
      { name: 'Связь', values: [{ label: 'Bluetooth', add: 0 }, { label: 'LTE', add: 50 }] },
    ],
    specs: [['Совместимость', 'Android'], ['Ремешок', 'Силиконовый']],
  },
  {
    id: 'hoco-watch',
    category: 'watch',
    name: 'Смарт-часы Hoco',
    base: null,
    img: 'assets/catalog/icon-smartwatch.svg',
    options: [],
    specs: [['Модели', 'Уточняйте в магазине'], ['Совместимость', 'iPhone и Android']],
  },

  // ---------- Наушники ----------
  {
    id: 'airpods-4',
    category: 'audio',
    name: 'AirPods 4',
    base: 129,
    img: 'assets/catalog/airpods4.webp',
    options: [
      { name: 'Версия', values: [{ label: 'Обычные', add: 0 }, { label: 'С шумоподавлением', add: 50 }] },
    ],
    specs: [['Тип', 'Беспроводные вкладыши'], ['Кейс', 'USB-C'], ['Наличие', 'Под заказ']],
  },
  {
    id: 'hoco-wireless-headphones',
    category: 'audio',
    name: 'Беспроводные наушники Hoco',
    base: null,
    img: 'assets/catalog/icon-headphones.svg',
    options: [],
    specs: [['Тип', 'Полноразмерные, Bluetooth'], ['Цвета', 'Чёрный, синий, жёлтый']],
  },
  {
    id: 'kids-headphones',
    category: 'audio',
    name: 'Детские наушники Hoco и XO',
    base: null,
    img: 'assets/catalog/icon-headphones.svg',
    options: [],
    specs: [['Тип', 'Полноразмерные'], ['Цвета', 'Яркие, на выбор']],
  },
  {
    id: 'wired-earphones',
    category: 'audio',
    name: 'Проводные наушники',
    base: null,
    img: 'assets/catalog/icon-earphones.svg',
    options: [
      { name: 'Разъём', values: [{ label: 'USB-C', add: 0 }, { label: 'Lightning', add: 0 }, { label: '3,5 мм', add: 0 }] },
    ],
    specs: [['Бренды', 'Hoco, Borofone и другие']],
  },

  // ---------- Зарядки и кабели ----------
  {
    id: 'magsafe',
    category: 'chargers',
    name: 'Беспроводная зарядка MagSafe',
    base: 39,
    img: 'assets/catalog/magsafe.webp',
    options: [],
    specs: [['Тип', 'Магнитная, беспроводная'], ['Совместимость', 'iPhone с MagSafe, AirPods']],
  },
  {
    id: 'apple-usbc-cable',
    category: 'chargers',
    name: 'Кабель Apple USB-C',
    base: 19,
    img: 'assets/catalog/cable-usbc.webp',
    options: [{ name: 'Длина', values: [{ label: '1 м', add: 0 }, { label: '2 м', add: 10 }] }],
    specs: [['Разъёмы', 'USB-C — USB-C']],
  },
  {
    id: 'hoco-cables',
    category: 'chargers',
    name: 'Кабели Hoco и Borofone',
    base: null,
    img: 'assets/catalog/icon-cable.svg',
    options: [
      { name: 'Разъём', values: [{ label: 'USB-C', add: 0 }, { label: 'Lightning', add: 0 }, { label: 'Micro-USB', add: 0 }] },
    ],
    specs: [['Быстрая зарядка', 'Есть модели с поддержкой']],
  },

  // ---------- Павербанки (из сторис магазина) ----------
  {
    id: 'xo-powerbank',
    category: 'power',
    name: 'Павербанк XO со встроенными кабелями',
    base: 25,
    img: 'assets/catalog/icon-powerbank.svg',
    options: [
      { name: 'Цвет', type: 'color', values: [
        { label: 'Белый', hex: '#F2F2F0' }, { label: 'Чёрный', hex: '#222224' }, { label: 'Голубой', hex: '#8EC5E0' },
      ] },
      { name: 'Ёмкость', values: [{ label: '10 000 мАч', add: 0 }, { label: '20 000 мАч', add: 12 }] },
    ],
    specs: [['Кабели', 'Встроенные Type-C и Lightning'], ['Устройств одновременно', '3'], ['Быстрая зарядка', 'Да']],
  },
  {
    id: 'remax-60000',
    category: 'power',
    name: 'Павербанк Remax 60 000 мАч',
    base: null,
    img: 'assets/catalog/icon-powerbank-big.svg',
    options: [],
    specs: [['Мощность', 'до 100 Вт'], ['Входы и выходы', '2 входа, 5 выходов'], ['Заряжает', 'Ноутбуки, планшеты, телефоны'], ['Фонарь', 'Встроенный']],
  },
  // ---------- Планшет Blackview (из сторис магазина: Tab 7 Pro — 3200 руб.) ----------
  {
    id: 'blackview-tab7-pro',
    category: 'ipad',
    name: 'Blackview Tab 7 Pro',
    base: 199,
    img: 'assets/catalog/icon-tablet.svg',
    options: [],
    specs: [['Процессор', '8-ядерный'], ['Аккумулятор', '6580 мАч'], ['Динамики', 'Два'], ['ОС', 'Android']],
  },
  {
    id: 'blackview-tab7-wifi',
    category: 'ipad',
    name: 'Blackview Tab 7 WiFi',
    base: null,
    img: 'assets/catalog/icon-tablet.svg',
    options: [],
    specs: [['Связь', 'Wi-Fi'], ['ОС', 'Android']],
  },

  // ---------- Для авто (из сторис магазина) ----------
  {
    id: 'car-wireless-holder',
    category: 'car',
    name: 'Держатель Hoco с беспроводной зарядкой',
    base: null,
    img: 'assets/catalog/icon-carholder.svg',
    options: [],
    specs: [['Зарядка', 'Беспроводная'], ['Крепление', 'В машину']],
  },
  {
    id: 'car-magnetic-dash',
    category: 'car',
    name: 'Магнитный держатель Borofone на панель',
    base: null,
    img: 'assets/catalog/icon-carholder.svg',
    options: [],
    specs: [['Крепление', 'На панель или стекло'], ['Тип', 'Магнитный']],
  },
  {
    id: 'car-vent-holder',
    category: 'car',
    name: 'Держатели Hoco на воздуховод',
    base: null,
    img: 'assets/catalog/icon-carvent.svg',
    options: [],
    specs: [['Крепление', 'На решётку воздуховода'], ['Размер', 'Компактный']],
  },
];
