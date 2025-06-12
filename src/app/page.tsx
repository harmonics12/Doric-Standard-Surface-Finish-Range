'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { paintFinishes } from "@/lib/colors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-[#003876] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]" style={{ backgroundSize: '24px 24px' }}></div>
        <div className="relative max-w-6xl mx-auto px-8 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="w-[300px] h-[90px] flex-shrink-0 mx-auto lg:mx-0">
              <Image
                src="/images/doric-logo.svg"
                alt="Doric Logo"
                width={300}
                height={90}
                className="w-full h-full"
                priority
              />
            </div>
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
                Standard Surface Finish Range
              </h1>
              <p className="max-w-3xl text-slate-200 text-base sm:text-lg mx-auto lg:mx-0">
                Premium architectural finishes engineered for superior durability and exceptional aesthetics. Trusted by leading window fabricators and installers across Australia since 1972.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        {paintFinishes.map((group, index) => (
          <div key={group.name} className="mb-12 color-group">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                {index + 1}. {group.name}
              </h2>
              <p className="text-slate-600">{group.description}</p>
            </div>

            {/* Color Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
              {group.finishes.map((finish) => (
                <Card
                  key={finish.code}
                  className="group/item relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden w-full max-w-md h-full flex flex-col p-0"
                >
                  {/* Order Code at the very top of card */}
                  <div className="px-3 pt-2 pb-1 bg-white rounded-t-xl">
                    <div className="text-sm font-mono text-gray-800 flex items-center justify-between">
                      <span className="text-gray-600">Order Code:</span> 
                      <span className="font-semibold">{finish.code}</span>
                    </div>
                  </div>
                  
                  {/* Color Swatch - Clean landscape area */}
                  <div className="w-full h-24 relative overflow-hidden bg-white border-t-0 border border-gray-200">
                    {/* PDF-safe color area - full height */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-full"
                      style={{ 
                        backgroundColor: finish.rgb || finish.color
                      }}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="px-3 py-2 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-base font-medium text-slate-800 leading-tight mb-2">
                          {finish.description}
                        </h3>
                        <div className="flex items-center justify-between mb-1">
                          <Badge 
                            className={`text-xs font-medium border-0 ${
                              finish.sheenLevel.toLowerCase().includes('gloss') ? 'bg-slate-900 hover:bg-slate-800 text-white' : 
                              finish.sheenLevel.toLowerCase().includes('satin') ? 'bg-gray-100 hover:bg-gray-200 text-black border border-gray-300' :
                              finish.sheenLevel.toLowerCase().includes('pearl') ? 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-300' : 
                              finish.sheenLevel.toLowerCase().includes('matt') ? 'bg-red-600 hover:bg-red-700 text-white' :
                              'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                          >
                            {finish.sheenLevel}
                          </Badge>
                          {finish.lightReflectanceValue && (
                            <span className="text-xs text-slate-600">
                              <span className="text-slate-400">LRV:</span> {finish.lightReflectanceValue}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {finish.notes && (
                      <div className="mt-2 pt-2 border-t border-slate-100 flex-1 flex flex-col justify-start">
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                          {finish.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="text-center text-sm text-slate-500">
            <p>© 2025 Doric Products. All rights reserved.</p>
            <p className="mt-2">
              Colors and finishes shown are representative only. Please refer to physical samples for exact color matching.
              Light Reflectance Values (LRV) are measured under controlled conditions and may vary in application.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
