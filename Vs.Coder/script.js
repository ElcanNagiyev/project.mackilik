
    let b1=document.querySelector('#b1');
    let b2=document.querySelector('#b2');
    let b3=document.querySelector('#b3');
    let b4=document.querySelector('#b4');

    let cedvel=document.querySelectorAll('.cedvel');
    let fikstur=document.querySelectorAll('.fikstur');
    let istatistik=document.querySelectorAll('.istatistik');
    let tarihce=document.querySelectorAll('.tarihce');

    let selekt=document.querySelector('select');
    let div22_23=document.querySelector('.s22-23');
    let div21_22=document.querySelector('.s21-22');


    b1.addEventListener('click',function(event){
        if(selekt.value=='0'){
           cedvel[0].style.display='block'
           fikstur[0].style.display='none'
           istatistik[0].style.display='none'
           tarihce[0].style.display='none'
        }
        else{
            cedvel[1].style.display='block'
            fikstur[1].style.display='none'
            istatistik[1].style.display='none'
            tarihce[1].style.display='none'
        }
     })
 
     b2.addEventListener('click',function(event){
        if(selekt.value=='0'){
            cedvel[0].style.display='none'
            fikstur[0].style.display='block'
            istatistik[0].style.display='none'
            tarihce[0].style.display='none'
        }
        else{
            cedvel[1].style.display='none'
            fikstur[1].style.display='block'
            istatistik[1].style.display='none'
            tarihce[1].style.display='none'
        }

     })
 
     b3.addEventListener('click',function(event){
        if(selekt.value=='0'){
            cedvel[0].style.display='none'
            fikstur[0].style.display='none'
            istatistik[0].style.display='block'
            tarihce[0].style.display='none'
        }
        else{
            cedvel[1].style.display='none'
            fikstur[1].style.display='none'
            istatistik[1].style.display='block'
            tarihce[1].style.display='none'
        }
        
     })
     
     b4.addEventListener('click',function(event){
        if(selekt.value=='0'){
            cedvel[0].style.display='none'
            fikstur[0].style.display='none'
            istatistik[0].style.display='none'
            tarihce[0].style.display='block'  
        }
        else{
            cedvel[1].style.display='none'
            fikstur[1].style.display='none'
            istatistik[1].style.display='none'
            tarihce[1].style.display='block'
        }   
     })



    selekt.addEventListener('change',(event)=>{
        switch(selekt.value){
            case '0': 
                div21_22.style.display='none'
              //  cedvel[1].style.display='none'
                div22_23.style.display='block'
            break;

            case '1':
                div22_23.style.display='none'
                //cedvel[0].style.display='none'
                div21_22.style.display='block'
            break;
        }
    })




let btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');

let clubs=document.querySelectorAll('.i1');

a=0;

 btn2.addEventListener('click', ()=>{ 

    for(i=a;i<clubs.length;i++){
        if(clubs[i].style.display='block'){
            if(i<9){
                clubs[i].style.display='none'
                clubs[i+1].style.display='block'
                a=i+1;
                break
               
            }
            else{
                clubs[i].style.display='block'
            }
        }
    }

})


btn1.addEventListener('click', ()=>{ 

    for(j=a;j<clubs.length;j++){
        if(clubs[j].style.display='block'){
            if(j>0){
                clubs[j].style.display='none'
                clubs[j-1].style.display='block'
                a=j-1;
                break
               
            }
            else{
                clubs[i].style.display='block'
            }
        }
    }

})

