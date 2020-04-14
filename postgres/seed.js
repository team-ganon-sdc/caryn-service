let faker = require('faker');
let fs = require('fs');

let writeAppPreviews = fs.createWriteStream('preview.csv');
writeAppPreviews.write('id,description,additionalText,images\n', 'utf8');

function writeTenMillionAppPreviews(appPreview, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let description = faker.lorem.paragraph();

      let additionaltext = 'FEATURES ★ plz send new non silly brain plz! things are way too silly! ★ steady havin what I believe a psychiatrist would call a "mental breakdance" ★ when it comes to my mental brain, im just lookin 4 the right crank to pull (keep pulling the wrong cranks, turns out) ★ not everyday that u get so hilarious brained that u invent the solutions machine';

      let images = ['https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/447/300/300.jpg', 'https://i.picsum.photos/id/446/180/300.jpg',
      'https://i.picsum.photos/id/757/180/300.jpg',
      'https://i.picsum.photos/id/767/300/300.jpg',
      'https://i.picsum.photos/id/334/180/300.jpg',
      'https://i.picsum.photos/id/791/180/300.jpg',
      'https://i.picsum.photos/id/730/180/300.jpg',
      'https://i.picsum.photos/id/731/180/300.jpg', 'https://i.picsum.photos/id/367/180/300.jpg',
      'https://i.picsum.photos/id/366/180/300.jpg',
      'https://i.picsum.photos/id/336/300/300.jpg',
      'https://i.picsum.photos/id/382/180/300.jpg',
      'https://i.picsum.photos/id/182/180/300.jpg'];

      let data = `${id}|${description}|${additionaltext}|${images}\n`;

      if (i === 0) {
        appPreview.write(data, encoding);
      } else {
        ok = appPreview.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      appPreview.once('drain', write);
    }
  }
  write();
}

writeTenMillionAppPreviews(writeAppPreviews, 'utf-8', () => {
  writeAppPreviews.end();
})