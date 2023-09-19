const books = [
    {judul: "Harry Potter and the Sorcerer's Stone", penulis: "J.K. Rowling", tahunTerbit: 1997},
    {judul: "To Kill a Mockingbird", penulis: "Harper Lee", tahunTerbit: 1960},
    {judul: "The Great Gatsby", penulis: "F. Scott Fitzgerald", tahunTerbit: 1925},
    {judul: "1984", penulis: "George Orwell", tahunTerbit: 1949},
    {judul: "The Catcher in the Rye", penulis: "J.D. Salinger", tahunTerbit: 1951}
];
books.forEach((buku) => {console.log(buku.penulis)});