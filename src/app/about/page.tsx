"use client";

import { Pizza, Calculator, Clock, Thermometer, Droplets, Users } from "lucide-react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StepList from "../components/StepList";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-2 py-8 max-w-4xl">
        {/* Header */}
        <Header currentPage="about" />

        {/* Main Content */}
        <div className="space-y-8">
          {/* What is this app */}
          <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Pizza Dough Calculator?</h2>
            <p className="text-gray-700 leading-relaxed">
              Pizza Dough Calculator is a precision tool designed for pizza enthusiasts, home bakers, and professional pizzaiolos. 
              It helps you calculate the perfect proportions for your pizza dough based on scientific principles of bread making, 
              taking into account factors like temperature, hydration, yeast type, and fermentation time.
            </p>
          </section>

          {/* Features */}
          <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Customisable Portions</h3>
                  <p className="text-gray-600 text-sm">Calculate dough for any number of pizzas, from 1 to 20+ balls</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Droplets className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Hydration Control</h3>
                  <p className="text-gray-600 text-sm">Adjust hydration levels from 55% to 75% for different dough styles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Thermometer className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Temperature Optimization</h3>
                  <p className="text-gray-600 text-sm">Account for room temperature to adjust yeast quantities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Fermentation Planning</h3>
                  <p className="text-gray-600 text-sm">Plan your fermentation schedule with precise timing</p>
                </div>
              </div>
            </div>
          </section>

          {/* How to use */}
          <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
            <StepList
              steps={[
                {
                  number: 1,
                  title: "Set Your Parameters",
                  description: "Choose the number of pizza balls, hydration level, yeast type, and room temperature"
                },
                {
                  number: 2,
                  title: "Plan Fermentation",
                  description: "Use the fermentation calculator to determine optimal rise times based on your conditions"
                },
                {
                  number: 3,
                  title: "Follow the Recipe",
                  description: "Get precise measurements and step-by-step instructions for mixing, kneading, and shaping"
                }
              ]}
            />
          </section>

          {/* Technical Details */}
          <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Details</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Yeast Types Supported:</strong> Active Dry Yeast (ADY), Instant Dry Yeast (IDY) and Compressed Yeast (CY).
              </p>
              <p>
                <strong>Temperature Range:</strong> 10°C to 30°C (50°F to 86°F)
              </p>
              <p>
                <strong>Hydration Range:</strong> 55% to 75% (water to flour ratio)
              </p>
              <p>
                <strong>Fermentation Times:</strong> 4 to 72 hours depending on temperature and yeast type
              </p>
            </div>
          </section>

          {/* About the Developer */}
          <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The calculations are based on established bread-making science and pizza dough formulas used by professional 
              pizzaiolos worldwide. Whether you're making your first pizza or perfecting your technique, this tool will 
              help you achieve consistent, delicious results every time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
            This pizza dough calculator was built with modern web technologies including Next.js, React, and TypeScript. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              This tool was created by{" "}
              <a 
                href="https://www.jamesridgway.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium underline"
              >
                James Ridgway
              </a>
              , a software engineer passionate about quality-focused and maintainable software. You can find more of his work, 
              projects, and experiments on his{" "}
              <a 
                href="https://www.jamesridgway.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium underline"
              >
                website
              </a>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
} 