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
import Single from "./components/single/Single";
import Work from "./components/work/Work";
import NotFoundPage from "./components/NotFoundPage";
import OurTeam from "./components/our-team/OurTeam";
import Assets from "./components/assetsPage/Assets";
import Editor from "./components/editor/Editor";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
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
        </Provider>
  </React.StrictMode>
);

reportWebVitals();
