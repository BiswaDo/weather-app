function searchBox(){
    return(
        <div className="search-box border">
            <div className="search">
                <form action="">
                    <label For="search">
                        <input type="text" placeholder="place name"/>
                        <button type="submit">go</button>
                    </label>
                </form>
            </div>
            <div className="profile">
                <li></li>
            </div>
        </div>
    )
}

export default searchBox;