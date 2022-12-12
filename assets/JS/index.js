const ratingsContainer=document.querySelector(".ratings__container");
const thankyouConatiner=document.querySelector(".thankyou__container");
const submitBtn=document.querySelector(".btn-submit");
const ratingBtn=document.querySelectorAll(".btn");
const rating=document.getElementById("rating")

// submitBtn.addEventListener("click",()=>{
//     thankyouConatiner.classList.remove("hidden");
//     ratingsContainer.classList.add('hidden');
// })

// ratingBtn.forEach(btn=>{
//     btn.addEventListener('click',()=>{
//         rating.innerHTML=btn.innerHTML
//         console.log(btn.innerHTML)
//     })
// })

ratingBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        rating.innerHTML=btn.innerHTML
        console.log(btn.innerHTML)
        submitBtn.addEventListener("click",()=>{
            thankyouConatiner.classList.remove("hidden");
            ratingsContainer.classList.add('hidden');
        })
    })
}
