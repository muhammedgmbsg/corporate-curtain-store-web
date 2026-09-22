export interface Product {
    id: string;
    title: string;
    category: string;
    description: string;
    images: string[];
}

export const products: Product[] = [
    {
        id: "tul-perde",
        title: "Tül Perde",
        category: "Tül Perde",
        description:
            "İnce dokulu ve hafif düşüşlü kumaşlarıyla tül perdelerimiz, mekanınıza doğal ışığı süzerek yumuşak bir aydınlık kazandırır. Düz, jakarlı ve nakışlı desen seçenekleriyle her tarza uyum sağlayan tül perdelerimiz, ölçünüze özel dikilerek montajı ile birlikte sunulur.",
        images: ["/products/tul-perde-1.jpg"],
    },
    {
        id: "stor-perde",
        title: "Stor Perde",
        category: "Stor Perde",
        description:
            "Sade ve pratik kullanımıyla stor perdeler, hem ev hem de ofis mekanlarında modern bir görünüm sunar. Işık geçirgenliği farklı seviyelerde sunulan kumaş seçenekleriyle, mekanınızın ihtiyacına göre şeffaf, yarı şeffaf veya karartma özellikli seçenekler arasından tercih yapabilirsiniz.",
        images: ["/products/stor-perde-1.jpg"],
    },
    {
        id: "zebra-perde",
        title: "Zebra Perde",
        category: "Zebra Perde",
        description:
            "Şeffaf ve opak kumaş şeritlerinin ardışık dizilimiyle zebra perde, tek bir sistemle hem gün ışığını kontrol etme hem de mahremiyet sağlama imkanı sunar. Zincirli veya motorlu kumanda seçenekleriyle kullanım kolaylığı sağlayan zebra perdelerimiz geniş renk ve doku seçenekleriyle sunulmaktadır.",
        images: ["/products/zebra-perde-1.jpg"],
    },
    {
        id: "ahsap-jaluzi",
        title: "Ahşap Jaluzi",
        category: "Ahşap Jaluzi",
        description:
            "Doğal ahşap dokusuyla mekanlara sıcak ve şık bir hava katan ahşap jaluzi perdeler, ayarlanabilir lamel açısı sayesinde ışık ve mahremiyet dengesini kolayca sağlar. Dayanıklı yapısı ve zamansız görünümüyle salon, ofis ve kış bahçesi gibi alanlar için idealdir.",
        images: ["/products/ahsap-jaluzi-1.jpg"],
    },
    {
        id: "plicell",
        title: "Plicell",
        category: "Plicell",
        description:
            "Petek yapısı sayesinde ısı yalıtımı sağlayan plicell perdeler, hem estetik hem de fonksiyonel bir pencere çözümüdür. Yukarıdan aşağıya veya aşağıdan yukarıya açılabilen özel mekanizmasıyla mahremiyet ve ışık kontrolünde tam esneklik sunar.",
        images: ["/products/plicell-1.jpg", "/products/plicell-2.jpg"],
    },
    {
        id: "dikey-tul-pvc-perde",
        title: "Dikey Tül PVC Perde",
        category: "Dikey Tül PVC Perde",
        description:
            "Dikey lamelli yapısıyla geniş cepheli pencerelerde ve ofis alanlarında pratik kullanım sunan dikey tül PVC perdeler, kolayca döndürülerek ışık yönü ayarlanabilir. Nem ve tozdan az etkilenen PVC yapısı sayesinde uzun ömürlü ve bakımı kolay bir seçenektir.",
        images: ["/products/dikey-tul-pvc-1.jpg"],
    },
    {
        id: "fon-kumas",
        title: "Fon Kumaş ve Grupları",
        category: "Fon Kumaş ve Grupları",
        description:
            "Zengin doku ve renk gruplarıyla fon kumaşlarımız, tül perdelerle birlikte kullanılarak mekanlara katmanlı ve gösterişli bir görünüm kazandırır. Kadife, keten dokulu ve desenli kumaş gruplarından mekanınıza en uygun kombinasyonu seçebilirsiniz.",
        images: ["/products/fon-kumas-1.jpg", "/products/fon-kumas-2.jpg"],
    },
    {
        id: "ciftli-sistem-tul-stor",
        title: "Çiftli Sistem Tül Stor Perde",
        category: "Çiftli Sistem Tül Stor Perde",
        description:
            "Tül ve stor perdenin tek bir kornişte birleştiği çiftli sistem, hem gün içi hem de gece kullanımı için tam kontrol sağlar. Tek mekanizma ile iki farklı kumaşı bağımsız çalıştırabilme imkanı sunan bu sistem, fonksiyonellik arayan mekanlar için pratik bir çözümdür.",
        images: ["/products/ciftli-sistem-1.jpg"],
    },
    {
        id: "metal-jaluzi",
        title: "Metal Jaluzi",
        category: "Metal Jaluzi",
        description:
            "Alüminyum lamellerden üretilen metal jaluzi perdeler, hafif ve dayanıklı yapısıyla ofis ve iş yerlerinin vazgeçilmezidir. Nem ve neme dayanıklı yapısı sayesinde banyo ve mutfak gibi ıslak hacimlerde de rahatlıkla kullanılabilir, ince lamel seçenekleriyle şık bir görünüm sunar.",
        images: ["/products/metal-jaluzi-1.jpg"],
    },
];

export function getProductById(id: string): Product | undefined {
    return products.find((p) => p.id === id);
}
