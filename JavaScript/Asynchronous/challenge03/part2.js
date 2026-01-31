
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async imgPath => await createImage(imgPath));
    console.log('Array of promises:', imgs);

    const imgsEl = await Promise.all(imgs);
    console.log('Final image elements:', imgsEl);

    imgsEl.forEach(img => img.classList.add('parallel'));

  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.png', 'img/img-2.png', 'img/img-3.png']);