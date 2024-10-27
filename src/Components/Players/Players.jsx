import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import { toast } from "react-toastify";

const Players = ({ claimCoins, setClaimCoins }) => {
  const [players, setPlayers] = useState([]);
  const [selectPlayerCount, setSelectPlayerCount] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availableBtn, setavailableBtn] = useState(true);
  const [selectBtn, setSelectBtn] = useState(false);

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleAvailableBtn = () => {
    setavailableBtn(true);
    setSelectBtn(false);
  };

  const handleSelectBtn = () => {
    setSelectBtn(true);
    setavailableBtn(false);
  };

  const handleAddMoreBtn = () => {
    setavailableBtn(true);
    setSelectBtn(false);
  };

  const handleSelectPlayerCount = (player) => {
    const { player_id, price } = player;

    if (
      selectedPlayers.some(
        (selectedPlayers) => selectedPlayers.player_id === player_id
      )
    ) {
      toast.error("Player already selected");
      return;
    }
    if (selectPlayerCount >= 6) {
      toast.error("You can't select more that 6 Players");
      return;
    }
    if (claimCoins < price) {
      toast.error("Insufficient Coins");
      return;
    }
    setClaimCoins(claimCoins - price);
    setSelectPlayerCount(selectPlayerCount + 1);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(`Selected ${player.name} for ${price} coins!`);
  };

  const handleRemovePlayer = (removePlayer) => {
    const newPlayerList = selectedPlayers.filter(
      (player) => player.player_id !== removePlayer.player_id
    );
    setSelectedPlayers(newPlayerList);
    setSelectPlayerCount(selectPlayerCount - 1);
  };

  return (
    <section className="mt-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5">
        <div className="flex flex-col">
          <h3 className={`text-[#131313] text-2xl md:text-3xl font-bold ${availableBtn ? 'block' : 'hidden'}`}>
            Available Players
          </h3>
          <h3 className={`text-[#131313] text-2xl md:text-3xl font-bold ${selectBtn ? 'block' : 'hidden'}`}>
            Selected Players {`(${selectPlayerCount}/6)`}
          </h3>
        </div>
        <div className="inline-flex border border-gray-300 rounded-lg">
          <button onClick={handleAvailableBtn} className={`px-6 py-2 md:px-8 md:py-4 text-[#131313] font-bold text-base outline-none ${availableBtn ? 'bg-[#E7FE29]' : 'bg-none text-[#12121299] font-normal'}`}>
            Available
          </button>

          <button onClick={handleSelectBtn} className={`px-6 py-2 md:px-8 md:py-4 text-[#131313] font-bold text-base outline-none ${selectBtn ? 'bg-[#E7FE29]' : 'bg-none text-[#12121299] font-normal'}`}>
            Selected (<span>{selectPlayerCount}</span>)
          </button>
        </div>
      </div>

      {/* showcasing players */}
      {availableBtn && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {players.map((player) => (
            <Player
              key={player.id}
              player={player}
              handleSelectPlayerCount={() => handleSelectPlayerCount(player)}
            ></Player>
          ))}
        </div>
      )}

      {/* showcasing selected players */}
      {selectBtn && (
        <div className="space-y-6 mt-8">
          {selectedPlayers.map((selectedPlayer) => (
            <SelectedPlayers
              key={selectedPlayer.player_id}
              selectedPlayers={selectedPlayer}
              handleRemovePlayer={handleRemovePlayer}
            ></SelectedPlayers>
          ))}
          <div className="border p-2 rounded-lg w-[194px]">
            <button
              onClick={handleAddMoreBtn}
              className="text-base font-bold text-[#131313] bg-[#E7FE29] px-5 py-3 rounded-lg"
            >
              Add More Player
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

Players.propTypes = {
  claimCoins: PropTypes.number.isRequired,
  setClaimCoins: PropTypes.func.isRequired,
};

export default Players;
