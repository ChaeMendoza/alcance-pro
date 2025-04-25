import { FaFolder, FaPlus, FaThLarge } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-64 bg-white border-r shadow-sm">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b">
        <FaThLarge className="text-blue-600 text-3xl mr-2" />
        <span className="text-2xl font-bold text-gray-800 tracking-tight">AlcancePro</span>
      </div>

      {/* Projects Section */}
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            Projects
          </h2>
          <button className="text-gray-400 hover:text-blue-600 transition">
            <FaPlus size={16} />
          </button>
        </div>

        {/* Projects List */}
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition">
            <FaFolder className="text-blue-600" />
            Website Redesign
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <FaFolder className="text-gray-500" />
            Mobile App
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <FaFolder className="text-gray-500" />
            CRM Integration
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <FaFolder className="text-gray-500" />
            E-commerce Platform
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <FaFolder className="text-gray-500" />
            Internal Dashboard
          </button>
        </nav>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 p-5 border-t">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
          JD
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-gray-800">John Doe</p>
          <p className="text-xs text-gray-500">Product Manager</p>
        </div>
      </div>
    </div>
  );
}

