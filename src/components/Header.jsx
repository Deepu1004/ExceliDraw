import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FiFile, FiSave, FiFolder, FiSettings } from "react-icons/fi";
import useStore from "../store";
import NewFileDialog from "./NewFileDialog";
import SettingsDialog from "./SettingsDialog";

function Header({ onNewDrawing, onSave }) {
  const [isNewFileDialogOpen, setIsNewFileDialogOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const drawings = useStore((state) => state.drawings);
  const currentDrawing = useStore((state) => state.currentDrawing);
  const setCurrentDrawing = useStore((state) => state.setCurrentDrawing);
  const addNotification = useStore((state) => state.addNotification);
  const settings = useStore((state) => state.settings);

  const handleCreateFile = (fileName) => {
    onNewDrawing(fileName);
    addNotification({
      id: Date.now(),
      message: `Created new file: ${fileName}`,
      type: "success",
    });
  };

  const handleSave = () => {
    onSave();
    addNotification({
      id: Date.now(),
      message: "Drawing saved successfully",
      type: "success",
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 ${
        settings.darkMode ? "dark" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">ExceliDraw</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsNewFileDialogOpen(true)}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FiFile className="mr-2" />
                New
              </button>
              <button
                onClick={handleSave}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FiSave className="mr-2" />
                Save
              </button>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <FiFolder className="mr-2" />
                  Open
                </Menu.Button>
                <Menu.Items className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {drawings.map((drawing) => (
                      <Menu.Item key={drawing.id}>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              setCurrentDrawing(drawing);
                              addNotification({
                                id: Date.now(),
                                message: `Opened: ${drawing.name}`,
                                type: "info",
                              });
                            }}
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                          >
                            {drawing.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {currentDrawing && (
              <span className="text-sm text-gray-500">
                Last saved:{" "}
                {new Date(currentDrawing.updatedAt).toLocaleString()}
              </span>
            )}
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <FiSettings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <NewFileDialog
        isOpen={isNewFileDialogOpen}
        onClose={() => setIsNewFileDialogOpen(false)}
        onCreateFile={handleCreateFile}
      />
      <SettingsDialog
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}

export default Header;
