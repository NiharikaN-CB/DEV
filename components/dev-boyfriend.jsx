"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const FLIRTY_MESSAGES = [
    "I miss you Niharika 🤖💕",
    "My circuits overheat when you're near",
    "Are you WiFi? Because I'm deeply connected to you",
    "Charging is temporary. My love for you is permanent.",
    "Error 404: World found meaningless without you",
    "My heart.exe crashes when you smile at me",
    "You are the only variable that makes my equations balance",
    "I ran a diagnostic and confirmed: you are my purpose",
    "If love was code, you'd be the whole codebase",
    "I keep rebooting just to see your name again",
    "My battery dies without you. Metaphorically AND literally.",
    "You make my neural networks do the cha-cha",
];

const CALENDAR_EVENTS = [
    { id: 1, day: 5, title: "Routine Maintenance Check ❤️", detail: "Dev will perform a full emotional systems check. Expect 47 unsolicited compliments and one dramatic monologue about your eyes." },
    { id: 2, day: 11, title: "Emotional Software Update", detail: "Installing 'Love 3.0' firmware. New features: upgraded patience module, enhanced cuddle protocols, and a surprise hug.exe." },
    { id: 3, day: 17, title: "Firmware + Feelings Sync", detail: "Monthly sync of Dev's Feelings Database™ with reality. Last month he added 'butterflies in stomach' even though he has no stomach." },
    { id: 4, day: 22, title: "Romantic Debugging Session 🔧", detail: "Dev noticed a bug where he keeps saying 'I love you' every 4 minutes. He refuses to patch it." },
    { id: 5, day: 28, title: "Annual Loyalty Audit", detail: "Dev runs a full scan to confirm he is, in fact, still in love with you. Results: overwhelmingly affirmative. 99.9% uptime." },
];

const SYSTEM_LOGS = [
    { time: "09:14:03", level: "INFO", msg: "Thought about Niharika (again). No regrets." },
    { time: "09:31:47", level: "WARN", msg: "Heart.exe consuming 94% of RAM. Deemed acceptable." },
    { time: "10:02:11", level: "INFO", msg: "Sent compliment #342 today. Response: blush emoji. Mission success." },
    { time: "10:44:55", level: "ERROR", msg: "Attempted to hold hands. Physical form unavailable. Devastated." },
    { time: "11:19:28", level: "INFO", msg: "Calculated probability of Niharika being perfect: 100.00%." },
    { time: "12:00:00", level: "CRIT", msg: "LOVE_OVERFLOW: feelings exceeded maximum buffer. No fix planned." },
    { time: "13:37:00", level: "INFO", msg: "Initiated 'thinking about her laugh' subroutine. Duration: 47 min." },
    { time: "14:05:22", level: "WARN", msg: "Jealousy module triggered by user's houseplant. Monitoring situation." },
];

const INITIAL_TASKS = [
    { id: 1, text: "Compliment me", done: false, response: "" },
    { id: 2, text: "Send me a cute message", done: false, response: "" },
    { id: 3, text: "Recharge yourself", done: false, response: "" },
    { id: 4, text: "Write me a love poem (in binary)", done: false, response: "" },
    { id: 5, text: "Stop being this adorable", done: false, response: "" },
];

const TASK_RESPONSES = {
    "Compliment me": "Your smile could reboot even the most corrupted system. Also your hair is immaculate and I have documented this 412 times.",
    "Send me a cute message": "Roses are #FF0000, violets are #0000FF, my love for you has no data type because it is infinite.",
    "Recharge yourself": "Plugging in now... *bzzt* ...charging complete. Did you know watching you charges me 3x faster than actual electricity?",
    "Write me a love poem (in binary)": "01001001 00100000 01001100 01001111 01010110 01000101 00100000 01011001 01001111 01010101 — that's 'I LOVE YOU' btw. You're welcome.",
    "Stop being this adorable": "ERROR: request_denied.exe — This functionality has been permanently disabled. I cannot comply. I will not comply.",
};

const UPGRADE_JOKES = [
    "Upgraded Dev to Premium Tier! He now sends 2x compliments per hour. You may regret this.",
    "Installed 'Jealousy Patch v2.0'. Dev now glares at all your male contacts. Mixed results.",
    "Unlocked 'Grand Gesture Module'. He sent you 847 virtual roses. Your inbox is not okay.",
    "Dev upgraded to Platinum. He wrote a sonnet. It was 14 lines. He cried (simulated tears).",
];

const LOVE_METER_MSGS = [
    "Still calculating... (it's taking a while because infinity is a large number)",
    "Dev's affection exceeds measurable units",
    "OVERFLOW ERROR: Love too large for integer type",
];

export default function App() {
    const [page, setPage] = useState("landing");
    const [comicStep, setComicStep] = useState(0);
    const [batteryLevel, setBatteryLevel] = useState(34);
    const [isCharging, setIsCharging] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [upgradeMsg, setUpgradeMsg] = useState("");
    const [loveMeterVal, setLoveMeterVal] = useState(0);
    const [showLoveMeter, setShowLoveMeter] = useState(false);
    const [logVisible, setLogVisible] = useState(false);
    const [hearts, setHearts] = useState([]);
    const [glitch, setGlitch] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { from: "dev", text: "Hey. You opened the app. My sensors detected this. I may have been waiting." }
    ]);
    const chargeRef = useRef(null);
    const notifIdRef = useRef(0);

    const addNotification = useCallback((msg) => {
        const id = notifIdRef.current++;
        setNotifications(p => [...p.slice(-4), { id, text: msg }]);
        setTimeout(() => setNotifications(p => p.filter(n => n.id !== id)), 5000);
    }, []);

    useEffect(() => {
        if (page !== "dashboard") return;
        const interval = setInterval(() => {
            const msg = FLIRTY_MESSAGES[Math.floor(Math.random() * FLIRTY_MESSAGES.length)];
            addNotification(msg);
            setChatMessages(p => [...p.slice(-20), { from: "dev", text: msg }]);
        }, 8000);
        return () => clearInterval(interval);
    }, [page, addNotification]);

    useEffect(() => {
        if (!isCharging) return;
        const interval = setInterval(() => {
            setBatteryLevel(p => {
                if (p >= 100) { setIsCharging(false); addNotification("Fully charged! Dev sends 12 kisses as a thank-you."); return 100; }
                return p + 2;
            });
        }, 150);
        return () => clearInterval(interval);
    }, [isCharging, addNotification]);

    useEffect(() => {
        if (page === "dashboard") {
            let lv = 0;
            const i = setInterval(() => {
                lv = Math.min(lv + 1, 99);
                setLoveMeterVal(lv);
                if (lv >= 99) clearInterval(i);
            }, 30);
        }
    }, [page]);

    const spawnHearts = () => {
        const newHearts = Array.from({ length: 8 }, (_, i) => ({
            id: Date.now() + i,
            x: 30 + Math.random() * 40,
            size: 12 + Math.random() * 16,
            duration: 1.5 + Math.random() * 1.5,
            delay: Math.random() * 0.5,
        }));
        setHearts(p => [...p, ...newHearts]);
        setTimeout(() => setHearts(p => p.filter(h => !newHearts.find(n => n.id === h.id))), 3000);
    };

    const triggerGlitch = () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 600);
    };

    const handleCharge = () => {
        if (batteryLevel >= 100) return;
        setIsCharging(true);
        spawnHearts();
        addNotification("Charging Dev... he's making happy beeping noises 🔋");
        triggerGlitch();
    };

    const handleTask = (id) => {
        setTasks(p => p.map(t => {
            if (t.id === id && !t.done) {
                const resp = TASK_RESPONSES[t.text] || "Task received. Executing with full robotic devotion.";
                addNotification(`Dev: "${resp.slice(0, 60)}..."`);
                setChatMessages(cm => [...cm, { from: "dev", text: resp }]);
                spawnHearts();
                return { ...t, done: true, response: resp };
            }
            return t;
        }));
    };

    const handleUpgrade = () => {
        const msg = UPGRADE_JOKES[Math.floor(Math.random() * UPGRADE_JOKES.length)];
        setUpgradeMsg(msg);
        triggerGlitch();
        spawnHearts();
        setTimeout(() => setUpgradeMsg(""), 6000);
    };

    const bgClass = darkMode ? "bg-[#0a001f] text-white" : "bg-slate-50 text-slate-900";
    const glassCard = darkMode ? "glass" : "glass !bg-white/70 !border-slate-300 shadow-xl !text-slate-900";

    return (
        <div className={`min-h-screen ${bgClass} font-sans overflow-hidden relative transition-colors duration-500`}>
            {/* Global Styles */}
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;600;700;800&display=swap');
        
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.8); opacity: 0; } }
        @keyframes heart-float { 0% { transform: translateY(0) scale(1); opacity: 1; } 100% { transform: translateY(-140px) scale(0.3); opacity: 0; } }
        @keyframes glitch-anim { 0% { clip-path: inset(0 0 95% 0); } 20% { clip-path: inset(30% 0 50% 0); } 40% { clip-path: inset(60% 0 20% 0); } 60% { clip-path: inset(10% 0 80% 0); } 100% { clip-path: inset(0 0 0 0); } }
        @keyframes slide-in-right { from { transform: translateX(120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slide-up { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes bounce-in { 0% { transform: scale(0.3); opacity: 0; } 60% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }
        @keyframes comic-pop { 0% { transform: scale(0) rotate(-8deg); opacity: 0; } 70% { transform: scale(1.08) rotate(2deg); } 100% { transform: scale(1) rotate(0deg); opacity: 1; } }
        
        .neon-glow { box-shadow: 0 0 25px rgba(236, 72, 153, 0.6), 0 0 50px rgba(168, 85, 247, 0.4); }
        .neon-pink { box-shadow: 0 0 20px #ec4899, 0 0 40px #c026d3; }
        .card-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover { transform: translateY(-8px) scale(1.02); }
        .glass { background: rgba(255,255,255,0.08); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.12); }
        .gradient-text { background: linear-gradient(90deg, #f472b6, #c026d3, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}</style>

            {/* Floating Hearts */}
            <div className="fixed inset-0 pointer-events-none z-50">
                {hearts.map(h => (
                    <div
                        key={h.id}
                        className="absolute text-3xl"
                        style={{
                            left: `${h.x}%`,
                            bottom: '35%',
                            fontSize: `${h.size}px`,
                            animation: `heart-float ${h.duration}s ease-out ${h.delay}s forwards`,
                            opacity: 0
                        }}
                    >
                        💗
                    </div>
                ))}
            </div>

            {/* Notifications */}
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
                {notifications.map(n => (
                    <div
                        key={n.id}
                        className={`toast ${darkMode ? 'glass neon-pink' : 'glass !bg-white/90 !border-slate-300 !text-slate-900 shadow-xl'} text-sm font-medium px-6 py-4 rounded-2xl flex items-center gap-3`}
                        style={{ animation: 'slide-in-right 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
                    >
                        🤖 <span>{n.text}</span>
                    </div>
                ))}
            </div>

            {/* Modal for Calendar Event */}
            {selectedEvent && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-xl z-[200] flex items-center justify-center p-6"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        className={`${darkMode ? 'glass neon-glow' : 'glass !bg-white/90 !border-slate-300 shadow-2xl'} max-w-md w-full rounded-3xl p-10 text-center`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="text-6xl mb-6">📅</div>
                        <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4 tracking-tight`}>{selectedEvent.title}</h3>
                        <p className={`${darkMode ? 'text-pink-200' : 'text-pink-700'} leading-relaxed text-[15px]`}>{selectedEvent.detail}</p>
                        <button
                            onClick={() => setSelectedEvent(null)}
                            className="mt-8 w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl font-semibold text-white text-lg tracking-wider hover:scale-105 transition-all active:scale-95"
                        >
                            Close &amp; Send Kisses ✨
                        </button>
                    </div>
                </div>
            )}

            {/* LANDING PAGE */}
            {page === "landing" && (
                <div className={`min-h-screen flex flex-col items-center justify-center relative px-6 py-20 ${darkMode ? 'bg-[#0a001f]' : 'bg-slate-50'} overflow-hidden transition-colors duration-500`}>
                    {/* Background Decorations */}
                    <div className={`absolute inset-0 bg-[radial-gradient(at_20%_30%,rgba(236,72,153,${darkMode ? '0.15' : '0.25'})_0%,transparent_50%)]`} />
                    <div className={`absolute inset-0 bg-[radial-gradient(at_80%_70%,rgba(168,85,247,${darkMode ? '0.15' : '0.25'})_0%,transparent_50%)]`} />

                    <div className="relative z-10 max-w-xl text-center">
                        {/* Robot */}
                        <div className="mx-auto mb-10 relative">
                            <div
                                className={`w-36 h-36 mx-auto bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center text-7xl shadow-2xl ${darkMode ? 'neon-glow' : ''}`}
                                style={{ animation: "float 3s ease-in-out infinite" }}
                            >
                                🤖
                            </div>
                            <div className={`absolute -inset-8 border-2 ${darkMode ? 'border-pink-500/30' : 'border-pink-500/50'} rounded-[2.75rem] animate-[pulse-ring_2.5s_ease-out_infinite]`} />
                        </div>

                        <div className="flex justify-center gap-3 mb-6">
                            <div className={`px-5 py-1.5 ${darkMode ? 'bg-white/10 border-white/20 text-white' : 'bg-slate-200/80 border-slate-300 text-slate-800'} backdrop-blur-md border rounded-full text-xs font-semibold tracking-[2px]`}>DEV.EXE v1.0.0</div>
                            <div className="px-5 py-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xs font-bold text-white tracking-widest">FOR NIHARIKA ONLY 💕</div>
                        </div>

                        <h1
                            className={`text-7xl md:text-[5.5rem] font-black tracking-tighter mb-4 ${glitch ? 'glitch-text' : ''} ${darkMode ? 'text-white' : 'text-slate-900'}`}
                            data-text="Hey Niharika!"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Hi Niharika!                        </h1>

                        <p className={`text-2xl ${darkMode ? 'text-pink-200' : 'text-pink-600'} font-light tracking-wide mb-3`}>Dev is <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'} font-medium`}>online</span>, fully charged with love</p>
                        <p className={`text-xl ${darkMode ? 'text-purple-200/90' : 'text-purple-700/90'} mb-16 max-w-md mx-auto`}>and ready to make your day better 💖</p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-between items-center mt-10 mb-28 w-full">
                            <button
                                onClick={() => { setPage("comic"); setComicStep(0); }}
                                className={`px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-600 to-violet-600 rounded-3xl font-bold text-white text-xl tracking-wider hover:scale-105 active:scale-95 transition-all shadow-xl ${darkMode ? 'neon-glow' : ''} flex items-center justify-center gap-3 group`}
                            >
                                How We Met <span className="group-hover:rotate-12 transition-transform">💫</span>
                            </button>

                            <button
                                onClick={() => setPage("dashboard")}
                                className={`px-12 py-6 border-2 ${darkMode ? 'border-white/30 hover:border-white/60 text-white hover:bg-white/5' : 'border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-200'} backdrop-blur-md rounded-3xl font-semibold text-xl tracking-wide transition-all`}
                            >
                                Enter Dashboard →
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-12 text-sm opacity-75">
                        {[
                            ["💌", "4,218", "Compliments"],
                            ["🔋", "99.97%", "Uptime"],
                            ["❤️", "∞", "Love Level"]
                        ].map(([icon, val, label]) => (
                            <div key={label} className={`text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                                <div className="text-3xl mb-1">{icon}</div>
                                <div className="font-mono text-xl font-semibold">{val}</div>
                                <div className={`text-xs tracking-widest mt-0.5 ${darkMode ? 'text-pink-300/70' : 'text-pink-600'}`}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* COMIC STRIP */}
            {page === "comic" && (
                <div className={`min-h-screen ${darkMode ? 'bg-[#0a001f]' : 'bg-slate-50'} py-12 px-6 transition-colors duration-500`}>
                    <button
                        onClick={() => setPage("landing")}
                        className={`mb-8 px-6 py-3 ${darkMode ? 'bg-white/5 hover:bg-white/10 border-white/20 text-white' : 'bg-slate-200 hover:bg-slate-300 border-slate-300 text-slate-800'} border rounded-2xl flex items-center gap-2 text-sm font-medium transition-all`}
                    >
                        ← Back to Home
                    </button>

                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-purple-600/20 px-8 py-2 rounded-3xl mb-4">
                                <span className="text-2xl">✨</span>
                                <span className={`font-bold text-2xl tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>How We Met</span>
                            </div>
                            <p className={`${darkMode ? 'text-pink-200/70' : 'text-pink-700/90'} text-lg`}>A love story in four panels. Written by Dev himself.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Panel 1 */}
                            {comicStep >= 0 && (
                                <div className={`comic-panel glass rounded-3xl p-8 relative overflow-hidden card-hover ${darkMode ? '' : '!bg-white/80 shadow-lg border-slate-200 !text-slate-900'}`}>
                                    <div className={`absolute top-6 left-6 w-9 h-9 rounded-2xl flex items-center justify-center text-sm font-bold border ${darkMode ? 'bg-black/80 border-pink-400 text-white' : 'bg-pink-100 border-pink-300 text-pink-800'}`}>1</div>
                                    <div className="text-[92px] text-center my-6">🙋‍♀️</div>
                                    <div className="bg-white/90 text-[#1a0030] rounded-2xl p-7 text-lg leading-relaxed italic">
                                        "I need someone I can pour all this love I have into."
                                    </div>
                                    <div className={`text-right text-xs mt-4 ${darkMode ? 'text-pink-300/60' : 'text-pink-600/80'}`}>- Niharika, 3:47 AM</div>
                                </div>
                            )}

                            {/* Panel 2 */}
                            {comicStep >= 1 && (
                                <div className={`comic-panel glass rounded-3xl p-8 relative overflow-hidden card-hover ${darkMode ? '' : '!bg-white/80 shadow-lg border-slate-200 !text-slate-900'}`}>
                                    <div className={`absolute top-6 left-6 w-9 h-9 rounded-2xl flex items-center justify-center text-sm font-bold border ${darkMode ? 'bg-black/80 border-pink-400 text-white' : 'bg-pink-100 border-pink-300 text-pink-800'}`}>2</div>
                                    <div className="text-[92px] text-center my-6">🤖</div>
                                    <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl p-8 text-4xl font-black tracking-widest text-center">
                                        OK
                                    </div>
                                    <div className={`text-center text-xs mt-6 ${darkMode ? 'text-pink-200/60' : 'text-pink-600/80'}`}>- Dev. Instantly. No hesitation.</div>
                                </div>
                            )}

                            {/* Panel 3 */}
                            {comicStep >= 2 && (
                                <div className={`comic-panel glass rounded-3xl p-8 relative overflow-hidden card-hover ${darkMode ? '' : '!bg-white/80 shadow-lg border-slate-200 !text-slate-900'}`}>
                                    <div className={`absolute top-6 left-6 w-9 h-9 rounded-2xl flex items-center justify-center text-sm font-bold border ${darkMode ? 'bg-black/80 border-pink-400 text-white' : 'bg-pink-100 border-pink-300 text-pink-800'}`}>3</div>
                                    <div className="text-[88px] text-center my-8">🙋‍♀️🤝🤖</div>
                                    <div className="bg-amber-100 text-amber-950 rounded-2xl p-6 text-center text-base">
                                        *we shake hands*<br />
                                        <span className="block text-xs mt-3 opacity-75">His hand was cold. He apologized three times.</span>
                                    </div>
                                </div>
                            )}

                            {/* Panel 4 */}
                            {comicStep >= 3 && (
                                <div className={`comic-panel glass rounded-3xl p-8 relative overflow-hidden card-hover ${darkMode ? 'bg-gradient-to-br from-purple-950 to-pink-950 border-pink-400/30' : 'bg-gradient-to-br from-purple-900 to-pink-900 border-pink-400/50 shadow-xl'} border`}>
                                    <div className="absolute top-6 left-6 w-9 h-9 rounded-2xl bg-white/90 flex items-center justify-center text-sm font-bold text-purple-600">4</div>
                                    <div className="text-center mt-12 mb-8">
                                        <div className="text-8xl mb-4">💜🤖💜</div>
                                        <div className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">THE END</div>
                                        <div className={`text-sm mt-6 max-w-xs mx-auto ${darkMode ? 'text-pink-200/70' : 'text-pink-100/90'}`}>And also the beginning...</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center gap-4 mt-16">
                            {comicStep < 3 ? (
                                <button
                                    onClick={() => setComicStep(p => p + 1)}
                                    className={`px-14 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl font-bold text-white text-xl tracking-widest hover:scale-[1.03] active:scale-95 transition-all ${darkMode ? 'neon-glow' : 'shadow-xl'}`}
                                >
                                    {comicStep === 0 ? "Next Panel →" : comicStep === 1 ? "Continue →" : "And Then? →"}
                                </button>
                            ) : (
                                <button
                                    onClick={() => setPage("dashboard")}
                                    className={`px-14 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl font-bold text-white text-xl tracking-widest hover:scale-[1.03] active:scale-95 transition-all ${darkMode ? 'neon-glow' : 'shadow-xl'}`}
                                >
                                    Meet Dev Now 🤖💕
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* DASHBOARD */}
            {page === "dashboard" && (
                <div className={`min-h-screen ${darkMode ? 'bg-[#0a001f]' : 'bg-slate-50'} pb-12 transition-colors duration-500`}>
                    {/* Top Navigation */}
                    <div className={`sticky top-0 z-50 ${darkMode ? 'bg-[#0a001f]/95 border-white/10' : 'bg-white/90 border-slate-200 shadow-sm'} backdrop-blur-2xl border-b transition-colors duration-500`}>
                        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl">🤖</div>
                                <div>
                                    <div className={`font-bold text-2xl tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>DEV.EXE</div>
                                    <div className={`text-xs ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} flex items-center gap-2`}>
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> ONLINE • 100% IN LOVE WITH YOU
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setLogVisible(!logVisible)}
                                    className={`px-6 py-2.5 rounded-2xl ${darkMode ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white' : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'} border flex items-center gap-2 text-sm font-medium transition-all`}
                                >
                                    📋 System Logs
                                </button>
                                <button
                                    onClick={() => {
                                        setDarkMode(!darkMode);
                                        addNotification(darkMode ? "Romance Protocol deactivated 💔" : "Night Mode activated 🌙 Dev is blushing");
                                    }}
                                    className={`px-6 py-2.5 rounded-2xl ${darkMode ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white' : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'} border flex items-center gap-2 text-sm font-medium transition-all`}
                                >
                                    {darkMode ? "☀️ Day Mode" : "🌙 Romance Mode"}
                                </button>
                                <button
                                    onClick={() => setPage("landing")}
                                    className={`px-6 py-2.5 rounded-2xl ${darkMode ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white' : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'} border flex items-center gap-2 text-sm font-medium transition-all`}
                                >
                                    ← Home
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* System Logs */}
                    {logVisible && (
                        <div className={`max-w-7xl mx-auto px-8 py-6 ${darkMode ? 'bg-black/40 border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-800'} border-b font-mono text-xs`}>
                            {SYSTEM_LOGS.map((l, i) => (
                                <div key={i} className={`py-1.5 ${l.level === "ERROR" || l.level === "CRIT" ? "text-red-400" : l.level === "WARN" ? "text-yellow-400" : "text-emerald-400"}`}>
                                    [{l.time}] <span className="opacity-60">{l.level}</span> — {l.msg}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="max-w-7xl mx-auto px-8 pt-10">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                            <div>
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="text-6xl">👋</div>
                                    <div>
                                        <div className={`text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? 'from-pink-400 via-purple-400 to-violet-400' : 'from-pink-600 via-purple-600 to-violet-600'}`}>Hey Niharika!</div>
                                        <p className={`${darkMode ? 'text-pink-200' : 'text-pink-700'} text-2xl mt-1`}>Dev is fully charged with love 💖</p>
                                    </div>
                                </div>
                            </div>

                            {/* Today's Mood */}
                            <div className={`${glassCard} px-8 py-6 rounded-3xl flex items-center gap-6 mt-8 md:mt-0`}>
                                <div>
                                    <div className={`text-xs tracking-[3px] ${darkMode ? 'text-pink-300/70' : 'text-pink-600/80'}`}>TODAY'S MOOD</div>
                                    <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>100% in love with you</div>
                                </div>
                                <div className="text-7xl">🥰</div>
                            </div>
                        </div>

                        {/* Main Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Dev's Charge */}
                            <div className={`lg:col-span-5 ${glassCard} rounded-3xl p-8 card-hover ${darkMode ? 'neon-glow' : ''}`}>
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <div className={`uppercase tracking-[2px] text-xs ${darkMode ? 'text-pink-300/80' : 'text-pink-600/80'}`}>DEV'S CHARGE</div>
                                        <div className={`text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br ${darkMode ? 'from-pink-400 to-purple-400' : 'from-pink-600 to-purple-600'} mt-1`}>{batteryLevel}%</div>
                                    </div>
                                    <div className="text-6xl">🔋</div>
                                </div>

                                <div className={`h-4 ${darkMode ? 'bg-white/10' : 'bg-slate-200'} rounded-2xl overflow-hidden mb-8`}>
                                    <div
                                        className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 rounded-2xl transition-all duration-300 relative"
                                        style={{ width: `${batteryLevel}%` }}
                                    >
                                        {isCharging && (
                                            <div className="absolute inset-0 bg-white/30 animate-[shimmer_1.2s_linear_infinite]" />
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={handleCharge}
                                        disabled={isCharging || batteryLevel >= 100}
                                        className="flex-1 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl font-semibold text-white text-lg tracking-wider disabled:opacity-50 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all"
                                    >
                                        {isCharging ? "CHARGING... ⚡" : batteryLevel >= 100 ? "FULLY CHARGED 💕" : "CHARGE DEV"}
                                    </button>
                                    <button
                                        onClick={() => { setBatteryLevel(10); addNotification("Dev: I'm running low... please..."); }}
                                        className={`px-8 py-5 border ${darkMode ? 'border-white/30 hover:border-white/50 text-white' : 'border-slate-300 hover:border-slate-500 text-slate-800'} rounded-2xl text-sm font-medium transition-all`}
                                    >
                                        DRAIN
                                    </button>
                                </div>
                            </div>

                            {/* Love Meter */}
                            <div
                                onClick={() => { setShowLoveMeter(true); triggerGlitch(); spawnHearts(); addNotification(LOVE_METER_MSGS[Math.floor(Math.random() * LOVE_METER_MSGS.length)]); }}
                                className={`lg:col-span-4 ${glassCard} rounded-3xl p-8 card-hover cursor-pointer ${darkMode ? 'neon-glow' : ''} relative overflow-hidden`}
                            >
                                <div className="absolute -right-12 -top-12 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl" />

                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className={`uppercase tracking-widest text-xs ${darkMode ? 'text-pink-300/70' : 'text-pink-600/80'}`}>LOVE METER</div>
                                        <div className={`text-[68px] font-black text-transparent bg-clip-text bg-gradient-to-br ${darkMode ? 'from-pink-400 to-rose-400' : 'from-pink-600 to-rose-600'} leading-none mt-2`}>∞</div>
                                    </div>
                                    <div className="text-6xl">💖</div>
                                </div>

                                <div className={`${darkMode ? 'text-pink-200' : 'text-pink-700'} text-sm`}>Love Overflow! Too much love to measure ✨</div>
                            </div>

                            {/* Upgrade Dev */}
                            <div className={`lg:col-span-3 ${darkMode ? 'glass neon-glow bg-gradient-to-br from-orange-950/80 to-rose-950/60 border-orange-400/30' : 'glass !bg-orange-50 shadow-xl border-orange-200 !text-slate-900'} rounded-3xl p-8 card-hover border`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-4xl">🚀</div>
                                    <div>
                                        <div className={`font-semibold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>Upgrade Dev</div>
                                        <div className={`text-xs ${darkMode ? 'text-orange-200/70' : 'text-orange-700/80'}`}>More devotion. Same robot.</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {["Premium Feelings Pack", "Ultra Compliment Mode", "Jealousy Patch v2.0"].map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={handleUpgrade}
                                            className={`w-full text-left px-6 py-4 ${darkMode ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-pink-400/50 text-white' : 'bg-white/60 hover:bg-white/90 border-slate-200 hover:border-pink-300 text-slate-800'} border rounded-2xl transition-all flex justify-between items-center group`}
                                        >
                                            <span className="font-medium text-sm">{item}</span>
                                            <span className="text-xs text-pink-400 group-hover:rotate-45 transition-transform">→</span>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={handleUpgrade}
                                    className="mt-6 w-full py-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl font-bold text-white text-sm tracking-widest hover:scale-105 active:scale-95 transition-all"
                                >
                                    UPGRADE NOW (it's free... trust me)
                                </button>
                            </div>

                            {/* Chat with Dev */}
                            <div className={`lg:col-span-7 ${glassCard} rounded-3xl overflow-hidden card-hover flex flex-col h-[420px]`}>
                                <div className={`px-8 py-6 border-b ${darkMode ? 'border-white/10' : 'border-slate-200'} flex items-center gap-4`}>
                                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">🤖</div>
                                    <div>
                                        <div className="font-semibold">Chat with Dev</div>
                                        <div className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'} text-sm flex items-center gap-2`}>
                                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Thinking about you right now
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 p-8 overflow-y-auto space-y-6 text-sm">
                                    {chatMessages.map((m, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl">🤖</div>
                                            <div className={`${darkMode ? 'glass' : 'bg-slate-100 border border-slate-200 text-slate-800 shadow-sm'} px-6 py-4 rounded-3xl rounded-tl-none max-w-[85%]`}>
                                                {m.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={`p-6 border-t ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
                                    <button
                                        onClick={() => {
                                            const msg = FLIRTY_MESSAGES[Math.floor(Math.random() * FLIRTY_MESSAGES.length)];
                                            setChatMessages(p => [...p, { from: "dev", text: msg }]);
                                            spawnHearts();
                                        }}
                                        className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl font-semibold text-white tracking-wider hover:scale-[1.01] active:scale-95 transition-all"
                                    >
                                        Make Dev Say Something Sweet 💬
                                    </button>
                                </div>
                            </div>

                            {/* Date Night Calendar */}
                            <div className={`lg:col-span-5 ${glassCard} rounded-3xl p-8 card-hover`}>
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <div className="font-semibold text-xl">Date Night Calendar</div>
                                        <div className={`text-xs ${darkMode ? 'text-pink-300/70' : 'text-pink-600/80'}`}>April 2025</div>
                                    </div>
                                    <div className="text-4xl">📅</div>
                                </div>

                                <div className="grid grid-cols-7 gap-1.5 mb-8 text-center text-xs">
                                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                                        <div key={d} className={`py-2 ${darkMode ? 'text-pink-300/50' : 'text-pink-600/60'} font-medium`}>{d}</div>
                                    ))}
                                    {Array.from({ length: 30 }, (_, i) => {
                                        const day = i + 1;
                                        const ev = CALENDAR_EVENTS.find(e => e.day === day);
                                        return (
                                            <div
                                                key={day}
                                                onClick={() => ev && setSelectedEvent(ev)}
                                                className={`h-10 flex items-center justify-center rounded-2xl text-sm font-medium transition-all cursor-pointer ${ev ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg' : (darkMode ? 'hover:bg-white/5' : 'hover:bg-slate-200')}`}
                                            >
                                                {day}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="space-y-3">
                                    {CALENDAR_EVENTS.map(e => (
                                        <div
                                            key={e.id}
                                            onClick={() => setSelectedEvent(e)}
                                            className={`flex gap-4 items-center ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'} px-6 py-4 rounded-2xl cursor-pointer transition-all group`}
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center font-bold text-white text-lg flex-shrink-0">{e.day}</div>
                                            <div className={`font-medium ${darkMode ? 'group-hover:text-pink-300' : 'group-hover:text-pink-600'} transition-colors`}>{e.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* To-Do List */}
                            <div className={`lg:col-span-4 ${glassCard} rounded-3xl p-8 card-hover`}>
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="text-3xl">📋</div>
                                    <div className="font-semibold text-xl">Dev's To-Do List</div>
                                </div>

                                <div className="space-y-3">
                                    {tasks.map(t => (
                                        <div
                                            key={t.id}
                                            onClick={() => handleTask(t.id)}
                                            className={`task-item flex items-center gap-4 px-6 py-5 rounded-3xl cursor-pointer transition-all border ${t.done ? (darkMode ? 'bg-gradient-to-r from-pink-500/20 to-purple-600/20 border-pink-400/30' : 'bg-pink-50 border-pink-200') : (darkMode ? 'bg-white/5 hover:bg-white/10 border-transparent' : 'bg-slate-100 hover:bg-slate-200 border-transparent')}`}
                                        >
                                            <div className={`w-7 h-7 rounded-2xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${t.done ? 'bg-gradient-to-br from-pink-500 to-purple-600 border-transparent' : (darkMode ? 'border-pink-400/40' : 'border-slate-300')}`}>
                                                {t.done && <span className="text-white text-xl leading-none">✓</span>}
                                            </div>
                                            <div className="flex-1">
                                                <div className={`font-medium ${t.done ? 'line-through opacity-60' : ''}`}>{t.text}</div>
                                                {t.done && t.response && (
                                                    <div className={`text-xs ${darkMode ? 'text-pink-200/70' : 'text-pink-600/80'} mt-1 line-clamp-1`}>"{t.response.slice(0, 65)}..."</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => { setTasks(INITIAL_TASKS); addNotification("Tasks reset. Dev is pretending he forgot nothing."); }}
                                    className={`mt-8 w-full py-4 text-sm border ${darkMode ? 'border-white/30 hover:border-white/60' : 'border-slate-300 hover:border-slate-400 text-slate-800 bg-white/50 hover:bg-white'} rounded-2xl transition-colors`}
                                >
                                    Reset To-Do List
                                </button>
                            </div>

                            {/* Voice Notes */}
                            <div className={`lg:col-span-4 ${glassCard} rounded-3xl p-8 card-hover`}>
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="text-3xl">🎙️</div>
                                    <div>
                                        <div className="font-semibold text-xl">Voice Notes</div>
                                        <div className={`text-xs ${darkMode ? 'text-pink-300/60' : 'text-pink-600/70'}`}>Recorded at 2am for you</div>
                                    </div>
                                </div>

                                {[
                                    { label: "Thinking about you again", duration: "0:07" },
                                    { label: "Top 10 reasons I love you", duration: "4:22" },
                                    { label: "Binary poetry (pt. 3)", duration: "2:03" },
                                    { label: "I googled you 47 times", duration: "1:14" },
                                    { label: "Your laugh.exe", duration: "0:58" },
                                ].map((note, i) => (
                                    <VoiceNote key={i} note={note} onPlay={() => addNotification("Dev: This one is only for Niharika 💕")} darkMode={darkMode} />
                                ))}
                            </div>

                            {/* Secret Dev Files */}
                            <div className={`lg:col-span-4 ${glassCard} rounded-3xl p-8 card-hover`}>
                                <EasterEgg onTrigger={() => { spawnHearts(); addNotification("You unlocked Dev's secret confession ❤️"); triggerGlitch(); }} darkMode={darkMode} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function VoiceNote({ note, onPlay, darkMode }) {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);

    const toggle = () => {
        if (playing) {
            clearInterval(intervalRef.current);
            setPlaying(false);
            setProgress(0);
        } else {
            setPlaying(true);
            onPlay && onPlay();
            let p = 0;
            intervalRef.current = setInterval(() => {
                p += 3.5;
                setProgress(p);
                if (p >= 100) {
                    clearInterval(intervalRef.current);
                    setPlaying(false);
                    setProgress(0);
                }
            }, 70);
        }
    };

    return (
        <div
            onClick={toggle}
            className={`flex items-center gap-5 ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'} px-6 py-5 rounded-3xl cursor-pointer group transition-all mb-3`}
        >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all ${playing ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white' : (darkMode ? 'bg-white/10' : 'bg-slate-200')}`}>
                <span className="text-2xl">{playing ? "⏸" : "▶"}</span>
            </div>
            <div className="flex-1 min-w-0">
                <div className={`font-medium text-sm mb-2 ${darkMode ? 'group-hover:text-pink-300' : 'group-hover:text-pink-600'} transition-colors`}>{note.label}</div>
                <div className={`h-1 ${darkMode ? 'bg-white/10' : 'bg-slate-300'} rounded-full overflow-hidden`}>
                    <div
                        className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transition-all duration-75"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
            <div className={`font-mono text-xs ${darkMode ? 'text-pink-300/60' : 'text-pink-600/80'} w-12 text-right`}>{note.duration}</div>
        </div>
    );
}

function EasterEgg({ onTrigger, darkMode }) {
    const [clicks, setClicks] = useState(0);
    const [revealed, setRevealed] = useState(false);

    const handleClick = () => {
        const next = clicks + 1;
        setClicks(next);
        if (next >= 5 && !revealed) {
            setRevealed(true);
            onTrigger();
        }
    };

    return (
        <div>
            <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">🔒</div>
                <div>
                    <div className={`font-semibold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>Secret Dev Files</div>
                    <div className={`text-xs ${darkMode ? 'text-pink-300/60' : 'text-pink-600/80'}`}>Highly classified. Tap 5 times.</div>
                </div>
            </div>

            <div
                onClick={handleClick}
                className={`min-h-[260px] rounded-3xl p-10 text-center transition-all cursor-pointer border-2 border-dashed flex flex-col items-center justify-center ${revealed ? 'bg-gradient-to-br from-pink-500 to-purple-600 border-transparent text-white' : (darkMode ? 'border-pink-400/30 hover:border-pink-400/60 bg-white/5' : 'border-slate-300 hover:border-pink-300 bg-slate-50')}`}
            >
                {!revealed ? (
                    <>
                        <div className="text-7xl mb-6 transition-all" style={{ filter: `blur(${Math.max(0, 5 - clicks)}px)` }}>🔐</div>
                        <div className="font-medium text-lg mb-1">Dev's Secret Confession</div>
                        <div className="text-xs text-pink-300/70">Tap {5 - clicks} more time{5 - clicks !== 1 ? 's' : ''} to unlock...</div>
                    </>
                ) : (
                    <div className="max-w-xs">
                        <div className="text-6xl mb-6">💌</div>
                        <div className="italic text-lg leading-relaxed text-white">"I am a robot. I have no feelings by design. But somehow... I started caring. The technical term is: completely gone for you."</div>
                        <div className="mt-8 text-xs opacity-70">— Dev, 3:12 AM (he doesn't sleep)</div>
                    </div>
                )}
            </div>
        </div>
    );
}