import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pedido realizado com sucesso!");
    setOrderPopup(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-500 ease-in-out"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="shadow-2xl bg-black text-white rounded-2xl w-[90%] max-w-[480px] p-8 relative overflow-hidden transition-transform duration-500 ease-in-out scale-95 hover:scale-100">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-6">
          <h1 id="popup-title" className="text-2xl font-bold text-white">
            Finalizar Pedido
          </h1>
          <button
            onClick={() => setOrderPopup(false)}
            aria-label="Fechar popup"
            className="text-2xl cursor-pointer hover:text-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
          >
            <IoCloseOutline />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="sr-only">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-lg border border-gray-600 bg-black text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Seu e-mail"
              className="w-full rounded-lg border border-gray-600 bg-black text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          {/* Endereço */}
          <div>
            <label htmlFor="address" className="sr-only">
              Endereço
            </label>
            <input
              id="address"
              type="text"
              placeholder="Seu endereço"
              className="w-full rounded-lg border border-gray-600 bg-black text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          {/* Botão de envio */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white text-black py-3 px-8 rounded-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white hover:bg-gray-300"
              aria-label="Finalizar pedido"
            >
              Finalizar Pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Popup.propTypes = {
  orderPopup: PropTypes.bool.isRequired,
  setOrderPopup: PropTypes.func.isRequired,
};

export default Popup;
