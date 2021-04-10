const btns = document.querySelectorAll('.project__content--btn');
const spanRipple = document.querySelector('.project__content--btn--circle');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // GETTING THE MOUSE CLICK POSITIONS OFF THE WHOLE SCREEN
        const xMouse = e.clientX;
        const yMouse = e.clientY;
        // console.log(xMouse, yMouse)

        // METHOD FOT GETTING POSITION OF AN OBJECT
        // const btnTop = e.target.offsetTop;
        // const btnleft = e.target.offsetLeft;

        // ANOTHER METHOD FOR GETTING THE POSITION OF AN OBJECT
        const rect = btn.getBoundingClientRect();
        const topPosObj = rect.top;
        const leftPosObj = rect.left;

        // GETTING THE POSITION WHERE INSIDE OF OBJECT IS CLICKED
        const insideX = xMouse - leftPosObj;
        const insideY = yMouse - topPosObj;

        const spanCircle = document.createElement('span');
        spanCircle.classList.add('project__content--btn--circle')
        spanCircle.style.top = insideY + 'px';
        spanCircle.style.left = insideX + 'px';
        btn.appendChild(spanCircle)

        // DELETE CREATED CIRCLE AFTER SOME TIME
        setTimeout(() => {
            spanCircle.remove();
        }, 700)
    })
})
