const filterLanguages = (state ='vn',action) =>{
    if(action.type === 'EN') return 'en';
    if(action.type === 'VN') return 'vn';
    return state;    
}
export default filterLanguages;