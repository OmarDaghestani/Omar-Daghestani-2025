"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Sparkles, Search } from "lucide-react";

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
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: Array<{ title: string; icon: string }>;
}

const proficiencyOptions = [
  { value: "all", label: "All", color: "bg-gray-400" },
  { value: "beginner", label: "Beginner", color: "bg-green-400" },
  { value: "intermediate", label: "Intermediate", color: "bg-yellow-400" },
  { value: "advanced", label: "Advanced", color: "bg-orange-400" },
  { value: "expert", label: "Expert", color: "bg-red-400" },
] as const;

export function SkillsFilter({
  selectedProficiency,
  onProficiencyChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  categories,
}: SkillsFilterProps) {
  const hasActiveFilters =
    selectedProficiency !== "all" ||
    selectedCategory !== null ||
    searchQuery.trim() !== "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Enhanced Filter Header */}
      <div className="flex items-center justify-center gap-2">
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

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search skills (e.g., React, TypeScript, Docker)..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 h-10 bg-white/5 border-white/20 focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
        />
      </div>

      {/* Enhanced Filter Container */}
      <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm shadow-lg">
        <div className="space-y-4">
          {/* Proficiency Filter */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground text-center">
              Proficiency Level
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
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
                      className={`px-3 py-2 h-9 text-sm transition-all duration-200 ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "hover:bg-white/10 hover:border-primary/30"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${option.color} mr-2`}
                      />
                      {option.label}
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground text-center">
              Technology Category
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(null)}
                  className={`px-4 py-2 h-9 text-sm transition-all duration-200 ${
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
                      className={`px-4 py-2 h-9 text-sm transition-all duration-200 ${
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

      {/* Enhanced Active Filters Display */}
      <AnimatePresence>
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Active Filters
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  onProficiencyChange("all");
                  onCategoryChange(null);
                  onSearchChange("");
                }}
                className="text-sm text-muted-foreground hover:text-foreground h-7 px-3 transition-colors hover:bg-white/10"
              >
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {searchQuery.trim() !== "" && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-primary/20 border-primary/30 text-primary-foreground flex items-center gap-2"
                  >
                    <Search className="w-3 h-3" />
                    &quot;{searchQuery}&quot;
                  </Badge>
                </motion.div>
              )}

              {selectedProficiency !== "all" && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-primary/20 border-primary/30 text-primary-foreground flex items-center gap-2"
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
                  transition={{ delay: 0.3 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-primary/20 border-primary/30 text-primary-foreground"
                  >
                    {selectedCategory}
                  </Badge>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
