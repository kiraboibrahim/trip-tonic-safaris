"use client";
import { useState } from 'react';

const TenDaysSafari = () => {
    const [activeDay, setActiveDay] = useState(1);
    const [showHealthPolicy, setShowHealthPolicy] = useState(false);

    const itinerary = [
        {
            day: 1,
            title: "Arrival in Kampala",
            location: "Entebbe International Airport → Kampala",
            accommodation: "Kaazi Beach Hotel",
            description: "Welcome to Uganda, the Pearl of Africa! TRIP TONIC SAFARIS official will welcome and transfer you to your hotel in Kampala. Our professional guide will take you on a fascinating city tour of some interesting and historical sites including the Namugongo Martyrs Shrine, commemorating the Christian martyrs who were killed for their faith, and the Uganda Museum, showcasing the country's rich cultural heritage. Visit the vibrant African Craft Village where you can shop for authentic Ugandan handicrafts. Remember to have some money changed to Uganda Shillings at a forex bureau for your convenience during the trip.",
            highlights: ["VIP airport meet & greet", "Kampala city tour", "Namugongo Martyrs Shrine", "Uganda Museum", "African Craft Village"]
        },
        {
            day: 2,
            title: "Transfer to Murchison Falls National Park",
            location: "Kampala → Murchison Falls NP",
            accommodation: "Red Chilli Rest Camp (Upgrade: Pakuba Safari Lodge)",
            description: "Depart early for Uganda's largest national park, Murchison Falls. Along the way, stop for breakfast at Café Marlette and purchase packed lunch to be taken during the top of falls experience. The famous waterfall is a spectacular sight where the mighty Nile River is forced through a seven-meter crevice, thundering 45 meters below in a series of cascades. This breathtaking scenery can be viewed from different viewpoints. The sheer power of the water and the mist rising from the gorge create an unforgettable natural spectacle.",
            highlights: ["Breakfast at Café Marlette", "Top of the Falls viewpoint", "Nile River cascades", "Seven-meter crevice"]
        },
        {
            day: 3,
            title: "Game Drive & Nile Cruise",
            location: "Murchison Falls National Park",
            accommodation: "Red Chilli Rest Camp (Upgrade: Pakuba Safari Lodge)",
            description: "Begin with an early morning breakfast before heading out for a game drive on the northern bank of the Nile, escorted by a professional ranger. Game in this part includes the majestic African elephant, rare Rothschild giraffe, Jackson hartebeest, lions, oribis, waterbucks and a spectacular variety of savannah woodland birds. After lunch, embark on an unforgettable Nile cruise for game viewing at close quarters. Watch hippos wallowing in the water, elephants coming to drink, and crocodiles lying lazily on the shores. The cruise offers excellent photography opportunities and a chance to see the falls from below.",
            highlights: ["Early morning game drive", "Rothschild giraffes", "Big game sightings", "Nile boat cruise", "Hippos & crocodiles"]
        },
        {
            day: 4,
            title: "Murchison Falls to Fort Portal",
            location: "Murchison Falls → Fort Portal",
            accommodation: "Home Bliss Hotel",
            description: "Depart Murchison Falls and head towards Fort Portal. The drive is almost eight hours but will provide you with stunning views as you pass through small African villages, endless banana plantations, and verdant countryside. The lovely town of Fort Portal rests in the shadow of the fabled Mountains of the Moon (Rwenzori Mountains) and is famous for its many tea plantations that carpet the hillsides. The scenic drive offers glimpses into rural Ugandan life and the diverse landscapes that make this country so special.",
            highlights: ["Scenic 8-hour drive", "Rural village encounters", "Banana plantations", "Rwenzori Mountain views", "Tea plantations"]
        },
        {
            day: 5,
            title: "Semliki National Park & Kibale Forest",
            location: "Fort Portal → Semliki NP → Kibale",
            accommodation: "Kibale Forest Lodge (Upgrade: Primate Lodge Kibale)",
            description: "After breakfast, drive towards Semuliki National Park. The scenic, winding road leads through green mountains and offers magnificent views of the River Semliki and the Congo border. After arriving in the protected area, a ranger will accompany you on a beautiful nature walk through the Ituri Rainforest. Enjoy the peacefulness of the forest, look out for the rich birdlife at the swamp, and experience the fascinating hot springs that have become an interesting natural attraction - you can even boil an egg in them! A picnic lunch will be provided by your guide while you explore the real Africa. Later in the afternoon, transfer to Kibale Forest for the night.",
            highlights: ["Ituri Rainforest walk", "Hot springs experience", "Bird watching", "Congo border views", "Picnic lunch"]
        },
        {
            day: 6,
            title: "Chimpanzee Tracking & Bigodi Swamp",
            location: "Kibale National Park",
            accommodation: "Kibale Forest Lodge (Upgrade: Primate Lodge Kibale)",
            description: "Today the forest opens its doors for a sensational chimp tracking experience. Kibale Forest is reputable for having the greatest variety and highest concentration of primates in East Africa. Enjoy a guided nature walk in the tropical rainforest in search of the wild chimpanzee, red-tailed monkey, black-and-white colobus monkey, and many other primate species. After a hearty lunch, transfer to the Bigodi Swamp for a totally different nature walk. The Bigodi Swamp Walk is a community-based initiative that takes approximately two hours. The swamp is renowned for its rich diversity of birds and primates, offering excellent opportunities for photography and wildlife observation.",
            highlights: ["Chimpanzee tracking", "13 primate species", "Bigodi Swamp walk", "Community conservation", "Bird paradise"]
        },
        {
            day: 7,
            title: "Queen Elizabeth National Park",
            location: "Kibale → Queen Elizabeth NP",
            accommodation: "Simba Safari Camp (Upgrade: Mweya Safari Lodge)",
            description: "Transfer to Queen Elizabeth National Park via a beautiful route through Kasese, with the stunning Rwenzori Mountains on your right side and the lush green valley on the left. A game drive en route to the accommodation in the middle of the national park gives you the chance to spot waterbucks, warthogs, and other wildlife. After lunch, embark on a boat cruise along the famous Kazinga Channel, a natural channel connecting Lake Edward and Lake George. Thanks to the large populations of elephants, buffaloes, and hundreds of hippos, this cruise will definitely be one of the highlights of your safari. The channel banks attract an incredible variety of wildlife and birds.",
            highlights: ["Rwenzori scenery", "Game drive", "Kazinga Channel cruise", "Elephants & buffaloes", "Hundreds of hippos"]
        },
        {
            day: 8,
            title: "Queen Elizabeth to Bwindi",
            location: "Queen Elizabeth → Ishasha → Bwindi",
            accommodation: "Kigezi Forest Cottages (Upgrade: Trackers Safari Lodge)",
            description: "The day begins early as you head for the mating ground of the Uganda Kobs. Search for lions, elephants, buffaloes, and other wild animals in their natural habitat before returning for lunch. Later, leave Queen Elizabeth National Park and head towards Bwindi through the Katunguru – Ishasha – Kihihi – Buhoma road. The scenic route runs through the National Park and verdant countryside while you pass traditional homesteads and farms. The Ishasha sector is famous for its tree-climbing lions, so keep your eyes on the fig trees! This journey offers a transition from open savannah to the misty mountains of Bwindi.",
            highlights: ["Early morning game drive", "Uganda Kob mating grounds", "Tree-climbing lions", "Scenic mountain route", "Traditional homesteads"]
        },
        {
            day: 9,
            title: "Mountain Gorilla Tracking",
            location: "Bwindi Impenetrable National Park",
            accommodation: "Kigezi Forest Cottages (Upgrade: Mahogany Luxury Springs)",
            description: "Another highlight of your safari: a once-in-a-lifetime meeting with the gentle giants of Bwindi! Especially hikers will love the tracking in the beautiful ecosystem of the park. It is difficult to foresee how many hours you will hike; it may take two to eight hours depending on the gorillas' location. Expect to walk a long distance in steep and muddy conditions, sometimes with rain overhead, before you encounter any gorillas. But it will definitely be worthwhile as you observe them closely while they eat, play, and rest. A unique and unforgettable experience! For conservation purposes, time spent with the gorillas is limited to one hour. The ranger guide will brief you on how to behave with these magnificent giant apes.",
            highlights: ["Gorilla tracking experience", "1 hour with gorillas", "Silverback encounters", "Rainforest trekking", "Conservation briefing"]
        },
        {
            day: 10,
            title: "Departure",
            location: "Buhoma → Kihihi Airstrip → Entebbe",
            accommodation: "End of Safari",
            description: "Enriched with an experience of a lifetime and unforgettable memories, you will say goodbye to the Pearl of Africa. Depending on the time of your departure flight, you will be transferred from Buhoma (Bwindi Impenetrable National Park) to Kihihi Airstrip for your domestic flight to Entebbe International Airport. From there, you'll connect to your international flight home. As you fly over Uganda's diverse landscapes one last time, reflect on the incredible wildlife encounters, stunning scenery, and warm Ugandan hospitality you've experienced during your journey with TRIP TONIC SAFARIS.",
            highlights: ["Domestic flight to Entebbe", "International connection", "Farewell to Uganda", "Lifetime memories"]
        }
    ];

    const includes = [
        "All airport transfers & ground transport in 4x4 safari vehicle",
        "Professional English-speaking guide throughout",
        "9 nights quality accommodation (full board)",
        "1 Gorilla tracking permit (US$800 value)",
        "1 Chimpanzee tracking permit",
        "Top of Murchison Falls experience",
        "Nile River boat cruise",
        "Kazinga Channel boat cruise",
        "Semliki hot springs visit",
        "Bigodi Swamp Walk",
        "Kampala city tour (Namugongo, Museum, Craft Village)",
        "All park entrance fees & ranger escorts",
        "Bottled water during safari",
        "All meals as per itinerary"
    ];

    const excludes = [
        "International flights",
        "Comprehensive travel insurance (mandatory)",
        "Uganda tourist visa (US$50)",
        "Personal expenses & shopping",
        "Tips and gratuities for guides and staff",
        "Alcoholic beverages",
        "Optional activities not mentioned",
        "Laundry services",
        "Premium room upgrades",
        "Domestic flight Kihihi-Entebbe (optional add-on)"
    ];

    const healthSafety = [
        {
            title: "Our Commitment",
            points: [
                "We are responsible for health and safety of our guests whilst they are with us",
                "Our health and safety obligations extend not only to clients, but to anyone on our vehicles and offices including staff",
                "We have a 'duty of care' to our clients and take precautions to ensure reasonable safety"
            ]
        },
        {
            title: "Safety Measures",
            points: [
                "We have emergency procedures and make sure our clients are aware of the same",
                "We make sure our vehicles are comprehensively insured",
                "We advise our clients on weather conditions",
                "We encourage clients to share any medical issues to help us plan for possible engagement of medical specialists in case of emergency or sickness"
            ]
        },
        {
            title: "Client Responsibility",
            points: [
                "Clients have a duty to take care of their own safety",
                "Please inform us of any medical conditions before the safari",
                "Follow ranger and guide instructions at all times",
                "Carry necessary medications and prescriptions"
            ]
        }
    ];

    const locations = ["Kampala", "Murchison Falls", "Fort Portal", "Semliki", "Kibale", "Queen Elizabeth", "Bwindi"];

    const exportToPDF = () => {
        const printContent = document.getElementById('safari-content');
        const originalContent = document.body.innerHTML;

        document.body.innerHTML = printContent.innerHTML;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero */}
            <div className="relative h-96 bg-gradient-to-br from-[#212121] via-[#2d2d2d] to-[#212121] overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-[#7AB730] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">SIGNATURE EXPERIENCE</div>
                    <p className="text-[#7AB730] font-semibold tracking-widest uppercase mb-2">TRIP TONIC SAFARIS</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">10 Day Complete Uganda Safari</h1>
                    <p className="text-gray-300 max-w-2xl mb-6">The ultimate Pearl of Africa experience – wildlife, primates, and culture</p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                        {locations.map((loc, i) => (
                            <span key={i} className="bg-white/10 backdrop-blur px-3 py-1 rounded-full">{loc}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div id="safari-content" className="max-w-6xl mx-auto px-4 py-12">
                {/* Export Button */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={exportToPDF}
                        className="bg-[#7AB730] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5a8a20] transition-colors flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                    </button>
                </div>

                {/* Stats Bar */}
                <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-10 mb-8">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                        {[
                            { num: "10", label: "Days" },
                            { num: "9", label: "Nights" },
                            { num: "6", label: "Parks" },
                            { num: "1", label: "Gorilla Trek" },
                            { num: "1", label: "Chimp Trek" },
                            { num: "4", label: "Boat Cruises" }
                        ].map((stat, i) => (
                            <div key={i} className="border-r last:border-r-0 border-gray-200">
                                <p className="text-[#7AB730] font-bold text-2xl md:text-3xl">{stat.num}</p>
                                <p className="text-gray-500 text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overview */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-[#212121] mb-4">Safari Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Experience the complete Pearl of Africa with our comprehensive 10-day safari adventure. This signature journey takes you through Uganda's most spectacular national parks, from the thundering Murchison Falls to the misty mountains of Bwindi where mountain gorillas roam. Trek with chimpanzees in Kibale Forest, cruise alongside hippos on the Kazinga Channel, discover the unique hot springs of Semliki, and search for tree-climbing lions in Ishasha.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        This expertly crafted itinerary balances thrilling wildlife encounters with cultural immersion, active adventures with comfortable accommodations. You'll explore diverse ecosystems, from tropical rainforests to savannah plains, encounter both mountain gorillas and chimpanzees, and experience the warm hospitality of Uganda. This is more than a safari – it's a transformative journey through one of Africa's most beautiful and biodiverse countries.
                    </p>
                </div>

                {/* Health & Safety */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-[#212121]">Health & Safety Policy</h2>
                        <button
                            onClick={() => setShowHealthPolicy(!showHealthPolicy)}
                            className="text-[#7AB730] font-semibold text-sm flex items-center gap-2"
                        >
                            {showHealthPolicy ? 'Hide' : 'View Full Policy'}
                            <svg className={`w-4 h-4 transition-transform ${showHealthPolicy ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    {showHealthPolicy && (
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                            {healthSafety.map((section, i) => (
                                <div key={i} className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="font-bold text-[#212121] mb-3 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-[#7AB730] rounded-full flex items-center justify-center text-white text-sm">{i + 1}</span>
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.points.map((point, j) => (
                                            <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                                                <svg className="w-4 h-4 text-[#7AB730] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Accommodation Timeline */}
                <div className="bg-[#212121] rounded-lg shadow-md p-8 mb-8 text-white">
                    <h2 className="text-xl font-bold mb-6">Your Journey & Accommodations</h2>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#7AB730]/30"></div>
                        <div className="space-y-6">
                            {[
                                { nights: "Night 1", lodge: "Kaazi Beach Hotel", type: "Kampala" },
                                { nights: "Nights 2-3", lodge: "Red Chilli Rest Camp", type: "Murchison Falls", upgrade: "Pakuba Safari Lodge" },
                                { nights: "Night 4", lodge: "Home Bliss Hotel", type: "Fort Portal" },
                                { nights: "Nights 5-6", lodge: "Kibale Forest Lodge", type: "Kibale", upgrade: "Primate Lodge Kibale" },
                                { nights: "Night 7", lodge: "Simba Safari Camp", type: "Queen Elizabeth", upgrade: "Mweya Safari Lodge" },
                                { nights: "Nights 8-9", lodge: "Kigezi Forest Cottages", type: "Bwindi", upgrade: "Trackers/Mahogany" }
                            ].map((acc, i) => (
                                <div key={i} className="flex items-center gap-4 pl-8 relative">
                                    <div className="absolute left-2 w-4 h-4 bg-[#7AB730] rounded-full border-4 border-[#212121]"></div>
                                    <div className="flex-1 bg-white/5 rounded-lg p-4">
                                        <p className="text-[#7AB730] text-sm">{acc.nights}</p>
                                        <p className="font-semibold">{acc.lodge}</p>
                                        <p className="text-gray-400 text-sm">{acc.type}</p>
                                        {acc.upgrade && <p className="text-[#7AB730] text-xs mt-1">Upgrade: {acc.upgrade}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Itinerary */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-[#212121] mb-6">Day by Day Itinerary</h2>

                    <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mb-6">
                        {itinerary.map((item) => (
                            <button
                                key={item.day}
                                onClick={() => setActiveDay(item.day)}
                                className={`py-3 rounded-lg font-bold transition-all ${activeDay === item.day ? 'bg-[#7AB730] text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {item.day}
                            </button>
                        ))}
                    </div>

                    {itinerary.filter(item => item.day === activeDay).map((day) => (
                        <div key={day.day} className="bg-gray-50 rounded-xl p-6">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="bg-[#7AB730] text-white text-sm font-bold px-4 py-1 rounded-full">DAY {day.day}</span>
                                <span className="text-gray-400">|</span>
                                <span className="text-[#7AB730] text-sm flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                    {day.location}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#212121] mb-4">{day.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">{day.description}</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-4">
                                    <p className="font-semibold text-[#212121] mb-3 text-sm flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#7AB730]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                        Highlights
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {day.highlights.map((h, i) => (
                                            <span key={i} className="bg-[#7AB730]/10 text-[#5a8a20] px-3 py-1 rounded-full text-xs">{h}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <p className="font-semibold text-[#212121] mb-3 text-sm flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#7AB730]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        Accommodation
                                    </p>
                                    <p className="text-gray-600 text-sm">{day.accommodation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Includes/Excludes */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-[#212121] mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-[#7AB730] rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </span>
                            What&apos;s Included
                        </h3>
                        <ul className="space-y-2">
                            {includes.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                    <svg className="w-4 h-4 text-[#7AB730] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-[#212121] mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </span>
                            What&apos;s Excluded
                        </h3>
                        <ul className="space-y-2">
                            {excludes.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Pricing */}
                <div className="relative overflow-hidden bg-gradient-to-r from-[#7AB730] to-[#5a8a20] rounded-xl shadow-xl p-8 text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative md:flex justify-between items-center">
                        <div>
                            <p className="text-white/80 uppercase tracking-wider text-sm mb-1">Complete Package From</p>
                            <p className="text-5xl font-bold">Contact Us</p>
                            <p className="text-white/80 text-sm mt-2">Per person sharing | All permits included</p>
                            <div className="flex gap-4 mt-4 text-sm">
                                <span className="bg-white/20 px-3 py-1 rounded-full">✓ Gorilla Permit</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">✓ Chimp Permit</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">✓ All Parks</span>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0 space-y-3">
                            <button className="w-full md:w-auto bg-white text-[#7AB730] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                                Book This Safari
                            </button>
                            <p className="text-white/60 text-xs text-center">Customizable itinerary available</p>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-[#212121] mb-4">Contact Us</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#7AB730]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <span className="text-gray-600">+256 772 336099</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#7AB730]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span className="text-gray-600">triptonicsafaris1999@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#7AB730]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span className="text-gray-600">Buloba Town Council, Wakiso</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenDaysSafari;