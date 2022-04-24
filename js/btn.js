const btn = document.getElementById('btn-mobile')

btn.addEventListener('click',btnmobile)

function btnmobile(){
    const nav = document.getElementById('navigation')
    nav.classList.toggle('active')
}
