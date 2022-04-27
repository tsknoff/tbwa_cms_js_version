import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Single from "./routes/Single";
import Work from "./routes/Work";
import NotFoundPage from "./routes/NotFoundPage";
import OurTeam from "./routes/OurTeam";
import Assets from "./routes/Assets";
import Editor from "./routes/Editor";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index element={<Single />} />
                  <Route path="single" element={<Single />} />
                  <Route path="work" element={<Work />} />
                  <Route path="our-team" element={<OurTeam />} />
                  <Route path="assets" element={<Assets />} />
                  <Route path="editor" element={<Editor />} />
                  <Route path="*" element={<NotFoundPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
