const DataListing = ({ title, image, price, description, handleReset }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price </th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title.slice(0, 30)}</td>
            <td>
              <img src={image} alt={title} />
            </td>
            <td>${price} </td>
            <td>{description.slice(0, 100)} </td>
          </tr>
          <tr>
            <td colSpan="4">
              <button type="button" onClick={handleReset}>
                Show all products
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default DataListing;  