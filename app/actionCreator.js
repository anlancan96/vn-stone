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
    