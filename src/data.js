// ── Edit everything in this file to update the site content ──
// Teks yang berbeda per bahasa ditulis sebagai { en: "...", id: "..." }.
// Teks yang sama di kedua bahasa cukup ditulis sebagai string biasa.

export const profile = {
  name: "Muhammad Zul Rezky Zaaki",
  role: "Data Analyst & AI Engineer",
  location: "Jakarta, Indonesia",
  affiliation: "School of Computing, Telkom University",
  email: "muhammadzulrezkyzaaki@gmail.com",
  github: "https://github.com/mhmmdzul",
  linkedin: "https://linkedin.com/in/muhammadzulrezkyzaaki",
  instagram: "https://www.instagram.com/mzulrezky_/",
  cv: "/cv.pdf",
  whatsappDigits: "6282196739377",
  whatsappDisplay: "+62 821-9673-9377",
};

export const stats = [
  {
    value: "3.73",
    label: {
      en: "Cum Laude GPA, Telkom University",
      id: "IPK Cum Laude, Telkom University",
    },
  },
  { value: "5", label: { en: "Featured projects", id: "Proyek unggulan" } },
  { value: "10", label: { en: "Certificates", id: "Sertifikat" } },
];

// Logo dari Devicon & Simple Icons (versi dikunci supaya tidak tiba-tiba berubah)
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const SIMPLE_ICONS = "https://cdn.jsdelivr.net/npm/simple-icons@11.0.0/icons";
const SIMPLE_ICONS_13 =
  "https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons";

export const skillsIntro = {
  en: "Technologies and tools I use to build data-driven solutions, AI models, and modern web applications.",
  id: "Teknologi dan tools yang saya gunakan untuk membangun solusi berbasis data, model AI, dan aplikasi web modern.",
};

// icon: url logo · invert: logo hitam dibuat putih · light: logo gelap diberi latar terang
// mono: teks badge kalau tidak ada logo
export const skills = [
  {
    key: "lang",
    group: { en: "Languages", id: "Bahasa pemrograman" },
    items: [
      { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
      { name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
      {
        name: "JavaScript",
        icon: `${DEVICON}/javascript/javascript-original.svg`,
      },
      { name: "C++", icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      {
        name: "LaTeX",
        icon: `${DEVICON}/latex/latex-original.svg`,
        invert: true,
      },
    ],
  },
  {
    key: "web",
    group: { en: "Web development", id: "Pengembangan web" },
    items: [
      { name: "React.js", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Laravel", icon: `${DEVICON}/laravel/laravel-original.svg` },
      {
        name: "Flask",
        icon: `${DEVICON}/flask/flask-original.svg`,
        invert: true,
      },
    ],
  },
  {
    key: "ml",
    group: { en: "ML & deep learning", id: "ML & deep learning" },
    items: [
      { name: "PyTorch", icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: "torchvision", mono: "TV" },
      { name: "YOLOv8", mono: "YOLO" },
      {
        name: "TensorFlow Lite",
        icon: `${DEVICON}/tensorflow/tensorflow-original.svg`,
      },
      { name: "Grad-CAM", mono: "GC" },
    ],
  },
  {
    key: "data",
    group: { en: "Data & visualization", id: "Data & visualisasi" },
    items: [
      {
        name: "pandas",
        icon: `${DEVICON}/pandas/pandas-original.svg`,
        light: true,
      },
      { name: "NumPy", icon: `${DEVICON}/numpy/numpy-original.svg` },
      {
        name: "Excel",
        icon: `${SIMPLE_ICONS}/microsoftexcel.svg`,
        invert: true,
      },
    ],
  },
  {
    key: "db",
    group: { en: "Databases", id: "Database" },
    items: [
      {
        name: "MySQL",
        icon: `${DEVICON}/mysql/mysql-original.svg`,
        light: true,
      },
      { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    key: "tools",
    group: { en: "Tools & platforms", id: "Tools & platform" },
    items: [
      {
        name: "GitHub",
        icon: `${DEVICON}/github/github-original.svg`,
        invert: true,
      },
      { name: "Google Colab", mono: "CO" },
      { name: "Kaggle", icon: `${DEVICON}/kaggle/kaggle-original.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "n8n", icon: `${SIMPLE_ICONS_13}/n8n.svg`, invert: true },
      {
        name: "Raspberry Pi",
        icon: `${DEVICON}/raspberrypi/raspberrypi-original.svg`,
      },
      { name: "Arduino", icon: `${DEVICON}/arduino/arduino-original.svg` },
    ],
  },
];

export const translations = {
  en: {
    kicker: "Hello, I am",
    tagline: "Ready for impact",
    heroBlurb:
      "I turn data into decisions and build AI that works in the real world, from computer vision systems to workflow automation.",
    openToLabel: "Open to",
    openToRoles: ["Data Analyst", "AI Engineer", "ML Engineer"],
    idcardHint: "↕ Drag the card",
    navHome: "Home",
    navAbout: "About",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
    aboutHeading: "About",
    aboutHeadingAccent: "Me.",
    aboutIntro: "Hello, I'm",
    downloadCv: "Download CV",
    openToWork: "Open to work",
    bio: [
      "IT fresh graduate with hands-on experience across full-stack development, machine learning, and data processing, including a Full-Stack Developer internship at IPDN and a published IEEE conference paper on deep learning-based waste classification.",
      "Beyond technical skills, I bring proven leadership experience as Vice Chair of a 500+ member student organization, sharpening my team management and cross-divisional coordination skills.",
    ],
    portfolioLead: "Portfolio",
    portfolioAccent: "Showcase.",
    tabProjects: "Projects",
    tabCertificates: "Certificates",
    tabExperience: "Experience",
    tabSkills: "Tech Stack",
    backToPortfolio: "Back to portfolio",
    statTechnologies: "Technologies",
    statKeyFeatures: "Key features",
    techStackHeading: "Tech stack",
    keyAchievementsHeading: "Key achievements",
    problemSolutionHeading: "Problem & Solution",
    problemLabel: "The problem",
    solutionLabel: "The solution",
    galleryHeading: "Gallery",
    galleryOpen: "Open photo",
    galleryClose: "Close",
    galleryPrev: "Previous photo",
    galleryNext: "Next photo",
    prevProject: "Previous project",
    nextProject: "Next project",
    detailsLabel: "Details",
    downloadNotebook: "Download Notebook",
    viewDataset: "View Dataset",
    viewGithub: "View on GitHub",
    contactTitleLead: "Let's",
    contactTitleAccent: "Connect.",
    contactSubtitle:
      "Currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!",
    labelEmail: "Email",
    labelWhatsapp: "WhatsApp",
    labelLocation: "Location",
    sendMessageHeading: "Send a message",
    formName: "Your Name",
    formEmail: "Your Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Send Message",
    formNamePh: "John Doe",
    formEmailPh: "john@company.com",
    formSubjectPh: "Hiring / Project Discussion",
    formMessagePh: "Hello, I'd like to talk about...",
    mailDefaultSubject: "Portfolio contact",
    footerText: "built with React.",
  },
  id: {
    kicker: "Halo, saya",
    tagline: "Siap memberi dampak",
    heroBlurb:
      "Saya mengubah data menjadi keputusan dan membangun AI yang bekerja di dunia nyata, mulai dari sistem computer vision hingga otomasi alur kerja.",
    openToLabel: "Terbuka untuk posisi",
    openToRoles: ["Data Analyst", "AI Engineer", "ML Engineer"],
    idcardHint: "↕ Tarik kartunya",
    navHome: "Beranda",
    navAbout: "Tentang",
    navPortfolio: "Portofolio",
    navContact: "Kontak",
    ctaProjects: "Lihat proyek",
    ctaContact: "Hubungi saya",
    aboutHeading: "Tentang",
    aboutHeadingAccent: "Saya.",
    aboutIntro: "Halo, saya",
    downloadCv: "Unduh CV",
    openToWork: "Terbuka untuk kerja",
    bio: [
      "Lulusan baru Informatika Telkom University dengan pengalaman langsung di full-stack development, machine learning, dan pemrosesan data, termasuk magang Full-Stack Developer di IPDN dan paper IEEE terpublikasi tentang klasifikasi sampah berbasis deep learning.",
      "Selain kemampuan teknis, saya membawa pengalaman kepemimpinan sebagai Wakil Ketua organisasi mahasiswa beranggotakan 500+ orang, mengasah kemampuan manajemen tim dan koordinasi lintas divisi.",
    ],
    portfolioLead: "Portofolio",
    portfolioAccent: "Karya.",
    tabProjects: "Proyek",
    tabCertificates: "Sertifikat",
    tabExperience: "Pengalaman",
    tabSkills: "Tech Stack",
    backToPortfolio: "Kembali ke portofolio",
    statTechnologies: "Teknologi",
    statKeyFeatures: "Fitur utama",
    techStackHeading: "Tech stack",
    keyAchievementsHeading: "Pencapaian utama",
    problemSolutionHeading: "Masalah & Solusi",
    problemLabel: "Masalah",
    solutionLabel: "Solusi",
    galleryHeading: "Galeri",
    galleryOpen: "Buka foto",
    galleryClose: "Tutup",
    galleryPrev: "Foto sebelumnya",
    galleryNext: "Foto berikutnya",
    prevProject: "Proyek sebelumnya",
    nextProject: "Proyek berikutnya",
    detailsLabel: "Detail",
    downloadNotebook: "Unduh Notebook",
    viewDataset: "Lihat Dataset",
    viewGithub: "Lihat di GitHub",
    contactTitleLead: "Mari",
    contactTitleAccent: "Terhubung.",
    contactSubtitle:
      "Terbuka untuk peluang baru. Baik ada pertanyaan, ide proyek, atau sekadar menyapa, saya akan usahakan membalas secepatnya!",
    labelEmail: "Email",
    labelWhatsapp: "WhatsApp",
    labelLocation: "Lokasi",
    sendMessageHeading: "Kirim pesan",
    formName: "Nama Kamu",
    formEmail: "Email Kamu",
    formSubject: "Subjek",
    formMessage: "Pesan",
    formSubmit: "Kirim Pesan",
    formNamePh: "Budi Santoso",
    formEmailPh: "budi@perusahaan.com",
    formSubjectPh: "Rekrutmen / Diskusi Proyek",
    formMessagePh: "Halo, saya ingin berdiskusi tentang...",
    mailDefaultSubject: "Kontak dari portofolio",
    footerText: "dibuat dengan React.",
  },
};

const projectList = [
  {
    year: "2026",
    highlight: {
      en: "98.75% accuracy · IEEE paper",
      id: "Akurasi 98,75% · Paper IEEE",
    },
    category: "Computer Vision",
    title: {
      en: "Organic and Inorganic Waste Detection using SwinConvNeXt Fusion Model",
      id: "Deteksi Sampah Organik dan Anorganik dengan Model Fusi SwinConvNeXt",
    },
    description: {
      en: "A hybrid dual-branch architecture fusing Swin Transformer and ConvNeXt for binary waste classification, benchmarked against ViT, DenseNet121, and EfficientNet-B0 on a 15,515-image Kaggle dataset with significant class imbalance. Addressed the imbalance with weighted loss and oversampling, and used Grad-CAM and t-SNE for model interpretability.",
      id: "Arsitektur hybrid dua cabang yang menggabungkan Swin Transformer dan ConvNeXt untuk klasifikasi biner sampah, dibandingkan dengan ViT, DenseNet121, dan EfficientNet-B0 pada dataset Kaggle berisi 15.515 gambar dengan ketidakseimbangan kelas yang signifikan. Ketidakseimbangan ditangani dengan weighted loss dan oversampling, sementara Grad-CAM dan t-SNE dipakai untuk interpretabilitas model.",
    },
    problem: {
      en: "Manual waste sorting is slow and error-prone, and automated classifiers trained on real-world data face severe class imbalance (89% vs. 11%), so a model can score high accuracy while still missing the minority class. Single-architecture models also tend to capture either local texture (CNNs) or global context (Transformers), but rarely both.",
      id: "Pemilahan sampah secara manual lambat dan rawan kesalahan, sementara classifier otomatis yang dilatih dengan data dunia nyata menghadapi ketidakseimbangan kelas yang parah (89% vs. 11%), sehingga model bisa meraih akurasi tinggi tetapi tetap gagal mengenali kelas minoritas. Model dengan satu arsitektur juga cenderung hanya menangkap tekstur lokal (CNN) atau konteks global (Transformer), jarang keduanya.",
    },
    solution: {
      en: "Designed SwinConvNeXt, a parallel dual-branch model that fuses Swin Transformer's global context with ConvNeXt's local texture features. Countered the imbalance with weighted loss and oversampling, benchmarked against ViT, DenseNet121, and EfficientNet-B0, and verified what the model learned with Grad-CAM and t-SNE. It reached 98.75% accuracy and 99.74% ROC-AUC, with better organic-waste recall (96.43%) than EfficientNet-B0, which had higher overall accuracy.",
      id: "Merancang SwinConvNeXt, model dua cabang paralel yang menggabungkan konteks global dari Swin Transformer dengan fitur tekstur lokal dari ConvNeXt. Ketidakseimbangan kelas diatasi dengan weighted loss dan oversampling, performanya dibandingkan dengan ViT, DenseNet121, dan EfficientNet-B0, lalu apa yang dipelajari model diverifikasi dengan Grad-CAM dan t-SNE. Hasilnya mencapai akurasi 98,75% dan ROC-AUC 99,74%, dengan recall sampah organik (96,43%) yang lebih baik dibanding EfficientNet-B0, meskipun akurasi keseluruhan EfficientNet-B0 lebih tinggi.",
    },
    techStack: [
      "PyTorch",
      "Swin Transformer",
      "ConvNeXt",
      "timm",
      "Grad-CAM",
      "t-SNE",
    ],
    bullets: {
      en: [
        "Designed SwinConvNeXt, a hybrid architecture combining Swin Transformer and ConvNeXt in a parallel-branch design with a fusion layer, built using PyTorch and timm.",
        "Trained on a 15,515-image dataset with severe class imbalance (89% vs. 11%), applying weighted loss and oversampling to improve minority-class detection.",
        "Achieved 98.75% accuracy, 98.77% F1-Score, and 99.74% ROC-AUC, with stronger organic-waste recall (96.43%) than the higher-accuracy EfficientNet-B0 baseline.",
        "Validated results using Grad-CAM and t-SNE visualizations to confirm the model's feature-learning quality.",
      ],
      id: [
        "Merancang SwinConvNeXt, arsitektur hybrid yang menggabungkan Swin Transformer dan ConvNeXt dalam desain cabang paralel dengan fusion layer, dibangun menggunakan PyTorch dan timm.",
        "Melatih model pada dataset 15.515 gambar dengan ketidakseimbangan kelas yang parah (89% vs. 11%), menerapkan weighted loss dan oversampling untuk meningkatkan deteksi kelas minoritas.",
        "Mencapai akurasi 98,75%, F1-Score 98,77%, dan ROC-AUC 99,74%, dengan recall sampah organik (96,43%) yang lebih tinggi dibanding baseline EfficientNet-B0 yang akurasi keseluruhannya lebih tinggi.",
        "Memvalidasi hasil dengan visualisasi Grad-CAM dan t-SNE untuk memastikan kualitas pembelajaran fitur model.",
      ],
    },
    meta: {
      en: "Final thesis project · Feb – Jun 2026 · Co-authored with Putu Harry Gunawan · IEEE paper presented at AIMS 2026",
      id: "Proyek tugas akhir · Feb – Jun 2026 · Bersama Putu Harry Gunawan · Paper IEEE dipresentasikan di AIMS 2026",
    },
    link: "",
    githubUrl: "",
    image: "/projects/swinconvnext-sample.png",
    notebookFile: "/projects/swinconvnext-waste-detection.ipynb",
    datasetUrl:
      "https://www.kaggle.com/datasets/mostafaabla/garbage-classification",
  },
  {
    year: "2025",
    highlight: {
      en: "Showcased at Informatics exhibition",
      id: "Dipamerkan di pameran Informatika",
    },
    category: {
      en: "Robotics & Embedded Systems",
      id: "Robotika & Sistem Tertanam",
    },
    title: { en: "Autonomous Tank Robot", id: "Robot Tank Otonom" },
    description: {
      en: "A team-built autonomous tank robot combining embedded hardware control with real-time computer vision. It handles obstacle detection, object recognition, and remote operation through a live web dashboard.",
      id: "Robot tank otonom yang dibangun bersama tim, menggabungkan kendali perangkat keras tertanam dengan computer vision real-time. Robot ini menangani deteksi rintangan, pengenalan objek, dan kendali jarak jauh melalui dashboard web langsung.",
    },
    problem: {
      en: "An autonomous robot has to detect obstacles, recognize objects, and react in real time, all on low-power onboard hardware that can't run heavy models. At the same time, operators still need to see what the robot sees and take over when necessary.",
      id: "Robot otonom harus mendeteksi rintangan, mengenali objek, dan bereaksi secara real-time, semuanya di perangkat keras berdaya rendah yang tidak mampu menjalankan model berat. Di saat yang sama, operator tetap perlu melihat apa yang dilihat robot dan mengambil alih kendali saat diperlukan.",
    },
    solution: {
      en: "Split the workload across two controllers: a Raspberry Pi for vision and high-level logic, and an Arduino for LIDAR-based obstacle detection and motor control. Optimized a YOLOv8-Nano detector with TensorFlow Lite for real-time inference on the edge, and built a Flask + WebSocket dashboard for live video streaming and gamepad teleoperation.",
      id: "Membagi beban kerja ke dua kontroler: Raspberry Pi untuk vision dan logika tingkat tinggi, serta Arduino untuk deteksi rintangan berbasis LIDAR dan kendali motor. Mengoptimalkan detektor YOLOv8-Nano dengan TensorFlow Lite agar inferensi berjalan real-time di perangkat edge, dan membangun dashboard Flask + WebSocket untuk streaming video langsung serta kendali jarak jauh dengan gamepad.",
    },
    techStack: [
      "Raspberry Pi",
      "Arduino",
      "YOLOv8-Nano",
      "TensorFlow Lite",
      "Flask",
      "WebSocket",
    ],
    bullets: {
      en: [
        "Built a dual-controller embedded architecture (Raspberry Pi + Arduino) handling LIDAR-based obstacle detection and real-time motor control.",
        "Trained a YOLOv8-Nano object detection model, optimized with TensorFlow Lite for real-time inference on edge hardware.",
        "Developed a live web control dashboard using Flask + WebSocket for real-time video streaming and gamepad teleoperation.",
        "Showcased the robot, UG-243, with the team at the Informatics study program's project exhibition for the Computing Project course.",
      ],
      id: [
        "Membangun arsitektur embedded dua kontroler (Raspberry Pi + Arduino) untuk deteksi rintangan berbasis LIDAR dan kendali motor real-time.",
        "Melatih model deteksi objek YOLOv8-Nano yang dioptimalkan dengan TensorFlow Lite untuk inferensi real-time di perangkat edge.",
        "Mengembangkan dashboard kendali web menggunakan Flask + WebSocket untuk streaming video real-time dan teleoperasi dengan gamepad.",
        "Memamerkan robot UG-243 bersama tim di pameran proyek Prodi Informatika untuk mata kuliah Computing Project.",
      ],
    },
    gallery: [
      {
        src: "/projects/tank-team.jpeg",
        caption: {
          en: "The UG-243 team with the finished robot.",
          id: "Tim UG-243 bersama robot yang telah selesai dibangun.",
        },
      },
      {
        src: "/projects/tank-compex-2025.jpg",
        caption: {
          en: "Team UG-243 at the Informatics project exhibition (Computing Project course).",
          id: "Tim UG-243 di pameran proyek Prodi Informatika (mata kuliah Computing Project).",
        },
      },
      {
        src: "/projects/tank-demo.jpg",
        caption: {
          en: "Demonstrating the robot and its control system during a testing session.",
          id: "Mendemonstrasikan robot dan sistem kendalinya saat sesi pengujian.",
        },
      },
    ],
    meta: {
      en: "Team project, 5 members · Sep – Dec 2025",
      id: "Proyek tim, 5 anggota · Sep – Des 2025",
    },
    link: "",
    githubUrl: "",
    image: "/projects/tank-robot.jpeg",
    githubRepos: [
      {
        url: "https://github.com/mhmmdzul/ug-243-rasp",
        label: { en: "Raspberry Pi Code", id: "Kode Raspberry Pi" },
        short: "RPi",
      },
      {
        url: "https://github.com/mhmmdzul/ug-243-arduino",
        label: { en: "Arduino Code", id: "Kode Arduino" },
        short: "Arduino",
      },
    ],
  },
  {
    year: "2025",
    highlight: { en: "10+ cadets identified", id: "10+ praja teridentifikasi" },
    category: "Computer Vision · Web",
    title: {
      en: "IPDN Cadet Face Recognition System",
      id: "Sistem Pengenalan Wajah Praja IPDN",
    },
    description: {
      en: "A web-based face recognition system built during my internship at IPDN to identify cadets (praja) from a single photo. Instead of manually matching hundreds of cadets to their records, staff upload a photo and the system returns the cadet's name and NPP, while an admin dashboard lets them register new cadets and retrain the model without touching code.",
      id: "Sistem pengenalan wajah berbasis web yang saya bangun selama magang di IPDN untuk mengidentifikasi praja dari satu foto. Alih-alih mencocokkan ratusan praja dengan datanya secara manual, staf cukup mengunggah foto dan sistem menampilkan nama serta NPP praja, sementara dashboard admin memungkinkan staf mendaftarkan praja baru dan melatih ulang model tanpa menyentuh kode.",
    },
    problem: {
      en: "IPDN manages hundreds of cadets (praja), and identifying a cadet from a photo meant matching faces to names and NPP numbers by hand, which was slow and prone to mistakes. Any solution also had to be maintainable by non-technical staff as new cadets join.",
      id: "IPDN mengelola ratusan praja, dan mengidentifikasi praja dari sebuah foto berarti mencocokkan wajah dengan nama dan NPP secara manual, yang lambat dan rawan kesalahan. Solusinya juga harus bisa dikelola oleh staf non-teknis setiap kali ada praja baru.",
    },
    solution: {
      en: "Built a face recognition system that detects faces with MTCNN, encodes them with FaceNet, and classifies identity with a linear SVM. Staff upload a photo and instantly receive the cadet's name and NPP, while an admin dashboard lets them register new cadets with multiple photos and retrain the model in one click, with no code required.",
      id: "Membangun sistem pengenalan wajah yang mendeteksi wajah dengan MTCNN, mengubahnya menjadi embedding dengan FaceNet, dan mengklasifikasikan identitas dengan linear SVM. Staf cukup mengunggah foto dan langsung mendapatkan nama serta NPP praja, sementara dashboard admin memungkinkan staf mendaftarkan praja baru beserta beberapa foto dan melatih ulang model dengan satu klik tanpa perlu menulis kode.",
    },
    techStack: [
      "Python",
      "PHP",
      "PyTorch",
      "facenet-pytorch",
      "MTCNN",
      "FaceNet",
      "scikit-learn",
      "Albumentations",
      "OpenCV",
    ],
    bullets: {
      en: [
        "Built a recognition pipeline where MTCNN detects and aligns faces, a FaceNet model (InceptionResnetV1 pretrained on VGGFace2) converts each face into a 512-dimensional embedding, and a linear SVM classifies the cadet's identity.",
        "Applied data augmentation with Albumentations (brightness/contrast, horizontal flip, shift-scale-rotate), generating extra training samples per photo so the model stays robust with only a few images per cadet.",
        "Developed a web app with a native PHP frontend and Python backend, including admin login and a dataset management page to register a cadet's name, NPP, and multiple photos.",
        "Added one-click model retraining so newly registered cadets are recognized immediately, plus a detection page where users upload a photo and instantly receive the matched name and NPP.",
        "Accurately identified 10+ cadet faces during testing, automatically matching each face to the correct name and NPP.",
        "Handled unregistered faces safely: when a face doesn't match anyone in the dataset, the system returns 'Not recognized' instead of forcing a wrong identity.",
      ],
      id: [
        "Membangun pipeline pengenalan wajah: MTCNN mendeteksi dan menyelaraskan wajah, model FaceNet (InceptionResnetV1 yang dilatih pada VGGFace2) mengubah setiap wajah menjadi embedding 512 dimensi, lalu linear SVM mengklasifikasikan identitas praja.",
        "Menerapkan augmentasi data dengan Albumentations (brightness/contrast, horizontal flip, shift-scale-rotate) untuk menambah sampel latih dari setiap foto, sehingga model tetap andal meski hanya ada sedikit foto per praja.",
        "Mengembangkan aplikasi web dengan frontend PHP native dan backend Python, dilengkapi login admin serta halaman pengelolaan dataset untuk mendaftarkan nama, NPP, dan beberapa foto praja.",
        "Menambahkan fitur latih ulang model dengan satu klik agar praja yang baru didaftarkan langsung dikenali, serta halaman deteksi tempat pengguna mengunggah foto dan langsung mendapatkan nama dan NPP yang cocok.",
        "Berhasil mengidentifikasi 10+ wajah praja dengan tepat selama pengujian, otomatis mencocokkan setiap wajah dengan nama dan NPP yang benar.",
        "Menangani wajah yang tidak terdaftar dengan aman: jika wajah tidak cocok dengan siapa pun di dataset, sistem menampilkan 'Tidak Dikenali' alih-alih memaksakan identitas yang salah.",
      ],
    },
    meta: {
      en: "Internship project · Institut Pemerintahan Dalam Negeri (IPDN) · Jul – Sep 2025",
      id: "Proyek magang · Institut Pemerintahan Dalam Negeri (IPDN) · Jul – Sep 2025",
    },
    link: "",
    githubUrl: "https://github.com/mhmmdzul/project_deteksi_wajah_ipdn",
    image: "/projects/face-recognition.png",
    notebookFile: "/projects/deteksi-wajah-ipdn.ipynb",
    gallery: [
      {
        src: "/projects/face-result-1.png",
        caption: {
          en: "Detection page: the system identifies the uploaded face and returns the matching name and NPP.",
          id: "Halaman deteksi: sistem mengenali wajah yang diunggah dan menampilkan nama serta NPP yang cocok.",
        },
      },
      {
        src: "/projects/face-result-2.png",
        caption: {
          en: "Another successful match from a different photo and lighting condition.",
          id: "Contoh pencocokan lain yang berhasil dengan foto dan pencahayaan berbeda.",
        },
      },
      {
        src: "/projects/face-unknown.png",
        caption: {
          en: "Faces not in the dataset are labeled 'Not recognized' instead of being forced into a wrong match.",
          id: "Wajah yang tidak ada di dataset diberi label 'Tidak Dikenali', bukan dipaksakan ke identitas yang salah.",
        },
      },
    ],
  },
  {
    year: "2025",
    highlight: {
      en: "AI agent · 7 connected tools",
      id: "AI agent · 7 tool terhubung",
    },
    category: {
      en: "AI Automation · Chatbot",
      id: "Otomasi AI · Chatbot",
    },
    title: {
      en: "Praja Assistant Chatbot with n8n AI Agent",
      id: "Chatbot Asisten Praja dengan AI Agent n8n",
    },
    description: {
      en: "A Telegram chatbot for IPDN cadets (praja) powered by an n8n AI agent and Google Gemini. Cadets chat in natural language to look up their data, find learning resources, and get help with routine tasks. The agent decides which tool to use, from Google Sheets lookups to sending Gmail messages and creating Google Calendar events.",
      id: "Chatbot Telegram untuk praja IPDN yang ditenagai AI agent n8n dan Google Gemini. Praja cukup mengobrol dengan bahasa sehari-hari untuk mencari data, menemukan materi belajar, dan dibantu urusan rutin. Agent memilih sendiri tool yang dipakai, mulai dari mencari data di Google Sheets hingga mengirim Gmail dan membuat jadwal di Google Calendar.",
    },
    problem: {
      en: "Assignments are posted on IPDN's Learning Management System (LMS), but the LMS sends no notifications, so cadets have to check it manually and can easily miss deadlines, especially while off campus. Reporting attendance, permission, or sick leave to their supervisors (pembina) is also done manually, and everyday information is scattered across different spreadsheets.",
      id: "Tugas diunggah di Learning Management System (LMS) IPDN, tetapi LMS tidak mengirim notifikasi, sehingga praja harus mengeceknya sendiri dan mudah terlewat tenggatnya, apalagi saat pesiar. Pelaporan kehadiran, izin, atau sakit kepada pembina juga masih manual, dan informasi sehari-hari tersebar di berbagai spreadsheet.",
    },
    solution: {
      en: "Built a Telegram bot backed by an n8n AI agent that uses Google Gemini to understand free-form messages and short-term memory to follow the conversation. The agent is connected to Google Sheets (cadet data, learning resources, email list, important dates), Gmail, and Google Calendar, so one chat can answer questions and take actions. The prototype lays the foundation for automatic LMS assignment reminders and attendance/leave reporting to supervisors.",
      id: "Membangun bot Telegram yang didukung AI agent n8n: Google Gemini memahami pesan bebas, dan memori jangka pendek menjaga alur percakapan. Agent terhubung ke Google Sheets (data praja, materi belajar, daftar email, tanggal penting), Gmail, dan Google Calendar, sehingga satu chat bisa menjawab pertanyaan sekaligus menjalankan aksi. Prototipe ini menjadi fondasi untuk pengingat tugas LMS otomatis dan pelaporan kehadiran/izin kepada pembina.",
    },
    techStack: [
      "n8n",
      "Google Gemini",
      "Telegram Bot API",
      "Google Sheets",
      "Gmail API",
      "Google Calendar API",
      "Docker",
    ],
    bullets: {
      en: [
        "Designed an n8n workflow where a Telegram trigger feeds an AI agent (Google Gemini + conversation memory) that chooses the right tool for each request and replies through Telegram.",
        "Connected the agent to Google Sheets so cadets can look up their class or hometown by NPP and request learning resources (e.g. Docker installation tutorials) from a shared database.",
        "Enabled actions from chat: broadcasting an email to every address in the cadet mailing list and creating Google Calendar events from a single natural-language message.",
        "Self-hosted n8n in a Docker container and tested the bot end-to-end with real conversations in Telegram.",
        "Planned next development: scheduled reminders for new LMS assignments and deadlines, plus attendance, permission, and sick-leave reporting to supervisors.",
      ],
      id: [
        "Merancang workflow n8n: Telegram trigger meneruskan pesan ke AI agent (Google Gemini + memori percakapan) yang memilih tool yang tepat untuk setiap permintaan dan membalas lewat Telegram.",
        "Menghubungkan agent ke Google Sheets sehingga praja bisa mengecek kelas atau asal daerah lewat NPP dan meminta materi belajar (misalnya tutorial instalasi Docker) dari database bersama.",
        "Memungkinkan aksi langsung dari chat: mengirim email ke semua alamat di daftar email praja dan membuat jadwal Google Calendar cukup dengan satu pesan berbahasa sehari-hari.",
        "Menjalankan n8n secara self-hosted di container Docker dan menguji bot secara menyeluruh lewat percakapan langsung di Telegram.",
        "Rencana pengembangan: pengingat terjadwal untuk tugas dan tenggat baru di LMS, serta pelaporan kehadiran, izin, dan sakit kepada pembina.",
      ],
    },
    meta: {
      en: "Solo project · Internship at IPDN · Jul 2025 · Prototype",
      id: "Proyek mandiri · Magang di IPDN · Jul 2025 · Prototipe",
    },
    link: "",
    githubUrl: "https://github.com/mhmmdzul/Project_Automasi_N8N",
    image: "/projects/chatbot-praja-workflow.jpg",
    gallery: [
      {
        src: "/projects/chatbot-praja-workflow.jpg",
        caption: {
          en: "The n8n workflow: Telegram trigger → AI agent (Gemini + memory) → tools for Sheets, Calendar, and Gmail.",
          id: "Workflow n8n: Telegram trigger → AI agent (Gemini + memori) → tool untuk Sheets, Calendar, dan Gmail.",
        },
      },
      {
        src: "/projects/chatbot-praja-chat-1.jpg",
        caption: {
          en: "Looking up a cadet's class by NPP and fetching tutorial links from the database.",
          id: "Mengecek kelas praja lewat NPP dan mengambil link tutorial dari database.",
        },
      },
      {
        src: "/projects/chatbot-praja-chat-2.jpg",
        caption: {
          en: "Sending an email to the whole mailing list and creating a Google Calendar event from chat.",
          id: "Mengirim email ke seluruh daftar email dan membuat jadwal Google Calendar dari chat.",
        },
      },
    ],
  },
  {
    year: "2025",
    highlight: {
      en: "RMSE $14.68 · MAPE 4.16%",
      id: "RMSE $14,68 · MAPE 4,16%",
    },
    category: {
      en: "Time Series · Deep Learning",
      id: "Time Series · Deep Learning",
    },
    title: {
      en: "Tesla (TSLA) Stock Price Forecasting with LSTM",
      id: "Prediksi Harga Saham Tesla (TSLA) dengan LSTM",
    },
    description: {
      en: "Time-series forecasting of Tesla's daily closing price using five LSTM-based models: baseline LSTM, BiLSTM, CNN-LSTM, a manually tuned LSTM, and an LSTM tuned automatically with Keras Tuner. The models were trained on 10 years of Yahoo Finance data and compared with RMSE and MAPE.",
      id: "Peramalan time series harga penutupan harian saham Tesla menggunakan lima model berbasis LSTM: LSTM baseline, BiLSTM, CNN-LSTM, LSTM tuning manual, dan LSTM yang di-tuning otomatis dengan Keras Tuner. Model dilatih dengan data Yahoo Finance selama 10 tahun dan dibandingkan menggunakan RMSE dan MAPE.",
    },
    problem: {
      en: "Stock prices are noisy, non-stationary, and prone to sudden jumps. TSLA shows long calm periods followed by extreme volatility and fat-tailed returns. A single architecture rarely handles this well, so the question is which LSTM design best learns from recent price history to predict the next day's close.",
      id: "Harga saham penuh noise, tidak stasioner, dan rawan lonjakan mendadak. TSLA memiliki periode tenang yang panjang lalu diikuti volatilitas ekstrem dan return dengan fat tails. Satu arsitektur jarang mampu menangani ini dengan baik, sehingga pertanyaannya adalah desain LSTM mana yang paling baik belajar dari riwayat harga terbaru untuk memprediksi harga penutupan esok hari.",
    },
    solution: {
      en: "Built an end-to-end pipeline: EDA on trend, rolling volatility, log returns, and Z-score outliers; a chronological train/validation/test split (2015–2023 / 2024 / 2025); MinMax scaling and 60-day sliding windows; then five LSTM variants trained with early stopping and learning-rate scheduling. The Keras Tuner model performed best with an RMSE of $14.68 and MAPE of 4.16%, about 31% lower error than the baseline.",
      id: "Membangun pipeline end-to-end: EDA tren harga, volatilitas bergulir, log return, dan outlier Z-score; pembagian data berdasarkan waktu (2015–2023 / 2024 / 2025); normalisasi MinMax dan sliding window 60 hari; lalu lima varian LSTM yang dilatih dengan early stopping dan penjadwalan learning rate. Model hasil Keras Tuner memberikan performa terbaik dengan RMSE $14,68 dan MAPE 4,16%, sekitar 31% lebih rendah dari baseline.",
    },
    techStack: [
      "Python",
      "TensorFlow / Keras",
      "Keras Tuner",
      "scikit-learn",
      "pandas",
      "Plotly",
      "yfinance",
    ],
    bullets: {
      en: [
        "Collected 2,611 trading days of TSLA prices (Jan 2015 – May 2025) from Yahoo Finance and ran EDA covering price trend, 30-day rolling volatility, log-return distribution, and Z-score outlier detection.",
        "Split the data chronologically into train (2015–2023), validation (2024), and test (2025) sets to avoid look-ahead bias, then built 60-day sliding windows for one-step-ahead forecasting.",
        "Implemented and compared five architectures: baseline LSTM, Bidirectional LSTM, CNN-LSTM, a manually tuned LSTM, and an LSTM optimized with Keras Tuner RandomSearch.",
        "Achieved the best result with the auto-tuned LSTM (96 units, dropout 0.1): RMSE $14.68 and MAPE 4.16% on 35 test days in Apr–May 2025, about 31% lower RMSE than the baseline.",
        "Found that CNN-LSTM was the strongest hand-designed model (MAPE 4.88%), and that all models track the trend well but lag sudden price jumps.",
      ],
      id: [
        "Mengumpulkan 2.611 hari perdagangan saham TSLA (Jan 2015 – Mei 2025) dari Yahoo Finance dan melakukan EDA meliputi tren harga, volatilitas bergulir 30 hari, distribusi log return, dan deteksi outlier dengan Z-score.",
        "Membagi data berdasarkan urutan waktu menjadi train (2015–2023), validasi (2024), dan test (2025) untuk menghindari kebocoran data masa depan, lalu membentuk sliding window 60 hari untuk prediksi satu hari ke depan.",
        "Mengimplementasikan dan membandingkan lima arsitektur: LSTM baseline, Bidirectional LSTM, CNN-LSTM, LSTM tuning manual, dan LSTM yang dioptimasi dengan Keras Tuner RandomSearch.",
        "Mencapai hasil terbaik dengan LSTM hasil tuning otomatis (96 unit, dropout 0,1): RMSE $14,68 dan MAPE 4,16% pada 35 hari test April–Mei 2025, sekitar 31% lebih rendah dari baseline.",
        "Menemukan bahwa CNN-LSTM adalah model rancangan manual terbaik (MAPE 4,88%), dan semua model mampu mengikuti tren tetapi tertinggal saat terjadi lonjakan harga mendadak.",
      ],
    },
    meta: {
      en: "Machine Learning course project · Group of 3 (built the full pipeline) · May – Jun 2025",
      id: "Tugas besar Machine Learning · Kelompok 3 orang (mengerjakan seluruh pipeline) · Mei – Jun 2025",
    },
    link: "",
    githubUrl: "https://github.com/mhmmdzul/TSLA-Stock-Prediction-LSTM",
    image: "/projects/tsla-prediction-vs-actual.jpg",
    notebookFile: "/projects/tsla-lstm-stock-prediction.ipynb",
    datasetUrl: "https://finance.yahoo.com/quote/TSLA/history/",
    gallery: [
      {
        src: "/projects/tsla-prediction-vs-actual.jpg",
        caption: {
          en: "Next-day predictions of all five models vs the actual price on the test set (Apr–May 2025).",
          id: "Prediksi satu hari ke depan dari kelima model dibandingkan harga aktual pada data test (April–Mei 2025).",
        },
      },
      {
        src: "/projects/tsla-closing-price.jpg",
        caption: {
          en: "TSLA closing price from 2015 to 2025, with the all-time high marked.",
          id: "Harga penutupan TSLA dari 2015 hingga 2025, lengkap dengan titik tertinggi sepanjang masa.",
        },
      },
      {
        src: "/projects/tsla-rolling-volatility.jpg",
        caption: {
          en: "30-day rolling mean and volatility. Volatility rises sharply from 2020 onward.",
          id: "Rata-rata bergerak dan volatilitas 30 hari. Volatilitas meningkat tajam sejak 2020.",
        },
      },
      {
        src: "/projects/tsla-outliers.jpg",
        caption: {
          en: "Extreme daily moves detected with Z-score > 3, clustered around 2020–2021.",
          id: "Pergerakan harian ekstrem yang terdeteksi dengan Z-score > 3, terkumpul di sekitar 2020–2021.",
        },
      },
    ],
  },
];

// Urutan tampil proyek: SwinConvNeXt, Face Recognition, Chatbot n8n, TSLA, Tank Robot
export const projects = [0, 2, 3, 4, 1].map((i) => projectList[i]);
export const certificateLabels = {
  en: { view: "View certificate", issued: "Issued", close: "Close" },
  id: { view: "Lihat sertifikat", issued: "Diterbitkan", close: "Tutup" },
};

export const certificates = [
  {
    image: "/certificates/aims-2026-presenter.jpg",
    issuer: "IEEE Indonesia CSS/RAS · AIMS 2026",
    title: {
      en: "Presenter at the International Conference on AI and Mechatronics Systems",
      id: "Presenter di Konferensi Internasional AI dan Sistem Mekatronika",
    },
    date: { en: "July 2026", id: "Juli 2026" },
  },
  {
    image: "/certificates/elevaite-azure-ai-900.jpg",
    issuer: "elevAIte · Microsoft",
    title: {
      en: "Azure AI Fundamentals (AI-900) Preparation Course",
      id: "Kursus Persiapan Azure AI Fundamentals (AI-900)",
    },
    date: { en: "May 2025", id: "Mei 2025" },
  },
  {
    image: "/certificates/ipdn-internship.jpg",
    issuer: "Institut Pemerintahan Dalam Negeri (IPDN)",
    title: {
      en: "Internship at the Data Management & Information Systems Unit",
      id: "Magang di Lembaga Pengelolaan Data dan Sistem Informasi",
    },
    date: { en: "Aug 2025", id: "Agu 2025" },
  },
  {
    image: "/certificates/badminton-superseries-2025.jpg",
    issuer: "Telkom University Badminton Club",
    title: {
      en: "1st Place, Men's Doubles, Superseries 2025",
      id: "Juara 1 Ganda Putra, Superseries 2025",
    },
    date: "Nov 2025",
  },
  {
    image: "/certificates/tubc-internal-coordinator-2024.jpg",
    issuer: "Telkom University Badminton Club",
    title: {
      en: "Certificate of Appreciation: Internal Division Coordinator",
      id: "Sertifikat Apresiasi: Koordinator Divisi Internal",
    },
    date: "2024",
  },
  {
    image: "/certificates/leadership-softskill.jpg",
    issuer: "Telkom University",
    title: {
      en: "Soft Skills Development III: Leadership",
      id: "Pengembangan Softskill III: Leadership",
    },
    date: "Sep 2025",
  },
  {
    image: "/certificates/telu-career-coach.jpg",
    issuer: "Telkom University",
    title: {
      en: "Tel-U Career Coach (STAR): Distance Learning",
      id: "Tel-U Career Coach (STAR): Pembelajaran Jarak Jauh",
    },
    date: "2025",
  },
  {
    image: "/certificates/lkmm-tm.jpg",
    issuer: "Telkom University",
    title: {
      en: "LKMM-TM: Intermediate Student Management Skills Training",
      id: "LKMM-TM: Latihan Keterampilan Manajemen Mahasiswa Tingkat Menengah",
    },
    date: "Feb 2025",
  },
  {
    image: "/certificates/lkmm-td.jpg",
    issuer: "Telkom University",
    title: {
      en: "LKMM-TD: Basic Student Management Skills Training",
      id: "LKMM-TD: Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar",
    },
    date: "Feb 2025",
  },
  {
    image: "/certificates/tubc-internal-2023.jpg",
    issuer: "Telkom University Badminton Club",
    title: {
      en: "Certificate of Appreciation: Internal Division Member",
      id: "Sertifikat Apresiasi: Anggota Divisi Internal",
    },
    date: "2023",
  },
];

export const experienceLabels = {
  en: { other: "Other experience" },
  id: { other: "Pengalaman lainnya" },
};

export const experience = [
  {
    featured: true,
    date: { en: "Jul 2025 – Aug 2025", id: "Jul 2025 – Agu 2025" },
    title: {
      en: "Full-Stack Developer Intern",
      id: "Magang Full-Stack Developer",
    },
    org: "Institut Pemerintahan Dalam Negeri (IPDN)",
    unit: {
      en: "Data Management & Information Systems Unit",
      id: "Lembaga Pengelolaan Data dan Sistem Informasi",
    },
    detail: {
      en: "Built web, data, and AI tools for IPDN's data and information systems unit, from the cadets' learning platform to computer vision and NLP prototypes that support campus administration.",
      id: "Membangun tools web, data, dan AI untuk unit pengelolaan data dan sistem informasi IPDN, mulai dari platform pembelajaran praja hingga prototipe computer vision dan NLP yang mendukung administrasi kampus.",
    },
    bullets: {
      en: [
        "Designed an end-to-end UI/UX for IPDN's Learning Management System (LMS), streamlining the digital learning experience for hundreds of cadets.",
        "Built a face recognition web app (PHP frontend, Python backend with MTCNN + FaceNet) that identifies cadets from a photo and matches their name and NPP.",
        "Classified 350+ comments on IPDN's official Instagram into positive and negative sentiment to map public perception of the institution.",
        "Developed a Telegram chatbot that delivers important announcements and information to cadets.",
      ],
      id: [
        "Merancang UI/UX end-to-end untuk Learning Management System (LMS) IPDN, menyederhanakan pengalaman belajar digital bagi ratusan praja.",
        "Membangun aplikasi web pengenalan wajah (frontend PHP, backend Python dengan MTCNN + FaceNet) yang mengidentifikasi praja dari foto serta mencocokkan nama dan NPP-nya.",
        "Mengklasifikasikan 350+ komentar di Instagram resmi IPDN ke dalam sentimen positif dan negatif untuk memetakan persepsi publik terhadap institusi.",
        "Mengembangkan chatbot Telegram untuk menyampaikan pengumuman dan informasi penting kepada praja.",
      ],
    },
    tags: ["Python", "PHP", "UI/UX", "Computer Vision", "NLP", "Telegram Bot"],
    photos: [
      {
        src: "/experience/ipdn-team.jpeg",
        caption: {
          en: "Working session with fellow interns",
          id: "Sesi kerja bersama rekan magang",
        },
      },
      {
        src: "/experience/ipdn-office.jpeg",
        caption: {
          en: "Daily work at the Data & Information Systems office",
          id: "Keseharian di kantor Pengelolaan Data & Sistem Informasi",
        },
      },
      {
        src: "/experience/ipdn-coding.jpg",
        caption: {
          en: "Coding and debugging together with the team",
          id: "Coding dan debugging bersama tim",
        },
      },
    ],
  },
  {
    date: "Jul 2026",
    title: "Presenter, AIMS 2026",
    detail: {
      en: "Presented the SwinConvNeXt waste detection paper, co-authored with Putu Harry Gunawan, at the International Conference on Artificial Intelligence and Mechatronics Systems.",
      id: "Mempresentasikan paper deteksi sampah SwinConvNeXt yang ditulis bersama Putu Harry Gunawan di International Conference on Artificial Intelligence and Mechatronics Systems.",
    },
  },
  {
    date: "2022 – 2026",
    title: {
      en: "Bachelor of Informatics, Telkom University",
      id: "Sarjana Informatika, Telkom University",
    },
    detail: {
      en: "Graduated Cum Laude with a GPA of 3.73/4.00. Final thesis on SwinConvNeXt, published as an IEEE conference paper.",
      id: "Lulus Cum Laude dengan IPK 3,73/4,00. Tugas akhir tentang SwinConvNeXt, dipublikasikan sebagai paper konferensi IEEE.",
    },
  },
  {
    featured: true,
    reverse: true,
    date: { en: "Jan 2025 – Jan 2026", id: "Jan 2025 – Jan 2026" },
    title: { en: "Vice President", id: "Wakil Ketua" },
    org: "Telkom University Badminton Club",
    unit: {
      en: "UKM (Student Activity Unit) · Telkom University",
      id: "UKM (Unit Kegiatan Mahasiswa) · Telkom University",
    },
    detail: {
      en: "Served as Vice President of one of Telkom University's largest student activity units, helping lead 500+ members and a 60-person board across 6 divisions alongside the Chairperson.",
      id: "Menjabat sebagai Wakil Ketua salah satu unit kegiatan mahasiswa terbesar di Telkom University, ikut memimpin 500+ anggota dan 60 pengurus di 6 divisi bersama Ketua.",
    },
    bullets: {
      en: [
        "Collaborated with the Chairperson in carrying out the vision and mission of the organization.",
        "Managed and coordinated 500+ members across 6 divisions with 60 board members, ensuring smooth operations through efficient organizational administration.",
        "Performed the Chairperson's duties in their absence, including at meetings, official events, and other activities.",
        "Assisted the Chairperson in day-to-day duties, including work program planning and evaluation.",
        "Oversaw internal and external operations, training programs, logistics, design, and entrepreneurship.",
      ],
      id: [
        "Berkolaborasi dengan Ketua dalam menjalankan visi dan misi organisasi.",
        "Mengelola dan mengoordinasikan 500+ anggota di 6 divisi bersama 60 pengurus, memastikan operasional berjalan lancar melalui administrasi organisasi yang efisien.",
        "Menjalankan tugas Ketua saat berhalangan, termasuk dalam rapat, acara resmi, dan kegiatan lainnya.",
        "Membantu Ketua dalam tugas sehari-hari, termasuk perencanaan dan evaluasi program kerja.",
        "Mengawasi operasional internal dan eksternal, program latihan, logistik, desain, dan kewirausahaan.",
      ],
    },
    tags: {
      en: [
        "Analytical Thinking",
        "Problem Solving",
        "Communication",
        "Team Collaboration",
      ],
      id: [
        "Berpikir Analitis",
        "Pemecahan Masalah",
        "Komunikasi",
        "Kolaborasi Tim",
      ],
    },
    photos: [
      {
        src: "/experience/tubc-superseries-2025.jpg",
        caption: {
          en: "Giving a speech at the Super Series 2025 tournament",
          id: "Memberikan sambutan di turnamen Super Series 2025",
        },
      },
      {
        src: "/experience/tubc-foto-kepengurusan.jpg",
        caption: {
          en: "The 2025 Telkom University Badminton Club board",
          id: "Kepengurusan UKM Badminton Telkom University 2025",
        },
      },
      {
        src: "/experience/tubc-kepengurusan.jpg",
        caption: {
          en: "Announced as Vice President of the 2025 board",
          id: "Diumumkan sebagai Wakil Ketua kepengurusan 2025",
        },
      },
      {
        src: "/experience/tubc-pengurus.jpg",
        caption: {
          en: "With fellow board members during a club event",
          id: "Bersama rekan pengurus saat acara UKM",
        },
      },
    ],
  },
  {
    date: "Jan – Nov 2024",
    title: {
      en: "Internal Coordinator, Telkom University Badminton Club",
      id: "Koordinator Internal, UKM Badminton Telkom University",
    },
    detail: {
      en: "Coordinated the Internal division, oversaw the club's work programs, and evaluated their implementation for effectiveness and efficiency.",
      id: "Mengoordinasikan divisi Internal, mengawasi program kerja UKM, dan mengevaluasi pelaksanaannya agar efektif dan efisien.",
    },
  },
  {
    date: { en: "Aug – Nov 2023", id: "Agu – Nov 2023" },
    title: {
      en: "Event Staff, Telkom University Badminton Club",
      id: "Staf Acara, UKM Badminton Telkom University",
    },
    detail: {
      en: "Designed and ran the selection process for 500+ prospective members, including setting technical, physical, and interview assessment criteria.",
      id: "Merancang dan menjalankan seleksi untuk 500+ calon anggota, termasuk menyusun kriteria penilaian teknis, fisik, dan wawancara.",
    },
  },
];

// ── Form kontak (Web3Forms) ──
export const contactConfig = {
  // Tempel access key dari web3forms.com di sini
  web3formsKey: "bdfd0804-2e2f-47d2-b12c-e52625699232",
};

export const contactStatus = {
  en: {
    sending: "Sending…",
    success: "Message sent! I'll get back to you soon.",
    error: "Couldn't send your message. Please try again or email me directly.",
  },
  id: {
    sending: "Mengirim…",
    success: "Pesan terkirim! Saya akan segera membalas.",
    error: "Pesan gagal terkirim. Coba lagi atau kirim email langsung ke saya.",
  },
};
