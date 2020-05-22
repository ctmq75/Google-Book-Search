
import React from 'react';

class TitleFilter extends React.Component {
  render() {
  return (
    
    <div className="FilterList">
      <form className="searchForm">
          
          <label htmlFor="bar" className="search-label">
          Print Type
              <select>
                  <option>
                      All
                </option>
                <option>
                      Books only
                </option>
                <option>
                      Magazines only
                </option>
              </select>
              </label>
              <label htmlFor="bar" className="search-label">
          Book Type
              <select>
              <option>
                      All books
                </option>
                <option>
                      Free eBooks
              </option>
              <option>
                      Paid eBooks
              </option>
              </select>
              </label>    
           
          </form>
    </div>
  );
  }
}

export default TitleFilter;