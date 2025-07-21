const products = [
    {
        id: 1,
        name: "iPhone 16",
        brand: "Apple",
        category: "smartphones",
        price: 23500,
        originalPrice: 32995,
        rating: 5,
        reviews: 8,
        images: [
            "https://imgs.search.brave.com/Cl18TjDASWf9_eCPh8yESWcUHsTy4hKUsEzhZDBciEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvMjU2MTI4/OTUvRFNDMDgzMjJf/cHJvY2Vzc2VkLmpw/Zz9xdWFsaXR5PTkw/JnN0cmlwPWFsbCZj/cm9wPTAsMCwxMDAs/MTAwJnc9MjQwMA",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2016.png?updatedAt=1750208665062",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2016%201.3.png?updatedAt=1750208661858"
        ],
        description: "El iPhone 16 ofrece un diseño elegante con chip A18 y cámara avanzada para fotos y videos impresionantes.",
        specs: {
            pantalla: "6.1 pulgadas Super Retina XDR OLED",
            procesador: "A18",
            almacenamiento: "128GB",
            camara: "Cámara dual: Fusion 48MP + Ultra gran angular 12MP",
            bateria: "Hasta 22 horas de reproducción de vídeo",
            sistema: "iOS 18",
            color: "Varios"
        },
        features: [
            "Resistente al agua IP68 (hasta 6 metros por 30 minutos)",
            "Dynamic Island",
            "Conexión 5G",
            "Face ID",
            "Carga inalámbrica MagSafe hasta 25W",
            "Control de Cámara",
            "Apple Intelligence",
            "Ceramic Shield",
            "Conector USB-C"
        ],
        isBestseller: true,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 2,
        name: "iPhone 16 Plus",
        brand: "Apple",
        category: "smartphones",
        price: 30500,
        originalPrice: 32995,
        rating: 4,
        reviews: 3,
        images: [
            "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2016%201.2.png?updatedAt=1750208662170",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2016%20plus%20(2).png?updatedAt=1750208661623"
        ],
        description: "El iPhone 16 Plus con pantalla más grande y batería de larga duración, ideal para multimedia.",
        specs: {
            pantalla: "6.7 pulgadas Super Retina XDR OLED",
            procesador: "A18",
            almacenamiento: "256GB",
            camara: "Cámara dual: Fusion 48MP + Ultra gran angular 12MP",
            bateria: "Hasta 27 horas de reproducción de vídeo",
            sistema: "iOS 18",
            color: "Black/Azul Marine"
        },
        features: [
            "Resistente al agua IP68 (hasta 6 metros por 30 minutos)",
            "Dynamic Island",
            "Conexión 5G",
            "Face ID",
            "ESIM",
            "Carga inalámbrica MagSafe hasta 25W",
            "Control de Cámara",
            "Apple Intelligence",
            "Ceramic Shield",
            "Conector USB-C"
        ],
        isBestseller: false,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 4,
        name: "iPhone 13",
        brand: "Apple",
        category: "smartphones",
        price: 13800,
        originalPrice: 32999,
        rating: 5,
        reviews: 3,
        images: [
            "https://m.media-amazon.com/images/I/71MKNCEgE6L.jpg",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2013%20normal%20%20128gb%20(2).png?updatedAt=1750208659812",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2013%20normal%20%20128gb%20(3).png?updatedAt=1750208659482"
        ],
        description: "El iPhone 13 combina rendimiento y estilo con el chip A15 Bionic y un sistema de cámaras avanzado.",
        specs: {
            pantalla: "6.1 pulgadas Super Retina XDR",
            procesador: "A15 Bionic (con GPU de 5 núcleos)",
            almacenamiento: "128GB",
            camara: "Doble cámara de 12MP (Gran Angular ƒ/1.5, Ultra Gran Angular ƒ/2.4)",
            bateria: "3279 mAh (hasta 20 horas de reproducción de video)",
            sistema: "iOS 16 (actualizable a iOS 18)",
            color: "Varios"
        },
        features: [
            "Resistencia al agua y polvo IP68",
            "Conexión 5G",
            "Face ID",
            "Carga inalámbrica MagSafe",
            "Modo Cine (hasta 4K Dolby Vision a 30 fps)",
            "Modo Acción para videos estables",
            "Detección de Accidentes (Crash Detection)",
            "Emergencia SOS vía satélite"
        ],
        isBestseller: false,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 5,
        name: "iPhone 13 Pro Max",
        brand: "Apple",
        category: "smartphones",
        price: 17500,
        originalPrice: 32995,
        rating: 5,
        reviews: 3,
        images: [
            "https://aitexpresshn.com/wp-content/uploads/2022/08/IP13PM.png",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2013%20Pro%20Max%201.1.png?updatedAt=1750208659453",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2013%20Max%20(3).png?updatedAt=1750208659347"
        ],
        description: "El iPhone 13 Pro Max ofrece una pantalla ProMotion y un sistema de cámaras profesional.",
        specs: {
            pantalla: "6.7 pulgadas Super Retina XDR con ProMotion (120Hz)",
            procesador: "A15 Bionic",
            almacenamiento: "256GB/128GB",
            camara: "Triple cámara de 12MP (Gran Angular ƒ/1.5, Ultra Gran Angular ƒ/1.8, Teleobjetivo ƒ/2.8) + escáner LiDAR",
            bateria: "4352 mAh (hasta 28 horas de reproducción de video)",
            sistema: "iOS 15 (actualizable a iOS 18)",
            color: "Varios"
        },
        features: [
            "Resistencia al agua y polvo IP68",
            "Pantalla ProMotion de 120Hz",
            "Conexión 5G",
            "Face ID",
            "Carga inalámbrica MagSafe",
            "Modo Cine para grabación de video",
            "Estabilización óptica de imagen por desplazamiento de sensor"
        ],
        isBestseller: true,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 6,
        name: "iPhone 11 Pro Max",
        brand: "Apple",
        category: "smartphones",
        price: 10500,
        originalPrice: 45995,
        rating: 5,
        reviews: 3,
        images: [
            "https://m.media-amazon.com/images/I/51-7KEQ9kbL.jpg",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2011%20Pro%20Max%20512%20GB.png?updatedAt=1750208658685",
            "https://ik.imagekit.io/anr5mu99tt/Catalogo/iPhone%2011%20Pro%20Max%20512%20GB%20(2).png?updatedAt=1750208657856"
        ],
        description: "El iPhone 11 Pro Max ofrece un rendimiento sólido con su sistema de triple cámara y batería duradera.",
        specs: {
            pantalla: "6.5 pulgadas Super Retina XDR OLED",
            procesador: "A13 Bionic",
            almacenamiento: "512GB",
            camara: "Triple cámara de 12MP (Gran Angular ƒ/1.8, Ultra Gran Angular ƒ/2.4, Teleobjetivo ƒ/2.0)",
            bateria: "3969 mAh (hasta 20 horas de reproducción de video)",
            sistema: "iOS 13 (actualizable a iOS 18)",
            color: "Gold/SpaceGray"
        },
        features: [
            "Resistencia al agua y polvo IP68",
            "Conexión 4G LTE",
            "Face ID",
            "Carga inalámbrica",
            "Modo Noche para fotografía en baja luz",
            "Grabación de video 4K a 60 fps"
        ],
        isBestseller: false,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 7,
        name: "Xbox Series S",
        brand: "Microsoft",
        category: "consolas",
        price: 7800,
        originalPrice: 13990,
        rating: 5,
        reviews: 3,
        images: [
            "https://imgs.search.brave.com/HAXMB60v2mMibIxW99mJKC3P7OLYA9F0IEQivWXJZ2Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbXMt/YXNzZXRzLnhib3hz/ZXJ2aWNlcy5jb20v/YXNzZXRzLzA3L2E5/LzA3YTkzODQ2LTIw/YzYtNGNjZC05YjBh/LTg4NzE4YTk5Zjg5/NC5wbmc_bj0zODk5/NjRfSGVyby1HYWxs/ZXJ5LTBfQTJfODU3/eDY3Ni5wbmc",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/XBOX%20ONE%20SERIES%20S%20512%20GB%20(2)%20(1).png?updatedAt=1750299209952",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/XBOX%20ONE%20SERIES%20S%20512%20GB%20(1).png?updatedAt=1750299209922"
        ],
        description: "La Xbox Series S es una consola compacta diseñada para juegos digitales en 1440p con soporte para 120 FPS.",
        specs: {
            procesador: "CPU: 8 núcleos Zen 2 personalizados a 3.6 GHz (3.4 GHz con SMT) | GPU: RDNA 2 personalizada de 4 TFLOPS, 20 CUs a 1.565 GHz",
            memoria: "10 GB GDDR6 (8 GB a 224 GB/s, 2 GB a 56 GB/s)",
            almacenamiento: "SSD NVMe personalizado de 512 GB",
            resolucion_juego: "1440p (QHD), reescalado a 4K para medios",
            rendimiento: "Hasta 120 FPS",
            unidad_optica: "Ninguna (solo digital)",
            sonido: "L-PCM hasta 7.1, Dolby Digital 5.1, DTS 5.1, Dolby TrueHD con Atmos",
            color: "Blanco"
        },
        features: [
            "Arquitectura Xbox Velocity (para tiempos de carga ultrarrápidos y Quick Resume)",
            "Ray Tracing acelerado por hardware",
            "Soporte para Variable Rate Shading (VRS)",
            "Soporte para Variable Refresh Rate (VRR)",
            "Modo de baja latencia automática (ALLM)",
            "Compatible con juegos de Xbox One, Xbox 360 y Xbox original",
            "Smart Delivery",
            "Expansión de almacenamiento mediante tarjetas de expansión Seagate",
            "Compatible con discos duros externos USB 3.1"
        ],
        isBestseller: false,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 8,
        name: "Samsung Galaxy S25 Ultra",
        brand: "Samsung",
        category: "smartphones",
        price: 38700,
        originalPrice: 41999,
        rating: 5,
        reviews: 3,
        images: [
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/image-removebg-preview.png?updatedAt=1750300888615",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/Samsung%20S25%20U%20(2)%20(1).png?updatedAt=1750299206113",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/Samsung%20S25%20U%20(5)%20(1).png?updatedAt=1750299207870"
        ],
        description: "El Samsung Galaxy S25 Ultra ofrece un rendimiento de vanguardia con S Pen y una cámara de 200MP.",
        specs: {
            pantalla: "6.9 pulgadas Dynamic AMOLED 2X, QHD+ (3120 x 1440 píxeles), 120Hz adaptativos",
            procesador: "Qualcomm Snapdragon 8 Gen 4 para Galaxy",
            almacenamiento: "512GB (UFS 4.0)",
            ram: "12GB (LPDDR5X)",
            camara: "Cuádruple cámara trasera: 200MP Principal (f/1.7, OIS), 50MP Ultra Gran Angular (f/2.2), 50MP Teleobjetivo periscopio (5x zoom óptico, f/3.4, OIS), 10MP Teleobjetivo (3x zoom óptico, f/2.4, OIS) | Cámara frontal: 12MP (f/2.2)",
            bateria: "5000 mAh",
            sistema: "Android 15 con One UI 7",
            color: "Blue Titanium/Grey Titanium/White Titanium"
        },
        features: [
            "S Pen integrado",
            "Diseño con marco de titanio",
            "Resistencia al agua y polvo IP68",
            "Conectividad 5G (mmWave y sub-6 GHz)",
            "Wi-Fi 7",
            "Bluetooth 5.4",
            "Carga rápida de 45W (por cable)",
            "Carga inalámbrica rápida de 25W (Qi2)",
            "PowerShare inalámbrico",
            "Seguridad con Samsung Knox",
            "Funciones avanzadas de Galaxy AI",
            "Grabación de video 8K a 30fps"
        ],
        isBestseller: true,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 9,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        category: "smartphones",
        price: 29500,
        originalPrice: 41995,
        rating: 5,
        reviews: 3,
        images: [
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/image.png?updatedAt=1750301807901",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/Samsung%20Galaxy%20S24%20Ultral%20(3)%20(1).png?updatedAt=17502992054253",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/Samsung%20Galaxy%20S24%20Ultral%20(1).png?updatedAt=1750299205214"
        ],
        description: "El Samsung Galaxy S24 Ultra combina un diseño premium con funciones avanzadas de IA y cámara de alta calidad.",
        specs: {
            pantalla: "6.9 pulgadas Dynamic AMOLED 2X, QHD+ (3120 x 1440 píxeles), 120Hz adaptativos",
            procesador: "Qualcomm Snapdragon 8 Gen 3 para Galaxy",
            almacenamiento: "512GB (UFS 4.0)",
            ram: "12GB (LPDDR5X)",
            camara: "Cuádruple cámara trasera: 200MP Principal (f/1.7, OIS), 50MP Ultra Gran Angular (f/2.2), 50MP Teleobjetivo periscopio (5x zoom óptico, f/3.4, OIS), 10MP Teleobjetivo (3x zoom óptico, f/2.4, OIS) | Cámara frontal: 12MP (f/2.2)",
            bateria: "5000 mAh",
            sistema: "Android 15 con One UI 7",
            color: "Varios"
        },
        features: [
            "S Pen integrado",
            "Diseño con marco de titanio",
            "Resistencia al agua y polvo IP68",
            "Conectividad 5G (mmWave y sub-6 GHz)",
            "Wi-Fi 7",
            "Bluetooth 5.4",
            "Carga rápida de 45W (por cable)",
            "Carga inalámbrica rápida de 25W (Qi2)",
            "PowerShare inalámbrico",
            "Seguridad con Samsung Knox",
            "Funciones avanzadas de Galaxy AI",
            "Grabación de video 8K a 30fps"
        ],
        isBestseller: false,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 10,
        name: "Samsung Galaxy S22 Ultra",
        brand: "Samsung",
        category: "smartphones",
        price: 17500,
        originalPrice: 22353,
        rating: 5,
        reviews: 3,
        images: [
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/image-removebg-preview%20(3).png?updatedAt=1750302666204",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/Samsung%20Galaxy%20S22%20Ultra%20(1).png?updatedAt=1750299205034",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/Samsung%20S22%20U%20(1).png?updatedAt=1750299205581"
        ],
        description: "El Samsung Galaxy S22 Ultra ofrece un S Pen integrado y un sistema de cámaras versátil.",
        specs: {
            pantalla: "6.8 pulgadas Dynamic AMOLED 2X, Quad HD+ (3088 x 1440 píxeles), 120Hz adaptativos",
            procesador: "Qualcomm Snapdragon 8 Gen 1",
            almacenamiento: "256GB (UFS 3.1)",
            ram: "12GB (LPDDR5)",
            camara: "Cuádruple cámara trasera: 108MP Principal (f/1.8, OIS), 12MP Ultra Gran Angular (f/2.2), 10MP Teleobjetivo (3x zoom óptico, f/2.4, OIS), 10MP Teleobjetivo periscopio (10x zoom óptico, f/4.9, OIS) | Cámara frontal: 40MP (f/2.2)",
            bateria: "5000 mAh",
            sistema: "Android 12 (actualizable a Android 15 y One UI 7.0)",
            color: "Negro"
        },
        features: [
            "S Pen integrado",
            "Incluye caja, cable y protector",
            "Resistencia al agua y polvo IP68",
            "Conectividad 5G",
            "Wi-Fi 6E",
            "Bluetooth 5.2",
            "Carga rápida de 45W (por cable)",
            "Carga inalámbrica rápida de 15W",
            "PowerShare inalámbrico",
            "Sensor de huellas ultrasónico en pantalla",
            "Diseño con marco de aluminio Armor Aluminum y Gorilla Glass Victus+",
            "Grabación de video 8K a 24fps"
        ],
        isBestseller: true,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 11,
        name: "Google Pixel 9 Pro XL",
        brand: "Google",
        category: "smartphones",
        price: 25500,
        originalPrice: 35989,
        rating: 5,
        reviews: 3,
        images: [
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/image-removebg-preview%20(4).png?updatedAt=1750303963753",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/Google%20Pixel%209%20pro%20xl%20256gb%2016%20ram%20tensor%20g4%20(1).png?updatedAt=1750299196038",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/Google%20Pixel%209%20pro%20xl%20256%20gb%2016%20ram%20tensor%20g4%20(2)%20(1).png?updatedAt=1750299194408"
        ],
        description: "El Google Pixel 9 Pro XL ofrece fotografía computacional avanzada y una experiencia Android pura.",
        specs: {
            pantalla: "6.8 pulgadas Super Actua OLED (LTPO), 1344 x 2992 píxeles, 1-120Hz adaptativos",
            procesador: "Google Tensor G4 con coprocesador de seguridad Titan M2",
            almacenamiento: "256GB (UFS 4.0)",
            ram: "16GB (LPDDR5X)",
            camara: "Triple cámara trasera: 50MP Principal (f/1.68, OIS), 48MP Ultra Gran Angular (f/1.7), 48MP Teleobjetivo (5x zoom óptico, f/2.8, OIS) | Cámara frontal: 42MP (f/2.2, autofocus)",
            bateria: "5060 mAh",
            sistema: "Android 14 (actualizable a Android 21)"
        },
        features: [
            "Diseño con marco de aluminio y cristal Gorilla Glass Victus 2",
            "Resistencia al agua y polvo IP68",
            "Conectividad 5G (sub-6 GHz y mmWave)",
            "Wi-Fi 7",
            "Bluetooth 5.4",
            "NFC",
            "Puerto USB-C (USB 3.2)",
            "Lector de huellas ultrasónico bajo la pantalla",
            "Altavoces estéreo",
            "Carga rápida de 37W (por cable)",
            "Carga inalámbrica rápida de 23W",
            "Carga inalámbrica inversa",
            "Funcionalidades avanzadas de Google AI con Gemini",
            "Video 8K a 30fps",
            "Conexión satelital de emergencia",
            "Sensor de temperatura trasero"
        ],
        isBestseller: true,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 12,
        name: "ASUS ROG Phone 8 Pro",
        brand: "Asus",
        category: "consolas",
        price: 31000,
        originalPrice: 35989,
        rating: 5,
        reviews: 3,
        images: [
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/image-removebg-preview%20(5).png?updatedAt=1750304669417",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/ASUS%20RogPhone%208%20PRO%20Color%20Negro%20512%20gb%2016ram%20(1).png?updatedAt=1750299194592",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/ASUS%20RogPhone%208%20PRO%20Color%20Negro%20512%20gb%2016ram%20(4)%20(1).png?updatedAt=1750299193868"
        ],
        description: "El ASUS ROG Phone 8 Pro es un smartphone gaming con rendimiento extremo y funciones avanzadas para juegos.",
        specs: {
            pantalla: "6.78 pulgadas Samsung Flexible AMOLED (LTPO), Full HD+ (2400 x 1080 píxeles), 1-120Hz adaptativos",
            procesador: "Qualcomm Snapdragon 8 Gen 3 (Octa-core a 3.3 GHz)",
            almacenamiento: "512GB (UFS 4.0)",
            ram: "16GB (LPDDR5X)",
            camara: "Triple cámara trasera: 50MP Principal (Sony IMX890, f/1.9, OIS), 13MP Ultra Gran Angular (f/2.2), 32MP Teleobjetivo (f/2.4, OIS) | Cámara frontal: 32MP (f/2.2)",
            bateria: "5500 mAh",
            sistema: "Android 14 con ROG UI",
            color: "Negro"
        },
        features: [
            "Diseño Phantom Black",
            "Resistencia al agua y polvo IP68",
            "AirTriggers ultrasónicos",
            "Conectividad 5G",
            "Wi-Fi 7",
            "Bluetooth 5.4",
            "Jack de auriculares de 3.5mm",
            "Altavoces estéreo con Dirac Virtuo",
            "Carga rápida de 65W (por cable)",
            "Carga inalámbrica de 15W (Qi)",
            "Sistema de enfriamiento GameCool 8",
            "Iluminación Aura RGB programable",
            "Grabación de video 8K a 24fps",
            "Compatible con accesorios de juego externos"
        ],
        isBestseller: false,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 13,
        name: "Apple Watch Ultra 2",
        brand: "Apple",
        category: "accesorios",
        price: 20500,
        originalPrice: 30995,
        rating: 5,
        reviews: 3,
        images: [
            "https://ik.imagekit.io/anr5mu99tt/image-removebg-preview%20(6).png?updatedAt=1750305257076",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/7q5yJcsk6PYvebMfKdcLpR-removebg-preview.png?updatedAt=1750305420724",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/Apple%20Whatch%20Ultra%202%20GEN%2048%20mm%20(1).png?updatedAt=1750299194643"
        ],
        description: "El Apple Watch Ultra 2 es un reloj robusto diseñado para deportes extremos y aventuras al aire libre.",
        specs: {
            pantalla: "Always-On Retina LTPO2 OLED, 49mm (410 x 502 píxeles), 1185 mm² de área de pantalla",
            procesador: "S9 SiP con procesador de doble núcleo de 64 bits",
            almacenamiento: "64GB",
            bateria: "Hasta 36 horas de uso normal",
            sistema: "watchOS 10 (actualizable a watchOS 11.5)",
            dimensiones: "49mm (alto) x 44mm (ancho) x 14.4mm (grosor)",
            peso: "61.4 gramos (titanio natural) / 61.8 gramos (titanio negro)",
            color: "Titanio"
        },
        features: [
            "Caja de titanio de grado aeroespacial",
            "Resistencia al agua de 100m (apto para buceo recreativo hasta 40m)",
            "Resistencia al polvo IP6X",
            "Certificación MIL-STD 810H",
            "Botón de Acción personalizable",
            "Sirena de 86 decibelios",
            "GPS de doble frecuencia y precisión (L1+L5)",
            "Conectividad celular (LTE y UMTS)",
            "Wi-Fi 4 (802.11n)",
            "Bluetooth 5.3",
            "Chip de banda ultraancha de segunda generación",
            "Sensores: oxígeno en sangre, ECG, frecuencia cardíaca, temperatura, profundidad",
            "Detección de accidentes y caídas",
            "Emergencia SOS",
            "Gesto Doble Toque",
            "Siri en el dispositivo"
        ],
        isBestseller: true,
        isOnOffer: true,
        badge: "Oferta"
    },
    {
        id: 14,
        name: "Samsung Galaxy Watch Ultra",
        brand: "Samsung",
        category: "accesorios",
        price: 20500,
        originalPrice: 30995,
        rating: 5,
        reviews: 3,
        images: [
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/descarga.png?updatedAt=1750305959078",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/image-removebg-preview%20(7).png?updatedAt=1750306277371",
            "https://ik.imagekit.io/anr5mu99tt/New%20Folder/image-removebg-preview%20(8).png?updatedAt=1750306277431"
        ],
        description: "El Samsung Galaxy Watch Ultra es un reloj premium con funciones avanzadas de salud y durabilidad extrema.",
        specs: {
            pantalla: "1.5 pulgadas Super AMOLED (480 x 480 píxeles), Always On Display",
            procesador: "Exynos W1000 (3 nm)",
            memoria: "2 GB RAM",
            almacenamiento: "32GB",
            bateria: "590 mAh (hasta 60 horas en uso normal)",
            sistema: "Wear OS Powered by Samsung (Wear OS 5) con One UI Watch 6",
            dimensiones: "47.4 x 47.4 x 12.1 mm",
            peso: "60.5 g",
            color: "Titanium Silver/Gray/White"
        },
        features: [
            "Diseño de titanio",
            "Resistencia al agua 10 ATM (hasta 100m) y IP68",
            "Certificación de durabilidad MIL-STD-810H",
            "GPS de doble banda (L1+L5)",
            "Botón de Acción personalizable",
            "Sensores BioActive (frecuencia cardíaca, ECG, composición corporal)",
            "Sensor de temperatura",
            "Detección de apnea del sueño",
            "Conectividad LTE",
            "Wi-Fi (2.4 GHz y 5 GHz)",
            "Bluetooth 5.3",
            "NFC para pagos",
            "Carga inalámbrica rápida de 10W",
            "Funcionalidades de Galaxy AI",
            "Monitoreo avanzado de sueño y salud"
        ],
        isBestseller: true,
        isOnOffer: true,
        badge: "Oferta"
    }
];
// ==========================================================================================================












let cart = [];
let isVideoPlaying = true;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    try {
        loadTheme();
        renderProducts();
        initializeEventListeners();
    } catch (error) {
        console.error("Error al inicializar:", error);
    } finally {
        setTimeout(() => {
            const preloader = document.querySelector('.preloader');
            if (preloader) {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }
        }, 2000);
    }
});

// Theme Toggle
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('theme-checkbox').checked = savedTheme === 'dark';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Event Listeners
function initializeEventListeners() {
    document.getElementById('theme-checkbox').addEventListener('change', toggleTheme);
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('searchButton').addEventListener('click', handleSearch);
    document.querySelector('.video-toggle').addEventListener('click', toggleVideo);
    document.querySelector('.scroll-top-btn').addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);
    document.getElementById('categoryFilter').addEventListener('change', applyMinimalFilters);
    document.getElementById('priceFilter').addEventListener('change', applyMinimalFilters);
    document.getElementById('sortFilter').addEventListener('change', applyMinimalFilters);
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
    document.getElementById('tradeInForm').addEventListener('submit', handleTradeIn);
}

// Render Products
function renderProducts() {
    const offersGrid = document.getElementById('offersGrid');
    const bestsellersGrid = document.getElementById('bestsellersGrid');
    const productsGrid = document.getElementById('productsGrid');

    offersGrid.innerHTML = '';
    bestsellersGrid.innerHTML = '';
    productsGrid.innerHTML = '';

    const filteredProducts = applyFilters(products);

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });

    const offerProducts = filteredProducts.filter(p => p.isOnOffer).slice(0, 3);
    offerProducts.forEach(product => {
        offersGrid.appendChild(createProductCard(product));
    });

    const bestsellerProducts = filteredProducts.filter(p => p.isBestseller).slice(0, 3);
    bestsellerProducts.forEach(product => {
        bestsellersGrid.appendChild(createProductCard(product));
    });

    initializeCarousels();
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <div class="product-badge ${product.isBestseller ? 'bestseller' : ''}">${product.isBestseller ? 'Más Vendido' : product.badge}</div>
        <div class="product-carousel">
            <div class="carousel-container" data-index="0">
                ${product.images.map(img => `<img src="${img}" alt="${product.name}" class="carousel-image">`).join('')}
            </div>
            ${product.images.length > 1 ? `
                <button class="carousel-nav carousel-prev"><i class="fas fa-chevron-left"></i></button>
                <button class="carousel-nav carousel-next"><i class="fas fa-chevron-right"></i></button>
            ` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">
                ${product.originalPrice > product.price ? `<span class="original-price">L.${product.originalPrice.toFixed(2)}</span>` : ''}
                L.${product.price.toFixed(2)}
            </p>
            <div class="stars">${'★'.repeat(Math.round(product.rating))} (${product.reviews})</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i> Añadir al Carrito</button>
        </div>
    `;
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.add-to-cart') && !e.target.closest('.carousel-nav')) {
            openProductModal(product.id);
        }
    });
    return card;
}

// Carousel Functionality
function initializeCarousels() {
    document.querySelectorAll('.product-carousel').forEach(carousel => {
        const container = carousel.querySelector('.carousel-container');
        const prev = carousel.querySelector('.carousel-prev');
        const next = carousel.querySelector('.carousel-next');
        if (!prev || !next) return;

        prev.addEventListener('click', () => {
            let index = parseInt(container.dataset.index);
            const totalImages = container.children.length;
            index = (index - 1 + totalImages) % totalImages;
            container.dataset.index = index;
            container.style.transform = `translateX(-${index * 100}%)`;
        });

        next.addEventListener('click', () => {
            let index = parseInt(container.dataset.index);
            const totalImages = container.children.length;
            index = (index + 1) % totalImages;
            container.dataset.index = index;
            container.style.transform = `translateX(-${index * 100}%)`;
        });
    });
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    showNotification(`${product.name} añadido al carrito`);
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
                <a href="#products" class="btn-primary" onclick="toggleCart()">Ver Productos</a>
            </div>
        `;
        cartTotal.textContent = `Total: L.0.00`;
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.images[0]}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p class="item-price">L.${(item.price * item.quantity).toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        cartTotal.textContent = `Total: L.${total.toFixed(2)}`;
    }

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    
    if (modal.style.display === 'block') {
        updateCart();
    }
}
// Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('productModalBody');
    modalBody.innerHTML = `
        <div class="product-modal-images">
            <div class="product-modal-main-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="product-modal-thumbnails">
                ${product.images.map((img, index) => `
                    <div class="product-modal-thumbnail ${index === 0 ? 'active' : ''}" onclick="changeModalImage('${img}', this)">
                        <img src="${img}" alt="${product.name}">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="product-modal-details">
            <h2>${product.name}</h2>
            <p class="product-modal-price">L.${product.price.toFixed(2)}</p>
            <div class="product-modal-rating">
                <span class="stars">${'★'.repeat(Math.round(product.rating))}</span>
                <span class="reviews-count">(${product.reviews} reseñas)</span>
            </div>
            <p class="product-modal-description">${product.description}</p>
            <div class="product-modal-specs">
                <h3>Especificaciones</h3>
                <div class="specs-grid">
                    ${Object.entries(product.specs).map(([key, value]) => `
                        <div class="spec-item">
                            <span class="spec-key">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                            <span>${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="product-modal-features">
                <h3>Características</h3>
                <ul>${product.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
            </div>
            <div class="product-modal-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i> Añadir al Carrito</button>
                <button class="tradein-btn" onclick="toggleTradeInModal()"><i class="fas fa-sync-alt"></i> Permutar</button>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

function changeModalImage(src, thumbnail) {
    const mainImage = document.querySelector('.product-modal-main-image img');
    mainImage.src = src;
    document.querySelectorAll('.product-modal-thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Trade-In Modal
function toggleTradeInModal() {
    const modal = document.getElementById('tradeInModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function closeTradeInModal() {
    document.getElementById('tradeInModal').style.display = 'none';
}

function handleTradeIn(e) {
    e.preventDefault();
    const deviceBrand = document.getElementById('deviceBrand').value;
    const deviceName = document.getElementById('deviceName').value;
    const deviceStorage = document.getElementById('deviceStorage').value;
    const condition = document.getElementById('condition').value;
    const additionalNotes = document.getElementById('additionalNotes').value;

    const message = `Solicitud de permuta:\nMarca: ${deviceBrand}\nModelo: ${deviceName}\nAlmacenamiento: ${deviceStorage}GB\nEstado: ${condition}\nNotas: ${additionalNotes || 'Ninguna'}`;
    window.open(`https://wa.me/+50496811650?text=${encodeURIComponent(message)}`, '_blank');
    toggleTradeInModal();
    document.getElementById('tradeInForm').reset();
}

// Checkout
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Verificar si el carrito está vacío
    if (cart.length === 0) {
        showNotification('El carrito está vacío', 'warning');
        return;
    }

    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const notes = document.getElementById('customerNotes').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Calcular totales
    const subtotal = cart.reduce((total, item) => total + products.find(p => p.id === item.id).price * item.quantity, 0);
    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    // Construir mensaje de factura
    let message = `🛍️ *FACTURA ELECTRÓNICA - MOBILEEXPRESSHN* 🛍️\n\n`;
    message += `📅 *Fecha:* ${new Date().toLocaleDateString()}\n`;    
    
    message += `👤 *Información del Cliente*\n`;
    message += `▸ Nombre: ${name}\n`;
    message += `▸ Teléfono: ${phone}\n`;
    message += `▸ Dirección: ${address}\n`;
    message += `▸ Método de Pago: ${paymentMethod}\n`;
    message += `▸ Notas: ${notes || 'Ninguna'}\n\n`;
    
    message += `📋 *Detalle del Pedido*\n`;
    message += `══════════════════════════\n`;
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        message += `➤ *${product.name}* (${product.brand})\n`;
        message += `   ▸ Cantidad: ${item.quantity}\n`;
        message += `   ▸ Precio unitario: L.${product.price.toFixed(2)}\n`;
        message += `   ▸ Subtotal: L.${(product.price * item.quantity).toFixed(2)}\n\n`;
    });
    message += `══════════════════════════\n`;
    message += `💰 *Resumen de Pagos*\n`;
    message += `▸ Subtotal: L.${subtotal.toFixed(2)}\n`;
    message += `▸ ISV (15%): L.${tax.toFixed(2)}\n`;
    message += `▸ *TOTAL A PAGAR: L.${total.toFixed(2)}*\n\n`;
    message += `📦 *Información de Envío*\n`;
    message += `▸ Tiempo estimado: 24-48 horas\n`;
    message += `▸ Estado: Pedido recibido\n\n`;
    message += `¡Gracias por tu compra en MobileExpressHN! 💜\n`;
    message += `Para seguimiento de tu pedido, contactanos por este medio`;

    const whatsappUrl = `https://wa.me/+50450496811650?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Mostrar notificación de pedido realizado
    showNotification('¡Pedido realizado con éxito!', 'success');
    
    // Limpiar carrito después del pedido
    cart = [];
    saveCart();
    renderCart();
    toggleCart();
});

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i> 
        ${message}
        <span class="notification-close">&times;</span>
    `;
    
    document.body.appendChild(notification);
    
    // Cerrar notificación al hacer clic en ×
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Cerrar automáticamente después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
// Search
function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const suggestions = document.getElementById('searchSuggestions');
    suggestions.innerHTML = '';
    if (query) {
        const filteredProducts = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.brand.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query)
        );
        filteredProducts.slice(0, 5).forEach(product => {
            const suggestion = document.createElement('div');
            suggestion.classList.add('search-suggestion');
            suggestion.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="suggestion-info">
                    <div class="suggestion-name">${product.name}</div>
                    <div class="suggestion-category">${product.category}</div>
                </div>
            `;
            suggestion.addEventListener('click', () => {
                openProductModal(product.id);
                suggestions.style.display = 'none';
                document.getElementById('searchInput').value = '';
            });
            suggestions.appendChild(suggestion);
        });
        suggestions.style.display = filteredProducts.length ? 'block' : 'none';
    } else {
        suggestions.style.display = 'none';
    }
}

// Filters
function applyFilters(products) {
    const category = document.getElementById('categoryFilter')?.value || 'all';
    const price = parseInt(document.getElementById('priceFilter')?.value) || 0;
    const sort = document.getElementById('sortFilter')?.value || 'default';
    const activeFilters = document.getElementById('activeFilters');
    activeFilters.innerHTML = '';

    let filtered = [...products];

    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
        addFilterTag('Categoría', category, () => {
            document.getElementById('categoryFilter').value = 'all';
            applyMinimalFilters();
        });
    }

    if (price > 0) {
        filtered = filtered.filter(p => p.price <= price);
        addFilterTag('Precio', `Máx L.${price}`, () => {
            document.getElementById('priceFilter').value = '0';
            applyMinimalFilters();
        });
    }

    if (sort !== 'default') {
        filtered.sort((a, b) => {
            if (sort === 'price-asc') return a.price - b.price;
            if (sort === 'price-desc') return b.price - a.price;
            if (sort === 'rating') return b.rating - a.rating;
            return 0;
        });
        addFilterTag('Ordenar', sort === 'price-asc' ? 'Menor a Mayor' : sort === 'price-desc' ? 'Mayor a Menor' : 'Mejor Valorados', () => {
            document.getElementById('sortFilter').value = 'default';
            applyMinimalFilters();
        });
    }

    return filtered;
}

function applyMinimalFilters() {
    renderProducts();
    toggleFilterDropdown();
}

function addFilterTag(label, value, removeCallback) {
    const tag = document.createElement('div');
    tag.classList.add('filter-tag');
    tag.innerHTML = `${label}: ${value} <span class="remove-filter" onclick="${removeCallback.toString().replace(/\n/g, ' ')}">×</span>`;
    document.getElementById('activeFilters').appendChild(tag);
}

function filterProducts(category) {
    document.getElementById('categoryFilter').value = category;
    applyMinimalFilters();
}

function filterProductsByBrand(brand) {
    const filtered = products.filter(p => p.brand === brand);
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    filtered.forEach(product => productsGrid.appendChild(createProductCard(product)));
    initializeCarousels();
    window.scrollTo({ top: productsGrid.offsetTop - 100, behavior: 'smooth' });
}

// Utility Functions
function toggleMenu() {
    const navContent = document.querySelector('.nav-content');
    navContent.classList.toggle('active');
}

function toggleVideo() {
    const video = document.querySelector('.hero-video');
    const toggleBtn = document.querySelector('.video-toggle');
    if (isVideoPlaying) {
        video.pause();
        toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        video.play();
        toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isVideoPlaying = !isVideoPlaying;
}

function toggleFilterDropdown() {
    const dropdown = document.getElementById('filterDropdown');
    dropdown.classList.toggle('show');
}

function handleScroll() {
    const scrollBtn = document.querySelector('.scroll-top-btn');
    scrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.classList.add('cart-notification');
    if (type === 'warning') notification.style.background = 'var(--color-warning)';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message} <span class="notification-close" onclick="this.parentElement.remove()">×</span>`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}