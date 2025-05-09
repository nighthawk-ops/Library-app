// Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function(){
        if(read == "yes"){
            return "read";
        }
        else{
            return "not read yet";
        }
    };
    this.info = function(){
        return this.title +" by "+ this.author + " , " + this.pages+" pages , "+this.read();
    };
}

const Hobit = new Book("Hobit", "J.R.R Tolkien", 295, "yes");
console.log(Hobit.title);
console.log(Hobit.author);
console.log(Hobit.pages);
console.log(Hobit.read());
console.log(Hobit.info());
