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
  { value: "all", label: "All Levels", color: "bg-gray-500" },
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
      className="space-y-6"
    >
      {/* Main Filter Section */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
        <div className="space-y-6">
          {/* Proficiency Filter */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground text-center">
              Filter by Proficiency Level
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
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
                  className="text-sm px-4 py-2 h-9 transition-all duration-200 hover:scale-105"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${option.color} mr-2`}
                  />
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Category Filter */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground text-center">
              Filter by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(null)}
                className="text-sm px-4 py-2 h-9 transition-all duration-200 hover:scale-105"
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.title}
                  variant={
                    selectedCategory === category.title ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => onCategoryChange(category.title)}
                  className="text-sm px-4 py-2 h-9 transition-all duration-200 hover:scale-105"
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedProficiency !== "all" || selectedCategory !== null) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
        >
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground text-center">
              Active Filters
            </h3>
            <div className="flex justify-center gap-3 flex-wrap">
              {selectedProficiency !== "all" && (
                <Badge
                  variant="secondary"
                  className="text-sm px-3 py-1 bg-primary/20 border-primary/30 text-primary-foreground"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      proficiencyOptions.find(
                        (opt) => opt.value === selectedProficiency
                      )?.color
                    } mr-2`}
                  />
                  {
                    proficiencyOptions.find(
                      (opt) => opt.value === selectedProficiency
                    )?.label
                  }
                </Badge>
              )}
              {selectedCategory && (
                <Badge
                  variant="secondary"
                  className="text-sm px-3 py-1 bg-primary/20 border-primary/30 text-primary-foreground"
                >
                  {selectedCategory}
                </Badge>
              )}
            </div>
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  // Clear both filters in a single click handler
                  onProficiencyChange("all");
                  onCategoryChange(null);
                }}
                className="text-sm text-muted-foreground hover:text-foreground h-8 px-4 transition-colors hover:bg-white/10"
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
