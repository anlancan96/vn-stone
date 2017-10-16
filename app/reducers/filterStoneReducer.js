
const defaultState = {
    ChinaStone : [
      { id : 1, Origin : "China", type : "china", src :"../image/China/Indian White 1.jpg", description :"Indian white 1", isShow : false },
      { id : 2, Origin : "China", type : "china", src :"../image/China/Indian White 2.jpg", description :"Indian white 2", isShow : false },
      { id : 3, Origin : "China", type : "china", src :"../image/China/Indian White 3.jpg", description :"Indian white 3", isShow : false },
      { id : 4, Origin : "China", type : "china", src :"../image/China/Indian White 4.jpg", description :"Indian white 4", isShow : false },
      { id : 5, Origin : "China", type : "china", src :"../image/China/Indian White 5.jpg", description :"Indian white 5", isShow : false } 
    ],
    Egypt1      : [
      { id : 6, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Green.jpg", description :"Fardy-Green", isShow : false },
      { id : 7, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Yellow.jpg", description :"Fardy-Yellow", isShow : false },
      { id : 8, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Forsan.jpg", description :"Forsan", isShow : false },
      { id : 9, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-1.jpg", description :"Gendola-1", isShow : false },
      { id : 10, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-2.jpg", description :"Gendola-2", isShow : false },
      { id : 11, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gray.jpg", description :"Gray", isShow : false },
      { id : 12, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Red Aswan Granite Slabs17.jpg", description :"Red Aswan Granite", isShow : false },
      { id : 13, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Halayb White Granite Slabs19 (1).jpg", description :"Halay White", isShow : false },
    ],
    Egypt2      : [
      { id : 14, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (8).jpg", description :"Glala extra (8)", isShow : false },
      { id : 15, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra high quality.jpg", description :"Glala extra high quality", isShow : false },
      { id : 16, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (4).jpg", description :"Royal creama (4)", isShow : false },
      { id : 17, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (2).jpg", description :"Sinai pearle (2)", isShow : false },
      { id : 18, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (9).jpg", description :"Royal creama (9)", isShow : false },
      { id : 19, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (2).jpg", description :"Sunny (2)", isShow : false },
      { id : 20, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (2).jpg", description :"Travin (2)", isShow : false },
      { id : 21, Origin : "Egypt", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm31.jpg", description :"Royal Gray Polished slabs 2cm31", isShow : false },
    ],
    Indian1      : [
      { id : 22, Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/Black Galaxy- Slabs.jpg", description :"Black Galaxy- Slabs", isShow : false },
      { id : 23, Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0004.jpg", description :"IMG-20170402-WA0004", isShow : false },
      { id : 24, Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008.jpg", description :"IMG-20170402-WA0008", isShow : false },
      { id : 25, Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0012.jpg", description :"IMG-20170402-WA0012", isShow : false },
      { id : 26, Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0005.jpg", description :"IMG-20170911-WA0005", isShow : false },
      { id : 27, Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0009.jpg", description :"IMG-20170402-WA0009", isShow : false },
      { id : 28, Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0010.jpg", description :"IMG-20170402-WA0010", isShow : false },
      { id : 29, Origin : "Indian", type : "idian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0015.jpg", description :"IMG-20170402-WA0015", isShow : false },  
    ],
    Indian2      : [
      { id : 30, Origin : "Indian", type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 1.jpg", description :"Imperial red 1" },
      { id : 31, Origin : "Indian", type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 2.jpg", description :"Imperial Red 2" },
      { id : 32, Origin : "Indian", type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 3.jpg", description :"Imperial red 3" },
      { id : 33, Origin : "Indian", type : "idian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 4.jpg", description :"Imperial Red 4" },
    ],
    Indian3      : [
      { id : 34, Origin : "Indian", type : "idian", src :"../image/Indian/Ruby Red - Đỏ Ruby/Ruby Red.jpg", description :"Ruby Red" },
    ],
    Indian4      : [
      { id : 35, Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 1.jpg", description :"Tan Brown 1" },
      { id : 36, Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 2.jpg", description :"Tan Brown 2" },
      { id : 37, Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 3.jpg", description :"Tan Brown 3" },
      { id : 38, Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0000.jpg", description :"IMG-20170402-WA0000" },
      { id : 39, Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0001.jpg", description :"IMG-20170402-WA0001" },
      { id : 40, Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0014.jpg", description :"IMG-20170402-WA0014" },
      { id : 41, Origin : "Indian", type : "idian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0019.jpg", description :"IMG-20170402-WA0019" },
    ],
    Italy      : [
      { id : 42, Origin : "Italy", type : "italy", src :"../image/Italy/Italian White - Vân Mây.jpg", description :"Italian White - Vân Mây" },
      { id : 43, Origin : "Italy", type : "italy", src :"../image/Italy/Italian White.jpg", description :"Italian White" },
    ],
    Spain      : [
      { id : 44, Origin : "Spain", type : "spain", src :"../image/Spain/nautaybannha.jpg", description :"nautaybannha" },
    ],
    Turkey      : [
      { id : 45, Origin : "Turkey", type : "turkey", src :"../image/Turkey/Goflan silver (2).jpg", description :"Goflan silver (2)" },
      { id : 46, Origin : "Turkey", type : "turkey", src :"../image/Turkey/Goflan silver (4).jpg", description :"Goflan silver (4)" },
      { id : 47, Origin : "Turkey", type : "turkey", src :"../image/Turkey/Goflan silver (5).jpg", description :"Goflan silver (5)" },
      { id : 48, Origin : "Turkey", type : "turkey", src :"../image/Turkey/HEMOGIN.jpg", description :"HEMOGIN" },
      { id : 49, Origin : "Turkey", type : "turkey", src :"../image/Turkey/Homogene (2).jpg", description :"Homogene (2)" },
      { id : 50, Origin : "Turkey", type : "turkey", src :"../image/Turkey/Homogene (3).jpg", description :"Homogene (3)" },
      { id : 51, Origin : "Turkey", type : "turkey", src :"../image/Turkey/Travertine light c.c (2).jpg", description :"Travertine light c.c (2)" },
      { id : 52, Origin : "Turkey", type : "turkey", src :"../image/Turkey/travertine medium quality (2).jpeg", description :"travertine medium quality (2)" },
     ],
    VietNam     : [
      { id : 53, Origin : "VietNam", type : "vietnam", src :"../image/VietNam/vang binh dinh.jpg", description :"vang binh dinh" },
    ]                   
}

const filterStoneReducer = (state = defaultState ,action) => {
    if(action.type ==='FILTER_SHOW_ONE'){
      return Object.values(state).map(e => {
        if(e.id !== action.id) return e;
        return {...e,isShow : true};
      })
    }
    if(action.type ==='FILTER_SHOW_ALL'){
      return Object.values(state).map(e => {
        return {...e,isShow : true};
      })
    }
    return state;
}


export default filterStoneReducer;