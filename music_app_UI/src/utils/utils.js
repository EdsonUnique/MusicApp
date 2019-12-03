import router from 'umi/router'
import { stringify } from 'qs'

const getImgSize = imgSrc => {
  return new Promise((resolve, reject) => {
    const newImg = new Image()

    newImg.onload = () => {
      resolve({ width: newImg.width, height: newImg.height })
    }

    newImg.src = imgSrc
  })
}

const getFileExt = filename => {
  return filename.split('.').pop()
}

const toFileView = (filepath, filename, navtitle, routePrev) => {
  router.push(
    `${!!routePrev ? routePrev : ''}/file-view?${stringify({
      filepath,
      filename,
      navtitle,
    })}`
  )
}

const getClientWidth = () => {
  return document.documentElement.clientWidth
}

const getClientHeight = () => {
  return document.documentElement.clientHeight
}

export { getImgSize, getFileExt, toFileView, getClientWidth ,getClientHeight}
