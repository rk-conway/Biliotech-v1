

const newTestamentBooks = [
    {
      name: "Matthew",
      chapters: 28,
      verses: {
        1: 25, 2: 23, 3: 17, 4: 25, 5: 48, 6: 34, 7: 29, 8: 34, 9: 38, 10: 42,
        11: 30, 12: 50, 13: 58, 14: 36, 15: 39, 16: 28, 17: 27, 18: 35, 19: 30,
        20: 34, 21: 46, 22: 46, 23: 39, 24: 51, 25: 46, 26: 75, 27: 66, 28: 20,
      },
    },
    {
      name: "Mark",
      chapters: 16,
      verses: {
        1: 45, 2: 28, 3: 35, 4: 41, 5: 43, 6: 56, 7: 37, 8: 38, 9: 50, 10: 52,
        11: 33, 12: 44, 13: 37, 14: 72, 15: 47, 16: 20,
      },
    },
    {
      name: "Luke",
      chapters: 24,
      verses: {
        1: 80, 2: 52, 3: 38, 4: 44, 5: 39, 6: 49, 7: 50, 8: 56, 9: 62, 10: 42,
        11: 54, 12: 59, 13: 35, 14: 35, 15: 32, 16: 31, 17: 37, 18: 43, 19: 48,
        20: 47, 21: 38, 22: 71, 23: 56, 24: 53,
      },
    },
    {
      name: "John",
      chapters: 21,
      verses: {
        1: 51, 2: 25, 3: 36, 4: 54, 5: 47, 6: 71, 7: 53, 8: 59, 9: 41, 10: 42,
        11: 57, 12: 50, 13: 38, 14: 31, 15: 27, 16: 33, 17: 26, 18: 40, 19: 42,
        20: 31, 21: 25,
      },
    },
    {
      name: "Acts",
      chapters: 28,
      verses: {
        1: 26, 2: 47, 3: 26, 4: 37, 5: 42, 6: 15, 7: 60, 8: 40, 9: 43, 10: 48,
        11: 30, 12: 25, 13: 52, 14: 28, 15: 41, 16: 40, 17: 34, 18: 28, 19: 41,
        20: 38, 21: 40, 22: 30, 23: 35, 24: 27, 25: 27, 26: 32, 27: 44, 28: 31,
      },
    },
    {
      name: "Romans",
      chapters: 16,
      verses: {
        1: 32, 2: 29, 3: 31, 4: 25, 5: 21, 6: 23, 7: 25, 8: 39, 9: 33, 10: 21,
        11: 36, 12: 21, 13: 14, 14: 23, 15: 33, 16: 27,
      },
    },
    {
      name: "1 Corinthians",
      chapters: 16,
      verses: {
        1: 31, 2: 16, 3: 23, 4: 21, 5: 13, 6: 20, 7: 40, 8: 13, 9: 27, 10: 33,
        11: 34, 12: 31, 13: 13, 14: 40, 15: 58, 16: 24,
      },
    },
    {
      name: "2 Corinthians",
      chapters: 13,
      verses: {
        1: 24, 2: 17, 3: 18, 4: 18, 5: 21, 6: 18, 7: 16, 8: 24, 9: 15, 10: 18,
        11: 33, 12: 21, 13: 14,
      },
    },
    {
      name: "Galatians",
      chapters: 6,
      verses: {
        1: 24, 2: 21, 3: 29, 4: 31, 5: 26, 6: 18,
      },
    },
    {
      name: "Ephesians",
      chapters: 6,
      verses: {
        1: 23, 2: 22, 3: 21, 4: 32, 5: 33, 6: 24,
      },
    },
    {
      name: "Philippians",
      chapters: 4,
      verses: {
        1: 30, 2: 30, 3: 21, 4: 23,
      },
    },
    {
      name: "Colossians",
      chapters: 4,
      verses: {
        1: 29, 2: 23, 3: 25, 4: 18,
      },
    },
    {
      name: "1 Thessalonians",
      chapters: 5,
      verses: {
        1: 10, 2: 16, 3: 13, 4: 18, 5: 28,
      },
    },
    {
      name: "2 Thessalonians",
      chapters: 3,
      verses: {
        1: 12, 2: 17, 3: 18,
      },
    },
    {
      name: "1 Timothy",
      chapters: 6,
      verses: {
        1: 20, 2: 15, 3: 16, 4: 16, 5: 25, 6: 21,
      },
    },
    {
      name: "2 Timothy",
      chapters: 4,
      verses: {
        1: 18, 2: 26, 3: 17, 4: 22,
      },
    },
    {
      name: "Titus",
      chapters: 3,
      verses: {
        1: 16, 2: 15, 3: 15,
      },
    }
];


function getRandom(){

    let setBook = newTestamentBooks[Math.floor(Math.random()*newTestamentBooks.length)];
    let book = setBook.name;
    let chapterVerse = Object.keys(setBook.verses);
    let chapter = chapterVerse[Math.floor(Math.random()*chapterVerse.length)];
    let verse = Math.floor(Math.random()*setBook.verses.chapter);
    
    // console.log("This is the number of verses: ",setBook.verses);

    // console.log("book",book,"chapter",chapter,"verse",verse);
    return {book:book,chapter:chapter,verse:1};
}

getRandom();