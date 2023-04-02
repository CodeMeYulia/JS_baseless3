

// const element = document.querySelector('span'){
//     element.textContent = 'мальчик';
// };

let catGender = document.querySelectorAll('.gender');
console.log(catGender);
console.log(catGender[0].textContent);
catGender[0].textContent = 'мальчик';

// cards[0].querySelector('.newInfo').innerHTML = `<p>Порода:бенгальская</p>
// <p>Вес: 9 кг</p>
// <p>Имя владельца: Виталий</p>
// <p>Город: Барнаул</p>`;

const cards = document.querySelectorAll('.card');
console.log(cards);
const stepa = cards[0].querySelector('.newInfo');
console.log(stepa);
const stesha = cards[1].querySelector('.newInfo');
console.log(stesha);
const timofei = cards[2].querySelector('.newInfo');
console.log(timofei);

const inHtml = (where, type, weight, owner, city) => {
where.innerHTML = `<p>Порода:${type}</p>
                   <p>Вес: ${weight}</p>
                   <p>Имя владельца: ${owner}</p>
                   <p>Город: ${city}</p>`;
};
inHtml (stepa, 'бенгальская', '9кг', 'Виталий', 'Барнаул');
inHtml (stesha, 'британская', '11кг', 'Лариса', 'Чита');
inHtml (timofei, 'сибирская', '10кг', 'Владислав', 'Омск');
