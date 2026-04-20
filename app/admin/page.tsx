"use client";

import React, { useState } from "react";
import { 
  Settings, Image as ImageIcon, Calendar, Utensils, MessageSquare, 
  Plus, Edit2, Trash2, Save, X, LayoutDashboard, ChevronRight
} from "lucide-react";

// Mock Data
const initialGeneral = {
  navbarTitle: "Rumah Restaurant",
  sections: {
    foodGallery: { title: "Food Gallery", subtitle: "Browse our customers' favorite dishes." },
    events: { title: "Events", subtitle: "Mark your calendar for our upcoming highlights." },
    menu: { title: "Menu", subtitle: "Discover the authentic taste of Rumah Restaurant with our curated selection of traditional Malay and Indonesian dishes." },
    testimonials: { title: "Testimonials", subtitle: "What our guests says on review." }
  }
};

const initialFoodItems = [
  { id: 1, title: 'Nasi Goreng', desc: 'Nasi Goreng Daging Spesial', img: '/assets/images/nasi-goreng.png' },
  { id: 2, title: 'Sate Madura', desc: 'Sate Madura Asli', img: '/assets/images/sate-madura.jpg' },
  { id: 3, title: 'Gulai Kambing', desc: 'Gulai Kambing Gurih', img: 'https://cdn1.site-media.eu/images/0/22838307/slide4-qgu_U9k3dWPzSkiuqiDT1g.png' },
];

const initialEvents = [
  { id: 1, year: '2026', title: 'Breakfast', description: 'Celebrate your special moments in an extraordinary dining setting.', mediaUrl: '/assets/events/event2.mp4', type: 'video' },
  { id: 2, year: '2026', title: 'Pesta Satay Madura', description: 'Join us for unforgettable nights filled with great music.', mediaUrl: '/assets/events/event3.jpeg', type: 'image' },
];

const initialMenuColumns = [
  { id: "col-1", images: ['https://cdn1.site-media.eu/images/0/22777508/slide1-bJAFiCbvA2q29Z2g6Q2mPw.png', 'https://cdn1.site-media.eu/images/0/22777505/slide2-qf5rWeIEJApCz0CpP7YD2A.png', 'https://cdn1.site-media.eu/images/0/22777503/slide3-Ymk24VmqzEIAXC7b3U39GA.png'] },
  { id: "col-2", images: ['https://cdn1.site-media.eu/images/0/22777497/slide4-XzvK0v4T3Zzgl_g8mCcCNw.png', 'https://cdn1.site-media.eu/images/0/22777494/slide5-cyugRQUBK99yH9qd9g8-_A.png', 'https://cdn1.site-media.eu/images/0/22777491/slide6-1-xlZF19Ab9R8FiqWTXD9w.png'] },
  { id: "col-3", images: ['https://cdn1.site-media.eu/images/0/22777488/slide7-q-TZBLrKvoqoxLqq8JD51w.png', 'https://cdn1.site-media.eu/images/0/22777485/slide8-uExZLNyfLw0qTgkUk79qAw.png', 'https://cdn1.site-media.eu/images/0/22777482/slide9-orVloy73MVbRgIh8QQZCsA.png'] },
];

const initialTestimonials = [
  { id: 1, name: "Kalaynahs S", role: "Customer", date: "01/02/2026", text: "They provide original recipes. Nice staff and kind owner. Generous portions, clean outlet, delicious food, and reasonable prices. Highly recommended." },
  { id: 2, name: "Shanya Sang", role: "Customer", date: "01/02/2026", text: "Hidden gem! Best Malaysian food in town. Clean place, high-quality food, and authentic flavors. Fried fish is fresh and perfectly crispy." },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("general");
  
  // States
  const [general, setGeneral] = useState(initialGeneral);
  const [foodItems, setFoodItems] = useState(initialFoodItems);
  const [events, setEvents] = useState(initialEvents);
  const [menuColumns, setMenuColumns] = useState(initialMenuColumns);
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  const tabs = [
    { id: "general", label: "General & Titles", icon: <Settings size={20} /> },
    { id: "gallery", label: "Food Gallery", icon: <ImageIcon size={20} /> },
    { id: "events", label: "Events", icon: <Calendar size={20} /> },
    { id: "menu", label: "Menu Elements", icon: <Utensils size={20} /> },
    { id: "testimonials", label: "Testimonials", icon: <MessageSquare size={20} /> },
  ];

  const handleSaveAll = () => {
    // Di sini Anda bisa memanggil API untuk menyimpan state ke database
    alert("Changes saved locally! (Implement API endpoint to save to DB)");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <LayoutDashboard className="text-green-700 mr-2" />
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="mr-3">{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && <ChevronRight size={16} className="ml-auto" />}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={handleSaveAll}
            className="w-full flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-lg font-medium transition-colors"
          >
            <Save size={18} className="mr-2" />
            Save Changes
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 capitalize">
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <p className="text-gray-500 mt-1">Manage your website content here.</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            
            {/* TAB: GENERAL */}
            {activeTab === "general" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">Navbar Configuration</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Logo / Title</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      value={general.navbarTitle}
                      onChange={(e) => setGeneral({...general, navbarTitle: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">Section Titles & Subtitles</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(general.sections).map(([key, section]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <label className="block text-sm font-semibold text-green-700 uppercase tracking-wide mb-3">{key}</label>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                            <input 
                              type="text" 
                              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"
                              value={section.title}
                              onChange={(e) => setGeneral({
                                ...general,
                                sections: {
                                  ...general.sections,
                                  [key]: { ...section, title: e.target.value }
                                }
                              })}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Subtitle</label>
                            <textarea 
                              rows={2}
                              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"
                              value={section.subtitle}
                              onChange={(e) => setGeneral({
                                ...general,
                                sections: {
                                  ...general.sections,
                                  [key]: { ...section, subtitle: e.target.value }
                                }
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: FOOD GALLERY */}
            {activeTab === "gallery" && (
              <div>
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h3 className="text-lg font-medium text-gray-800">Manage Food Items</h3>
                  <button className="flex items-center text-sm bg-green-700 text-white px-3 py-1.5 rounded-md hover:bg-green-800">
                    <Plus size={16} className="mr-1" /> Add New Item
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="p-3 text-sm font-semibold text-gray-600">Image</th>
                        <th className="p-3 text-sm font-semibold text-gray-600">Title</th>
                        <th className="p-3 text-sm font-semibold text-gray-600">Description</th>
                        <th className="p-3 text-sm font-semibold text-gray-600 w-24">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {foodItems.map(item => (
                        <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-md border" />
                          </td>
                          <td className="p-3 font-medium text-gray-800">{item.title}</td>
                          <td className="p-3 text-gray-500 text-sm max-w-xs truncate">{item.desc}</td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded"><Edit2 size={16} /></button>
                              <button className="text-red-600 hover:bg-red-50 p-1.5 rounded"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: EVENTS */}
            {activeTab === "events" && (
              <div>
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h3 className="text-lg font-medium text-gray-800">Manage Events Timeline</h3>
                  <button className="flex items-center text-sm bg-green-700 text-white px-3 py-1.5 rounded-md hover:bg-green-800">
                    <Plus size={16} className="mr-1" /> Add Event
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="p-3 text-sm font-semibold text-gray-600 w-20">Year</th>
                        <th className="p-3 text-sm font-semibold text-gray-600">Title</th>
                        <th className="p-3 text-sm font-semibold text-gray-600">Description</th>
                        <th className="p-3 text-sm font-semibold text-gray-600">Media URL</th>
                        <th className="p-3 text-sm font-semibold text-gray-600 w-24">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((evt, index) => (
                        <tr key={evt.id || index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3 font-bold text-green-700">{evt.year}</td>
                          <td className="p-3 font-medium text-gray-800">{evt.title}</td>
                          <td className="p-3 text-gray-500 text-sm max-w-xs truncate">{evt.description}</td>
                          <td className="p-3 text-blue-500 text-sm truncate max-w-[150px]">{evt.mediaUrl}</td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded"><Edit2 size={16} /></button>
                              <button className="text-red-600 hover:bg-red-50 p-1.5 rounded"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: MENU */}
            {activeTab === "menu" && (
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-6 border-b pb-4">Menu Section Images</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {menuColumns.map((col, colIndex) => (
                    <div key={col.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-700 mb-4">Column {colIndex + 1}</h4>
                      <div className="space-y-4">
                        {col.images.map((img, imgIndex) => (
                          <div key={imgIndex} className="bg-white p-3 rounded shadow-sm border border-gray-100 flex items-start space-x-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={img} alt="Menu" className="w-12 h-12 object-cover rounded bg-gray-200" />
                            <div className="flex-1">
                              <label className="text-xs font-medium text-gray-500 mb-1 block">Image URL {imgIndex + 1}</label>
                              <input 
                                type="text"
                                value={img}
                                onChange={(e) => {
                                  const newCols = [...menuColumns];
                                  newCols[colIndex].images[imgIndex] = e.target.value;
                                  setMenuColumns(newCols);
                                }}
                                className="w-full text-xs px-2 py-1.5 border border-gray-300 rounded"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: TESTIMONIALS */}
            {activeTab === "testimonials" && (
              <div>
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h3 className="text-lg font-medium text-gray-800">Manage Testimonials</h3>
                  <button className="flex items-center text-sm bg-green-700 text-white px-3 py-1.5 rounded-md hover:bg-green-800">
                    <Plus size={16} className="mr-1" /> Add Testimonial
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="p-3 text-sm font-semibold text-gray-600">Reviewer Name</th>
                        <th className="p-3 text-sm font-semibold text-gray-600">Date</th>
                        <th className="p-3 text-sm font-semibold text-gray-600">Review Text</th>
                        <th className="p-3 text-sm font-semibold text-gray-600 w-24">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testimonials.map((t) => (
                        <tr key={t.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3 font-medium text-gray-800">
                            {t.name}
                            <div className="text-xs text-gray-400 font-normal">{t.role}</div>
                          </td>
                          <td className="p-3 text-gray-600 text-sm">{t.date}</td>
                          <td className="p-3 text-gray-500 text-sm max-w-xs truncate italic">"{t.text}"</td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded"><Edit2 size={16} /></button>
                              <button className="text-red-600 hover:bg-red-50 p-1.5 rounded"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
