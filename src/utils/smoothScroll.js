const smoothScroll = (offset = 98) => {
  // Handle URL fragment identifiers
  const hash = window.location.hash
  console.log(hash)
  if (hash) {
    const targetElement = document.querySelector(hash)
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition + window.pageYOffset,
        behavior: "smooth",
      })
    } else {
      console.error(`Element with ID ${hash} not found.`)
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition + window.pageYOffset,
          behavior: "smooth",
        })
      } else {
        console.error(`Element with ID ${targetId} not found.`)
      }
    })
  })
}

export default smoothScroll
