

export function NetflixHeaderComponent() {
  return (
    <>
    <div className="d-flex justify-content-between m-3 p-3" >
      
      <div>
        <h2 className="text-danger">NETFLIX</h2>
      </div>

      <div className="input-group w-25">
        <select className="form-select">
            <option>Language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
        </select>
        {/* ms-2 means margin start 2 px - have some gap between dropdown and button */}
        <button className="btn btn-danger ms-2">Signin</button>
      </div>

    </div>
    </>
  );
}