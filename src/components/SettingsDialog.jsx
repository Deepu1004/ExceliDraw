import { Fragment } from 'react'
import { Dialog, Transition, Switch } from '@headlessui/react'
import useStore from '../store'

export default function SettingsDialog({ isOpen, onClose }) {
  const settings = useStore((state) => state.settings)
  const updateSettings = useStore((state) => state.updateSettings)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  Settings
                </Dialog.Title>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Show Grid</span>
                    <Switch
                      checked={settings.showGrid}
                      onChange={(checked) => updateSettings({ showGrid: checked })}
                      className={`${
                        settings.showGrid ? 'bg-indigo-600' : 'bg-gray-200'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                    >
                      <span className={`${
                        settings.showGrid ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                    </Switch>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Dark Mode</span>
                    <Switch
                      checked={settings.darkMode}
                      onChange={(checked) => updateSettings({ darkMode: checked })}
                      className={`${
                        settings.darkMode ? 'bg-indigo-600' : 'bg-gray-200'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                    >
                      <span className={`${
                        settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                    </Switch>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Auto Save</span>
                    <Switch
                      checked={settings.autoSave}
                      onChange={(checked) => updateSettings({ autoSave: checked })}
                      className={`${
                        settings.autoSave ? 'bg-indigo-600' : 'bg-gray-200'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                    >
                      <span className={`${
                        settings.autoSave ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                    </Switch>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Enable Collaboration</span>
                    <Switch
                      checked={settings.collaborationEnabled}
                      onChange={(checked) => updateSettings({ collaborationEnabled: checked })}
                      className={`${
                        settings.collaborationEnabled ? 'bg-indigo-600' : 'bg-gray-200'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                    >
                      <span className={`${
                        settings.collaborationEnabled ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                    </Switch>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}