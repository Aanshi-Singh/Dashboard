# React Dashboard - Post Management System

A modern React dashboard application that fetches and displays posts from JSONPlaceholder API with real-time search functionality and interactive post details.

## 🚀 Features

- **Real-time Search**: Debounced search with clear button functionality
- **Interactive Post List**: Clickable titles with visual selection states
- **Dynamic Details Panel**: Shows selected post details or empty state
- **Loading States**: Smooth loading experiences for data fetching and search
- **Responsive Design**: Clean, modern UI with consistent styling
- **Component Architecture**: Modular code structure for maintainability

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **JSONPlaceholder API** - Data source for posts
- **React Hooks** - State management (useState, useEffect)

## 📁 Project Structure

```
src/
├── Component/
│   ├── ListOfUsers.jsx      # Main container component
│   ├── SearchBar.jsx        # Search input component
│   ├── TitleList.jsx        # Post list component
│   └── TitleDescription.jsx # Post details component
├── Dashboard.jsx            # Dashboard wrapper
└── App.js                   # Root component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aanshi-Singh/Dashboard.git
   cd Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 How to Use

1. **View Posts**: The application loads posts automatically from the API
2. **Search Posts**: Use the search bar to filter posts by title
3. **Select Post**: Click on any post title to view its details
4. **Clear Search**: Use the "Clear" button to reset the search

## 🔧 Key Components

### SearchBar
- Debounced search input (300ms delay)
- Clear button functionality
- Responsive design

### TitleList
- Displays filtered post titles
- Visual selection states
- Loading indicators
- Scrollable list with fixed height

### DetailCard
- Shows selected post details
- Empty state when no post is selected
- Consistent styling with the list

## 🎨 UI/UX Features

- **Modern Design**: Clean, minimalist interface
- **Visual Feedback**: Hover states and selection indicators
- **Loading States**: Smooth loading animations
- **Responsive Layout**: Works on different screen sizes
- **Consistent Styling**: Unified color scheme and spacing

## 👨‍💻 Author

**Aanshi Singh**
- GitHub: [@Aanshi-Singh](https://github.com/Aanshi-Singh)

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the amazing framework

---

⭐ If you found this project helpful, please give it a star!
