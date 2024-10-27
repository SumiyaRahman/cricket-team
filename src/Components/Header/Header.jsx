import logo from '../../assets/images/logo.png'
import coin from '../../assets/images/dollar.png'
import PropTypes from 'prop-types';

const Header = ({claimCoins}) => {
    return (
        <nav className="pt-12 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                    <img src={logo}/>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-end mt-8 md:mt-0">
                    <ul className="flex justify-center items-center gap-5 md:gap-12 text-sm md:text-base text-[#121212b3]">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedule</li>
                    </ul>
                    <div className="ps-5 md:ps-12 mt-5 md:mt-0 flex items-center gap-2">
                        <button className="flex gap-2 text-[#131313] text-sm md:text-base font-semibold rounded-lg">
                            <span>{claimCoins}</span>
                            <h2>Coin</h2>
                        </button>
                        <div>
                            <img src={coin}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {
    claimCoins: PropTypes.number.isRequired,
};
export default Header;