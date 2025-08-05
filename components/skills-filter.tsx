"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Sparkles } from "lucide-react";

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
  {
    value: "all",
    label: "All Levels",
    color: "bg-gray-400",
    description: "Show all skills",
  },
  {
    value: "beginner",
    label: "Beginner",
    color: "bg-green-400",
    description: "Basic understanding",
  },
  {
    value: "intermediate",
    label: "Intermediate",
    color: "bg-yellow-400",
    description: "Practical experience",
  },
  {
    value: "advanced",
    label: "Advanced",
    color: "bg-orange-400",
    description: "Deep expertise",
  },
  {
    value: "expert",
    label: "Expert",
    color: "bg-red-400",
    description: "Master level",
  },
] as const;

export function SkillsFilter({
  selectedProficiency,
  onProficiencyChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: SkillsFilterProps) {
  const hasActiveFilters =
    selectedProficiency !== "all" || selectedCategory !== null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Filter Header */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Filter Skills</h3>
        {hasActiveFilters && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-1"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-xs text-muted-foreground">Active</span>
          </motion.div>
        )}
      </div>

      {/* Main Filter Container */}
      <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
        <div className="space-y-8">
          {/* Proficiency Filter */}
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h4 className="text-base font-semibold text-foreground">
                Proficiency Level
              </h4>
              <p className="text-xs text-muted-foreground">
                Filter by skill level
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {proficiencyOptions.map((option) => {
                const isSelected = selectedProficiency === option.value;
                return (
                  <motion.div
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      onClick={() =>
                        onProficiencyChange(option.value as ProficiencyFilter)
                      }
                      className={`w-full h-12 flex flex-col items-center justify-center gap-2 transition-all duration-200 ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "hover:bg-white/10 hover:border-primary/30"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${option.color} shadow-sm`}
                      />
                      <div className="text-center">
                        <div className="text-xs font-medium">
                          {option.label}
                        </div>
                        <div className="text-[10px] text-muted-foreground opacity-80">
                          {option.description}
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h4 className="text-base font-semibold text-foreground">
                Technology Category
              </h4>
              <p className="text-xs text-muted-foreground">
                Filter by technology type
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(null)}
                  className={`px-6 py-3 transition-all duration-200 ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "hover:bg-white/10 hover:border-primary/30"
                  }`}
                >
                  All Categories
                </Button>
              </motion.div>

              {categories.map((category) => {
                const isSelected = selectedCategory === category.title;
                return (
                  <motion.div
                    key={category.title}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      onClick={() => onCategoryChange(category.title)}
                      className={`px-6 py-3 transition-all duration-200 ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "hover:bg-white/10 hover:border-primary/30"
                      }`}
                    >
                      {category.title}
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      <AnimatePresence>
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Active Filters
                </h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onProficiencyChange("all");
                    onCategoryChange(null);
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground h-7 px-3 transition-colors hover:bg-white/10"
                >
                  <X className="w-3 h-3 mr-1" />
                  Clear All
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProficiency !== "all" && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs px-3 py-1.5 bg-primary/20 border-primary/30 text-primary-foreground flex items-center gap-2"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          proficiencyOptions.find(
                            (opt) => opt.value === selectedProficiency
                          )?.color
                        }`}
                      />
                      {
                        proficiencyOptions.find(
                          (opt) => opt.value === selectedProficiency
                        )?.label
                      }
                    </Badge>
                  </motion.div>
                )}

                {selectedCategory && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs px-3 py-1.5 bg-primary/20 border-primary/30 text-primary-foreground"
                    >
                      {selectedCategory}
                    </Badge>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
