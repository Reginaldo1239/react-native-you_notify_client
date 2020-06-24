
export const formatToClient=(date)=>{
    let month = (date.getMonth()+1)+'';
    let day = date.getDate()+'';
        if(month.length===1){
            month='0' +month;
        }
        if(day.length===1){ 
            day='0'+day; 
        }
return(day+'/'+month+'/'+date.getFullYear())
}