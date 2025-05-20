import gsap from "gsap"
import { SplitText } from "gsap/all"
gsap.registerPlugin(SplitText)


const profileimgcontainer = document.querySelector(".profile-image")
const profileimg = document.querySelectorAll(".profile-image .img")
const nameelement = document.querySelectorAll(".profile-name .name")
const nameheading = document.querySelectorAll(".profile-name .heading")

nameheading.forEach((heading) => {
  const split = new SplitText(heading, { type: "chars" })
  split.chars.forEach((char) => {
    char.classList.add('letter')
  })
})

const defaultletter = nameelement[0].querySelectorAll('.letter')
gsap.set(defaultletter, { y: '100%' })
