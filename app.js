const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const book = [
    {
        title: 'The 48 Laws of Power',
        author: 'Robert Greene',
        year: 1998,
        price: 20
    },
    {
        title: 'The Art of Seduction',
        author: 'Robert Greene',
        year: 2001,
        price: 25
    },
];

const viewBook = () => {
    if (book.length === 0) {
        console.log('Book list is empty!');
    } else {
        console.log('Book list:');
        book.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author} - ${book.year} - ${book.price}$`);
        });
    }
    console.log('------------------------');
    main();
};

const addBook = () => {
    rl.question('Title: ', (title) => {
        rl.question('Author: ', (author) => {
            rl.question('Year: ', (year) => {
                rl.question('Price: ', (price) => {
                    book.push({
                        title,
                        author,
                        year,
                        price
                    });
                    console.log('Add book successfully!');
                    console.log('------------------------');
                    main();
                });
            });
        });
    });
};

const deleteBook = () => {
    rl.question('Book number: ', (number) => {
        book.splice(number - 1, 1);
        console.log('Delete book successfully!');
        console.log('------------------------');
        main();
    });
};

const updateBook = () => {
    rl.question('Book number: ', (number) => {
        rl.question('Title: ', (title) => {
            rl.question('Author: ', (author) => {
                rl.question('Year: ', (year) => {
                    rl.question('Price: ', (price) => {
                        book[number - 1] = {
                            title,
                            author,
                            year,
                            price
                        };
                        console.log('Update book successfully!');
                        console.log('------------------------');
                        main();
                    });
                });
            });
        });
    });
};

const showMenu = () => {
    console.log('1. View book list');
    console.log('2. Add book');
    console.log('3. Update book');
    console.log('4. Delete book');
    console.log('5. Quit');
    console.log('------------------------');
};

const main = () => {
    showMenu();
    rl.question('Please choose an option: ', (option) => {
        switch (option) {
            case '1':
                viewBook();
                break;
            case '2':
                addBook();
                break;
            case '3':
                updateBook();
                break;
            case '4':
                deleteBook();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Wrong option!');
                main();
                break;
        }
    });
};

main();