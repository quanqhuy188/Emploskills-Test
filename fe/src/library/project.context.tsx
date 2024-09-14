'use client'

import { createContext, useContext, useState } from "react";

interface IProjectContext {
    collapseMenu: boolean;
    setCollapseMenu: (v: boolean) => void;
}

export const ProjectContext = createContext<IProjectContext | null>(null);

export const ProjectContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [collapseMenu, setCollapseMenu] = useState(false);

    return (
        <ProjectContext.Provider value={{ collapseMenu, setCollapseMenu }}>
            {children}
        </ProjectContext.Provider>
    )
};

export const useProjectContext = () => useContext(ProjectContext);