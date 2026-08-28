"use client";

import React, { useState, useMemo } from "react";
import { SearchBar } from "@/src/components/other/searchbar";
import { Filters } from "@/src/components/other/filter";
import { ServicesGrid } from "@/src/components/other/servicesgrid";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 12;

interface Service {
  id: string;
  name: string;
  description?: string;
  category: string;
  basePrice: number;
  estimatedTime?: string;
  rating: number;
  includes?: string;
  imageUrl?: string;
  averageRating: number;
  totalOrders: number;
  completedOrders: number;
  approvedReviews: any[];
}

interface ServicesClientProps {
  initialServices: Service[];
}

export default function ServicesClient({ initialServices }: ServicesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredServices = useMemo(() => {
    return (initialServices || []).filter((service) => {
      const matchesCategory =
        selectedCategory === "All Products" ||
        service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRating =
        selectedRating === "All Ratings" ||
        service.rating >= parseFloat(selectedRating);
      const matchesPrice =
        selectedPrice === "All Prices" ||
        (selectedPrice === "Under ₹50" && service.basePrice < 50) ||
        (selectedPrice === "₹50 - ₹100" &&
          service.basePrice >= 50 &&
          service.basePrice <= 100) ||
        (selectedPrice === "Above ₹100" && service.basePrice > 100);

      return matchesCategory && matchesSearch && matchesRating && matchesPrice;
    });
  }, [initialServices, selectedCategory, selectedRating, selectedPrice, searchQuery]);

  // Reset page when filters change
  const totalPages = Math.max(1, Math.ceil(filteredServices.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  // Paginate
  const paginatedServices = filteredServices.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleFilterChange = (setter: (val: string) => void) => (val: string) => {
    setter(val);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (safeCurrentPage > 3) pages.push("...");

      const start = Math.max(2, safeCurrentPage - 1);
      const end = Math.min(totalPages - 1, safeCurrentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (safeCurrentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar Placeholder */}
      <div className="h-16"></div>
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-grey-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={handleSearchChange}
              />
            </div>
            <div className="flex-shrink-0">
              <Filters
                selectedCategory={selectedCategory}
                setSelectedCategory={handleFilterChange(setSelectedCategory)}
                selectedRating={selectedRating}
                setSelectedRating={handleFilterChange(setSelectedRating)}
                selectedPrice={selectedPrice}
                setSelectedPrice={handleFilterChange(setSelectedPrice)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results count */}
        <div className="mb-4 text-sm text-gray-600">
          Showing {paginatedServices.length} of {filteredServices.length} services
          {searchQuery && <span> for &quot;{searchQuery}&quot;</span>}
        </div>

        <ServicesGrid services={paginatedServices} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safeCurrentPage === 1}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) =>
                typeof page === "string" ? (
                  <span key={`dots-${index}`} className="px-2 text-gray-400">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                      safeCurrentPage === page
                        ? "bg-black text-white shadow-sm"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safeCurrentPage === totalPages}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
