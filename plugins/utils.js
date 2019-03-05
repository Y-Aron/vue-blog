
function previewPicture(files, target) {
  if (files && files.length > 0) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0])
    reader.onload = function () {
      target.setAttribute('src',  this.result)
    }
  }
}



export default ({ app }, inject) => {

  const utils = {
    previewPicture
  }

  inject('utils', utils)
}
