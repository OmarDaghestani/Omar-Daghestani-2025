"use client";

import { useState, useMemo, useCallback, memo, useEffect } from "react";
import { skillIcons, uiIcons } from "@/lib/icon-utils";
import { skillCategories } from "@/lib/skills-data";
import { SectionWrapper } from "./section-wrapper";
import { ProficiencyFilter } from "./skills-filter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";

const proficiencyColors = {
  beginner: "text-green-400",
  intermediate: "text-yellow-400",
  advanced: "text-orange-400",
  expert: "text-red-400",
};

const proficiencyLabels = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

export const SkillsSection = memo(function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedProficiency, setSelectedProficiency] =
    useState<ProficiencyFilter>("all");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Memoized event handlers
  const handleSkillSelect = useCallback(
    (skillName: string) => {
      setSelectedSkill(selectedSkill === skillName ? null : skillName);
    },
    [selectedSkill]
  );

  const handleClearFilters = useCallback(() => {
    setSelectedProficiency("all");
    setSelectedCategory(null);
  }, []);

  // Filter skills based on selected criteria
  const filteredCategories = useMemo(() => {
    const result = skillCategories
      .map((category) => {
        const filteredSkills = category.skills.filter((skill) => {
          // Check proficiency filter
          const matchesProficiency =
            selectedProficiency === "all" ||
            skill.proficiency === selectedProficiency;

          // Check category filter
          const matchesCategory =
            selectedCategory === null || category.title === selectedCategory;

          return matchesProficiency && matchesCategory;
        });

        return {
          ...category,
          skills: filteredSkills,
        };
      })
      .filter((category) => category.skills.length > 0)
      .sort((a, b) => a.priority - b.priority);

    return result;
  }, [selectedProficiency, selectedCategory]);

  // Calculate total skills
  const totalSkills = useMemo(() => {
    return filteredCategories.reduce(
      (total, category) => total + category.skills.length,
      0
    );
  }, [filteredCategories]);

  // Debug logging and visible debug info
  useEffect(() => {
    // Log individual values instead of object
    console.log("=== SKILLS SECTION DEBUG ===");
    console.log("Total Categories:", skillCategories.length);
    console.log("Filtered Categories:", filteredCategories.length);
    console.log("Total Skills:", totalSkills);
    console.log("Selected Proficiency:", selectedProficiency);
    console.log("Selected Category:", selectedCategory || "None");
    console.log("Timestamp:", new Date().toLocaleTimeString());
    console.log(
      "Screen Width:",
      typeof window !== "undefined" ? window.innerWidth : "SSR"
    );
    console.log(
      "Screen Height:",
      typeof window !== "undefined" ? window.innerHeight : "SSR"
    );
    console.log(
      "User Agent:",
      typeof window !== "undefined"
        ? window.navigator.userAgent.substring(0, 50) + "..."
        : "SSR"
    );
    console.log("==========================");
  }, [filteredCategories, totalSkills, selectedProficiency, selectedCategory]);

  return (
    <SectionWrapper id="skills">
      {/* Enhanced Debug Information */}
      <div className="bg-red-500 text-white p-4 mb-4 text-center space-y-2">
        <div className="font-bold">🔍 SKILLS SECTION DEBUG</div>
        <div>Total Categories: {skillCategories.length}</div>
        <div>Filtered Categories: {filteredCategories.length}</div>
        <div>Total Skills: {totalSkills}</div>
        <div>Selected Proficiency: {selectedProficiency}</div>
        <div>Selected Category: {selectedCategory || "None"}</div>
        <div className="text-xs mt-2">
          If you see this banner, the section is rendering. If skills don&apos;t
          show below, it&apos;s a styling issue.
        </div>
      </div>

      {/* Debug: Show raw data */}
      <div className="bg-blue-500 text-white p-4 mb-4 text-xs">
        <div className="font-bold">📊 RAW DATA DEBUG</div>
        <div>
          Categories: {JSON.stringify(filteredCategories.map((c) => c.title))}
        </div>
        <div>
          First category skills: {filteredCategories[0]?.skills.length || 0}
        </div>
      </div>

      <div className="space-y-8 min-h-[200px] border-2 border-green-500 p-4">
        {filteredCategories.length > 0 ? (
          <>
            <div className="bg-green-500 text-white p-2 text-center">
              ✅ RENDERING {filteredCategories.length} CATEGORIES
            </div>
            {filteredCategories.map((category) => {
              const CategoryIcon =
                skillIcons[category.icon as keyof typeof skillIcons] ||
                skillIcons.code; // Fallback to Code icon

              return (
                <div
                  key={category.title}
                  className="space-y-4 border border-yellow-500 p-2"
                >
                  {/* Category Header */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <CategoryIcon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground max-w-xl mx-auto text-xs sm:text-sm px-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {category.skills.length} skill
                        {category.skills.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Responsive Grid Layout - Improved for mobile */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 border border-purple-500 p-2">
                    <div className="bg-purple-500 text-white p-1 text-center text-xs">
                      GRID CONTAINER - {category.skills.length} SKILLS
                    </div>
                    {category.skills.map((skill) => {
                      const IconComponent =
                        skillIcons[skill.icon as keyof typeof skillIcons] ||
                        skillIcons.code; // Fallback to Code icon
                      const isSelected = selectedSkill === skill.name;

                      return (
                        <TooltipProvider key={skill.name}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className={`group relative flex flex-col items-center justify-center p-2 sm:p-3 bg-white/5 border rounded-lg backdrop-blur-md shadow-sm cursor-pointer transition-all duration-300 ${
                                  skill.isHighlighted
                                    ? "border-primary/50 bg-primary/5"
                                    : "border-white/10"
                                } ${
                                  isSelected
                                    ? "border-primary bg-primary/10 scale-105"
                                    : "hover:border-primary/30 hover:bg-primary/5"
                                }`}
                                onClick={() => handleSkillSelect(skill.name)}
                              >
                                {/* Highlighted indicator */}
                                {skill.isHighlighted && (
                                  <div className="absolute -top-1 -right-1">
                                    <uiIcons.star className="w-3 h-3 text-primary fill-primary" />
                                  </div>
                                )}

                                {/* Icon */}
                                <div className="mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                    style={{ color: skill.color }}
                                  />
                                </div>

                                {/* Skill name */}
                                <span className="text-[10px] sm:text-xs font-medium text-center text-muted-foreground group-hover:text-primary transition-colors mb-1 leading-tight">
                                  {skill.name}
                                </span>

                                {/* Proficiency indicator */}
                                <div className="flex items-center gap-1">
                                  <div
                                    className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${
                                      proficiencyColors[skill.proficiency]
                                    }`}
                                  />
                                  <span className="text-[8px] sm:text-[10px] text-muted-foreground">
                                    {proficiencyLabels[skill.proficiency]}
                                  </span>
                                </div>

                                {/* Years of experience */}
                                {skill.yearsOfExperience && (
                                  <span className="text-[8px] sm:text-[10px] text-muted-foreground mt-1">
                                    {skill.yearsOfExperience}+ years
                                  </span>
                                )}

                                {/* Info icon for description */}
                                {skill.description && (
                                  <div className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <uiIcons.info className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-muted-foreground" />
                                  </div>
                                )}

                                {/* Mobile description overlay */}
                                {skill.description && (
                                  <div className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden">
                                    <div className="text-center p-2">
                                      <p className="text-[8px] text-white leading-tight">
                                        {skill.description}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              className="max-w-xs z-[9999] hidden sm:block"
                              sideOffset={5}
                            >
                              <div className="space-y-2">
                                <h4 className="font-semibold text-sm">
                                  {skill.name}
                                </h4>
                                {skill.description && (
                                  <p className="text-xs text-muted-foreground">
                                    {skill.description}
                                  </p>
                                )}
                                <div className="flex items-center justify-between text-xs">
                                  <span
                                    className={
                                      proficiencyColors[skill.proficiency]
                                    }
                                  >
                                    {proficiencyLabels[skill.proficiency]}
                                  </span>
                                  {skill.yearsOfExperience && (
                                    <span className="text-muted-foreground">
                                      {skill.yearsOfExperience}+ years
                                    </span>
                                  )}
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="text-center py-8">
            <div className="bg-yellow-500 text-black p-4 mb-4">
              ⚠️ NO CATEGORIES FOUND - This means the filtering is removing all
              categories
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">
              No skills match the selected filters.
            </p>
            <Button
              variant="outline"
              onClick={handleClearFilters}
              className="mt-3"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
});
