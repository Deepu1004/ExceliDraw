# ExceliDraw

**ExceliDraw** is an online drawing tool designed for users who want to create and save drawings. With collaborative features, dark mode, auto-save, and more, ExceliDraw provides a flexible environment for both personal and collaborative creative work.

---

## Features

- **New Drawing Creation:** Start a new drawing with a custom file name.
- **Save Drawing:** Save your work at any time.
- **Open Existing Drawings:** Access and open previously saved drawings.
- **Auto-Save:** Enable auto-save to save your progress every 30 seconds.
- **Collaboration:** Real-time collaboration with peers, enabling shared editing.
- **Grid Display:** Toggle grid visibility while drawing.
- **Dark Mode:** Switch between dark and light mode for a better visual experience.
- **Notifications:** Get notified about events like new files created or drawings saved.

---

## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

---

## Technologies

This project uses the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Headless UI**: For accessible UI components (Dialog, Menu, Switch).
- **Tailwind CSS**: For styling the components.
- **React Icons**: For icons used throughout the app.
- **TLDraw**: For the core drawing functionalities.
- **React Hot Toast**: For displaying notifications.

---

## Setup

To run the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/excelidraw.git
```

### 2. Install Dependencies

Navigate to the project folder and install dependencies using npm or yarn:

```bash
cd excelidraw
npm install
```

or

```bash
cd excelidraw
yarn install
```

### 3. Start the Development Server

Once dependencies are installed, you can run the app locally:

```bash
npm start
```

or

```bash
yarn start
```

The app should now be running on `http://localhost:5173`.

---

## Usage

Once the app is running, you can:

1. **Create a New Drawing:** Click on the **New** button in the header, provide a file name, and start drawing.
2. **Save Your Drawing:** Click on the **Save** button to save your drawing at any point.
3. **Open Existing Drawings:** Use the **Open** menu to open and work with any previously saved drawings.
4. **Enable Auto-Save:** In the **Settings** dialog, enable auto-save to save your work automatically every 30 seconds.
5. **Switch Between Light and Dark Modes:** Toggle between modes in the **Settings** dialog.
6. **Enable Collaboration:** Enable the collaboration feature to work in real-time with other users.
7. **Notifications:** Notifications will pop up when new files are created or saved, along with any errors or success messages.

---

## Application Structure

- **`App.jsx`**: The main component that renders the entire application.
- **`Header.jsx`**: The header component containing buttons for creating new files, saving, opening, and accessing settings.
- **`NewFileDialog.jsx`**: A dialog component for creating a new drawing with a given name.
- **`SettingsDialog.jsx`**: A settings dialog for toggling features like grid, dark mode, and collaboration.
- **`Notification.jsx`**: A notification component for displaying real-time messages.
- **`store.js`**: The global state management using Zustand for managing drawings, settings, and notifications.
- **`peer.js`**: The peer-to-peer connection for enabling collaboration between users.

---

## Features in Detail

### 1. **New File Creation**

- Users can create a new file by entering a file name.
- The **New File** dialog allows users to name their new drawing.

### 2. **Saving Drawings**

- Users can save the current drawing by clicking on the **Save** button.
- Drawing progress is stored locally and can be accessed later.

### 3. **Opening Existing Files**

- The **Open** button in the header provides a dropdown menu where users can select a drawing from their saved files.

### 4. **Collaboration**

- When enabled, users can collaborate in real-time on the same drawing.
- Changes made by one user are reflected in real-time on the other user's canvas.

### 5. **Auto-Save**

- Auto-save can be enabled in the **Settings** dialog to save drawings automatically every 30 seconds.

### 6. **Grid Display**

- A grid can be shown or hidden by toggling the **Show Grid** option in the settings.

### 7. **Dark Mode**

- Users can toggle between light and dark mode via the **Settings** dialog.

---

## Contributing

Contributions are welcome! If you find any issues or would like to improve the application, feel free to:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries or feedback, please contact:

- **Email**: example@domain.com
- **GitHub**: [@your-username](https://github.com/your-username)

---

Enjoy using **ExceliDraw** and happy drawing! 🎨