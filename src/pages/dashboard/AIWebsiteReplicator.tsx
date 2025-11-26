import React, { useState } from 'react';
import { Globe, Sparkles, Check, Loader, Download, Copy, Eye, Edit, FileCode, Image as ImageIcon, Layout, ArrowRight } from 'lucide-react';

export default function AIWebsiteReplicator() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScan = () => {
    setIsScanning(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanned(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const detectedSections = [
    { name: 'Header Navigation', elements: 5, status: 'complete', icon: Layout },
    { name: 'Hero Section', elements: 3, status: 'complete', icon: Layout },
    { name: 'Features Grid', elements: 12, status: 'complete', icon: Layout },
    { name: 'Testimonials', elements: 6, status: 'complete', icon: Layout },
    { name: 'CTA Section', elements: 2, status: 'complete', icon: Layout },
    { name: 'Footer', elements: 8, status: 'complete', icon: Layout },
  ];

  const extractedAssets = {
    images: 24,
    icons: 18,
    fonts: 3,
    colors: 12,
    components: 36
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">AI Website Replicator</h1>
        <p className="text-slate-400">Clone and recreate any website using advanced AI reverse engineering</p>
      </div>

      {/* URL Input */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
        <label className="block text-sm text-slate-400 mb-3">Enter website URL to replicate</label>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://horosoft.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            onClick={handleScan}
            disabled={!url || isScanning}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-green-500/25"
          >
            {isScanning ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Start Replication
              </>
            )}
          </button>
        </div>

        {/* Quick Examples */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-slate-400">Try:</span>
          {['horosoft.com', 'stripe.com', 'linear.app'].map((example) => (
            <button
              key={example}
              onClick={() => setUrl(`https://${example}`)}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-lg transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      {/* Scanning Progress */}
      {isScanning && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-6">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl text-white mb-2">Analyzing website structure...</h3>
            <p className="text-slate-400">AI is extracting components, styles, and content</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Progress Bar */}
            <div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-slate-300">Overall Progress</span>
                <span className="text-green-400">{progress}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Scanning Steps */}
            <div className="space-y-3">
              {[
                { label: 'Fetching page content', progress: 100 },
                { label: 'Extracting HTML structure', progress: 100 },
                { label: 'Analyzing CSS styles', progress: progress > 40 ? 100 : progress * 2.5 },
                { label: 'Detecting components', progress: progress > 60 ? 100 : progress > 40 ? (progress - 40) * 5 : 0 },
                { label: 'Extracting assets', progress: progress > 80 ? (progress - 80) * 5 : 0 },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  {step.progress === 100 ? (
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  ) : step.progress > 0 ? (
                    <Loader className="w-5 h-5 text-green-400 animate-spin flex-shrink-0" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-700 flex-shrink-0"></div>
                  )}
                  <span className={`text-sm ${step.progress > 0 ? 'text-white' : 'text-slate-500'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {scanned && !isScanning && (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Detected Structure */}
          <div className="lg:col-span-2 space-y-6">
            {/* Success Message */}
            <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-2">Website successfully analyzed!</h3>
                  <p className="text-green-300 mb-4">
                    AI has extracted {detectedSections.length} sections, {extractedAssets.components} components, and {extractedAssets.images} images
                  </p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm rounded-lg transition-colors flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors flex items-center gap-2">
                      <Edit className="w-4 h-4" />
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Detected Sections */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl text-white mb-4">Detected Page Structure</h2>
              <div className="space-y-3">
                {detectedSections.map((section, i) => (
                  <div key={i} className="p-4 bg-slate-950 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                          <section.icon className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-white">{section.name}</h3>
                          <p className="text-sm text-slate-400">{section.elements} elements detected</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-400" />
                        <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                          <Edit className="w-4 h-4 text-slate-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <h2 className="text-xl text-white">Reconstructed Preview</h2>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-slate-800 text-white text-sm rounded-lg">Desktop</button>
                  <button className="px-3 py-1 bg-slate-950 text-slate-400 text-sm rounded-lg">Mobile</button>
                </div>
              </div>
              <div className="p-6 bg-slate-950">
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                  {/* Mini browser chrome */}
                  <div className="h-8 bg-slate-200 flex items-center px-4 gap-2 border-b border-slate-300">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-2 py-0.5 text-[10px] text-slate-500">
                      {url || 'https://horosoft.com'}
                    </div>
                  </div>
                  
                  {/* Mock website preview */}
                  <div className="p-8 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
                      <div className="flex gap-3">
                        <div className="h-8 w-16 bg-slate-200 rounded"></div>
                        <div className="h-8 w-16 bg-slate-200 rounded"></div>
                        <div className="h-8 w-16 bg-blue-500 rounded"></div>
                      </div>
                    </div>

                    {/* Hero */}
                    <div className="text-center py-12">
                      <div className="h-12 w-3/4 bg-slate-800 rounded mx-auto mb-4"></div>
                      <div className="h-6 w-1/2 bg-slate-300 rounded mx-auto mb-6"></div>
                      <div className="flex justify-center gap-3">
                        <div className="h-10 w-32 bg-blue-500 rounded"></div>
                        <div className="h-10 w-32 bg-slate-200 rounded"></div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-lg">
                          <div className="h-10 w-10 bg-blue-200 rounded mb-3"></div>
                          <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                          <div className="h-3 w-3/4 bg-slate-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Assets & Actions */}
          <div className="space-y-6">
            {/* Extracted Assets */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl text-white mb-4">Extracted Assets</h2>
              <div className="space-y-4">
                {[
                  { label: 'Images', count: extractedAssets.images, icon: ImageIcon, color: 'blue' },
                  { label: 'Icons', count: extractedAssets.icons, icon: Sparkles, color: 'purple' },
                  { label: 'Components', count: extractedAssets.components, icon: Layout, color: 'green' },
                  { label: 'Color Palette', count: extractedAssets.colors, icon: Layout, color: 'orange' },
                  { label: 'Fonts', count: extractedAssets.fonts, icon: FileCode, color: 'pink' },
                ].map((asset, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-950 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 bg-${asset.color}-500/10 rounded-lg flex items-center justify-center`}>
                        <asset.icon className={`w-4 h-4 text-${asset.color}-400`} />
                      </div>
                      <span className="text-sm text-slate-300">{asset.label}</span>
                    </div>
                    <span className="text-sm text-white">{asset.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-white mb-4">Extracted Colors</h2>
              <div className="grid grid-cols-4 gap-2">
                {['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#6366F1', '#14B8A6'].map((color, i) => (
                  <div key={i} className="space-y-1">
                    <div className="h-12 rounded-lg border border-slate-700" style={{ backgroundColor: color }}></div>
                    <div className="text-[10px] text-slate-400 text-center">{color}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-white mb-4">Export Options</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg flex items-center justify-center gap-2 transition-all">
                  <Download className="w-4 h-4" />
                  Download as Template
                </button>
                <button className="w-full px-4 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Copy className="w-4 h-4" />
                  Copy All Code
                </button>
                <button className="w-full px-4 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <FileCode className="w-4 h-4" />
                  Export ZIP
                </button>
                <button className="w-full px-4 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit with AI
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Cost Info */}
            <div className="bg-gradient-to-br from-green-600/20 to-green-500/20 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-white mb-2">Credits Used</h3>
              <div className="text-3xl text-white mb-1">150</div>
              <p className="text-sm text-slate-400">AI credits for this replication</p>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isScanning && !scanned && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl text-white mb-4">Ready to clone any website</h3>
          <p className="text-slate-400 max-w-md mx-auto mb-6">
            Enter any website URL above and our AI will analyze its structure, extract components, styles, and recreate it for you in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Extract all sections
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Preserve styling
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Get clean code
            </div>
          </div>
        </div>
      )}
    </div>
  );
}