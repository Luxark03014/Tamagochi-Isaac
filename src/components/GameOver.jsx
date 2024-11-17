

export const GameOver = ({ onClose, canRevive  }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
    <div className="bg-black rounded-lg shadow-lg p-6 w-80">
      <h1 className="text-2xl  text-white font-bold text-center mb-4">Has Muerto</h1>
      {canRevive ? (
        <p className="text-center text-gray-400">
          Quieres utilizar tu 1UP para revivir?
          <button
            onClick={() => onClose(true)}
            className="block mx-auto mt-4 bg-red-950 text-white px-4 py-2 rounded-lg"
          >
            Revivir
          </button>
        </p>
      ) : (
        <p className="text-gray-400 text-center">No tienes objetos para revivir</p>
      )}
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        className="block mx-auto mt-4 bg-red-950 text-white px-4 py-2 rounded-lg"
      >
        Volver a jugar
      </button>
    </div>
  </div>
  );
}