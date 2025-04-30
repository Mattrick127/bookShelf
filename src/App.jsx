import BooksPage from './views/BooksPage.jsx';
import SingleBookPage from './views/SingleBookPage.jsx';
import AddBookPage from './views/AddBookPage.jsx';

function App() {

  const isAddBook = false;

  return (
    <>
      {isAddBook ? <AddBookPage /> : <BooksPage />}
        
    </>
  )
}

export default App
