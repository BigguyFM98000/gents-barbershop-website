import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DiscountModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenOffer = localStorage.getItem("firstTimeDiscount");

    if (!hasSeenOffer) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem("firstTimeDiscount", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-md text-center">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          aria-label="Close promotion"
        >
          ✕
        </button>

        {/* Promotion */}
        <div className="py-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Welcome to Gent's Barbershop
          </p>

          <h2 className="mt-3 text-4xl font-bold">50% OFF</h2>

          <p className="mt-3 text-lg font-semibold">Your first haircut</p>

          <p className="mt-2 text-base-content/70">
            New client? Enjoy 50% off your first appointment with us.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button onClick={() => navigate("contact")} className="btn btn-primary">
              Book Now
            </button>

            <button onClick={closeModal} className="btn btn-ghost">
              Maybe Later
            </button>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="modal-backdrop" onClick={closeModal}></div>
    </dialog>
  );
}

export default DiscountModal;
