import { X, MenuIcon } from 'lucide-react';
import type INavbar from '../../interfaces/INavbar';

const Sidebar = ({ sidebarOpen, setSidebarOpen, children }: INavbar) => {
  return (
    <div className={`bg-gray-800 text-white p-4 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="mb-4 bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded cursor-pointer"
      >
        {sidebarOpen ? <X /> : <MenuIcon />}
      </button>
      {sidebarOpen && (
        <nav>
          <ul className="space-y-4">{children}</ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
