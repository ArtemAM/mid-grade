# Задание 6 - реализация map с использованием reduce

Дан файл [task.js](./task.js). Необходимо реализовать функцию `mapWithReduce`, которая будет работать аналогично встроенной функции `Array.prototype.map`, но с использованием функции `reduce`. [Дока по теме](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```js
// ожидаемый результат
[644, 2674, NaN, -42, NaN];
```

### Дополнительное задание

Исправить функцию `doubleIt` так, чтобы она удваивала не только числа, но и строки.

```js
// ожидаемый результат
[644, 2674, "foofoo", -42, "barbar"];
```

### Примечание

Подобная задача на реализацию функции `map`, с помощью `reduce` - очень частая задача на собеседованиях. Помимо `map` могут предложить реализовать и другие функции:

- `filter`
- `find`
- `some`
- `every`
- `groupBy`
- `countBy`
- `indexBy`

И некоторые другие функции массивов. Рекомендую, попробовать реализовать несколько из них, для тренировки.
