const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3
    }
  }
}

const textVerticalAnimation = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const photoAnimation = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export { container, photoAnimation, textVerticalAnimation }
