// Define translations object
const translations = {
  UKR: {
    // Navigation
    main: "Головна",
    about: "Про нас",
    services: "Послуги",
    contacts: "Контакти",
    partners: "Партнери",

    // Header
    everyWord: "Кожне слово має значення",
    quote: "«Найстрашніше - прогавити прекрасне»",
    authorName: "Сергій Параджанов",

    // About page
    aboutUs: "Про нас",
    ourActivity: "Наша діяльність",
    aboutText1: "Бюро перекладів «АЗГ» працює на ринку перекладацьких послуг більше 5 років, та вже зарекомендувало себе як надійного партнера. Ми надаємо послуги з професійного перекладу документів, а також супроводження їх нотаріального посвідчення, легалізації та/або проставлення апостилю, у найкоротші терміни.",
    aboutText2: "Штат нашої компанії – це широке коло дипломованих перекладачів та професіоналів, які відмінно володіють багатьма мовами, а також знають стандарти та правила перекладу різноманітної документації.",
    nameSymbolics: "Назва та символіка",
    symbolicsText: "З вірменської мови слово «АЗГ» у назві нашого бюро перекладається як «нація». Гранат у вірменській культурі символізує життя, процвітання, достаток та родючість. Він постає невідʼємною частиною історії вірмен, і часто оспівується у вірменських піснях, стародавніх приказках та легендах. А за давньою традицією, у день вірменського весілля наречена повинна кинути гранат на землю… і чим більше гранатових зерен випаде із цього плоду, тим більше діточок має народитися у цій сімʼї. Шедевр світового кіномистецтва – фільм «Колір гранату» українського режисера вірменського походження Сергія Параджанова яскраво зображує значення цієї ягоди для вірмен.",

    // Where to find us
    whereToFind: "Де нас шукати?",
    whereText: "Якщо ви знаходитесь в Києві та потребуйте послуг якісного перекладу, завітайте до нашого офісу на",
    address: "вул. Саксаганського 133А",
    workHours: "Наш офіс працює з",
    workTime: "9:00 до 18:00",
    workDays: "з Понеділка по П'ятницю",

    // Partners
    ourPartners: "Наші партнери",

    // Footer
    findUs: "Шукай нас:",
    writeCall: "Գրեք/զանգահարեք:",
    visitOffice: "Завітайте до нашого офісу:",
    fullAddress: "ք․ Կիև, Սաքսագանսկու փող․ 133Ա",
    footerQuote: "\"Ми співпрацюємо виключно із перекладачами, які є професіоналами своєї справи, а тому переклади, виконані нашим Бюро перекладів, відповідають найвищим стандартам якості.\"",

    // Services (modal)
    orderService: "Замовити послугу",
    pleaseComplete: "*Будь ласка, заповніть інформацію для замовлення послуги",
    name: "Ім'я",
    surname: "Прізвище*",
    email: "Пошта*",
    phone: "Номер телефону*",
    comments: "Комментарі до замовлення",
    order: "Замовити",
    thankYou: "Дякуємо за замовлення!",
    toMain: "До головної",

    // Services
    oralTranslation: "Усний переклад",
    writtenTranslation: "Письмовий переклад",
    notaryCertification: "Нотаріальне посвідчення",
    apostileLegalization: "Апостиль/легалізація",
    criminalRecord: "Довідка про несудимість",
    migrationConsultations: "Միգրացիոն խորհրդատվություն"
  },

  ENG: {
    // Navigation
    main: "Home",
    about: "About Us",
    services: "Services",
    contacts: "Contacts",
    partners: "Partners",

    // Header
    everyWord: "Every word matters",
    quote: "«The worst thing is to miss the beautiful»",
    authorName: "Sergei Parajanov",

    // About page
    aboutUs: "About Us",
    ourActivity: "Our Activity",
    aboutText1: "AZG Translation Bureau has been operating in the translation services market for more than 5 years and has already established itself as a reliable partner. We provide professional document translation services, as well as support for their notarization, legalization and/or apostille, in the shortest possible time.",
    aboutText2: "Our company's staff is a wide range of certified translators and professionals who are fluent in many languages, and who know the standards and rules of translation of various documentation.",
    nameSymbolics: "Name and Symbolism",
    symbolicsText: "From the Armenian language, the word \"AZG\" in the name of our bureau translates as \"nation\". The pomegranate in Armenian culture symbolizes life, prosperity, abundance and fertility. It is an integral part of Armenian history, and is often celebrated in Armenian songs, ancient proverbs and legends. And according to an ancient tradition, on the day of an Armenian wedding, the bride must throw a pomegranate on the ground... and the more pomegranate seeds fall from this fruit, the more children will be born in this family. The masterpiece of world cinema - the film \"The Color of Pomegranate\" by the Ukrainian director of Armenian origin Sergei Parajanov vividly depicts the significance of this berry for Armenians.",

    // Where to find us
    whereToFind: "Where to find us?",
    whereText: "If you are in Kyiv and need quality translation services, visit our office at",
    address: "Saksaganskogo St. 133A",
    workHours: "Our office is open from",
    workTime: "9:00 to 18:00",
    workDays: "Monday to Friday",

    // Partners
    ourPartners: "Our partners",

    // Footer
    findUs: "Find us:",
    writeCall: "Write/call:",
    visitOffice: "Visit our office:",
    fullAddress: "Kyiv, Saksaganskogo St. 133A",
    footerQuote: "We work exclusively with translators who are professionals in their field, and therefore translations performed by our Translation Bureau meet the highest quality standards.",

    // Services (modal)
    orderService: "Order service",
    pleaseComplete: "*Please complete the information to order a service",
    name: "First name",
    surname: "Last name*",
    email: "Email*",
    phone: "Phone number*",
    comments: "Order comments",
    order: "Order",
    thankYou: "Thank you for your order!",
    toMain: "To main page",

    // Services
    oralTranslation: "Oral translation",
    writtenTranslation: "Written translation",
    notaryCertification: "Notary certification",
    apostileLegalization: "Apostille/legalization",
    criminalRecord: "Criminal record certificate",
    migrationConsultations: "Migration consultations"
  },

  RUS: {
    // Navigation
    main: "Главная",
    about: "О нас",
    services: "Услуги",
    contacts: "Контакты",
    partners: "Партнеры",

    // Header
    everyWord: "Каждое слово имеет значение",
    quote: "«Самое страшное - упустить прекрасное»",
    authorName: "Сергей Параджанов",

    // About page
    aboutUs: "О нас",
    ourActivity: "Наша деятельность",
    aboutText1: "Бюро переводов «АЗГ» работает на рынке переводческих услуг более 5 лет и уже зарекомендовало себя как надежного партнера. Мы предоставляем услуги по профессиональному переводу документов, а также сопровождение их нотариального заверения, легализации и/или проставления апостиля, в кратчайшие сроки.",
    aboutText2: "Штат нашей компании – это широкий круг дипломированных переводчиков и профессионалов, которые отлично владеют многими языками, а также знают стандарты и правила перевода различной документации.",
    nameSymbolics: "Название и символика",
    symbolicsText: "С армянского языка слово «АЗГ» в названии нашего бюро переводится как «нация». Гранат в армянской культуре символизирует жизнь, процветание, достаток и плодородие. Он предстает неотъемлемой частью истории армян, и часто воспевается в армянских песнях, древних поговорках и легендах. А по древней традиции, в день армянской свадьбы невеста должна бросить гранат на землю... и чем больше гранатовых зерен выпадет из этого плода, тем больше детей должно родиться в этой семье. Шедевр мирового киноискусства – фильм «Цвет граната» украинского режиссера армянского происхождения Сергея Параджанова ярко изображает значение этой ягоды для армян.",

    // Where to find us
    whereToFind: "Где нас найти?",
    whereText: "Если вы находитесь в Киеве и нуждаетесь в услугах качественного перевода, посетите наш офис по адресу",
    address: "ул. Саксаганского 133А",
    workHours: "Наш офис работает с",
    workTime: "9:00 до 18:00",
    workDays: "с Понедельника по Пятницу",

    // Partners
    ourPartners: "Наши партнеры",

    // Footer
    findUs: "Ищи нас:",
    writeCall: "Пиши/звони:",
    visitOffice: "Посетите наш офис:",
    fullAddress: "г. Киев, ул. Саксаганского 133А",
    footerQuote: "Мы сотрудничаем исключительно с переводчиками, которые являются профессионалами своего дела, поэтому переводы, выполненные нашим Бюро переводов, соответствуют высочайшим стандартам качества.",

    // Services (modal)
    orderService: "Заказать услугу",
    pleaseComplete: "*Пожалуйста, заполните информацию для заказа услуги",
    name: "Имя",
    surname: "Фамилия*",
    email: "Почта*",
    phone: "Номер телефона*",
    comments: "Комментарии к заказу",
    order: "Заказать",
    thankYou: "Спасибо за заказ!",
    toMain: "На главную",

    // Services
    oralTranslation: "Устный перевод",
    writtenTranslation: "Письменный перевод",
    notaryCertification: "Нотариальное заверение",
    apostileLegalization: "Апостиль/легализация",
    criminalRecord: "Справка о несудимости",
    migrationConsultations: "Миграционные консультации"
  },

  ARM: {
    // Navigation
    main: "Գլխավոր",
    about: "Մեր մասին",
    services: "Ծառայություններ",
    contacts: "Կոնտակտներ",
    partners: "Գործընկերներ",

    // Header
    everyWord: "Յուրաքանչյուր բառ ունի նշանակություն",
    quote: "«Ամենասարսափելին գեղեցիկը բաց թողնելն է»",
    authorName: "Սերգեյ Փարաջանով",

    // About page
    aboutUs: "Մեր մասին",
    ourActivity: "Մեր գործունեությունը",
    aboutText1: "«ԱԶԳ» թարգմանչական բյուրոն գործում է թարգմանչական ծառայությունների շուկայում ավելի քան 5 տարի և արդեն հաստատել է իրեն որպես հուսալի գործընկեր։ Մենք առաջարկում ենք փաստաթղթերի մասնագիտական թարգմանության ծառայություններ, ինչպես նաև դրանց նոտարական վավերացման, օրինականացման և/կամ ապոստիլի ուղեկցում՝ կարճագույն ժամկետներում:",
    aboutText2: "Մեր ընկերության անձնակազմը դիպլոմավորված թարգմանիչների և մասնագետների լայն շրջանակ է, ովքեր հմտորեն տիրապետում են բազմաթիվ լեզուների, ինչպես նաև գիտեն տարբեր փաստաթղթերի թարգմանության ստանդարտներն ու կանոնները:",
    nameSymbolics: "Անվանում և խորհրդանիշ",
    symbolicsText: "Հայերենից «ԱԶԳ» բառը մեր բյուրոյի անվանման մեջ թարգմանվում է որպես «ազգ»։ Նուռը հայկական մշակույթում խորհրդանշում է կյանք, բարգավաճում, առատություն և պտղաբերություն։ Այն հայերի պատմության անբաժանելի մասն է և հաճախ գովերգվում է հայկական երգերում, հին առածներում և լեգենդներում։ Իսկ հին ավանդույթի համաձայն, հայկական հարսանիքի օրը հարսը պետք է նուռ գցի գետնին... և որքան շատ նռան սերմեր դուրս թափվեն այս պտղից, այնքան շատ երեխաներ պետք է ծնվեն այս ընտանիքում։ Համաշխարհային կինոարվեստի գլուխգործոցը՝ հայկական ծագում ունեցող ուկրաինացի ռեժիսոր Սերգեյ Փարաջանովի «Նռան գույնը» ֆիլմը վառ կերպով պատկերում է այս հատապտղի նշանակությունը հայերի համար:",

    // Where to find us
    whereToFind: "Որտե՞ղ գտնել մեզ",
    whereText: "Եթե դուք Կիևում եք և որակյալ թարգմանչական ծառայությունների կարիք ունեք, այցելեք մեր գրասենյակ",
    address: "Սաքսագանսկու փող․ 133Ա",
    workHours: "Մեր գրասենյակը աշխատում է",
    workTime: "9:00-ից 18:00",
    workDays: "Երկուշաբթիից մինչև Ուրբաթ",

    // Partners
    ourPartners: "Մեր գործընկերները",

    // Footer
    findUs: "Գտեք մեզ:",
    writeCall: "Գրեք/զանգահարեք:",
    visitOffice: "Այցելեք մեր գրասենյակ:",
    fullAddress: "ք․ Կիև, Սաքսագանսկու փող․ 133Ա",
    footerQuote: "Մենք աշխատում ենք բացառապես իրենց ոլորտի պրոֆեսիոնալ թարգմանիչների հետ, ուստի մեր Թարգմանչական բյուրոյի կողմից կատարված թարգմանությունները համապատասխանում են որակի բարձրագույն չափանիշներին:",

    // Services (modal)
    orderService: "Պատվիրել ծառայություն",
    pleaseComplete: "*Խնդրում ենք լրացնել տեղեկատվությունը ծառայություն պատվիրելու համար",
    name: "Անուն",
    surname: "Ազգանուն*",
    email: "Էլ․ փոստ*",
    phone: "Հեռախոսահամար*",
    comments: "Մեկնաբանություններ պատվերի վերաբերյալ",
    order: "Պատվիրել",
    thankYou: "Շնորհակալություն պատվերի համար!",
    toMain: "Դեպի գլխավոր էջ",

    // Services
    oralTranslation: "Բանավոր թարգմանություն",
    writtenTranslation: "Գրավոր թարգմանություն",
    notaryCertification: "Նոտարական վավերացում",
    apostileLegalization: "Ապոստիլ/օրինականացում",
    criminalRecord: "Դատվածության բացակայության տեղեկանք",
    migrationConsultations: "Միգրացիոն խորհրդատվություն"
  }
};
