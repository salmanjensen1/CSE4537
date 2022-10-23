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
    const data = await books.find({id: req.body.id})
    console.log(data)
    res.render("updateBook", {toUpdate: data[0]})
  }
  catch(error){
    console.log(error)
  }
}

const postUpdateBook = async(req,res)=> {
  try{
    filter = {id: req.body.id}
    update = {
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre
    }
    const data = await books.findOneAndUpdate(filter, update)
    console.log(data)
    res.redirect("/book-list")
  }
  catch(error){
    console.log(error)
  }
}


module.exports = { getBookList, getBook, postBook, deleteBook, getUpdateBook, postUpdateBook };
