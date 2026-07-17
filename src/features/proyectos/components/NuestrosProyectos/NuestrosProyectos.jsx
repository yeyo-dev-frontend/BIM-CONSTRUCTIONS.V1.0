"use client";

import { useState } from "react";
import styles from "./NuestrosProyectos.module.css";
import { FilterTabs } from "./parts/FilterTabs";
import { ProjectCard } from "./parts/ProjectCard";
import { PROYECTOS_DATA } from "@/shared/statics/proyectosData";

import { Text } from "@/shared/ui/Text/Text";

/**
 * Our Projects Grid section with filtering.
 *
 * @param {Object} props
 * @param {string} props.lang
 * @param {Object} props.dict
 * @returns {JSX.Element}
 */
export function NuestrosProyectos({ lang, dict }) {
  const [filter, setFilter] = useState("todos"); // 'todos', 'ejecucion', 'terminado'

  const filteredProjects = PROYECTOS_DATA.filter((project) => {
    if (filter === "todos") return true;
    return project.status === filter;
  });

  return (
    <section className={styles.section} id="nuestros-proyectos">
      <div className={styles.container}>
        
        <FilterTabs activeFilter={filter} onChange={setFilter} dict={dict.tabs} />

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </div>
        
        {/* Placeholder if no projects match */}
        {filteredProjects.length === 0 && (
          <Text as="p" className={styles.emptyState}>{dict.emptyState}</Text>
        )}
      </div>
    </section>
  );
}
