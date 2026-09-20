/* =====================================================================
   translations.js
   كل نصوص وبيانات الموقع في مكان واحد — عدّل هنا فقط لإضافة أو تغيير أي محتوى.
   All site text & data lives here — edit only this file to add/change content.
   ===================================================================== */

const SITE_DATA = {

  /* -------------------------- إعدادات عامة / General -------------------------- */
  meta: {
    ar: {
      siteName: "آدم إسماعيل",
      siteTagline: "مدرب سباحة ومدرب إعداد بدني",
      favicon: "🏊"
    },
    en: {
      siteName: "Adam Ismail",
      siteTagline: "Swimming & Physical Preparation Coach",
      favicon: "🏊"
    }
  },

  /* -------------------------- التنقل / Navigation -------------------------- */
  nav: {
    ar: {
      home: "الرئيسية",
      about: "المعلومات الأساسية",
      courses: "الدورات التدريبية",
      experience: "الخبرات السابقة",
      cv: "السيرة الذاتية",
      menuMore: "المزيد",
      gallery: "صور السباحين",
      certificates: "الشهادات",
      videos: "الفيديوهات",
      langAr: "البحث باللغة العربية",
      langEn: "البحث باللغة الإنجليزية",
      contact: "تواصل معي"
    },
    en: {
      home: "Home",
      about: "Basic Information",
      courses: "Training Courses",
      experience: "Experience",
      cv: "CV / Resume",
      menuMore: "More",
      gallery: "Swimmers Gallery",
      certificates: "Certificates",
      videos: "Videos",
      langAr: "Search in Arabic",
      langEn: "Search in English",
      contact: "Contact Me"
    }
  },

  /* -------------------------- الهيدر / Header -------------------------- */
  header: {
    ar: { role: "مدرب سباحة ومدرب إعداد بدني", name: "آدم إسماعيل محمد علي" },
    en: { role: "Swimming & Physical Preparation Coach", name: "Adam Ismail Mohamed Ali" }
  },

  /* -------------------------- الصفحة الرئيسية / Home -------------------------- */
  hero: {
    ar: {
      eyebrow: "مدرب سباحة معتمد — أكثر من 15 عامًا من الخبرة",
      title: "صناعة البطل تبدأ من التدريب الصحيح",
      subtitle: "آدم إسماعيل محمد علي — مدرب سباحة ومدرب إعداد بدني، حاصل على الماجستير في التربية الرياضية، وخبرة تمتد لأكثر من 15 عامًا في تدريب السباحين من مختلف الفئات العمرية وإعدادهم للمنافسات المحلية والدولية.",
      ctaPrimary: "اكتشف خبراتي",
      ctaSecondary: "شاهد إنجازاتي"
    },
    en: {
      eyebrow: "Certified Swimming Coach — 15+ Years of Experience",
      title: "Champions Are Built on the Right Training",
      subtitle: "Adam Ismail Mohamed Ali — Swimming & Physical Preparation Coach, Master's degree in Physical Education, with over 15 years of experience training swimmers of all ages for local and international competitions.",
      ctaPrimary: "Discover My Experience",
      ctaSecondary: "See My Achievements"
    }
  },

  stats: {
    ar: [
      { number: "+15", label: "عامًا من الخبرة" },
      { number: "+28", label: "جهة ونادٍ رياضي" },
      { number: "+13", label: "دورة وشهادة تدريبية" },
      { number: "ماجستير", label: "في التربية الرياضية" }
    ],
    en: [
      { number: "15+", label: "Years of Experience" },
      { number: "28+", label: "Clubs & Institutions" },
      { number: "13+", label: "Courses & Certificates" },
      { number: "Master's", label: "Degree in Physical Education" }
    ]
  },

  vision: {
    ar: {
      title: "رؤية المدرب",
      statement: "بناء منظومة تدريبية متكاملة ترتقي بمستوى السباح وتصنع منه بطلاً داخل الماء وقائداً خارجه.",
      cards: [
        {
          title: "المعرفة والتدريب",
          text: "دمج المعرفة الأكاديمية بالتدريب العملي لتسريع معدلات تطور السباحين."
        },
        {
          title: "التطوير الفني والنفسي",
          text: "التركيز على تحسين التكنيك الفني والجاهزية النفسية للمنافسات."
        },
        {
          title: "البيئة الرياضية",
          text: "خلق بيئة إيجابية تدعم التميز الرياضي والشخصي لجميع الأعمار."
        },
        {
          title: "صناعة الأبطال",
          text: "تقديم جيل رياضي يرفع اسم النادي أو المؤسسة في المحافل الرياضية."
        }
      ]
    },
    en: {
      title: "Coach's Vision",
      statement: "Building a complete training system that elevates every swimmer — turning them into a champion in the water, and a leader outside of it.",
      cards: [
        {
          title: "Knowledge & Training",
          text: "Combining academic knowledge with practical training to accelerate swimmers' development."
        },
        {
          title: "Technical & Mental Development",
          text: "Focusing on refining technique and building mental readiness for competition."
        },
        {
          title: "A Sporting Environment",
          text: "Creating a positive environment that supports athletic and personal excellence at every age."
        },
        {
          title: "Building Champions",
          text: "Producing a generation of athletes who raise their club's or institution's name in competitions."
        }
      ]
    }
  },

  homeSections: {
    ar: {
      aboutTeaser: {
        eyebrow: "تعرف عليّ",
        title: "مدرب سباحة بخبرة أكاديمية وميدانية",
        text: "بكالوريوس وماجستير في التربية الرياضية من جامعة الإسكندرية، تخصص تدريب رياضات مائية (سباحة)، مع خبرة عملية تمتد لأكثر من 15 عامًا في تدريب جميع الفئات العمرية على مختلف طرق السباحة.",
        cta: "المعلومات الأساسية"
      },
      galleryTeaser: {
        eyebrow: "لحظات من الملعب",
        title: "سباحون صنعوا الفارق",
        text: "مجموعة من اللحظات مع السباحين خلال التدريب والبطولات والمنافسات.",
        cta: "مشاهدة المعرض"
      }
    },
    en: {
      aboutTeaser: {
        eyebrow: "About Me",
        title: "A Coach with Academic & Field Experience",
        text: "Bachelor's and Master's degrees in Physical Education from Alexandria University, specializing in aquatic sports (swimming) coaching, with over 15 years of hands-on experience training swimmers of all ages.",
        cta: "Basic Information"
      },
      galleryTeaser: {
        eyebrow: "Moments from the Pool",
        title: "Swimmers Who Made a Difference",
        text: "A collection of moments with swimmers during training, championships and competitions.",
        cta: "View Gallery"
      }
    }
  },

  /* -------------------------- المعلومات الأساسية / About -------------------------- */
  about: {
    ar: {
      pageTitle: "المعلومات الأساسية",
      pageSubtitle: "نبذة تعريفية شاملة عن المدرب ومجال تخصصه",
      fields: [
        { label: "الاسم", value: "آدم إسماعيل محمد علي" },
        { label: "المسمى الوظيفي", value: "مدرب سباحة ومدرب إعداد بدني" },
        { label: "التخصص", value: "تدريب رياضات مائية (سباحة)" },
        { label: "سنوات الخبرة", value: "أكثر من 15 عامًا" },
        { label: "المؤهل العلمي", value: "ماجستير التربية الرياضية — جامعة الإسكندرية (2018)" },
        { label: "المؤهل الأساسي", value: "بكالوريوس التربية الرياضية — جامعة الإسكندرية (2015)" },
        { label: "الفئات العمرية", value: "البراعم، الناشئين، الشباب، والكبار" },
        { label: "أنواع السباحة", value: "الحرة، الظهر، الصدر، الفراشة، والمتنوع الفردي" },
        { label: "مجالات إضافية", value: "الإعداد البدني، التأهيل من الإصابات، تغذية الرياضيين" },
        { label: "رقم التواصل", value: "01285524631 / 01096518457" }
      ],
      specialtiesTitle: "مجالات التخصص",
      specialties: [
        "تدريب السباحين وتطوير التكنيك الفني",
        "الإعداد البدني والنفسي للمنافسات",
        "التدريب الفردي والجماعي",
        "المتابعة والتقييم المستمر لمستوى السباح",
        "التأهيل من الإصابات الرياضية",
        "تخطيط الأحمال التدريبية وفق الفئة العمرية"
      ],
      clubsTitle: "من أحدث الجهات والأندية التي تعاون معها",
      clubsNote: "على مدار مسيرته المهنية، تعاون آدم إسماعيل مع أكثر من 28 ناديًا ومؤسسة رياضية. فيما يلي أبرز الجهات الحديثة — والقائمة الكاملة متاحة في صفحة الخبرات السابقة.",
      clubs: [
        "نادي بشاير وأجوان",
        "أكاديمية شارك وأكاديمية برشاء — الرياض (2025)",
        "نادي راية (2021–2024)",
        "نادي توشكي (2022–2024)",
        "نادي حرس الحدود",
        "نادي اليكس سيتي"
      ]
    },
    en: {
      pageTitle: "Basic Information",
      pageSubtitle: "A complete introduction to the coach and his areas of expertise",
      fields: [
        { label: "Name", value: "Adam Ismail Mohamed Ali" },
        { label: "Job Title", value: "Swimming & Physical Preparation Coach" },
        { label: "Specialization", value: "Aquatic Sports (Swimming) Coaching" },
        { label: "Years of Experience", value: "15+ years" },
        { label: "Academic Degree", value: "Master's in Physical Education — Alexandria University (2018)" },
        { label: "Base Degree", value: "Bachelor's in Physical Education — Alexandria University (2015)" },
        { label: "Age Groups", value: "Beginners, Juniors, Youth & Adults" },
        { label: "Swimming Styles", value: "Freestyle, Backstroke, Breaststroke, Butterfly & Individual Medley" },
        { label: "Additional Fields", value: "Physical preparation, injury rehabilitation, sports nutrition" },
        { label: "Contact", value: "01285524631 / 01096518457" }
      ],
      specialtiesTitle: "Areas of Specialization",
      specialties: [
        "Swimmer training & technical development",
        "Physical & mental preparation for competitions",
        "Individual & group coaching",
        "Continuous monitoring & evaluation of swimmer progress",
        "Sports injury rehabilitation",
        "Training load planning by age group"
      ],
      clubsTitle: "Recent Clubs & Institutions",
      clubsNote: "Throughout his career, Adam Ismail has worked with more than 28 clubs and sports institutions. Below are the most recent — the full list is available on the Experience page.",
      clubs: [
        "Bashayer & Ajwan Club",
        "Sharek Academy & Barsha Academy — Riyadh (2025)",
        "Raya Club (2021–2024)",
        "Toshky Club (2022–2024)",
        "Border Guard Club",
        "Alex City Club"
      ]
    }
  },

  /* -------------------------- الدورات التدريبية / Courses -------------------------- */
  coursesPage: {
    ar: { title: "الدورات التدريبية والمؤهلات", subtitle: "مسيرة تعليمية وتدريبية مستمرة لتطوير الأداء" },
    en: { title: "Training Courses & Qualifications", subtitle: "A continuous educational and training journey" }
  },
  courses: {
    ar: [
      { title: "درجة الماجستير في التربية الرياضية", issuer: "جامعة الإسكندرية — كلية التربية الرياضية للبنات", date: "2018", desc: "رسالة ماجستير بعنوان «فاعلية تدريبات تحمل الأداء الفني على زمن سباحة 400م حرة للسباحين الناشئين»، بتقدير جيد جدًا.", image: "cert-04-masters.jpg" },
      { title: "بكالوريوس التربية الرياضية", issuer: "جامعة الإسكندرية — كلية التربية الرياضية للبنين (أبوقير)", date: "2015", desc: "تخصص تدريب رياضي — سباحة، بتقدير جيد جدًا ونسبة 75.70%.", image: "cert-01-bachelor.jpg" },
      { title: "الدورة الأساسية في السباحة", issuer: "الاتحاد المصري للسباحة والاتحاد الدولي FINA", date: "2014", desc: "FINA Basic Swimming Coaches Clinic، بالقاهرة، معتمدة من الاتحاد الدولي للسباحة.", image: "cert-02-fina.jpg" },
      { title: "دورة إسعافات أولية وإنعاش قلبي رئوي (CPR)", issuer: "الهلال الأحمر المصري بالتعاون مع الاتحاد المصري للسباحة", date: "2018", desc: "دورة التعامل مع الإصابات الطارئة وأجهزة الإنعاش القلبي الرئوي.", image: "cert-03-cpr.jpg" },
      { title: "دورة أخصائي إصابات رياضية وتدليك وتأهيل", issuer: "الأكاديمية الدولية للعلوم التطبيقية", date: "2012", desc: "تأهيل متخصص في التعامل مع الإصابات الرياضية والتدليك العلاجي.", image: "cert-07-injuries.jpg" },
      { title: "دورة اللياقة البدنية الأساسية (Fitness)", issuer: "المجلس القومي للرياضة وكلية التربية الرياضية — جامعة الإسكندرية", date: "2013", desc: "60 ساعة تدريب نظري وعملي في مجال اللياقة البدنية.", image: "cert-05-fitness.jpg" },
      { title: "دورة تدريبية في اتحاد التراثلون المصري", issuer: "اتحاد التراثلون المصري — منطقة الإسكندرية", date: "", desc: "شهادة تقدير لجهود التدريب ودعم المسيرة الرياضية في رياضة الترايثلون.", image: "cert-06-triathlon.jpg" },
      { title: "دورة تغذية الرياضيين", issuer: "وزارة الصحة — الإدارة العامة للتغذية", date: "", desc: "دورة تدريبية لمدة أسبوع في موضوع تغذية الرياضيين والسباحين.", image: "cert-10-nutrition.jpg" },
      { title: "دورة تحكيم خماسي حديث (سباحة وجري)", issuer: "الاتحاد المصري للسباحة", date: "", desc: "تأهيل للتحكيم في منافسات الخماسي الحديث.", image: "" },
      { title: "دورة تقنين أحمال تدريبية", issuer: "الاتحاد المصري للسباحة", date: "", desc: "أسس التخطيط العلمي لأحمال التدريب الرياضي.", image: "" },
      { title: "دورة إعداد وتأهيل مدربي براعم وناشئي كرة السلة", issuer: "اتحاد كرة السلة", date: "", desc: "تأهيل تدريبي في مجال تدريب براعم وناشئي كرة السلة.", image: "" },
      { title: "دورة تحكيم ميني باسكت", issuer: "اتحاد كرة السلة", date: "", desc: "تأهيل للتحكيم في مباريات كرة السلة للناشئين.", image: "" },
      { title: "الرخصة الدولية لقيادة الحاسب الآلي (ICDL)", issuer: "الرخصة الدولية المتقدمة", date: "", desc: "رخصة دولية معتمدة في مهارات الحاسب الآلي.", image: "" },
      { title: "دورة تنمية الموارد البشرية", issuer: "", date: "", desc: "دورة تدريبية في أساسيات إدارة وتنمية الموارد البشرية.", image: "" },
      { title: "دورة تحكيم سباحة للمسافات القصيرة والمتوسطة", issuer: "الإدارة العامة للرياضة بالإسكندرية", date: "2018", desc: "تأهيل للتحكيم في منافسات السباحة للمسافات القصيرة والمتوسطة.", image: "cert-11-festival.jpg" },
      { title: "دورة AUEPT لإتقان اللغة الإنجليزية", issuer: "", date: "", desc: "دورة معتمدة لإتقان اللغة الإنجليزية.", image: "" }
    ],
    en: [
      { title: "Master's Degree in Physical Education", issuer: "Alexandria University — Faculty of Physical Education for Girls", date: "2018", desc: "Master's thesis: \"The Effectiveness of Technical Performance Endurance Exercises on 400m Freestyle Time for Junior Swimmers\" — Very Good grade.", image: "cert-04-masters.jpg" },
      { title: "Bachelor's Degree in Physical Education", issuer: "Alexandria University — Faculty of Physical Education for Boys (Abu Qir)", date: "2015", desc: "Specialization: Athletic Training — Swimming, Very Good grade (75.70%).", image: "cert-01-bachelor.jpg" },
      { title: "Basic Swimming Coaches Clinic", issuer: "Egyptian Swimming Federation & FINA", date: "2014", desc: "FINA Basic Swimming Coaches Clinic, held in Cairo, accredited by the international federation.", image: "cert-02-fina.jpg" },
      { title: "First Aid & CPR Course", issuer: "Egyptian Red Crescent with the Egyptian Swimming Federation", date: "2018", desc: "Emergency response and cardiopulmonary resuscitation training.", image: "cert-03-cpr.jpg" },
      { title: "Sports Injuries & Massage Therapy Specialist", issuer: "The International Academy for Applied Sciences", date: "2012", desc: "Specialized training in sports injury management and therapeutic massage.", image: "cert-07-injuries.jpg" },
      { title: "Basic Fitness Course", issuer: "National Council of Sports & Faculty of Sport Education, Alexandria University", date: "2013", desc: "60 hours of theoretical and practical fitness training.", image: "cert-05-fitness.jpg" },
      { title: "Egyptian Triathlon Federation Training Course", issuer: "Egyptian Triathlon Federation — Alexandria Zone", date: "", desc: "Certificate of appreciation for coaching efforts supporting the triathlon community.", image: "cert-06-triathlon.jpg" },
      { title: "Sports Nutrition Course", issuer: "Ministry of Health — General Directorate of Nutrition", date: "", desc: "One-week training course on nutrition for athletes and swimmers.", image: "cert-10-nutrition.jpg" },
      { title: "Modern Pentathlon Refereeing Course (Swim & Run)", issuer: "Egyptian Swimming Federation", date: "", desc: "Qualification to referee modern pentathlon competitions.", image: "" },
      { title: "Training Load Standardization Course", issuer: "Egyptian Swimming Federation", date: "", desc: "Scientific principles of planning training loads.", image: "" },
      { title: "Basketball Youth Coaches Preparation Course", issuer: "Basketball Federation", date: "", desc: "Coaching qualification for youth and junior basketball players.", image: "" },
      { title: "Mini Basketball Refereeing Course", issuer: "Basketball Federation", date: "", desc: "Qualification to referee junior basketball matches.", image: "" },
      { title: "International Computer Driving Licence (ICDL)", issuer: "Advanced ICDL", date: "", desc: "Internationally accredited computer skills licence.", image: "" },
      { title: "Human Resources Development Course", issuer: "", date: "", desc: "Training course in the fundamentals of HR management and development.", image: "" },
      { title: "Short & Medium Distance Swimming Refereeing Course", issuer: "General Sports Authority — Alexandria", date: "2018", desc: "Qualification to referee short and medium distance swimming events.", image: "cert-11-festival.jpg" },
      { title: "AUEPT English Language Proficiency Course", issuer: "", date: "", desc: "Accredited course in English language proficiency.", image: "" }
    ]
  },

  /* -------------------------- الخبرات السابقة / Experience -------------------------- */
  experiencePage: {
    ar: { title: "الخبرات السابقة", subtitle: "أكثر من 15 عامًا و28 جهة رياضية في مسيرة تدريبية حافلة" },
    en: { title: "Previous Experience", subtitle: "15+ years and 28 sports institutions across a rich coaching career" }
  },
  /* Timeline: أبرز الخبرات المؤرخة — key dated roles */
  experienceTimeline: {
    ar: [
      { period: "2025", org: "أكاديمية شارك وأكاديمية برشاء — الرياض", role: "مدرب سباحة", text: "تدريب السباحين بالمملكة العربية السعودية ضمن فريق عمل الأكاديميتين." },
      { period: "2022 – 2024", org: "نادي توشكي", role: "مدرب فريق العمومي", text: "قيادة وتدريب فريق السباحة العمومي، ومتابعة تطور مستوى السباحين." },
      { period: "2021 – 2024", org: "نادي راية", role: "مدرب فريق العمومي", text: "الإشراف على تدريب فريق العمومي وتطوير الأداء الفني والبدني للسباحين." },
      { period: "2014 – 2018", org: "نادي اليكس سيتي (اسكندرية سيتي)", role: "مدرب فرق السباحة", text: "تدريب فرق مراحل سنية متعددة (2014، 2015، 2018) وإعدادها للبطولات." },
      { period: "2016 – 2017", org: "نادي طلائع الأسطول", role: "مدرب سباحة", text: "تدريب السباحين خلال الموسم الرياضي وإعدادهم للمنافسات." },
      { period: "2015 – 2016", org: "نادي الاتحاد السكندري", role: "مدرب سباحة", text: "الإشراف على تدريب السباحين بالنادي خلال الموسم الرياضي." },
      { period: "2014 – 2015", org: "النادي الأوليمبي المصري", role: "مدرب سباحة", text: "تدريب السباحين وإعداد بحث الماجستير ميدانيًا على عينة من سباحي النادي (2016–2017)، وحصل على شهادة تقدير من إدارة النادي عام 2017." },
      { period: "2011 – 2015", org: "نادي الشبان المسيحيين", role: "مدرب سباحة", text: "تدريب السباحين لعدة مواسم رياضية متتالية." },
      { period: "2010 – 2015", org: "نادي المؤسسة العسكرية", role: "مدرب سباحة (قطاع المدارس والبراعم)", text: "تدريب قطاع المدارس والبراعم، ومساعد مدرب لمرحلتي 2003 و2005، وحصل على شهادة تقدير من قيادة المنطقة الشمالية العسكرية عام 2014." }
    ],
    en: [
      { period: "2025", org: "Sharek Academy & Barsha Academy — Riyadh", role: "Swimming Coach", text: "Training swimmers in Saudi Arabia as part of both academies' coaching staff." },
      { period: "2022 – 2024", org: "Toshky Club", role: "Head Team Coach", text: "Leading and coaching the general swim team and tracking swimmers' progress." },
      { period: "2021 – 2024", org: "Raya Club", role: "Head Team Coach", text: "Overseeing the general team's training and developing technical & physical performance." },
      { period: "2014 – 2018", org: "Alex City Club", role: "Swim Teams Coach", text: "Coaching multiple age-group teams (2014, 2015, 2018) and preparing them for championships." },
      { period: "2016 – 2017", org: "Talae El Osstol Club", role: "Swimming Coach", text: "Coaching swimmers throughout the season and preparing them for competitions." },
      { period: "2015 – 2016", org: "Alexandria Federation Club", role: "Swimming Coach", text: "Overseeing swimmer training at the club during the sporting season." },
      { period: "2014 – 2015", org: "Egyptian Olympic Club", role: "Swimming Coach", text: "Coaching swimmers and conducting the field study for his Master's thesis on a sample of the club's swimmers (2016–2017); received a certificate of appreciation from the club's board in 2017." },
      { period: "2011 – 2015", org: "Young Men's Christian Club", role: "Swimming Coach", text: "Coaching swimmers across several consecutive sporting seasons." },
      { period: "2010 – 2015", org: "Armed Forces Club", role: "Swimming Coach (Schools & Beginners Sector)", text: "Coaching the schools and beginners sector, assistant coach for the 2003 & 2005 age groups; received a certificate of appreciation from the Northern Military Command in 2014." }
    ]
  },
  /* خبرات ومهام إضافية — undated / secondary roles */
  experienceExtra: {
    ar: {
      title: "خبرات ومهام إضافية",
      items: [
        "مدرب فرق السباحة لدى نادي بشاير وأجوان",
        "مشرف قطاع المدارس بنادي حرس الحدود",
        "مسئول العلاقات العامة بالنادي الأوليمبي المصري وحزب حماة الوطن",
        "مدرب سباحة لدى نادي سموحة (قطاع المدارس والبراعم)",
        "مدرب سباحة لدى نادي كلية التربية الرياضية للبنين — جامعة الإسكندرية",
        "مشرف منقذين بشركة الثلاث نجوم للغوص",
        "حكم خماسي حديث (سباحة وجري)",
        "حكم كرة سلة ميني باسكت",
        "مدرب كرة سلة لنادي كلية التربية الرياضية (قطاع المدارس)",
        "اخصائي علاج طبيعي وتدليك — مركز الإسكندرية للياقة البدنية",
        "مدرب تربية رياضية بمدرسة محمد كريم (المرحلة الابتدائية)",
        "مدرب تربية رياضية بمدرسة التعاون الخاصة",
        "وكيل تسويق الأكاديمية الدولية للعلوم التطبيقية — منطقة الإسكندرية",
        "شارك في بطولة السباحة للجامعات (2011/2012، 2013/2014)",
        "شارك في مهرجانات السباحة القصيرة التابعة للإدارة العامة للرياضة",
        "شارك في أولمبياد العروض الرياضية بجامعة الإسكندرية",
        "لاعب سباحة بنادي المؤسسة العسكرية، وحاصل على المركز الثاني في سباق تتابع 4×100م ببطولة كأس مصر 2009"
      ]
    },
    en: {
      title: "Additional Experience & Roles",
      items: [
        "Swim teams coach at Bashayer & Ajwan Club",
        "Schools sector supervisor at Border Guard Club",
        "Public relations officer at the Egyptian Olympic Club and Homat Al-Watan Party",
        "Swimming coach at Semouha Club (schools & beginners sector)",
        "Swimming coach at Faculty of Physical Education for Boys Club — Alexandria University",
        "Lifeguard supervisor at Three Stars Diving Company",
        "Modern pentathlon referee (swim & run)",
        "Mini basketball referee",
        "Basketball coach at the Faculty of Physical Education Club (schools sector)",
        "Physical therapy & massage specialist — Alex Fitness Center",
        "Physical education teacher at Mohamed Kareem School (primary stage)",
        "Physical education teacher at Al-Taawon private school",
        "Marketing agent for the International Academy for Applied Sciences — Alexandria region",
        "Competed in the University Swimming Championship (2011/2012, 2013/2014)",
        "Participated in short-distance swimming festivals held by the General Sports Authority",
        "Participated in the Sports Show Olympics at Alexandria University",
        "Competitive swimmer at the Armed Forces Club; won 2nd place in the 4×100m relay at the 2009 Egypt Cup Championship"
      ]
    }
  },

  /* -------------------------- السيرة الذاتية / CV -------------------------- */
  cvPage: {
    ar: {
      title: "السيرة الذاتية",
      subtitle: "نظرة شاملة على المسار الأكاديمي والمهني",
      downloadBtn: "تحميل السيرة الذاتية PDF",
      personalTitle: "البيانات الشخصية",
      personal: [
        { label: "الاسم", value: "آدم إسماعيل محمد علي" },
        { label: "تاريخ الميلاد", value: "3 / 9 / 1993" },
        { label: "التخصص", value: "تدريب رياضات مائية (سباحة)" },
        { label: "الحالة الاجتماعية", value: "متزوج ويعول" },
        { label: "الموقف من التجنيد", value: "أدى الخدمة العسكرية" }
      ],
      qualificationsTitle: "المؤهلات العلمية",
      qualifications: [
        { degree: "ماجستير التربية الرياضية", place: "كلية التربية الرياضية للبنات — جامعة الإسكندرية", year: "2018" },
        { degree: "بكالوريوس التربية الرياضية", place: "كلية التربية الرياضية للبنين — جامعة الإسكندرية", year: "2015 — تقدير جيد جدًا" }
      ],
      skillsTitle: "المهارات",
      skills: ["تدريب السباحين", "تطوير التكنيك", "إعداد السباح للمنافسات", "التدريب الفردي والجماعي", "المتابعة والتقييم", "الإعداد النفسي والبدني"],
      coursesTitle: "الدورات التدريبية",
      coursesNote: "أكثر من 13 دورة تدريبية معتمدة — التفاصيل الكاملة في صفحة الدورات التدريبية.",
      experienceTitle: "الخبرات العملية",
      experienceNote: "أكثر من 28 خبرة تدريبية عبر مسيرة تمتد لأكثر من 15 عامًا — التفاصيل الكاملة في صفحة الخبرات السابقة.",
      researchTitle: "بحث علمي منشور",
      researchText: "«فاعلية تدريبات تحمل الأداء الفني على زمن سباحة 400م حرة للسباحين الناشئين» — رسالة ماجستير، إشراف د. جليلة حسن إبراهيم ود. نجلاء محمد شقرة، كلية التربية الرياضية للبنات، جامعة الإسكندرية، 2018."
    },
    en: {
      title: "CV / Resume",
      subtitle: "A complete overview of the academic and professional journey",
      downloadBtn: "Download CV (PDF)",
      personalTitle: "Personal Information",
      personal: [
        { label: "Name", value: "Adam Ismail Mohamed Ali" },
        { label: "Date of Birth", value: "September 3, 1993" },
        { label: "Specialization", value: "Aquatic Sports (Swimming) Coaching" },
        { label: "Marital Status", value: "Married, with dependents" },
        { label: "Military Status", value: "Completed military service" }
      ],
      qualificationsTitle: "Academic Qualifications",
      qualifications: [
        { degree: "Master's in Physical Education", place: "Faculty of Physical Education for Girls — Alexandria University", year: "2018" },
        { degree: "Bachelor's in Physical Education", place: "Faculty of Physical Education for Boys — Alexandria University", year: "2015 — Very Good" }
      ],
      skillsTitle: "Skills",
      skills: ["Swimmer coaching", "Technique development", "Competition preparation", "Individual & group coaching", "Progress monitoring & evaluation", "Mental & physical preparation"],
      coursesTitle: "Training Courses",
      coursesNote: "13+ accredited training courses — full details on the Courses page.",
      experienceTitle: "Professional Experience",
      experienceNote: "28+ coaching roles across a career spanning 15+ years — full details on the Experience page.",
      researchTitle: "Published Research",
      researchText: "\"The Effectiveness of Technical Performance Endurance Exercises on 400m Freestyle Time for Junior Swimmers\" — Master's thesis, supervised by Dr. Galila Hassan Ibrahim and Dr. Naglaa Mohamed Shakra, Faculty of Physical Education for Girls, Alexandria University, 2018."
    }
  },

  /* -------------------------- معرض الصور / Gallery -------------------------- */
  galleryPage: {
    ar: { title: "صور السباحين", subtitle: "لحظات من التدريب والبطولات والمنافسات" },
    en: { title: "Swimmers Gallery", subtitle: "Moments from training, championships and competitions" }
  },
  gallery: {
    ar: [
      { caption: "لحظة تكريم بعد المنافسة", image: "gallery-01.jpg" },
      { caption: "تسليم شهادة تقدير لإحدى السباحات", image: "gallery-02.jpg" },
      { caption: "على حافة حمام السباحة قبل انطلاق السباق", image: "gallery-03.jpg" },
      { caption: "مع أحد السباحين عند حمام السباحة", image: "gallery-04.jpg" },
      { caption: "احتفال بعدة شهادات تقدير في بطولة واحدة", image: "gallery-05.jpg" },
      { caption: "تكريم سباحة بعد تحقيق مركز متقدم", image: "gallery-06.jpg" },
      { caption: "لحظة فخر بشهادتي تقدير", image: "gallery-07.jpg" },
      { caption: "مع إحدى السباحات في البطولة", image: "gallery-08.jpg" },
      { caption: "أثناء التحكيم في إحدى الفعاليات الرياضية", image: "gallery-09.jpg" },
      { caption: "مع إحدى السباحات على هامش المنافسة", image: "gallery-10.jpg" },
      { caption: "مع أحد السباحين الناشئين", image: "gallery-11.jpg" },
      { caption: "جاهزون لخوض السباق", image: "gallery-12.jpg" }
    ],
    en: [
      { caption: "A celebratory moment after the competition", image: "gallery-01.jpg" },
      { caption: "Presenting a certificate of appreciation to a swimmer", image: "gallery-02.jpg" },
      { caption: "Poolside before the race begins", image: "gallery-03.jpg" },
      { caption: "With a swimmer by the pool", image: "gallery-04.jpg" },
      { caption: "Celebrating multiple certificates in one championship", image: "gallery-05.jpg" },
      { caption: "Honoring a swimmer after a strong finish", image: "gallery-06.jpg" },
      { caption: "A proud moment with two certificates", image: "gallery-07.jpg" },
      { caption: "With a swimmer at the championship", image: "gallery-08.jpg" },
      { caption: "Officiating at a sporting event", image: "gallery-09.jpg" },
      { caption: "With a swimmer during the competition", image: "gallery-10.jpg" },
      { caption: "With a young swimmer", image: "gallery-11.jpg" },
      { caption: "Ready for the race", image: "gallery-12.jpg" }
    ]
  },

  /* -------------------------- الشهادات / Certificates -------------------------- */
  certificatesPage: {
    ar: { title: "الشهادات", subtitle: "الشهادات الأكاديمية والتدريبية والتكريمات على مدار المسيرة" },
    en: { title: "Certificates", subtitle: "Academic, training and appreciation certificates throughout the career" }
  },
  certificates: {
    ar: [
      { title: "شهادة الماجستير في التربية الرياضية", issuer: "جامعة الإسكندرية", date: "2018", image: "cert-04-masters.jpg" },
      { title: "شهادة تخرج البكالوريوس", issuer: "جامعة الإسكندرية", date: "2015", image: "cert-01-bachelor.jpg" },
      { title: "FINA Basic Swimming Coaches Clinic", issuer: "الاتحاد الدولي للسباحة FINA", date: "2014", image: "cert-02-fina.jpg" },
      { title: "شهادة إسعافات أولية وإنعاش قلبي (CPR)", issuer: "الهلال الأحمر المصري", date: "2018", image: "cert-03-cpr.jpg" },
      { title: "شهادة أخصائي إصابات رياضية وتدليك", issuer: "الأكاديمية الدولية للعلوم التطبيقية", date: "2012", image: "cert-07-injuries.jpg" },
      { title: "شهادة اللياقة البدنية الأساسية", issuer: "جامعة الإسكندرية", date: "2013", image: "cert-05-fitness.jpg" },
      { title: "شهادة تقدير — اتحاد التراثلون المصري", issuer: "اتحاد التراثلون المصري", date: "", image: "cert-06-triathlon.jpg" },
      { title: "شهادة تقدير — النادي الأوليمبي المصري", issuer: "النادي الأوليمبي المصري", date: "2017", image: "cert-08-olympic-club.jpg" },
      { title: "إفادة خبرة — مركز الإسكندرية للياقة البدنية", issuer: "Alex Fitness Center", date: "", image: "cert-09-alex-fitness.jpg" },
      { title: "إفادة حضور دورة تغذية الرياضيين", issuer: "وزارة الصحة", date: "", image: "cert-10-nutrition.jpg" },
      { title: "شهادة مشاركة — مهرجان السباحة القصيرة", issuer: "الإدارة العامة للرياضة بالإسكندرية", date: "2018", image: "cert-11-festival.jpg" },
      { title: "شهادة تقدير — القيادة العسكرية", issuer: "المركز الأوليمبي للقوات المسلحة", date: "2014", image: "cert-12-armed-forces.jpg" }
    ],
    en: [
      { title: "Master's Degree Certificate", issuer: "Alexandria University", date: "2018", image: "cert-04-masters.jpg" },
      { title: "Bachelor's Graduation Certificate", issuer: "Alexandria University", date: "2015", image: "cert-01-bachelor.jpg" },
      { title: "FINA Basic Swimming Coaches Clinic", issuer: "FINA", date: "2014", image: "cert-02-fina.jpg" },
      { title: "First Aid & CPR Certificate", issuer: "Egyptian Red Crescent", date: "2018", image: "cert-03-cpr.jpg" },
      { title: "Sports Injuries & Massage Specialist", issuer: "International Academy for Applied Sciences", date: "2012", image: "cert-07-injuries.jpg" },
      { title: "Basic Fitness Certificate", issuer: "Alexandria University", date: "2013", image: "cert-05-fitness.jpg" },
      { title: "Certificate of Appreciation — Egyptian Triathlon Federation", issuer: "Egyptian Triathlon Federation", date: "", image: "cert-06-triathlon.jpg" },
      { title: "Certificate of Appreciation — Egyptian Olympic Club", issuer: "Egyptian Olympic Club", date: "2017", image: "cert-08-olympic-club.jpg" },
      { title: "Experience Letter — Alex Fitness Center", issuer: "Alex Fitness Center", date: "", image: "cert-09-alex-fitness.jpg" },
      { title: "Sports Nutrition Course Attendance Letter", issuer: "Ministry of Health", date: "", image: "cert-10-nutrition.jpg" },
      { title: "Participation Certificate — Short Swimming Festival", issuer: "General Sports Authority, Alexandria", date: "2018", image: "cert-11-festival.jpg" },
      { title: "Certificate of Appreciation — Military Command", issuer: "Armed Forces Olympic Center", date: "2014", image: "cert-12-armed-forces.jpg" }
    ]
  },

  /* -------------------------- الفيديوهات / Videos -------------------------- */
  videosPage: {
    ar: { title: "الفيديوهات", subtitle: "مقاطع من التدريب والبطولات ونصائح تدريبية" },
    en: { title: "Videos", subtitle: "Clips from training sessions, championships and coaching tips" }
  },
  videos: {
    ar: [
      { title: "أجواء التدريب داخل حمام السباحة", desc: "لقطة من صالة سباحة مغطاة أثناء أحد التمارين اليومية.", src: "video-01.mp4", thumb: "video-01-thumb.jpg" },
      { title: "سباحة فراشة في بطولة اليكس سيتي", desc: "أحد السباحين يؤدي سباق الفراشة خلال منافسة رسمية.", src: "video-02.mp4", thumb: "video-02-thumb.jpg" },
      { title: "3 تعبيرات في تدريب السباحة", desc: "نصيحة تدريبية سريعة من المدرب آدم إسماعيل.", src: "video-03.mp4", thumb: "video-03-thumb.jpg" },
      { title: "أجواء إحدى البطولات", desc: "لقطات من انطلاق سباق جماعي وتشجيع الفريق على حافة الحمام.", src: "video-04.mp4", thumb: "video-04-thumb.jpg" },
      { title: "كلمة توجيهية من المدرب", desc: "حديث مباشر من المدرب آدم إسماعيل حول أساسيات التدريب.", src: "video-05.mp4", thumb: "video-05-thumb.jpg" },
      { title: "تدريب السباحين الناشئين", desc: "جلسة تدريبية للناشئين باستخدام الأدوات المساعدة على حافة الحمام.", src: "video-06.mp4", thumb: "video-06-thumb.jpg" }
    ],
    en: [
      { title: "Training Atmosphere Inside the Pool", desc: "A shot from an indoor pool during a daily training session.", src: "video-01.mp4", thumb: "video-01-thumb.jpg" },
      { title: "Butterfly Race at Alex City Championship", desc: "A swimmer performing the butterfly stroke in an official competition.", src: "video-02.mp4", thumb: "video-02-thumb.jpg" },
      { title: "3 Expressions in Swimming Coaching", desc: "A quick coaching tip from Coach Adam Ismail.", src: "video-03.mp4", thumb: "video-03-thumb.jpg" },
      { title: "Championship Moments", desc: "Clips from a relay start and team encouragement poolside.", src: "video-04.mp4", thumb: "video-04-thumb.jpg" },
      { title: "A Word From the Coach", desc: "Coach Adam Ismail speaks directly about the fundamentals of coaching.", src: "video-05.mp4", thumb: "video-05-thumb.jpg" },
      { title: "Junior Swimmers Training", desc: "A training session for junior swimmers using poolside training aids.", src: "video-06.mp4", thumb: "video-06-thumb.jpg" }
    ]
  },

  /* -------------------------- التواصل / Contact -------------------------- */
  contact: {
    ar: {
      title: "تواصل معي",
      subtitle: "متاح للتدريب الفردي والجماعي، والاستشارات الرياضية",
      whatsapp: "واتساب",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      facebook: "فيسبوك",
      instagram: "إنستغرام",
      youtube: "يوتيوب",
      whatsappValue: "+201285524631",
      phoneValue: "01285524631",
      emailValue: "coach.adam.swim@gmail.com",
      facebookUrl: "https://www.facebook.com/share/19VVB1u3Ha/",
      instagramUrl: "",
      youtubeUrl: ""
    },
    en: {
      title: "Contact Me",
      subtitle: "Available for individual & group coaching, and sports consultations",
      whatsapp: "WhatsApp",
      phone: "Phone",
      email: "Email",
      facebook: "Facebook",
      instagram: "Instagram",
      youtube: "YouTube",
      whatsappValue: "+201285524631",
      phoneValue: "01285524631",
      emailValue: "coach.adam.swim@gmail.com",
      facebookUrl: "https://www.facebook.com/share/19VVB1u3Ha/",
      instagramUrl: "",
      youtubeUrl: ""
    }
  },

  /* -------------------------- الفوتر / Footer -------------------------- */
  footer: {
    ar: {
      role: "مدرب سباحة — Swimming Coach",
      linksTitle: "روابط سريعة",
      rights: "© جميع الحقوق محفوظة"
    },
    en: {
      role: "Swimming Coach",
      linksTitle: "Quick Links",
      rights: "© All rights reserved"
    }
  },

  /* -------------------------- عناصر عامة متكررة / Common UI strings -------------------------- */
  common: {
    ar: {
      close: "إغلاق",
      playVideo: "تشغيل",
      viewLarge: "تكبير",
      backToTop: "العودة للأعلى",
      loading: "جاري التحميل..."
    },
    en: {
      close: "Close",
      playVideo: "Play",
      viewLarge: "View Large",
      backToTop: "Back to top",
      loading: "Loading..."
    }
  }
};

/* اللغة الافتراضية للموقع */
const DEFAULT_LANG = "ar";
