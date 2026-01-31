import { useState } from 'react';
import { CommunityHeader, Footer } from '../components/blocks';
import { SearchIcon } from '../components/ui/Icons';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';

const contentTypes = ['All', 'Screenshots', 'Artworks', 'Workshop', 'Broadcasts', 'Videos', 'News', 'Guides', 'Reviews'];

interface CommunityPost {
  id: string;
  type: 'screenshot' | 'review' | 'video' | 'artwork';
  game: string;
  author: string;
  authorAvatar: string;
  content: string;
  image?: string;
  date: string;
  likes: number;
  comments: number;
  isRecommended?: boolean;
  playTime?: string;
}

const communityPosts: CommunityPost[] = [
  {
    id: '1',
    type: 'screenshot',
    game: 'Elite Dangerous',
    author: 'Juxtopposed',
    authorAvatar: '',
    content: 'me when uuuuh space',
    image: './assets/images/elite-dangerous.jpg',
    date: '12 Sep 2023',
    likes: 5,
    comments: 2,
  },
  {
    id: '2',
    type: 'review',
    game: 'Stellaris',
    author: 'Juxtopposed',
    authorAvatar: '',
    content: 'best game ever\nbest game ever\nbest game ever\nbest game ever\nbest game ever\nbest game ever\nbest game ever\nbest game ever\nbest game ever\nbest game ever\nbest game ever',
    date: '13 Sep 2023',
    likes: 374,
    comments: 0,
    isRecommended: true,
    playTime: '2,130.2 hrs on record (2,069.9 hrs at review time)',
  },
  {
    id: '3',
    type: 'review',
    game: 'Elder Scrolls V: Skyrim',
    author: 'Juxtopposed',
    authorAvatar: '',
    content: "It's fine i guess lol\n\nedit: 10/10\nedit 2: 100/10\nedit 3: 1000/10",
    date: '12 Sep 2023',
    likes: 374,
    comments: 0,
    isRecommended: true,
    playTime: '2,130.2 hrs on record (2,069.9 hrs at review time)',
  },
  {
    id: '4',
    type: 'video',
    game: 'Elden Ring',
    author: 'Juxtopposed',
    authorAvatar: '',
    content: '',
    image: './assets/images/elden-ring.jpg',
    date: '12 Sep 2023',
    likes: 0,
    comments: 0,
  },
];

export default function CommunityPage() {
  const [activeType, setActiveType] = useState('All');
  const [viewMode, setViewMode] = useState<'Most Popular' | 'Most Recent'>('Most Popular');

  return (
    <div className="min-h-screen bg-bg-main">
      <CommunityHeader />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-primary mb-4">
            Welcome to Steam Community. Search for a game to get started.
          </h1>
          <div className="max-w-md mx-auto">
            <Input
              placeholder="Search..."
              icon={<SearchIcon className="w-5 h-5" />}
              className="text-base py-3"
            />
          </div>
        </div>

        {/* Content Types */}
        <div className="flex items-center justify-between mb-6">
          <nav className="flex items-center gap-1">
            {contentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 text-sm font-medium rounded-[--radius-sm] transition-colors ${
                  activeType === type
                    ? 'bg-primary text-bg-main'
                    : 'text-text-dim hover:text-text-main hover:bg-bg-hover'
                }`}
              >
                {type}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2 text-sm text-text-dim">
            <span>Viewing</span>
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value as typeof viewMode)}
              className="bg-bg-highlight border border-bg-hover rounded-[--radius-sm] px-3 py-1.5 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option>Most Popular</option>
              <option>Most Recent</option>
            </select>
          </div>
        </div>

        {/* Community Posts Grid */}
        <div className="grid grid-cols-2 gap-6">
          {communityPosts.map((post) => (
            <div
              key={post.id}
              className="bg-bg-highlight rounded-[--radius-lg] overflow-hidden"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between p-4 border-b border-bg-hover">
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium text-text-main">{post.game}</span>
                  {post.type === 'review' && (
                    <Badge variant={post.isRecommended ? 'primary' : 'danger'}>
                      {post.isRecommended ? 'Recommended' : 'Not Recommended'}
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-text-dim">Posted on {post.date}</div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-blue-500" />
                <div>
                  <span className="text-sm font-medium text-primary">{post.author}</span>
                  {post.type === 'review' && (
                    <span className="text-xs text-text-dim ml-2">
                      {post.isRecommended ? '3 reviews' : ''}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              {post.type === 'review' && post.playTime && (
                <div className="px-4 pb-2">
                  <div className="flex items-center gap-2 text-xs text-text-dim">
                    <Badge variant="primary" size="sm">Recommended</Badge>
                    <span>{post.playTime}</span>
                  </div>
                </div>
              )}

              {post.image && (
                <div className="px-4 pb-4">
                  <div className="relative aspect-video rounded-[--radius-md] overflow-hidden bg-bg-main">
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <span className="text-text-dim">Image placeholder</span>
                    </div>
                    {post.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-bg-main/80 flex items-center justify-center">
                          <svg className="w-8 h-8 text-text-main ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 3.5V16.5L17 10L5 3.5Z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {post.content && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-text-main whitespace-pre-line">{post.content}</p>
                </div>
              )}

              {/* Interaction Bar for Reviews */}
              {post.type === 'review' && (
                <div className="px-4 py-3 border-t border-bg-hover">
                  <p className="text-sm text-text-dim mb-3">Was this review helpful?</p>
                  <div className="flex items-center gap-4 text-sm">
                    <button className="flex items-center gap-1 text-text-dim hover:text-text-main transition-colors">
                      <span>Yes</span>
                      <span className="text-primary">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-text-dim hover:text-text-main transition-colors">
                      <span>No</span>
                      <span className="text-text-dim">0</span>
                    </button>
                    <button className="flex items-center gap-1 text-text-dim hover:text-text-main transition-colors">
                      <span>Funny</span>
                      <span className="text-accent-yellow">6</span>
                    </button>
                    <button className="flex items-center gap-1 text-text-dim hover:text-text-main transition-colors">
                      <span>Award</span>
                      <span className="text-accent-yellow">5</span>
                    </button>
                    <button className="flex items-center gap-1 text-text-dim hover:text-text-main transition-colors ml-auto">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 10C18 14.42 14.42 18 10 18C8.5 18 7.1 17.6 5.9 16.9L2 18L3.1 14.1C2.4 12.9 2 11.5 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10Z"/>
                      </svg>
                      <span>{post.comments}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Interaction Bar for Screenshots/Videos */}
              {(post.type === 'screenshot' || post.type === 'video') && (
                <div className="px-4 py-3 border-t border-bg-hover flex items-center gap-4 text-sm text-text-dim">
                  <button className="flex items-center gap-1 hover:text-text-main transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 10L9 13L14 7"/>
                    </svg>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-text-main transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 10C18 14.42 14.42 18 10 18C8.5 18 7.1 17.6 5.9 16.9L2 18L3.1 14.1C2.4 12.9 2 11.5 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10Z"/>
                    </svg>
                    <span>{post.comments}</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
