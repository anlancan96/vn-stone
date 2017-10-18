
const defaultState = {
  ChinaStone : [
    { id : 1,  type : "china", src :"../image/China/Indian White 1.jpg", description :"Indian white 1"},
    { id : 2,  type : "china", src :"../image/China/Indian White 2.jpg", description :"Indian white 2"},
    { id : 3,  type : "china", src :"../image/China/Indian White 3.jpg", description :"Indian white 3"},
    { id : 4,  type : "china", src :"../image/China/Indian White 4.jpg", description :"Indian white 4"},
    { id : 5,  type : "china", src :"../image/China/Indian White 5.jpg", description :"Indian white 5"} 
  ],
  Egypt1      : [
    { id : 6,  type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Green.jpg", description :"Fardy-Green"},
    { id : 7,  type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Yellow.jpg", description :"Fardy-Yellow"},
    { id : 8,  type : "egypt", src :"../image/Egypt/Granite Ai Cập/Forsan.jpg", description :"Forsan"},
    { id : 9,  type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-1.jpg", description :"Gendola-1"},
    { id : 10, type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-2.jpg", description :"Gendola-2"},
    { id : 11, type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gray.jpg", description :"Gray"},
    { id : 12, type : "egypt", src :"../image/Egypt/Granite Ai Cập/Red Aswan Granite Slabs17.jpg", description :"Red Aswan Granite"},
    { id : 13, type : "egypt", src :"../image/Egypt/Granite Ai Cập/Halayb White Granite Slabs19 (1).jpg", description :"Halay White"},
  ],
  Egypt2      : [
    { id : 19, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (8).jpg", description :"Glala extra (8)"},
    { id : 20, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (9).jpg", description :"Glala extra (9)"},
    { id : 21, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (10).jpg", description :"Glala extra (10)"},
    { id : 22, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra high quality.jpg", description :"Glala extra high quality"},
    { id : 23, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra.jpg", description :"Glala extra"},
    { id : 24, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (4).jpg", description :"Royal creama (4)"},
    { id : 25, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (6).JPG", description :"Royal creama (6)"},
    { id : 26, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (9).JPG", description :"Royal creama (9)"},
  ],
  Indian1      : [
    { id : 49, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/Black Galaxy- Slabs.JPG", description :"Black Galaxy- Slabs"},
    { id : 50, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008 (1).jpg", description :"IMG-20170402-WA0008 (1)"},
    { id : 51, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008.jpg", description :"IMG-20170402-WA0008"},
    { id : 52, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0009.jpg", description :"IMG-20170402-WA0009"},
    { id : 53, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0010.jpg", description :"IMG-20170402-WA0010"},
    { id : 54, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0011.jpg", description :"IMG-20170402-WA0011"},
    { id : 55, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0012.jpg", description :"IMG-20170402-WA0012"},
    { id : 56, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0013.jpg", description :"IMG-20170402-WA0013"},  
  ],
  Indian2      : [
    { id : 71, type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 1.jpg", description :"Imperial red 1" },
    { id : 72, type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 2.jpg", description :"Imperial Red 2" },
    { id : 73, type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 3.jpg", description :"Imperial red 3" },
    { id : 74, type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 4.jpg", description :"Imperial Red 4" },
  ],
  Indian3      : [
    { id : 75, type : "idian", src :"../image/Indian/Ruby Red - Đỏ Ruby/Ruby Red.jpg", description :"Ruby Red" },
  ],
  Indian4      : [
    { id : 76, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 1.jpg", description :"Tan Brown 1" },
    { id : 77, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 2.JPG", description :"Tan Brown 2" },
    { id : 78, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 3.jpg", description :"Tan Brown 3" },
    { id : 79, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0000.jpg", description :"IMG-20170402-WA0000" },
    { id : 80, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0001.jpg", description :"IMG-20170402-WA0001" },
    { id : 81, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0014.jpg", description :"IMG-20170402-WA0014" },
    { id : 82, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0019.jpg", description :"IMG-20170402-WA0019" },
  ],
  Italy      : [
    { id : 83, type : "italy", src :"../image/Italy/Italian White - Vân Mây.jpg", description :"Italian White - Vân Mây" },
    { id : 84, type : "italy", src :"../image/Italy/Italian White.jpg", description :"Italian White" },
  ],
  Spain      : [
    { id : 85, type : "spain", src :"../image/Spain/nautaybannha.jpg", description :"nautaybannha" },
  ],
  Turkey      : [
    { id : 86, type : "turkey", src :"../image/Turkey/Goflan silver (2).jpg", description :"Goflan silver (2)" },
    { id : 87, type : "turkey", src :"../image/Turkey/Goflan silver (4).jpg", description :"Goflan silver (4)" },
    { id : 88, type : "turkey", src :"../image/Turkey/Goflan silver (5).jpg", description :"Goflan silver (5)" },
    { id : 89, type : "turkey", src :"../image/Turkey/HEMOGIN.jpg", description :"HEMOGIN" },
    { id : 90, type : "turkey", src :"../image/Turkey/Homogene (2).jpg", description :"Homogene (2)" },
    { id : 91, type : "turkey", src :"../image/Turkey/Homogene (3).jpg", description :"Homogene (3)" },
    { id : 92, type : "turkey", src :"../image/Turkey/Travertine light c.c (2).jpg", description :"Travertine light c.c (2)" },
    { id : 93, type : "turkey", src :"../image/Turkey/travertine medium quality (2).jpeg", description :"travertine medium quality (2)" },
   ],
  VietNam     : [
    { id : 94, type : "vietnam", src :"../image/VietNam/vang binh dinh.jpg", description :"vang binh dinh" },
  ]                   
}

const filterStoneReducer = (state = defaultState ,action) => {
  return state;
}


export default filterStoneReducer;