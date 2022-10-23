const books = require("./../models/books");
const bookModel = require("./../models/books");

const getBookList = async (req, res) => {
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    
    data.forEach((book) => {
    console.log(book.id);
      books.push({ id: book._id, name: book.name, author: book.author, genre: book.genre });
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log(data)
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};

const deleteBook = async(req, res)=> {
  // console.log(req.body)
  id = req.body.id
  console.log(id)
  // console.log("********************here****************") 
  // console.log(req.params.id)
  books.findByIdAndRemove(id, 
    function(err, user) {

      if (err) throw err;

      console.log("Success");

  });

  res.redirect('/book-list');
}

const getUpdateBook = async(req,res)=> {
  try{
    console.log(req.query)
    const data = await books.findById(req.query.id)
    console.log(data)
    let count
    // data.forEach(book=>{
    //   if(book.id === req.body.id)
    // })
    res.render("updateBook", {prevBook: data})
  }
  catch(error){
    console.log(error)
  }
}

const postUpdateBook = async(req,res)=> {
  try{
    
    filter = req.body.id
    // console.log(filter)
    update = {
      name: req.body.name || books.name,
      author: req.body.author || books.author,
      genre: req.body.genre || books.genre
    }
    
    await books.findByIdAndUpdate(filter, update)
    // console.log(data)
    res.redirect("/book-list")
  }
  catch(error){
    console.log(error)
  }
}


module.exports = { getBookList, getBook, postBook, deleteBook, getUpdateBook, postUpdateBook };
