import type { IToggleSection } from "../../interfaces/IToggleSection";

export default function SectionToggle({ icon ,label, show, setShow, children }: IToggleSection) {
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="flex items-center py-2 mt-2 mb-1 w-full rounded text-sm text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
      >
        <span className="text-lg">{icon}</span>
        <span className="mx-2">{label}</span>
      </button>
      {show && <div className="space-y-2">{children}</div>}
    </div>
  );
}