import {createStore} from 'redux';

const defaultState = {
      ChinaStone : [
        { id : 1, type : "Indian white", src :"../image/China/Indian White 1.jpg", description :"Indian white 1" },
        { id : 2, type : "Indian white", src :"../image/China/Indian White 2.jpg", description :"Indian white 2" },
        { id : 3, type : "Indian white", src :"../image/China/Indian White 3.jpg", description :"Indian white 3" },
        { id : 4, type : "Indian white", src :"../image/China/Indian White 4.jpg", description :"Indian white 4" },
        { id : 5, type : "Indian white", src :"../image/China/Indian White 5.jpg", description :"Indian white 5" } 
      ],
      Egypt1      : [
        { id : 1, type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Green.jpg", description :"Fardy-Green" },
        { id : 2, type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Yellow.jpg", description :"Fardy-Yellow" },
        { id : 3, type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Forsan.jpg", description :"Forsan" },
        { id : 4, type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-1.jpg", description :"Gendola-1" },
        { id : 5, type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-2.jpg", description :"Gendola-2" },
        { id : 6, type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Gray.jpg", description :"Gray" },
        { id : 7, type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Red Aswan Granite Slabs17.jpg", description :"Red Aswan Granite" },
        { id : 8, type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Halayb White Granite Slabs19 (1).jpg", description :"Halay White" },
      ],
      Egypt2      : [
        { id : 1, type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (8).jpg", description :"Glala extra (8)" },
        { id : 2, type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra high quality.jpg", description :"Glala extra high quality" },
        { id : 3, type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (4).jpg", description :"Royal creama (4)" },
        { id : 4, type : "Egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (2).jpg", description :"Sinai pearle (2)" },
        { id : 6, type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (9).jpg", description :"Royal creama (9)" },
        { id : 7, type : "Egypt", src :"../image/Egypt/Marble Ai Cap/sunny (2).jpg", description :"Sunny (2)" },
        { id : 8, type : "Egypt", src :"../image/Egypt/Marble Ai Cap/travin (2).jpg", description :"Travin (2)" },
        { id : 9, type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm31.jpg", description :"Royal Gray Polished slabs 2cm31" },
      ],
      Indian1      : [
        { id : 1, type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/Black Galaxy- Slabs.jpg", description :"Black Galaxy- Slabs" },
        { id : 2, type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0004.jpg", description :"IMG-20170402-WA0004" },
        { id : 3, type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008.jpg", description :"IMG-20170402-WA0008" },
        { id : 4, type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0012.jpg", description :"IMG-20170402-WA0012" },
        { id : 5, type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0005.jpg", description :"IMG-20170911-WA0005" },
        { id : 6, type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0009.jpg", description :"IMG-20170402-WA0009" }, 
      ],   
  }
  
  const reducer = (state = defaultState,action) => {
    return state;
  }
  const store = createStore(reducer);

  export default store;
  