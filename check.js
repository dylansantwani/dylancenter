domains = [
    'dylansantwani.com',
    'dylansantwani.github.io',
    'dsgame2.github.io',
    'watch.dylansantwani.com',
    'tvplayer.pages.dev',
    'dylancode.com',
    'cloudflarepage-1j1.pages.dev',
    'newgame-d29.pages.dev',
    'dylan.center'

]
active = [
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T'
]
for (let i = 0; i < domains.length; i++) {
    let divtoadd = document.getElementById('checkfalse');
    let checkelement = document.createElement('p');
    checkelement.innerText = domains[i];
    if (active[i] == "T") {
        let classes = "text-green-400 mr-[25px] flex cursor-pointer mb-5";
        checkelement.onclick = function () {
            window.location.href = 'https://' + domains[i]
        }; checkelement.className += classes;
        divtoadd.appendChild(checkelement)
    }
    else {
        let classes = "text-rose-700 mr-[25px] flex cursor-pointer";
        checkelement.className += classes;
        divtoadd.appendChild(checkelement)
    }

}
