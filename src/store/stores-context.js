import {FormStore} from './store-form';
import { BackgroundStore } from './store-background';
import React from 'react';

const popupForm = new FormStore();
const pageBackground = new BackgroundStore();
export const storesContext = React.createContext({
  popupForm,
  pageBackground
})