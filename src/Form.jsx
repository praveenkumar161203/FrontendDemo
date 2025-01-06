//import './Form1.css';

function Form() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <h1 className="title">Slam Book !! Memories !!</h1>
                    <img
                        src="https://img.freepik.com/free-vector/people-spending-time-together-youth-day-event_23-2148582580.jpg?w=826&t=st=1690034406~exp=1690035006~hmac=111d4ca514d16c1781aa9763c9c6eee27192ebd5019e1cd64d5983021081814f"
                        alt="Friends illustration"
                        className="illustration"
                    />
                    <p className="subtitle">Fill out My Slam Book Friends... :)</p>
                </div>

                <form>
                    <div className="form-group">
                        <label htmlFor="fullName" className="required">Full Name</label>
                        <input type="text" id="fullName" placeholder="First Name / Last Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="iCallYou" className="required">I call you as</label>
                        <input type="text" id="iCallYou" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="friendsCall" className="required">Friends call you as</label>
                        <input type="text" id="friendsCall" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="youCallMe" className="required">You like to call me as</label>
                        <input type="text" id="youCallMe" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="birthDate" className="required">Birth Date</label>
                        <input type="date" id="birthDate" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="school" className="required">School</label>
                        <input type="text" id="school" placeholder="Your school name" required />
                    </div>

                    <div className="form-group">
                        <label className="required">Gender</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="gender" value="male" required />
                                Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="female" required />
                                Female
                            </label>
                            <label>
                                <input type="radio" name="gender" value="other" required />
                                Other
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Favorite Heroes</label>
                        <div className="checkbox-group">
                            <label>
                                <input type="checkbox" name="heroes" value="superman" />
                                Superman
                            </label>
                            <label>
                                <input type="checkbox" name="heroes" value="batman" />
                                Batman
                            </label>
                            <label>
                                <input type="checkbox" name="heroes" value="spiderman" />
                                Spiderman
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="memories" className="required">Sweet Memories</label>
                        <textarea
                            id="memories"
                            placeholder="Share your favorite memories..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;
