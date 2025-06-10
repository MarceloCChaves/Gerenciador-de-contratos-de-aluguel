import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import EditorPage from './pages/Editor/Editor';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </Router>
  );
}
