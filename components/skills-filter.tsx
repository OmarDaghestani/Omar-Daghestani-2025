"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export type ProficiencyFilter =
  | "all"
  | "beginner"
  | "intermediate"
  | "advanced"
  | "expert";

interface SkillsFilterProps {
  selectedProficiency: ProficiencyFilter;
  onProficiencyChange: (proficiency: ProficiencyFilter) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  categories: Array<{ title: string; icon: string }>;
}

const proficiencyOptions = [
  { value: "all", label: "All", color: "bg-gray-500" },
  { value: "beginner", label: "Beginner", color: "bg-green-500" },
  { value: "intermediate", label: "Intermediate", color: "bg-yellow-500" },
  { value: "advanced", label: "Advanced", color: "bg-orange-500" },
  { value: "expert", label: "Expert", color: "bg-red-500" },
] as const;

export function SkillsFilter({
  selectedProficiency,
  onProficiencyChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: SkillsFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Compact Filter Layout */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Proficiency Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
            Level:
          </span>
          <div className="flex gap-1">
            {proficiencyOptions.map((option) => (
              <Button
                key={option.value}
                variant={
                  selectedProficiency === option.value ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  onProficiencyChange(option.value as ProficiencyFilter)
                }
                className="text-xs px-2 py-1 h-7"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${option.color} mr-1`}
                />
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
            Category:
          </span>
          <div className="flex gap-1">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(null)}
              className="text-xs px-2 py-1 h-7"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.title}
                variant={
                  selectedCategory === category.title ? "default" : "outline"
                }
                size="sm"
                onClick={() => onCategoryChange(category.title)}
                className="text-xs px-2 py-1 h-7"
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedProficiency !== "all" || selectedCategory !== null) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center gap-2 flex-wrap"
        >
          {selectedProficiency !== "all" && (
            <Badge variant="secondary" className="text-xs">
              {
                proficiencyOptions.find(
                  (opt) => opt.value === selectedProficiency
                )?.label
              }
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="secondary" className="text-xs">
              {selectedCategory}
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onProficiencyChange("all");
              onCategoryChange(null);
            }}
            className="text-xs text-muted-foreground hover:text-foreground h-6 px-2"
          >
            Clear All
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
