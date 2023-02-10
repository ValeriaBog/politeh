// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)
// Note: The function accepts an integer and returns an integer.

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }

  squareDigits(3212);

//--------------------------------------------------------------------------------------------//
  
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
disemvowel("This website is for losers LOL!")

//-----------------------------------------------------//


// Дезоксирибонуклеиновая кислота (ДНК) представляет собой химическое вещество, находящееся в ядре клеток и несущее «инструкции» по развитию и функционированию живых организмов.

// Если вы хотите узнать больше: http://en.wikipedia.org/wiki/DNA

// В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». Ваша функция получает одну сторону ДНК (строка, кроме Haskell); вам нужно вернуть другую дополнительную сторону. Нить ДНК никогда не бывает пустой или ДНК вообще не существует (опять же, кроме Haskell).

// Другие подобные упражнения можно найти здесь: http://rosalind.info/problems/list-view/ (источник)


function DNAStrand(dna){
  var table = {
    C : 'G',
    G : 'C',
    A : 'T',
    T : 'A'
  };
    
  return dna.split('').map(function(cv) {
    return table[cv]; 
  }).join('');
}
DNAStrand("ATTGC")

//----------------------------------------------------------------------------//
// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива минимум из 4 положительных целых чисел. Не будут переданы числа с плавающей запятой или неположительные целые числа.

// Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.

function sumTwoSmallestNumbers(numbers){
const arr = numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);
console.log(arr)
}
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])