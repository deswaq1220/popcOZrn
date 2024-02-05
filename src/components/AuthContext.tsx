import React, { createContext } from "react";
import { User } from "firebase/auth";

export const AutoContext = React.createContext<User | null>(null);
