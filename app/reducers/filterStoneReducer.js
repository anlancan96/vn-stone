
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
    { id : 14, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (8).jpg", description :"Glala extra (8)"},
    { id : 15, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra high quality.jpg", description :"Glala extra high quality"},
    { id : 16, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (4).jpg", description :"Royal creama (4)"},
    { id : 17, type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (2).jpg", description :"Sinai pearle (2)"},
    { id : 18, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (9).jpg", description :"Royal creama (9)"},
    { id : 19, type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (2).jpg", description :"Sunny (2)"},
    { id : 20, type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (2).jpg", description :"Travin (2)"},
    { id : 21, type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm31.jpg", description :"Royal Gray Polished slabs 2cm31"},
  ],
  Indian1      : [
    { id : 22, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/Black Galaxy- Slabs.jpg", description :"Black Galaxy- Slabs"},
    { id : 23, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0004.jpg", description :"IMG-20170402-WA0004"},
    { id : 24, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008.jpg", description :"IMG-20170402-WA0008"},
    { id : 25, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0012.jpg", description :"IMG-20170402-WA0012"},
    { id : 26, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0005.jpg", description :"IMG-20170911-WA0005"},
    { id : 27, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0009.jpg", description :"IMG-20170402-WA0009"},
    { id : 28, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0010.jpg", description :"IMG-20170402-WA0010"},
    { id : 29, type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0015.jpg", description :"IMG-20170402-WA0015"},  
  ],
  Indian2      : [
    { id : 30, type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 1.jpg", description :"Imperial red 1" },
    { id : 31, type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 2.jpg", description :"Imperial Red 2" },
    { id : 32, type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 3.jpg", description :"Imperial red 3" },
    { id : 33, type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 4.jpg", description :"Imperial Red 4" },
  ],
  Indian3      : [
    { id : 34, type : "idian", src :"../image/Indian/Ruby Red - Đỏ Ruby/Ruby Red.jpg", description :"Ruby Red" },
  ],
  Indian4      : [
    { id : 35, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 1.jpg", description :"Tan Brown 1" },
    { id : 36, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 2.jpg", description :"Tan Brown 2" },
    { id : 37, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 3.jpg", description :"Tan Brown 3" },
    { id : 38, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0000.jpg", description :"IMG-20170402-WA0000" },
    { id : 39, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0001.jpg", description :"IMG-20170402-WA0001" },
    { id : 40, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0014.jpg", description :"IMG-20170402-WA0014" },
    { id : 41, type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0019.jpg", description :"IMG-20170402-WA0019" },
  ],
  Italy      : [
    { id : 42, type : "italy", src :"../image/Italy/Italian White - Vân Mây.jpg", description :"Italian White - Vân Mây" },
    { id : 43, type : "italy", src :"../image/Italy/Italian White.jpg", description :"Italian White" },
  ],
  Spain      : [
    { id : 44, type : "spain", src :"../image/Spain/nautaybannha.jpg", description :"nautaybannha" },
  ],
  Turkey      : [
    { id : 45, type : "turkey", src :"../image/Turkey/Goflan silver (2).jpg", description :"Goflan silver (2)" },
    { id : 46, type : "turkey", src :"../image/Turkey/Goflan silver (4).jpg", description :"Goflan silver (4)" },
    { id : 47, type : "turkey", src :"../image/Turkey/Goflan silver (5).jpg", description :"Goflan silver (5)" },
    { id : 48, type : "turkey", src :"../image/Turkey/HEMOGIN.jpg", description :"HEMOGIN" },
    { id : 49, type : "turkey", src :"../image/Turkey/Homogene (2).jpg", description :"Homogene (2)" },
    { id : 50, type : "turkey", src :"../image/Turkey/Homogene (3).jpg", description :"Homogene (3)" },
    { id : 51, type : "turkey", src :"../image/Turkey/Travertine light c.c (2).jpg", description :"Travertine light c.c (2)" },
    { id : 52, type : "turkey", src :"../image/Turkey/travertine medium quality (2).jpeg", description :"travertine medium quality (2)" },
   ],
  VietNam     : [
    { id : 53, type : "vietnam", src :"../image/VietNam/vang binh dinh.jpg", description :"vang binh dinh" },
  ]                   
}

const filterStoneReducer = (state = defaultState ,action) => {
  return state;
}


export default filterStoneReducer;