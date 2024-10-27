import PropTypes from "prop-types";
import profileUser from "../../assets/images/profile-user.png";

const countryFlags = {
  Pakistan: "https://cdn-icons-png.flaticon.com/512/323/323352.png",
  Australia: "https://cdn-icons-png.flaticon.com/256/9906/9906443.png",
  England: "https://cdn-icons-png.flaticon.com/256/197/197485.png",
  "South Africa": "https://cdn-icons-png.flaticon.com/256/197/197562.png",
  "New Zealand": "https://cdn-icons-png.flaticon.com/256/12360/12360728.png",
  Afghanistan: "https://cdn-icons-png.flaticon.com/256/197/197515.png",
  Ireland: "https://cdn-icons-png.flaticon.com/256/323/323380.png",
  Bangladesh: "https://cdn-icons-png.flaticon.com/256/323/323299.png",
  "Sri Lanka": "https://cdn-icons-png.flaticon.com/256/11849/11849334.png",
};

const Player = ({ player, handleSelectPlayerCount }) => {
  const { name, country, role, batting_style, price, image_url, rating } =
    player;

  return (
    <div className="border rounded-lg p-6">
      <div>
        {/* image */}
        <img
          src={image_url}
          alt={name}
          className="md:h-[225px] rounded-lg w-full object-cover mb-6"
        />

        {/* name */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img src={profileUser} />
            <h2 className="text-xl font-semibold text-[#131313]">{name}</h2>
          </div>

          {/* Country & Role */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              {countryFlags[country] ? (
                <img
                  src={countryFlags[country]}
                  alt={`${country} flag`}
                  className="w-6 h-6"
                />
              ) : (
                <i className="fa-solid fa-flag text-gray-400 text-xs me-2"></i>
              )}
              <span className="text-sm text-[#131313]">{country}</span>
            </div>
            <span className="bg-[#1212120d] text-[#131313] px-4 py-2 rounded-lg text-sm">
              {role}
            </span>
          </div>
          <hr />

          {/* rating */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-[#131313]">Rating</span>
            <span className="text-sm text-[#121212b3]">{rating}</span>
          </div>

          {/* batting Style */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-[#131313]">
              Batting Style
            </span>
            <span className="text-sm text-[#121212b3]">{batting_style}</span>
          </div>

          {/* price */}
          <div className="flex items-center justify-between">
            <p className="font-bold text-sm text-[#131313]">
              Price: $<span>{price}</span>
            </p>
            <button
              onClick={() => handleSelectPlayerCount(player)}
              className="border text-sm text-[#131313] px-4 py-2 rounded-lg"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    player_id: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    batting_style: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  handleSelectPlayerCount: PropTypes.func.isRequired,
};

export default Player;
