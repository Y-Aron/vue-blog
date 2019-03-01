

function verifyMobile(mobile) {
  return /^1[34578]\d{9}$/.test(mobile);
}

export default ({ app }, inject) => {

  const verify = {
    verifyMobile
  }

  inject('verify', verify)
}
