import Goods from '../classes/Goods.js';

test('Добавление продукта в список', () => {
  const goods = new Goods();
  goods.addGood('Huawei', 20000);
  const received = goods.arrayOfGoods[0].name;
  const expected = 'Huawei';
  expect(received).toBe(expected);
});
