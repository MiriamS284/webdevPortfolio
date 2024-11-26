import PropTypes from "prop-types";

const ConfirmDelete = ({
  resourceName,
  resourceDate,
  onConfirm,
  onCloseModal,
}) => {
  const formattedDate = resourceDate
    ? new Date(resourceDate).toLocaleDateString()
    : "Unbekanntes Datum";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h3 className="text-lg font-bold text-red-900 mb-4">
          Blogpost löschen
        </h3>
        <p className="text-gray-700">
          Möchtest du den Blogpost <strong>{resourceName}</strong> vom{" "}
          <strong>{formattedDate}</strong> wirklich löschen? Diese Aktion kann
          nicht rückgängig gemacht werden.
        </p>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onCloseModal}
          >
            Abbrechen
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onConfirm}
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmDelete.propTypes = {
  resourceName: PropTypes.string.isRequired,
  resourceDate: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmDelete;
