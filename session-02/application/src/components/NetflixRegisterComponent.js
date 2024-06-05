export function NetflixRegisterComponent(){
    return(

        // mt-3 is margin top 2
        // container-fluid is a full width container
        // text-center is text alignment center
        // bg-dark is background color dark
        // p-3 is padding 3
        // text-white is text color white
        <div>
            <p />Ready to watch? Enter your email address

            {/* input-group is a bootstrap class that groups an input field and a button */}
            <div className="input-group">
                {/* form-control is a bootstrap class that styles an input field */}
                <input type="email" className="form-control" />
                {/* btn is a bootstrap class that styles a button */}
                <button className="btn btn-danger">
                    Get Started
                    {/* bi is a bootstrap class that adds icons. Here it adds a right chevron icon */}
                <span className="bi bi-chevron-right"></span>
                </button>       
            </div>
        </div>
    );
}