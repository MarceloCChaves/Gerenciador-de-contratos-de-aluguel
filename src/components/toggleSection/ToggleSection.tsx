import type { IToggleSection } from "../../interfaces/IToggleSection";

export default function SectionToggle({ label, show, setShow, children }: IToggleSection) {
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="mt-2 mb-1 text-left w-full text-sm text-blue-400 hover:underline"
      >
        {show ? 'Ocultar' : 'Mostrar'} {label}
      </button>
      {show && <div className="space-y-2">{children}</div>}
    </div>
  );
}