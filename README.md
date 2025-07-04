# React Dashboard - Post Management System

A modern React dashboard application that fetches and displays posts from JSONPlaceholder API with real-time search, pagination, error handling, and interactive post details in a modal.

## 🚀 Features

- **Real-time Search**: Debounced search with clear button
- **Interactive Post List**: Clickable titles with selection and hover states
- **Modal Details View**: View full post details in a popup modal
- **Pagination**: Efficiently handle large datasets with page navigation
- **Loading & Error States**: Smooth loading indicators and user-friendly error messages
- **Consistent Styling**: Unified color scheme, button, and container styles
- **Responsive Design**: Works on desktop and mobile
- **Lazy Loading**: Images are lazy loaded for performance

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **JSONPlaceholder API** - Data source for posts
- **React Hooks** - State management (useState, useEffect)
- **PropTypes** - Runtime prop validation

## 📁 Project Structure

```
src/
├── Component/
│   ├── ListOfUsers.jsx      # Main container component
│   ├── SearchBar.jsx        # Search input component
│   ├── TitleList.jsx        # Post list component (with selection/hover)
│   ├── ProductModal.jsx     # Modal for post details
│   └── ErrorFallback.jsx    # Error UI component
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
3. **Select Post**: Click on any post title to view its details in a modal
4. **Clear Search**: Use the "Clear" button to reset the search
5. **Paginate**: Use Prev/Next to navigate through pages
6. **Error Handling**: Friendly error messages and retry button if data fails to load

## 🔧 Key Components

### SearchBar
- Debounced search input (300ms delay)
- Clear button functionality
- Consistent button styling

### TitleList
- Displays filtered post titles
- Visual selection and hover states
- Loading and error indicators
- Pagination controls
- Scrollable list with fixed height

### ProductModal
- Shows selected post details in a popup
- Consistent styling with the list
- Close button with unified style

### ErrorFallback
- User-friendly error messages
- Retry button with consistent style

## 🎨 UI/UX Features

- **Modern Design**: Clean, minimalist interface
- **Consistent Styling**: Unified color scheme and spacing
- **Visual Feedback**: Hover and selection indicators
- **Loading/Error States**: Smooth loading and error UI
- **Responsive Layout**: Works on all screen sizes
- **Lazy Loading**: Images are lazy loaded for performance

## 🌐 Deployment

This project is deployed on GitHub Pages:
- **Live Demo:** [View Dashboard](https://aanshi-singh.github.io/Dashboard/)

To deploy your own version:
```bash
npm run deploy
```

## 👨‍💻 Author

**Aanshi Singh**
- GitHub: [@Aanshi-Singh](https://github.com/Aanshi-Singh)

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the amazing framework

---

⭐ If you found this project helpful, please give it a star!
