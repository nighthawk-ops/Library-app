//Library (Should be a database)
const motoLibrary = [];

// const titleInput = document.querySelector("#title");
// const subjectInput = document.getElementById("#subject");
// const gradeInput = document.getElementById("#grade");
// const comfirmBtn = document.querySelector("dailog button")
const closeBtn = document.getElementById("cancel")
//dialog and and form fields
const addbook = document.getElementById("addBook");
const form = document.querySelector("form");
const bkDailog = document.getElementById("bkDialog");

//Book constructor
function Book (title, subject, grade){
    if (!new.target){
        throw Error ("You must use the 'new' operator to call this function");
    }
    
    this.title = title;
    this.subject = subject;
    this.grade = grade;
    this.info = function() {
        return this.id+", "+this.title+","+this.subject+","+this.grade+".";
    };
}

//Open the dailog box
addbook.addEventListener("click", () => {
    bkDailog.showModal();
});

//function to add books to library
function addBookToLibrary (book){
    book.id = crypto.randomUUID();
    motoLibrary.push(book);
}




//form submit listener 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fd = new FormData(form);
    let obj = Object.fromEntries(fd);
    Object.setPrototypeOf(obj, Book.prototype);
    addBookToLibrary(obj);
    displayBook(obj)
    // motoLibrary.forEach(displayBook);
    console.log(motoLibrary);
    e.target.reset(); 

    //close dialog
    bkDailog.close();
})

//close dialog
closeBtn.addEventListener('click', ()=>{
    bkDailog.close();
    form.reset();
})


//display each book on a card.

function displayBook (book) {
    let card = document.createElement("div");
    card.className = "card";
    card.dataset.id = book.id;    

    let title = document.createElement("h2");
    title.textContent = book.title;
    card.appendChild(title);

    let subject = document.createElement("p")
    subject.textContent = book.subject;
    card.appendChild(subject);

    let grade = document.createElement("p");
    grade.textContent = book.grade;
    card.appendChild(grade);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    card.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
        // Get the ID directly from the parent card's data-id
        const bookIdToRemove = card.dataset.id; 
        const elementToRemove = document.querySelector(`[data-id="${bookIdToRemove}"]`);

        if (elementToRemove) { // Check if the element was found
            document.getElementById("library").removeChild(elementToRemove);
            //Remove from library array
            const index = motoLibrary.findIndex((book) => book.id === bookIdToRemove);
            motoLibrary.splice(index, 1);
            console.log(motoLibrary);
        } else {
            console.warn(`Could not find element with data-id="${bookIdToRemove}" to remove.`);
        }    
    })

    document.getElementById("library").append(card);
}


const P1scheme = new Book ("P1scheme", "English", "P.1");
const P1workbook = new Book ("P1workbook", "English", "P.1");
addBookToLibrary(P1scheme);
addBookToLibrary(P1workbook);

motoLibrary.forEach(displayBook);




