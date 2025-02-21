import { create } from 'zustand'

const useStore = create((set, get) => ({
  drawings: [],
  currentDrawing: null,
  collaborators: [],
  notifications: [],
  settings: {
    showGrid: true,
    darkMode: false,
    autoSave: true,
    collaborationEnabled: true
  },
  addDrawing: (drawing) => set((state) => ({ 
    drawings: [...state.drawings, drawing],
    currentDrawing: drawing
  })),
  setCurrentDrawing: (drawing) => set({ currentDrawing: drawing }),
  saveDrawing: (id, snapshot) => set((state) => ({
    drawings: state.drawings.map(d => 
      d.id === id ? { ...d, snapshot, updatedAt: new Date() } : d
    )
  })),
  updateDrawingName: (id, name) => set((state) => ({
    drawings: state.drawings.map(d => 
      d.id === id ? { ...d, name } : d
    )
  })),
  addCollaborator: (collaborator) => set((state) => ({
    collaborators: [...state.collaborators, collaborator]
  })),
  removeCollaborator: (id) => set((state) => ({
    collaborators: state.collaborators.filter(c => c.id !== id)
  })),
  addNotification: (notification) => set((state) => ({
    notifications: [notification, ...state.notifications].slice(0, 5)
  })),
  clearNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),
  updateSettings: (settings) => set((state) => ({
    settings: { ...state.settings, ...settings }
  }))
}))

export default useStore