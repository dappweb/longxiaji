const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Add useState
code = code.replace(/import { motion }/, "import { useState } from 'react';\nimport { motion }");

// Add state to App component
code = code.replace(/export default function App\(\) \{/, 
  "export default function App() {\n  const [showQR, setShowQR] = useState(false);\n"
);

// Replace button onClick
code = code.replace(/<button className="bg-red-600([^>]+)>(\s*)立即预定/g,
  "<button onClick={() => setShowQR(true)} className=\"bg-red-600>"
);
code = code.replace(/<button className="w-full sm:w-auto bg-red-600([^>]+)>(\s*)抢先预定/g,
  "<button onClick={() => setShowQR(true)} className=\"w-full sm:w-auto bg-red-600>"
);

// Append QR Modal at the bottom before final div
code = code.replace(/<\/div>\n  \);\n\}/, 
  
      {showQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={() => setShowQR(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-sm w-full relative overflow-hidden text-center shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setShowQR(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><CheckCircle2 className="w-6 h-6 rotate-45" /></button>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">扫码联系企业微信</h3>
            <p className="text-slate-500 mb-6 font-medium">获取¥298抢先体验名额</p>
            <div className="bg-slate-50 p-4 rounded-2xl mx-auto inline-block border border-slate-100 shadow-inner mb-6">
              {/* Replace with your actual external QR code image URL if you have one, or a placeholder */}
              <div className="w-48 h-48 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center p-2">
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChatWork" alt="企业微信二维码" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="text-sm text-slate-500">限量 10,000 台 · 抢发进行中</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
);

fs.writeFileSync('src/App.tsx', code);
