import './Banner.css'
import bannerMain from '../assets/images/banner-main.png'
import PropTypes from 'prop-types';

const Banner = ({handleClaimCoins}) => {

  return (
    <section className="banner bg-[#131313] rounded-3xl flex flex-col items-center justify-center px-2 py-16 container mx-auto">
      <img src={bannerMain} className="mb-6"></img>
      <div className="text-center">
        <div className="text-white py-6">
          <h1 className="font-bold text-xl md:text-4xl pb-4 leading-10 md:leading-snug">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="font-medium text-sm md:text-2xl text-[#ffffffb3]">
            Beyond Boundaries Beyond Limits
          </p>
        </div>
        <div className="border border-[#E7FE29] p-2 w-[184px] md:w-[202px] mx-auto rounded-lg">
          <button  onClick={handleClaimCoins} className="bg-[#E7FE29] text-sm md:text-base font-bold text-[#131313] px-5 py-3 rounded-lg pointer">
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  handleClaimCoins: PropTypes.func 
}
export default Banner;
