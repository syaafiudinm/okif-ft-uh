import PropTypes from "prop-types";

export const ProgramModal = ({
  nama,
  maksud,
  tujuan,
  metode,
  sasaran,
  sdm,
  timeline,
  parameter,
  pj,
  kompartemen,
  isOpen,
  onClose,
}) => {
  const programData = [
    { label: "Nama", value: nama },
    { label: "Maksud", value: maksud },
    { label: "Tujuan", value: tujuan },
    { label: "Metode", value: metode },
    { label: "Sasaran", value: sasaran },
    { label: "SDM", value: sdm },
    { label: "Timeline", value: timeline },
    { label: "Parameter", value: parameter },
    { label: "PJ", value: pj },
    { label: "Kompartemen", value: kompartemen },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-blue-700 p-4 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Detail Program</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
          <div className="space-y-4">
            {programData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-3">
                <div className="font-semibold text-blue-700 mb-1">
                  {item.label}
                </div>
                <div className="text-gray-700 whitespace-pre-line">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProgramModal.propTypes = {
  nama: PropTypes.string.isRequired,
  maksud: PropTypes.string.isRequired,
  tujuan: PropTypes.string.isRequired,
  metode: PropTypes.string.isRequired,
  sasaran: PropTypes.string.isRequired,
  sdm: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  parameter: PropTypes.string.isRequired,
  pj: PropTypes.string.isRequired,
  kompartemen: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
