"use client";

import { useState, useMemo, useCallback, memo } from "react";
import { skillIcons, uiIcons } from "@/lib/icon-utils";
import { skillCategories } from "@/lib/skills-data";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";
import { SkillsFilter, ProficiencyFilter } from "./skills-filter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  motion,
  staggerContainer,
  staggerItem,
  hoverScale,
} from "@/lib/motion-utils";

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

  const categories = useMemo(
    () =>
      skillCategories.map(({ title, icon }) => ({
        title,
        icon,
      })),
    []
  );

  return (
    <SectionWrapper id="skills">
      <SectionTitle>
        My Tech <span className="text-primary">Stack</span>
      </SectionTitle>

      {/* Skills Filter */}
      <div className="mb-6">
        <SkillsFilter
          selectedProficiency={selectedProficiency}
          onProficiencyChange={setSelectedProficiency}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Badge variant="outline" className="px-3 py-1 text-xs">
            {totalSkills} skills displayed
          </Badge>
          <Badge variant="outline" className="px-3 py-1 text-xs">
            {filteredCategories.length} categories
          </Badge>
        </div>
      </motion.div>

      <TooltipProvider>
        <div className="space-y-8">
          {filteredCategories.map((category) => {
            const CategoryIcon =
              skillIcons[category.icon as keyof typeof skillIcons] ||
              skillIcons.code; // Fallback to Code icon

            return (
              <motion.div
                key={category.title}
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <CategoryIcon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground max-w-xl mx-auto text-xs">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {category.skills.length} skill
                      {category.skills.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                {/* Responsive Grid Layout */}
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                  variants={staggerContainer}
                >
                  {category.skills.map((skill) => {
                    const IconComponent =
                      skillIcons[skill.icon as keyof typeof skillIcons] ||
                      skillIcons.code; // Fallback to Code icon
                    const isSelected = selectedSkill === skill.name;

                    return (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <motion.div
                            className={`group relative flex flex-col items-center justify-center p-3 bg-white/5 border rounded-lg backdrop-blur-md shadow-sm cursor-pointer transition-all duration-300 ${
                              skill.isHighlighted
                                ? "border-primary/50 bg-primary/5"
                                : "border-white/10"
                            } ${
                              isSelected
                                ? "border-primary bg-primary/10 scale-105"
                                : "hover:border-primary/30 hover:bg-primary/5"
                            }`}
                            variants={staggerItem}
                            whileHover={hoverScale}
                            onClick={() => handleSkillSelect(skill.name)}
                          >
                            {/* Highlighted indicator */}
                            {skill.isHighlighted && (
                              <div className="absolute -top-1 -right-1">
                                <uiIcons.star className="w-3 h-3 text-primary fill-primary" />
                              </div>
                            )}

                            {/* Icon */}
                            <div className="mb-2 group-hover:scale-110 transition-transform duration-200">
                              <IconComponent
                                className="w-8 h-8"
                                style={{ color: skill.color }}
                              />
                            </div>

                            {/* Skill name */}
                            <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-primary transition-colors mb-1">
                              {skill.name}
                            </span>

                            {/* Proficiency indicator */}
                            <div className="flex items-center gap-1">
                              <div
                                className={`w-1.5 h-1.5 rounded-full ${
                                  proficiencyColors[skill.proficiency]
                                }`}
                              />
                              <span className="text-[10px] text-muted-foreground">
                                {proficiencyLabels[skill.proficiency]}
                              </span>
                            </div>

                            {/* Years of experience */}
                            {skill.yearsOfExperience && (
                              <span className="text-[10px] text-muted-foreground mt-1">
                                {skill.yearsOfExperience}+ years
                              </span>
                            )}

                            {/* Info icon for description */}
                            {skill.description && (
                              <div className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <uiIcons.info className="w-2.5 h-2.5 text-muted-foreground" />
                              </div>
                            )}
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
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
                                className={proficiencyColors[skill.proficiency]}
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
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </TooltipProvider>

      {/* No results message */}
      {filteredCategories.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <p className="text-muted-foreground text-base">
            No skills match the selected filters.
          </p>
          <Button
            variant="outline"
            onClick={handleClearFilters}
            className="mt-3"
          >
            Clear All Filters
          </Button>
        </motion.div>
      )}
    </SectionWrapper>
  );
});
