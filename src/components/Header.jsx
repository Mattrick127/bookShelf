

function Header({pageTitle}) {

    return (
      <>

            <h1>{pageTitle}</h1>

            <div className="header-btns">
                
                    <button className="btn">
                        Books
                    </button>

                    <a href="/add-book">
                      <button className="btn">
                          Add Book +
                      </button>
                    </a>
               
            </div>
    
      </>
    )
  }
  
  export default Header
  