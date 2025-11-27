import { Product, Article, Location, Specification } from './types';

const COMMON_FAQS = [
  { question: "Làm sao để chọn size giày chuẩn?", answer: "Bạn nên đo chiều dài chân từ gót đến ngón cái, sau đó cộng thêm 0.5-1cm để chọn size giày phù hợp. NeonGlide có bảng size chi tiết trong phần hướng dẫn." },
  { question: "Sản phẩm có bảo hành không?", answer: "Tất cả giày patin tại NeonGlide đều được bảo hành chính hãng từ 12-24 tháng cho phần thân giày và frame." }
];

export const MOCK_PRODUCTS: Product[] = [
  // --- KIDS SKATES ---
  {
    id: 1,
    name: "Flying Eagle Drift Junior",
    category: "kids",
    price: 8900000,
    image: "https://xpatin.com/wp-content/uploads/2019/12/drift-junior-pink.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2019/12/drift-junior-pink.jpg",
      "https://xpatin.com/wp-content/uploads/2019/12/drift-junior-blue.jpg",
      "https://xpatin.com/wp-content/uploads/2019/12/drift-junior-gorl.jpg"
    ],
    colors: ["Hồng", "Vàng Gold", "Xanh Blue"],
    sizes: ["28-29", "30-31", "32-33"],
    description: "Dòng giày Carbon cao cấp nhất cho trẻ em, chuyên dụng cho thi đấu chuyên nghiệp.",
    longDescription: "Flying Eagle Drift Junior là mẫu giày trượt Patin chuyên nghiệp dành cho trẻ em. Thân giày được làm từ sợi Carbon 100% giúp giảm trọng lượng và tăng độ cứng cáp, hỗ trợ tối đa cho các kỹ thuật khó. Đế giày đúc full carbon, khả năng điều chỉnh size kép (2 size) giúp bé sử dụng lâu dài.",
    specs: [
      { label: "Thương hiệu", value: "Flying Eagle" },
      { label: "Thân giày", value: "Carbon Fiber (Sợi Carbon) cao cấp" },
      { label: "Frame (Càng)", value: "Drift Junior CNC Aluminum" },
      { label: "Bánh xe", value: "PU độ cứng 85A, độ nảy cao" },
      { label: "Vòng bi", value: "Flying Eagle Pro (High Speed)" },
      { label: "Khóa giày", value: "Khóa bán tự động cao cấp" },
      { label: "Đối tượng", value: "Trẻ em tập Slalom/Chuyên nghiệp" }
    ],
    isFeatured: true,
    faqs: COMMON_FAQS,
    reviews: [
      { id: 101, user: "Nguyễn Văn Hùng", rating: 5, comment: "Giày rất đẹp và chắc chắn, bé nhà mình tập Slalom tiến bộ hẳn khi chuyển sang đôi này.", date: "2024-03-10" },
      { id: 102, user: "Trần Thu Hà", rating: 5, comment: "Đáng tiền bát gạo, carbon rất nhẹ. Shop tư vấn nhiệt tình.", date: "2024-02-15" }
    ]
  },
  {
    id: 2,
    name: "Flying Eagle BKB K8",
    category: "kids",
    price: 1550000,
    image: "https://xpatin.com/wp-content/uploads/2020/10/giay-patin-flying-eagle-k8-den-2.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2020/10/giay-patin-flying-eagle-k8-den-2.jpg",
      "https://xpatin.com/wp-content/uploads/2020/10/giay-patin-flying-eagle-k8-hong-2.jpg",
      "https://xpatin.com/wp-content/uploads/2020/10/giay-patin-flying-eagle-k8-xanh-2.jpg"
    ],
    colors: ["Đen", "Hồng", "Xanh Blue"],
    sizes: ["28-31", "32-35", "36-39"],
    description: "Thiết kế khỏe khoắn, nhựa chịu lực cao, phù hợp cho bé mới tập.",
    specs: [
      { label: "Thương hiệu", value: "Flying Eagle (Dòng BKB)" },
      { label: "Thân giày", value: "Nhựa Plastic chịu lực" },
      { label: "Frame (Càng)", value: "Hợp kim nhôm đúc" },
      { label: "Bánh xe", value: "Cao su đặc, độ cứng 85A" },
      { label: "Vòng bi", value: "ABEC-7 Standard" },
      { label: "Chỉnh size", value: "Có (Nút ấn Push)" }
    ],
    faqs: COMMON_FAQS,
    reviews: [
      { id: 201, user: "Lê Minh", rating: 4, comment: "Giày tốt trong tầm giá, bé đi êm chân.", date: "2024-01-20" },
      { id: 202, user: "Phạm Hương", rating: 5, comment: "Màu hồng bên ngoài đẹp hơn trong ảnh. Giao hàng nhanh.", date: "2024-03-01" }
    ]
  },
  {
    id: 3,
    name: "Flying Eagle K7",
    category: "kids",
    price: 1490000,
    image: "https://xpatin.com/wp-content/uploads/2019/12/giay-patin-flying-eagle-k7-den.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2019/12/giay-patin-flying-eagle-k7-den.jpg",
      "https://xpatin.com/wp-content/uploads/2019/12/giay-patin-flying-eagle-k7-hong.jpg",
      "https://xpatin.com/wp-content/uploads/2019/12/giay-patin-flying-eagle-k7-xanh-duong-380x380.jpg"
    ],
    colors: ["Đen", "Hồng", "Xanh Dương"],
    sizes: ["28-31", "32-35", "36-39"],
    description: "Mẫu giày quốc dân cho trẻ em, chỉnh size linh hoạt 4 nấc.",
    specs: [
      { label: "Thương hiệu", value: "Flying Eagle" },
      { label: "Thân giày", value: "Nhựa Plastic, lót dày êm" },
      { label: "Frame (Càng)", value: "Nhôm CNC nguyên khối" },
      { label: "Bánh xe", value: "Cao su độ bám đường tốt" },
      { label: "Vòng bi", value: "ABEC-7" },
      { label: "Tính năng", value: "Chỉnh size 4 mức" }
    ],
    faqs: COMMON_FAQS,
    reviews: [
      { id: 301, user: "Hoàng Tùng", rating: 5, comment: "Mua cho con trai đôi này, bé rất thích. Lớp lót dày dặn.", date: "2024-02-10" }
    ]
  },
  {
    id: 4,
    name: "Flying Eagle L6",
    category: "kids",
    price: 1490000,
    image: "https://xpatin.com/wp-content/uploads/2024/06/giay-patin-flying-eagle-l6-mau-hong.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2024/06/giay-patin-flying-eagle-l6-mau-hong.jpg",
      "https://xpatin.com/wp-content/uploads/2024/06/giay-patin-flying-eagle-l6-mau-den-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2024/06/giay-patin-flying-eagle-l6-mau-xanh-380x380.jpg"
    ],
    colors: ["Đen", "Hồng", "Xanh"],
    sizes: ["28-31", "32-35", "36-39"],
    description: "Thiết kế mũi giày thoáng khí, form ôm chân an toàn.",
    specs: [
      { label: "Thương hiệu", value: "Flying Eagle" },
      { label: "Thân giày", value: "Nhựa Plastic kết hợp lưới thoáng khí" },
      { label: "Frame (Càng)", value: "Hợp kim nhôm CNC" },
      { label: "Bánh xe", value: "Cao su đàn hồi cao" },
      { label: "Vòng bi", value: "ABEC-7" }
    ],
    faqs: COMMON_FAQS,
    reviews: [
       { id: 401, user: "Mẹ Gấu", rating: 5, comment: "Giày đẹp, thoáng khí, bé đi không bị bí chân.", date: "2024-01-05" }
    ]
  },
  {
    id: 5,
    name: "Flying Eagle S5S+",
    category: "kids",
    price: 1490000,
    image: "https://xpatin.com/wp-content/uploads/2019/11/giay-patin-flying-eagle-s5s-mau-xanh-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2019/11/giay-patin-flying-eagle-s5s-mau-xanh-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2019/11/giay-patin-flying-eagle-s5s-mau-xanh-550x550.jpg"
    ],
    colors: ["Đen", "Hồng", "Xanh"],
    sizes: ["28-31", "32-35", "36-39"],
    description: "Phiên bản nâng cấp của S5S, khóa giày chắc chắn hơn.",
    specs: [
      { label: "Thương hiệu", value: "Flying Eagle" },
      { label: "Thân giày", value: "Nhựa Plastic siêu bền" },
      { label: "Frame (Càng)", value: "Nhôm CNC sắc nét" },
      { label: "Bánh xe", value: "Cao su đặc 85A" },
      { label: "Vòng bi", value: "ABEC-7 Carbon" },
      { label: "Khóa", value: "Khóa bán tự động thông minh" }
    ],
    faqs: COMMON_FAQS,
    isFeatured: true,
    reviews: [
      { id: 501, user: "Anh Tuấn", rating: 5, comment: "Sản phẩm chất lượng, đóng gói kỹ. Bé nhà mình tập 2 buổi là đi được rồi.", date: "2024-03-12" },
      { id: 502, user: "Chị Lan", rating: 4, comment: "Giày hơi nặng so với bé 4 tuổi nhưng đi rất đầm.", date: "2024-02-28" },
      { id: 503, user: "Ngọc Mai", rating: 5, comment: "Màu xanh rất đẹp, bé rất thích.", date: "2024-03-05" }
    ]
  },
  {
    id: 6,
    name: "TheX ELITE",
    category: "kids",
    price: 2980000,
    image: "https://xpatin.com/wp-content/uploads/2021/06/giay-patin-thex-elite-mau-cam-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2021/06/giay-patin-thex-elite-mau-cam-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2021/06/giay-patin-thex-elite-mau-hong-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2021/06/giay-patin-thex-elite-mau-xanh-380x380.jpg"
    ],
    colors: ["Cam", "Hồng", "Xanh"],
    sizes: ["28-31", "32-35", "36-39"],
    description: "Dòng giày cao cấp thương hiệu TheX, thiết kế futuristic.",
    specs: [
      { label: "Thương hiệu", value: "TheX" },
      { label: "Thiết kế", value: "Futuristic / Hiện đại" },
      { label: "Thân giày", value: "Nhựa tổng hợp cao cấp" },
      { label: "Frame", value: "Nhôm CNC" },
      { label: "Vòng bi", value: "ABEC-9" }
    ],
    faqs: COMMON_FAQS,
    reviews: [
      { id: 601, user: "Minh Khang", rating: 5, comment: "Thiết kế quá đẹp, nhìn rất ngầu.", date: "2024-01-15" }
    ]
  },
  {
    id: 7,
    name: "TheX ATOM",
    category: "kids",
    price: 2780000,
    image: "https://xpatin.com/wp-content/uploads/2021/06/giay-patin-thex-atom-mau-cam-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2021/06/giay-patin-thex-atom-mau-cam-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2021/06/giay-patin-thex-atom-mau-den-380x380.jpg"
    ],
    colors: ["Cam", "Đen"],
    sizes: ["28-31", "32-35", "36-39"],
    description: "Frame nhôm CNC siêu nhẹ, vòng bi tốc độ cao.",
    specs: [
      { label: "Thương hiệu", value: "TheX" },
      { label: "Thân giày", value: "Nhựa Plastic" },
      { label: "Frame", value: "Atom Series CNC Aluminum" },
      { label: "Vòng bi", value: "ABEC-7 Speed" }
    ],
    faqs: COMMON_FAQS
  },
  {
    id: 8,
    name: "Flying Eagle S7 Nimbus",
    category: "kids",
    price: 1490000,
    image: "https://xpatin.com/wp-content/uploads/2022/07/giay-patin-flying-eagle-s7-mau-xanh-duong-550x367.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2022/07/giay-patin-flying-eagle-s7-mau-xanh-duong-550x367.jpg",
      "https://xpatin.com/wp-content/uploads/2022/07/giay-patin-flying-eagle-s7-mau-hong-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2022/07/giay-patin-flying-eagle-s7-mau-den-380x380.jpg"
    ],
    colors: ["Đen", "Hồng", "Xanh Dương"],
    sizes: ["28-31", "32-35", "36-39"],
    description: "Mẫu mới 2022 với thiết kế hiện đại, lót giày Memory Foam.",
    specs: [
      { label: "Thương hiệu", value: "Flying Eagle" },
      { label: "Thân giày", value: "Nhựa Plastic trong suốt" },
      { label: "Liner (Lót)", value: "Memory Foam ôm chân" },
      { label: "Frame", value: "Nhôm CNC" },
      { label: "Khóa", value: "Khóa đóng an toàn" }
    ],
    faqs: COMMON_FAQS,
    reviews: [
      { id: 801, user: "Thanh Trúc", rating: 5, comment: "Lót giày rất êm, bé đi cả buổi không than đau chân.", date: "2024-02-20" }
    ]
  },

  // --- ADULT SKATES ---
  {
    id: 9,
    name: "Flying Eagle Drift 2.0",
    category: "adults",
    price: 9950000,
    image: "https://xpatin.com/wp-content/uploads/2019/10/giay-patin-flying-eagle-drift-2-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2019/10/giay-patin-flying-eagle-drift-2-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2019/10/FLYING-EAGLE-DRIFT-2.0-ANH-3-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2019/10/FLYING-EAGLE-DRIFT-2.0-ANH-2-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2019/10/FLYING-EAGLE-DRIFT-2.0-ANH-5-380x380.jpg"
    ],
    colors: ["Đen"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    description: "Siêu phẩm Carbon cho người lớn. Chuyên Slalom/Slide đẳng cấp.",
    specs: [
        { label: "Thương hiệu", value: "Flying Eagle" },
        { label: "Thân giày", value: "100% Carbon Fiber thủ công" },
        { label: "Frame", value: "Drift Rockered Frame CNC Aluminum" },
        { label: "Vòng bi", value: "Flying Eagle Pro Custom" },
        { label: "Bánh xe", value: "High Rebound 85A" },
        { label: "Thể loại", value: "Professional Slalom, Slide" }
    ],
    faqs: COMMON_FAQS,
    isFeatured: true,
    reviews: [
      { id: 901, user: "Đức Thịnh", rating: 5, comment: "Carbon siêu nhẹ, ôm chân tuyệt đối. Đôi này để tập Slalom thì hết ý.", date: "2024-03-08" },
      { id: 902, user: "Thành Đạt", rating: 5, comment: "Tiền nào của nấy, rất đáng đầu tư.", date: "2024-02-12" }
    ]
  },
  {
    id: 10,
    name: "Calary C9",
    category: "adults",
    price: 9950000,
    image: "https://xpatin.com/wp-content/uploads/2022/09/giay-patin-calary-c9-mau-xanh-min-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2022/09/giay-patin-calary-c9-mau-xanh-min-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2022/09/giay-patin-calary-c9-mau-trang-min-380x380.jpg"
    ],
    colors: ["Đen/Xanh", "Đen/Trắng"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    description: "Thiết kế thanh lịch, màu sắc ấn tượng, hiệu suất cao.",
    specs: [
      { label: "Thương hiệu", value: "Calary" },
      { label: "Thân giày", value: "Nhựa Plastic cứng" },
      { label: "Frame", value: "Hợp kim nhôm 6061 CNC" },
      { label: "Vòng bi", value: "ABEC-9 Chrome" },
      { label: "Bánh xe", value: "PU 85A" }
    ],
    faqs: COMMON_FAQS,
    reviews: [
      { id: 1001, user: "Bảo Bảo", rating: 4, comment: "Thiết kế đẹp, nhưng form hơi hẹp với chân bè.", date: "2024-01-30" }
    ]
  },
  {
    id: 11,
    name: "Flying Eagle BKB B5S",
    category: "adults",
    price: 1740000,
    image: "https://xpatin.com/wp-content/uploads/2019/09/Gi%E1%BA%A7y-Patin-Flying-Eagle-B5S-%C4%90en-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2019/09/Gi%E1%BA%A7y-Patin-Flying-Eagle-B5S-%C4%90en-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2019/09/giay-patin-flying-eagle-b5s-mau-hong-xpatin-380x380.jpg"
    ],
    colors: ["Đen/Đen", "Đen/Hồng"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    description: "Dòng giày giá rẻ chất lượng tốt, phù hợp người mới tập (Newbie).",
    specs: [
      { label: "Thương hiệu", value: "Flying Eagle (BKB)" },
      { label: "Thân giày", value: "Nhựa Plastic Molded" },
      { label: "Frame", value: "Nhôm đúc" },
      { label: "Vòng bi", value: "ABEC-7" },
      { label: "Sử dụng", value: "Urban, Fitness cơ bản" }
    ],
    faqs: COMMON_FAQS,
    reviews: [
      { id: 1101, user: "Sinh Viên", rating: 5, comment: "Giá rẻ, phù hợp sinh viên mới tập chơi.", date: "2024-03-01" },
      { id: 1102, user: "Ngọc Tú", rating: 4, comment: "Ổn trong tầm giá.", date: "2024-02-25" }
    ]
  },
  {
    id: 12,
    name: "Flying Eagle F4 Raven",
    category: "adults",
    price: 2600000,
    image: "https://xpatin.com/wp-content/uploads/2019/09/Gi%C3%A0y-Patin-Flying-Eagle-F4-%C4%90en-380x380.jpg",
    images: [
       "https://xpatin.com/wp-content/uploads/2019/09/Gi%C3%A0y-Patin-Flying-Eagle-F4-%C4%90en-380x380.jpg",
       "https://xpatin.com/wp-content/uploads/2019/09/giay-patin-flying-eagle-f4-mau-tim-xpatin2-380x380.jpg"
    ],
    colors: ["Đen", "Tím"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    description: "Form giày ôm chân, Liner dày, Frame vững chắc.",
    specs: [
      { label: "Thương hiệu", value: "Flying Eagle" },
      { label: "Thân giày", value: "Nhựa Plastic chịu va đập mạnh" },
      { label: "Frame", value: "Ego Frame CNC Aluminum" },
      { label: "Vòng bi", value: "ABEC-7 Chrome" },
      { label: "Bánh xe", value: "Sunny 85A" }
    ],
    faqs: COMMON_FAQS,
    reviews: [
      { id: 1201, user: "Hải Anh", rating: 5, comment: "Giày đi rất chắc chân, bánh trơn mượt.", date: "2024-02-18" }
    ]
  },

  // --- PROFESSIONAL SKATES ---
  {
    id: 13,
    name: "Micro BEAT",
    category: "professional",
    price: 11200000,
    image: "https://xpatin.com/wp-content/uploads/2022/07/giay-patin-micro-beat-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2022/07/giay-patin-micro-beat-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2022/07/dsc2612-min-380x336.jpg",
      "https://xpatin.com/wp-content/uploads/2022/07/dsc2640-min-380x380.jpg"
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    description: "Giày Patin Micro BEAT chuyên dụng cho dân chơi hệ Street & Urban.",
    specs: [
        { label: "Thương hiệu", value: "Micro Skate" },
        { label: "Chất liệu", value: "Composite Carbon + Microfiber" },
        { label: "Frame", value: "Micro BEAT Alu CNC" },
        { label: "Vòng bi", value: "Micro Slalom PRO 9" },
        { label: "Bánh xe", value: "Micro 85A Bullet Profile" }
    ],
    faqs: COMMON_FAQS,
    reviews: [
       { id: 1301, user: "Pro Skater", rating: 5, comment: "Micro Beat chưa bao giờ làm mình thất vọng.", date: "2024-01-10" }
    ]
  },
  {
    id: 14,
    name: "Micro Delta Force II",
    category: "professional",
    price: 19990000,
    image: "https://xpatin.com/wp-content/uploads/2023/05/giay-patin-micro-delta-force-ii-silver-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2023/05/giay-patin-micro-delta-force-ii-silver-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2023/05/43afffd7e4-min-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2023/05/658bb9935b-min-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2023/05/825694f3fd-min-380x380.jpg"
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    description: "Đỉnh cao công nghệ Carbon từ Thụy Sĩ. Nhẹ, bền, chính xác tuyệt đối.",
    specs: [
      { label: "Thương hiệu", value: "Micro Skate" },
      { label: "Thân giày", value: "Full Carbon Fiber, Heat Moldable (Định hình nhiệt)" },
      { label: "Frame", value: "Micro Lava Rockered CNC 7000 Series" },
      { label: "Vòng bi", value: "Micro Slalom PRO 9" },
      { label: "Bánh xe", value: "Micro Slalom 85A" },
      { label: "Công nghệ", value: "Lót Carbon liền thân (Integrated)" }
    ],
    faqs: COMMON_FAQS,
    isFeatured: true,
    reviews: [
       { id: 1401, user: "Huy Hoàng", rating: 5, comment: "Đắt xắt ra miếng, trải nghiệm tuyệt vời.", date: "2024-03-05" },
       { id: 1402, user: "Tuấn Anh", rating: 5, comment: "Siêu nhẹ, fit chân hoàn hảo sau khi heat mold.", date: "2024-02-28" }
    ]
  },
  {
    id: 15,
    name: "Micro Delta HML Pro",
    category: "professional",
    price: 18990000,
    image: "https://xpatin.com/wp-content/uploads/2023/09/giay-patin-micro-delta-hml-pro-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2023/09/giay-patin-micro-delta-hml-pro-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2023/09/giay-patin-micro-delta-hml-pro-anh-4-380x380.jpg"
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    description: "Phiên bản Pro nâng cấp, thiết kế HML độc quyền.",
    specs: [
      { label: "Thương hiệu", value: "Micro Skate" },
      { label: "Thân giày", value: "Carbon Fiber" },
      { label: "Frame", value: "Micro Dragon CNC Aluminum" },
      { label: "Vòng bi", value: "Slalom PRO 9" },
      { label: "Phong cách", value: "HML Design" }
    ],
    faqs: COMMON_FAQS
  },
  {
    id: 16,
    name: "Micro DELTA LIBERTY",
    category: "professional",
    price: 18990000,
    image: "https://xpatin.com/wp-content/uploads/2022/01/giay-patin-micro-delta-liberty-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2022/01/giay-patin-micro-delta-liberty-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2022/01/giay-patin-micro-delta-liberty-anh-2-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2022/01/3faeca51ee-380x380.jpg"
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    description: "Sự tự do trong từng chuyển động. Dòng Liberty chuyên Slalom nghệ thuật.",
    specs: [
      { label: "Thương hiệu", value: "Micro Skate" },
      { label: "Thân giày", value: "Carbon Fiber" },
      { label: "Frame", value: "Liberty Rockered Frame" },
      { label: "Vòng bi", value: "Slalom PRO 9" },
      { label: "Bánh xe", value: "Micro SS 85A" }
    ],
    faqs: COMMON_FAQS
  },

  // --- ACCESSORIES & PROTECTION ---
  {
    id: 17,
    name: "Micro Mini Skate Backpack",
    category: "accessories",
    price: 1750000,
    image: "https://xpatin.com/wp-content/uploads/2021/12/balo-cao-cap-micro-mini-skate-backpack.jpg",
    images: [
       "https://xpatin.com/wp-content/uploads/2021/12/balo-cao-cap-micro-mini-skate-backpack.jpg",
       "https://xpatin.com/wp-content/uploads/2021/12/balo-cao-cap-micro-mini-skate-backpack-8-380x380.jpg",
       "https://xpatin.com/wp-content/uploads/2021/12/balo-cao-cap-micro-mini-skate-backpack-6-380x380.jpg"
    ],
    description: "Balo cao cấp, thiết kế gọn nhẹ, để vừa giày và phụ kiện.",
    specs: [
      { label: "Thương hiệu", value: "Micro Skate" },
      { label: "Kích thước", value: "40cm x 34cm x 16cm" },
      { label: "Chất liệu", value: "Vải chống thấm nước" },
      { label: "Sức chứa", value: "1 đôi giày Patin + Phụ kiện" }
    ],
    reviews: [{ id: 1701, user: "Hà My", rating: 5, comment: "Balo nhỏ gọn, đựng vừa đôi giày size 38.", date: "2024-03-01" }]
  },
  {
    id: 18,
    name: "Balo Flying Eagle Movement",
    category: "accessories",
    price: 2050000,
    image: "https://xpatin.com/wp-content/uploads/2020/09/balo-patin-flying-eagle-movement-xanh-7-550x544.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2020/09/balo-patin-flying-eagle-movement-xanh-7-550x544.jpg",
      "https://xpatin.com/wp-content/uploads/2020/09/balo-patin-flying-eagle-movement-xanh-5-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2020/09/balo-patin-flying-eagle-movement-xanh-6-380x380.jpg"
    ],
    colors: ["Hồng", "Xanh lá", "Xanh da"],
    description: "Balo chuyên dụng cho Skater, chất liệu chống nước.",
    specs: [
       { label: "Thương hiệu", value: "Flying Eagle" },
       { label: "Chất liệu", value: "Polyester chống nước" },
       { label: "Ngăn đựng", value: "Ngăn giày riêng biệt, ngăn Laptop" }
    ]
  },
  {
    id: 19,
    name: "Micro KIDS BACKPACK",
    category: "accessories",
    price: 700000,
    image: "https://xpatin.com/wp-content/uploads/2021/10/balo-dung-giay-patin-tre-em-micro-backpack-mau-xanh-duong.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2021/10/balo-dung-giay-patin-tre-em-micro-backpack-mau-xanh-duong.jpg",
      "https://xpatin.com/wp-content/uploads/2021/10/balo-dung-giay-patin-tre-em-micro-backpack-mau-hong-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2021/10/balo-dung-giay-patin-tre-em-micro-backpack-mau-den-380x380.jpg"
    ],
    colors: ["Đen", "Hồng", "Xanh Da"],
    description: "Balo nhỏ gọn cho bé, màu sắc tươi sáng.",
    specs: [
       { label: "Thương hiệu", value: "Micro Skate" },
       { label: "Đối tượng", value: "Trẻ em" },
       { label: "Trọng lượng", value: "Siêu nhẹ" }
    ]
  },
  {
    id: 20,
    name: "Bánh đèn Dragon (Lẻ)",
    category: "accessories",
    price: 35000,
    image: "https://xpatin.com/wp-content/uploads/2019/09/B%C3%A1nh-%C4%91%C3%A8n-Dragon-Blue-550x550.jpg",
    images: [
       "https://xpatin.com/wp-content/uploads/2019/09/B%C3%A1nh-%C4%91%C3%A8n-Dragon-Blue-550x550.jpg",
       "https://xpatin.com/wp-content/uploads/2019/09/B%C3%A1nh-%C4%91%C3%A8n-Dragon-Red-380x380.jpg",
       "https://xpatin.com/wp-content/uploads/2019/09/B%C3%A1nh-%C4%91%C3%A8n-Dragon-Tr%E1%BA%AFng-380x380.jpg"
    ],
    sizes: ["64mm", "68mm", "70mm", "80mm"],
    colors: ["Trắng", "Đỏ", "Xanh"],
    description: "Bánh xe phát sáng khi trượt, lõi nam châm bền bỉ.",
    specs: [
       { label: "Cơ chế", value: "Phát sáng bằng lõi từ (nam châm)" },
       { label: "Độ cứng", value: "85A" },
       { label: "Kích cỡ", value: "64mm / 70mm / 72mm / 76mm / 80mm" }
    ],
    reviews: [{ id: 2001, user: "Trung Hiếu", rating: 5, comment: "Đèn sáng đẹp, buổi tối trượt rất nổi bật.", date: "2024-03-09" }]
  },
  {
    id: 21,
    name: "Bánh đèn đá lửa (Lẻ)",
    category: "accessories",
    price: 35000,
    image: "https://xpatin.com/wp-content/uploads/2019/09/B%C3%A1nh-%C4%91%C3%A8n-%C4%91%C3%A1-l%E1%BB%ADa-blue-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2019/09/B%C3%A1nh-%C4%91%C3%A8n-%C4%91%C3%A1-l%E1%BB%ADa-blue-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2019/09/B%C3%A1nh-%C4%91%C3%A8n-%C4%91%C3%A1-l%E1%BB%ADa-green-380x380.jpg"
    ],
    sizes: ["64mm", "68mm", "70mm", "80mm"],
    colors: ["Xanh", "Đỏ"],
    description: "Bánh xe tạo tia lửa khi ma sát, hiệu ứng cực đẹp.",
    specs: [
       { label: "Hiệu ứng", value: "Tia lửa điện + Phát sáng" },
       { label: "Chất liệu", value: "PU + Đá lửa Flint" },
       { label: "Độ cứng", value: "88A" }
    ]
  },
  {
    id: 22,
    name: "Bảo hộ Flying Eagle BKB",
    category: "protection",
    price: 230000,
    image: "https://xpatin.com/wp-content/uploads/2019/09/B%E1%BA%A3o-h%E1%BB%99-patin-Flying-eagle-BKB-%C4%90%E1%BB%8F-550x550.jpeg",
    colors: ["Đỏ", "Xanh"],
    description: "Bộ bảo hộ cơ bản: tay, khuỷu, gối.",
    specs: [
       { label: "Bộ gồm", value: "2 bàn tay, 2 khuỷu tay, 2 đầu gối" },
       { label: "Chất liệu", value: "Vải lưới + Nhựa ABS" }
    ]
  },
  {
    id: 23,
    name: "Bảo Hộ Flying Eagle LOBSTER",
    category: "protection",
    price: 630000,
    image: "https://xpatin.com/wp-content/uploads/2019/09/BAO-HO-PATIN-FLYING-EAGLE-550x367.jpg",
    images: [
       "https://xpatin.com/wp-content/uploads/2019/09/BAO-HO-PATIN-FLYING-EAGLE-550x367.jpg",
       "https://xpatin.com/wp-content/uploads/2019/09/BAO-HO-PATIN-FLYING-EAGLE-LOBSTER-2-380x380.jpg",
       "https://xpatin.com/wp-content/uploads/2019/09/BAO-HO-PATIN-FLYING-EAGLE-LOBSTER-3-380x380.jpg"
    ],
    description: "Bảo hộ cao cấp thiết kế dạng tôm hùm, ôm sát, cực êm.",
    specs: [
       { label: "Thiết kế", value: "Lobster (Tôm hùm) linh hoạt" },
       { label: "Đệm mút", value: "Dày, chống va đập cực tốt" },
       { label: "Thương hiệu", value: "Flying Eagle" }
    ]
  },
  {
    id: 24,
    name: "Bộ bảo hộ Flying Eagle V5",
    category: "protection",
    price: 290000,
    image: "https://xpatin.com/wp-content/uploads/2019/09/B%E1%BB%99-b%E1%BA%A3o-h%E1%BB%99-patin-Flying-Eagle-V5-Xanh-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2019/09/B%E1%BB%99-b%E1%BA%A3o-h%E1%BB%99-patin-Flying-Eagle-V5-Xanh-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2019/09/B%E1%BB%99-b%E1%BA%A3o-h%E1%BB%99-patin-Flying-Eagle-V5-%C4%90en-380x380.jpg",
      "https://xpatin.com/wp-content/uploads/2019/09/B%E1%BB%99-b%E1%BA%A3o-h%E1%BB%99-patin-Flying-Eagle-V5-pink-380x380.jpg"
    ],
    colors: ["Xanh", "Đen", "Hồng"],
    description: "Đệm dày, nhựa ABS chắc chắn, thoáng khí.",
    specs: [
       { label: "Size", value: "S / M / L" },
       { label: "Chất liệu", value: "Nhựa cứng ABS + Đệm Eva" }
    ],
    reviews: [{ id: 2401, user: "Mẹ Sóc", rating: 5, comment: "Nhựa chắc chắn, bảo vệ tốt cho bé.", date: "2024-02-14" }]
  },
  {
    id: 25,
    name: "Mũ Bảo Hộ Flying Eagle BKB H01",
    category: "protection",
    price: 390000,
    image: "https://xpatin.com/wp-content/uploads/2020/08/mu-h01.jpg",
    description: "Mũ bảo hiểm nửa đầu an toàn, thoáng mát.",
    specs: [
       { label: "Trọng lượng", value: "Siêu nhẹ (~300g)" },
       { label: "Chất liệu", value: "Xốp EPS nén tỷ trọng cao" }
    ]
  },
  {
    id: 26,
    name: "Mũ Micro Crown Helmet",
    category: "protection",
    price: 1100000,
    image: "https://xpatin.com/wp-content/uploads/2022/11/mu-bao-ho-patin-micro-crown-helmet-mau-xanh-min-550x550.jpg",
    description: "Mũ bảo hiểm cao cấp thương hiệu Micro, thiết kế vương miện.",
    specs: [
       { label: "Thương hiệu", value: "Micro Skate" },
       { label: "Tiêu chuẩn", value: "Châu Âu (CE)" },
       { label: "Thiết kế", value: "3D Crown (Vương miện)" }
    ]
  },
  {
    id: 27,
    name: "Mũ KT Helmet",
    category: "protection",
    price: 695000,
    image: "https://xpatin.com/wp-content/uploads/2020/11/mu-kt-helmet-550x549.jpg",
    description: "Mũ bảo hiểm KT thiết kế tối giản, hiện đại.",
    specs: [
       { label: "Thương hiệu", value: "Flying Eagle (KT)" },
       { label: "Kiểu dáng", value: "Urban / Street" }
    ]
  },
  {
    id: 28,
    name: "Cốc tập Slalom FE",
    category: "accessories",
    price: 12000,
    image: "https://xpatin.com/wp-content/uploads/2019/12/coc-tap-slalom-fe.jpg",
    description: "Cốc nhựa dẻo tập luyện kỹ thuật Slalom, siêu bền.",
    specs: [
       { label: "Chất liệu", value: "Nhựa dẻo, không vỡ khi cán qua" },
       { label: "Màu sắc", value: "Nhiều màu" }
    ]
  },
  {
    id: 29,
    name: "Chốt khóa thân giày",
    category: "accessories",
    price: 95000,
    image: "https://xpatin.com/wp-content/uploads/2019/10/ch%E1%BB%91t-kh%C3%B3a-th%C3%A2n-f3-%E1%BA%A3nh-2-1.jpg",
    description: "Phụ kiện thay thế chính hãng.",
    specs: [
       { label: "Tương thích", value: "Flying Eagle Skates" },
       { label: "Loại", value: "Khóa thân (45 độ)" }
    ]
  },
  {
    id: 30,
    name: "Dây khóa (răng) giày Patin",
    category: "accessories",
    price: 45000,
    image: "https://xpatin.com/wp-content/uploads/2019/10/d%C3%A2y-kh%C3%B3a-th%C3%A2n-F3-%E1%BA%A3nh-2-550x550.jpg",
    description: "Dây khóa nhựa dẻo thay thế.",
    specs: [{ label: "Chất liệu", value: "Nhựa dẻo" }]
  },
  {
    id: 31,
    name: "Dây + Chốt Khóa cổ giày",
    category: "accessories",
    price: 70000,
    image: "https://xpatin.com/wp-content/uploads/2019/10/ch%E1%BB%91t-d%C3%A2y-kh%C3%B3a-c%E1%BB%95-f1-%E1%BA%A3nh-2-550x550.jpg",
    description: "Bộ khóa cổ giày thay thế.",
    specs: [{ label: "Vị trí", value: "Cổ giày (Cuff)" }]
  },
  {
    id: 32,
    name: "MICRO MELT FRAME",
    category: "accessories",
    price: 3990000,
    image: "https://xpatin.com/wp-content/uploads/2022/07/melt-frame-anh-1-550x550.jpg",
    sizes: ["231mm", "243mm"],
    description: "Frame cực quang đổi màu theo góc nhìn.",
    specs: [
       { label: "Thương hiệu", value: "Micro Skate" },
       { label: "Chất liệu", value: "Alu 6000 Series CNC" },
       { label: "Màu sắc", value: "Aurora (Cực quang)" },
       { label: "Chuẩn gắn", value: "165mm" }
    ]
  },
  {
    id: 33,
    name: "Vòng Bi (Bạc đạn) Flying Eagle",
    category: "accessories",
    price: 690000,
    image: "https://xpatin.com/wp-content/uploads/2019/12/vong-bi-550x550.jpg",
    images: [
      "https://xpatin.com/wp-content/uploads/2019/12/vong-bi-550x550.jpg",
      "https://xpatin.com/wp-content/uploads/2019/12/vong-bi-vang.jpg",
      "https://xpatin.com/wp-content/uploads/2019/12/vong-bi-xanh-380x380.jpg"
    ],
    description: "Vòng bi tốc độ cao, trơn tru, bền bỉ.",
    specs: [
       { label: "Loại", value: "ABEC-7 / PRO / ABEC-9" },
       { label: "Số lượng", value: "Bộ 16 cái" },
       { label: "Chất liệu", value: "Chrome Steel" }
    ]
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    title: "Cách chọn size giày patin chuẩn cho người mới (Cập nhật 2024)",
    summary: "Hướng dẫn đo chân và chọn size giày phù hợp để tránh đau chân. Bảng quy đổi size chuẩn quốc tế.",
    category: "Guide",
    date: "2024-02-15",
    author: "HLV Minh Tú - 10 năm kinh nghiệm",
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    id: 2,
    title: "Giải đua Patin Neon Cup 2024 - Đăng ký ngay",
    summary: "Thông tin chi tiết về giải đua lớn nhất mùa hè này. Cơ cấu giải thưởng lên đến 100 triệu đồng.",
    category: "News",
    date: "2024-03-01",
    author: "Ban Tổ Chức",
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    id: 3,
    title: "Top 5 địa điểm trượt patin 'sống ảo' cực chất tại Hà Nội",
    summary: "Review chi tiết các sân trượt công cộng và sân trong nhà: mặt sân, ánh sáng, giá vé.",
    category: "Location",
    date: "2024-01-20",
    author: "Neon Team",
    image: "https://picsum.photos/600/400?random=12"
  }
];

export const MOCK_LOCATIONS: Location[] = [
  {
    id: 1,
    name: "Công viên Thống Nhất - Khu Tượng Đài",
    address: "Hai Bà Trưng, Hà Nội",
    type: "Outdoor",
    image: "https://picsum.photos/100/100?random=20",
    mapLink: "https://maps.google.com"
  },
  {
    id: 2,
    name: "Sân trượt Neon Arena Q7",
    address: "Tầng 3, Crescent Mall, Quận 7, TP.HCM",
    type: "Indoor",
    image: "https://picsum.photos/100/100?random=21",
    mapLink: "https://maps.google.com"
  }
];