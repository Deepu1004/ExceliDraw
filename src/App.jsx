import { useState, useCallback, useEffect } from "react";
import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import Header from "./components/Header";
import Notifications from "./components/Notifications";
import useStore from "./store";

function App() {
  const [editor, setEditor] = useState(null);
  const addDrawing = useStore((state) => state.addDrawing);
  const saveDrawing = useStore((state) => state.saveDrawing);
  const currentDrawing = useStore((state) => state.currentDrawing);
  const settings = useStore((state) => state.settings);
  const addNotification = useStore((state) => state.addNotification);

  const handleMount = useCallback((editor) => {
    setEditor(editor);
  }, []);

  const handleNewDrawing = useCallback(
    (fileName) => {
      const newDrawing = {
        id: Date.now().toString(),
        name: fileName,
        createdAt: new Date(),
        updatedAt: new Date(),
        snapshot: null,
      };
      addDrawing(newDrawing);
    },
    [addDrawing],
  );

  const handleSave = useCallback(async () => {
    if (editor && currentDrawing) {
      const snapshot = editor.store.getSnapshot();
      saveDrawing(currentDrawing.id, snapshot);
    }
  }, [editor, currentDrawing, saveDrawing]);

  const handleShare = useCallback(() => {
    if (settings.collaborationEnabled) {
      setIsShareDialogOpen(true);
    } else {
      addNotification({
        id: Date.now(),
        message: "Please enable collaboration in settings first",
        type: "error",
      });
    }
  }, [settings.collaborationEnabled, addNotification]);

  // Auto-save feature
  useEffect(() => {
    if (settings.autoSave) {
      const interval = setInterval(handleSave, 30000);
      return () => clearInterval(interval);
    }
  }, [settings.autoSave, handleSave]);

  return (
    <div
      className={`w-screen h-screen ${
        settings.darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header
        onNewDrawing={handleNewDrawing}
        onSave={handleSave}
        onShare={handleShare}
      />
      <Notifications />
      <div className="w-full h-full pt-16">
        <Tldraw
          onMount={handleMount}
          snapshot={currentDrawing?.snapshot}
          showGrid={settings.showGrid}
          darkMode={settings.darkMode}
          className={`border-t ${
            settings.darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        />
      </div>
    </div>
  );
}

export default App;
