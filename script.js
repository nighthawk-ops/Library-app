// Array storing books
const myLibrary=[];

// Book constructor
// yor = year-of-release
function Book(title, author, pages, yor){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.yor = yor;
    // this.read = function(){
    //     if(read == "yes"){
    //         return "read";
    //     }
    //     else{
    //         return "not read yet";
    //     }
    // };
    // this.info = function(){
    //     return this.title +" by "+ this.author + " , " + this.pages+" pages , "+this.read();
    // };
}

function addBookToLibrary(title, author, pages, yor){
    const book = new Book(title, author, pages, yor);
    book.id = crypto.randomUUID();
   myLibrary.push(book);
}