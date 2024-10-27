import PropTypes from "prop-types";

const SelectedPlayers = ({ selectedPlayers, handleRemovePlayer }) => {
  console.log(selectedPlayers);

  const { name, batting_style, image_url, role, price } = selectedPlayers;

  return (
    <section>
      <div className="flex items-center justify-between border rounded-lg p-6">
        <div>
          <div className="flex items-center gap-6">
            <img
              src={image_url}
              alt={name}
              className="rounded-lg object-cover w-20 h-20"
            />
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[#131313]">{name}</h2>
              <div className="space-y-2">
                <p className="text-xs text-[#121212b3]">{batting_style}</p>
                <p>
                  <span className="bg-[#E7FE29] text-xs text-[#131313] px-3 py-1 rounded font-semibold">
                    {role}
                  </span>
                </p>
                <p className="font-bold text-xs text-[#131313]">Price: $<span>{price}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => handleRemovePlayer(selectedPlayers)}>
            <i className="fa-regular fa-trash-can text-2xl text-[#F14749]"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.shape({
    name: PropTypes.string.isRequired,
    batting_style: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleAddMoreBtn: PropTypes.func,
  handleRemovePlayer: PropTypes.func
};

export default SelectedPlayers;
