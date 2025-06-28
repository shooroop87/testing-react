import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './styles.css';
import './fonts/fonts.css';
import {App} from "./components/app/app";
import {Provider} from "react-redux";
import {store} from "./services/store";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
  </StrictMode>
);