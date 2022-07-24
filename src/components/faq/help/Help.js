import SearchIcon from '../../../assets/images/svg-icons/Union.svg'

function Help() {
    return (
        <div className='help'>
            <h1>How can we help?</h1>
            <div className='input-container'>
                <img src={SearchIcon} alt="searchIcon" />
                <input placeholder='Search' />
            </div>
        </div>
    )
}

export default Help;