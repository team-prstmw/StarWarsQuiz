/**
 * @jest-environment jsdom
 */

import changeGameMode from '../src/utils/changeGameMode';

test('it should change text of header and description to the given one in the changeGameMode func', () => {
  document.body.innerHTML = '<h2 class="main__header">Hello</h2><p class="main__description">Description</p>';

  changeGameMode('test', 'testDescription');

  expect(document.querySelector('.main__header').innerHTML).toBe('MODE: test');
  expect(document.querySelector('.main__description').innerHTML).toBe(
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select testDescription'
  );
});
