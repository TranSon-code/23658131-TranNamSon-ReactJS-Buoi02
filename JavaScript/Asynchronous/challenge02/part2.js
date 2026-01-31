let currentImg;

// Thay đổi .jpg thành .png để khớp với file của bạn
createImage('img/img-1.png') 
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.png');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    console.log('Image 2 hidden');
  })
  .catch(err => console.error('Lỗi rồi nè: ', err.message));