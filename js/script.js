let uploadBtn = document.querySelector('.upload button');
let uploadInput = document.querySelector('.upload input');
let viewImg = document.querySelector('.viewImg img');

let filterButton = document.querySelectorAll('.filterButton button');

let sliderRange = document.querySelector('.slider input');

let brightness = 100,
invert= 0,
saturate = 100,
blur = 0,
contrast = 100;

uploadBtn.addEventListener('click', ()=>{
    uploadInput.click();
});

uploadInput.addEventListener('change',()=>{
    let file = uploadInput.files[0];
    viewImg.src = URL.createObjectURL(file);

    document.querySelector('.disabled').classList.remove('disabled')
});

filterButton.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelector('.active').classList.remove('active');
        element.classList.add('active');
        document.getElementById('filterName').innerText = element.id
    })
});

sliderRange.addEventListener('input',()=>{
    document.getElementById('rangeVal').innerHTML = sliderRange.ariaValueMax;
    let stateActive = document.querySelector('.active');

    if(stateActive.id === "blur"){
        blur = sliderRange.value;
    }else if(stateActive.id === "brightness"){
        brightness = sliderRange.value;
    }else if(stateActive.id === "invert"){
        invert = sliderRange.value;
    }else if(stateActive.id === "contrast"){
        contrast = sliderRange.value;
    }else if(stateActive.id === "saturate"){
        saturate = sliderRange.value;
    }

    viewImg.style.filter =`blur(${blur}px) brightness(${brightness}%) invert(${invert}%) saturate(${saturate}%) contrast(${contrast}%)`
})