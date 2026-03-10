export const SITE_NAME = "АрмаПокрас";
export const SITE_DESCRIPTION =
  "Профессиональная автомалярка в Пятигорске. Покраска автомобилей, кузовной ремонт, полировка. Качественные материалы, гарантия на работы.";
export const PHONE = "+7 (962) 424-96-96";
export const PHONE_RAW = "79624249696";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_RAW}`;
export const ADDRESS = "г. Пятигорск, Ессентукская ул., 14";
export const ADDRESS_FULL =
  "Ставропольский край, г. Пятигорск, Ессентукская улица, 14";
export const EMAIL = "info@armapokras.ru";
export const WORKING_HOURS = "Пн–Сб: 9:00–19:00, Вс: выходной";
export const OWNER = "Арам Хачатурян";

export const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/price", label: "Цены" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/kontakty", label: "Контакты" },
];

export const SERVICES = [
  {
    slug: "pokraska",
    title: "Покраска автомобиля",
    shortDesc: "Полная и локальная покраска любых автомобилей",
    icon: "🎨",
    href: "/uslugi/pokraska",
  },
  {
    slug: "kuzovnoj-remont",
    title: "Кузовной ремонт",
    shortDesc: "Рихтовка, сварка, замена элементов кузова",
    icon: "🔧",
    href: "/uslugi/kuzovnoj-remont",
  },
  {
    slug: "polirovka",
    title: "Полировка",
    shortDesc: "Абразивная, защитная полировка и керамика",
    icon: "✨",
    href: "/uslugi/polirovka",
  },
  {
    slug: "dopolnitelnye",
    title: "Доп. услуги",
    shortDesc: "Антикор, подбор краски, тонировка, плёнка",
    icon: "🛡️",
    href: "/uslugi/dopolnitelnye",
  },
];

export const PRICE_DATA = [
  {
    category: "Покраска",
    items: [
      { name: "Покраска бампера", price: "от 3 500 ₽" },
      { name: "Покраска крыла", price: "от 3 500 ₽" },
      { name: "Покраска двери", price: "от 3 500 ₽" },
      { name: "Покраска капота", price: "от 5 000 ₽" },
      { name: "Покраска крыши", price: "от 6 000 ₽" },
      { name: "Покраска крышки багажника", price: "от 4 000 ₽" },
      { name: "Локальная покраска (пятно)", price: "от 2 500 ₽" },
      { name: "Полная покраска легкового авто", price: "от 40 000 ₽" },
      { name: "Полная покраска кроссовера/джипа", price: "от 50 000 ₽" },
    ],
  },
  {
    category: "Кузовной ремонт",
    items: [
      { name: "Рихтовка элемента", price: "от 2 000 ₽" },
      { name: "Выправление вмятины без покраски (PDR)", price: "от 1 500 ₽" },
      { name: "Сварочные работы", price: "от 1 000 ₽" },
      { name: "Замена элемента кузова", price: "от 2 000 ₽" },
      { name: "Восстановление геометрии", price: "от 5 000 ₽" },
      { name: "Шпатлёвка элемента", price: "от 1 500 ₽" },
    ],
  },
  {
    category: "Полировка",
    items: [
      { name: "Абразивная полировка кузова", price: "от 8 000 ₽" },
      { name: "Защитная полировка", price: "от 5 000 ₽" },
      { name: "Полировка одного элемента", price: "от 1 500 ₽" },
      { name: "Полировка фар (пара)", price: "от 1 500 ₽" },
      { name: "Нанесение керамического покрытия", price: "от 15 000 ₽" },
      { name: "Нанесение жидкого стекла", price: "от 10 000 ₽" },
    ],
  },
  {
    category: "Дополнительные услуги",
    items: [
      { name: "Антикоррозийная обработка", price: "от 5 000 ₽" },
      { name: "Подбор краски по VIN", price: "от 500 ₽" },
      { name: "Оклейка защитной плёнкой (элемент)", price: "от 3 000 ₽" },
      { name: "Тонировка стёкол", price: "от 3 000 ₽" },
      { name: "Покраска дисков (комплект)", price: "от 6 000 ₽" },
    ],
  },
];
