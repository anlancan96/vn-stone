export function filterShowOne(id){
    return{
       type :'FILTER_SHOW_ONE',
       id,
    };
 }
 
 export function filterShowAll(){
     return{
         type :'FILTER_SHOW_ALL'
     }
 }
 
 export function setEnSub(){
     return{
         type :'EN'
     }
 }
 
 export function setVnSub(){
     return{
         type :'VN'
     }
 }