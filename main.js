const colorChangeInterval = () =>
{
    const elems = document.querySelectorAll('.color-change')
    const colors = ['yellow', 'red', 'neutral']
    let index = 0
    setInterval(() => {
        elems.forEach(elem => {
            colors.forEach(color => {
                elem.classList.remove(color)
            })
            elem.classList.add(colors[index])
        })
        index +=1
        if(index > 2) index = 0
    }, 1500)
}

const imageChangeInterval = () =>
{
    let index = 0
    const images = [...document.querySelectorAll('.icons-wrapper img')]
    setInterval(() => {
        images.forEach(img => {
            img.style.opacity = 0
           
        })
        images[index].style.opacity = 1
        index +=1
        if(index > 2) index = 0
    }, 1500)
}


const addZeroes = (num) => Number(num) > 10 ? `${num}` : `0${num}`

const setupCounter = () => {
    // Set the target date to one month from now
    const targetDate =  new Date('2024-01-31');
    // targetDate.setMonth(targetDate.getMonth() + 1);

    function updateCounter() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.querySelector('#days').innerText = addZeroes(days)
    document.querySelector('#hours').innerText = addZeroes(hours)
    document.querySelector('#minutes').innerText = addZeroes(minutes)
    document.querySelector('#seconds').innerText = addZeroes(seconds)


    if (timeDifference <= 0) {
        console.log("Countdown expired!");
        clearInterval(intervalId);
    }
    }


    const intervalId = setInterval(updateCounter, 1000); 
}

const animateCursor = () =>
{
    const cursor = document.querySelector('.cursor')
    const btn = document.querySelector('.btn')

    const { top, left } = btn.getBoundingClientRect()
    const tl = gsap.timeline()
    tl.to(cursor, {
        top,
        left : left + 50
    })
    tl.to(cursor, {
        top : top + 150,
        delay : 0.5
    })
    tl.to(btn, {
        y : 150,
    },'+1')
    tl.to(cursor, {
        top : -100,
        left : window.innerWidth
    })
}


const init = () =>
{

    animateCursor()
    colorChangeInterval()
    imageChangeInterval()
    setupCounter()
}


init()