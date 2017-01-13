const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const rgb = document.querySelector('.rgb');
const booth = document.querySelector('.photobooth');

let videoFilter = noFilter;
const ghostingValue = 1.0;

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream => {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    })
    .catch(error => console.error("Oh snap!", error));
}

function paintToCanavas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    pixels = videoFilter(pixels);
    ctx.globalAlpha = ghostingValue;
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const dataURI = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = dataURI;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${dataURI}" alt="Video still" />`;
  strip.insertBefore(link, strip.firsChild);
}

function noFilter(pixels) { return me(pixels); }
me = i => i;
plus = x => i => i + x;
minus = x => i => i - x;
multiply = x => i => i * x;
divide = x => i => i / x;
redIndex = me;
greenIndex = plus(1);
blueIndex = plus(2);
alphaIndex = plus(3);
/**
 * pixels - our pixels for the video filter effect
 * all other params are functions
 * params beginning with r deal with the Red channel
 * params beginning with g deal with the Green channel
 * params beginning with g deal with the Blue channel
 * params beginning with a deal with the Alpha channel
 * params ending in i take the iterator from the for loop as a param and return
 *  an index number for use in the pixel data array
 * params ending in t are transformation functions meant to consume a value from
 *  the pixel data array and transform it into some new value
 * the middle letter for the 3 letter params deal with direction
 * r for Right and l for Left
 * the line for the Red channel can be read as:
 *  Choose a value from the pixel data array using the index from our Red Right
 *    Index function
 *  Calcualte a new value from the selected value using the Red Transformation
 *    function
 *  Store the newly calculated value in our pixel data array at the index
 *    indicated by our Red Left Index function
 */
function simpleFilter(pixels, rli, rri, rt, gli, gri, gt, bli, bri, bt, ali, ari, at) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[rli(i)] = rt(pixels.data[rri(i)]); // Red
    pixels.data[gli(i)] = gt(pixels.data[gri(i)]); // Green
    pixels.data[bli(i)] = bt(pixels.data[bri(i)]); // Blue
    pixels.data[ali(i)] = at(pixels.data[ari(i)]); // Alpha
  }
  return pixels;
}

function redEffect(pixels) {
  return simpleFilter(
    pixels,
    redIndex, redIndex, plus(200),
    greenIndex, greenIndex, minus(50),
    blueIndex, blueIndex, multiply(0.5),
    alphaIndex, alphaIndex, me
  );
}
function rgbSplit(pixels) {
  return simpleFilter(
    pixels,
    minus(150), redIndex, me,
    plus(500), greenIndex, me,
    minus(550), blueIndex, me,
    alphaIndex, alphaIndex, me
  );
}
function myFilter(pixels) {
  return simpleFilter(
    pixels,
    redIndex, greenIndex, me,
    greenIndex, blueIndex, me,
    blueIndex, redIndex, me,
    alphaIndex, alphaIndex, me
  );
}
function greenScreen(pixels) {
  const levels = {};

  rgb.querySelectorAll('input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

function handleButtons(event) {
  if (event.target.matches('#TakePhoto')) {
    takePhoto();
  } else if (event.target.matches('#RedEffect')) {
    videoFilter = redEffect;
  } else if (event.target.matches('#SplitEffect')) {
    videoFilter = rgbSplit;
  } else if (event.target.matches('#GreenscreenEffect')) {
    videoFilter = greenScreen;
  } else if (event.target.matches('#ClearEffect')) {
    videoFilter = noFilter;
  } else if (event.target.matches('#MyEffect')) {
    videoFilter = myFilter;
  } // else do nothing
}

getVideo();
video.addEventListener('canplay', paintToCanavas);
booth.addEventListener('click', handleButtons);
