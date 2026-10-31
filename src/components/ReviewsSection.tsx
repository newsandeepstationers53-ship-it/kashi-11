import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, Plus } from 'lucide-react';
import { REVIEWS_LIST, ReviewItem } from '../data/repairData.ts';

interface ReviewsSectionProps {
  language: 'en' | 'hi';
}

const STORAGE_KEY = 'kashi_repair_reviews';

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const isHi = language === 'hi';

  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return REVIEWS_LIST;
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newLoc, setNewLoc] = useState('');
  const [newDevice, setNewDevice] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const item: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newName.trim(),
      location: newLoc.trim() || 'Raebareli',
      rating: newRating,
      date: 'Just now',
      comment: newComment.trim(),
      deviceRepaired: newDevice.trim() || 'Device Repair'
    };

    const updated = [item, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }

    setNewName('');
    setNewLoc('');
    setNewDevice('');
    setNewComment('');
    setShowAddModal(false);
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
              <MessageSquareQuote className="w-4 h-4" />
              <span>{isHi ? 'रायबरेली के ग्राहकों की राय' : 'Raebareli Customer Feedback'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
              {isHi ? 'हमारे काम पर स्थानीय ग्राहकों का भरोसा' : 'Trusted by Thousands of Residents in Raebareli'}
            </h2>
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.9 / 5.0</span>
              <span aria-hidden="true">·</span>
              <span>{isHi ? '1,200+ संतुष्ट स्थानीय ग्राहक' : 'Over 1,200+ Local Repairs Verified'}</span>
            </div>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold rounded-xl transition-colors shrink-0 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 text-amber-600" />
            <span>{isHi ? 'अपना रिव्यू लिखें' : 'Write a Review'}</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs text-slate-400 ml-1 font-mono">{rev.date}</span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                  <span className="text-[11px] text-slate-500 block">{rev.location}</span>
                </div>
                <div className="text-[10px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  {rev.deviceRepaired}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {isHi ? 'काशी कंप्यूटर के लिए रिव्यू लिखें' : 'Share Your Experience'}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {isHi ? 'आपकी प्रतिक्रिया हमारे लिए बहुत मूल्यवान है।' : 'Your honest feedback helps your neighbors in Raebareli.'}
              </p>

              <form onSubmit={handleAddReview} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isHi ? 'आपका नाम' : 'Your Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isHi ? 'स्थान / मोहल्ला' : 'Location (Raebareli)'}
                    </label>
                    <input
                      type="text"
                      value={newLoc}
                      onChange={(e) => setNewLoc(e.target.value)}
                      placeholder="e.g. Rajghat / Civil Lines"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isHi ? 'रिपेयर किया गया उपकरण' : 'Device Repaired'}
                    </label>
                    <input
                      type="text"
                      value={newDevice}
                      onChange={(e) => setNewDevice(e.target.value)}
                      placeholder="e.g. HP Laptop / Redmi Screen"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isHi ? 'रेटिंग (1 से 5 स्टार)' : 'Rating (1 to 5 Stars)'}
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className={`p-2 rounded-lg border text-xs font-bold flex items-center gap-1 ${
                          newRating >= star 
                            ? 'bg-amber-50 border-amber-400 text-amber-700' 
                            : 'border-slate-200 text-slate-400'
                        }`}
                      >
                        <Star className={`w-3.5 h-3.5 ${newRating >= star ? 'fill-current text-amber-500' : ''}`} />
                        <span>{star}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isHi ? 'आपका अनुभव' : 'Your Review'} *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={isHi ? 'सर्विस कैसी थी? काम कितनी देर में हुआ?' : 'How was the repair quality, timing, and behavior?'}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    {isHi ? 'रद्द करें' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors"
                  >
                    {isHi ? 'रिव्यू सबमिट करें' : 'Post Review'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
