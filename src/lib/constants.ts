export const SITE_NAME = "АрмаПокрас";
export const SITE_DESCRIPTION =
  "Доступная автомалярка в Пятигорске. Покраска автомобилей Лада, Hyundai, Kia и других. Полировка, антикор. Честные цены, гарантия на работы.";
export const PHONE = "+7 (962) 424-96-96";
export const PHONE_RAW = "79624249696";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_RAW}`;
export const ADDRESS = "г. Пятигорск, Московская ул., 31";
export const ADDRESS_FULL =
  "Ставропольский край, г. Пятигорск, Московская улица, 31";
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
    shortDesc: "Полная и локальная покраска Лада, Hyundai, Kia и других авто",
    icon: "spray",
    href: "/uslugi/pokraska",
  },
  {
    slug: "polirovka",
    title: "Полировка",
    shortDesc: "Полировка кузова, элементов и фар",
    icon: "polish",
    href: "/uslugi/polirovka",
  },
  {
    slug: "dopolnitelnye",
    title: "Доп. услуги",
    shortDesc: "Антикоррозийная обработка, покраска дисков",
    icon: "shield",
    href: "/uslugi/dopolnitelnye",
  },
];

export const PRICE_DATA = [
  {
    category: "Покраска",
    items: [
      { name: "Покраска элемента (бампер, крыло, дверь, капот и т.д.)", price: "7 000 ₽" },
      { name: "Покраска пятна (локальная)", price: "3 000 ₽" },
      { name: "Полная покраска легкового авто", price: "70 000 ₽" },
      { name: "Полная покраска джипа / кроссовера", price: "100 000 ₽" },
    ],
  },
  {
    category: "Полировка",
    items: [
      { name: "Полировка кузова", price: "10 000 ₽" },
      { name: "Полировка одного элемента", price: "1 500 ₽" },
      { name: "Полировка пары фар", price: "2 000 ₽" },
    ],
  },
  {
    category: "Дополнительные услуги",
    items: [
      { name: "Антикоррозийная обработка", price: "7 000 ₽" },
      { name: "Покраска дисков (комплект)", price: "8 000 ₽" },
    ],
  },
];
