import React from 'react';
import { storesContext } from './stores-context';

export const useStoresHook = () => React.useContext(storesContext);