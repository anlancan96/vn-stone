
const defaultState = {
    ChinaStone : [
      { id : 1,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China", type : "china", src :"../image/China/Indian White 1.jpg", description :"Indian white 1"},
      { id : 2,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China", type : "china", src :"../image/China/Indian White 2.jpg", description :"Indian white 2"},
      { id : 3,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China", type : "china", src :"../image/China/Indian White 3.jpg", description :"Indian white 3"},
      { id : 4,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China", type : "china", src :"../image/China/Indian White 4.jpg", description :"Indian white 4"},
      { id : 5,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China", type : "china", src :"../image/China/Indian White 5.jpg", description :"Indian white 5"} 
    ],
    Egypt1      : [
      { id : 6,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Green.jpg", description :"Fardy-Green"},
      { id : 7,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Yellow.jpg", description :"Fardy-Yellow"},
      { id : 8,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Forsan.jpg", description :"Forsan"},
      { id : 9,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-1.jpg", description :"Gendola-1"},
      { id : 10, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-2.jpg", description :"Gendola-2"},
      { id : 11, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gray.jpg", description :"Gray"},
      { id : 12, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Red Aswan Granite Slabs17.jpg", description :"Red Aswan Granite"},
      { id : 13, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Halayb White Granite Slabs19 (1).jpg", description :"Halay White"},
      { id : 14, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola (1).jpg", description :"Gendola (1)"},
      { id : 15, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Granite samples.jpg", description :"Granite samples"},
      { id : 16, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Nervertity.jpg", description :"Nervertity"},
      { id : 17, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/halayeb-white.jpg", description :"halayeb-white"},
      { id : 18, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Verdy Granite Slabs10 (1).jpg", description :"Verdy Granite Slabs10 (1)"},

    ],
    Egypt2      : [
      { id : 19, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 20, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 21, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 22, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 23, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 24, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 25, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 26, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 27, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 28, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 29, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 30, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 31, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 32, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
      { id : 33, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/.jpg", description :""},
    ],
    Indian1      : [
      { id : 34, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/Black Galaxy- Slabs.jpg", description :"Black Galaxy- Slabs"},
      { id : 35, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0004.jpg", description :"IMG-20170402-WA0004"},
      { id : 36, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008.jpg", description :"IMG-20170402-WA0008"},
      { id : 37, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ",  Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0012.jpg", description :"IMG-20170402-WA0012"},
      { id : 38, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0005.jpg", description :"IMG-20170911-WA0005"},
      { id : 39, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0009.jpg", description :"IMG-20170402-WA0009"},
      { id : 40, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0010.jpg", description :"IMG-20170402-WA0010"},
      { id : 41, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0015.jpg", description :"IMG-20170402-WA0015"},  
    ],
    Indian2      : [
      { id : 42, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian", type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 1.jpg", description :"Imperial red 1" },
      { id : 43, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian", type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 2.jpg", description :"Imperial Red 2" },
      { id : 44, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian", type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 3.jpg", description :"Imperial red 3" },
      { id : 45, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian", type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 4.jpg", description :"Imperial Red 4" },
    ],
    Indian3      : [
      { id : 46, optionEn : "Ruby Red", optionVn : "Đỏ Ruby", Origin : "Indian", type : "idian", src :"../image/Indian/Ruby Red - Đỏ Ruby/Ruby Red.jpg", description :"Ruby Red" },
    ],
    Indian4      : [
      { id : 47, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 1.jpg", description :"Tan Brown 1" },
      { id : 48, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 2.jpg", description :"Tan Brown 2" },
      { id : 49, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 3.jpg", description :"Tan Brown 3" },
      { id : 50, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0000.jpg", description :"IMG-20170402-WA0000" },
      { id : 51, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0001.jpg", description :"IMG-20170402-WA0001" },
      { id : 52, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0014.jpg", description :"IMG-20170402-WA0014" },
      { id : 53, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0019.jpg", description :"IMG-20170402-WA0019" },
    ],
    Italy      : [
      { id : 54, optionEn : "Italian White", optionVn : "Vân Mây", Origin : "Italy", type : "italy", src :"../image/Italy/Italian White - Vân Mây.jpg", description :"Italian White - Vân Mây" },
      { id : 55, optionEn : "Italian White", optionVn : "Vân Mây", Origin : "Italy", type : "italy", src :"../image/Italy/Italian White.jpg", description :"Italian White" },
    ],
    Spain      : [
      { id : 56, optionEn : "Spain Brown", optionVn : "Nâu Tây Ban Nha", Origin : "Spain", type : "spain", src :"../image/Spain/nautaybannha.jpg", description :"nautaybannha" },
    ],
    Turkey      : [
      { id : 57, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey", type : "turkey", src :"../image/Turkey/Goflan silver (2).jpg", description :"Goflan silver (2)" },
      { id : 58, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey", type : "turkey", src :"../image/Turkey/Goflan silver (4).jpg", description :"Goflan silver (4)" },
      { id : 59, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey", type : "turkey", src :"../image/Turkey/Goflan silver (5).jpg", description :"Goflan silver (5)" },
      { id : 60, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey", type : "turkey", src :"../image/Turkey/HEMOGIN.jpg", description :"HEMOGIN" },
      { id : 61, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey", type : "turkey", src :"../image/Turkey/Homogene (2).jpg", description :"Homogene (2)" },
      { id : 62, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey", type : "turkey", src :"../image/Turkey/Homogene (3).jpg", description :"Homogene (3)" },
      { id : 63, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey", type : "turkey", src :"../image/Turkey/Travertine light c.c (2).jpg", description :"Travertine light c.c (2)" },
      { id : 64, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey", type : "turkey", src :"../image/Turkey/travertine medium quality (2).jpeg", description :"travertine medium quality (2)" },
     ],
    VietNam     : [
      { id : 65, optionEn : "Vang Binh Dinh", optionVn : "Vàng Bình Định", Origin : "VietNam", type : "vietnam", src :"../image/VietNam/vang binh dinh.jpg", description :"vang binh dinh" },
    ]                   
  }
  
  const filterDatabase = (state = defaultState ,action) => {
    return state;
  }
  
  
  export default filterDatabase;