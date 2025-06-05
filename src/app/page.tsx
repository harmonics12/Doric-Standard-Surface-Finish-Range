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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="w-[200px] sm:w-[300px] h-[60px] sm:h-[90px] flex-shrink-0">
              <Image
                src="/images/doric-logo.svg"
                alt="Doric Logo"
                width={300}
                height={90}
                className="w-full h-full"
                priority
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl">
                Standard Surface Finish Range
              </h1>
              <p className="max-w-3xl text-slate-200 text-base sm:text-lg">
                Premium architectural finishes engineered for superior durability and exceptional aesthetics. Trusted by leading window fabricators and installers across Australia since 1972.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        {paintFinishes.map((group, index) => (
          <div key={group.name} className="mb-16 color-group">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                {index + 1}. {group.name}
              </h2>
              <p className="text-slate-600">{group.description}</p>
            </div>

            {/* Color Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {group.finishes.map((finish) => (
                <Card
                  key={finish.code}
                  className="group/item relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden w-full max-w-md"
                >
                  <div className="flex flex-col">
                    {/* Color Swatch */}
                    <div 
                      className="w-full h-48 relative overflow-hidden"
                      style={{ backgroundColor: finish.color }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-sm font-mono text-black/70 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center justify-between">
                          <span className="text-black/50">Order Code:</span> 
                          <span className="font-semibold">{finish.code}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-medium text-slate-800 leading-tight mb-1">
                            {finish.description}
                          </h3>
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge 
                              variant={finish.sheenLevel.toLowerCase().includes('gloss') ? 'default' : 
                                     finish.sheenLevel.toLowerCase().includes('satin') ? 'secondary' :
                                     finish.sheenLevel.toLowerCase().includes('pearl') ? 'outline' : 
                                     'destructive'} 
                              className="text-xs font-medium"
                            >
                              {finish.sheenLevel}
                            </Badge>
                          </div>
                        </div>

                        {/* Technical Details */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            {finish.duluxMatch && (
                              <p className="text-slate-600">
                                <span className="text-slate-400">Dulux Match:</span> {finish.duluxMatch}
                              </p>
                            )}
                            {finish.colorbondMatch && (
                              <p className="text-slate-600">
                                <span className="text-slate-400">Colorbond:</span> {finish.colorbondMatch}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            {finish.lightReflectanceValue && (
                              <p className="text-slate-600">
                                <span className="text-slate-400">LRV:</span> {finish.lightReflectanceValue}%
                              </p>
                            )}
                          </div>
                        </div>

                        {finish.notes && (
                          <p className="text-slate-600 text-sm mt-4 leading-relaxed border-t border-slate-100 pt-4">
                            {finish.notes}
                          </p>
                        )}
                      </div>
                    </div>
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
