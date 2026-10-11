// تمام اطلاعات اپ اینجا جمع شده — برای تغییر محتوا فقط همین فایل را ویرایش کنید.

export const profile = {
  name: 'عسل',
  fullName: 'عسل عرب',
  role: 'دانش‌آموز و توسعه‌دهنده وب',
  tagline: 'ایده‌ها را به وب‌سایت‌های واقعی تبدیل می‌کنم',
  bio: [
    'سلام! من عسل هستم؛ یک دانش‌آموز ۱۶ ساله و علاقه‌مند به دنیای کامپیوتر و تکنولوژی. از زمانی که با برنامه‌نویسی و طراحی وب آشنا شدم، همیشه از ساختن چیزهای جدید و تبدیل ایده‌ها به پروژه‌های واقعی لذت برده‌ام.',
    'در حال حاضر در رشته شبکه و نرم‌افزار تحصیل می‌کنم و در کنار مدرسه، مهارت‌هایم را در زمینه طراحی وب، برنامه‌نویسی و فناوری‌های مختلف توسعه می‌دهم.',
    'برای من یادگیری فقط به کلاس و کتاب محدود نمی‌شود؛ سعی می‌کنم با انجام پروژه‌های واقعی، تجربه کسب کنم و هر روز چیز جدیدی یاد بگیرم. همچنین به کار روی پروژه‌های خلاقانه و همکاری با افراد مختلف علاقه دارم.',
    'هدفم این است که در آینده با استفاده از تکنولوژی، ایده‌هایی بسازم که هم کاربردی باشند و هم بتوانند تأثیر مثبتی ایجاد کنند. این اپ بخشی از مسیر من است؛ جایی برای معرفی مهارت‌ها، پروژه‌ها و چیزهایی که در این مسیر می‌سازم.',
  ],
  facts: [
    { icon: 'graduation', label: 'دانش‌آموز رشته شبکه و نرم‌افزار' },
    { icon: 'laptop', label: 'علاقه‌مند به برنامه‌نویسی و طراحی وب' },
    { icon: 'rocket', label: 'سازنده پروژه‌های واقعی و زنده' },
    { icon: 'palette', label: 'طراح رابط کاربری فارسی و RTL' },
  ],
  stats: [
    { value: '۷+', label: 'پروژه زنده', icon: 'laptop' },
    { value: '۵+', label: 'تکنولوژی', icon: 'layers' },
    { value: '۱۰۰٪', label: 'انرژی برای یادگیری', icon: 'bolt' },
  ],
  journey: [
    { step: '۰۱', title: 'کنجکاوی', text: 'با یک سوال ساده شروع شد: «این‌ها را چطور می‌سازند؟» — و همان سوال من را به دنیای کامپیوتر کشاند.' },
    { step: '۰۲', title: 'یادگیری', text: 'در رشته شبکه و نرم‌افزار مدرسه و با تمرین‌های شبانه‌روزی، مبانی برنامه‌نویسی و طراحی وب را یاد گرفتم.' },
    { step: '۰۳', title: 'ساختن', text: 'به‌جای توقف در تمرین، پروژه‌های واقعی ساختم؛ از فروشگاه آنلاین تا اپ آموزش سواد مالی کودکان.' },
    { step: '۰۴', title: 'امروز', text: 'هفتمین پروژه‌ی زنده‌ام منتشر شده و هر روز در حال یادگیری چیزهای جدید و ساختن ایده‌های تازه‌ام.' },
  ],
}

export const skills = [
  { name: 'HTML', icon: 'web', level: 'ساختار و سمانتیک' },
  { name: 'CSS', icon: 'palette', level: 'استایل و ریسپانسیو' },
  { name: 'JavaScript', icon: 'bolt', level: 'تعامل و منطق' },
  { name: 'طراحی UI', icon: 'code', level: 'رابط کاربری و تایپوگرافی' },
]

export const projects = [
  {
    slug: 'kiddo-money',
    title: 'مانی بی · Kiddo Money',
    short: 'اپ آموزش هوشمند و بازی‌محور سواد مالی کودکان',
    description:
      'پلتفرم جذاب و بازی‌محور برای آموزش سواد مالی، هوش اقتصادی، مدیریت پول و پس‌انداز به کودکان. مانی بی یادگیری را به بازی تبدیل می‌کند تا کودکان بدون حوصله‌سررفتن، ارزش پول را بفهمند.',
    features: [
      'درس‌های کوتاه و بازی‌محور برای هر مفهوم مالی',
      'پنل اختصاصی والدین برای پیگیری پیشرفت فرزند',
      'کیف پول و پس‌انداز درون‌برنامه‌ای با پاداش‌های واقعی',
      'رابط کاربری کودکانه، رنگارنگ و کاملاً فارسی',
    ],
    icon: 'wand',
    gradient: 'linear-gradient(135deg, #f6d365, #fda085)',
    category: 'اپلیکیشن',
    tags: ['React + Vite', 'بازی‌محور', 'آموزشی'],
    live: 'https://atefeh-arab.github.io/kiddo-money/',
    repo: 'https://github.com/atefeh-arab/kiddo-money',
  },
  {
    slug: 'nexus-shop',
    hideCategory: true, // عکس کاور خودش برچسب «فروشگاه» دارد
    title: 'نکسوس · Nexus Shop',
    short: 'فروشگاه تخصصی لپ‌تاپ و کامپیوتر',
    description:
      'فروشگاه آنلاین تخصصی لپ‌تاپ و کامپیوتر؛ از لپ‌تاپ گیمینگ و ایستگاه‌های کاری تا لوازم جانبی — با ضمانت اصالت کالا و تجربه خریدی سریع و ساده.',
    features: [
      'دسته‌بندی تخصصی گیمینگ، اداری و لوازم جانبی',
      'صفحه محصول با مشخصات کامل و گارانتی',
      'سبد خرید و فرآیند سفارش روان',
      'طراحی تیره و گیمینگ‌پسند',
    ],
    icon: 'laptop',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    category: 'فروشگاه',
    tags: ['فروشگاه آنلاین', 'JavaScript'],
    live: 'https://atefeh-arab.github.io/nexus-shop/',
    repo: 'https://github.com/atefeh-arab/nexus-shop',
  },
  {
    slug: 'lumeira',
    title: 'لومیرا · استودیو زیبایی',
    short: 'لندینگ لوکس خدمات پوست و زیبایی',
    description:
      'وب‌سایت لندینگ لوکس برای استودیو زیبایی لومیرا؛ با بخش خدمات، گالری، پکیج‌های عضویت و رزرو نوبت — همراه با انیمیشن‌های اسکرول نرم و چیدمان کاملاً فارسی.',
    features: [
      'معرفی خدمات با کارت‌های شیک',
      'گالری تصاویر با پیش‌نمایش بزرگ',
      'پکیج‌های عضویت و جدول قیمت',
      'فرم رزرو نوبت و انیمیشن GSAP',
    ],
    icon: 'flower',
    gradient: 'linear-gradient(135deg, #e0a3b8, #c4856c)',
    category: 'لندینگ',
    tags: ['Landing', 'GSAP', 'RTL'],
    live: 'https://atefeh-arab.github.io/web-portfolio/sites/lumiera/index.html',
  },
  {
    slug: 'nudea',
    title: 'نودا بیوتی · فروشگاه آرایشی',
    short: 'فروشگاه کامل آرایشی با پنل مدیریت',
    description:
      'فروشگاه کامل محصولات آرایشی و مراقبت پوست با ۷ صفحه؛ شامل محصولات، سبد خرید، تسویه‌حساب، تایمر تخفیف شمارش‌معکوس و پنل مدیریت اختصاصی.',
    features: [
      '۷ صفحه کامل: خانه، محصولات، سبد خرید و تسویه‌حساب',
      'تایمر تخفیف شمارش‌معکوس زنده',
      'پنل مدیریت اختصاصی برای محصولات',
      'بخش نظرات مشتریان و خبرنامه',
    ],
    icon: 'cart',
    gradient: 'linear-gradient(135deg, #f78ca0, #f9748f)',
    category: 'فروشگاه',
    tags: ['فروشگاه', 'پنل مدیریت', 'JavaScript'],
    live: 'https://atefeh-arab.github.io/rokad-emy/',
    repo: 'https://github.com/atefeh-arab/rokad-emy',
  },
  {
    slug: 'gsap-showcase',
    title: 'GSAP Showcase',
    short: 'کتابخانه تعاملی ۵۳ مدل انیمیشن',
    description:
      'کتابخانه تعاملی ۵۳ مدل انیمیشن GSAP با دموی زنده برای هر مدل، همراه با جستجو و فیلتر — همه در یک فایل کاملاً آفلاین و بدون نیاز به اینترنت.',
    features: [
      '۵۳ مدل انیمیشن با دموی زنده و تعاملی',
      'جستجو و فیلتر سریع بین انیمیشن‌ها',
      'کد هر انیمیشن برای استفاده مجدد',
      'کاملاً آفلاین — همه‌چیز در یک فایل',
    ],
    icon: 'spark',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    category: 'انیمیشن',
    tags: ['GSAP', 'Draggable', 'Flip'],
    live: 'https://atefeh-arab.github.io/web-portfolio/sites/gsap-showcase/index.html',
  },
  {
    slug: 'khordo',
    title: 'خُردو · بافت‌های کهن مشهد',
    short: 'سایت میراث فرهنگی بافت قدیم مشهد',
    description:
      'سایت میراث فرهنگی برای معرفی بافت کهن مشهد؛ با نقشه محله‌ها و معرفی خانه داروغه، زورخانه و حمام‌های قاجاری — ساخته‌شده با Next.js و SQLite.',
    features: [
      'نقشه تعاملی محله‌های بافت قدیم',
      'معرفی خانه داروغه، زورخانه و حمام‌های قاجاری',
      'محتوای فرهنگی با عکس‌های آرشیوی',
      'بک‌اند سبک با Next.js و SQLite',
    ],
    icon: 'museum',
    gradient: 'linear-gradient(135deg, #c79081, #dfa579)',
    category: 'محتوایی',
    tags: ['Next.js', 'React', 'Map'],
    live: 'https://atefeh-arab.github.io/web-portfolio/sites/khordo/index.html',
  },
  {
    slug: 'target-app',
    title: 'تارگت · دستیار مالی نسل Z',
    short: 'اپ پس‌انداز و هدف‌گذاری مالی با امتیاز، سطح و مأموریت',
    description:
      'تارگت یک وب‌اپ (PWA) برای پس‌انداز و مدیریت پول نوجوانان و نسل Z است. هر هدف مالی یک کارت با حلقه‌ی پیشرفت دارد و با هر واریز، امتیاز XP و سطح و پاداش می‌گیری؛ پس‌انداز کردن شبیه یک بازی می‌شود. اپ نصب‌شدنی است و حتی بدون اینترنت هم کار می‌کند.',
    features: [
      'هدف‌گذاری پس‌انداز با نمودار حلقه‌ای پیشرفت',
      'امتیاز XP، سطح و زنجیره‌ی روزهای پیاپی',
      'مأموریت‌ها و پاداش، به‌همراه افتخارات و تاریخچه',
      'برداشت اضطراری از قلک با مسیر راهنما',
      'نصب‌پذیر و آفلاین (PWA) با رابط کاملاً فارسی',
    ],
    icon: 'rocket',
    gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
    category: 'اپلیکیشن',
    tags: ['PWA', 'JavaScript', 'Tailwind CSS'],
    live: 'sites/target-app/index.html', // داخل خود پورتفولیو (public/sites/target-app)
  },
]

export const categories = ['همه', ...new Set(projects.map((p) => p.category))]

export const contacts = [
  {
    name: 'گیت‌هاب',
    handle: 'atefeh-arab',
    icon: 'github',
    href: 'https://github.com/atefeh-arab',
  },
  {
    name: 'تلگرام',
    handle: '@asall_arab',
    icon: 'telegram',
    href: 'https://t.me/asall_arab',
    primary: true,
  },
  {
    name: 'اینستاگرام',
    handle: '@asal_arab0',
    icon: 'instagram',
    href: 'https://instagram.com/asal_arab0',
  },
  {
    name: 'تلفن',
    handle: '۰۹۳۵۳۷۰۴۶۸۲',
    icon: 'phone',
    href: 'tel:+989353704682',
  },
]

export const navItems = [
  { to: '/', label: 'خانه', icon: 'home' },
  { to: '/projects', label: 'پروژه‌ها', icon: 'code' },
  { to: '/about', label: 'درباره من', icon: 'user' },
  { to: '/contact', label: 'تماس', icon: 'mail' },
]
