let navbar1 = document.getElementById('links-navbar-1')
let navbar2 = document.getElementById('links-navbar-2')
let navbar3 = document.getElementById('links-navbar-3')
let navbar4 = document.getElementById('links-navbar-4')
let navbar5 = document.getElementById('links-navbar-5')
let linksDownNavbar = document.getElementById('links-down-navbar')
let downNavbar1 = document.getElementById('down-navbar-1')
let downNavbar2 = document.getElementById('down-navbar-2')
let downNavbar3 = document.getElementById('down-navbar-3')
let downNavbar4 = document.getElementById('down-navbar-4')
let downNavbar5 = document.getElementById('down-navbar-5')


navbar1.onmouseover = downNavbar1.onmouseover = function() {
    linksDownNavbar.style.display = 'none';
    downNavbar2.style.display = 'none';
    downNavbar3.style.display = 'none';
    downNavbar4.style.display = 'none';
    downNavbar5.style.display = 'none';
    downNavbar1.style.display = 'block';
}

downNavbar1.onmouseout = function() {
    linksDownNavbar.style.display = 'block';
    downNavbar1.style.display = 'none';
}

navbar2.onmouseover = downNavbar2.onmouseover = function() {
    linksDownNavbar.style.display = 'none';
    downNavbar1.style.display = 'none'
    downNavbar3.style.display = 'none'
    downNavbar4.style.display = 'none'
    downNavbar5.style.display = 'none'
    downNavbar2.style.display = 'block';
}

downNavbar2.onmouseout = function() {
    linksDownNavbar.style.display = 'block';
    downNavbar2.style.display = 'none';
}

navbar3.onmouseover = downNavbar3.onmouseover = function() {
    linksDownNavbar.style.display = 'none';
    downNavbar1.style.display = 'none';
    downNavbar2.style.display = 'none';
    downNavbar4.style.display = 'none';
    downNavbar5.style.display = 'none';
    downNavbar3.style.display = 'block';
}

downNavbar3.onmouseout = function() {
    linksDownNavbar.style.display = 'block';
    downNavbar3.style.display = 'none';
}

navbar4.onmouseover = downNavbar4.onmouseover = function() {
    linksDownNavbar.style.display = 'none';
    downNavbar1.style.display = 'none'
    downNavbar3.style.display = 'none'
    downNavbar2.style.display = 'none'
    downNavbar5.style.display = 'none'
    downNavbar4.style.display = 'block';
}

downNavbar4.onmouseout = function() {
    linksDownNavbar.style.display = 'block';
    downNavbar4.style.display = 'none';
}

navbar5.onmouseover = downNavbar5.onmouseover = function() {
    linksDownNavbar.style.display = 'none';
    downNavbar1.style.display = 'none'
    downNavbar3.style.display = 'none'
    downNavbar2.style.display = 'none'
    downNavbar4.style.display = 'none'
    downNavbar5.style.display = 'block';
}

downNavbar5.onmouseout = function() {
    linksDownNavbar.style.display = 'block';
    downNavbar5.style.display = 'none';
}
 
let buttonDropdown = document.getElementById('button-dropdown')
let topNavBar = document.getElementsByTagName('body')

buttonDropdown.onclick = function() {
    if (buttonDropdown.style.backgroundColor == 'lightblue') {
        buttonDropdown.style.backgroundColor = 'transparent'
        buttonDropdown.style.paddingLeft = '11px'
        buttonDropdown.style.boxShadow = 'none'

    } else {
    buttonDropdown.style.backgroundColor = 'lightblue'
    buttonDropdown.style.border = 'none'
    buttonDropdown.style.paddingLeft = '20px'
    buttonDropdown.style.boxShadow = '0px 4px 8px 0 rgba(0, 0, 0, 0.2)'
    }  
}

let navBar = document.getElementById('navBar')
let bodyR = document.getElementsByTagName('<body>')

bodyR.onscroll = function () {
    navBar.className += ' shadow'
}




