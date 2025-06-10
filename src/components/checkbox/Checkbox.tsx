import type ICheckbox from "../../interfaces/ICheckbox";

const Checkbox = ({label, tipoGarantia, setTipoGarantia }: ICheckbox) => {
  return (
    <div className="space-y-2 mb-4">
      <div className="flex items-center hover:bg-slate-100 dark:hover:bg-slate-700 py-3" key={tipoGarantia}>
        <input
          id={label}
          type="checkbox"
          checked={tipoGarantia === label}
          onChange={() => setTipoGarantia(tipoGarantia === label ? "" : label)}
          className="w-4 h-4 mr-2 rounded focus:ring-2 focus:ring-blue-500 transition"
        />
        <label htmlFor={label} className="text-white text-xl capitalize cursor-pointer">{label}</label>
      </div>
    </div>
  );
}

export default Checkbox;