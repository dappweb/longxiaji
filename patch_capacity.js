const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const capacitySection = 
      {/* Factory / Capacity Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">中国智造 · 产能保障</h2>
            <p className="text-lg text-slate-600">
              强大的供应链体系，全自动化生产线，保障产品高品质按时交付。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 group relative">
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
               <img src="/box/5050e13500344491bce2018ece160efd.png" alt="生产线" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 group relative">
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
               <img src="/box/68baeb0b3f00e118a4a061246585731d.jpg" alt="工厂质检" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */};

code = code.replace(/\{\/\* Footer \*\/\}/, capacitySection);

fs.writeFileSync('src/App.tsx', code);
