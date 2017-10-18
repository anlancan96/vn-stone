
const defaultState = {
    ChinaStone : [
      { id : 1,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn : "Trung Quốc",type : "china", src :"../image/China/Indian White 1.jpg", description :"Indian white 1"},
      { id : 2,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn:"Trung Quốc", type : "china", src :"../image/China/Indian White 2.jpg", description :"Indian white 2"},
      { id : 3,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn:"Trung Quốc", type : "china", src :"../image/China/Indian White 3.jpg", description :"Indian white 3"},
      { id : 4,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn:"Trung Quốc", type : "china", src :"../image/China/Indian White 4.jpg", description :"Indian white 4"},
      { id : 5,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn:"Trung Quốc", type : "china", src :"../image/China/Indian White 5.jpg", description :"Indian white 5"} 
    ],
    Egypt1      : [
      { id : 6,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Green.jpg", description :"Fardy-Green"},
      { id : 7,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Yellow.jpg", description :"Fardy-Yellow"},
      { id : 8,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Forsan.jpg", description :"Forsan"},
      { id : 9,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-1.jpg", description :"Gendola-1"},
      { id : 10, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-2.jpg", description :"Gendola-2"},
      { id : 11, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gray.jpg", description :"Gray"},
      { id : 12, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Red Aswan Granite Slabs17.jpg", description :"Red Aswan Granite"},
      { id : 13, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Halayb White Granite Slabs19 (1).jpg", description :"Halay White"},
      { id : 14, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola (1).jpg", description :"Gendola (1)"},
      { id : 15, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Granite samples.jpg", description :"Granite samples"},
      { id : 16, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Nervertity.jpg", description :"Nervertity"},
      { id : 17, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/halayeb-white.jpg", description :"halayeb-white"},
      { id : 18, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Verdy Granite Slabs10 (1).jpg", description :"Verdy Granite Slabs10 (1)"},

    ],
    Egypt2      : [
      { id : 19, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (8).jpg", description :"Glala extra (8)"},
      { id : 20, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (9).jpg", description :"Glala extra (9)"},
      { id : 21, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (10).jpg", description :"Glala extra (10)"},
      { id : 22, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra high quality.jpg", description :"Glala extra high quality"},
      { id : 23, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra.jpg", description :"Glala extra"},
      { id : 24, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (4).jpg", description :"Royal creama (4)"},
      { id : 25, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (6).JPG", description :"Royal creama (6)"},
      { id : 26, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (9).JPG", description :"Royal creama (9)"},
      { id : 27, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (14).JPG", description :"Royal creama (14)"},
      { id : 28, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (19).JPG", description :"Royal creama (19)"},
      { id : 29, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm04.JPG", description :"Royal Gray Polished slabs 2cm04"},
      { id : 30, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm06.JPG", description :"Royal Gray Polished slabs 2cm06"},
      { id : 31, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm09 (9).JPG", description :"Royal Gray Polished slabs 2cm09 (9)"},
      { id : 32, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm13.JPG", description :"Royal Gray Polished slabs 2cm13"},
      { id : 33, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm31.JPG", description :"Royal Gray Polished slabs 2cm31"},
      { id : 34, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (2).JPG", description :"sinai pearle (2)"},
      { id : 35, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (3).JPG", description :"sinai pearle (3)"},
      { id : 36, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (5).JPG", description :"sinai pearle (5)"},
      { id : 37, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (6).JPG", description :"sinai pearle (6)"},
      { id : 38, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle.JPG", description :"sinai pearle"},
      { id : 39, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (2).JPG", description :"sunny (2)"},
      { id : 40, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (5).JPG", description :"sunny (5)"},
      { id : 41, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (8).JPG", description :"sunny (8)"},
      { id : 42, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (9).JPG", description :"sunny (9)"},
      { id : 43, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny.JPG", description :"sunny"},
      { id : 44, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (2).jPG", description :"travin (2)"},
      { id : 45, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (3)_1.JPG", description :""},
      { id : 46, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (3).JPG", description :"travin (3)"},
      { id : 47, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (4).JPG", description :"travin (4)"},
      { id : 48, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin.JPG", description :"travin"},

    ],
    Indian1      : [
      { id : 49, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/Black Galaxy- Slabs.JPG", description :"Black Galaxy- Slabs"},
      { id : 50, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008 (1).jpg", description :"IMG-20170402-WA0008 (1)"},
      { id : 51, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008.jpg", description :"IMG-20170402-WA0008"},
      { id : 52, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ",  Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0009.jpg", description :"IMG-20170402-WA0009"},
      { id : 53, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0010.jpg", description :"IMG-20170402-WA0010"},
      { id : 54, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0011.jpg", description :"IMG-20170402-WA0011"},
      { id : 55, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0012.jpg", description :"IMG-20170402-WA0012"},
      { id : 56, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0013.jpg", description :"IMG-20170402-WA0013"},  
      { id : 57, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0015.jpg", description :"IMG-20170402-WA0015"},
      { id : 58, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0016.jpg", description :"IMG-20170402-WA0016"},  
      { id : 59, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0017 (1).jpg", description :"IMG-20170402-WA0017 (1)"},  
      { id : 60, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0017.jpg", description :"IMG-20170402-WA0017"},  
      { id : 61, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0018.jpg", description :"IMG-20170402-WA0018"},  
      { id : 62, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0003.jpg", description :"IMG-20170911-WA0003"},  
      { id : 63, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0005.jpg", description :"IMG-20170911-WA0005"},  
      { id : 64, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0006.jpg", description :"IMG-20170911-WA0006"},  
      { id : 65, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170926-WA0001.jpg", description :"IMG-20170926-WA0001"},  
      { id : 66, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170926-WA0003.jpg", description :"IMG-20170926-WA0003"},  
      { id : 67, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170926-WA0004.jpg", description :"IMG-20170926-WA0004"},  
      { id : 68, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170926-WA0005.jpg", description :"IMG-20170926-WA0005"},  
      { id : 69, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/denkimsatrung.jpg", description :"denkimsatrung"},  
      { id : 70, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0004.jpg", description :"IMG-20170402-WA0004"},    
    ],
    Indian2      : [
      { id : 71, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 1.jpg", description :"Imperial red 1" },
      { id : 72, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 2.jpg", description :"Imperial Red 2" },
      { id : 73, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 3.jpg", description :"Imperial red 3" },
      { id : 74, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 4.jpg", description :"Imperial Red 4" },
    ],
    Indian3      : [
      { id : 75, optionEn : "Ruby Red", optionVn : "Đỏ Ruby", Origin : "Indian", type : "indian", src :"../image/Indian/Ruby Red - Đỏ Ruby/Ruby Red.jpg", description :"Ruby Red" },
    ],
    Indian4      : [
      { id : 76, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 1.jpg", description :"Tan Brown 1" },
      { id : 77, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 2.JPG", description :"Tan Brown 2" },
      { id : 78, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 3.jpg", description :"Tan Brown 3" },
      { id : 79, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0000.jpg", description :"IMG-20170402-WA0000" },
      { id : 80, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0001.jpg", description :"IMG-20170402-WA0001" },
      { id : 81, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0014.jpg", description :"IMG-20170402-WA0014" },
      { id : 82, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0019.jpg", description :"IMG-20170402-WA0019" },
      
    ],
    Italy      : [
      { id : 83, optionEn : "Italian White", optionVn : "Vân Mây", Origin : "Italy",OriginVn:"Ý", type : "italy", src :"../image/Italy/Italian White - Vân Mây.jpg", description :"Italian White - Vân Mây" },
      { id : 84, optionEn : "Italian White", optionVn : "Vân Mây", Origin : "Italy",OriginVn:"Ý", type : "italy", src :"../image/Italy/Italian White.jpg", description :"Italian White" },
    ],
    Spain      : [
      { id : 85, optionEn : "Spain Brown", optionVn : "Nâu Tây Ban Nha", Origin : "Spain",OriginVn:"Tây Ban Nha", type : "spain", src :"../image/Spain/nautaybannha.jpg", description :"nautaybannha" },
    ],
    Turkey      : [
      { id : 86, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Goflan silver (2).jpg", description :"Goflan silver (2)" },
      { id : 87, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Goflan silver (4).jpg", description :"Goflan silver (4)" },
      { id : 88, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Goflan silver (5).jpg", description :"Goflan silver (5)" },
      { id : 89, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/HEMOGIN.jpg", description :"HEMOGIN" },
      { id : 90, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Homogene (2).jpg", description :"Homogene (2)" },
      { id : 91, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Homogene (3).jpg", description :"Homogene (3)" },
      { id : 92, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Travertine light c.c (2).jpg", description :"Travertine light c.c (2)" },
      { id : 93, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/travertine medium quality (2).jpeg", description :"travertine medium quality (2)" },
     ],
    VietNam     : [
      { id : 94, optionEn : "Vang Binh Dinh", optionVn : "Vàng Bình Định", Origin : "VietNam",OriginVn:"Việt Nam", type : "vietnam", src :"../image/VietNam/vang binh dinh.jpg", description :"vang binh dinh" },
    ]                   
  }
  
  const filterDatabase = (state = defaultState ,action) => {
    return state;
  }
  
  
  export default filterDatabase;