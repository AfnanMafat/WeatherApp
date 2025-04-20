export const Search = ({search,setSearch,handleSearch}) => {
    return (
        <>
          <div className="container" style={{
              display: "flex",
              gap: "10px",
              margin: "20px 0",
              maxWidth: "500px",
              width: "100%"
          }}>
            <input 
              onChange={(event) => setSearch(event.target.value)} 
              className="search" 
              type="text" 
              placeholder="Enter City" 
              name="search" 
              value={search}
              style={{
                  padding: "12px 15px",
                  border: "2px solid #1e3c72",
                  borderRadius: "8px",
                  fontSize: "16px",
                  flexGrow: 1,
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
              }}
            ></input>
    
            <button 
              onClick={handleSearch} 
              className="search_btn"
              style={{
                  padding: "12px 25px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: search ? "#1e3c72" : "#cccccc",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
              }}
              disabled={!search}
            >
              Search Weather
            </button>
          </div>
        </>
      );
};
