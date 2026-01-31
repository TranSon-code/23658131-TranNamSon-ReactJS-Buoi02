const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => reject(new Error('Image not found')));
  });
};


const loadNPause = async function () {
  try {
    
    let img = await createImage('img/img-1.png');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    
    img = await createImage('img/img-2.png');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
    
  } catch (err) {
    console.error(`💥 ${err.message}`);
  }
};


// loadNPause();