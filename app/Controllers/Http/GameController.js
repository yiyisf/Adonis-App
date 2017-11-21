'use strict'

class GameController {
  render({request, view}) {
    const guessedNumber = Number(request.input('number'));
    const randomNumber = Math.floor(Math.random() * 20) + 1;

    // if (!guessedNumber) {
    //   return '请输入一个数字在url中，格式为?number=<num>';
    // }
    // return randomNumber === guessedNumber ? '猜中了' : `没猜中，正确值为${randomNumber}`

    return view.render('game', {guessedNumber, randomNumber})
  }
}

module.exports = GameController
