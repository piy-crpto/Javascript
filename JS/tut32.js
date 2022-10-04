// create a class library and implement following:
// getBookList()
// issueBook(bookname,user)
// returnBook(bookname)
console.log("Welcome to tut 32");

class library
{
       constructor(givenBookList)
       {
           this.bookList = givenBookList;
       }
       getBookList()
       {
           return this.bookList;
       }
       issueBook(bookName,user)
       {
           if(this.bookList.includes(bookName))
           {
               console.log(`The ${bookName} is successfully issue to ${user}`);
           }
           else
           {
               console.log(`Book is not present`);
           }
       }

       returnBook(bookName,user)
       {
             if(this.bookList.includes(bookName))
          {
            console.log(`The ${bookName} is successfully returned from ${user}`);
          }
          else
          {
              console.log(`Please ${user} return Correct Book`);
          }
       }
}
let suraj = new library(["book1","book2","book3"]);
console.log(suraj);
suraj.getBookList();
suraj.issueBook("book1","Piyush");
suraj.returnBook("book2","Piyush");

