function tgbt_block() {
  document.getElementById('tg-bt').style.display = "block"
}
function tgbt_none() {
  document.getElementById('tg-bt').style.display = "none"
}
function tgl_active() {
  if (document.getElementById('garis-2').style.borderBottom == "none") {
    document.getElementById('garis-1').classList.remove("transform_atas")
    document.getElementById('garis-3').classList.remove("transform_bawah")
    document.getElementById('garis-2').style.borderBottom = "2px solid black"
    document.getElementById('garis-1').style.transitionDuration = "0.5s"
    document.getElementById('garis-3').style.transitionDuration = "0.5s"
    document.getElementById('garis-2').style.transitionDuration = "0.5s"
    document.getElementById('nav-rs').style.display = "none"
  } else {
    document.getElementById('garis-1').classList.add("transform_atas")
    document.getElementById('garis-3').classList.add("transform_bawah")
    document.getElementById('garis-2').style.borderBottom = "none"
    document.getElementById('nav-rs').style.display = "block"
  }
}

function dis_none1() {
  document.getElementById('nav-dr-cn1').style.display = 'none'
}
function dis_block1() {
  document.getElementById('nav-dr-cn1').style.display = 'block'
}
function dis_none2() {
  document.getElementById('nav-dr-cn2').style.display = 'none'
}
function dis_block2() {
  document.getElementById('nav-dr-cn2').style.display = 'block'
}

document.addEventListener('DOMContentLoaded', function () {
  var scrollIcon = document.getElementById('scrollIcon')

  window.addEventListener('scroll', function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollIcon.style.opacity = '1'
    } else {
      scrollIcon.style.opacity = '0'
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var scrollIcon = document.getElementById('scrollCart')

  window.addEventListener('scroll', function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollIcon.style.opacity = '1'
    } else {
      scrollIcon.style.opacity = '0'
    }
  })
})

function openPopUp() {
  document.getElementById('popUpCart').style.display = 'flex'
}

function closePopUp() {
  document.getElementById('popUpCart').style.display = 'none'
}
